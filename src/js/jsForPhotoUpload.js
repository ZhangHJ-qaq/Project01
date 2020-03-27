$(function () {
    jQuery("#fileUpload").change(function () {
        let imgBox = jQuery("#imgBox");
        let file = document.getElementById("fileUpload").files[0];
        let extension = file.name.split(".")[file.name.split(".").length - 1].toLowerCase();
        if (extension !== 'png' && extension !== 'jpg' && extension !== 'gif' && extension !== 'bmp') {
            alert("你上传的文件不符合要求，只支持png,jpg,gif,bmp格式的图片");
            return false;
        }
        let fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        jQuery(fileReader).on('load', function () {
            imgBox.empty();
            let img = document.createElement("img");
            jQuery(img).attr({
                src: fileReader.result,
                alt: ""
            });
            imgBox.append(img);
            img.onload = function () {
                imageAdjust(img);
            }
        });
    })
});

function imageAdjust(image) {
    let width = image.width;
    let height = image.height;
    let k = null;//k是比例系数
    if (width < height) {//此时，图片是“瘦的”
        k = 150 / height;
        jQuery(image).css({
            "width": width * k + "px",
            "height": height * k + "px",
            "border-left-width": (height - width) / 2 * k + "px",
            "border-right-width": (height - width) / 2 * k + "px",
            "border-style": "solid",
            "border-color": "white"
        })
    } else {
        k = 150 / width;
        jQuery(image).css({
            "width": width * k + "px",
            "height": height * k + "px",
            "border-bottom-width": (width - height) / 2 * k + "px",
            "border-top-width": (width - height) / 2 * k + "px",
            "border-style": "solid",
            "border-color": "white"
        })
    }
}



