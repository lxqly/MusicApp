const Mock = require('mockjs')

const bannerJson = [
    {
        "pic": 'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
        "source": "https://www.ytmp3.cn/down/77275.mp3",
        "id": 1,
        "songName": "最好的未来",
        "totalTime": "04:15.00",
        "singer": "刘若英",
        "lysic": "[00:00.00]刘若英 - 最好的未来 (奥迪“童梦圆”公益之旅主题曲)\
        [00:04.89]作曲.编曲:张亚东 填词:崔恕\
        [00:08.62]@  @ 刘旭东  制\
        [00:13.63]只爱欧阳畅 QQ:284674969\
        [00:28.08]\
        [00:32.79]每种色彩  都应该盛开\
        [00:39.90]别让阳光背后只剩 下黑白\
        [00:45.59]\
        [00:46.55]每一个人 都有权利期待\
        [00:54.34]爱放在手心 跟我来\
        [00:59.79]\
        [01:01.86]这是最好的未来\
        [01:08.59]我们用爱 筑造完美现在\
        [01:16.51]千万溪流汇聚成 大海\
        [01:23.49]每朵浪花一样澎湃\
        [01:28.62]\
        [01:34.70]每个梦想 都值得灌溉\
        [01:41.73]眼泪变成雨水 就能落下来\
        [01:47.69]\
        [01:48.89]每个孩子 都应该被宠爱\
        [01:55.77]他们是我们的未来\
        [02:01.54]\
        [02:03.05]这是最好的未来\
        [02:09.31]我们用爱 筑造完美现在\
        [02:17.42]千万溪流汇聚成 大海\
        [02:24.44]每朵浪花一样澎湃\
        [02:30.73]\
        [02:32.21]这是最好的未来\
        [02:38.53]不分你我 彼此相亲相爱\
        [02:46.81]千山万水 传递着关怀\
        [02:53.84]幸福永远与爱同在\
        [02:59.49]\
        [03:03.01]每个梦想 都值得灌溉\
        [03:08.82]眼泪变成雨水 就能落下来\
        [03:16.12]每个孩子 都应该被宠爱\
        [03:23.17]他们是我们的未来\
        [03:28.52]\
        [03:31.35]同一天空底下 相关怀\
        [03:38.30]这就是最好的未来\
        [03:46.03]刘若英 - 最好的未来 (奥迪“童梦圆”公益之旅主题曲)\
        [03:49.29]作曲.编曲:张亚东 填词:崔恕\
        [03:52.29]只爱欧阳畅 QQ:284674969\
        [03:55.82]@  @ 刘旭东  制"
    },
    {
        "pic": 'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
        "source": "https://www.ytmp3.cn/down/77275.mp3",
        "id": 2,
        "songName": "停格瞬间"
    },
    {
        "pic": 'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
        "source": "https://www.ytmp3.cn/down/77275.mp3",
        "id": 3,
        "songName": "摇人"
    },
    {
        "pic": 'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
        "source": "https://www.ytmp3.cn/down/77275.mp3",
        "id": 4,
        "songName": "大吉大利晚上吃鸡"
    },
    {
        "pic": 'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
        "source": "https://www.ytmp3.cn/down/77275.mp3",
        "id": 5,
        "songName": "会不会"
    }
]

const listJson = [
    {
        "pic": 'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
        "source": "https://www.ytmp3.cn/down/77275.mp3",
        "id": 111,
        "songName": "最好的未来",
        "totalTime": "04:15.00",
        "singer": "刘若英",
        "lysic": ""
    },
    {
        "pic": 'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
        "source": "http://www.ytmp3.cn/down/77256.mp3",
        "id": 112,
        "songName": "停格瞬间"
    },
    {
        "pic": 'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
        "source": "http://www.ytmp3.cn/down/77254.mp3",
        "id": 113,
        "songName": "摇人"
    },
    {
        "pic": 'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
        "source": "http://www.ytmp3.cn/down/76908.mp3",
        "id": 114,
        "songName": "大吉大利晚上吃鸡"
    },
    {
        "pic": 'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
        "source": "http://www.ytmp3.cn/down/77246.mp3",
        "id": 115,
        "songName": "会不会"
    },
    {
        "pic": 'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
        "source": "http://www.ytmp3.cn/down/77186.mp3",
        "id": 116,
        "songName": "外婆的澎湖湾"
    },
    {
        "pic": 'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
        "source": "http://www.ytmp3.cn/down/77256.mp3",
        "id": 117,
        "songName": "停格瞬间"
    },
    {
        "pic": 'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
        "source": "http://www.ytmp3.cn/down/77254.mp3",
        "id": 118,
        "songName": "摇人"
    },
    {
        "pic": 'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
        "source": "http://www.ytmp3.cn/down/76908.mp3",
        "id": 119,
        "songName": "大吉大利晚上吃鸡"
    },
    {
        "pic": 'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
        "source": "http://www.ytmp3.cn/down/77246.mp3",
        "id": 120,
        "songName": "会不会"
    }
]
Mock.mock('/mock/banner', {
    'data': bannerJson,
    'code': 200,
    'msg': '',
    'type': 'GET'
})

Mock.mock('/mock/list', {
    'data': listJson,
    'code': 200,
    'msg': '',
    'type': 'GET'
})

let arr = [...bannerJson, ...listJson]
arr.forEach((item) => {
    Mock.mock(`/mock/detail?id=${item.id}`, {
        'data': item,
        'code': 200,
        'msg': '',
        'type': 'GET'
    })
})