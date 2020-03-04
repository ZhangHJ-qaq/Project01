$(function () {

    // 实现下拉菜单的js代码
    $("#personalCenter").on("mouseover", function () {
        $("#dropdownMenu").removeClass("hide");
    })
        .on("mouseleave", function () {
            $("#dropdownMenu").addClass("hide");

        })

});
