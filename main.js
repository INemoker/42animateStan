var text = `
/*大家好~来做点什么呢~
先来个背景吧~*/ 
body{
    background: linear-gradient(to bottom, #bbebf5 0%,#ffffff 76%,#ffffff 76%);
}
/*调下位置*/
#code{  
    padding: 16px;
}

/*画个头*/
.stan .head{
    background-color: #FEDDB2;
    border-radius: 50%;
}
/*加上眼睛*/
.stan .head .lefteye{
    background-color: #fff;
    border-radius: 50%;
    transform:rotate(30deg);
}
.stan .head .righteye{
    background-color: #fff;
    border-radius: 50%;
    transform:rotate(-30deg);
}
/*加上眼珠*/
.stan .head .lefteye::before{
    background: #000;
    border-radius: 50%;
}
.stan .head .righteye::before{
    background: #000;
    border-radius: 50%;
}
/*嘴巴:)*/
.stan .head .mouth{
    border: 1px solid transparent;
    border-top: 1px solid #333333;
    border-radius: 50%;
    transform: rotate(180deg);
}
/*戴上帽子*/
.stan .head::before{
    border-top: 70px solid #5162AA;
    border-radius: inherit;
}
.stan .hat{
    box-shadow: 0 -20px 0 -1px #E33940;
    border-radius: 50% 50% 0 0 / 10% 10% 0 0;
}
/*小绒球*/
.stan .bobble >span{
    background: #E33940;
    border-radius: 10%;
}
.stan .bobble >span.rect1{
    transform:rotate(25deg);
}
.stan .bobble >span.rect2{
    transform:rotate(51deg);
}
.stan .bobble >span.rect3{
    transform:rotate(77deg);
}
.stan .bobble >span.rect4{
    transform:rotate(102deg);
}
.stan .bobble >span.rect5{
    transform:rotate(128deg);
}
.stan .bobble >span.rect6{
    transform:rotate(154deg);
}
/*给stan加个身子*/
.stan .body .inner {
    border-bottom: 104px solid #BB6F4F;
    border-radius: 10% 21% 50% 50% / 0 0 5% 5%;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    transform: translate(-50%,-8px);
    z-index: -1;
}
/*穿上衣服*/
.stan .body .inner::before {
    border-left: 3px solid #333333;
    transform:translateY(12px);
}
/*胳膊+手*/
.stan .body .leftarm {
    background: #BB6F4F;
    transform: skew(-17deg);
    border-radius: 0 0 30% 50% / 0 0 10% 20%;
    z-index: -1;
}
.stan .body .leftarm:before {
    border-right: 2px solid #333333;
}
.stan .body .leftarm .hand{
    background: #E33940;
    transform: rotateX(-30deg) skewX(14deg);
    border-radius: 50% 50% 40% 60% / 50% 20% 20% 50%;
}
.stan .body .rightarm {
    background: #BB6F4F;
    transform: skew(17deg);
    border-radius: 0 0 50% 30% / 0 0 20% 10%;
    z-index: -1;
}
.stan .body .rightarm:before {
    border-right: 2px solid #333333;
}
.stan .body .rightarm .hand {
    background: #E33940;
    transform: rotateX(-30deg) skewX(-14deg);
    border-radius: 50% 50% 60% 40% / 20% 50% 50% 20%;
}
/*戴上围巾*/
.stan .body .scarf {
    z-index: -1;
    background: #E1383B;
    border-radius: 50% 50% 50% 50% / 0 0 85% 85%;
}
/*系好口子*/
.stan .buttons {
    background: #333333;
    border-radius: 50%;
    z-index: 12;
}
.stan .buttons::before {
    border-radius: inherit;
    background: inherit;
}
.stan .buttons::after {
    border-radius: inherit;
    background: inherit;
}
/*画上腿*/
.stan .legs{
    z-index: -2;
    background: #5060AB;
}
.stan .legs .foot {
    z-index: 1;
    border-radius: 50% 50% 0 0 / 95% 95% 0 0;
    background: #333333;
}
.stan .legs .foot.left {
    transform:translateX(-10px);
}
.stan .legs .foot.right {
    transform:translateX(58px);
}`
var text2=`
.southPark{
    transform:translateX(-440px) translateY(390px);
}
/*现在你有了一个stan~~~*/
`


document.getElementById("mp3").volume = 0.2;

function writeCode(prefix,text,fn) {
    let domCode = document.querySelector('#code')
    let styleTag = document.querySelector('#style')
    domCode.innerHTML = prefix || '' 
    var n = 0
    var id = setInterval(() => {
        n += 1
        domCode.innerHTML =
            Prism.highlight(prefix+text.substring(0, n), Prism.languages.css)
        domCode.scrollTop = domCode.scrollHeight
        styleTag.innerHTML = prefix+text.substring(0, n)
        if (n > text.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 20)
}


function createSvg(fn){
    let domSvg = document.createElement('div')
    domSvg.classList.add('southPark')
    domSvg.style="position: absolute;bottom: 62%;right: 28%;z-index: -1;height: 295px;"+"width: 260px; background: url(./South_Park_Logo.svg) no-repeat;"+"background-size: 260px;"
    document.body.appendChild(domSvg)
    fn.call()
}


writeCode('',text,()=>{
    createSvg(()=>{writeCode(text,text2,()=>{})})
})