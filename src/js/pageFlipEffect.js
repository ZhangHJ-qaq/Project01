$(function () {
    let body=$('body');
    body.hide();
    body.fadeIn(350);
    $("a.pageFlip").click(function (e) {
        e.preventDefault();
        let href=$(this).attr("href");
        body.fadeOut(350,function () {
            window.location.href=href;
        })
    })
});
