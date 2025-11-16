# Ordering Home 点餐系统

一个基于 [HowToCook](https://github.com/Anduin2017/HowToCook) 项目的前端点餐系统，帮助程序员解决"今天吃什么"的难题。

## 项目概述

Ordering Home 是一个简单易用的点餐系统，专为程序员设计。系统提供菜品浏览、搜索、筛选和预选功能，还包含独特的"选择困难症专属选项"功能，帮助用户随机选择菜品。

## 前端描述

### 技术栈
- HTML5
- CSS3
- JavaScript (ES6+)
- 响应式设计

### 功能特性
1. **菜品浏览**：按分类浏览所有菜品
2. **搜索功能**：通过关键词搜索菜品
3. **难度筛选**：根据制作难度筛选菜品
4. **菜品预选**：将喜欢的菜品加入预选菜单
5. **随机选择**：独特的"选择困难症专属选项"，帮助用户随机选择菜品
6. **菜品详情**：查看菜品详细信息和制作指南链接

### 项目结构
```
ordering-app/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   ├── app.js          # 主要逻辑
│   └── data.js         # 菜品数据
└── img/                # 菜品图片
```

## 启动说明

### 本地运行
1. 克隆或下载项目到本地
2. 进入 `ordering-app` 目录
3. 使用浏览器直接打开 `index.html` 文件即可

或者使用本地服务器运行（推荐）：
```bash
# 使用Python 3
cd ordering-app
python -m http.server 8000

# 使用Node.js (需要安装http-server)
cd ordering-app
npx http-server -p 8000
```

然后在浏览器中访问 `http://localhost:8000`

### 系统要求
- 现代浏览器（支持ES6+）
- 网络连接（用于加载外部资源）

## 脚本说明

### generate-all.js
用于从 [HowToCook](https://github.com/Anduin2017/HowToCook) 项目生成菜品数据的Node.js脚本。

功能：
1. 克隆 [HowToCook](https://github.com/Anduin2017/HowToCook) 仓库
2. 扫描菜品目录，提取菜品信息
3. 生成 [data.js](file:///opt/code/web/Ordering-home/ordering-app/js/data.js) 数据文件
4. 复制菜品图片到 [img](file:///opt/code/web/Ordering-home/ordering-app/img) 目录并重命名

使用方法：
```bash
node generate-all.js
```

### update-menu.sh
用于检查依赖和更新数据的Shell脚本。

功能：
1. 检查Node.js和Git是否安装
2. 验证项目结构完整性
3. 执行数据更新任务
4. 自动备份现有数据文件

使用方法：
```bash
# 检查依赖
./update-menu.sh check

# 执行数据更新
./update-menu.sh update

# 检查依赖并执行数据更新
./update-menu.sh run
```

### cron-env.sh
用于在crontab环境中设置正确环境变量的Shell脚本，解决定时任务中常见的环境问题。

## 定时任务配置

项目支持通过crontab定时更新菜品数据：

```bash
# 每天凌晨2点执行更新
0 2 * * * /opt/code/web/Ordering-home/cron-env.sh /opt/code/web/Ordering-home/update-menu.sh update >> /opt/code/web/Ordering-home/update.log 2>&1
```

## 关于 HowToCook

[HowToCook](https://github.com/Anduin2017/HowToCook) 是一个程序员做饭指南开源项目，提供了大量适合程序员的菜谱。本项目使用该仓库中的菜谱数据作为菜品来源，通过自动化脚本定期同步最新数据。

## 许可证

MIT License

## 贡献

欢迎提交Issue和Pull Request来改进项目。