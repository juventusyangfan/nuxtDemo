function $id(id) {
    return document.getElementById(id);
}

function bindEvent() {
    var sea = $id("my_search");
    /*banner对象*/
    // var banner = $id("my_banner");
    // /*高度*/
    //  var height = banner.offsetHeight;
    window.onscroll = function () {
        var top = document.body.scrollTop;
        /*当滚动高度大于banner的高度时候颜色不变*/
        if (top < 40) {
            sea.style.background = "rgba(0,0,0,0)";
        } else {
            sea.style.background = "#003392";
        }
    };
}

module.exports = {
    bindEvent
}
