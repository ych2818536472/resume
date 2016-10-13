//js的入口文件


//引入zepto
var  $ =require('./components/zepto-modules/_custom');

console.log($);
//引入swiper

//引入iscorll

var IScroll=require('./components/iscroll/iscroll.js');
console.log(IScroll);
//iscroll end
//
$("#mainContent").hide();
console.log($("#mainContent"));
$(".swiper-container").hide();
$('#enter').tap(function(){
	//alert("tap1s");
	$("#mainContent").show();
	$(".swiper-container").hide();
	
		//需要进行post请求
	$.post('api/skill',{},function(response){
		console.log(response);
		var html="";
		for(var i=0;i<response.length;i++){
			html+="<li>"+response[i].name+"</li>"
		}
		console.log(html);
		$("#scroller").html(html);
	})
	var myScroll = new IScroll('#wrapper', { mouseWheel: true });
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

});




var Swiper=require('./components/swiper/swiper.min.js');
console.log("Swiper");

//引入 swiper animate
var swiperAnimate=require('./components/swiper/swiper.animate1.0.2.min.js');

// var mySwiper = new Swiper ('.swiper-container');

var mySwiper = new Swiper ('.swiper-container', {
	//effect: 'cube',
	effect: 'flip',
    grabCursor: true,
        // cube: {
        //     shadow: true,
        //     slideShadows: true,
        //     shadowOffset: 20,
        //     shadowScale: 0.94
        // },
	// pagination: '.swiper-pagination',
    // direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		swiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
		swiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
	}, 
	onSlideChangeEnd: function(swiper){ 
		swiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	} 
})


$("#footer div").tap(function(){
	console.log(this);
	var apiTarget=$(this).attr('id');
			//需要进行post请求
	$.post('api/'+apiTarget,{},function(response){
		console.log(response);
		var html="";
		for(var i=0;i<response.length;i++){
			html+="<li>"+response[i].name+"</li>"
		}
		console.log(html);
		$("#scroller").html(html);
	})
})

var interval=setInterval(function(){

	if(document.readyState==='complete'){//加载完成
		clearInterval(interval);

		$("#preload").hide();
		$(".swiper-container").show();
		mySwiper.updateContainerSize();
		mySwiper.updateSlidesSize();
	}else{
		$("#preload").show();
	}
},100)