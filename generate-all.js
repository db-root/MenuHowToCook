const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 分类映射
const categoryMapping = {
    'aquatic': { id: 'aquatic', name: '水产', icon: '🐟' },
    'breakfast': { id: 'breakfast', name: '早餐', icon: '🥞' },
    'condiment': { id: 'condiment', name: '酱料', icon: '🧂' },
    'dessert': { id: 'dessert', name: '甜品', icon: '🍰' },
    'drink': { id: 'drink', name: '饮料', icon: '🥤' },
    'meat_dish': { id: 'meat_dish', name: '荤菜', icon: '🍖' },
    'semi-finished': { id: 'semi-finished', name: '半成品加工', icon: '🔧' },
    'soup': { id: 'soup', name: '汤与粥', icon: '🍲' },
    'staple': { id: 'staple', name: '主食', icon: '🍚' },
    'vegetable_dish': { id: 'vegetable_dish', name: '素菜', icon: '🥗' }
};

// 获取分类名称
function getCategoryName(dirName) {
    return dirName;
}

// 获取菜品名称（去除.md后缀）
function getDishName(fileName) {
    return fileName.replace('.md', '');
}

// 生成菜品链接
function generateDishLink(categoryId, dishName, isDirectory) {
    const baseUrl = 'https://cook.elisky.cn';
    if (isDirectory) {
        // 如果是目录形式的菜品，链接格式为：https://cook.elisky.cn/dishes/{category}/{dishName}/{dishName}
        return `${baseUrl}/dishes/${categoryId}/${dishName}/${dishName}`;
    } else {
        // 如果是文件形式的菜品，链接格式为：https://cook.elisky.cn/dishes/{category}/{dishName}
        return `${baseUrl}/dishes/${categoryId}/${dishName}`;
    }
}

// 查找菜品图片
function findDishImage(dishDir, dishName) {
    try {
        const files = fs.readdirSync(dishDir);
        // 规范化菜品名称，去除可能的特殊字符干扰
        const normalizedDishName = dishName.trim().toLowerCase();
        
        // 过滤出图片文件
        const imageFiles = files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp'].includes(ext);
        });
        
        // 如果只有一个图片文件，直接返回该文件
        if (imageFiles.length === 1) {
            return imageFiles[0];
        }
        
        // 查找与菜品同名的图片文件
        const imageFile = imageFiles.find(file => {
            const name = path.parse(file).name;
            const ext = path.extname(file).toLowerCase();
            const normalizedName = name.trim().toLowerCase();
            
            // 使用多种匹配方式:
            // 1. 完全匹配
            // 2. 包含匹配
            // 3. 去除"成品"后的匹配
            const withoutChengpin = normalizedName.replace('成品', '');
            return (normalizedName === normalizedDishName || 
                    normalizedName.includes(normalizedDishName) ||
                    normalizedDishName.includes(normalizedName) ||
                    withoutChengpin === normalizedDishName ||
                    normalizedDishName.includes(withoutChengpin)) && 
                   ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp'].includes(ext);
        });
        return imageFile || null;
    } catch (err) {
        console.error(`查找图片失败 ${dishDir}:`, err.message);
        return null;
    }
}

// 解析菜品描述
function parseDishDescription(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        // 查找描述信息（在标题之后的第一段文字）
        const lines = content.split('\n');
        let inDescription = false;
        for (const line of lines) {
            const trimmedLine = line.trim();
            // 跳过空行和标题行
            if (!trimmedLine) continue;
            if (trimmedLine.startsWith('#')) continue;
            
            // 跳过注释行（包括HTML注释、WARNING和---等）
            if (trimmedLine.startsWith('<!--') || trimmedLine.startsWith('- **WARNING**') || trimmedLine === '---') continue;
            
            // 跳过预估烹饪难度行
            if (trimmedLine.startsWith('预估烹饪难度：')) continue;
            
            // 如果是图片行，跳过
            if (trimmedLine.startsWith('!')) continue;
            
            // 第一个有效文本行就是描述
            return trimmedLine.substring(0, 100) + (trimmedLine.length > 100 ? '...' : '');
        }
        return '暂无描述';
    } catch (err) {
        return '暂无描述';
    }
}

// 解析菜品烹饪难度
function parseDishDifficulty(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        
        for (const line of lines) {
            const trimmedLine = line.trim();
            // 查找包含"预估烹饪难度："的行
            if (trimmedLine.startsWith('预估烹饪难度：')) {
                // 提取星号数量
                const stars = trimmedLine.match(/★/g);
                return stars ? stars.length : 0;
            }
        }
        return 0; // 默认难度为0
    } catch (err) {
        return 0; // 出错时默认难度为0
    }
}

