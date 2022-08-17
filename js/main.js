// intro
function autoType(elementClass, typingSpeed){
  var thhis = $(elementClass);
  thhis.css({
    "position": "relative",
  });
  thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
  thhis = thhis.find(".text-js");
  var text = thhis.text().trim().split('');
  var amntOfChars = text.length;
  var newString = "";
  thhis.text("|");
  setTimeout(function(){
    thhis.css("opacity",1);
    thhis.prev().removeAttr("style");
    thhis.text("");
    for(var i = 0; i < amntOfChars; i++){
      (function(i,char){
        setTimeout(function() {        
          newString += char;
          thhis.text(newString);
        },i*typingSpeed);
      })(i+1,text[i]);
    }
  },800);
}


$(document).ready(function(){
	// intro
	autoType(".type-js",80);

	setTimeout(function() {
		$("body").addClass("default");
		$("div.intro a.intro-btn").css("opacity","1");
	}, 2700);
	
	// intro btn
	$(".intro-btn").click(function(event){
		event.preventDefault();
		x = $(this).attr("href");
		$("html, body").stop().animate({
			scrollTop : $(x).offset().top
		}, 1000);
		//return false;
	});

	// 갤러리
	$("div.sect04 a.more, div.sect04 div.gallery > div[class^='group'] div.image").click(function(){
		$("div.modal-gallery").fadeIn();
		$("div.gallery-slider").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			asNavFor: ".gallery-slider-nav",
		});
		$("div.gallery-slider-nav").slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
			centerMode: true,
			focusOnSelect: true,
			asNavFor:".gallery-slider",
		});
	});
	$("div.modal-gallery button.close-btn").click(function(){
		$("div.modal-gallery").fadeOut();
	});

	// 연락처 보기
	$("div.modal-contact").hide();

	$("div.sect07 div.sect-con div.p01").click(function(){
		$("div.modal-contact.p01-modal").fadeIn();
	});
	$("div.modal-contact.p01-modal a.modal-close").click(function(){
		$("div.modal-contact.p01-modal").fadeOut();
	});
	$("div.sect07 div.sect-con div.p02").click(function(){
		$("div.modal-contact.p02-modal").fadeIn();
	});
	$("div.modal-contact.p02-modal a.modal-close").click(function(){
		$("div.modal-contact.p02-modal").fadeOut();
	});
	$("div.sect07 div.sect-con div.p03").click(function(){
		$("div.modal-contact.p03-modal").fadeIn();
	});
	$("div.modal-contact.p03-modal a.modal-close").click(function(){
		$("div.modal-contact.p03-modal").fadeOut();
	});
	$("div.sect07 div.sect-con div.p04").click(function(){
		$("div.modal-contact.p04-modal").fadeIn();
	});
	$("div.modal-contact.p04-modal a.modal-close").click(function(){
		$("div.modal-contact.p04-modal").fadeOut();
	});
	$("div.sect07 div.sect-con div.p05").click(function(){
		$("div.modal-contact.p05-modal").fadeIn();
	});
	$("div.modal-contact.p05-modal a.modal-close").click(function(){
		$("div.modal-contact.p05-modal").fadeOut();
	});
	$("div.sect07 div.sect-con div.p06").click(function(){
		$("div.modal-contact.p06-modal").fadeIn();
	});
	$("div.modal-contact.p06-modal a.modal-close").click(function(){
		$("div.modal-contact.p06-modal").fadeOut();
	});
	
	// 마음 전하실 곳
	$("div.sect08 div.sect-con div.list div.list-tit").click(function(){
		$(this).parent().toggleClass("open");
		$(this).parent().children("div.list-con").slideToggle();
	});
	
	// copy
	var clipboard = new ClipboardJS("div.sect08 div.sect-con div.list div.list-con div.in-con ul.c-con li > button");
	clipboard.on("success", function (e) {
		alert("계좌번호가 복사되었습니다.");
	});

	var clipboard = new ClipboardJS("div.sect09 div.link > a.copy");
	clipboard.on("success", function (e) {
		alert("링크가 복사되었습니다. 원하시는 곳에 붙여넣기 해주세요.");
	});
});
