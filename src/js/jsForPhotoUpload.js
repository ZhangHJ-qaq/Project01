$(function () {
    // 上传图片，并调整图片使之成为150*150（通过加border）
    $("#fileUploadBtn").change(function(e) {
        var imgBox = e.target;
        uploadImg($('#imgBox'), imgBox)
    });

    function uploadImg(element, tag) {
        let file = tag.files[0];
        let imgSrc;
        if (!/image\/\w+/.test(file.type)) {
            alert("看清楚，这个需要图片！");
            return false;
        }
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            element.empty();
            console.log(this.result);
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
    let width=image.width;
    let height=image.height;//现在我们得到了图片原始的长宽
    image.style.borderColor="rgba(255,255,255,1)";
    if(width<height){
        //此时，宽度小于高度，原来的图片是“瘦的”
        let k=150/height;//此时高度应该撑满，定义一个比例系数k
        image.style.borderStyle="solid";
        image.style.width=width*k+"px";
        image.style.height=height*k+"px";
        image.style.borderRightWidth=(height-width)/2*k+"px";
        image.style.borderLeftWidth=(height-width)/2*k+"px";//在“瘦的”图片两侧加上border
    }
    else if(width===height){
        image.style.width=150+"px";
        image.style.height=150+"px";
    }
    else if(width>height){//此时图片是“胖的”，思路和处理“瘦的”图片类似,在上下补充border
        let k=150/width;
        image.style.borderStyle="solid";
        image.style.width=width*k+"px";
        image.style.height=height*k+"px";
        image.style.borderTopWidth=(width-height)/2*k+"px";
        image.style.borderBottomWidth=(width-height)/2*k+"px"
    }


}



