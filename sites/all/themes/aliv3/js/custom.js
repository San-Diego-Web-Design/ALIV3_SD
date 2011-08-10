(function ($) {
  Drupal.behaviors.customOmegaSubthemeJS = {
    attach: function(context, settings) {
      // you can implement your custom javascript/jquery here,
      // and also create other attached behaviors
      
    $(document).ready(function(){
	    $("ul#superfish-3 li.last a").click(function(){
	        $("div#block-user-login").slideToggle("slow");
	        $(this).toggleClass("sign-in-active"); 
			return false;
	    });
	});

	$(document).ready(function(){
		/*
		$("div.field-name-field-tags div.field-item a").click(function(){
			$("aside.region-sidebar-second").toggleClass("element-invisible","slow");
		});
		*/
		$("div#block-views-venue-slideshow-block").addClass("drop-shadow curved-hz-1");
		$("div.block-quicktabs").addClass("drop-shadow");
		$("div.block-quicktabs").addClass("curved-hz-1");
		
		$("aside.region-sidebar-second").addClass("region-sidebar-second-fixed");
		
		$("div.field-name-field-tags div.field-item:nth-child(1) a").click(function(){
			$("aside.region-sidebar-first").toggle("normal");
			$("div#block-views-venues-block-1").toggleClass("element-hidden");
			return false;
		});
		
		$("div.field-name-field-tags div.field-item:nth-child(2) a").click(function(){
			$("aside.region-sidebar-first").toggle("normal");
			$("div#block-views-shows-block-1").toggleClass("element-hidden");
			return false;
		});
		
		$("div.field-name-field-tags div.field-item:nth-child(3) a").click(function(){
			$("aside.region-sidebar-first").toggle("normal");
			$("div#block-views-article-sidebar-block-1").toggleClass("element-hidden");
			return false;
		});

		$("div.views-field-field-tags div.field-content a").click(function(){
			$("aside.region-sidebar-first").toggle("normal");	
			return false;
		});
		/*
		$("div.field-name-field-tags div.field-item a").click(function(){
			$("div#block-block-3").toggleClass("element-invisible");
			$("aside.region-sidebar-first").hide("normal");	
			return false;
		});

		$("div.views-field-field-tags div.field-content a").click(function(){
			$("aside.region-sidebar-first").hide("normal");	
			return false;
		});
		*/
	});
	/*
	$(document).ready(function(){

		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 630) {
					$("").fadeIn();
					$("aside.region-sidebar-first").addClass("element-invisible");
					$("aside.region-sidebar-second").addClass("scroll");
				} else {
					$("aside.region-sidebar-first").removeClass("element-invisible");
					$("aside.region-sidebar-second").removeClass("scroll");
				}
			});
			
		});

	});
	*/
	/*
	$(document).ready(function(){

		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 500) {
					$("article.article div.field-name-field-article-tweet").hide("fast");
					$("article.article div.field-name-field-article-fb-like").hide("fast");
					$("div.g-plusone-wrapper").hide("fast");
				} else {
					$("article.article div.field-name-field-article-tweet").show("fast");
					$("article.article div.field-name-field-article-fb-like").show("fast");
					$("div.g-plusone-wrapper").show("fast");
				}
			});
			
		});

	});
	*/
	/*
	$(document).ready(function(){

		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 400) {
					$("article.article div.field-name-field-article-tweet").addClass("scroll-social");
					$("article.article div.field-name-field-article-fb-like").addClass("scroll-social");
					
				} else {
					$("article.article div.field-name-field-article-tweet").removeClass("scroll-social");
					$("article.article div.field-name-field-article-fb-like").removeClass("scroll-social");
				}
			});
			
		});

	});
	*/
	
	$(document).ready(function(){
		
		/*
		$("section#region-content").addClass("drop-shadow");
		$("section#region-content").addClass("curved");
		*/
		
		$("div.views-row").addClass("clearfix");
		$("div.view-venues.view-display-id-block div.content").addClass("clearfix");
	});
	
	// Articles Teasers Page Title Icon
	$(document).ready(function(){
		$("body.page-articles h1#page-title").before("<div id='articles-icon' class='title-icon block'></div>");
		$("body.page-articles-teaser h1#page-title").before("<div id='articles-icon' class='title-icon block'></div>");
	});
	
	// Article Page Title Icon
	$(document).ready(function(){
		$("body.node-type-article h1#page-title").before("<div id='article-icon' class='title-icon block'></div>");
		/*
		$("span.views-field-title div.field-content").before("<div id='article-icon' class='views-span-title-icon block'></div>");
		$("div.view-recent-articles- span.views-field-title span.field-content").before("<div id='article-icon' class='views-span-title-icon block'></div>");
		*/
		$("div.view-article-sidebar div.views-field-title span.field-content").before("<div id='article-icon' class='views-span-title-icon block'></div>");
	});
	
	// Venue Title Icon 
	$(document).ready(function(){
		$("body.node-type-venue h1#page-title").before("<div id='venue-icon' class='title-icon block'></div>");
		$("body.page-venues h1#page-title").before("<div id='venue-icon' class='title-icon block'></div>");
		$("div.view-venues span.views-field-title span.field-content").before("<div id='venue-icon' class='title-icon block'></div>");
		/*
		$("div.view-venues.view-display-id-block article.venue.teaser h2.node-title").before("<div id='venue-icon' class='qt-venue-icon block'></div>");
		$("body.front div.view-top-10-venues h2").before("<div id='venue-icon' class='top-venues title-icon block'></div>");
		*/
	});
	
	// Show Title Icon
	$(document).ready(function(){
		$("body.page-shows h1#page-title").before("<div id='show-icon' class='title-icon block'></div>");
		$("body.node-type-show h1#page-title").before("<div id='show-icon' class='title-icon block'></div>");
		/*
		$("div.view-shows.view-display-id-block div.views-field-field-artist-name").before("<div id='show-icon' class='qt-show-icon block'></div>");
		*/
	});
	
	// Sidebar First Action
	$(document).ready(function(){
		$("div#block-views-venues-block-1").addClass("element-hidden");
		$("div#block-views-shows-block-1").addClass("element-hidden");
		$("div#block-views-article-sidebar-block-1").addClass("element-hidden");
	});

    }
  };
})(jQuery);



/*
$(document).ready(function(){
	$("#user-login-form #edit-name-wrapper input").focus(function() {
		$("#user-login-form #edit-name-wrapper label").hide("fast");	
	});
	$("#user-login-form #edit-name-wrapper input").blur(function() {
		if ($(this).val() === "") {
			$("#user-login-form #edit-name-wrapper label").show("fast");
		}
	});
});

$(document).ready(function(){
	$("#user-login-form #edit-pass-wrapper input").focus(function() {
		$("#user-login-form #edit-pass-wrapper label").hide("fast");	
	});
	$("#user-login-form #edit-pass-wrapper input").blur(function() {
		if ($(this).val() === ""){
			$("#user-login-form #edit-pass-wrapper label").show("fast");
		}
	});
});
*/
