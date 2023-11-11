/* 
   Author: Malindu Kirindegama
   Created: Oct 2023
   Description: Day Break
*/






(function($) {
    "use strict"; 
	
    var textToType = "Private day tours for families & small groups";
        
    // Typing speed in milliseconds
    var typingSpeed = 100; 

    // Get the h1 element
    var headerElement = document.getElementById('typing-header');

    // Function to simulate typing effect
    function typeText() {
        var index = 0;
        var typingInterval = setInterval(function() {
            headerElement.textContent += textToType[index];
            index++;
            if (index === textToType.length) {
                clearInterval(typingInterval);
            }
        }, typingSpeed);
    }

    // Start typing animation when the page loads
    window.onload = function() {
        typeText();
    };
    
	/* Preloader */
	$(window).on('load', function() {
		var preloaderFadeOutTime = 500;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
		}
		hidePreloader();
       // insertSectionsIntoContainer();
	});

    
    // function insertSectionsIntoContainer() {
    //     const packageName = document.getElementById("packageName")
    //     const packageSubTitle = document.getElementById("packageSubTitle")
    //     const packageDesc = document.getElementById("packageDesc")
    //     const container = document.getElementById("container");
    //     const itinerary = document.getElementById("itinerary");
    //     const meetAndPickUp = document.getElementById("meetAndPickUp")
    //     const cancellationPolicy = document.getElementById("cancellationPolicy")

    //     var packageId = localStorage.getItem("packageId");
    //    // const packageId = "001"

    //     const package001 = {

    //         details:{
    //             title : "Into the forest",
    //             subTitle: "Black Spur Drive, rainforests & waterfalls",
    //             desc: "Embark on a picturesque journey through lush apple orchards, serene rainforests, and iconic Australian forests, all while savouring quick coffee breaks and exploring charming towns along the way. Be captivated by one of the state's tallest waterfalls, before concluding the day with a mesmerizing sunset, overlooking the majestic mountains.",
    //             duration : ""

    //         },

    //          packageAtivity : {
    //             section1: {
    //                 iconClass: "fas fa-car fa-inverse",
    //                 title: "Free Cancellation",
    //                 description: "Cancel up to 24 hours in advance for a full refund"
    //             },
    //             section2: {
    //                 iconClass: "fas fa-bicycle fa-inverse",
    //                 title: "Duration",
    //                 description: "11 hours"
    //             },
    //             section3: {
    //                 iconClass: "fas fa-bicycle fa-inverse",
    //                 title: "Start & End time",
    //                 description: "between 8/9 AM & End between 7/9 PM"
    //             },
    //             section4: {
    //                 iconClass: "fas fa-bicycle fa-inverse",
    //                 title: "Pickup & Drop-off included",
    //                 description: "Pickup included from anywhere in Melbourne within 10km radius "
    //             },
    //             section5: {
    //                 iconClass: "fas fa-bicycle fa-inverse",
    //                 title: "Smaller intimate group",
    //                 description: "Private tour for your group of maximum 4 people "
    //             },
    //             section6: {
    //                 iconClass: "fas fa-bicycle fa-inverse",
    //                 title: "Designated chauffeur",
    //                 description: "Enjoy the convenience of having a dedicated chauffeur throughout the entire journey, ensuring a personalized and stress-free experience."
    //             },
    //             section7: {
    //                 iconClass: "fas fa-bicycle fa-inverse",
    //                 title: "Beverages on-board",
    //                 description: "Stay refreshed with a selection of soft drinks, beers and ciders on the house!"
    //             },
    //             section8: {
    //                 iconClass: "fas fa-bicycle fa-inverse",
    //                 title: "Lunch",
    //                 description: "Your trip includes a delicious lunch with locally sourced ingredients and picturesque views"
    //             },
    //             section9: {
    //                 iconClass: "fas fa-bicycle fa-inverse",
    //                 title: "Spotify",
    //                 description: "Enhance your road trip experience & Set the mood with your favourite tunes using our Spotify access during the journey"
    //             },
    //             section10: {
    //                 iconClass: "fas fa-bicycle fa-inverse",
    //                 title: "Comfort items",
    //                 description: "Stay comfy with complimentary use of blankets, umbrellas & USB charging ports"
    //             },
    //             section11: {
    //                 iconClass: "fas fa-bicycle fa-inverse",
    //                 title: "Free Photography",
    //                 description: "Capture your memories effortlessly as photography is included and provided to you following the tour."
    //             }
    //         },
    
    //          package1Iternity : {
    //             1: {
    //                 iconClass: "fas fa-car fa-inverse",
    //                 title: "Apted Orchards - Arthur’s Creek",
    //                 description: "Look around the rows of apple trees and enjoy the ambience on this captivating drive",
    //                 duration : "20 minutes ● Scenic Drive"
    //             },
    //             2: {
    //                 iconClass: "fas fa-bicycle fa-inverse",
    //                 title: "Kinglake town (Songbird Cafe & Larder) ",
    //                 description: "A morning stop to stretch our legs as we continue travelling inland towards the beautiful rainforests. Just a quick break to buy some coffee/breakfast if needed (own expenses)",
    //                 duration : "20 minutes ● Coffee break"
    //             },
    //             3: {
    //                 iconClass: "fas fa-bicycle fa-inverse",
    //                 title: "Wirrawilla Rainforest walk",
    //                 description: "Take in the sounds & smells of a beautiful rainforest surrounded by Myrtle Beech and Sassafras tress. One km grade two walk suitable for all ages & fitness levels ",
    //                 duration : "30 minutes ● Forest walk"
    //             },
    //             4: {
    //                 iconClass: "fas fa-bicycle fa-inverse",
    //                 title: "Black Spur Drive",
    //                 description: "Lower the windows and enjoy the fresh air as you pass through this iconic route through the lush Australian forest. Gaze up at the mountain ash trees and the green ferns as you drive through the winding roads with breathtaking views at every turn ",
    //                 duration : "30 minutes ● Scenic drive"
    //             },
    //             5: {
    //                 iconClass: "fas fa-bicycle fa-inverse",
    //                 title: "Redwood Forest",
    //                 description: "Step amongst the towering Californian Redwood Forest and enjoy a majestic walk in the company of over thousand enormous red-barked trees reaching up to 55 metres high.  Notice the climate getting cooler, quieter and calmer as you step through the woods. ",
    //                 duration : "30 minutes ● Forest walk"
    //             },
    //             6: {
    //                 iconClass: "fas fa-bicycle fa-inverse",
    //                 title: "Warburton",
    //                 description: "Attractive town nestled in a valley between heavily forested mountains is our lunch spot. Many of the restaurants/cafes are housed in buildings which date back to Warburton's early beginnings as a mountain escape for Melburnians in the early 1900s. ",
    //                 duration : "20 minutes ● Town exploration"
    //             },
    //             7: {
    //                 iconClass: "fas fa-bicycle fa-inverse",
    //                 title: "Marysville",
    //                 description: "Take a stroll through Marysville and surrounds, an ideal destination for lovers of nature and the outdoors. Learn about the history of this town as you stroll through the main streets and honour the fallen soldiers at the solemn memorial in Gallipoli Park.",
    //                 duration : "20 minutes ● Town exploration"
    //             },
    //             8: {
    //                 iconClass: "fas fa-bicycle fa-inverse",
    //                 title: "Steavenson Falls",
    //                 description: "Cascading waterfall in the heart of Marysville. One of the tallest waterfalls in the state!",
    //                 duration : "30 minutes ● Waterfall trail"
    //             },
    //             9: {
    //                 iconClass: "fas fa-bicycle fa-inverse",
    //                 title: "Keppel Lookout",
    //                 description: "Immerse yourself in a serene moment, gazing upon the majestic mountains as the day transitions into the enchanting golden hour or, depending on the time of year, witness a breathtaking sunset over the horizon.",
    //                 duration : "20 minutes ● Sunset"
    //             }
    //         },
    
            
    
    //          packageCancellationPolicy : {
    //             1: {value: "Full refund available with cancellation 24 hours before the road-trip start time"},
    //             2: {value: "No refund for cancellations made within 24 hours of the road-trip start time"},
    //             3: {value: "Changes requested within 24 hours of the road-trip start time will not be accommodated."},
    //             4: {value: "Departure and destination times align with Melbourne local time"},
    //             5: {value: "In case the road-trip is cancelled due to severe weather conditions, you will be offered either a full refund or an alternative date to travel"},
    //         },
    
    
    //          packageMeetAndPickUp : "Pickup included from anywhere in Melbourne within 10km radius. Enquire during your booking to confirm the Pickup location. We can also arrange pickup outside the 10km radius from Melbourne CBD at an additional service fee."
    

    //     };


    //     if (packageId == "001"){
    //         for (const section of Object.values(package001.packageAtivity)) {
    //             container.appendChild(createSection(section.iconClass, section.title, section.description));
    //         }
    
    //         for (const [index, section] of Object.entries(package001.package1Iternity)) {
    //             itinerary.appendChild(createIterity(index, section.title, section.description, section.duration));
    //         }
    
    
    //         for (const section of Object.values(package001.packageCancellationPolicy)) {
    //             cancellationPolicy.appendChild(cancellationPolicySection(section.value));
    //         }        
    //         meetAndPickUp.appendChild(meetAndPickUpSection(package001.packageMeetAndPickUp));
    //         packageName.appendChild(packageNameSection(package001.details.title))
    //         packageSubTitle.appendChild(packageSubTitleSection(package001.details.subTitle))
    //         packageDesc.appendChild(packageDescSection(package001.details.desc))
            

    //     }

    // }
	
    // function createSection(iconClass, title, description) {
    //     const div = document.createElement("div");
    //     div.className = "white-box-about-activity";
    
    //     div.innerHTML = `
    //         <div class="custom-col-wider-about-activity">
    //             <i class="${iconClass}"></i>
    //         </div>
    //         <pre></pre>
    //         <div class="custom-col-narrower-about-activity">
    //             <h3>${title}</h3>
    //             <p>${description}</p>
    //         </div>
    //     `;
    
    //     return div;
    // }
    
    // function createIterity(iconClass, title, description,duration) {
    //     const div = document.createElement("div");
    //     div.className = "white-box-about-activity";
    
    //     div.innerHTML = `
    //         <div class="custom-col-wider-about-activity">
    //         <h3> ${iconClass} </h3>
    //         </div>
    //         <pre></pre>
    //         <div class="custom-col-narrower-about-activity">
    //             <h3>${title}</h3>
    //             <p>${description}</p>
    //             <h3>${duration}</h3>
    //         </div>
    //     `;
    
    //     return div;
    // }

    // function meetAndPickUpSection(description) {
    //     const div = document.createElement("div");
    //     div.className = "white-box-about-activity";
    
    //     div.innerHTML = `
    //         <div >
    //         <p>${description}</p
    //         </div>
    //     `;
    
    //     return div;
    // }

    // function cancellationPolicySection(description) {
    //     const div = document.createElement("div");
    //     div.className = "white-box-about-activity";
    
    //     div.innerHTML = `
    //         <div >
    //         <ul>
    //         <li><p>${description}</p</li>
    //         </div>
    //     `;
    
    //     return div;
    // }

    // function packageNameSection(title) {
    //     const div = document.createElement("div");
    //     div.innerHTML = `
    //         <div >
    //         <h2>${title}</h2>
    //         </div>
    //     `;
    //     return div
    // }

    // function packageSubTitleSection(subTitle) {
    //     const div = document.createElement("div");
    //     div.innerHTML = `
    //         <div >
    //         <h5>${subTitle}</h5>
    //         </div>
    //     `;
    //     return div
    // }

    // function packageDescSection(desc) {
    //     const div = document.createElement("div");
    //     div.innerHTML = `
    //         <div >
    //         <p>${desc}</p>
    //         </div>
    //     `;
    //     return div
    // }

	/* Navbar Scripts */
	// jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 20) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
	});

    // closes the responsive menu on menu item click
    $(".navbar-nav li a").on("click", function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
    });


    /* Rotating Text - Morphtext */
	$("#js-rotating").Morphext({
		// The [in] animation type. Refer to Animate.css for a list of available animations.
		animation: "fadeIn",
		// An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
		separator: ",",
		// The delay between the changing of each phrase in milliseconds.
		speed: 2000,
		complete: function () {
			// Called after the entrance animation is executed.
		}
    });
    

    /* Card Slider - Swiper */
	var cardSlider = new Swiper('.card-slider', {
		autoplay: {
            delay: 4000,
            disableOnInteraction: false
		},
        loop: true,
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		slidesPerView: 3,
		spaceBetween: 20,
        breakpoints: {
            // when window is <= 992px
            992: {
                slidesPerView: 2
            },
            // when window is <= 768px
            768: {
                slidesPerView: 1
            } 
        }
    });

    
    /* Lightbox - Magnific Popup */
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false, /* keep it false to avoid html tag shift with margin-right: 17px */
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
    });
    

    /* Filter - Isotope */
    var $grid = $('.grid').isotope({
        // options
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });
    
    // filter items on button click
    $('.filters-button-group').on( 'click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'a', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });	
    });
    

    /* Counter - CountTo */
	var a = 0;
	$(window).scroll(function() {
		if ($('#counter').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors	
			var oTop = $('#counter').offset().top - window.innerHeight;
			if (a == 0 && $(window).scrollTop() > oTop) {
			$('.counter-value').each(function() {
				var $this = $(this),
				countTo = $this.attr('data-count');
				$({
				countNum: $this.text()
				}).animate({
					countNum: countTo
				},
				{
					duration: 2000,
					easing: 'swing',
					step: function() {
					$this.text(Math.floor(this.countNum));
					},
					complete: function() {
					$this.text(this.countNum);
					//alert('finished');
					}
				});
			});
			a = 1;
			}
		}
    });


    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
    });


    /* Call Me Form */
    $("#callMeForm").validator().on("submit", function(event) {
    	if (event.isDefaultPrevented()) {
            // handle the invalid form...
            lformError();
            lsubmitMSG(false, "Please fill all fields!");
        } else {
            // everything looks good!
            event.preventDefault();
            lsubmitForm();
        }
    });

    function lsubmitForm() {
        // initiate variables with form content
		var name = $("#lname").val();
		var phone = $("#lphone").val();
		var email = $("#lemail").val();
		var select = $("#lselect").val();
        var terms = $("#lterms").val();
        
        $.ajax({
            type: "POST",
            url: "php/callmeform-process.php",
            data: "name=" + name + "&phone=" + phone + "&email=" + email + "&select=" + select + "&terms=" + terms, 
            success: function(text) {
                if (text == "success") {
                    lformSuccess();
                } else {
                    lformError();
                    lsubmitMSG(false, text);
                }
            }
        });
	}

    function lformSuccess() {
        $("#callMeForm")[0].reset();
        lsubmitMSG(true, "Request Submitted!");
        $("input").removeClass('notEmpty'); // resets the field label after submission
    }

    function lformError() {
        $("#callMeForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
	}

    function lsubmitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated";
        } else {
            var msgClasses = "h3 text-center";
        }
        $("#lmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }


    /* Contact Form */
    $("#contactForm").validator().on("submit", function(event) {
    	if (event.isDefaultPrevented()) {
            // handle the invalid form...
            cformError();
            csubmitMSG(false, "Please fill all fields!");
        } else {
            // everything looks good!
            event.preventDefault();
            csubmitForm();
        }
    });

    function csubmitForm() {
        // initiate variables with form content
		var name = $("#cname").val();
		var email = $("#cemail").val();
        var message = $("#cmessage").val();
        var terms = $("#cterms").val();
        $.ajax({
            type: "POST",
            url: "php/contactform-process.php",
            data: "name=" + name + "&email=" + email + "&message=" + message + "&terms=" + terms, 
            success: function(text) {
                if (text == "success") {
                    cformSuccess();
                } else {
                    cformError();
                    csubmitMSG(false, text);
                }
            }
        });
	}

    function cformSuccess() {
        $("#contactForm")[0].reset();
        csubmitMSG(true, "Message Submitted!");
        $("input").removeClass('notEmpty'); // resets the field label after submission
        $("textarea").removeClass('notEmpty'); // resets the field label after submission
    }

    function cformError() {
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
	}

    function csubmitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated";
        } else {
            var msgClasses = "h3 text-center";
        }
        $("#cmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }



    /* Privacy Form */
    $("#privacyForm").validator().on("submit", function(event) {
    	if (event.isDefaultPrevented()) {
            // handle the invalid form...
            pformError();
            psubmitMSG(false, "Please fill all fields!");
        } else {
            // everything looks good!
            event.preventDefault();
            psubmitForm();
        }
    });

    function psubmitForm() {
        // initiate variables with form content
		var name = $("#pname").val();
		var email = $("#pemail").val();
        var select = $("#pselect").val();
        var terms = $("#pterms").val();
        
        $.ajax({
            type: "POST",
            url: "php/privacyform-process.php",
            data: "name=" + name + "&email=" + email + "&select=" + select + "&terms=" + terms, 
            success: function(text) {
                if (text == "success") {
                    pformSuccess();
                } else {
                    pformError();
                    psubmitMSG(false, text);
                }
            }
        });
	}

    function pformSuccess() {
        $("#privacyForm")[0].reset();
        psubmitMSG(true, "Request Submitted!");
        $("input").removeClass('notEmpty'); // resets the field label after submission
    }

    function pformError() {
        $("#privacyForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
	}

    function psubmitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated";
        } else {
            var msgClasses = "h3 text-center";
        }
        $("#pmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
    

    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});




    

})(jQuery);