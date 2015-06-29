$('#carousel').on('slid.bs.carousel', function () {
	  
  var numImg = window.gallerySize;
  var items = [$('#carouselitem0'), $('#carouselitem1'), $('#carouselitem2')];
  var itemSrc = [$('#carouselitem0 > img').attr('src'), $('#carouselitem1 > img').attr('src'), $('#carouselitem2 > img').attr('src')];
  
  if (items[0].hasClass('active')) {
  
	var prev = parseInt(itemSrc[0].substr(12, 16),10) - 1;
	if (prev < 1) { prev = numImg; } 
	
	items[0].removeClass('active');
	items[0].find('> img').attr('src', itemSrc[2].substr(0,12) + ("000" + prev.toString()).substr(-3) + itemSrc[0].substr(-4));
	items[1].find('> img').attr('src', itemSrc[0]);
	items[2].find('> img').attr('src', itemSrc[1]);
	items[1].addClass('active');
	
  } else if (items[2].hasClass('active')) {
  
	var next = parseInt(itemSrc[2].substr(12, 16),10) + 1;
	if (next > numImg) { next = 1; }
	
	items[2].removeClass('active');
	items[0].find('> img').attr('src', itemSrc[1]);
	items[1].find('> img').attr('src', itemSrc[2]);
	items[2].find('> img').attr('src', itemSrc[0].substr(0,12) + ("000" + next.toString()).substr(-3) + itemSrc[0].substr(-4));
	items[1].addClass('active');
  }
  
});