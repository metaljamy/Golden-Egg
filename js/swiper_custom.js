const eventSwiper = new Swiper('.swiper', {
	// Optional parameters
	speed: 1000,
	loop: true,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
  });

  const dishSwiper = new Swiper('.swiper_dishes', {
	direction: 'horizontal',
	loop: true,
	
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	  },

  });