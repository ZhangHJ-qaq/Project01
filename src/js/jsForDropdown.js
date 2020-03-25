$(function () {
    $("#dropdownMenu").hide();
    // 实现下拉菜单的js代码
    $("#personalCenter").on("mouseover", function () {
        $("#dropdownMenu").slideDown("fast")
        // $("#dropdownMenu").removeClass("hide");
    })
        .on("mouseleave", function () {
            $("#dropdownMenu").slideUp("fast")

        })

});
