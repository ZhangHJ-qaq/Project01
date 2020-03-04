$(function () {
    // 搜索详情页。如果图片详情文字过多，则隐藏过多的部分
    let descriptions=$(".imageDescription");

    for(let i=0;i<=descriptions.length-1;i++){
        let originStr=$(descriptions[i]).html();
        if(originStr.length>100){
            originStr=originStr.substring(0,99);
            originStr+="......"
        }
        $(descriptions[i]).html(originStr);
    }
});

function trim(str){

    return str.replace(/\s*/g, '');

}