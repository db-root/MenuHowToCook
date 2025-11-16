// 全局变量
let selectedCategory = 'all';
let searchKeyword = '';
let selectedDifficulty = 0; // 0表示不限制难度

// 当前选中的分类
// 已选菜品列表
let orderedDishes = [];
// 搜索关键词
// 购物车是否展开
let isCartExpanded = false;
// 当前查看的菜品
let currentDish = null;
// 随机选菜功能相关变量
let selectedRandomCategories = ['all']; // 默认选择全部
let randomDishResult = null; // 随机选中的菜品
// 弹窗来源跟踪变量
let modalSource = ''; // 'random' 表示来自随机选择窗口，其他值或空表示正常来源

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    renderCategories();
    setupEventListeners();
    
    // 默认选择"全部"分类
    selectCategory('all');
    
    // 添加搜索框事件监听
    const searchInput = document.getElementById('dish-search');
    searchInput.addEventListener('input', function(e) {
        searchKeyword = e.target.value.trim();
        renderDishes(selectedCategory);
    });
    
    // 添加难度筛选按钮事件监听
    const difficultyButtons = document.querySelectorAll('.difficulty-btn');
    difficultyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 更新选中的难度
            selectedDifficulty = parseInt(this.dataset.difficulty);
            
            // 更新按钮的激活状态
            difficultyButtons.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.difficulty === selectedDifficulty.toString());
            });
            
            // 重新渲染菜品
            renderDishes(selectedCategory);
        });
    });
    
    // 添加购物车事件监听
    setupCartEventListeners();
    
    // 初始化购物车状态为收起
    const cartContent = document.getElementById('cart-content');
    const cartToggle = document.getElementById('cart-toggle');
    cartContent.classList.add('collapsed');
    cartToggle.textContent = '展开';
    updateCartDisplay();
    
    // 设置弹窗事件监听器
    setupModalEventListeners();
    
    // 设置随机选菜功能事件监听器
    setupRandomDishEventListeners();
});

// 渲染分类列表
function renderCategories() {
    const categoryList = document.getElementById('category-list');
    categoryList.innerHTML = '';
    
    categories.forEach(category => {
        const li = document.createElement('li');
        li.dataset.category = category.id;
        li.innerHTML = `${category.icon} ${category.name}`;
        li.addEventListener('click', () => selectCategory(category.id));
        categoryList.appendChild(li);
    });
}

// 选择分类
function selectCategory(categoryId) {
    selectedCategory = categoryId;
    
    // 更新分类列表的选中状态
    document.querySelectorAll('#category-list li').forEach(li => {
        li.classList.toggle('active', li.dataset.category === categoryId);
    });
    
    // 渲染该分类下的菜品
    renderDishes(categoryId);
}

// 渲染指定分类下的菜品
function renderDishes(categoryId) {
    const dishList = document.getElementById('dish-list');
    // 使用新的函数获取菜品数据
    let categoryDishes = getDishesByCategory(categoryId);
    
    // 应用搜索过滤
    if (searchKeyword) {
        categoryDishes = categoryDishes.filter(dish => 
            dish.name.toLowerCase().includes(searchKeyword.toLowerCase())
        );
    }
    
    // 应用难度过滤
    if (selectedDifficulty > 0) {
        categoryDishes = categoryDishes.filter(dish => 
            dish.difficulty === selectedDifficulty
        );
    }
    
    if (categoryDishes.length === 0) {
        dishList.innerHTML = '<p>该分类下暂无菜品。</p>';
        return;
    }
    
    const dishGrid = document.createElement('div');
    dishGrid.className = 'dish-grid';
    
    categoryDishes.forEach(dish => {
        const dishCard = document.createElement('div');
        dishCard.className = 'dish-card';
        dishCard.dataset.dishId = dish.id;
        
        // 检查菜品是否已被选中
        const isSelected = orderedDishes.some(item => item.id === dish.id);
        dishCard.classList.toggle('selected', isSelected);
        
        // 构建菜品卡片内容（显示名称和难度）
        let cardContent = `<h3>${dish.name}</h3>`;
        
        // 添加难度显示
        if (dish.difficulty && dish.difficulty > 0) {
            const stars = '★'.repeat(dish.difficulty);
            cardContent += `<p class="difficulty">难度: ${stars}</p>`;
        }
        
        dishCard.innerHTML = cardContent;
        
        dishCard.addEventListener('click', () => openDishModal(dish)); // 正常来源不传参数
        dishGrid.appendChild(dishCard);
    });
    
    dishList.innerHTML = '';
    dishList.appendChild(dishGrid);
}

