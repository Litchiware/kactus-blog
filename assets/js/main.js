// To make images retina, add a class "2x" to the img element
// and add a <image-name>@2x.png image. Assumes jquery is loaded.
 
function isRetina() {
	var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
					  (min--moz-device-pixel-ratio: 1.5),\
					  (-o-min-device-pixel-ratio: 3/2),\
					  (min-resolution: 1.5dppx)";
 
	if (window.devicePixelRatio > 1)
		return true;
 
	if (window.matchMedia && window.matchMedia(mediaQuery).matches)
		return true;
 
	return false;
};
 
 
function retina() {
	
	if (!isRetina())
		return;
	
	$("img.2x").map(function(i, image) {
		
		var path = $(image).attr("src");
		
		path = path.replace(".png", "@2x.png");
		path = path.replace(".jpg", "@2x.jpg");
		
		$(image).attr("src", path);
	});
};
 
function sidebar() {
    $("#category-link").click(function(){
        $("nav.js-menu.sliding-menu-content").addClass("is-visible");
        $("div.js-menu-screen.menu-screen").addClass("is-visible");
    });
    $("div.js-menu-screen.menu-screen").click(function(){
        $("nav.js-menu.sliding-menu-content").removeClass("is-visible")
        $(this).removeClass('is-visible');
    });
    $(".js-menu.sliding-menu-content li a").click(function(){
        var category = $(this).text();
        $("#post-list li").each(function(index, value){
            var child$ = $(this).children(":first");
            if(child$.attr("category") != category){
                $(this).css('display', 'none');
            }
            else{
                $(this).css('display', 'block');
            }
        });
    });
};

$(document).ready(function(){
    retina();
    sidebar();
});
