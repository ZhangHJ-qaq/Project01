$(function () {
    $("#personalCenter").on("mouseover", function () {
        $("#dropdownMenu").removeClass("hide");
    })
        .on("mouseleave", function () {
            $("#dropdownMenu").addClass("hide");

        })

});
