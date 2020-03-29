window.onload = function () {
    let images = jQuery(".display");
    images.each(function () {
        realImage=new Image();
        realImage.src=this.src;
        let width=realImage.width;
        let height=realImage.height;
        $(this).css({
            objectFit:"initial"
        });
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

};

