// 菜品分类数据
const categories = [
  {
    "id": "all",
    "name": "全部",
    "icon": "🍽️"
  },
  {
    "id": "aquatic",
    "name": "水产",
    "icon": "🐟"
  },
  {
    "id": "breakfast",
    "name": "早餐",
    "icon": "🥞"
  },
  {
    "id": "condiment",
    "name": "酱料",
    "icon": "🧂"
  },
  {
    "id": "dessert",
    "name": "甜品",
    "icon": "🍰"
  },
  {
    "id": "drink",
    "name": "饮料",
    "icon": "🥤"
  },
  {
    "id": "meat_dish",
    "name": "荤菜",
    "icon": "🍖"
  },
  {
    "id": "semi-finished",
    "name": "半成品加工",
    "icon": "🔧"
  },
  {
    "id": "soup",
    "name": "汤与粥",
    "icon": "🍲"
  },
  {
    "id": "staple",
    "name": "主食",
    "icon": "🍚"
  },
  {
    "id": "vegetable_dish",
    "name": "素菜",
    "icon": "🥗"
  }
];

// 菜品数据（从HowToCook项目自动生成）
const dishes = {
  "aquatic": [
    {
      "id": "aquatic_1",
      "name": "咖喱炒蟹",
      "description": "第一次吃咖喱炒蟹是在泰国的建兴酒家中餐厅，爆肉的螃蟹挂满有蟹黄味道的咖喱，味道真的绝，喜欢吃海鲜的程序员绝对不能错过。操作简单，对沿海的程序员非常友好。",
      "difficulty": 4,
      "category": "aquatic",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/aquatic/咖喱炒蟹"
    },
    {
      "id": "aquatic_2",
      "name": "小龙虾",
      "description": "在家里做的小龙虾，肉质细嫩，鲜嫩多汁，干净卫生。",
      "difficulty": 4,
      "category": "aquatic",
      "imageName": "成品.jpg",
      "link": "https://cook.elisky.cn/dishes/aquatic/小龙虾/小龙虾"
    },
    {
      "id": "aquatic_3",
      "name": "干煎阿根廷红虾",
      "description": "平常所见到虾，只有赴“汤”蹈“火”后，才能红！阿根廷虾很任性，一红就红一辈子！跟它住在北极的亲戚，北极虾一样，天生红。",
      "difficulty": 3,
      "category": "aquatic",
      "imageName": "干煎阿根廷红虾.jpg",
      "link": "https://cook.elisky.cn/dishes/aquatic/干煎阿根廷红虾/干煎阿根廷红虾"
    },
    {
      "id": "aquatic_4",
      "name": "微波葱姜黑鳕鱼",
      "description": "这道菜改编自西雅图 Veil 餐厅主厨 Johnny Zhu 的母亲 Margaret Lu 的菜谱。卢女士原菜谱是使用罗非鱼来做这道菜，Johnny 改为鳕鱼，但也可以用大比目鱼鱼排，或者海鲈鱼、鳟...",
      "difficulty": 3,
      "category": "aquatic",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/aquatic/微波葱姜黑鳕鱼"
    },
    {
      "id": "aquatic_5",
      "name": "水煮鱼",
      "description": "水煮鱼是一道做法中等难度的硬菜。巴沙鱼富含优质蛋白且脂肪含量低，配合各种时令蔬菜十分营养健康。初学者一般需要 2 小时即可完成。",
      "difficulty": 4,
      "category": "aquatic",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/aquatic/水煮鱼"
    },
    {
      "id": "aquatic_6",
      "name": "油焖大虾",
      "description": "- 黑虎虾 or 明虾、",
      "difficulty": 4,
      "category": "aquatic",
      "imageName": "油焖大虾.jpg",
      "link": "https://cook.elisky.cn/dishes/aquatic/油焖大虾/油焖大虾"
    },
    {
      "id": "aquatic_7",
      "name": "混合烤鱼",
      "description": "- 草鱼（农贸市场或者超市让店家杀掉，去除不要的器官）",
      "difficulty": 4,
      "category": "aquatic",
      "imageName": "烤鱼.jpg",
      "link": "https://cook.elisky.cn/dishes/aquatic/混合烤鱼/混合烤鱼"
    },
    {
      "id": "aquatic_8",
      "name": "清蒸生蚝",
      "description": "* 生蚝",
      "difficulty": 3,
      "category": "aquatic",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/aquatic/清蒸生蚝"
    },
    {
      "id": "aquatic_9",
      "name": "清蒸鲈鱼",
      "description": "- 鲈鱼（害怕杀鱼的同学可以让店家帮忙杀）",
      "difficulty": 3,
      "category": "aquatic",
      "imageName": "清蒸鲈鱼.jpg",
      "link": "https://cook.elisky.cn/dishes/aquatic/清蒸鲈鱼/清蒸鲈鱼"
    },
    {
      "id": "aquatic_10",
      "name": "白灼虾",
      "description": "白灼虾非常适合程序员在沿海地区做，类似于清蒸鱼：简单容错、有营养、有满足感，甚至很好看。",
      "difficulty": 2,
      "category": "aquatic",
      "imageName": "白灼虾.webp",
      "link": "https://cook.elisky.cn/dishes/aquatic/白灼虾/白灼虾"
    },
    {
      "id": "aquatic_11",
      "name": "糖醋鲤鱼",
      "description": "- 鲤鱼",
      "difficulty": 4,
      "category": "aquatic",
      "imageName": "成品.jpg",
      "link": "https://cook.elisky.cn/dishes/aquatic/糖醋鲤鱼/糖醋鲤鱼"
    },
    {
      "id": "aquatic_12",
      "name": "红烧鱼",
      "description": "- 在操作中，锋利的菜刀可能会划伤手指，请一定要小心。",
      "difficulty": 4,
      "category": "aquatic",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/aquatic/红烧鱼"
    },
    {
      "id": "aquatic_13",
      "name": "红烧鱼头",
      "description": "- 在操作中，锋利的菜刀可能会划伤手指，请一定要小心。",
      "difficulty": 4,
      "category": "aquatic",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/aquatic/红烧鱼头"
    },
    {
      "id": "aquatic_14",
      "name": "红烧鲤鱼",
      "description": "- 大葱、姜、大蒜、干辣椒",
      "difficulty": 4,
      "category": "aquatic",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/aquatic/红烧鲤鱼"
    },
    {
      "id": "aquatic_15",
      "name": "肉蟹煲",
      "description": "肉蟹煲是一道酱香浓郁的煲类菜品，以鲜活肉蟹为主角，搭配炖至软糯的土豆和 Q 弹年糕。秘制酱汁慢火炖煮，让蟹肉充分吸收汤汁精华，口感鲜甜微辣，汤汁拌饭更是一绝～富含优质蛋白和微量元素，适合朋友聚餐分享！",
      "difficulty": 4,
      "category": "aquatic",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/aquatic/肉蟹煲"
    },
    {
      "id": "aquatic_16",
      "name": "芥末黄油罗氏虾",
      "description": "这是一道做法简单，味道美味，具有新意的海鲜菜。",
      "difficulty": 3,
      "category": "aquatic",
      "imageName": "芥末黄油罗氏虾.jpg",
      "link": "https://cook.elisky.cn/dishes/aquatic/芥末黄油罗氏虾/芥末黄油罗氏虾"
    },
    {
      "id": "aquatic_17",
      "name": "葱油桂鱼",
      "description": "- 桂鱼",
      "difficulty": 4,
      "category": "aquatic",
      "imageName": "葱油桂鱼.jpg",
      "link": "https://cook.elisky.cn/dishes/aquatic/葱油桂鱼/葱油桂鱼"
    },
    {
      "id": "aquatic_18",
      "name": "葱烧海参",
      "description": "这道菜的做法并不难，就是海参泡发是需要时间的。疫情隔离在家，干海参是过年前存的年货，正好拿出来尝试一下。",
      "difficulty": 3,
      "category": "aquatic",
      "imageName": "海参.jpeg",
      "link": "https://cook.elisky.cn/dishes/aquatic/葱烧海参/葱烧海参"
    },
    {
      "id": "aquatic_19",
      "name": "蒜蓉虾",
      "description": "蒜蓉虾是广东省地方传统名菜，色香味俱全。",
      "difficulty": 2,
      "category": "aquatic",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/aquatic/蒜蓉虾/蒜蓉虾"
    },
    {
      "id": "aquatic_20",
      "name": "蒜香黄油虾",
      "description": "蒜香黄油虾是一道经典的西式海鲜料理，以鲜虾为主料，配以蒜末和黄油烹制而成。口感鲜嫩，蒜香浓郁。制作简单，适合家庭日常烹饪。",
      "difficulty": 2,
      "category": "aquatic",
      "imageName": "1.jpg",
      "link": "https://cook.elisky.cn/dishes/aquatic/蒜香黄油虾/蒜香黄油虾"
    },
    {
      "id": "aquatic_21",
      "name": "蛏抱蛋",
      "description": "蛏抱蛋，是流行于福建省福州地区的传统家常菜",
      "difficulty": 3,
      "category": "aquatic",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/aquatic/蛏抱蛋/蛏抱蛋"
    },
    {
      "id": "aquatic_22",
      "name": "香煎翘嘴鱼",
      "description": "- 翘嘴鱼（肉食性鱼类，肉细腻，口感好）",
      "difficulty": 4,
      "category": "aquatic",
      "imageName": "香煎翘嘴鱼.jpeg",
      "link": "https://cook.elisky.cn/dishes/aquatic/香煎翘嘴鱼/香煎翘嘴鱼"
    },
    {
      "id": "aquatic_23",
      "name": "鲤鱼炖白菜",
      "description": "- 食用油",
      "difficulty": 3,
      "category": "aquatic",
      "imageName": "鲤鱼炖白菜.jpeg",
      "link": "https://cook.elisky.cn/dishes/aquatic/鲤鱼炖白菜/鲤鱼炖白菜"
    },
    {
      "id": "aquatic_24",
      "name": "鳊鱼炖豆腐",
      "description": "- 鳊鱼（鱼可以让摊主帮忙处理好）",
      "difficulty": 3,
      "category": "aquatic",
      "imageName": "鳊鱼炖豆腐.jpg",
      "link": "https://cook.elisky.cn/dishes/aquatic/鳊鱼炖豆腐/鳊鱼炖豆腐"
    },
    {
      "id": "aquatic_25",
      "name": "黄油煎虾",
      "description": "黄油煎虾是一道制作相对简单、风味极佳的菜式，主要耗时在于处理活虾，总耗时在一个小时内，适合初学者进行烹饪。",
      "difficulty": 3,
      "category": "aquatic",
      "imageName": "黄油煎虾.jpg",
      "link": "https://cook.elisky.cn/dishes/aquatic/黄油煎虾/黄油煎虾"
    }
  ],
  "breakfast": [
    {
      "id": "breakfast_1",
      "name": "吐司果酱",
      "description": "饱腹感的懒人快速营养早餐，2 分钟 搞定",
      "difficulty": 1,
      "category": "breakfast",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/breakfast/吐司果酱"
    },
    {
      "id": "breakfast_2",
      "name": "太阳蛋",
      "description": "- 鸡蛋",
      "difficulty": 2,
      "category": "breakfast",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/breakfast/太阳蛋"
    },
    {
      "id": "breakfast_3",
      "name": "完美水煮蛋",
      "description": "科学家研发的循环水煮法，可同时达到蛋黄绵密、蛋白均匀凝固且保留最多营养素的效果。需精准控制温度与时间，难度较高。",
      "difficulty": 5,
      "category": "breakfast",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/breakfast/完美水煮蛋"
    },
    {
      "id": "breakfast_4",
      "name": "微波炉荷包蛋",
      "description": "微波炉荷包蛋是一道简单易做且富含蛋白质的菜。只需要微波炉 120 秒内就可以完成，适合通勤社畜早餐。",
      "difficulty": 1,
      "category": "breakfast",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/breakfast/微波炉荷包蛋"
    },
    {
      "id": "breakfast_5",
      "name": "微波炉蒸蛋",
      "description": "嫩滑细腻、快速上桌的高蛋白早餐，用微波炉即可完成，约 10 分钟完成，适合 1-2 人食用。",
      "difficulty": 1,
      "category": "breakfast",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/breakfast/微波炉蒸蛋"
    },
    {
      "id": "breakfast_6",
      "name": "微波炉蛋糕",
      "description": "微波炉\"叮\"蛋糕，大约需要 2 分钟 就能搞定！初学者所需时间预计延长至 20 分钟。",
      "difficulty": 1,
      "category": "breakfast",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/breakfast/微波炉蛋糕"
    },
    {
      "id": "breakfast_7",
      "name": "手抓饼",
      "description": "- 普通面粉",
      "difficulty": 2,
      "category": "breakfast",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/breakfast/手抓饼"
    },
    {
      "id": "breakfast_8",
      "name": "桂圆红枣粥",
      "description": "桂圆红枣粥，甜口。补血安神，健脑益智，补养心脾。制作时间需要 70 分钟。",
      "difficulty": 2,
      "category": "breakfast",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/breakfast/桂圆红枣粥"
    },
    {
      "id": "breakfast_9",
      "name": "水煮玉米",
      "description": "大约 15 分钟可以完成制作。",
      "difficulty": 2,
      "category": "breakfast",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/breakfast/水煮玉米"
    },
    {
      "id": "breakfast_10",
      "name": "温泉蛋",
      "description": "一种传统的日式小吃，可以用于各种佐餐，注意与溏心蛋区分，溏心蛋是蛋黄不熟蛋白熟了，温泉蛋是蛋白不熟蛋黄熟了",
      "difficulty": 3,
      "category": "breakfast",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/breakfast/温泉蛋/温泉蛋"
    },
    {
      "id": "breakfast_11",
      "name": "溏心蛋",
      "description": "喜欢健身的小伙伴可以在每颗鸡蛋中获得 6 克蛋白质。大约 15 分钟可以完成制作。",
      "difficulty": 3,
      "category": "breakfast",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/breakfast/溏心蛋"
    },
    {
      "id": "breakfast_12",
      "name": "煎饺",
      "description": "- 饺子（速冻水饺）",
      "difficulty": 2,
      "category": "breakfast",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/breakfast/煎饺"
    },
    {
      "id": "breakfast_13",
      "name": "燕麦鸡蛋饼",
      "description": "燕麦鸡蛋饼是极具营养、便于制作、适宜快速制作的早餐。尤其适宜热爱健身的上班族。",
      "difficulty": 2,
      "category": "breakfast",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/breakfast/燕麦鸡蛋饼"
    },
    {
      "id": "breakfast_14",
      "name": "牛奶燕麦",
      "description": "高蛋白，粗谷物纤维，饱腹感的懒人快速营养早餐，3 分钟 搞定",
      "difficulty": 1,
      "category": "breakfast",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/breakfast/牛奶燕麦"
    },
    {
      "id": "breakfast_15",
      "name": "空气炸锅面包片",
      "description": "健康饱肚子，适宜正在减脂期的程序员食用",
      "difficulty": 1,
      "category": "breakfast",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/breakfast/空气炸锅面包片"
    },
    {
      "id": "breakfast_16",
      "name": "美式炒蛋",
      "description": "美式炒蛋具有松软鲜嫩的口感,与平时的炒蛋不同,美式炒蛋中加入了少量牛奶,使得蛋花更加的细密均匀,并且营养丰富~",
      "difficulty": 2,
      "category": "breakfast",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/breakfast/美式炒蛋"
    },
    {
      "id": "breakfast_17",
      "name": "苏格兰蛋",
      "description": "苏格兰蛋是一种用新鲜肉糜裹住鸡蛋，放入油中炸至金黄制成，这个版本比较费事，所以在此就给大家带来简易版,苏格兰蛋复杂版大家就自行查找。",
      "difficulty": 3,
      "category": "breakfast",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/breakfast/苏格兰蛋/苏格兰蛋"
    },
    {
      "id": "breakfast_18",
      "name": "茶叶蛋",
      "description": "茶香浓郁，鲜香可口的高蛋白快速营养早餐，大约耗时 30 分钟。烹饪略微耗时，可以周末尝试，做一次大约够 2-3 个人吃。",
      "difficulty": 3,
      "category": "breakfast",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/breakfast/茶叶蛋"
    },
    {
      "id": "breakfast_19",
      "name": "蒸水蛋",
      "description": "蒸水蛋（北方有些地区叫鸡蛋糕儿）都是饭店的好吃，如何自己做水滑嫩香的蒸水蛋，本教程包教包会！",
      "difficulty": 2,
      "category": "breakfast",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/breakfast/蒸水蛋"
    },
    {
      "id": "breakfast_20",
      "name": "蒸花卷",
      "description": "蒸花卷是一道简单易做的菜。能补充碳水化合物，膳食纤维。一般初学者只需要半小时即可完成。作为快手早餐，学会做之后，再也不会早上饿肚子了。",
      "difficulty": 2,
      "category": "breakfast",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/breakfast/蒸花卷"
    },
    {
      "id": "breakfast_21",
      "name": "蛋煎糍粑",
      "description": "蛋煎糍粑做法很简单，不需要太多的厨艺基础~",
      "difficulty": 2,
      "category": "breakfast",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/breakfast/蛋煎糍粑"
    },
    {
      "id": "breakfast_22",
      "name": "金枪鱼酱三明治",
      "description": "饱腹感很强的懒人早餐，营养很丰富，高蛋白，大概 5 分钟搞定。可以配着牛奶、咖啡等饮品一起吃。",
      "difficulty": 1,
      "category": "breakfast",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/breakfast/金枪鱼酱三明治"
    },
    {
      "id": "breakfast_23",
      "name": "鸡蛋三明治",
      "description": "10 分钟的简易鸡蛋三明治 🥪",
      "difficulty": 2,
      "category": "breakfast",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/breakfast/鸡蛋三明治"
    }
  ],
  "condiment": [
    {
      "id": "condiment_1",
      "name": "油泼辣子",
      "description": "制作耗时 10 分钟",
      "difficulty": 3,
      "category": "condiment",
      "imageName": "口水鸡+油泼辣子.jpg",
      "link": "https://cook.elisky.cn/dishes/condiment/油泼辣子/油泼辣子"
    },
    {
      "id": "condiment_2",
      "name": "油酥",
      "description": "油酥是由面粉与热油混合调制的，通常在烙饼时涂点油酥，可以使得饼子层层分明，外酥里软，口感更佳。",
      "difficulty": 2,
      "category": "condiment",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/condiment/油酥"
    },
    {
      "id": "condiment_3",
      "name": "炸串酱料",
      "description": "炸串酱料，号称淋袜子都好吃，新手友好，预计用时 10 分钟。",
      "difficulty": 2,
      "category": "condiment",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/condiment/炸串酱料"
    },
    {
      "id": "condiment_4",
      "name": "简易版炒糖色",
      "description": "这是简易的糖色的做法。对于更为进阶的技巧和糖色更为进阶的用法，请学习[糖色的炒制](../../tips/advanced/糖色的炒制.md)。",
      "difficulty": 4,
      "category": "condiment",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/condiment/简易版炒糖色"
    },
    {
      "id": "condiment_5",
      "name": "糖醋汁",
      "description": "糖醋汁通常情况下由清水、白糖、白醋等制成，有些人喜欢放一些番茄酱来增添不一样的酸甜味或放一些淀粉来增加菜肴汤汁的粘性和浓度，糖醋汁可用于糖醋鱼、糖醋里脊、糖醋排骨等菜品的制作",
      "difficulty": 2,
      "category": "condiment",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/condiment/糖醋汁"
    },
    {
      "id": "condiment_6",
      "name": "草莓酱",
      "description": "可以买那种一筐一筐卖的小草莓，主要是便宜。做成酱抹在面包上非常好吃。",
      "difficulty": 2,
      "category": "condiment",
      "imageName": "做好的草莓酱.png",
      "link": "https://cook.elisky.cn/dishes/condiment/草莓酱/草莓酱"
    },
    {
      "id": "condiment_7",
      "name": "葱油",
      "description": "葱油是用热油萃取以葱为主的各类香辛料得到的产物，可以用来调制肉馅，做凉拌菜，在热炒菜中作为出锅明油使用。",
      "difficulty": 3,
      "category": "condiment",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/condiment/葱油"
    },
    {
      "id": "condiment_8",
      "name": "蒜香酱油",
      "description": "- 蒜头",
      "difficulty": 2,
      "category": "condiment",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/condiment/蒜香酱油"
    },
    {
      "id": "condiment_9",
      "name": "蔗糖糖浆",
      "description": "将糖事先溶解好便于在配制饮料（特别是冷饮）时给饮料增甜",
      "difficulty": 1,
      "category": "condiment",
      "imageName": "bottle.jpg",
      "link": "https://cook.elisky.cn/dishes/condiment/蔗糖糖浆/蔗糖糖浆"
    }
  ],
  "dessert": [
    {
      "id": "dessert_1",
      "name": "反沙芋头",
      "description": "反沙芋头是一道著名的潮汕小吃，下午茶，制作起来特别方便，～预计制作时间 20 分钟",
      "difficulty": 3,
      "category": "dessert",
      "imageName": "反沙芋头成品.jpg",
      "link": "https://cook.elisky.cn/dishes/dessert/反沙芋头/反沙芋头"
    },
    {
      "id": "dessert_2",
      "name": "咖啡椰奶冻",
      "description": "咖啡椰奶冻是一道简单易于制作的甜品 出品时间约 1 小时（不算冷藏）",
      "difficulty": 4,
      "category": "dessert",
      "imageName": "咖啡椰奶冻.png",
      "link": "https://cook.elisky.cn/dishes/dessert/咖啡椰奶冻/咖啡椰奶冻"
    },
    {
      "id": "dessert_3",
      "name": "奥利奥冰淇淋",
      "description": "奥利奥冰淇淋是简单但好吃的冰淇淋，纯动物奶油不腻口，预计制作时长半小时（主要消耗在搅打奶油和去除奥利奥夹心上）。",
      "difficulty": 3,
      "category": "dessert",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/dessert/奥利奥冰淇淋/奥利奥冰淇淋"
    },
    {
      "id": "dessert_4",
      "name": "戚风蛋糕",
      "description": "戚风蛋糕是一道烘焙入门菜品，有一定操作难度。但成功制作后，其口感细腻绵软，令人回味。加上烘烤时间，一般初学者需要 **1.5 - 2 小时**即可完成。",
      "difficulty": 5,
      "category": "dessert",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/dessert/戚风蛋糕/戚风蛋糕"
    },
    {
      "id": "dessert_5",
      "name": "提拉米苏",
      "description": "提拉米苏，是意大利传统甜品。无需烤箱操作简便，烘焙新手也可以零失误获得一份美味的提拉米苏。",
      "difficulty": 4,
      "category": "dessert",
      "imageName": "提拉米苏成品.jpg",
      "link": "https://cook.elisky.cn/dishes/dessert/提拉米苏/提拉米苏"
    },
    {
      "id": "dessert_6",
      "name": "无厨师机蜂蜜面包",
      "description": "这个菜谱不需要厨师机，只需要等待！可以晚上的时候准备好放入冰箱，第二天再烤。口感虽然不如使用厨师机的但是还行，冰箱保存要吃的时候微波炉叮一下更好。花费时间大多在发面。",
      "difficulty": 5,
      "category": "dessert",
      "imageName": "无厨师机蜂蜜面包.jpg",
      "link": "https://cook.elisky.cn/dishes/dessert/无厨师机蜂蜜面包/无厨师机蜂蜜面包"
    },
    {
      "id": "dessert_7",
      "name": "炸鲜奶",
      "description": "炸鲜奶是一种外脆里嫩的甜点，营养价值适中，制作难度中等，预计制作时长约为 20 分钟。",
      "difficulty": 3,
      "category": "dessert",
      "imageName": "炸鲜奶.jpg",
      "link": "https://cook.elisky.cn/dishes/dessert/炸鲜奶/炸鲜奶"
    },
    {
      "id": "dessert_8",
      "name": "烤箱版巴斯克芝士蛋糕",
      "description": "成品不像网上的图片是黑顶是因为烤箱没有热风/仅上管加热等功能，有这些功能的话可以使用热风上色。",
      "difficulty": 2,
      "category": "dessert",
      "imageName": "烤箱版巴斯克芝士蛋糕.jpg",
      "link": "https://cook.elisky.cn/dishes/dessert/烤箱版巴斯克芝士蛋糕/烤箱版巴斯克芝士蛋糕"
    },
    {
      "id": "dessert_9",
      "name": "烤蛋挞",
      "description": "烤蛋挞是一道简单易于制作的甜品 且半成品可置于冰箱冷冻长时间保存 随吃随取 出品时间约 1 小时",
      "difficulty": 4,
      "category": "dessert",
      "imageName": "烤蛋挞.png",
      "link": "https://cook.elisky.cn/dishes/dessert/烤蛋挞/烤蛋挞"
    },
    {
      "id": "dessert_10",
      "name": "玛格丽特饼干",
      "description": "玛格丽特饼干通常作为下午茶点心或伴随热饮享用，是一种经典而受欢迎的点心。它们的酥脆质地和丰富的黄油味道使它们成为许多人喜爱的饼干之一。",
      "difficulty": 3,
      "category": "dessert",
      "imageName": "玛格丽特饼干.jpg",
      "link": "https://cook.elisky.cn/dishes/dessert/玛格丽特饼干/玛格丽特饼干"
    },
    {
      "id": "dessert_11",
      "name": "红柚蛋糕",
      "description": "红柚蛋糕是空气炸锅基础甜点，一份适合单人食用，食材处理需要 10 分钟，烹饪需要 25 分钟。",
      "difficulty": 3,
      "category": "dessert",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/dessert/红柚蛋糕/红柚蛋糕"
    },
    {
      "id": "dessert_12",
      "name": "芋泥雪媚娘",
      "description": "芋泥雪媚娘是一道甜品，很适合做给孩子吃，无需烤箱，手残党也可以做成功～预计制作时间 2 小时。",
      "difficulty": 5,
      "category": "dessert",
      "imageName": "芋泥雪媚娘成品.jpg",
      "link": "https://cook.elisky.cn/dishes/dessert/芋泥雪媚娘/芋泥雪媚娘"
    },
    {
      "id": "dessert_13",
      "name": "英式司康",
      "description": "英式司康是非常简单快手的下午茶甜品，可以搭配果酱、茶与咖啡。成品以蛋奶香气为主轴风味，糖量适中不会过于甜腻。",
      "difficulty": 3,
      "category": "dessert",
      "imageName": "英式司康.png",
      "link": "https://cook.elisky.cn/dishes/dessert/英式司康/英式司康"
    },
    {
      "id": "dessert_14",
      "name": "草莓冰淇淋",
      "description": "草莓冰淇淋是简单但好吃的冰淇淋，可以做很多不同的口味。这次将用当季的新鲜草莓制作美味，**不需要搅拌**的草莓冰淇淋。",
      "difficulty": 2,
      "category": "dessert",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/dessert/草莓冰淇淋/草莓冰淇淋"
    },
    {
      "id": "dessert_15",
      "name": "酸奶意式奶冻",
      "description": "意式奶冻非常适合作为餐后甜品，可以搭配果酱、水果和香草。成品增加了原味酸奶，不会过于甜腻。",
      "difficulty": 4,
      "category": "dessert",
      "imageName": "酸奶意式奶冻.png",
      "link": "https://cook.elisky.cn/dishes/dessert/酸奶意式奶冻/酸奶意式奶冻"
    },
    {
      "id": "dessert_16",
      "name": "雪花酥",
      "description": "雪花酥是一个快捷简便的甜点，适合装盒送礼，制作耗时 30 分钟。",
      "difficulty": 3,
      "category": "dessert",
      "imageName": "雪花酥成品.jpg",
      "link": "https://cook.elisky.cn/dishes/dessert/雪花酥/雪花酥"
    },
    {
      "id": "dessert_17",
      "name": "魔芋蛋糕",
      "description": "魔芋蛋糕是一款低热量的甜点。蛋糕本身无麸质，并使用无热量的甜味剂代替白砂糖，非常适合减脂人群。加上烘烤时间，一般需要 **0.5 小时**即可完成。",
      "difficulty": 4,
      "category": "dessert",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/dessert/魔芋蛋糕/魔芋蛋糕"
    },
    {
      "id": "dessert_18",
      "name": "龟苓膏",
      "description": "- 龟苓膏粉 25 克",
      "difficulty": 2,
      "category": "dessert",
      "imageName": "龟苓膏成品.jpg",
      "link": "https://cook.elisky.cn/dishes/dessert/龟苓膏/龟苓膏"
    }
  ],
  "drink": [
    {
      "id": "drink_1",
      "name": "B52轰炸机",
      "description": "B-52 是鸡尾酒中喝法比较独特的一种，要配上短吸管，餐巾纸和打火机。",
      "difficulty": 3,
      "category": "drink",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/drink/B52轰炸机"
    },
    {
      "id": "drink_2",
      "name": "Mojito莫吉托",
      "description": "Mojito 是一种传统的古巴高球鸡尾酒。",
      "difficulty": 3,
      "category": "drink",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/drink/Mojito莫吉托"
    },
    {
      "id": "drink_3",
      "name": "冬瓜茶",
      "description": "冬瓜茶是一种清爽的传统饮料，一般初学者需要 4~5 小时完成。",
      "difficulty": 2,
      "category": "drink",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/drink/冬瓜茶"
    },
    {
      "id": "drink_4",
      "name": "冰粉",
      "description": "石凉粉，在有些地区也叫作冰粉，是河南省信阳市浉河区的一种著名特色小吃，属于豫菜系。该菜品类似果冻，但因为是天然植物做出来的，所以比果冻更健康，配上薄荷汁、柠檬汁、红豆等调料，清凉解暑。该食物深当地人的...",
      "difficulty": 2,
      "category": "drink",
      "imageName": "石凉粉(冰粉)成品1.jpg",
      "link": "https://cook.elisky.cn/dishes/drink/冰粉/冰粉"
    },
    {
      "id": "drink_5",
      "name": "可乐桶",
      "description": "**饮酒有害健康，未成年人禁止饮酒**",
      "difficulty": 2,
      "category": "drink",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/drink/可乐桶"
    },
    {
      "id": "drink_6",
      "name": "奇异果菠菜特调",
      "description": "- 原料:",
      "difficulty": 1,
      "category": "drink",
      "imageName": "kiwi-example.jpg",
      "link": "https://cook.elisky.cn/dishes/drink/奇异果菠菜特调/奇异果菠菜特调"
    },
    {
      "id": "drink_7",
      "name": "奶茶",
      "description": "奶茶是一种简单易做的饮料。一般初学者只需要 30 分钟即可完成。",
      "difficulty": 2,
      "category": "drink",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/drink/奶茶"
    },
    {
      "id": "drink_8",
      "name": "杨枝甘露",
      "description": "没用西谷米的原因是家里没有，但是有很多的奇亚籽就拿来代替。而且奇亚籽用泡不用煮，省了很多时间!",
      "difficulty": 2,
      "category": "drink",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/drink/杨枝甘露"
    },
    {
      "id": "drink_9",
      "name": "柠檬水",
      "description": "- 原料",
      "difficulty": 1,
      "category": "drink",
      "imageName": "柠檬水.jpg",
      "link": "https://cook.elisky.cn/dishes/drink/柠檬水/柠檬水"
    },
    {
      "id": "drink_10",
      "name": "泰国手标红茶",
      "description": "泰国手标红茶是泰国街头随处可见的奶茶，味道香纯，绵密。",
      "difficulty": 3,
      "category": "drink",
      "imageName": "泰国手标红茶.jpg",
      "link": "https://cook.elisky.cn/dishes/drink/泰国手标红茶/泰国手标红茶"
    },
    {
      "id": "drink_11",
      "name": "海边落日",
      "description": "**饮酒有害健康，未成年人禁止饮酒**",
      "difficulty": 3,
      "category": "drink",
      "imageName": "海边落日.jpg",
      "link": "https://cook.elisky.cn/dishes/drink/海边落日/海边落日"
    },
    {
      "id": "drink_12",
      "name": "百香果橙子特调",
      "description": "茉莉绿茶版本",
      "difficulty": 3,
      "category": "drink",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/drink/百香果橙子特调/百香果橙子特调"
    },
    {
      "id": "drink_13",
      "name": "砂糖椰子冰沙",
      "description": "砂糖椰子冰沙是一种制作极其快速方便的饮料，若原料选择得当则口感丰富。然而制作时动静较大，适合白天在家制作以作为下午茶。",
      "difficulty": 1,
      "category": "drink",
      "imageName": "砂糖椰子冰沙-1.jpg",
      "link": "https://cook.elisky.cn/dishes/drink/砂糖椰子冰沙/砂糖椰子冰沙"
    },
    {
      "id": "drink_14",
      "name": "耙耙柑茶",
      "description": "- 原料:",
      "difficulty": 2,
      "category": "drink",
      "imageName": "citrus-tea.jpg",
      "link": "https://cook.elisky.cn/dishes/drink/耙耙柑茶/耙耙柑茶"
    },
    {
      "id": "drink_15",
      "name": "菠萝咖啡特调",
      "description": "菠萝咖啡特调是非常适合家庭出品的饮料，酸甜可口。",
      "difficulty": 3,
      "category": "drink",
      "imageName": "菠萝咖啡特调.png",
      "link": "https://cook.elisky.cn/dishes/drink/菠萝咖啡特调/菠萝咖啡特调"
    },
    {
      "id": "drink_16",
      "name": "酒酿醪糟",
      "description": "酒酿，也叫醪糟，是一道传统中式发酵甜品。成品清甜微醺，含少量酒精，具有健脾开胃、促进消化的功效。虽然制作需要一定发酵技巧，但过程简单有趣，是发酵入门好选择。预计制作时间为 2 天（不含等待时间操作仅需...",
      "difficulty": 4,
      "category": "drink",
      "imageName": "酒酿醪糟.jpeg",
      "link": "https://cook.elisky.cn/dishes/drink/酒酿醪糟/酒酿醪糟"
    },
    {
      "id": "drink_17",
      "name": "酸梅汤",
      "description": "视频演示： [链接](https://www.bilibili.com/video/BV1164y1F7hv/)",
      "difficulty": 4,
      "category": "drink",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/drink/酸梅汤/酸梅汤"
    },
    {
      "id": "drink_18",
      "name": "酸梅汤（半成品加工）",
      "description": "- 酸梅晶固体饮料",
      "difficulty": 1,
      "category": "drink",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/drink/酸梅汤（半成品加工）"
    },
    {
      "id": "drink_19",
      "name": "金汤力",
      "description": "**饮酒有害健康，未成年人禁止饮酒**",
      "difficulty": 2,
      "category": "drink",
      "imageName": "gin-tonic.jpg",
      "link": "https://cook.elisky.cn/dishes/drink/金汤力/金汤力"
    },
    {
      "id": "drink_20",
      "name": "金菲士",
      "description": "**饮酒有害健康，未成年人禁止饮酒**",
      "difficulty": 2,
      "category": "drink",
      "imageName": "gin-fizz.jpg",
      "link": "https://cook.elisky.cn/dishes/drink/金菲士/金菲士"
    },
    {
      "id": "drink_21",
      "name": "长岛冰茶",
      "description": "**饮酒有害健康，未成年人禁止饮酒**",
      "difficulty": 2,
      "category": "drink",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/drink/长岛冰茶"
    }
  ],
  "meat_dish": [
    {
      "id": "meat_dish_1",
      "name": "乡村啤酒鸭",
      "description": "将鸭肉与啤酒一同炖煮成菜，使滋补的鸭肉味道更加浓厚，鸭肉不仅入口鲜香，还带有一股啤酒清香。一般初学者只需要 1 小时即可完成。",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/乡村啤酒鸭"
    },
    {
      "id": "meat_dish_2",
      "name": "农家一碗香",
      "description": "农家一碗香，是一道地道的湖南菜，里面主要食材有青椒、鸡蛋和猪肉。味道咸香下饭，而且这道菜烹饪简单，不需要特别的处理。",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": "农家一碗香成品.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/农家一碗香/农家一碗香"
    },
    {
      "id": "meat_dish_3",
      "name": "冬瓜酿肉",
      "description": "荤素搭配，鲜嫩爽滑,做法简单。一般 30 分钟。",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": "冬瓜酿肉成品.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/冬瓜酿肉/冬瓜酿肉"
    },
    {
      "id": "meat_dish_4",
      "name": "冷吃兔",
      "description": "- 兔肉",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/冷吃兔"
    },
    {
      "id": "meat_dish_5",
      "name": "凉拌鸡丝",
      "description": "隔离期间的一道快手菜，少油低卡，制作简单，预计制作时间 30 分钟",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": "凉拌鸡丝.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/凉拌鸡丝/凉拌鸡丝"
    },
    {
      "id": "meat_dish_6",
      "name": "卤菜",
      "description": "卤菜是一道经典的中式卤味料理，富含蛋白质和多种维生素。肉质鲜嫩多汁，香气四溢，入味程度可根据浸泡时间自行调整。这道菜适合作为凉菜、下酒菜或搭配主食食用，卤水还可多次使用，越陈越香。",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/卤菜/卤菜"
    },
    {
      "id": "meat_dish_7",
      "name": "口水鸡",
      "description": "口水鸡（凉菜），炎炎夏日里，热菜难以入口，但又嗜肉如命，",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": "口水鸡.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/口水鸡/口水鸡"
    },
    {
      "id": "meat_dish_8",
      "name": "可乐鸡翅",
      "description": "* 鸡翅中",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/可乐鸡翅"
    },
    {
      "id": "meat_dish_9",
      "name": "台式卤肉饭",
      "description": "糖和脂肪是人类快乐的源泉，富含这二者的台式卤肉饭每一口都能带来直击灵魂的满足感。",
      "difficulty": 5,
      "category": "meat_dish",
      "imageName": "1.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/台式卤肉饭/台式卤肉饭"
    },
    {
      "id": "meat_dish_10",
      "name": "咕噜肉",
      "description": "咕噜肉是非常下饭的菜肴，只需一道就可以吃得津津有味，大人小孩都爱吃。而这次做的是简易版菠萝咕噜肉，利用简单的材料就可以在家做出特有风味的咕噜肉 。",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/咕噜肉"
    },
    {
      "id": "meat_dish_11",
      "name": "咖喱肥牛",
      "description": "咖喱肥牛美味营养并且下饭，吃多了炒炸菜后再吃个咖喱肥牛相当美滋滋。",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": "咖喱肥牛.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/咖喱肥牛/咖喱肥牛"
    },
    {
      "id": "meat_dish_12",
      "name": "商芝肉",
      "description": "此菜色泽红润，质地软嫩，肥而不腻，有浓郁的商芝香味，是陕西省商县特有的风味菜。因商芝属于陕西特产，此菜原料获取难度较大，不易制作。",
      "difficulty": 5,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/商芝肉"
    },
    {
      "id": "meat_dish_13",
      "name": "啤酒鸭",
      "description": "啤酒鸭不仅入口鲜香,还带有一股啤酒清香。肉久吃不腻,汤久涮而不淡。风味独特,具有热而不浮,香而不腻的独特口味让人赞口不绝。一般初学者需要 1 小时即可完成。",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": "啤酒鸭.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/啤酒鸭/啤酒鸭"
    },
    {
      "id": "meat_dish_14",
      "name": "回锅肉",
      "description": "- 五花肉",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/回锅肉/回锅肉"
    },
    {
      "id": "meat_dish_15",
      "name": "土豆炖排骨",
      "description": "- 肋排",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/土豆炖排骨/土豆炖排骨"
    },
    {
      "id": "meat_dish_16",
      "name": "奶酪培根通心粉",
      "description": "这是一道美味的奶酪培根通心粉(Mac and Cheese)，适合四人享用。它结合了浓郁的奶酪和香脆的培根，简单易做，是一道受欢迎的美式家常菜。",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/奶酪培根通心粉/奶酪培根通心粉"
    },
    {
      "id": "meat_dish_17",
      "name": "姜炒鸡",
      "description": "姜炒鸡是一道湖南口味菜，下饭五颗星，食材平平无奇又十分容易烹制，一学就会。",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": "姜炒鸡.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/姜炒鸡/姜炒鸡"
    },
    {
      "id": "meat_dish_18",
      "name": "姜葱捞鸡",
      "description": "嫩滑爆汁，白饭杀手，简单易做，",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/姜葱捞鸡/姜葱捞鸡"
    },
    {
      "id": "meat_dish_19",
      "name": "孜然牛肉",
      "description": "* 牛柳或牛肩肉",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/孜然牛肉"
    },
    {
      "id": "meat_dish_20",
      "name": "宫保鸡丁",
      "description": "老派川菜的简单做法分享",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": "宫保鸡丁.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/宫保鸡丁/宫保鸡丁"
    },
    {
      "id": "meat_dish_21",
      "name": "小炒肉",
      "description": "- 五花肉",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/小炒肉"
    },
    {
      "id": "meat_dish_22",
      "name": "小炒鸡肝",
      "description": "一道稍微麻烦的菜。",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": "成品.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/小炒鸡肝/小炒鸡肝"
    },
    {
      "id": "meat_dish_23",
      "name": "小炒黄牛肉",
      "description": "小炒黄牛肉是一道简单易做的湘菜。口味十分劲爆爽口。一般初学者只需要 1 小时即可完成",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": "小炒黄牛肉.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/小炒黄牛肉/小炒黄牛肉"
    },
    {
      "id": "meat_dish_24",
      "name": "小米辣炒肉",
      "description": "⚠️注意：不建议清淡饮食的尝试。",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/小米辣炒肉"
    },
    {
      "id": "meat_dish_25",
      "name": "小酥肉",
      "description": "- 去皮猪肉（根据喜好选择肥瘦）",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/小酥肉"
    },
    {
      "id": "meat_dish_26",
      "name": "尖叫牛蛙",
      "description": "尖叫牛蛙是一道容易完成的菜。一般初学者只需要 1-2 小时即可完成。该菜品味道鲜美之外，还具有开胃功效，非常适宜食欲不佳的时候做，老少皆宜。（能吃辣最好）",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": "尖叫牛蛙.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/尖叫牛蛙/尖叫牛蛙"
    },
    {
      "id": "meat_dish_27",
      "name": "尖椒炒牛肉",
      "description": "* 牛肉",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/尖椒炒牛肉"
    },
    {
      "id": "meat_dish_28",
      "name": "山西过油肉",
      "description": "过油肉是山西传统名菜，有很多年历史，基本家家都会做。",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/山西过油肉"
    },
    {
      "id": "meat_dish_29",
      "name": "巴基斯坦牛肉咖喱",
      "description": "Achar gosht（巴基斯坦牛肉咖喱）是一道来自巴基斯坦的特色咖喱菜品。这道菜融合了咖喱的香浓和牛肉的软糯口感，风味独特，偏辣口。它富含优质蛋白质和多种维生素，营养价值丰富。制作过程需要 2.5 ...",
      "difficulty": 5,
      "category": "meat_dish",
      "imageName": "巴基斯坦牛肉咖喱.png",
      "link": "https://cook.elisky.cn/dishes/meat_dish/巴基斯坦牛肉咖喱/巴基斯坦牛肉咖喱"
    },
    {
      "id": "meat_dish_30",
      "name": "带把肘子",
      "description": "肘肉酥烂不腻，肘皮胶粘，香醇味美，辅佐以葱段，甜面酱，别有一番风味，因脚爪形似把柄，故得其名，是陕西省大荔县名菜。营养价值丰富，但制作难度较高。",
      "difficulty": 5,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/带把肘子"
    },
    {
      "id": "meat_dish_31",
      "name": "干煸仔鸡",
      "description": "干煸仔鸡是一道甜辣口味的川菜，是北京大学食堂赵春月厨师长研发的美食，广受师生喜爱。赵厨师长已将菜谱公开，方便大家自己动手制作，疫情居家下饭必备！",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": "干煸仔鸡成品.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/干煸仔鸡/干煸仔鸡"
    },
    {
      "id": "meat_dish_32",
      "name": "广式萝卜牛腩",
      "description": "广式萝卜牛腩营养丰富，味道鲜美，汤汁浓郁、孩子食欲好了，成绩也好了。",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": "广式萝卜牛腩.webp",
      "link": "https://cook.elisky.cn/dishes/meat_dish/广式萝卜牛腩/广式萝卜牛腩"
    },
    {
      "id": "meat_dish_33",
      "name": "徽派红烧肉",
      "description": "徽式红烧肉是一道由五花肉等食材制成的菜肴。",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/徽派红烧肉/徽派红烧肉"
    },
    {
      "id": "meat_dish_34",
      "name": "意式烤鸡",
      "description": "- 鸡腿肉",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/意式烤鸡"
    },
    {
      "id": "meat_dish_35",
      "name": "新疆大盘鸡",
      "description": "- 花椒，香叶，香果，干线椒，大蒜，大葱",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": "大盘鸡.jpeg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/新疆大盘鸡/新疆大盘鸡"
    },
    {
      "id": "meat_dish_36",
      "name": "无骨鸡爪",
      "description": "**图片里的颜色比较浅，家里人爱吃酱油少的**",
      "difficulty": 5,
      "category": "meat_dish",
      "imageName": "无骨鸡爪.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/无骨鸡爪/无骨鸡爪"
    },
    {
      "id": "meat_dish_37",
      "name": "杀猪菜",
      "description": "杀猪菜的做法 （荤菜）",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/杀猪菜"
    },
    {
      "id": "meat_dish_38",
      "name": "枝竹羊腩煲",
      "description": "枝竹羊腩煲是一份老少皆宜，适合冬季暖胃的美食。 此道菜肥而不腻，搭配米饭堪称一绝。一般初学者需 2 个半小时即可完成。",
      "difficulty": 5,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/枝竹羊腩煲/枝竹羊腩煲"
    },
    {
      "id": "meat_dish_39",
      "name": "柱候牛腩",
      "description": "肉香味美，色泽诱人，滋补强壮，口感甚佳，令人垂涎的广式菜肴。有高压锅只需 1 个小时，否则需要炖煮 3 个小时。",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": "柱候牛腩.jpeg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/柱候牛腩/柱候牛腩"
    },
    {
      "id": "meat_dish_40",
      "name": "梅菜扣肉",
      "description": "梅菜扣肉造型别致、大方得体，颜色酱红油亮，汤汁黏稠鲜美，扣肉肥而不腻，食之软烂醇香。",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/梅菜扣肉/梅菜扣肉"
    },
    {
      "id": "meat_dish_41",
      "name": "椒盐排条",
      "description": "椒盐排条是道非常经典的本帮菜，咸、香，也容易制作。",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/椒盐排条"
    },
    {
      "id": "meat_dish_42",
      "name": "水煮牛肉",
      "description": "麻辣鲜香",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/水煮牛肉/水煮牛肉"
    },
    {
      "id": "meat_dish_43",
      "name": "水煮肉片",
      "description": "水煮肉片麻辣鲜香，适合干饭，但是做法稍微有点麻烦。难度主要在肉滑嫩，初学者一般需要 1 - 2 小时完成。干饭人，一切都值~",
      "difficulty": 5,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/水煮肉片"
    },
    {
      "id": "meat_dish_44",
      "name": "洋葱炒猪肉",
      "description": "咸中带甜，简单上手，一不小心可能让人多吃一碗饭。一般只需 15 分钟即可完成。",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/洋葱炒猪肉"
    },
    {
      "id": "meat_dish_45",
      "name": "清蒸鳜鱼",
      "description": "鳜鱼可以称的上淡水鱼之王，味道鲜美，所谓高端的食材只需要最简单的烹饪方式，清蒸最能体现鳜鱼的鲜美。",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": "清蒸鳜鱼成品图.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/清蒸鳜鱼/清蒸鳜鱼"
    },
    {
      "id": "meat_dish_46",
      "name": "湖南家常红烧肉",
      "description": "湖南家常红烧肉，入口软糯，肥而不腻",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": "湖南家常红烧肉.jpeg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/湖南家常红烧肉/湖南家常红烧肉"
    },
    {
      "id": "meat_dish_47",
      "name": "湘祁米夫鸭",
      "description": "湖南两祁地区特色菜品，逢年过节家家桌上有。鸭肉被米粉子包裹，入口咸香回味悠长可解乡愁。",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": "湘祁米夫鸭.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/湘祁米夫鸭/湘祁米夫鸭"
    },
    {
      "id": "meat_dish_48",
      "name": "烤鸡翅",
      "description": "- 鸡翅中",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/烤鸡翅"
    },
    {
      "id": "meat_dish_49",
      "name": "煎烤羊排",
      "description": "煎烤羊排是一道兼具炖煮与煎制工艺的菜品，外酥里嫩、香气四溢。既可作为家庭聚餐的硬菜，也能在宴会大餐中作为亮点端上桌。炖煮后的羊排酥烂入味，再经过煎制激发香料，味道浓郁而不腻。",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/煎烤羊排/煎烤羊排"
    },
    {
      "id": "meat_dish_50",
      "name": "牛排",
      "description": "牛排是一种广受欢迎的西式肉类料理，富含蛋白质、油脂和铁、锌等矿物质。牛排的烹饪过程通过灵活的烹饪手法（如煎、烤、慢煮、熟成）控制牛排的熟度，从三分熟（中心为粉红色）到全熟（完全熟透）可选。高温烹饪能形...",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": "牛排.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/牛排/牛排"
    },
    {
      "id": "meat_dish_51",
      "name": "猪皮冻",
      "description": "猪皮冻是一道简单易做的菜。北方人年夜饭餐桌上的“常青树”，晶莹剔透的外表，滑嫩 Q 弹的口感，是不折不扣的超级下酒菜。",
      "difficulty": 5,
      "category": "meat_dish",
      "imageName": "猪皮冻.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/猪皮冻/猪皮冻"
    },
    {
      "id": "meat_dish_52",
      "name": "猪肉烩酸菜",
      "description": "猪肉烩酸菜是一道北方名菜，简单易做。富含蛋白质。一般初学者需要 3 小时完成。",
      "difficulty": 5,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/猪肉烩酸菜"
    },
    {
      "id": "meat_dish_53",
      "name": "甜辣烤全翅",
      "description": "本甜辣烤全翅使用空气炸锅烹饪并仅使用家中常见调料，低油脂并且不需要成品烧烤酱，一份适合单人食用，食材处理需要 15 分钟，腌制需要 120 分钟， 烹饪需要 50 分钟。",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/甜辣烤全翅"
    },
    {
      "id": "meat_dish_54",
      "name": "番茄红酱",
      "description": "番茄红酱香浓可口，营养丰富，咱很喜欢。可以作为薄饼、意面~~热干面~~等主食的百搭酱料。有些繁琐，适合有烹饪经验的人尝试。一次吃不完也没有关系，可以冷冻后随时拿出来加热哦。（但是千万要记得吃）",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/番茄红酱"
    },
    {
      "id": "meat_dish_55",
      "name": "瘦肉土豆片",
      "description": "瘦肉土豆片是一道简单易做的菜。小炒家常菜，方便快速，适合上班族用于带饭必备小炒菜。一般初学者只需要 1 小时即可完成。",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": "瘦肉土豆片.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/瘦肉土豆片/瘦肉土豆片"
    },
    {
      "id": "meat_dish_56",
      "name": "白菜猪肉炖粉条",
      "description": "白菜猪肉炖粉条是一道简单易做的菜。这是一道传统的东北家常菜，以做法简单、味道上乘的特点，在广大东北人民群众中备受喜爱。",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/白菜猪肉炖粉条"
    },
    {
      "id": "meat_dish_57",
      "name": "粉蒸肉",
      "description": "粉蒸肉是一道经典的中式蒸菜，香味浓郁，口感软糯，营养丰富。适合家庭聚餐或节日宴客。此菜适合有一定烹饪经验的人士制作，预计从准备到完成约需 90 分钟。",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/粉蒸肉"
    },
    {
      "id": "meat_dish_58",
      "name": "糖醋排骨",
      "description": "糖醋排骨是一道具有代表性的传统名菜，以其独特的酸甜口味深受大众喜爱。本菜谱在保留原有风味的基础上，对用料绑定、火候控制以及操作细节作了优化，旨在提高菜谱的可迁移性和可执行性。",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/糖醋排骨/糖醋排骨"
    },
    {
      "id": "meat_dish_59",
      "name": "糖醋里脊",
      "description": "糖醋里脊是中国经典传统名菜之一，该菜品以猪里脊肉为主材，配以面粉、淀粉、醋等佐料，酸甜可口，让人食欲大开；该菜品在陕菜、豫菜、浙菜、鲁菜、川菜、淮扬菜、粤菜、闽菜里均有此菜。",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/糖醋里脊"
    },
    {
      "id": "meat_dish_60",
      "name": "红烧猪蹄",
      "description": "红烧猪蹄营养丰富，味道香，汤汁浓郁、下饭强。",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": "红烧猪蹄.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/红烧猪蹄/红烧猪蹄"
    },
    {
      "id": "meat_dish_61",
      "name": "红烧肉",
      "description": "这份红烧肉教程是一道新手不败的菜谱。配着米饭好吃的停不下来，香糯无敌棒色泽诱人肥而不腻",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/红烧肉/红烧肉"
    },
    {
      "id": "meat_dish_62",
      "name": "羊排焖面",
      "description": "羊排焖面是一道硬菜，适合聚会时候大展身手。缺点就是有点花时间，优点就是好吃，而且一道菜补齐人体所需的三大营养物质。",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": "羊排焖面.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/羊排焖面/羊排焖面"
    },
    {
      "id": "meat_dish_63",
      "name": "老妈蹄花",
      "description": "红烧猪蹄营养丰富，口感细腻，软烂脱骨，配上酸辣汁简直太香！",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/老妈蹄花/老妈蹄花"
    },
    {
      "id": "meat_dish_64",
      "name": "老式锅包肉",
      "description": "锅包肉是东北名菜，创始于光绪年间哈尔滨道台府厨师郑兴文之手。老式锅包肉的酸味来源于白醋汁，口味酸甜酥脆。",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/老式锅包肉/老式锅包肉"
    },
    {
      "id": "meat_dish_65",
      "name": "肉饼炖蛋",
      "description": "肉饼炖蛋是一道传统的中国家常菜，也是一道非常受欢迎的下饭菜。初学者只需要 20 分钟即可完成。",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/肉饼炖蛋"
    },
    {
      "id": "meat_dish_66",
      "name": "芥末罗氏虾",
      "description": "本菜品可替换成任意虾种类，包括但不限于基围虾、花虾、黑虎虾等。鲜香入味、芥末风味十足、吃完吮指，且操作十分简单。",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": "芥末罗氏虾成品.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/芥末罗氏虾/芥末罗氏虾"
    },
    {
      "id": "meat_dish_67",
      "name": "茭白炒肉",
      "description": "茭白味道鲜美，有一定营养价值",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/茭白炒肉/茭白炒肉"
    },
    {
      "id": "meat_dish_68",
      "name": "荔枝肉",
      "description": "荔枝肉独具闽菜特点，味道酸甜可口。是福州地区比较常见的一道菜肴",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/荔枝肉/荔枝肉"
    },
    {
      "id": "meat_dish_69",
      "name": "荷兰豆炒腊肠",
      "description": "荷兰豆炒腊肠是一道营养丰富，口感清爽，有利于开胃助食，增进食欲的美味菜肴。荷兰豆中富含人体所需的各种营养物质，尤其是含有优质蛋白质，可以提高机体的抗病能力和康复能力。",
      "difficulty": 2,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/荷兰豆炒腊肠/荷兰豆炒腊肠"
    },
    {
      "id": "meat_dish_70",
      "name": "萝卜炖羊排",
      "description": "萝卜炖羊排是一道常见家常菜，老少皆宜。一般初学者只需要最多 2 小时即可完成。",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/萝卜炖羊排"
    },
    {
      "id": "meat_dish_71",
      "name": "蒜苔炒肉末",
      "description": "蒜苔炒肉末是一道简单易做的菜。这是一道北方家常菜，以做法简单、味道上乘的特点，在广大北方人民群众中备受喜爱。",
      "difficulty": 2,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/蒜苔炒肉末"
    },
    {
      "id": "meat_dish_72",
      "name": "虎皮肘子",
      "description": "虎皮肘子是一道传统名菜，以猪肘为主料，通过先烧再炸后炖三个步骤使肘子皮呈现出虎皮状。肘子皮软烂入味，肥而不腻，瘦肉松软可口。这道菜是逢年过节让老辈子闭嘴猛炫的不二之选，可谓是救命法宝。",
      "difficulty": 5,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/虎皮肘子"
    },
    {
      "id": "meat_dish_73",
      "name": "蚂蚁上树",
      "description": "蚂蚁上树是一道经典的川菜，主要材料为粉丝和肉末。它咸香微辣、入味透彻，粉丝软滑爽口，肉末细嫩鲜香。全程只需 20 分钟，是非常适合家庭操作的一道菜。",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/蚂蚁上树"
    },
    {
      "id": "meat_dish_74",
      "name": "血浆鸭",
      "description": "血浆鸭是湖南武冈特色传统名菜，香、脆可口，由于醋血的作用，不仅鸭骨酥而脆，就是姜和辣椒也变得不辣而甜净。一般初学者只需要 2 小时就可以完成。",
      "difficulty": 5,
      "category": "meat_dish",
      "imageName": "血浆鸭(微辣).jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/血浆鸭/血浆鸭"
    },
    {
      "id": "meat_dish_75",
      "name": "西红柿土豆炖牛肉",
      "description": "西红柿土豆炖牛肉（腩）的特点就是还挺好吃，牛肉是优质蛋白，换成牛腩更好吃。",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": "abaaba_1.png",
      "link": "https://cook.elisky.cn/dishes/meat_dish/西红柿土豆炖牛肉/西红柿土豆炖牛肉"
    },
    {
      "id": "meat_dish_76",
      "name": "西红柿牛腩",
      "description": "西红柿牛腩汤汁浓厚酸甜可口，牛肉软绵醇香，搭配米饭绝配。一般初学者需要 90 分钟完成。",
      "difficulty": 5,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/西红柿牛腩/西红柿牛腩"
    },
    {
      "id": "meat_dish_77",
      "name": "豆豉鲮鱼油麦菜",
      "description": "豆豉鲮鱼油麦菜是一到十分常见的菜，材料简单，操作方便，鲮鱼咸香，非常下饭。",
      "difficulty": 2,
      "category": "meat_dish",
      "imageName": "豆豉鲮鱼油麦菜成品.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/豆豉鲮鱼油麦菜/豆豉鲮鱼油麦菜"
    },
    {
      "id": "meat_dish_78",
      "name": "豉汁蒸白鱔",
      "description": "- 白鱔（白鳝）",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": "豉汁蒸白鱔.jpeg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/豉汁蒸白鱔/豉汁蒸白鱔"
    },
    {
      "id": "meat_dish_79",
      "name": "贵州辣子鸡",
      "description": "贵州人对吃鸡的执恋",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": "贵州辣子鸡.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/贵州辣子鸡/贵州辣子鸡"
    },
    {
      "id": "meat_dish_80",
      "name": "辣椒炒肉",
      "description": "⚠️注意：本道菜需要一定料理基础，不推荐新手尝试。",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/辣椒炒肉"
    },
    {
      "id": "meat_dish_81",
      "name": "酱排骨",
      "description": "酱排骨其色泽酱红，肉质酥烂，骨香浓郁，汁浓味鲜，咸中带甜。",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/酱排骨/酱排骨"
    },
    {
      "id": "meat_dish_82",
      "name": "酱牛肉",
      "description": "家常酱牛肉营养丰富，味道香，不论是当作主食还是佐餐都很棒。一般初学者只需要 10 小时即可完成。",
      "difficulty": 5,
      "category": "meat_dish",
      "imageName": "酱牛肉.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/酱牛肉/酱牛肉"
    },
    {
      "id": "meat_dish_83",
      "name": "醉排骨",
      "description": "醉排骨是福建省福州市特色传统名菜",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": "1.jpeg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/醉排骨/醉排骨"
    },
    {
      "id": "meat_dish_84",
      "name": "青椒土豆炒肉",
      "description": "青椒土豆炒肉是一道荤素搭配的简单炒菜。一般初学者只需要 1 小时即可完成。贼下饭~",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": "青椒土豆炒肉.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/青椒土豆炒肉/青椒土豆炒肉"
    },
    {
      "id": "meat_dish_85",
      "name": "香干肉丝",
      "description": "* 猪里脊（可以买超市切好且称重好的肉丝）",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/香干肉丝"
    },
    {
      "id": "meat_dish_86",
      "name": "香干芹菜炒肉",
      "description": "香干芹菜炒肉是一道非常简单的家常菜小炒，据说多吃芹菜对于高血压有很好的缓解作用，加上香干和猪肉一起翻炒，还是很美味的。一般初学者只需要 30 分钟（含配菜时间）即可完成。",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": "香干芹菜炒肉.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/香干芹菜炒肉/香干芹菜炒肉"
    },
    {
      "id": "meat_dish_87",
      "name": "香煎五花肉",
      "description": "香煎五花肉一道简单易上手的菜。五花肉肥而不腻，生菜叶脆爽健康。稍微有下厨经验的人半小时便可制作完毕。",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": "香煎五花肉.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/香煎五花肉/香煎五花肉"
    },
    {
      "id": "meat_dish_88",
      "name": "香菇滑鸡",
      "description": "- 大鸡腿",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": "香菇滑鸡.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/香菇滑鸡/香菇滑鸡"
    },
    {
      "id": "meat_dish_89",
      "name": "香辣鸡爪煲",
      "description": "香辣鸡爪煲口感 Q 弹，香辣浓郁，回味无穷。",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/香辣鸡爪煲/香辣鸡爪煲"
    },
    {
      "id": "meat_dish_90",
      "name": "鱼香肉丝",
      "description": "* 里脊肉 200g",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/鱼香肉丝"
    },
    {
      "id": "meat_dish_91",
      "name": "鱼香茄子",
      "description": "这个菜真的超级下饭，当个干饭王吧。",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/鱼香茄子/鱼香茄子"
    },
    {
      "id": "meat_dish_92",
      "name": "麻婆豆腐",
      "description": "这是参考麻婆豆腐创作的一道菜。富含有铁、钙、磷、镁等人体必需的多种微量元素，最重要的是非常下饭哦～",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": "1.jpeg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/麻婆豆腐/麻婆豆腐"
    },
    {
      "id": "meat_dish_93",
      "name": "麻辣香锅",
      "description": "- 青菜（油菜、油麦菜、菠菜）",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/麻辣香锅"
    },
    {
      "id": "meat_dish_94",
      "name": "黄焖鸡",
      "description": "黄焖鸡是一道十分下饭的美食，食材平平无奇又十分容易烹制，一学就会。",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/黄焖鸡"
    },
    {
      "id": "meat_dish_95",
      "name": "黄瓜炒肉",
      "description": "* 黄瓜",
      "difficulty": 3,
      "category": "meat_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/meat_dish/黄瓜炒肉"
    },
    {
      "id": "meat_dish_96",
      "name": "黑椒牛柳",
      "description": "黑椒牛柳是一道简单易做的菜。蔬菜与肉类均衡，富含蛋白质，口味适合大多数人。一般初学者只需要 1 小时以内即可完成。",
      "difficulty": 4,
      "category": "meat_dish",
      "imageName": "黑椒牛柳.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/黑椒牛柳/黑椒牛柳"
    },
    {
      "id": "meat_dish_97",
      "name": "黔式腊肠娃娃菜",
      "description": "黔式腊肠娃娃菜不需要掌握火候，也无需调料，非常适合懒癌的菜。制作时间 15 分钟，口味近似于川菜、湘菜，却是西南菜系中鲜见的不辣菜式，咸鲜可口、南北皆宜。",
      "difficulty": 1,
      "category": "meat_dish",
      "imageName": "黔式腊肠娃娃菜.jpg",
      "link": "https://cook.elisky.cn/dishes/meat_dish/黔式腊肠娃娃菜/黔式腊肠娃娃菜"
    }
  ],
  "semi-finished": [
    {
      "id": "semi-finished_1",
      "name": "凉皮",
      "description": "* 凉皮、面筋",
      "difficulty": 3,
      "category": "semi-finished",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/semi-finished/凉皮"
    },
    {
      "id": "semi-finished_2",
      "name": "半成品意面",
      "description": "意大利面🍝和中国面条口感上的区别主要是因为它是由小麦品种中最硬质的杜兰(durum)磨粉制成的。",
      "difficulty": 1,
      "category": "semi-finished",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/semi-finished/半成品意面"
    },
    {
      "id": "semi-finished_3",
      "name": "懒人蛋挞",
      "description": "蛋挞是一道常见的可口甜品，通常而言制作蛋挞是需要调和蛋挞液和制作蛋挞皮的，这个过程比较复杂和耗时，但是网购半成品恰恰解决解决以上的难题，初学者只需大约 40 分就可以完成。从今往后只要家里有烤箱，就可...",
      "difficulty": 3,
      "category": "semi-finished",
      "imageName": "懒人蛋挞.png",
      "link": "https://cook.elisky.cn/dishes/semi-finished/懒人蛋挞/懒人蛋挞"
    },
    {
      "id": "semi-finished_4",
      "name": "炸薯条",
      "description": "薯条🍟是一种土豆🥔\\马铃薯🥔\\洋芋🥔切成条状之后再油炸而成的快餐食物（在有的国家可能不算快餐），非常适合。相较于油炸，空气炸锅可能会更加易于避免崩溃和实现异步非阻塞。相较于自己动手切土豆再洗去...",
      "difficulty": 2,
      "category": "semi-finished",
      "imageName": "炸薯条.jpg",
      "link": "https://cook.elisky.cn/dishes/semi-finished/炸薯条/炸薯条"
    },
    {
      "id": "semi-finished_5",
      "name": "牛油火锅底料",
      "description": "重庆火锅又称毛肚火锅或麻辣火锅，是中国传统饮食方式之一。",
      "difficulty": 5,
      "category": "semi-finished",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/semi-finished/牛油火锅底料"
    },
    {
      "id": "semi-finished_6",
      "name": "空气炸锅羊排",
      "description": "空气炸锅羊排超级懒人版，味道尚可，主要看羊排的品质。",
      "difficulty": 3,
      "category": "semi-finished",
      "imageName": "羊排.jpg",
      "link": "https://cook.elisky.cn/dishes/semi-finished/空气炸锅羊排/空气炸锅羊排"
    },
    {
      "id": "semi-finished_7",
      "name": "空气炸锅鸡翅中",
      "description": "空气炸锅做鸡翅中方便，这样自带油脂的食物味道很好，比 KFC 的好吃，吃完不**用洗碗洗锅**。",
      "difficulty": 2,
      "category": "semi-finished",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/semi-finished/空气炸锅鸡翅中/空气炸锅鸡翅中"
    },
    {
      "id": "semi-finished_8",
      "name": "速冻水饺",
      "description": "饺子是一种源自中国的一种以面皮包馅、形如半月或元宝形的食物。饺子是在农历新年和冬至等节日的重要食品。通常由碎肉和蔬菜馅料包裹成一片薄生面团后包好密封。而饺子的缺点在于难以制作。不妨选择购买速冻水饺来快...",
      "difficulty": 1,
      "category": "semi-finished",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/semi-finished/速冻水饺"
    },
    {
      "id": "semi-finished_9",
      "name": "速冻汤圆",
      "description": "速冻汤圆是一道简单易做的菜。一般初学者只需要 6 分钟即可完成。",
      "difficulty": 1,
      "category": "semi-finished",
      "imageName": "速冻汤圆.jpg",
      "link": "https://cook.elisky.cn/dishes/semi-finished/速冻汤圆/速冻汤圆"
    },
    {
      "id": "semi-finished_10",
      "name": "速冻馄饨",
      "description": "馄饨是一种起源于中国的一种民间传统面食，[饺子](./速冻水饺.md)由其分化而出，有皮薄馅嫩、汤清味鲜的特点。",
      "difficulty": 2,
      "category": "semi-finished",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/semi-finished/速冻馄饨"
    }
  ],
  "soup": [
    {
      "id": "soup_1",
      "name": "勾芡香菇汤",
      "description": "鲜香菇除了拿来和肉炒外，其实拿来做浓浓的勾芡汤也是非常可口的。",
      "difficulty": 3,
      "category": "soup",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/soup/勾芡香菇汤/勾芡香菇汤"
    },
    {
      "id": "soup_2",
      "name": "奶油蘑菇汤",
      "description": "- 白蘑菇",
      "difficulty": 1,
      "category": "soup",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/soup/奶油蘑菇汤"
    },
    {
      "id": "soup_3",
      "name": "小米粥",
      "description": "小米含有多种维生素、氨基酸、脂肪和碳水化合物，营养价值较高，每 100 克小米含蛋白质 9.7 克、脂肪 3.5 克，都不低于稻、麦。",
      "difficulty": 2,
      "category": "soup",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/soup/小米粥"
    },
    {
      "id": "soup_4",
      "name": "排骨苦瓜汤",
      "description": "排骨苦瓜汤是一道味道鲜美且容易烹饪的汤。不过汤的烹饪时间都较长，一般来说最好提前 4 个小时开始进行准备。",
      "difficulty": 4,
      "category": "soup",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/soup/排骨苦瓜汤/排骨苦瓜汤"
    },
    {
      "id": "soup_5",
      "name": "昂刺鱼豆腐汤",
      "description": "- 昂刺鱼/沙光鱼 豆腐汤 刺少 肉嫩 营养丰盛、适合任何年龄的小伙伴",
      "difficulty": 3,
      "category": "soup",
      "imageName": "昂刺鱼豆腐汤01.jpg",
      "link": "https://cook.elisky.cn/dishes/soup/昂刺鱼豆腐汤/昂刺鱼豆腐汤"
    },
    {
      "id": "soup_6",
      "name": "朱雀汤",
      "description": "- 鸡蛋",
      "difficulty": 1,
      "category": "soup",
      "imageName": "朱雀汤.jpg",
      "link": "https://cook.elisky.cn/dishes/soup/朱雀汤/朱雀汤"
    },
    {
      "id": "soup_7",
      "name": "玉米排骨汤",
      "description": "新鲜的排骨除了拿来烧或者炖之外，还可以用来煲汤，搭配玉米和胡萝卜煲出来的汤非常鲜美。",
      "difficulty": 3,
      "category": "soup",
      "imageName": "玉米排骨汤.jpeg",
      "link": "https://cook.elisky.cn/dishes/soup/玉米排骨汤/玉米排骨汤"
    },
    {
      "id": "soup_8",
      "name": "生汆丸子汤",
      "description": "生汆丸子汤，吃的就是一个鲜、嫩、弹。",
      "difficulty": 4,
      "category": "soup",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/soup/生汆丸子汤"
    },
    {
      "id": "soup_9",
      "name": "番茄牛肉蛋花汤",
      "description": "- 牛肉",
      "difficulty": 3,
      "category": "soup",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/soup/番茄牛肉蛋花汤"
    },
    {
      "id": "soup_10",
      "name": "皮蛋瘦肉粥",
      "description": "* 饮用水",
      "difficulty": 3,
      "category": "soup",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/soup/皮蛋瘦肉粥"
    },
    {
      "id": "soup_11",
      "name": "米粥",
      "description": "大米粥是一道以大米和水作為主要原料經大火煮沸熬製而成的美食，老少皆宜，米粥具有補脾、和胃、清肺功效。",
      "difficulty": 2,
      "category": "soup",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/soup/米粥"
    },
    {
      "id": "soup_12",
      "name": "紫菜蛋花汤",
      "description": "* 鸡蛋",
      "difficulty": 2,
      "category": "soup",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/soup/紫菜蛋花汤"
    },
    {
      "id": "soup_13",
      "name": "罗宋汤",
      "description": "罗宋汤是一道源自俄罗斯甜菜汤的汤品，在传入上海后有了本土化的做法。其制作较为简单，初学者只需要 2-3 小时即可完成。",
      "difficulty": 4,
      "category": "soup",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/soup/罗宋汤"
    },
    {
      "id": "soup_14",
      "name": "羊肉汤",
      "description": "羊肉汤/羊肉汤简单易，有抵御寒冷、温润养胃、开胃健脾的功效，富含钙、铁、蛋白质等营养物质。",
      "difficulty": 3,
      "category": "soup",
      "imageName": "羊肉汤.jpg",
      "link": "https://cook.elisky.cn/dishes/soup/羊肉汤/羊肉汤"
    },
    {
      "id": "soup_15",
      "name": "腊八粥",
      "description": "> 无论盛在哪里的腊八粥，自然会熬煮过去。一年的酸甜苦辣涩。—— 迷迭香《腊八粥》",
      "difficulty": 4,
      "category": "soup",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/soup/腊八粥"
    },
    {
      "id": "soup_16",
      "name": "菌菇炖乳鸽",
      "description": "- 菌菇炖乳鸽 汤鲜、肉嫩、营养丰富",
      "difficulty": 4,
      "category": "soup",
      "imageName": "菌菇炖乳鸽.jpg",
      "link": "https://cook.elisky.cn/dishes/soup/菌菇炖乳鸽/菌菇炖乳鸽"
    },
    {
      "id": "soup_17",
      "name": "西红柿鸡蛋汤",
      "description": "- 西红柿",
      "difficulty": 2,
      "category": "soup",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/soup/西红柿鸡蛋汤"
    },
    {
      "id": "soup_18",
      "name": "金针菇汤",
      "description": "- 金针菇",
      "difficulty": 2,
      "category": "soup",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/soup/金针菇汤"
    },
    {
      "id": "soup_19",
      "name": "银耳莲子粥",
      "description": "银耳莲子粥是一道营养非常丰富的粥。口味偏甜，具有养心安神的功效。",
      "difficulty": 4,
      "category": "soup",
      "imageName": "银耳莲子粥.png",
      "link": "https://cook.elisky.cn/dishes/soup/银耳莲子粥/银耳莲子粥"
    },
    {
      "id": "soup_20",
      "name": "陈皮排骨汤",
      "description": "新鲜的排骨除了拿来烧或者炖之外，还可以用来煲汤，搭配广东陈皮煲出来的汤非常养生，对脾胃、肺及咽喉都有一定的滋补功效，熬夜党必备。",
      "difficulty": 3,
      "category": "soup",
      "imageName": "陈皮排骨汤.jpg",
      "link": "https://cook.elisky.cn/dishes/soup/陈皮排骨汤/陈皮排骨汤"
    },
    {
      "id": "soup_21",
      "name": "陈皮排骨汤",
      "description": "新鲜的排骨除了拿来烧或者炖之外，还可以用来煲汤，搭配广东陈皮煲出来的汤非常养生，对脾胃、肺及咽喉都有一定的滋补功效，熬夜党必备。",
      "difficulty": 4,
      "category": "soup",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/soup/陈皮排骨汤"
    }
  ],
  "staple": [
    {
      "id": "staple_1",
      "name": "中式馅饼",
      "description": "* 面粉（非自发粉）",
      "difficulty": 4,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/中式馅饼/中式馅饼"
    },
    {
      "id": "staple_2",
      "name": "凉粉",
      "description": "伤心凉粉吃了不会让人伤心的哦！",
      "difficulty": 3,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/凉粉/凉粉"
    },
    {
      "id": "staple_3",
      "name": "可乐炒饭",
      "description": "可乐炒饭用可乐代替糖分带来焦香微甜的风味。懒人福音，只需简单几步就能做出独特口感的炒饭，香滑鸡蛋配上浓郁酱汁，每一口都是惊喜。",
      "difficulty": 3,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/可乐炒饭"
    },
    {
      "id": "staple_4",
      "name": "基础牛奶面包",
      "description": "面包是常见的主食。普通面包需要经过长时间的发酵及和面。但本食谱尽量简化了制作步骤，方便新手上手，并尽量保证其风味。当然，要求更高的也可以查阅其的面包食谱。",
      "difficulty": 5,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/基础牛奶面包/基础牛奶面包"
    },
    {
      "id": "staple_5",
      "name": "微波炉腊肠煲仔饭",
      "description": "程序员以单身汉居多 🐶，做再多的菜也会有一个人吃不完的烦恼，因此一份简单的腊肠煲仔饭则刚刚好。",
      "difficulty": 2,
      "category": "staple",
      "imageName": "微波炉腊肠煲仔饭.png",
      "link": "https://cook.elisky.cn/dishes/staple/微波炉腊肠煲仔饭/微波炉腊肠煲仔饭"
    },
    {
      "id": "staple_6",
      "name": "意式肉酱面",
      "description": "意式肉酱面是一道非常容易做的菜，做得熟练的话，可以在 15 分钟内完成，从此告别方便面",
      "difficulty": 1,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/意式肉酱面/意式肉酱面"
    },
    {
      "id": "staple_7",
      "name": "手工水饺",
      "description": "饺子是一道非常好吃的主食之一。饱肚且易于根据自己口味进行调味，适合在 US 的同学吃不到水饺解馋。一般初学者需要 3 小时完成，难度较大",
      "difficulty": 5,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/手工水饺"
    },
    {
      "id": "staple_8",
      "name": "扬州炒饭",
      "description": "扬州炒饭是蛋炒饭的升级版，制作时间较长，但是制作步骤简单",
      "difficulty": 4,
      "category": "staple",
      "imageName": "veg.png",
      "link": "https://cook.elisky.cn/dishes/staple/扬州炒饭/扬州炒饭"
    },
    {
      "id": "staple_9",
      "name": "披萨饼皮",
      "description": "披萨制作总体来说比较简单，稍微有点麻烦也是争议最多的就是披萨饼皮，做好了披萨饼皮喜欢吃什么口味的披萨，直接把准备好的食材放上去烤熟就好，所以这里重点说一下披萨饼皮如何制作。",
      "difficulty": 4,
      "category": "staple",
      "imageName": "001.jpeg",
      "link": "https://cook.elisky.cn/dishes/staple/披萨饼皮/披萨饼皮"
    },
    {
      "id": "staple_10",
      "name": "日式咖喱饭",
      "description": "- 咖喱块（推荐品牌好侍）",
      "difficulty": 4,
      "category": "staple",
      "imageName": "成品.jpg",
      "link": "https://cook.elisky.cn/dishes/staple/日式咖喱饭/日式咖喱饭"
    },
    {
      "id": "staple_11",
      "name": "日式肥牛丼饭",
      "description": "- 洋葱（务必选用外皮为白黄色的洋葱，不要用紫色的洋葱）",
      "difficulty": 4,
      "category": "staple",
      "imageName": "成品.png",
      "link": "https://cook.elisky.cn/dishes/staple/日式肥牛丼饭/日式肥牛丼饭"
    },
    {
      "id": "staple_12",
      "name": "汤面",
      "description": "汤面是许多人喜爱的基础主食，根据个人喜好加入任何自己喜欢的食材，营养全面，固液兼具，材料易得，做法简单，有手就行。",
      "difficulty": 2,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/汤面"
    },
    {
      "id": "staple_13",
      "name": "河南蒸面条",
      "description": "河南蒸面条是一道在河南坊间流行的小吃，也可以用家里的挂面制作。",
      "difficulty": 4,
      "category": "staple",
      "imageName": "河南蒸面条.png",
      "link": "https://cook.elisky.cn/dishes/staple/河南蒸面条/河南蒸面条"
    },
    {
      "id": "staple_14",
      "name": "火腿饭团",
      "description": "好吃！富含碳水和蛋白质还有维生素。有手就行的制作难度，预计制作时间 1 h 。",
      "difficulty": 4,
      "category": "staple",
      "imageName": "饭团.png",
      "link": "https://cook.elisky.cn/dishes/staple/火腿饭团/火腿饭团"
    },
    {
      "id": "staple_15",
      "name": "炒凉粉",
      "description": "炒凉粉是一道流行于山西、陕西地区的一道特色小吃，入口滑嫩，老少皆宜。",
      "difficulty": 3,
      "category": "staple",
      "imageName": "炒凉粉成品.jpg",
      "link": "https://cook.elisky.cn/dishes/staple/炒凉粉/炒凉粉"
    },
    {
      "id": "staple_16",
      "name": "炒年糕",
      "description": "闽南风味的炒年糕是一道非常好吃的主食。它制作过程简单，原料获取方便，适合海外朋友满足口腹之欲。初学者需要 30 分钟完成，难度较小。",
      "difficulty": 3,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/炒年糕"
    },
    {
      "id": "staple_17",
      "name": "炒意大利面",
      "description": "这是一道软糯爽口的意大利面的做法，非常简单，用时大概 30 分钟。",
      "difficulty": 3,
      "category": "staple",
      "imageName": "a.jpg",
      "link": "https://cook.elisky.cn/dishes/staple/炒意大利面/炒意大利面"
    },
    {
      "id": "staple_18",
      "name": "炒方便面",
      "description": "这是在探究了传统煮方便面的改良方向之后，进行的一次最成功的尝试。它能够让方便面的美味程度提升很大程度，简单好做。开始炒吧！",
      "difficulty": 2,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/炒方便面"
    },
    {
      "id": "staple_19",
      "name": "炒河粉",
      "description": "* 炒河粉、猪肉/牛肉",
      "difficulty": 4,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/炒河粉"
    },
    {
      "id": "staple_20",
      "name": "炒馍",
      "description": "* 馒头（隔天略硬更好）",
      "difficulty": 3,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/炒馍"
    },
    {
      "id": "staple_21",
      "name": "炸酱面",
      "description": "* 肉丁/肉末",
      "difficulty": 3,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/炸酱面"
    },
    {
      "id": "staple_22",
      "name": "烙饼",
      "description": "* 油",
      "difficulty": 4,
      "category": "staple",
      "imageName": "成品.jpg",
      "link": "https://cook.elisky.cn/dishes/staple/烙饼/烙饼"
    },
    {
      "id": "staple_23",
      "name": "烧饼",
      "description": "芝麻烧饼，外酥里软，简单易做。",
      "difficulty": 3,
      "category": "staple",
      "imageName": "芝麻烧饼.jpg",
      "link": "https://cook.elisky.cn/dishes/staple/烧饼/烧饼"
    },
    {
      "id": "staple_24",
      "name": "热干面",
      "description": "* 热干面特有的碱水面",
      "difficulty": 3,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/热干面"
    },
    {
      "id": "staple_25",
      "name": "煮泡面加蛋",
      "description": "煮泡面加蛋是能满足于各种人群的生存基本需求的重要主食，其材料方便易得，做法简单易上手且制作周期极短。",
      "difficulty": 1,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/煮泡面加蛋"
    },
    {
      "id": "staple_26",
      "name": "电饭煲三文鱼炊饭",
      "description": "- 有盐牛油",
      "difficulty": 2,
      "category": "staple",
      "imageName": "电饭煲三文鱼炊饭.webp",
      "link": "https://cook.elisky.cn/dishes/staple/电饭煲三文鱼炊饭/电饭煲三文鱼炊饭"
    },
    {
      "id": "staple_27",
      "name": "空气炸锅照烧鸡饭",
      "description": "空气炸锅照烧鸡饭是一道简单易做的菜。是一道既便利又便宜的美食，而且在品尝美味的同时，新手也能完全掌握！",
      "difficulty": 4,
      "category": "staple",
      "imageName": "空气炸锅照烧鸡饭.jpg",
      "link": "https://cook.elisky.cn/dishes/staple/空气炸锅照烧鸡饭/空气炸锅照烧鸡饭"
    },
    {
      "id": "staple_28",
      "name": "米饭",
      "description": "- 北方大米",
      "difficulty": 2,
      "category": "staple",
      "imageName": "rice_regularPot.jpeg",
      "link": "https://cook.elisky.cn/dishes/staple/米饭/米饭"
    },
    {
      "id": "staple_29",
      "name": "老友猪肉粉",
      "description": "- 米粉",
      "difficulty": 3,
      "category": "staple",
      "imageName": "老友猪肉粉.jpg",
      "link": "https://cook.elisky.cn/dishes/staple/老友猪肉粉/老友猪肉粉"
    },
    {
      "id": "staple_30",
      "name": "老干妈拌面",
      "description": "* 面",
      "difficulty": 1,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/老干妈拌面"
    },
    {
      "id": "staple_31",
      "name": "肉蛋盖饭",
      "description": "肉蛋盖饭适合于单人简易晚餐，烹饪大约需要十五分钟。",
      "difficulty": 3,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/肉蛋盖饭"
    },
    {
      "id": "staple_32",
      "name": "茄子肉煎饼",
      "description": "茄子肉煎饼是一道简单易做的饼类主食。",
      "difficulty": 3,
      "category": "staple",
      "imageName": "茄子肉煎饼.jpg",
      "link": "https://cook.elisky.cn/dishes/staple/茄子肉煎饼/茄子肉煎饼"
    },
    {
      "id": "staple_33",
      "name": "葱油拌面",
      "description": "葱油拌面是一道经典的上海家常面点。做法简单，以其独特的葱油香味而闻名。富含碳水化合物和脂肪，能够快速补充能量。一般初学者只需要 20 分钟即可完成。是一道非常适合加班后的简单晚餐选择。",
      "difficulty": 2,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/葱油拌面"
    },
    {
      "id": "staple_34",
      "name": "蒸卤面",
      "description": "蒸卤面是一道豫南的非常经典的家常菜，荤素搭档，简单易学。一般初学者只需要一个小时即可完成。",
      "difficulty": 4,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/蒸卤面"
    },
    {
      "id": "staple_35",
      "name": "蛋包饭",
      "description": "蛋包饭是一道日式经典家常菜，由炒饭和嫩滑鸡蛋组成，口感丰富，色香味俱全。富含蛋白质、碳水和维生素，是非常适合早餐或正餐的选择。预估制作时间为 25 分钟。",
      "difficulty": 3,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/蛋包饭"
    },
    {
      "id": "staple_36",
      "name": "蛋炒饭",
      "description": "* 冷饭",
      "difficulty": 3,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/蛋炒饭"
    },
    {
      "id": "staple_37",
      "name": "螺蛳粉",
      "description": "正宗的螺蛳粉是不臭的！",
      "difficulty": 1,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/螺蛳粉"
    },
    {
      "id": "staple_38",
      "name": "西红柿鸡蛋挂面",
      "description": "挂面太多怎么办？只煮个白水面味道难以下咽怎么办？简单的食材煮个美味的面条怎么操作？",
      "difficulty": 2,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/西红柿鸡蛋挂面/西红柿鸡蛋挂面"
    },
    {
      "id": "staple_39",
      "name": "豆角焖面",
      "description": "豆角焖面是一道懒人美食，操作简单，方便美味。",
      "difficulty": 3,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/豆角焖面/豆角焖面"
    },
    {
      "id": "staple_40",
      "name": "酱拌荞麦面",
      "description": "酱拌荞麦面营养健康、酸甜可口",
      "difficulty": 2,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/酱拌荞麦面/酱拌荞麦面"
    },
    {
      "id": "staple_41",
      "name": "酸辣蕨根粉",
      "description": "酸辣蕨根粉是一道适合初学者的简单易做的凉菜，可做主食，以酸辣口为主，预计 10 分钟可做完。",
      "difficulty": 2,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/酸辣蕨根粉"
    },
    {
      "id": "staple_42",
      "name": "醪糟小汤圆",
      "description": "* 小汤圆",
      "difficulty": 2,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/醪糟小汤圆"
    },
    {
      "id": "staple_43",
      "name": "陕西油泼面",
      "description": "陕西油泼面是中国西北地区极具代表性的传统面食，以面条筋道、香辣开胃著称。其制作过程简单快捷，核心在于最后热油泼洒在调料上产生的独特香气。",
      "difficulty": 2,
      "category": "staple",
      "imageName": "成品.png",
      "link": "https://cook.elisky.cn/dishes/staple/陕西油泼面/陕西油泼面"
    },
    {
      "id": "staple_44",
      "name": "韩式拌饭",
      "description": "- 米饭",
      "difficulty": 3,
      "category": "staple",
      "imageName": "韩式拌饭.png",
      "link": "https://cook.elisky.cn/dishes/staple/韩式拌饭/韩式拌饭"
    },
    {
      "id": "staple_45",
      "name": "韭菜盒子",
      "description": "韭菜盒子是一道美味的传统小吃，外皮酥脆，内馅鲜香，富含维生素和蛋白质。制作简单，适合午餐，预计制作时长约 2.5 小时。",
      "difficulty": 3,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/韭菜盒子"
    },
    {
      "id": "staple_46",
      "name": "鲜肉烧卖",
      "description": "鲜肉烧卖以肥瘦三七的猪肉为主馅，融入冬笋、皮冻与香菇，蒸出半透明皮子与多汁内馅，一口咬下，汤汁四溢，咸鲜交织，尽显江南精致～",
      "difficulty": 4,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/鲜肉烧卖"
    },
    {
      "id": "staple_47",
      "name": "鲣鱼海苔玉米饭",
      "description": "空气炸锅羊排超级懒人版，味道尚可，主要看羊排的品质。",
      "difficulty": 2,
      "category": "staple",
      "imageName": "米饭.jpg",
      "link": "https://cook.elisky.cn/dishes/staple/鲣鱼海苔玉米饭/鲣鱼海苔玉米饭"
    },
    {
      "id": "staple_48",
      "name": "麻油拌面",
      "description": "省吃俭用懒人的菜：麻油拌面：想必大家都会有节约开销的时刻吧，附上个人耐吃又省钱的食谱。不需要太多的步骤简单的煮，捞，吃。",
      "difficulty": 1,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/麻油拌面"
    },
    {
      "id": "staple_49",
      "name": "麻辣减脂荞麦面",
      "description": "麻辣减脂荞麦面做法非常简单，不需要任何厨艺基础。",
      "difficulty": 2,
      "category": "staple",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/staple/麻辣减脂荞麦面"
    }
  ],
  "vegetable_dish": [
    {
      "id": "vegetable_dish_1",
      "name": "上汤娃娃菜",
      "description": "上汤娃娃菜的做法 （素菜、减肥餐）",
      "difficulty": 3,
      "category": "vegetable_dish",
      "imageName": "上汤娃娃菜.png",
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/上汤娃娃菜/上汤娃娃菜"
    },
    {
      "id": "vegetable_dish_2",
      "name": "凉拌木耳",
      "description": "凉拌木耳，由于发放物资中有很多干货，木耳是较为健康的食物。且凉拌木耳的烹饪方式也相对简单。",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/凉拌木耳/凉拌木耳"
    },
    {
      "id": "vegetable_dish_3",
      "name": "凉拌油麦菜",
      "description": "* 油麦菜",
      "difficulty": 1,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/凉拌油麦菜"
    },
    {
      "id": "vegetable_dish_4",
      "name": "凉拌莴笋",
      "description": "凉拌莴笋，开胃小菜",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": "1.jpeg",
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/凉拌莴笋/凉拌莴笋"
    },
    {
      "id": "vegetable_dish_5",
      "name": "凉拌豆腐",
      "description": "凉拌豆腐是一道清爽可口的家常凉菜。富含植物蛋白和钙质，低脂健康，非常适合夏季食用或作为日常佐餐。制作过程简单快捷，一般初学者只需要 10 分钟即可完成。",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/凉拌豆腐"
    },
    {
      "id": "vegetable_dish_6",
      "name": "凉拌金针菇",
      "description": "凉拌金针菇是一道简单快捷的开胃凉菜。口感脆嫩爽滑，富含膳食纤维和多种维生素。制作过程无需复杂的烹饪技巧，非常适合新手和忙碌时快速准备。一般初学者只需要 10 分钟即可完成。",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/凉拌金针菇"
    },
    {
      "id": "vegetable_dish_7",
      "name": "凉拌黄瓜",
      "description": "* 黄瓜",
      "difficulty": 1,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/凉拌黄瓜"
    },
    {
      "id": "vegetable_dish_8",
      "name": "包菜炒鸡蛋粉丝",
      "description": "包菜炒鸡蛋粉丝，是中国的一道日常生活中所熟知的菜品",
      "difficulty": 3,
      "category": "vegetable_dish",
      "imageName": "1.jpg",
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/包菜炒鸡蛋粉丝/包菜炒鸡蛋粉丝"
    },
    {
      "id": "vegetable_dish_9",
      "name": "地三鲜",
      "description": "- 茄子",
      "difficulty": 3,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/地三鲜"
    },
    {
      "id": "vegetable_dish_10",
      "name": "小炒藕丁",
      "description": "小炒藕丁是一道简单易做的菜，莲藕营养丰富，非常适合素食。预计制作时长 20 分钟",
      "difficulty": 3,
      "category": "vegetable_dish",
      "imageName": "小炒藕丁.jpg",
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/小炒藕丁/小炒藕丁"
    },
    {
      "id": "vegetable_dish_11",
      "name": "干锅花菜",
      "description": "干锅花菜是湘菜常见的一道菜。",
      "difficulty": 3,
      "category": "vegetable_dish",
      "imageName": "干锅花菜.jpg",
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/干锅花菜/干锅花菜"
    },
    {
      "id": "vegetable_dish_12",
      "name": "手撕包菜",
      "description": "手撕包菜是一道色香味俱全的汉族名菜，属于湘菜系",
      "difficulty": 3,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/手撕包菜/手撕包菜"
    },
    {
      "id": "vegetable_dish_13",
      "name": "拔丝土豆",
      "description": "拔丝土豆是一道色香味俱全的特色名菜，属于鲁菜系",
      "difficulty": 3,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/拔丝土豆/拔丝土豆"
    },
    {
      "id": "vegetable_dish_14",
      "name": "松仁玉米",
      "description": "松仁玉米是一道色香味俱全的家常菜，口感甜嫩清爽，松仁香脆，老少皆宜。",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/松仁玉米"
    },
    {
      "id": "vegetable_dish_15",
      "name": "椒盐玉米",
      "description": "- 玉米粒",
      "difficulty": 3,
      "category": "vegetable_dish",
      "imageName": "椒盐玉米.jpeg",
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/椒盐玉米/椒盐玉米"
    },
    {
      "id": "vegetable_dish_16",
      "name": "榄菜肉末四季豆",
      "description": "* 四季豆",
      "difficulty": 3,
      "category": "vegetable_dish",
      "imageName": "榄菜肉末四季豆.JPG",
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/榄菜肉末四季豆/榄菜肉末四季豆"
    },
    {
      "id": "vegetable_dish_17",
      "name": "水油焖蔬菜",
      "description": "水油焖蔬菜中添加了油，这提升了口感，并且可提升脂溶性维生素的摄入。相比生吃蔬菜，好处更多。",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/水油焖蔬菜"
    },
    {
      "id": "vegetable_dish_18",
      "name": "油醋爆蛋",
      "description": "油醋爆蛋是十分简单但是色香味一绝的一道菜，属于湘菜。制作十分简单，大约十分钟。",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/油醋爆蛋"
    },
    {
      "id": "vegetable_dish_19",
      "name": "洋葱炒鸡蛋",
      "description": "洋葱炒鸡蛋，是中国的一道日常生活中所熟知的菜品",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": "1.jpeg",
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/洋葱炒鸡蛋/洋葱炒鸡蛋"
    },
    {
      "id": "vegetable_dish_20",
      "name": "清炒花菜",
      "description": "清炒花菜是一道常见的家常素菜。富含维生素 C 和膳食纤维，口感脆嫩。做法简单，是一道快速上手的炒菜。一般初学者只需要 15 分钟即可完成。",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/清炒花菜"
    },
    {
      "id": "vegetable_dish_21",
      "name": "清蒸南瓜",
      "description": "清蒸南瓜是一道制作极其简单的家常甜点或主食。它最大程度地保留了南瓜本身的天然甜味和营养，口感软糯。是健康饮食的不错选择。一般初学者只需要 15-20 分钟即可完成（主要为蒸的时间）。",
      "difficulty": 1,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/清蒸南瓜"
    },
    {
      "id": "vegetable_dish_22",
      "name": "炒滑蛋",
      "description": "炒滑蛋是一道简单易做的菜。一般初学者只需要 5 分钟即可完成。",
      "difficulty": 1,
      "category": "vegetable_dish",
      "imageName": "炒滑蛋.jpg",
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/炒滑蛋/炒滑蛋"
    },
    {
      "id": "vegetable_dish_23",
      "name": "炒茄子",
      "description": "家常炒茄子，简单易学，原料不复杂，其中可选项有无皆可。（但是八角强烈推荐）",
      "difficulty": 3,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/炒茄子"
    },
    {
      "id": "vegetable_dish_24",
      "name": "炒青菜",
      "description": "制作简单方便。预计 10 分钟即可完成。",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/炒青菜"
    },
    {
      "id": "vegetable_dish_25",
      "name": "烤茄子",
      "description": "非常简单方便，而且香极了",
      "difficulty": 3,
      "category": "vegetable_dish",
      "imageName": "烤茄子.jpg",
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/烤茄子/烤茄子"
    },
    {
      "id": "vegetable_dish_26",
      "name": "白灼菜心",
      "description": "> 没有拍照，上图是网图，不过做出来都差不多啦",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": "白灼菜心.jpg",
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/白灼菜心/白灼菜心"
    },
    {
      "id": "vegetable_dish_27",
      "name": "皮蛋豆腐",
      "description": "皮蛋豆腐是一道简单易做的菜，一般初学者只需要 5 分钟即可完成。松花蛋 Q 弹滑嫩，配上嫩豆腐的清爽，咸香开胃超下饭！",
      "difficulty": 1,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/皮蛋豆腐"
    },
    {
      "id": "vegetable_dish_28",
      "name": "糖拌西红柿",
      "description": "新鲜可口，制作简便，营养价值高，适合夏季食用，家庭餐桌上的一道美味凉菜。西红柿含有大量的维生素 C, 做法简单 几分钟就可完成。",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": "火山飘雪.jpg",
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/糖拌西红柿/糖拌西红柿"
    },
    {
      "id": "vegetable_dish_29",
      "name": "素炒豆角",
      "description": "巨下饭的家常菜",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/素炒豆角"
    },
    {
      "id": "vegetable_dish_30",
      "name": "红烧冬瓜",
      "description": "红烧冬瓜是一道具有色泽红亮，香鲜味美、营养价值丰富的家常菜",
      "difficulty": 3,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/红烧冬瓜/红烧冬瓜"
    },
    {
      "id": "vegetable_dish_31",
      "name": "红烧茄子",
      "description": "- 大蒜",
      "difficulty": 4,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/红烧茄子"
    },
    {
      "id": "vegetable_dish_32",
      "name": "脆皮豆腐",
      "description": "浓郁的酱汁裹满豆腐，吃一口就停不下来，别提有多好吃。",
      "difficulty": 3,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/脆皮豆腐"
    },
    {
      "id": "vegetable_dish_33",
      "name": "芹菜拌茶树菇",
      "description": "芹菜拌茶树菇是一道简单易做的凉拌菜。富含多种人体所需的维生素和矿物质。一般初学者只需要 30 分钟即可完成。",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": "芹菜拌茶树菇.jpg",
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/芹菜拌茶树菇/芹菜拌茶树菇"
    },
    {
      "id": "vegetable_dish_34",
      "name": "茄子炖土豆",
      "description": "- 茄子",
      "difficulty": 3,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/茄子炖土豆"
    },
    {
      "id": "vegetable_dish_35",
      "name": "莴笋叶煎饼",
      "description": "莴笋叶煎饼营养、好吃",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/莴笋叶煎饼/莴笋叶煎饼"
    },
    {
      "id": "vegetable_dish_36",
      "name": "菠菜炒鸡蛋",
      "description": "这道菜难度系数简单，营养丰富。",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": "菠菜炒鸡蛋.jpg",
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/菠菜炒鸡蛋/菠菜炒鸡蛋"
    },
    {
      "id": "vegetable_dish_37",
      "name": "葱煎豆腐",
      "description": "- 白豆腐",
      "difficulty": 3,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/葱煎豆腐"
    },
    {
      "id": "vegetable_dish_38",
      "name": "蒜蓉空心菜",
      "description": "背景：",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": "1.JPG",
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/蒜蓉空心菜/蒜蓉空心菜"
    },
    {
      "id": "vegetable_dish_39",
      "name": "蒜蓉西兰花",
      "description": "- 西兰花 1 个",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/蒜蓉西兰花"
    },
    {
      "id": "vegetable_dish_40",
      "name": "蒲烧茄子",
      "description": "众所皆知，茄子🍆和土豆🥔是两种荤菜。这一道蒲烧茄子，从外观上之于鳗鱼正如`土豆炖.*`中的生姜之于土豆。",
      "difficulty": 3,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/蒲烧茄子"
    },
    {
      "id": "vegetable_dish_41",
      "name": "虎皮青椒",
      "description": "- 青椒",
      "difficulty": 3,
      "category": "vegetable_dish",
      "imageName": "虎皮青椒.jpg",
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/虎皮青椒/虎皮青椒"
    },
    {
      "id": "vegetable_dish_42",
      "name": "蚝油三鲜菇",
      "description": "几分钟就能做出的蚝油蘑菇，滑嫩入味鲜美可口，别提多好吃了。",
      "difficulty": 3,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/蚝油三鲜菇/蚝油三鲜菇"
    },
    {
      "id": "vegetable_dish_43",
      "name": "蚝油生菜",
      "description": "- 生菜",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/蚝油生菜"
    },
    {
      "id": "vegetable_dish_44",
      "name": "西红柿炒鸡蛋",
      "description": "西红柿炒蛋是中国家常几乎最常见的一道菜肴。它的原材料易于搜集，制作步骤也较为简单，所以非常适合新厨师上手，是很多人学习做菜时做的第一道菜。",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/西红柿炒鸡蛋"
    },
    {
      "id": "vegetable_dish_45",
      "name": "西红柿豆腐汤羹",
      "description": "西红柿豆腐汤羹是一道很清淡美味的汤羹",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": "1.jpeg",
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/西红柿豆腐汤羹/西红柿豆腐汤羹"
    },
    {
      "id": "vegetable_dish_46",
      "name": "西葫芦炒鸡蛋",
      "description": "西葫芦炒鸡蛋是一道简单易做的家常菜。简单易购的食材，好吃又下饭。",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": "西葫芦炒鸡蛋.jpeg",
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/西葫芦炒鸡蛋/西葫芦炒鸡蛋"
    },
    {
      "id": "vegetable_dish_47",
      "name": "话梅煮毛豆",
      "description": "酸甜可口、营养价值高的一种简易美食",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": "1.jpeg",
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/话梅煮毛豆/话梅煮毛豆"
    },
    {
      "id": "vegetable_dish_48",
      "name": "酸辣土豆丝",
      "description": "酸辣土豆丝是一道简单易做的菜。色泽光亮，酸辣可口。辅料辣椒富含维生素 C。该菜用料简单，好学易做",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/酸辣土豆丝"
    },
    {
      "id": "vegetable_dish_49",
      "name": "金针菇日本豆腐煲",
      "description": "金针菇日本豆腐煲是一道容易上手的日常料理。",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/金针菇日本豆腐煲"
    },
    {
      "id": "vegetable_dish_50",
      "name": "金钱蛋",
      "description": "金钱蛋是将水煮蛋切片煎至金黄，配以青红椒、豆豉爆炒而成。外焦里嫩，咸香微辣，形似铜钱寓意吉祥。简单快手又下饭的湘味家常～",
      "difficulty": 3,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/金钱蛋"
    },
    {
      "id": "vegetable_dish_51",
      "name": "陕北熬豆角",
      "description": "陕北熬豆角是一种对初学者极其友善的菜，因其制作方式使用`熬`的方式，食材可多可少，可有可无，几乎不存在失败的可能性。",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/陕北熬豆角"
    },
    {
      "id": "vegetable_dish_52",
      "name": "雷椒皮蛋",
      "description": "雷椒皮蛋是一个非常简单的下饭凉菜，这道菜操作比较简单，且食材常见, 最终成品卖相不会很好看，但是是夏天下饭的神器之一",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/雷椒皮蛋"
    },
    {
      "id": "vegetable_dish_53",
      "name": "鸡蛋火腿炒黄瓜",
      "description": "- 黄瓜",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/鸡蛋火腿炒黄瓜"
    },
    {
      "id": "vegetable_dish_54",
      "name": "鸡蛋羹",
      "description": "微波炉鸡蛋羹是一个简单易制作的菜。非常适合夜间突然饿了的时候充当夜宵，快捷简单。",
      "difficulty": 2,
      "category": "vegetable_dish",
      "imageName": "微波炉鸡蛋羹.jpg",
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/鸡蛋羹/鸡蛋羹"
    },
    {
      "id": "vegetable_dish_55",
      "name": "鸡蛋花",
      "description": "鸡蛋花是一道简单易做的菜。有着润肺止咳、缓解喉咙不适的家常食疗方。对于初学者，做一遍即可学会。有甜和咸两种做法。",
      "difficulty": 1,
      "category": "vegetable_dish",
      "imageName": null,
      "link": "https://cook.elisky.cn/dishes/vegetable_dish/鸡蛋花/鸡蛋花"
    }
  ]
};

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
            return `img/${dish.id}${ext}`;
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
