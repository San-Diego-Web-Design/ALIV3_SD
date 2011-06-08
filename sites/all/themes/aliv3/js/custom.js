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
