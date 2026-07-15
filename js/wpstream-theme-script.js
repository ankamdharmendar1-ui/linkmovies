/*global $, jQuery,wpstreamThemeScriptsVars , document, window*/
"use strict";

jQuery(document).ready(function () {
    wpstream_header_type_search_icon();
    wpstream_menu_login_signup_form();
    wpstream_header_sticky_navigation();
    wpstream_enable_fancybox_gallery();
    wpstream_dashboard_navigation_active();
    wpstream_initialize_tooltip();
    wpstream_validate_comments_form();
    wpstream_enable_category_unit_links();
    wpstream_enable_preview_onhover();
});



function wpstream_enable_preview_onhover(){
   jQuery('.wpstream_video_unit_video_wrapper_trigger').each(function() {
        var video_id = jQuery(this).attr('data-video-id');
        var isHovering = false;

        jQuery(this).on('mouseenter', function(event) {
            if (!isHovering) {
                isHovering = true;
                wpstream_unit_playVideo(video_id);
            }
        });

        jQuery(this).on('mouseleave', function(event) {
            var self = this;
            jQuery(document).on('mousemove.checkIfLeft', function(event) {
                var offset = jQuery(self).offset();
                var width = jQuery(self).outerWidth();
                var height = jQuery(self).outerHeight();
                var x = event.pageX;
                var y = event.pageY;

                if (x < offset.left || x > offset.left + width || y < offset.top || y > offset.top + height) {
                    if (isHovering) {
                        isHovering = false;
                     
                        wpstream_unit_pauseVideo(video_id);
                    }
                    jQuery(document).off('mousemove.checkIfLeft');
                }
            });
        });
    });
}




/**
 *  enable links for categories widgets
 */
function wpstream_enable_category_unit_links(){
       jQuery('.wpstream_category_unit_link').on('click', function() {
        var link = jQuery(this).data('link');
        window.location.href = link;
    });
}


/**
 *  function to validate the comments form
 */
function wpstream_validate_comments_form(){
    jQuery('#commentform').submit(function(event) {
        var submitButton = jQuery(this).find('#submit');
        jQuery('.wpestream_comments_warning').remove();
        var comment = jQuery('#comment').val().trim();
        var author = jQuery('#author').val().trim();
        var email = jQuery('#email').val().trim();
        var submitButton = jQuery(this).find('#submit');
        var isUserLoggedIn = wpstreamThemeScriptsVars.is_user_logged_in === '1';
        


       var warningMessages = [];

        if (comment === '') {
            warningMessages.push(wpstreamThemeScriptsVars.comment_text_empty);
        }

        if (!isUserLoggedIn) {
            if (author === '') {
                warningMessages.push(wpstreamThemeScriptsVars.comment_author_empty);
            }
            if (email === '') {
                warningMessages.push(wpstreamThemeScriptsVars.comment_email_empty);
            } else {
                // Validate email format
                var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                if (!emailPattern.test(email)) {
                    warningMessages.push(wpstreamThemeScriptsVars.comment_email_invalid);
                }
            }
        }

        if (warningMessages.length > 0) {
            event.preventDefault();
            var warning = '<div class="warning wpestream_comments_warning">' + warningMessages.join('<br>') + '</div>';
            // Insert the warning as the first child of #commentform
            jQuery('#commentform').prepend(warning);
            // Enable the submit button since there's an error
            submitButton.prop('disabled', false);
        } else {
            // Disable the submit button to prevent multiple submissions
            submitButton.prop('disabled', true);
        }

    });
}

/**
 *  
 */

function wpstream_initialize_tooltip() {
    jQuery('[data-toggle="tooltip"]').tooltip();
}



/**
 *  Video Unit card - play video
 */
function wpstream_unit_playVideo(index) {
    const video = document.getElementById(index);
    video.currentTime = 0
    video.play();    
    video.classList.add("wpstream_object_playing");
}

/**
 *  Video Unit card - stop video
 */
function wpstream_unit_pauseVideo(index) {
    const video = document.getElementById(index);
    video.load();    
    video.classList.remove("wpstream_object_playing");
}

/**
 * Dashboard navigation active class
 */
function wpstream_dashboard_navigation_active() {
    const currentURL = window.location.href;

    jQuery('.wpstream_theme_dashboard_menu_container a').each(function () {
        const menuItemURL = jQuery(this).attr('href');

        if (currentURL === menuItemURL) {
            jQuery(this).addClass('active');
        }
    });
}

/**
 *   Header Type 3 Search icon
 */
function wpstream_header_type_search_icon() {
    //header search icon

    jQuery('.wpstream-theme-search-icon').click(function (event) {
        jQuery('.wpstream-theme-top-search').toggleClass('toggled');
        jQuery('.wpstream-theme-search-icon').toggleClass('toggled-search-button');
        jQuery(".search-field").focus();
        jQuery('body').addClass('open-search');
        event.stopPropagation(); 
    });

    jQuery(document).on('click', function(event) {
     
        if (!jQuery(event.target).closest('.wpstream-theme-top-search').length) {
          jQuery('.wpstream-theme-top-search').removeClass('toggled');
          jQuery('.wpstream-theme-search-icon').toggleClass('toggled-search-button');
        }
    });
}

/**
 *  menu login and signup button click showing form
 */
function wpstream_menu_login_signup_form() {
    jQuery('.wpstream-theme-sign-up-btn').click(function () {
        jQuery('.wpstream-theme_login_form').hide();
        jQuery('.wpstream-theme_register_form').show();
        jQuery('.wpstream-theme_register_link').hide();
        jQuery('.wpstream-theme_login_link').show();
    });
}

/**
 *  Header sticky navigation
 */
function wpstream_header_sticky_navigation() {
    //container width class
    const nav_offset_top = jQuery('header').height() + 80;
    const scroll = jQuery(window).scrollTop();

    if (!jQuery('.fixed-top').hasClass('bg-light')) {
        if (scroll >= nav_offset_top) {
            jQuery(".fixed-top").addClass("bg-light");
        }
    }

    jQuery(window).scroll(function () {
        const scroll = jQuery(window).scrollTop();
        if (scroll >= nav_offset_top) {
            jQuery(".fixed-top").addClass("bg-light");
        } else {
            jQuery(".fixed-top.bg-light").removeClass("bg-light");
        }
    });
}

/**
 *  enable fancybox gallery
 */
function wpstream_enable_fancybox_gallery() {
    if (typeof jQuery.fn.fancybox === 'function') {
        jQuery('.wpstream_theme_image_generate_fancybox a[data-fancybox="gallery"]').fancybox({
            // Core Options
            animationEffect: "zoom",     // Animation type: "fade", "zoom", "slide", "circular", "tube", "zoom-in-out", or "rotate"
            transitionEffect: "tube",  // Transition type: "fade", "slide", "circular", or "tube"
            transitionDuration: 300,    // Duration of transition animation in milliseconds
            slideClass: "",             // Additional CSS class applied to each slide
            baseClass: 'wpstream_theme_fancybox',              // Base CSS class for fancybox container
            gutter: 50,                 // Spacing between slides in pixels
            thumbs: {
                autoStart: true,
                axis: 'x',
                hideOnClose: true,      // Hide thumbnails when fancybox is closed
            },
            touch: true,
            loop: true,
            arrows: true,
        });
    }
}