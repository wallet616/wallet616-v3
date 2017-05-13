/*
 * Created by: Wallet616
 * Description: This is a private file. I do not allow 
 *   anybody to copy content or part of content, of this file.
 *   If you are interested in creating something similar for You,
 *   just write to me mail.
 */

// Device
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);


// Loaded
function loaded() {
	$('#loading').animate({opacity: 0}, 700, 'linear');
	$('#loading').promise().done(function(){
		$('#loading').remove();
	});
};

// Wielkosc
function wielkosc() {
	var wysokosc = $(window).height();
	
	if (wysokosc < 500) {
		var wysokosc = 500;
	};
	
	selection_id = $('*[id^="selection_"]');
	limit = selection_id.length - 1;
	
		for (var i = 0; limit >= i; i++) {
			var element = selection_id[i];
			var rozmiar = $(element).height();
			
			if (wysokosc <= rozmiar) {
				var padding = 0;
			} else {
				var padding = (wysokosc - rozmiar - 40) / 2;
			};
			
			$(element).css({paddingTop: padding + "px"});
		};
};

// Menu
function blurRadius() {
	$(this).css({
		"-webkit-filter": "blur("+this.blurRadius+"px)",
		"filter": "blur("+this.blurRadius+"px)",
		"-moz-filter": "blur("+this.blurRadius+"px)",
		"-o-filter": "blur("+this.blurRadius+"px)",
		"-ms-filter": "blur("+this.blurRadius+"px)"
	});
};

function move(next, force) {
	if ((akcja == false && next != obecnie && next >= 0 && next <= limit) || (force == true)) {
		akcja = true;
		
		if (force == true) {
			var a = 10;
			var b = 10;
			var c = 10;
		} else {
			var a = 1200;
			var b = 600;
			var c = 300;
		};
		
		$('.selection').animate({top: next * -100 + "%"}, a, "easeOutQuint");
		$('#background').animate({top: next * -(50 / limit) + "%"}, a, "easeOutQuint");
		
		if (next == 0) {
			$('#g_wallet').animate({width: "0px", paddingLeft: "0px", paddingRight: "0px", marginLeft: "-20px", marginRight: "20px"}, {duration: b, easing: "easeOutQuint", queue: false});
			$('#g_wallet').delay(300).animate({opacity: "0", blurRadius: "10"}, {duration: c, easing: "easeOutQuint", queue: false, step: blurRadius});
			$('.menu_link').animate({fontSize: "45px", marginBottom: "50px"}, {duration: b, easing: "easeOutQuint", queue: false});
			$('.menu_background').animate({opacity: "0"}, {duration: b, easing: "easeOutQuint", queue: false});
		} else if (obecnie == 0) {
			$('#g_wallet').animate({width: "110px", paddingLeft: "20px", paddingRight: "20px", marginLeft: "5px", marginRight: "5px"}, {duration: b, easing: "easeOutQuint", queue: false});
			$('#g_wallet').delay(300).animate({opacity: "1", blurRadius: "0"}, {duration: c, easing: "easeOutQuint", queue: false, step: blurRadius});
			$('.menu_link').animate({fontSize: "40px", marginBottom: "0px"}, {duration: b, easing: "easeOutQuint", queue: false});
			$('.menu_background').animate({opacity: "1"}, {duration: b, easing: "easeOutQuint", queue: false});
		};
		
		$('.selection').promise().done(function(){
			akcja = false;
			obecnie = next;
		});
	};
};

function menu_int() {
	
	$("#g_wallet").click(function(){
		move(0);
	});
	$("#g_omnie").click(function(){
		move(1);
	});
	$("#g_projekty").click(function(){
		move(2);
	});
	
	$(document).bind('mousewheel', function(e){
		if(e.originalEvent.wheelDelta < 0) {
			next = obecnie + 1;
			move(next, false);
		} else {
			next = obecnie - 1;
			move(next, false);
		};
	return false;
	});
	
	$(document).keydown(function(e) {
		if (e.which == 38) {
			e.preventDefault();
			next = obecnie - 1;
			move(next, false);
		} else if (e.which == 40) {
			e.preventDefault();
			next = obecnie + 1;
			move(next, false);
		};
	});
};

// Konami
function egg() {
	var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
	$(document).keydown(function(e) {
		kkeys.push(e.keyCode);
		if (kkeys.toString().indexOf(konami) >= 0) {
    		$(document).unbind('keydown',arguments.callee);
    	    window.location.href = "http://wallet616.pl/swf/illya.swf";
		};
	});
};

