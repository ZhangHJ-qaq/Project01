$(function () {
    $("body").click(function (e) {
        let x = e.pageX;
        let y = e.pageY;
        let randomNum=parseInt(Math.random()*6);
        let content='';
        switch (randomNum) {
            case 0:content="Welcome To My Website";break;
            case 1:content="虎头魔龙(Hu Tou Mo Long)";break;
            case 2:content="春色僧(Chun Se Seng)";break;
            case 3:content="酒神(Jiu Shen)";break;
            case 4:content="炮灰婆(Pao Hui Po)";break;
            case 5:content="马云·沙奇里(Ma Yun·Sha Qi Li)";break;
        }
        let popMessage = $("<span></span>");
        popMessage.html(content);
         randomNum=parseInt(Math.random()*4);
        let color="";
        switch (randomNum) {
            case 0:color="red";break;
            case 1:color="orange";break;
            case 2:color="green";break;
            case 3:color="blue";break;
        }
        popMessage.css({
            position: "absolute",
            top: y,
            left: x,
            color:color,
            fontSize:"120%",
            fontWeight:"bold"
        });
        $("body").append(popMessage);
        $(popMessage).animate({top: y - 250,opacity:0}, 1000, function () {
            popMessage.remove();
        })
    });
});