// 打开菜品详情弹窗
function openDishModal(dish, source = '') {
    currentDish = dish;
    modalSource = source; // 记录弹窗来源
    
    // 设置弹窗内容
    document.getElementById('modal-dish-name').textContent = dish.name;
    document.getElementById('modal-dish-description').textContent = dish.description;
    
    // 处理链接显示
    const dishLinkElement = document.getElementById('modal-dish-link');
    const dishLinkAnchor = document.getElementById('modal-dish-link-anchor');
    if (dish.link) {
        dishLinkAnchor.href = dish.link;
        dishLinkElement.style.display = 'block';
    } else {
        dishLinkElement.style.display = 'none';
    }
    
    // 获取图片元素和占位符元素
    const imageElement = document.getElementById('modal-dish-image');
    const placeholderElement = document.getElementById('no-image-placeholder');
    
    // 设置图片
    const imagePath = getDishImagePath(dish.category, dish.name, dish.imageName);
    if (imagePath) {
        imageElement.src = imagePath;
        imageElement.style.display = 'block';
        placeholderElement.style.display = 'none';
        imageElement.onload = function() {
            console.log('图片加载成功:', imagePath);
        };
        imageElement.onerror = function() {
            console.log('图片加载失败:', imagePath);
            imageElement.style.display = 'none';
            placeholderElement.style.display = 'block';
        };
    } else {
        imageElement.style.display = 'none';
        placeholderElement.style.display = 'block';
    }
    
    // 显示弹窗
    document.getElementById('dish-modal').style.display = 'block';
}

// 关闭菜品详情弹窗
function closeModal() {
    document.getElementById('dish-modal').style.display = 'none';
    currentDish = null;
    
    // 如果来自随机选择窗口，则返回随机选择窗口
    if (modalSource === 'random') {
        document.getElementById('random-dish-modal').style.display = 'block';
    }
    
    // 重置弹窗来源
    modalSource = '';
}

// 设置弹窗事件监听器
function setupModalEventListeners() {
    // 关闭按钮
    document.getElementById('close-modal-btn').addEventListener('click', closeModal);
    
    // 添加到预选按钮
    document.getElementById('add-to-cart-btn').addEventListener('click', () => {
        if (currentDish) {
            addToCart(currentDish);
            closeModal();
        }
    });
    
    // 点击弹窗外部关闭弹窗
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('dish-modal');
        if (event.target === modal) {
            closeModal();
        }
    });
}

// 设置随机选菜功能事件监听器
function setupRandomDishEventListeners() {
    // 选择困难症按钮
    document.getElementById('random-dish-btn').addEventListener('click', openRandomDishModal);
    
    // 随机选菜弹窗中的取消按钮
    document.getElementById('cancel-random-btn').addEventListener('click', closeRandomDishModal);
    
    // 点击随机选菜弹窗外部关闭弹窗
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('random-dish-modal');
        if (event.target === modal) {
            closeRandomDishModal();
        }
    });
    
    // 开始随机选择按钮
    document.getElementById('start-random-btn').addEventListener('click', startRandomDishSelection);
    
    // 确认随机选择按钮（看看品相）
    document.getElementById('confirm-random-btn').addEventListener('click', () => {
        if (randomDishResult) {
            closeRandomDishModal();
            openDishModal(randomDishResult, 'random'); // 传入来源参数
        }
    });
    
    // 下一个随机选择按钮
    document.getElementById('next-random-btn').addEventListener('click', () => {
        // 重新开始随机选择
        startRandomDishSelection();
        
        // 隐藏"过，下一个"按钮和"看看品相"按钮
        document.getElementById('next-random-btn').style.display = 'none';
        document.getElementById('confirm-random-btn').style.display = 'none';
    });
}

