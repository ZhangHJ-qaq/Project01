$(function () {
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