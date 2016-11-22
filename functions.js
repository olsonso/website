$(function() {
	smoothScroll(300);
	// workBelt();
	// workLoad();
	// clientStuff();

	$("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '72px' });
	$(".biglink").fitText(1.5);

	$('textarea').autosize();
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

var vid = document.getElementsByTagName("video1");
[].forEach.call(vid, function (item) {
	item.addEventListener('mouseover', hoverVideo, false);
	item.addEventListener('mouseout', hideVideo, false);
});

function hoverVideo(e)
{	
	this.play();
}
function hideVideo(e)
{
	this.pause();
}

function SwapMP4forWEBM(content){
  if(jQuery.browser.chrome || jQuery.browser.mozilla){
    content.find("video").each(function(){
      $(this).find("source").attr("src", $(this).find("source").attr("src").replace(".mp4", ".webm"))
      $(this).find("source").attr("type", $(this).find("source").attr("type").replace("mp4", "webm"))
    })
  }
  return content.html()
}


// function workBelt() {
//
//   $(".trigger").remove();
//   $(".return").remove();
//
//   $('.thumb-container label').click(function() {
//     $('.work-belt').addClass("slided");
//     $('.work-container').show();
//   });
//
//   $('.work-return').click(function() {
//     $('.work-belt').removeClass("slided");
//     $('.work-container').hide(800);
//   });

// }


// function  workLoad() {
//
//   $.ajaxSetup({ cache: true });
//
//   $('.thumb-container label').click(function() {
//     var $this = $(this),
//         newTitle = $this.find('strong').text(),
//         newFolder = $this.find('.thumb-unit').data('folder'),
//         spinner = '<div class="loader">Loading...</div>',
//         newHTML = 'work/'+ newFolder;
//
//     $('.project-load').html(spinner).load(newHTML);
//     $('.project-title').text(newTitle);
//   });

// }




// function clientStuff() {
//
//   $('.client-logo, .client-button').click(function() {
//     var $this = $(this),
//         position = $this.parent().children().index($this);
//
//     $('.client-unit').removeClass('active-client').eq(position).addClass('active-client');
//     $('.client-logo').removeClass('active-client').eq(position).addClass('active-client');
//     $('.client-button').removeClass('active-client').eq(position).addClass('active-client');
//   });


  // $('.client-control-next, .client-control-prev').click(function() {
	//
  //   var $this = $(this),
  //       curActiveClient = $('.clients-belt').find('.active-client'),
  //       position = $('.clients-belt').children().index(curActiveClient),
  //       clientNum = $('.client-unit').length;
	//
  //     if($this.hasClass('client-control-next')) {
	//
  //       if(position < clientNum -1){
  //         $('.active-client').removeClass('active-client').next().addClass('active-client');
  //       } else {
  //         $('.client-unit').removeClass('active-client').first().addClass('active-client');
  //         $('.client-logo').removeClass('active-client').first().addClass('active-client');
  //         $('.client-button').removeClass('active-client').first().addClass('active-client');
  //       }
	//
  //     } else {
	//
  //       if (position === 0) {
  //         $('.client-unit').removeClass('active-client').last().addClass('active-client');
  //         $('.client-logo').removeClass('active-client').last().addClass('active-client');
  //         $('.client-button').removeClass('active-client').last().addClass('active-client');
  //       } else {
  //         $('.active-client').removeClass('active-client').prev().addClass('active-client');
  //       }
	//
  //     }
	//
	//
  // });

// }