// 打开随机选菜弹窗
function openRandomDishModal() {
    // 重置状态
    selectedRandomCategories = ['all'];
    randomDishResult = null;
    
    // 渲染分类选择
    renderRandomCategorySelection();
    
    // 隐藏结果区域
    document.getElementById('random-dish-result').style.display = 'none';
    
    // 显示开始按钮，隐藏确认按钮
    document.getElementById('start-random-btn').style.display = 'block';
    document.getElementById('confirm-random-btn').style.display = 'none';
    
    // 显示弹窗
    document.getElementById('random-dish-modal').style.display = 'block';
}

// 关闭随机选菜弹窗
function closeRandomDishModal() {
    document.getElementById('random-dish-modal').style.display = 'none';
}

// 渲染随机选菜的分类选择
function renderRandomCategorySelection() {
    const categoryList = document.getElementById('random-category-list');
    categoryList.innerHTML = '';
    
    categories.forEach(category => {
        const div = document.createElement('div');
        div.className = 'category-item';
        div.dataset.category = category.id;
        div.innerHTML = `${category.icon} ${category.name}`;
        
        // 设置选中状态
        div.classList.toggle('active', selectedRandomCategories.includes(category.id));
        
        div.addEventListener('click', () => {
            // 如果点击的是"全部"，则清空其他选择
            if (category.id === 'all') {
                selectedRandomCategories = ['all'];
            } else {
                // 如果之前选择了"全部"，则移除"全部"
                if (selectedRandomCategories.includes('all')) {
                    selectedRandomCategories = selectedRandomCategories.filter(id => id !== 'all');
                }
                
                // 切换当前分类的选中状态
                if (selectedRandomCategories.includes(category.id)) {
                    selectedRandomCategories = selectedRandomCategories.filter(id => id !== category.id);
                    // 如果取消选择后没有选中任何分类，则默认选择"全部"
                    if (selectedRandomCategories.length === 0) {
                        selectedRandomCategories = ['all'];
                    }
                } else {
                    selectedRandomCategories.push(category.id);
                }
            }
            
            // 重新渲染分类选择
            renderRandomCategorySelection();
        });
        
        categoryList.appendChild(div);
    });
}

// 开始随机选择菜品
function startRandomDishSelection() {
    // 获取选中分类下的所有菜品
    let availableDishes = [];
    
    if (selectedRandomCategories.includes('all')) {
        // 如果选择了"全部"，则获取所有菜品
        availableDishes = getDishesByCategory('all');
    } else {
        // 否则获取选中分类下的所有菜品
        selectedRandomCategories.forEach(categoryId => {
            const categoryDishes = getDishesByCategory(categoryId);
            availableDishes = availableDishes.concat(categoryDishes);
        });
        
        // 去重（一个菜品可能属于多个分类）
        const uniqueDishes = [];
        const dishIds = new Set();
        availableDishes.forEach(dish => {
            if (!dishIds.has(dish.id)) {
                dishIds.add(dish.id);
                uniqueDishes.push(dish);
            }
        });
        availableDishes = uniqueDishes;
    }
    
    // 如果没有可用菜品，提示用户
    if (availableDishes.length === 0) {
        alert('所选分类下暂无菜品，请重新选择分类。');
        return;
    }
    
    // 隐藏开始按钮
    document.getElementById('start-random-btn').style.display = 'none';
    
    // 显示结果区域
    const resultElement = document.getElementById('random-dish-result');
    resultElement.style.display = 'block';
    const dishNameElement = document.getElementById('selected-dish-name');
    
    // 开始随机展示过程
    let count = 0;
    const maxCount = 10; // 展示10次随机菜品
    const interval = 100; // 每100ms切换一次
    
    const intervalId = setInterval(() => {
        // 随机选择一个菜品
        const randomIndex = Math.floor(Math.random() * availableDishes.length);
        const randomDish = availableDishes[randomIndex];
        
        // 显示当前随机菜品
        dishNameElement.textContent = randomDish.name;
        
        count++;
        if (count >= maxCount) {
            // 停止随机展示
            clearInterval(intervalId);
            
            // 设置最终选中的菜品
            randomDishResult = randomDish;
            dishNameElement.textContent = randomDish.name;
            
            // 显示"看看品相"和"过，下一个"按钮
            document.getElementById('confirm-random-btn').style.display = 'block';
            document.getElementById('next-random-btn').style.display = 'block';
        }
    }, interval);
}

