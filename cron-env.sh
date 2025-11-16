#!/bin/bash
# 此脚本用于在crontab中设置正确的环境变量

# 设置基本环境变量
export PATH="/usr/local/bin:/usr/bin:/bin"
export HOME="/root"

# 如果有Node.js的特殊路径需求，可以在这里设置
# export PATH="/usr/local/node/bin:$PATH"

# 设置工作目录
cd /opt/code/web/Ordering-home

# 执行传入的命令
exec "$@"