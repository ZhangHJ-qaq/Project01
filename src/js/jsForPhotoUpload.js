$(function () {
    // 上传图片，并调整图片使之成为150*150（通过加border）
    $("#fileUploadBtn").change(function(e) {
        let imgBox = e.target;
        uploadImg($('#imgBox'), imgBox)
    });

    function uploadImg(element, tag) {
        let file = tag.files[0];
        let imgSrc;
        if (!/image\/\w+/.test(file.type)) {
            alert("你上传的好像不是图片");
            return false;
        }
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            element.empty();
            imgSrc = this.result;
            let img = document.createElement("img");
            $(img).attr("src", imgSrc);
            element.append(img);
            img.onload=function () {
                imageAdjust(img);//调整被上传图片的版式
            }

        };
    }

});

function imageAdjust(image) {
    jQuery(image).each(function () {
        let width = this.width;
        let height = this.height;
        let k = null;//k是比例系数
        if (width < height) {//此时，图片是“瘦的”
            k = 150 / height;
            jQuery(this).css({
                "width":width*k+"px",
                "height":height*k+"px",
                "border-left-width":(height-width)/2*k+"px",
                "border-right-width":(height-width)/2*k+"px",
                "border-style":"solid",
                "border-color":"white"
            })
        }
        else {
            k = 150 / width;
            jQuery(this).css({
                "width":width*k+"px",
                "height":height*k+"px",
                "border-bottom-width":(width-height)/2*k+"px",
                "border-top-width":(width-height)/2*k+"px",
                "border-style":"solid",
                "border-color":"white"
            })
        }
    })


}