// 添加菜品到购物车
function addToCart(dish) {
    // 检查菜品是否已在购物车中
    const index = orderedDishes.findIndex(item => item.id === dish.id);
    
    if (index < 0) {
        // 如果未在购物车中，则添加
        orderedDishes.push(dish);
        
        // 更新菜品卡片的选中状态
        const dishCard = document.querySelector(`.dish-card[data-dish-id="${dish.id}"]`);
        if (dishCard) {
            dishCard.classList.add('selected');
        }
        
        // 更新购物车显示
        updateCartDisplay();
    }
}

// 切换菜品选中状态（保留此函数以保持兼容性）
function toggleDishSelection(dish) {
    addToCart(dish);
}


// 设置事件监听器
function setupEventListeners() {
    // 添加回车键搜索支持
    document.getElementById('dish-search').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchKeyword = e.target.value.trim();
            renderDishes(selectedCategory);
        }
    });
    
    // 默认选择第一个分类
    if (categories.length > 0) {
        selectCategory(categories[0].id);
    }
}

// 提交订单
function submitOrder() {
    if (orderedDishes.length === 0) {
        alert('请至少选择一个菜品！');
        return;
    }
    
    // 在实际应用中，这里会发送订单到服务器
    alert(`成功点菜 ${orderedDishes.length} 道菜！\n${orderedDishes.map(d => d.name).join('\n')}`);
    
    // 清空订单
    orderedDishes = [];
    renderDishes(selectedCategory);
    updateCartDisplay();
}

// 设置购物车事件监听器
function setupCartEventListeners() {
    // 购物车展开/收起
    document.getElementById('cart-header').addEventListener('click', toggleCart);
    
    // 购物车清空按钮
    document.getElementById('cart-clear').addEventListener('click', () => {
        orderedDishes = [];
        renderDishes(selectedCategory);
        updateCartDisplay();
    });
    
    // 购物车提交按钮
    document.getElementById('cart-submit').addEventListener('click', submitOrder);
}

// 切换购物车展开/收起状态
function toggleCart() {
    isCartExpanded = !isCartExpanded;
    const cartContent = document.getElementById('cart-content');
    const cartToggle = document.getElementById('cart-toggle');
    
    if (isCartExpanded) {
        cartContent.classList.remove('collapsed');
        cartToggle.textContent = '收起';
    } else {
        cartContent.classList.add('collapsed');
        cartToggle.textContent = '展开';
    }
}

// 更新购物车显示
function updateCartDisplay() {
    // 更新购物车数量
    document.getElementById('cart-count').textContent = orderedDishes.length;
    
    // 更新购物车中的菜品列表
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    
    if (orderedDishes.length === 0) {
        cartItems.innerHTML = '<li>暂未选择任何菜品</li>';
        return;
    }
    
    orderedDishes.forEach(dish => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${dish.name}</span>
            <button class="remove-from-cart" data-dish-id="${dish.id}">移除</button>
        `;
        cartItems.appendChild(li);
    });
    
    // 为购物车中的移除按钮添加事件监听器
    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const dishId = button.dataset.dishId;
            removeDishFromOrder(dishId);
        });
    });
}

// 从购物车中移除菜品
function removeDishFromOrder(dishId) {
    // 从orderedDishes数组中移除指定ID的菜品
    orderedDishes = orderedDishes.filter(dish => dish.id !== dishId);
    
    // 重新渲染菜品列表以更新选中状态
    renderDishes(selectedCategory);
    
    // 更新购物车显示
    updateCartDisplay();
}