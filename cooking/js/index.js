$(function() {   
               
$(window).load(function(){
  $(".hold").fadeOut("slow");
});



var scrollTop = '';
		var newHeight = '100';

		$(window).bind('scroll', function() {
		   scrollTop = $( window ).scrollTop();
		   newHeight = scrollTop + 100;
		});

		$('.grid-item').click(function(e) {
  		 e.stopPropagation();
		 if(jQuery(window).width() < 767) {
		   $(this).after( $(this).nextAll('.popup:first') );
		   $(this).nextAll('.popup:first').show().addClass('popup-mobile').css('top', 0);
		   $('html, body').animate({
				scrollTop: $(this).nextAll('.popup:first').offset().top
			}, 500);
		 } else {
			 $('.popup').hide();
			 $(this).nextAll('.popup:first').removeClass('popup-mobile').css('top', newHeight).toggle();
		 };
		});

		$('html').click(function() {
		 $('.popup').hide();
		});

		$('.popup-btn-close').click(function(e){
		  $(this).parent().hide();
		});

		$('.popup').click(function(e){
		  e.stopPropagation();
		});

var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: '.grid-sizer'
  }
});


$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});


var filters = {};

$('.filters').on( 'click', '.button', function() {
  var $this = $(this);
  var $buttonGroup = $this.parents('.button-group');
  var filterGroup = $buttonGroup.attr('data-filter-group');
  filters[ filterGroup ] = $this.attr('data-filter');
  var filterValue = concatValues( filters );
  $grid.isotope({ filter: filterValue });
});


$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
  

function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}


var $anyButtons = $('.filters').find('button[data-filter=""]');
var $buttons = $('.filters button');
  
  
$('.button-reset').on( 'click', function() {

    filters = {};
    $grid.isotope({ filter: '' });
   
    $buttons.removeClass('is-checked');
	$anyButtons.addClass('is-checked');
  });
  
  

  
 $('.grid-item').hover(
	function(){
		$(this).find('.caption').show();
		$(this).find('.popup-trigger').show();
	},
	function(){
		$(this).find('.caption').hide();
		$(this).find('.popup-trigger').hide();
	}
	);
	
	$('.fade').hover(
		function(){
			$(this).find('.caption').fadeIn(250);
			$(this).find('.popup-trigger').fadeIn(250);
		},
		function(){
			$(this).find('.caption').fadeOut(250);
			$(this).find('.popup-trigger').fadeOut(250);
	}
	);
	$('.slide').hover(
		function(){
			$(this).find('.caption').slideDown(250);
		},
		function(){
			$(this).find('.caption').slideUp(250);
		}
	);
	
	
});