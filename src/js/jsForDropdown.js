$(function () {
    // 实现下拉菜单的js代码
    $("#dropdownMenu").css({
        display:"none"
    });
    $("#personalCenter").on("mouseover", function () {
        $("#dropdownMenu").css({
            display: "block"
        })
    })
        .on("mouseleave", function () {
            $("#dropdownMenu").css({
                display: "none"
            })

        })

});