// Galeria
function galeria(galeria_nastepne) {
	if (galeria_id.length >= 0 && galeria_nastepne <= galeria_id.length && galeria_nastepne >= 0 && galeria_nastepne != galeria_obecnie) {	
		galeria_akcja = 1;
		
		if (galeria_obecnie > galeria_nastepne) {
			wincyj = 300;
			mnij = 600;
		} else {
			wincyj = 600;
			mnij = 300;
		};
		
		$(galeria_id[galeria_nastepne - 3 + 0]).animate({width: "0px", height: "0px", marginTop: "0px", opacity: "0"}, {duration: mnij, queue: false});
		$(galeria_id[galeria_nastepne - 3 + 0]).promise().done(function(){
			$(galeria_id[galeria_nastepne - 3 + 0]).css({"z-index": "5"});
		});
		$(galeria_id[galeria_nastepne - 2 + 0]).animate({width: "40%", height: "64px", marginTop: "0px", opacity: "0.5"}, {duration: mnij, queue: false});
		$(galeria_id[galeria_nastepne - 2 + 0]).promise().done(function(){
			$(galeria_id[galeria_nastepne - 2 + 0]).css({"z-index": "10"}).animate({marginTop: "0px"}, {duration: mnij, queue: false});
		});
		$(galeria_id[galeria_nastepne - 1 + 0]).animate({width: "60%", height: "96px", marginTop: "0px", opacity: "1"}, {duration: mnij, queue: false});
		$(galeria_id[galeria_nastepne - 1 + 0]).promise().done(function(){
			$(galeria_id[galeria_nastepne - 1 + 0]).css({"z-index": "15"}).animate({marginTop: "-30px"}, {duration: mnij, queue: false});
		});
		$(galeria_id[galeria_nastepne - 0 + 0]).animate({width: "100%", height: "300px", marginTop: "0px", opacity: "1"}, {duration: 300, queue: false});
		$(galeria_id[galeria_nastepne - 0 + 0]).promise().done(function(){
			$(galeria_id[galeria_nastepne - 0 + 0]).css({"z-index": "20"}).animate({marginTop: "-30px"}, {duration: 300, queue: false});
		});
		$(galeria_id[galeria_nastepne - 0 + 1]).animate({width: "60%", height: "96px", marginTop: "0px", opacity: "1"}, {duration: wincyj, queue: false});
		$(galeria_id[galeria_nastepne - 0 + 1]).promise().done(function(){
			$(galeria_id[galeria_nastepne - 0 + 1]).css({"z-index": "15"}).animate({marginTop: "-30px"}, {duration: wincyj, queue: false});
		});
		$(galeria_id[galeria_nastepne - 0 + 2]).animate({width: "40%", height: "64px", marginTop: "0px", opacity: "0.5"}, {duration: wincyj, queue: false});
		$(galeria_id[galeria_nastepne - 0 + 2]).promise().done(function(){
			$(galeria_id[galeria_nastepne - 0 + 2]).css({"z-index": "10"}).animate({marginTop: "-30px"}, {duration: wincyj, queue: false});
		});
		$(galeria_id[galeria_nastepne - 0 + 3]).animate({width: "0px", height: "0px", marginTop: "0px", opacity: "0"}, {duration: wincyj, queue: false});
		$(galeria_id[galeria_nastepne - 0 + 3]).promise().done(function(){
			$(galeria_id[galeria_nastepne - 0 + 3]).css({"z-index": "5"});
		});
		
		if (galeria_id.length >= 4) {
			for (h = 4; h <= galeria_id.length; h++) {
				$(galeria_id[galeria_nastepne - h + 0]).animate({width: "0px", height: "0px", marginTop: "0px", opacity: "0"}, {duration: mnij});
				$(galeria_id[galeria_nastepne - h + 0]).css({"z-index": "5"});
				$(galeria_id[galeria_nastepne - 0 + h]).animate({width: "0px", height: "0px", marginTop: "0px", opacity: "0"}, {duration: wincyj});
				$(galeria_id[galeria_nastepne - 0 + h]).css({"z-index": "5"});
			};
		};
		
		if (galeria_nastepne == 0) {
			$('#galeria-pierwszy').animate({marginTop: "140px"}, {duration: 600, queue: false});
		} else if (galeria_nastepne == 1) {
			$('#galeria-pierwszy').animate({marginTop: "70px"}, {duration: 600, queue: false});
		} else {
			$('#galeria-pierwszy').animate({marginTop: "10px"}, {duration: 600, queue: false});
		};
		
		galeria_obecnie = galeria_nastepne;
		
		$('#galeria_opis').animate({opacity: "0"}, {duration: 300, queue: false});
		$('#galeria_opis').promise().done(function(){
			document.getElementById('galeria_opis').innerHTML = document.getElementById('galeria_opis_' + galeria_obecnie).innerHTML;
			$('#galeria_opis').animate({opacity: "1"}, {duration: 300, queue: false});
		});
	};
};

// Galeria search and initrialize
function galeria_int() {
	galeria_id = $('*[id^="galeria_obraz_"]');
	
	if (galeria_id.length >= 0) {
		$(galeria_id).click(function(){
			galeria(this.id.substr(14));
		});
		
		$('#galeria-pierwszy').css({"margin-top": "140px"});
		
		$('#galeria_obraz_00').css({"width": "100%", "height": "300px", "margin-top": "-30px", "opacity": "1", "z-index": 20});
		$('#galeria_obraz_01').css({"width": "60%", "height": "96px", "margin-top": "-30px", "opacity": "1", "z-index": 15});
		$('#galeria_obraz_02').css({"width": "40%", "height": "64px", "margin-top": "-30px", "opacity": "0.5", "z-index": 10});
		$('#galeria_obraz_03').css({"width": "0px", "height": "0px", "margin-top": "0px", "opacity": "0", "z-index": 5});
		
		document.getElementById('galeria_opis').innerHTML = document.getElementById('galeria_opis_00').innerHTML;
	};
};

// Ready
$(document).ready(function(){
	
	// Device
	if (jQuery.browser.mobile) {
		window.location.href = "http://m.wallet616.eu/";
	}
	
	// Dane wstepne
	obecnie = 0;
	akcja = false;
	galeria_obecnie = 0;
	
	wielkosc();
	menu_int();
	move(0, true);
	egg();
	galeria_int();
	
	$(window).load(function() {
		wielkosc();
		setTimeout(function(){ wielkosc(); loaded(); }, 100);
	});
	
	$(window).resize(function() {
		wielkosc();
	});
});
