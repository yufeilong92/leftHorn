//右布局
var RIGHTCONTENT = "rightcontent";
//左布局
var LEFTCONTENT = "liftcontent";
var LiftId = 0;
var RightId = 0;
(function() {

})();
$("#img_play").click(function() {

	//var imgmark=$("#img_play").attr("src");
	var imgmark = $("#input_box_search").css("display")
	if(imgmark == "none") {
		$("#img_play").attr("src", "img/img_sound.png");
		$("#input_box_search").css("display", "block");
		$("#span_text").css("display", "none");
	} else {
		$("#img_play").attr("src", "img/img_play.png");
		$("#input_box_search").css("display", "none");
		$("#span_text").css("display", "block");
	}

})
$("#span_text").click(function() {

	console.log("点击录音")
})
$("#id_send").click(function() {
	var val = $("#input_box_search").val();
	if(isEmpty(val)) {
		return;
	}
	showContent(RIGHTCONTENT, val);

})

function showContent(isShow, content) {

	if(isShow == LEFTCONTENT) {
		rightOrlift(false);
		bindLiftViewData(content);

	} else if(isShow == RIGHTCONTENT) {
		rightOrlift(true);
		bindRightViewData(content)

	}

}

function isEmpty(str) {
	if(str == null || typeof(str) == "undefined" || str == "") {
		$.toast("输入框不能为空", "text");
		return true;
	}
	return false;

}
/*
 * 发送内容
 */
function sendContent(content) {
	//显示位置
	rightOrlift(false)
	//帮数据

}
/**
 *显示左右 
 */
function rightOrlift(isright) {
	if(isright) {
		$("#right_content").show();
		$("#left_content").hide()
		return;
	}
	$("#right_content").hide();
	$("#left_content").show()

}

function bindRightViewData(content) {
	RightId++;
	var showContentBody = document.getElementById("div_showContent_body");
	var div1 = document.createElement("div");
	div1.setAttribute("class", "right_content");
	div1.setAttribute("id", "right_content" + RightId);

	var div_content = document.createElement("div");
	div_content.setAttribute("class", "div_span_content_right");
	var div_val = document.createTextNode(content);
	div_content.appendChild(div_val);

	var div_img =document.createElement("div");
	div_img.setAttribute("class", "div_img_right");

	var img1 = document.createElement("img");
	img1.setAttribute("src", "img/custom service.png");
	div_img.appendChild(img1);
	
	div1.appendChild(div_content);
	div1.appendChild(div_img);
	showContentBody.appendChild(div1);
	

	var item = $("div[id*='right_content" + RightId + "']");

	autoScroll(item)

}

function bindLiftViewData(content) {
	LiftId++;
	var showContentBody = document.getElementById("div_showContent_body");
	var div1 = document.createElement("div");
	div1.setAttribute("class", "left_content");
	div1.setAttribute("id", "left_content" + LiftId);

    var div_img=document.createElement("div");
    div_img.setAttribute("class","div_img_lift");
    var img1 = document.createElement("img");
	img1.setAttribute("src", "img/user.png");
	div_img.appendChild(img1)
	
	var div_content = document.createElement("div");
	div_content.setAttribute("class", "div_span_content_left");
	var div_val = document.createTextNode(content);
	div_content.appendChild(div_val);

	
	div1.appendChild(div_img);
	div1.appendChild(div_content);
	showContentBody.appendChild(div1);
	var item = $("div[id*='left_content" + LiftId + "']");
	autoScroll(item)
}

　
/**
 * 
 * @param {Object} obj 父控件
 * @param {Object} id 展示子控件
 */
function autoScroll(id) {　　
	var boy = document.getElementById("div_showContent_body")
	var a = $('#div_showContent_body').height();
	var height = id.height();　
	boy.scrollTop += height + a;

}