// 递归创建目录
function mkdirSyncRecursive(directory) {
    const parentDir = path.dirname(directory);
    if (!fs.existsSync(parentDir)) {
        mkdirSyncRecursive(parentDir);
    }
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
    }
}

// 递归查找所有图片文件，并记录对应的菜品信息
function findAllImages(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            findAllImages(filePath, fileList);
        } else {
            const ext = path.extname(file);
            // 不转换大小写，保持原始扩展名
            if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.JPG', '.JPEG', '.PNG', '.GIF', '.WEBP', '.BMP'].includes(ext)) {
                // 获取相对路径信息
                const relativePath = path.relative(dir, filePath);
                const pathParts = filePath.split(path.sep);
                
                // 查找dishes目录位置
                const dishesIndex = pathParts.indexOf('dishes');
                if (dishesIndex !== -1 && dishesIndex < pathParts.length - 2) {
                    const category = pathParts[dishesIndex + 1];
                    const dishName = pathParts[dishesIndex + 2];
                    
                    fileList.push({
                        sourcePath: filePath,
                        category: category,
                        dishName: dishName,
                        fileName: file,
                        ext: ext  // 保持原始扩展名
                    });
                }
            }
        }
    });
    
    return fileList;
}

// 扫描菜品目录
function scanDishes(dishesDir) {
    const dishes = {};
    
    // 初始化分类
    Object.keys(categoryMapping).forEach(categoryId => {
        dishes[categoryId] = [];
    });
    
    // 遍历分类目录
    const categories = fs.readdirSync(dishesDir);
    
    for (const category of categories) {
        const categoryPath = path.join(dishesDir, category);
        if (!fs.statSync(categoryPath).isDirectory()) continue;
        
        // 跳过模板目录
        if (category === 'template') continue;
        
        const categoryId = getCategoryName(category);
        if (!dishes[categoryId]) {
            dishes[categoryId] = [];
        }
        
        // 遍历分类下的菜品文件
        const items = fs.readdirSync(categoryPath);
        let dishIndex = 1;
        for (const item of items) {
            const itemPath = path.join(categoryPath, item);
            const stat = fs.statSync(itemPath);
            
            if (stat.isFile() && item.endsWith('.md')) {
                // 直接在分类目录下的MD文件
                const dishName = getDishName(item);
                const description = parseDishDescription(itemPath);
                const difficulty = parseDishDifficulty(itemPath);
                const imageName = findDishImage(categoryPath, dishName);
                const dishLink = generateDishLink(categoryId, dishName, false); // 添加链接字段
                
                dishes[categoryId].push({
                    id: `${categoryId}_${dishIndex++}`,
                    name: dishName,
                    description: description,
                    difficulty: difficulty,
                    category: categoryId,
                    imageName: imageName,
                    link: dishLink // 添加链接字段
                });
            } else if (stat.isDirectory()) {
                // 子目录中的菜品
                const subItems = fs.readdirSync(itemPath);
                const mdFiles = subItems.filter(file => file.endsWith('.md'));
                
                if (mdFiles.length > 0) {
                    // 使用子目录名称作为菜品名称
                    const dishName = item;
                    const description = parseDishDescription(path.join(itemPath, mdFiles[0]));
                    const difficulty = parseDishDifficulty(path.join(itemPath, mdFiles[0]));
                    const imageName = findDishImage(itemPath, dishName);
                    const dishLink = generateDishLink(categoryId, dishName, true); // 添加链接字段
                    
                    dishes[categoryId].push({
                        id: `${categoryId}_${dishIndex++}`,
                        name: dishName,
                        description: description,
                        difficulty: difficulty,
                        category: categoryId,
                        imageName: imageName,
                        link: dishLink // 添加链接字段
                    });
                }
            }
        }
    }
    
    return dishes;
}

