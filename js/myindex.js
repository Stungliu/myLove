// S.Shape.switchShape(S.ShapeBuilder.letter("你好"))
var textArr = [
    {
        text:"宝贝",
        time:3000
    },
    {
        text:"我们认识多久了？",
        time:5000
    },
    {
        text:"我们相识于",
        time:4000
    },
    {
        text:"九月十三日",
        time:4000
    },
    {
        text:"你让我的九月",
        time:5000
    },
    {
        text:"与往常有了一丝不同",
        time:5000
    },
    {
        text:"我们第一次相见于",
        time:5000
    },
    {
        text:"十月三日",
        time:4000
    },
    {
        text:"已经度过了一个月的时间",
        time:5000
    },
    {
        text:"在此期间",
        time:4000
    },
    {
        text:"你我一起说过很多",
        time:5000
    },
    {
        text:"我不善言辞",
        time:4000
    },
    {
        text:"尽量寻找话题",
        time:4000
    },
    {
        text:"经常",
        time:4000
    },
    {
        text:"惹你生气",
        time:4000
    },
    {
        text:"逗你笑(没几次吧)",
        time:6000
    },
    {
        text:"许多许多...",
        time:4000
    },
    {
        text:"这也成为了",
        time:4000
    },
    {
        text:"我们彼此的回忆",
        time:5000
    },
    {
        text:"对彼此的了解",
        time:5000
    },
    {
        text:"更加深入",
        time:4000
    },
    {
        text:"使得我们",
        time:4000
    },
    {
        text:"这一个月的友谊",
        time:4000
    },
    {
        text:"就像多年好友一般",
        time:5000
    },
    {
        text:"无话不谈",
        time:4000
    },
    {
        text:"在此",
        time:4000
    },
    {
        text:"我想对你说",
        time:4000
    },
    {
        text:"李蕊！！！",
        time:4000
    },
    {
        text:"我爱你！",
        time:4000
    },
    {
        text:"❤❤❤",
        time:4000
    }
]
var i = 0
function timeOut() {
    if(i == textArr.length) {
        return
    }
    new Promise((resolve,reject)=>{
        S.Shape.switchShape(S.ShapeBuilder.letter(textArr[i].text))
        setTimeout(()=>{
            resolve()
        },textArr[i].time)
    }).then(()=>{
        i++
        timeOut()
    })
}
var innetWidth = document.body.parentElement.clientWidth
var innerHeight = document.body.parentElement.clientHeight
var canvas = document.querySelector(".canvas");
if(innetWidth < innerHeight){
    document.body.style.transform = `rotateZ(${90}deg)`;
    canvas.width = innerHeight
    canvas.height = innetWidth
}else{
    canvas.width = innetWidth
    canvas.height = innerHeight
}

S.init();
timeOut()
