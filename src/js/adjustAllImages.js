window.onload = function () {
    let images = document.querySelectorAll(".display");
    for (let i = 0; i <= images.length - 1; i++) {
        let url = images[i].src;
        let width = images[i].width;
        let height = images[i].height;//现在我们得到了图片原始的长宽
        images[i].style.borderColor = "rgba(255,255,255,1)";
        if (width < height) {
            //此时，宽度小于高度，原来的图片是“瘦的”
            let k = 150 / height;//此时高度应该撑满，定义一个比例系数k
            images[i].style.borderStyle = "solid";
            images[i].style.width = width * k + "px";
            images[i].style.height = height * k + "px";
            images[i].style.borderRightWidth = (height - width) / 2 * k + "px";
            images[i].style.borderLeftWidth = (height - width) / 2 * k + "px";//在“瘦的”图片两侧加上border
        } else if (width === height) {
            images[i].style.width = 150 + "px";
            images[i].style.height = 150 + "px";
        } else if (width > height) {//此时图片是“胖的”，思路和处理“瘦的”图片类似,在上下补充border
            let k = 150 / width;
            images[i].style.borderStyle = "solid";
            images[i].style.width = width * k + "px";
            images[i].style.height = height * k + "px";
            images[i].style.borderTopWidth = (width - height) / 2 * k + "px";
            images[i].style.borderBottomWidth = (width - height) / 2 * k + "px"
        }


    }
};

