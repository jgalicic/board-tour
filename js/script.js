$( "button" ).click(function() {
 	$(this).parent().next().slideToggle( "slow" );
   $(this).children().toggleClass("down");
});