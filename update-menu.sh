#!/bin/bash

# 脚本功能：
# 1. 检查项目运行依赖
# 2. 用于crontab定时任务执行
# 3. 解决crontab中可能遇到的项目目录问题

# 设置脚本在遇到错误时立即退出
set -e

# 获取脚本所在目录的绝对路径
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
echo "脚本目录: $SCRIPT_DIR"

# 切换到脚本所在目录
cd "$SCRIPT_DIR"
echo "当前工作目录: $(pwd)"

# 检查Node.js是否安装
check_node() {
    if command -v node >/dev/null 2>&1; then
        NODE_VERSION=$(node --version)
        echo "✓ Node.js 已安装: $NODE_VERSION"
        return 0
    else
        echo "✗ 未找到 Node.js，请先安装 Node.js"
        return 1
    fi
}

# 检查Git是否安装
check_git() {
    if command -v git >/dev/null 2>&1; then
        GIT_VERSION=$(git --version)
        echo "✓ Git 已安装: $GIT_VERSION"
        return 0
    else
        echo "✗ 未找到 Git，请先安装 Git"
        return 1
    fi
}

# 检查项目目录结构
check_project_structure() {
    if [ -f "generate-all.js" ]; then
        echo "✓ 找到 generate-all.js 脚本"
    else
        echo "✗ 未找到 generate-all.js 脚本"
        return 1
    fi
    
    if [ -d "ordering-app" ]; then
        echo "✓ 找到 ordering-app 目录"
    else
        echo "✗ 未找到 ordering-app 目录"
        return 1
    fi
    
    return 0
}

# 执行数据更新任务
update_data() {
    echo "开始执行数据更新任务..."
    
    # 备份现有数据文件（如果存在）
    if [ -f "ordering-app/js/data.js" ]; then
        BACKUP_NAME="data.js.backup.$(date +%Y%m%d_%H%M%S)"
        cp "ordering-app/js/data.js" "$BACKUP_NAME"
        echo "已备份当前数据文件到: $BACKUP_NAME"
    fi
    
    # 执行数据生成脚本
    echo "运行 generate-all.js 脚本..."
    if node generate-all.js; then
        echo "✓ 数据更新成功完成"
        return 0
    else
        echo "✗ 数据更新失败"
        return 1
    fi
}

# 显示使用说明
show_usage() {
    echo "使用方法:"
    echo "  $0 check          - 检查项目依赖"
    echo "  $0 update         - 执行数据更新"
    echo "  $0 run            - 检查依赖并执行数据更新"
    echo ""
    echo "定时任务配置示例 (crontab -e):"
    echo "  # 每天凌晨2点执行更新"
    echo "  0 2 * * * $SCRIPT_DIR/cron-env.sh $SCRIPT_DIR/update-menu.sh update >> $SCRIPT_DIR/update.log 2>&1"
    echo ""
    echo "环境配置脚本(cron-env.sh)的作用:"
    echo "  - 设置正确的PATH环境变量"
    echo "  - 设置HOME目录"
    echo "  - 确保在正确的目录中执行命令"
    echo "  - 解决crontab中常见的环境变量问题"
}

# 主程序逻辑
main() {
    case "${1:-}" in
        "check")
            echo "=== 检查项目依赖 ==="
            check_node && check_git && check_project_structure
            ;;
        "update")
            echo "=== 执行数据更新 ==="
            check_project_structure || exit 1
            update_data
            ;;
        "run")
            echo "=== 检查依赖并执行数据更新 ==="
            check_node && check_git && check_project_structure || exit 1
            update_data
            ;;
        *)
            show_usage
            ;;
    esac
}

# 执行主程序
main "$@"