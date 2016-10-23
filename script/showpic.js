/**
 * Created by kzero on 2016/10/23.
 */
function showPic(whichpic){
    var source = whichpic.getAttribute("href");//获取图片链接
    var placeholder = document.getElementById("placeholder");//获取图片的占位符
    placeholder.setAttribute("src",source);//修改占位符的资源路径，从而修改图片

    var text = whichpic.getAttribute("title");//获取“title”
    var description = document.getElementById("description");//获得图片描述的段落
    description.firstChild.nodeValue = text;//修改描述文字
}

