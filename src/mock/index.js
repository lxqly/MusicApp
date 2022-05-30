const Mock = require('mockjs')

const bannerJson = [
    {"pic": 'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
    "source": "http://www.ytmp3.cn/down/77186.mp3",
     "id":111,
    "songName":"外婆的澎湖湾"},
    {"pic": 'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
    "source": "http://www.ytmp3.cn/down/77256.mp3",
     "id":112,
    "songName":"停格瞬间"},
    {"pic":'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
    "source": "http://www.ytmp3.cn/down/77254.mp3",
     "id":113,
    "songName":"摇人"},
    {"pic":'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
    "source": "http://www.ytmp3.cn/down/76908.mp3",
     "id":114,
    "songName":"大吉大利晚上吃鸡"},
    {"pic":'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
    "source": "http://www.ytmp3.cn/down/77246.mp3",
     "id":115,
    "songName":"会不会"}
]

const listJson = [
    {"pic": 'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
    "source": "http://www.ytmp3.cn/down/77186.mp3",
     "id":111,
    "songName":"外婆的澎湖湾"},
    {"pic": 'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
    "source": "http://www.ytmp3.cn/down/77256.mp3",
     "id":112,
    "songName":"停格瞬间"},
    {"pic":'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
    "source": "http://www.ytmp3.cn/down/77254.mp3",
     "id":113,
    "songName":"摇人"},
    {"pic":'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
    "source": "http://www.ytmp3.cn/down/76908.mp3",
     "id":114,
    "songName":"大吉大利晚上吃鸡"},
    {"pic":'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
    "source": "http://www.ytmp3.cn/down/77246.mp3",
     "id":115,
    "songName":"会不会"},
    {"pic": 'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
    "source": "http://www.ytmp3.cn/down/77186.mp3",
     "id":116,
    "songName":"外婆的澎湖湾"},
    {"pic": 'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
    "source": "http://www.ytmp3.cn/down/77256.mp3",
     "id":117,
    "songName":"停格瞬间"},
    {"pic":'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
    "source": "http://www.ytmp3.cn/down/77254.mp3",
     "id":118,
    "songName":"摇人"},
    {"pic":'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
    "source": "http://www.ytmp3.cn/down/76908.mp3",
     "id":119,
    "songName":"大吉大利晚上吃鸡"},
    {"pic":'https://cdn.pixabay.com/photo/2019/11/19/06/02/seascape-4636549__480.jpg',
    "source": "http://www.ytmp3.cn/down/77246.mp3",
     "id":120,
    "songName":"会不会"}
]
Mock.mock('/mock/banner',{
    'data':bannerJson,
    'code':200,
    'msg':'',
    'type':'GET'
})

Mock.mock('/mock/list',{
    'data':listJson,
    'code':200,
    'msg':'',
    'type':'GET'    
})