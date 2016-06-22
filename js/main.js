var myWebsite = (function() {

$(window).load(function(){
  $(".hold").fadeOut("slow");
});

var $el = $( '#bl-main' ),
$sections = $el.children( 'section' ),
$sectionWork = $( '#bl-work-section' ),
$workItems = $( '#bl-work-items > li' ),
$workPanelsContainer = $( '#bl-panel-work-items' ),
$workPanels = $workPanelsContainer.children( 'div' ),
totalWorkPanels = $workPanels.length,
$nextWorkItem = $workPanelsContainer.find( 'nav > span.bl-next-work' ),
isAnimating = false,
$closeWorkItem = $workPanelsContainer.find( 'nav > span.bl-icon-close' ),
transEndEventNames = {
	'WebkitTransition' : 'webkitTransitionEnd',
	'MozTransition' : 'transitionend',
	'OTransition' : 'oTransitionEnd',
	'msTransition' : 'MSTransitionEnd',
	'transition' : 'transitionend'
},
		
transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
supportTransitions = Modernizr.csstransitions;

function init() {
	initEvents();
}

function initEvents() {
		$sections.each( function() {
			var $section = $( this );

			$section.on( 'click', function() {

				if( !$section.data( 'open' ) ) {
					$section.data( 'open', true ).addClass( 'bl-expand bl-expand-top' );
					$el.addClass( 'bl-expand-item' );	
				}

			} ).find( 'span.bl-icon-close' ).on( 'click', function() {
				
				$section.data( 'open', false ).removeClass( 'bl-expand' ).on( transEndEventName, function( event ) {
					if( !$( event.target ).is( 'section' ) ) return false;
					$( this ).off( transEndEventName ).removeClass( 'bl-expand-top' );
				} );

				if( !supportTransitions ) {
					$section.removeClass( 'bl-expand-top' );
				}

				$el.removeClass( 'bl-expand-item' );
				
				return false;

			} );

		} );

		
		$workItems.on( 'click', function( event ) {
			$sectionWork.addClass( 'bl-scale-down' );
			$workPanelsContainer.addClass( 'bl-panel-items-show' );

			var $panel = $workPanelsContainer.find("[data-panel='" + $( this ).data( 'panel' ) + "']");
			currentWorkPanel = $panel.index();
			$panel.addClass( 'bl-show-work' );

			return false;

		} );

$closeWorkItem.on( 'click', function( event ) {
		$sectionWork.removeClass( 'bl-scale-down' );
		$workPanelsContainer.removeClass( 'bl-panel-items-show' );
		$workPanels.eq( currentWorkPanel ).removeClass( 'bl-show-work' );
	
	return false;

		} );
	}
	return { init : init };

})();


$('#select').change(function(){
      if($(this).val() == 'A'){
        $("#nav").css('background-color', '#98B0D6');
		$(".custom-select").css('background-color', '#98B0D6');
		$(".bl-main > section:nth-child(2)").css('background-color', '#A5D7E8');
		$(".bl-main > section:nth-child(3)").css('background-color', '#A5E7E8');
		$("div.bl-panel-items > div").css('background-color', '#A5D7E8');
	
      }
        if($(this).val() == 'B'){
        $("#nav").css('background-color', '#DAA7DB');
		$(".custom-select").css('background-color', '#DAA7DB');
		$(".bl-main > section:nth-child(2)").css('background-color', '#DCBFF2');
		$(".bl-main > section:nth-child(3)").css('background-color', '#E082E8');
		$("div.bl-panel-items > div").css('background-color', '#DCBFF2');
      }
        if($(this).val() == 'C'){
        $("#nav").css('background-color', '#F2E980');
		$(".custom-select").css('background-color', '#F2E980');
		$(".bl-main > section:nth-child(2)").css('background-color', '#E8D582');
		$(".bl-main > section:nth-child(3)").css('background-color', '#E8DEA5');
		$("div.bl-panel-items > div").css('background-color', '#E8D582');
	
      }
        if($(this).val() == 'D'){
        $("#nav").css('background-color', '#BBF280');
		$(".custom-select").css('background-color', '#BBF280');
		$(".bl-main > section:nth-child(2)").css('background-color', '#6BEDAC');
		$(".bl-main > section:nth-child(3)").css('background-color', '#8AC96D');
		$("div.bl-panel-items > div").css('background-color', '#6BEDAC');
	

      }
    }); 