// 生成数据文件
function generateDataFile(dishes, outputPath) {
    // 为分类数据添加"全部"分类（但不在数据中包含all分类的菜品）
    const allCategories = [
        { id: 'all', name: '全部', icon: '🍽️' },
        ...Object.values(categoryMapping)
    ];
    
    const content = `// 菜品分类数据
const categories = ${JSON.stringify(allCategories, null, 2)};

// 菜品数据（从HowToCook项目自动生成）
const dishes = ${JSON.stringify(dishes, null, 2)};

// 获取菜品图片路径
function getDishImagePath(categoryId, dishName, imageName) {
    if (!imageName) return null;
    
    // 根据菜品ID查找对应的图片文件名
    const categoryDishes = dishes[categoryId];
    if (categoryDishes) {
        const dish = categoryDishes.find(d => d.name === dishName && d.imageName === imageName);
        if (dish && dish.id) {
            // 使用菜品ID作为图片文件名
            const ext = imageName.substring(imageName.lastIndexOf('.'));
            return \`img/\${dish.id}\${ext}\`;
        }
    }
    
    return null;
}

// 获取指定分类下的所有菜品
function getDishesByCategory(categoryId) {
    if (categoryId === 'all') {
        // 返回所有分类的菜品
        let allDishes = [];
        Object.keys(dishes).forEach(key => {
            allDishes = allDishes.concat(dishes[key]);
        });
        return allDishes;
    } else {
        // 返回特定分类的菜品
        return dishes[categoryId] || [];
    }
}
`;
    
    fs.writeFileSync(outputPath, content, 'utf8');
    console.log(`数据文件已生成: ${outputPath}`);
    
    // 计算总菜品数
    let totalDishes = 0;
    Object.keys(dishes).forEach(categoryId => {
        totalDishes += dishes[categoryId].length;
    });
    console.log(`共收录 ${totalDishes} 道菜品`);
}

// 复制图片文件到目标目录，使用英文命名
function copyImages(dishes, sourceDir, targetDir) {
    // 清空目标目录
    if (fs.existsSync(targetDir)) {
        const files = fs.readdirSync(targetDir);
        files.forEach(file => {
            fs.unlinkSync(path.join(targetDir, file));
        });
    } else {
        mkdirSyncRecursive(targetDir);
    }
    
    console.log('正在查找图片文件...');
    const imageFiles = findAllImages(sourceDir);
    console.log(`找到 ${imageFiles.length} 个图片文件`);
    
    // 构建菜品ID映射
    const dishIdMap = {};
    Object.keys(dishes).forEach(categoryId => {
        dishes[categoryId].forEach(dish => {
            if (dish.imageName) {
                // 构造映射键 (注意保持原始文件名大小写)
                const mapKey = `${categoryId}/${dish.name}/${dish.imageName}`;
                dishIdMap[mapKey] = dish.id;
            }
        });
    });
    
    console.log(`构建了 ${Object.keys(dishIdMap).length} 个菜品映射`);
    
    let copiedCount = 0;
    imageFiles.forEach(imageInfo => {
        const { sourcePath, category, dishName, fileName, ext } = imageInfo;
        
        // 构造映射键 (注意保持原始文件名大小写)
        const mapKey = `${category}/${dishName}/${fileName}`;
        const dishId = dishIdMap[mapKey];
        
        if (dishId) {
            // 使用菜品ID作为新文件名，保持原始扩展名
            const targetFileName = `${dishId}${ext}`;
            const targetPath = path.join(targetDir, targetFileName);
            
            // 复制文件
            try {
                fs.copyFileSync(sourcePath, targetPath);
                copiedCount++;
                console.log(`已复制: ${fileName} -> ${targetFileName}`);
            } catch (err) {
                console.error(`复制失败: ${fileName}`, err.message);
            }
        } else {
            console.warn(`未找到映射ID，跳过: ${mapKey}`);
        }
    });
    
    console.log(`总共复制了 ${copiedCount} 个图片文件到 ${targetDir}`);
}

// 主函数
function main() {
    // 使用相对路径，基于当前文件所在目录
    const repoUrl = 'https://github.eli1.top/https://github.com/Anduin2017/HowToCook.git';
    const targetDir = path.join(__dirname, 'ordering-app');
    const howToCookDir = path.join(targetDir, 'HowToCook');
    const dishesDir = path.join(howToCookDir, 'dishes');
    const outputPath = path.join(__dirname, 'ordering-app', 'js', 'data.js');
    const imgDir = path.join(__dirname, 'ordering-app', 'img');
    
    // 检查目标目录是否存在，如果存在则删除
    if (fs.existsSync(howToCookDir)) {
        console.log('删除已存在的HowToCook目录...');
        fs.rmSync(howToCookDir, { recursive: true, force: true });
    }
    
    // 克隆仓库
    console.log('正在下载菜谱仓库...');
    try {
        execSync(`git clone ${repoUrl} ${howToCookDir}`, { stdio: 'inherit' });
        console.log('菜谱仓库下载完成!');
    } catch (error) {
        console.error('菜谱仓库下载失败:', error.message);
        process.exit(1);
    }
    
    if (!fs.existsSync(dishesDir)) {
        console.error(`菜品目录不存在: ${dishesDir}`);
        process.exit(1);
    }
    
    console.log('正在扫描菜品...');
    const dishes = scanDishes(dishesDir);
    
    console.log('正在生成数据文件...');
    generateDataFile(dishes, outputPath);
    
    console.log('正在复制图片文件...');
    copyImages(dishes, dishesDir, imgDir);
    
    console.log('完成!');
}

main();