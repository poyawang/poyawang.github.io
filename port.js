/*This is the JavaScript file for Po-Ya Portfolio*/
$(document).ready(parallaxMain);

function parallaxMain() {

  $("body").hide();
  $("body").fadeIn(2000);

  /***********************************************
  * INFO BOX CONTROL CENTER
  ***********************************************/
  $(".infoBoxSec").hide();

  $(".IdahoWeather").hide();
  $(".scoots").hide();
  $(".arcadeGame").hide();


  $(".IdahoW").click(function() {
    $(".infoBoxSec").fadeIn();

    $(".IdahoWeather").show();
    $(".scoots").hide();
    $(".arcadeGame").hide();
  })

  $(".ScootsR").click(function() {
    $(".infoBoxSec").fadeIn();

    $(".IdahoWeather").hide();
    $(".scoots").show();
    $(".arcadeGame").hide();
  })


  $(".arcadeG").click(function() {
    $(".infoBoxSec").fadeIn();

    $(".IdahoWeather").hide();
    $(".scoots").hide();
    $(".arcadeGame").show();
  })

  $(".dismissInfo").click(function() {
    $(".infoBoxSec").fadeOut();

    $(".IdahoWeather").hide();
    $(".scoots").hide();
    $(".arcadeGame").hide();
  })


  // back to top animation by clicking topButton
  $(".topButton").click(function() {
    $("html, body").animate({
      scrollTop:0
    }, 1300)
  })

  // Nav redirect animations
  $(".workBtn").click(function() {
    $("html, body").animate({
      scrollTop: $(".workSec").offset().top
    }, 1000)
  })

  $(".workBtn1").click(function() {
    $("html, body").animate({
      scrollTop: $(".workSec").offset().top
    }, 1000)
  })

  $(".aboutBtn").click(function() {
    $("html, body").animate({
      scrollTop: $(".aboutSec").offset().top
    }, 1000)
  })

  $(".aboutBtn1").click(function() {
    $("html, body").animate({
      scrollTop: $(".aboutSec").offset().top
    }, 1000)
  })

  $(".conBtn").click(function() {
    $("html, body").animate({
      scrollTop: $(".conSec").offset().top
    }, 1000)
  })

  $(".conBtn1").click(function() {
    $("html, body").animate({
      scrollTop: $(".conSec").offset().top
    }, 1000)
  })

  //change nav colors for workSec
  $(".workSec").waypoint(function (direction) {
    if (direction == "down") {
      $(".nav li a").css({
        "color" : "white"
      })

      $(".workBtn").css({
        "opacity" : "1.0"
      })

      $(".aboutBtn").css({
        "opacity" : "0.40"
      })

      $(".conBtn").css({
        "opacity" : "0.40"
      })
    }

    else {
      $(".nav li a").css({
        "color" : "#262626"
      })

      $(".workBtn").css({
        "opacity" : "0.40"
      })
    }

  }, {offset: "10%"});

  //change nav colors for aboutSec
  $(".aboutSec").waypoint(function (direction) {
    if (direction == "down") {
      $(".nav li a").css({
        "color" : "#262626"
      })

      $(".workBtn").css({
        "opacity" : "0.40"
      })

      $(".aboutBtn").css({
        "opacity" : "1.0"
      })

      $(".conBtn").css({
        "opacity" : "0.40"
      })
    }

    else {
      $(".nav li a").css({
        "color" : "white"
      })

      $(".workBtn").css({
        "opacity" : "1.0"
      })

      $(".aboutBtn").css({
        "opacity" : "0.40"
      })
    }

  }, {offset: "10%"});

  //change nav colors for aboutSec
  $(".conSec").waypoint(function (direction) {
    if (direction == "down") {
      $(".nav li a").css({
        "color" : "white"
      })

      $(".workBtn").css({
        "opacity" : "0.40"
      })

      $(".aboutBtn").css({
        "opacity" : "0.40"
      })

      $(".conBtn").css({
        "opacity" : "1.0"
      })
    }

    else {
      $(".nav li a").css({
        "color" : "#262626"
      })

      $(".workBtn").css({
        "opacity" : "0.40"
      })

      $(".aboutBtn").css({
        "opacity" : "1.0"
      })

      $(".conBtn").css({
        "opacity" : "0.40"
      })
    }

  }, {offset: "10%"});

  //Work Section Thumbnail Sizing Functions

  /*var imgHeight = $(".imageHolder").width();
  var imgWidth = $(".imageHolder").height();

	$(".imageHolder").css({"height" : imgHeight})*/

	// adjust size of thumbnails
	$(window).resize(function() {
		imgHeight = $(".imageHolder").width();
		$(".imageHolder").css({"height" : imgHeight})
	});

  // FOR CAPTIONS ON IMAGES

    //arcadeG
  $(".arcadeG").mouseover(function () {
    $(".arcadeG .caption").toggleClass("caption-visible");
    $(".arcadeG .dimmer").toggleClass("dimmer-visible");
  });

  $(".arcadeG").mouseout(function () {
    $(".arcadeG .caption").toggleClass("caption-visible");
    $(".arcadeG .dimmer").toggleClass("dimmer-visible");
  });

    //Idaho Weather
  $(".IdahoW").mouseover(function () {
    $(".IdahoW .caption").toggleClass("caption-visible");
    $(".IdahoW .dimmer").toggleClass("dimmer-visible");
  });

  $(".IdahoW").mouseout(function () {
    $(".IdahoW .caption").toggleClass("caption-visible");
    $(".IdahoW .dimmer").toggleClass("dimmer-visible");
  });

    //Scoots Rental
  $(".ScootsR").mouseover(function () {
    $(".ScootsR .caption").toggleClass("caption-visible");
    $(".ScootsR .dimmer").toggleClass("dimmer-visible");
  });

  $(".ScootsR").mouseout(function () {
    $(".ScootsR .caption").toggleClass("caption-visible");
    $(".ScootsR .dimmer").toggleClass("dimmer-visible");
  });

    //coming soon
  $(".mnlcity").mouseover(function () {
    $(".mnlcity .caption").toggleClass("caption-visible");
    $(".mnlcity .dimmer").toggleClass("dimmer-visible");
  });

  $(".mnlcity").mouseout(function () {
    $(".mnlcity .caption").toggleClass("caption-visible");
    $(".mnlcity .dimmer").toggleClass("dimmer-visible");
  });



  //Window Scrolling Functions
	$(window).scroll(function() {



		if ($(window).scrollTop()>300) {
			$(".topButton1").fadeIn();
		}

		else {
			$(".topButton1").fadeOut();
		}


    // PARALLAX EFFECT on welcomeSec Elements
		var wScroll = $(this).scrollTop();

		$(".welcomeSec .mainLogo").css({
			"transform" : "translate(0, -"+ wScroll/2 +"px)"
		});

		$(".welcomeSec h1").css({
			"transform" : "translate(0, -"+ wScroll/5 +"px)"
		});

    $(".welcomeSec h2").css({
			"transform" : "translate(0, -"+ wScroll/4 +"px)"
		});

		console.log(wScroll);


	});






}