"use strict";

jQuery(function ($) {
    // Close offcanvas on click <a> keep .dropdown-menu open (see https://github.com/wpstream_theme/wpstream_theme/discussions/347)
    $('.offcanvas a:not(.dropdown-toggle, .remove_from_cart_button, .wpstream-theme_user_terms_register_link)').on('click', function () {
        $('.offcanvas').offcanvas('hide');
    });

  
    // Close collapse if click outside search form
    jQuery(document).on('click', function (event) {
        if (jQuery(event.target).closest('#collapse-search').length === 0) {
            if (typeof jQuery('#collapse-search').collapse === 'function') {
                jQuery('#collapse-search').collapse('hide');
            }
        }
    });

    // Scroll to top Button
    $(window).on('scroll', function () {
        const scroll = $(window).scrollTop();

        if (scroll >= 500) {
            $('.top-button').addClass('visible');
        } else {
            $('.top-button').removeClass('visible');
        }
    });

    // div height, add class to your content
    $('.height-50').css('height', 0.5 * $(window).height());
    $('.height-75').css('height', 0.75 * $(window).height());
    $('.height-85').css('height', 0.85 * $(window).height());
    $('.height-100').css('height', 1.0 * $(window).height());

    // IE Warning
    if (window.document.documentMode) {
        let IEWarningDiv = document.createElement('div');
        IEWarningDiv.setAttribute('class', 'position-fixed top-0 end-0 bottom-0 start-0 d-flex justify-content-center align-items-center');
        IEWarningDiv.setAttribute('style', 'background:white;z-index:1999');
        IEWarningDiv.innerHTML = '<div style="max-width: 90vw;">' + '<h1>' + wpstream_theme_vars.ie_title + '</h1>' + '<p className="lead">' + wpstream_theme_vars.ie_limited_functionality + '</p>' + '<p className="lead">' + wpstream_theme_vars.ie_modern_browsers_1 + wpstream_theme_vars.ie_modern_browsers_2 + wpstream_theme_vars.ie_modern_browsers_3 + wpstream_theme_vars.ie_modern_browsers_4 + wpstream_theme_vars.ie_modern_browsers_5 + '</p>' + '</div>';
        document.body.appendChild(IEWarningDiv);
    }
    // IE Warning End

}); // jQuery End

jQuery(document).ready(function ($) {
    wpstream_dropdown_select_second_level();
    wpstream_boostrap_dropdown_select();
    wpstream_show_like_dislike();
    wpstream_start_popovers();
    wpstream_start_trailers();
    wpstream_login_register_control_forms();
    wpstream_login_actions();
    wpstream_show_hide_pass();
    wpstream_register_actions();
    wpstream_top_bar_login_register_actions();
    wpstream_forgot_actions();
    wpstream_load_more_shortcode_trigger_function();
    wpstream_filter_bar_trigger();
    wpstream_filter_bar_blog_post_trigger();
    wpstream_share_menu_toggle();
    wpstream_categories_slider();
    wpstream_item_list_filter_bar();
    wpstream_blog_post_slider();
    wpstream_testimonial_slider();
    wpstream_featured_video_item_list_slider();
    wpstream_video_items_slider();
});


jQuery(document).on('click', function (event) {

   if (!jQuery(event.target).closest('.wpstream-social-share-main, .wp-stream-share-icon').length) {
            jQuery('.wp-stream-share-icon').removeClass('active');
            jQuery('.wpstream-social-share-main').hide();
        }

});

/**
 * Dropdown Select second levem menu
 * 
 */
function wpstream_dropdown_select_second_level(){
   
    jQuery('.dropdown-menu.depth_0>.menu-item-has-children>.dropdown-item').click(function(event){
        event.preventDefault(); // Prevent the link from redirecting
        event.stopPropagation();
    })
}

/**
 * Dropdown Select
 * 
 */

function wpstream_boostrap_dropdown_select(){

    jQuery('.wpstream-dropdown-item').click(function(e) {
  
        e.preventDefault(); // Prevent the link from redirecting
        var selectedText = jQuery(this).text();
        var selectedValue = jQuery(this).attr('data-value');
        var parent = jQuery(this).closest('.dropdown-wrapper');

   
        parent.find('.dropdown-toggle').text(selectedText);
        parent.find('.dropdown-value-holder').val(selectedValue);
    });
}


/**
 * Show Like Dislike
 *
 */
function wpstream_show_like_dislike(){
    jQuery('.wpstream_show_like_dislike').each(function () {
        var items = jQuery(this).attr('data-items-per-row');
        var auto = parseInt(jQuery(this).attr('data-auto'));
        var slick = jQuery(this).slick({
            infinite: true,
            slidesToShow: items,
            slidesToScroll: 1,
            autoplay:auto,
            dots: false,

            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        ifarent.find('.dropdown-value-holder').val(selectedValue);
        parent.find('.dropdown-value-holder').val(selectedValue);
    });
}


/**
 * Featured video items slider
 * 
 */
function wpstream_featured_video_item_list_slider(){
    jQuery('.wpstream-featured-video-item-list-slider').each(function () {
       	var items = 1;
        var auto = parseInt(jQuery(this).attr('data-auto'));
        var is_autoplay=false;
        var autoplaySpeed=0;
        if(auto!==0){
            is_autoplay=true;
            autoplaySpeed=auto;
        }
        var slick = jQuery(this).slick({
            infinite: true,
            slidesToShow: items,
            autoplay:is_autoplay,
            autoplaySpeed:autoplaySpeed,
            slidesToScroll: 1,
            dots: true,
	        nextArrow:'<button class="slick-next slick-arrow 333 " aria-label="Next" type="button" style=""><svg width="12" height="20" viewBox="0 0 12 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.93934 0.93934C1.52513 0.353553 2.47487 0.353553 3.06066 0.93934L11.0607 8.93934C11.6464 9.52513 11.6464 10.4749 11.0607 11.0607L3.06066 19.0607C2.47487 19.6464 1.52513 19.6464 0.93934 19.0607C0.353553 18.4749 0.353553 17.5251 0.93934 16.9393L7.87868 10L0.93934 3.06066C0.353553 2.47487 0.353553 1.52513 0.93934 0.93934Z"/></svg></button>',
            prevArrow:'<button class="slick-prev slick-arrow 222 " aria-label="Next" type="button" style=""><svg width="12" height="20" viewBox="0 0 12 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0607 19.0607C10.4749 19.6464 9.52513 19.6464 8.93934 19.0607L0.93934 11.0607C0.353555 10.4749 0.353555 9.52513 0.939341 8.93934L8.93934 0.93934C9.52513 0.353554 10.4749 0.353554 11.0607 0.939341C11.6464 1.52513 11.6464 2.47487 11.0607 3.06066L4.12132 10L11.0607 16.9393C11.6464 17.5251 11.6464 18.4749 11.0607 19.0607Z"/></svg></button>',

            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        if (wpstream_theme_vars.is_rtl === true) {
            jQuery(this).slick('slickSetOption', 'rtl', true, true);
            jQuery(this).slick('slidesToScroll', '-1');
        }
    });
}

/**
 * Categories slider
 * 
 */
function wpstream_testimonial_slider(){
    jQuery('.wpstream_testimonial_slider').each(function () {
        if (!jQuery(this).prop('slick')) {
            var items = 1;
            var auto = parseInt(jQuery(this).attr('data-auto'));
            var is_autoplay = false;
            var autoplaySpeed = 0;
            if (auto !== 0) {
                is_autoplay = true;
                autoplaySpeed = auto;
            }
            var slick = jQuery(this).slick({
                infinite: true,
                slidesToShow: items,
                autoplay: is_autoplay,
                autoplaySpeed: autoplaySpeed,
                slidesToScroll: 1,
                dots: false,
                nextArrow: '<button class="slick-next slick-arrow 333 " aria-label="Next" type="button" style=""><svg width="12" height="20" viewBox="0 0 12 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.93934 0.93934C1.52513 0.353553 2.47487 0.353553 3.06066 0.93934L11.0607 8.93934C11.6464 9.52513 11.6464 10.4749 11.0607 11.0607L3.06066 19.0607C2.47487 19.6464 1.52513 19.6464 0.93934 19.0607C0.353553 18.4749 0.353553 17.5251 0.93934 16.9393L7.87868 10L0.93934 3.06066C0.353553 2.47487 0.353553 1.52513 0.93934 0.93934Z"/></svg></button>',
                prevArrow: '<button class="slick-prev slick-arrow 222 " aria-label="Next" type="button" style=""><svg width="12" height="20" viewBox="0 0 12 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0607 19.0607C10.4749 19.6464 9.52513 19.6464 8.93934 19.0607L0.93934 11.0607C0.353555 10.4749 0.353555 9.52513 0.939341 8.93934L8.93934 0.93934C9.52513 0.353554 10.4749 0.353554 11.0607 0.939341C11.6464 1.52513 11.6464 2.47487 11.0607 3.06066L4.12132 10L11.0607 16.9393C11.6464 17.5251 11.6464 18.4749 11.0607 19.0607Z"/></svg></button>',

                responsive: [
                    {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
            if (wpstream_theme_vars.is_rtl === true) {
                jQuery(this).slick('slickSetOption', 'rtl', true, true);
                jQuery(this).slick('slidesToScroll', '-1');
            }
        }
    });
}



/**
 * Categories slider
 * 
 */
function wpstream_categories_slider(){
    jQuery('.wpstream_category_slider').each(function () {
       	var items = jQuery(this).attr('data-items-per-row');
        var auto = parseInt(jQuery(this).attr('data-auto'));
        var is_autoplay=false;
        var autoplaySpeed=0;
        if(auto!==0){
            is_autoplay=true;
            autoplaySpeed=auto;
        }
        var slick = jQuery(this).slick({
            infinite: true,
            slidesToShow: items,
            autoplay:is_autoplay,
            autoplaySpeed:autoplaySpeed,
            slidesToScroll: 1,
            dots: false,
	        nextArrow:'<button class="slick-next slick-arrow 333 " aria-label="Next" type="button" style=""><svg width="12" height="20" viewBox="0 0 12 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.93934 0.93934C1.52513 0.353553 2.47487 0.353553 3.06066 0.93934L11.0607 8.93934C11.6464 9.52513 11.6464 10.4749 11.0607 11.0607L3.06066 19.0607C2.47487 19.6464 1.52513 19.6464 0.93934 19.0607C0.353553 18.4749 0.353553 17.5251 0.93934 16.9393L7.87868 10L0.93934 3.06066C0.353553 2.47487 0.353553 1.52513 0.93934 0.93934Z"/></svg></button>',
            prevArrow:'<button class="slick-prev slick-arrow 222 " aria-label="Next" type="button" style=""><svg width="12" height="20" viewBox="0 0 12 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0607 19.0607C10.4749 19.6464 9.52513 19.6464 8.93934 19.0607L0.93934 11.0607C0.353555 10.4749 0.353555 9.52513 0.939341 8.93934L8.93934 0.93934C9.52513 0.353554 10.4749 0.353554 11.0607 0.939341C11.6464 1.52513 11.6464 2.47487 11.0607 3.06066L4.12132 10L11.0607 16.9393C11.6464 17.5251 11.6464 18.4749 11.0607 19.0607Z"/></svg></button>',

            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        if (wpstream_theme_vars.is_rtl === true) {
            jQuery(this).slick('slickSetOption', 'rtl', true, true);
            jQuery(this).slick('slidesToScroll', '-1');
        }
    });
}

/*
 *  Blog Post SLider
 */
function wpstream_blog_post_slider(){

    jQuery('.wpstream-blog-post-slider').each(function () {
        if (!jQuery(this).prop('slick')){
            var items = jQuery(this).attr('data-items-per-row');
            var auto = parseInt(jQuery(this).attr('data-auto'));
            var is_autoplay=false;
            var autoplaySpeed=0;
            if(auto!==0){
                is_autoplay=true;
                autoplaySpeed=auto;
            }

            var slick = jQuery(this).slick({
                infinite: true,
                slidesToShow: items,
                slidesToScroll: 1,
                autoplay:is_autoplay,
                autoplaySpeed:autoplaySpeed,
                dots: false,
                nextArrow:'<button class="slick-next slick-arrow 333 " aria-label="Next" type="button" style=""><svg width="12" height="20" viewBox="0 0 12 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.93934 0.93934C1.52513 0.353553 2.47487 0.353553 3.06066 0.93934L11.0607 8.93934C11.6464 9.52513 11.6464 10.4749 11.0607 11.0607L3.06066 19.0607C2.47487 19.6464 1.52513 19.6464 0.93934 19.0607C0.353553 18.4749 0.353553 17.5251 0.93934 16.9393L7.87868 10L0.93934 3.06066C0.353553 2.47487 0.353553 1.52513 0.93934 0.93934Z"/></svg></button>',
                prevArrow:'<button class="slick-prev slick-arrow 222 " aria-label="Next" type="button" style=""><svg width="12" height="20" viewBox="0 0 12 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0607 19.0607C10.4749 19.6464 9.52513 19.6464 8.93934 19.0607L0.93934 11.0607C0.353555 10.4749 0.353555 9.52513 0.939341 8.93934L8.93934 0.93934C9.52513 0.353554 10.4749 0.353554 11.0607 0.939341C11.6464 1.52513 11.6464 2.47487 11.0607 3.06066L4.12132 10L11.0607 16.9393C11.6464 17.5251 11.6464 18.4749 11.0607 19.0607Z"/></svg></button>',


                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
            if (wpstream_theme_vars.is_rtl === true) {
                jQuery(this).slick('slickSetOption', 'rtl', true, true);
                jQuery(this).slick('slidesToScroll', '-1');
            }
        }
    });
}

/**
 * Items slider
 */
function wpstream_video_items_slider(){
    jQuery('.wpstream-item-list-slider').each(function () {
        if (!jQuery(this).prop('slick')) {
            var items = jQuery(this).attr('data-items-per-row');
            var auto = parseInt(jQuery(this).attr('data-auto'));
            var is_autoplay = false;
            var autoplaySpeed = 0;
            if (auto !== 0) {
                is_autoplay = true;
                autoplaySpeed = auto;
            }

            var slick = jQuery(this).slick({
                infinite: true,
                slidesToShow: items,
                slidesToScroll: 1,
                autoplay: is_autoplay,
                autoplaySpeed: autoplaySpeed,
                dots: false,
                nextArrow: '<button class="slick-next slick-arrow 333 " aria-label="Next" type="button" style=""><svg width="12" height="20" viewBox="0 0 12 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.93934 0.93934C1.52513 0.353553 2.47487 0.353553 3.06066 0.93934L11.0607 8.93934C11.6464 9.52513 11.6464 10.4749 11.0607 11.0607L3.06066 19.0607C2.47487 19.6464 1.52513 19.6464 0.93934 19.0607C0.353553 18.4749 0.353553 17.5251 0.93934 16.9393L7.87868 10L0.93934 3.06066C0.353553 2.47487 0.353553 1.52513 0.93934 0.93934Z"/></svg></button>',
                prevArrow: '<button class="slick-prev slick-arrow 222 " aria-label="Next" type="button" style=""><svg width="12" height="20" viewBox="0 0 12 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0607 19.0607C10.4749 19.6464 9.52513 19.6464 8.93934 19.0607L0.93934 11.0607C0.353555 10.4749 0.353555 9.52513 0.939341 8.93934L8.93934 0.93934C9.52513 0.353554 10.4749 0.353554 11.0607 0.939341C11.6464 1.52513 11.6464 2.47487 11.0607 3.06066L4.12132 10L11.0607 16.9393C11.6464 17.5251 11.6464 18.4749 11.0607 19.0607Z"/></svg></button>',

                responsive: [
                    {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
            if (wpstream_theme_vars.is_rtl === true) {
                jQuery(this).slick('slickSetOption', 'rtl', true, true);
                jQuery(this).slick('slidesToScroll', '-1');
            }
        }
    });
}

/**
 * Filter bar blog post
 * @returns {undefined}
 */


function wpstream_filter_bar_blog_post_trigger() {
    const ajaxurl = wpstream_theme_vars.admin_url + 'admin-ajax.php';

    jQuery('.wpstream_dropdown_select_trigger_ajax_blog_list .dropdown-item').click(function(e) {

        e.preventDefault(); // Prevent the link from redirecting
        var selectedText    =   jQuery(this).text();
        var selected_value  =   jQuery(this).attr('data-value');
        var parent          =   jQuery(this).closest('.dropdown-wrapper');
        const item_id       =   parent.find('.dropdown-value-holder').attr("id");

        const parent_wrapper    = jQuery(this).closest('.wpstream-shortcode-list-wrapper');
        const holder            = parent_wrapper.find('.wpstream_ajax_holder_shortcode');
        let load_more_button    = parent_wrapper.find('.wpstream_load_more');


        if (load_more_button.length === 0) { // there is no load more but pagination
            load_more_button = parent_wrapper.find('.wpstream-pagination');
        }


        let item_name;

        switch (item_id) {
   
            case "wpstream_dropdown_category":
                item_name = "data-category-ids";
                break;
            case "blog_sort_options_dropdown":
                item_name = "data-sort-by";
                break;
        }

  
        holder.attr(item_name, selected_value);
        wpstream_load_more_blog_list_shortcode(load_more_button, 'reload');
    });
}

/**
 * Load more action
 */
function wpstream_load_more_blog_list_shortcode(button, reload_list,is_filter_bar) {
    if (button.hasClass('wpstream_load_more')) {
        var button_wrapper = button.parent();
    }



    var parent = button.closest('.wpstream-shortcode-list-wrapper');

    if(is_filter_bar !== undefined && is_filter_bar !== false  ){
        var parent = is_filter_bar.closest('.elementor-widget-container').find('.wpstream-shortcode-list-wrapper');
    }
    
    var item_container = parent.find('.wpstream-blog-list-wrapper');
    var action_function='wpstream_shortcode_load_more_blog_list_function';
    
    if(item_container.length == 0){
        item_container    = parent.find('.wpstream-item-list-with-top-filters-wrapper');
        action_function     ='wpstream_shortcode_load_more_blog_list_with_top_bar_function';
    }
    

    if (reload_list === 'reload') {
        item_container.find('.wpstream-blog-card').remove();
        parent.find('.wpstream-no-more-items').remove();
        item_container.append('<div class="wpstream-loader-wrapper"><div class="wpstream-loader"></div></div>');     
    }else{
        item_container.append('<div class="wpstream-loader-wrapper"><div class="wpstream-loader"></div></div>');   
    }


    const ajaxurl = wpstream_theme_vars.admin_url + 'admin-ajax.php';
    const ajax_data_holder = parent.find('.wpstream_ajax_holder_shortcode');
    let paged = parseInt(ajax_data_holder.attr('data-paged'));

    // if we reload - page should be 1
    if (reload_list === 'reload') {
        paged = 1;
    } else {
        paged = paged + 1;
    }

    const category_ids    = ajax_data_holder.attr('data-category-ids');
    const number          = ajax_data_holder.attr('data-number');
    const rownumber       = ajax_data_holder.attr('data-rownumber');
    const sort_by         = ajax_data_holder.attr('data-sort-by');
    const pagination_type = ajax_data_holder.attr('data-pagination-type');
    const is_elementor    = ajax_data_holder.attr('data-is-elementor');
    const current_page    = ajax_data_holder.attr('data-current-page');
    var uid               = ajax_data_holder.attr('data-uid');
    jQuery.ajax({
        type: 'POST',
        dataType: 'json',
        url: ajaxurl,
        data: {
            'action': action_function,
            'paged': paged,
            'category_ids': category_ids,
            'number': number,
            'rownumber': rownumber,
            'sort_by': sort_by,
            'pagination_type': pagination_type,
            'is_elementor': is_elementor,
            'is_ajax': 1,
            'current_page': current_page,
            'blog_uid':uid,
            'nonce': wpstream_theme_vars.shortcodes_nonce_ajax,
        },
        success: function (answer) {

            const post_count = parseInt(answer.data.post_count);
            const found_post = parseInt(answer.data.found_posts);
            item_container.find('.wpstream-loader-wrapper').remove();

            if (reload_list === 'reload') {
                item_container.find('.wpstream-blog-card').remove();
                parent.find('.wpstream-no-more-items').remove();

                if (found_post > 0) {
                    parent.find('.wpstream-pagination').html(answer.data.html_pagination);
                    wpstream_load_more_shortcode_trigger_function();
                } else {
                    parent.find('.wpstream-pagination').html(wpstream_theme_vars.no_more_items);
                }
            } else {
                if (post_count === 0) {
                    button_wrapper.find('.wpstream_load_more').remove();
                    button_wrapper.append(wpstream_theme_vars.no_more_items);
                }
            }

            if (post_count > 0) {
                // here we display new items
                item_container.append(answer.data.html);

                if (reload_list === 'reload') {
                    ajax_data_holder.attr('data-paged', 1);
                } else {
                    ajax_data_holder.attr('data-paged', paged);
                }
            }
        },
        error: function (errorThrown) {
            console.log(errorThrown);
        }
    });
}

/**
 * 
 * Dropdown
 * 
 */

function wpstream_filter_bar_trigger() {

    const ajaxurl = wpstream_theme_vars.admin_url + 'admin-ajax.php';
    jQuery('.wpstream_dropdown_select_trigger_ajax .dropdown-item').click(function(e) {
        var selected_value = jQuery(this).attr('data-value');
        var parent = jQuery(this).closest('.dropdown-wrapper');
        const item_id =parent.find('.dropdown-value-holder').attr("id");

        const parent_wrapper = jQuery(this).closest('.wpstream-shortcode-list-wrapper');
        const holder = parent_wrapper.find('.wpstream_ajax_holder_shortcode');
        let load_more_button = parent_wrapper.find('.wpstream_load_more');

     

        if (load_more_button.length === 0) { // there is no load more but pagination

            if( parent_wrapper.find('.wpstream-pagination').length===0 ){
            load_more_button=holder;
            }else{
            load_more_button = parent_wrapper.find('.wpstream-pagination');
            }
        }

        let item_name;

        switch (item_id) {
            case "post_type_dropdown":
                item_name = "data-type";
                break;
            case "wpstream_dropdown_category":
                item_name = "data-category-ids";
                break;
            case "wpstream_dropdown_wpstream_category":
                item_name = "data-wpstream-category-ids";
                break;
            case "wpstream_dropdown_wpstream_movie_rating":
                item_name = "data-movie-ratings-ids";
                break;
            case "wpstream_dropdown_wpstream_actors":
                item_name = "data-actors-ids";
                break;
            case "sort_options_dropdown":
                item_name = "data-sort-by";
                break;
        }

     
   

        holder.attr(item_name, selected_value);
        wpstream_load_more_shortcode(load_more_button, 'reload');
    });
}

/**
 * Add data to pagination
 */
function wpstream_add_data_to_pagination() {
    const filters = {
        'post_type_dropdown': 'post_type',
        'wpstream_dropdown_category': 'category',
        'wpstream_dropdown_wpstream_actors': 'wpstream_actors',
        'wpstream_dropdown_wpstream_category': 'wpstream_category',
        'wpstream_dropdown_wpstream_movie_rating': 'movie_rations',
        'sort_options_dropdown': 'sort'
    };

    let to_append = '?';

    jQuery.each(filters, function (filter_id, get_var) {
        const filter_value = jQuery('#' + filter_id).val();

        if (filter_value !== '') {
            to_append = to_append + '&' + get_var + '=' + filter_value;
        }
    });

   
}




/**
 * Item List filter bar
 */
function wpstream_item_list_filter_bar(){
    jQuery('.control_tax_sh').on('click',function(event){
        var term_id = jQuery(this).attr('data-taxid');
        var taxonomy = jQuery(this).attr('data-taxonomy');
        var parent = jQuery(this).closest('.elementor-widget-container');
        var ajax_holder = parent.find('.wpstream_ajax_holder_shortcode');
        
        if(taxonomy=='category'){
            ajax_holder.attr('data-category-ids',term_id);
        }else if(taxonomy=='wpstream_actors'){
            ajax_holder.attr('data-actors-ids',term_id);
        }else if(taxonomy=='wpstream_movie_rating'){
            ajax_holder.attr('data-movie-ratings-ids',term_id);
        }else if(taxonomy=='wpstream_category'){
            ajax_holder.attr('data-wpstream-category-ids',term_id);
        }

        jQuery('.control_tax_sh').removeClass('control_tax_sh_selected');
        jQuery(this).addClass('control_tax_sh_selected');
        wpstream_load_more_shortcode(parent.find('.wpstream_load_more'), 'reload',jQuery(this) );
        
    });
}

/**
 * Load more trigger function action
 */
function wpstream_load_more_shortcode_trigger_function() {
    jQuery('.wpstream_load_more').on('click', function () {
        var parent = jQuery(this).closest('.wpstream-shortcode-list-wrapper');

        if (parent.find('.wpstream-blog-list-wrapper').length>0){
            wpstream_load_more_blog_list_shortcode(jQuery(this), 'noreload',false);
        }else{
            wpstream_load_more_shortcode(jQuery(this), 'noreload',false)
        }


    });
}
/**
 * Load more action
 */
function wpstream_load_more_shortcode(button, reload_list,is_filter_bar) {


    if (button.hasClass('wpstream_load_more')) {
        var button_wrapper = button.parent();
    }
    var parent = button.closest('.wpstream-shortcode-list-wrapper');
    if(is_filter_bar !== undefined && is_filter_bar !== false  ){
        var parent = is_filter_bar.closest('.elementor-widget-container').find('.wpstream-shortcode-list-wrapper');
    }
    


    var item_container = parent.find('.wpstream-item-list-wrapper');
    var action_function='wpstream_shortcode_load_more_function';
    
    if(item_container.length == 0){
        item_container    = parent.find('.wpstream-item-list-with-top-filters-wrapper');
        action_function     ='wpstream_shortcode_with_top_bar_load_more_function';
    }

    if (reload_list === 'reload') {
        item_container.find('.wpstream-video-card-unit').remove();
        parent.find('.wpstream-no-more-items').remove();

        item_container.append('<div class="wpstream-loader-wrapper"><div class="wpstream-loader"></div></div>');     
    }else{
        item_container.append('<div class="wpstream-loader-wrapper"><div class="wpstream-loader"></div></div>');   
    }
    
   
    const ajaxurl = wpstream_theme_vars.admin_url + 'admin-ajax.php';
    const ajax_data_holder = parent.find('.wpstream_ajax_holder_shortcode');
    let paged = parseInt(ajax_data_holder.attr('data-paged'));

   


    // if we reload - page should be 1
    if (reload_list === 'reload') {
        paged = 1;
    } else {
        paged = paged + 1;
    }

    const type                  = ajax_data_holder.attr('data-type');
    const category_ids          = ajax_data_holder.attr('data-category-ids');
    const wpstream_category_ids = ajax_data_holder.attr('data-wpstream-category-ids');
    const movie_ratings_ids     = ajax_data_holder.attr('data-movie-ratings-ids');
    const actors_ids      = ajax_data_holder.attr('data-actors-ids');
    const number          = ajax_data_holder.attr('data-number');
    const rownumber       = ajax_data_holder.attr('data-rownumber');
    const sort_by         = ajax_data_holder.attr('data-sort-by');
    const pagination_type = ajax_data_holder.attr('data-pagination-type');
    const is_elementor    = ajax_data_holder.attr('data-is-elementor');
    const current_page    = ajax_data_holder.attr('data-current-page');
    const video_card      = ajax_data_holder.attr("data-video-card");
    var uid               = ajax_data_holder.attr('data-uid');
    jQuery.ajax({
        type: 'POST',
        dataType: 'json',
        url: ajaxurl,
        data: {
            'action': action_function,
            'paged': paged,
            'type': type,
            'category_ids': category_ids,
            'wpstream_category_ids': wpstream_category_ids,
            'movie_ratings_ids': movie_ratings_ids,
            'actors_ids': actors_ids,
            'number': number,
            'rownumber': rownumber,
            'sort_by': sort_by,
            'pagination_type': pagination_type,
            'is_elementor': is_elementor,
            'is_ajax': 1,
            'current_page': current_page,
            'video_uid':uid,
            'video_card':video_card,
            'nonce': wpstream_theme_vars.shortcodes_nonce_ajax,
        },
        success: function (answer) {
            const post_count = parseInt(answer.data.post_count);
            const found_post = parseInt(answer.data.found_posts);
            item_container.find('.wpstream-loader-wrapper').remove();
        

            if (reload_list === 'reload') {

             
                item_container.find('.wpstream-video-card-unit').remove();
                parent.find('.wpstream-no-more-items').remove();
             
                if (found_post > 0) {
                  parent.find('.wpstream-pagination').html(answer.data.html_pagination);
                    wpstream_load_more_shortcode_trigger_function();
                } else {
                    parent.find('.wpstream-pagination').html(wpstream_theme_vars.no_more_items);
                }
            } else {
                if (post_count === 0) {
                    button_wrapper.find('.wpstream_load_more').remove();
                    button_wrapper.append(wpstream_theme_vars.no_more_items);
                }
            }

            if (post_count > 0) {
                
                // here we display new items
                item_container.append(answer.data.html);

                if (reload_list === 'reload') {
                    ajax_data_holder.attr('data-paged', 1);
                } else {
                    ajax_data_holder.attr('data-paged', paged);
                }
            }
        },
        error: function (errorThrown) {
        }
    });
}

/**
 * forgot action
 */
function wpstream_forgot_actions() {
    jQuery('.wpstream-theme_wp_forgot_button').on('click', function () {
        const button = jQuery(this);
        wpstream_handle_forget_pass_ajax(button);
    });

    jQuery('.wpstream-theme_forgot_email').keydown(function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            const parent = jQuery(this).closest('.wpstream-theme_forgot_form');
            const button = parent.find('.wpstream-theme_wp_forgot_button');
            wpstream_handle_forget_pass_ajax(button);
        }
    });
}

/**
 * handle forgot pass action
 */
function wpstream_handle_forget_pass_ajax(button) {
    const captcha = '';
    const parent = jQuery(button).closest('.wpstream-theme_forgot_form');
    const ajaxurl = wpstream_theme_vars.admin_url + 'admin-ajax.php';
    const notification = parent.find('.wpstream-theme_forgot_alert');
    const security = jQuery('.wpstream-theme_security-login-topbar').val();
    const forgot_email = parent.find('.wpstream-theme_forgot_email').val();

    jQuery.ajax({
        type: 'POST',
        dataType: 'json',
        url: ajaxurl,
        data: {
            'action': 'handle_forgot_pass',
            'forgot_email': forgot_email,
            'security': security
        },
        success: function (data) {
          

            notification.empty().append('<div class="wpstream-alert">' + data.message + '</div>');
            parent.find('.wpstream-theme_forgot_email').val('');
        },
        error: function (errorThrown) {
        }
    });
}

/**
 * register action
 */
function wpstream_register_actions() {
    jQuery('.wpstream-theme_wp_register_button').on('click', function () {
        const button = jQuery(this);
        wpstream_handle_register_ajax(button);
    });

    jQuery('.wpstream-theme_user_login_register, .wpstream-theme_user_email_register, .wpstream-theme_user_password, .wpstream-theme_user_password_retype').keydown(function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            const parent = jQuery(this).closest('.wpstream-theme_register_form');
            const button = parent.find('.wpstream-theme_wp_register_button');
            wpstream_handle_register_ajax(button);
        }
    });
}

/**
 * handle register action
 */
function wpstream_handle_register_ajax(button) {
    let captcha = '';
    const parent = jQuery(button).closest('.wpstream-theme_register_form');
    const ajaxurl = wpstream_theme_vars.admin_url + 'admin-ajax.php';
    const notification = parent.find('.wpstream-theme_register_alert');
    const security = jQuery('.wpstream-theme_security-login-topbar').val();
    notification.empty().append('<div class="wpstream-alert">' + wpstream_theme_vars.sending + '</div>');
    if (wpstream_theme_vars.usecaptcha === 'yes') {
        captcha = grecaptcha.getResponse(
            widgetId1
        );
    }
    let user_pass = '';
    let user_pass_retype = '';
    let user_login_register = parent.find('.wpstream-theme_user_login_register').val();
    let user_email_register = parent.find('.wpstream-theme_user_email_register').val();

    if (wpstream_theme_vars.userpass === 'yes') {
        user_pass = parent.find('.wpstream-theme_user_password').val();
        user_pass_retype = parent.find('.wpstream-theme_user_password_retype').val();
    }

    if (!parent.find('#wpstream-theme_user_terms_register').prop("checked")) {
        notification.empty().append('<div class="wpstream-alert">' + wpstream_theme_vars.terms_cond + '</div>');
        return;
    }

    jQuery.ajax({
        type: 'POST',
        dataType: 'json',
        url: ajaxurl,
        data: {
            'action': 'handle_register',
            'user_login_register': user_login_register,
            'user_email_register': user_email_register,
            'user_pass': user_pass,
            'user_pass_retype': user_pass_retype,
            'security': security,
            'captcha': captcha
        },
        success: function (data) {
            notification.empty().append('<div class="wpstream-alert">' + data.message + '</div>');
            if (data.success === true) {

            } else {
                parent.find('.wpstream-theme_user_login_register').val('');
                parent.find('.wpstream-theme_user_email_register').val('');
                parent.find('.wpstream-theme_user_password').val('');
                parent.find('.wpstream-theme_user_password_retype').val('');
                parent.find('.wpstream-theme_user_terms_register').val('')
            }
        },
        error: function (errorThrown) {
        }
    });
}

/**
 * login action
 */
function wpstream_login_actions() {
    jQuery('.wpstream-theme_wp_login_button').on('click', function (event) {
        const button = jQuery(this);
        wpstream_handle_login_ajax(button);
    });

    jQuery('.wpstream-theme_login_user, .wpstream-theme_login_pwd').keydown(function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            const parent = jQuery(this).closest('.wpstream-theme_login_form');
            const button = parent.find('.wpstream-theme_wp_login_button');
            wpstream_handle_login_ajax(button);
        }
    });
    
}
/**
 * handle show hide pass
 */
function wpstream_show_hide_pass(){
   
    jQuery(".show_hide_password").on("click", function () {
      var pass_field = jQuery(this).parent().find(":input");

      if (pass_field.attr("type") === "password") {
        pass_field.attr("type", "text");
        jQuery(this).find('.far').removeClass("fa-eye-slash").addClass("fa-eye");
      } else {
        pass_field.attr("type", "password");

        jQuery(this).find('.far').removeClass("fa-eye").addClass("fa-eye-slash");
      }
    });


}


/**
 * handle login action
 */
function wpstream_handle_login_ajax(button) {
    let login_user, login_pwd, ispop, ajaxurl, security;
    const parent = jQuery(button).closest('.wpstream-theme_login_form');
    const notification = parent.find('.wpstream-theme_login_alert');

    login_user = parent.find('.wpstream-theme_login_user').val();
    login_pwd = parent.find('.wpstream-theme_login_pwd').val();
    security = jQuery('.wpstream-theme_security-login-topbar').val();
    ajaxurl = wpstream_theme_vars.admin_url + 'admin-ajax.php';
    ispop = 0;
    notification.empty().append('<div class="wpstream-alert">' + wpstream_theme_vars.sending + '</div>');

    jQuery.ajax({
        type: 'POST',
        dataType: 'json',
        url: ajaxurl,
        data: {
            'action': 'handle_login',
            'login_user': login_user,
            'login_pwd': login_pwd,
            'ispop': ispop,
            'security': security
        },
        success: function (data) {
            notification.empty().append('<div class="wpstream-alert">' + data.message + '</div>');

            if (data.success === true) {
                document.location.href = wpstream_theme_vars.login_redirect;
            } else {
                parent.find('.wpstream-theme_login_user').val('');
                parent.find('.wpstream-theme_login_pwd').val('');
            }
        },
        error: function (errorThrown) {
        }
    });
}

/**
 * handle login action
 */
function wpstream_top_bar_login_register_actions() {
    jQuery('.wpstream-theme-login-btn').on('click', function (event) {
        const canvas = jQuery('.wpstream-offcanvas');
        canvas.find('.wpstream-theme_login_form').show();
        canvas.find('.wpstream-theme_login_link').hide();
        canvas.find('.wpstream-theme_register_form').hide();
        canvas.find('.wpstream-theme_register_link').show();
    });

    jQuery('.wpstream-theme-sign-up-btn').on('click', function (event) {
        const canvas = jQuery('.wpstream-offcanvas');
        canvas.find('.wpstream-theme_register_form').show();
        canvas.find('.wpstream-theme_register_link').hide();
        canvas.find('.wpstream-theme_login_form').hide();
        canvas.find('.wpstream-theme_login_link').show();
    });
}

function wpstream_login_register_control_for_register() {
    jQuery('.wpstream-theme_register_link').each(function () {
        jQuery(this).on('click', function (event) {
            event.stopPropagation();
            event.preventDefault();
            event.stopImmediatePropagation();

            const parent = jQuery(this).parent().parent();
            event.preventDefault();
            jQuery('.wpstream-theme_login_link').show();
            jQuery('.wpstream-theme_forgot_pass_link').show();
            jQuery('.wpstream-theme_login_form').hide();
            jQuery('.wpstream-theme_forgot_form').hide();
            jQuery(this).hide();
            jQuery('.wpstream-theme_register_form').show();

            return false;
        });
    });
}

function wpstream_login_register_control_for_login() {
    jQuery('.wpstream-theme_login_link').each(function () {
        jQuery(this).on('click', function (event) {
            const parent = jQuery(this).parent().parent();
            event.stopPropagation();
            event.preventDefault();
            event.stopImmediatePropagation();

            jQuery('.wpstream-theme_register_link').show();
            jQuery('.wpstream-theme_forgot_pass_link').show();
            jQuery('.wpstream-theme_register_form').hide();
            jQuery('.wpstream-theme_forgot_form').hide();
            jQuery(this).hide();
            jQuery('.wpstream-theme_login_form').show();
        });
    });
}

function wpstream_login_register_control_forgot() {
    jQuery('.wpstream-theme_forgot_pass_link').each(function (event) {
        jQuery(this).on('click', function (event) {
            const parent = jQuery(this).parent().parent();

            event.stopPropagation();
            event.preventDefault();

            jQuery('.wpstream-theme_login_link').show();
            jQuery('.wpstream-theme_register_link').show();
            jQuery('.wpstream-theme_login_form').hide();
            jQuery('.wpstream-theme_register_form').hide();

            jQuery(this).hide();

            jQuery('.wpstream-theme_forgot_form').show();
        });
    });
}

function wpstream_login_register_control_forms() {
    wpstream_login_register_control_for_register();
    wpstream_login_register_control_for_login();
    wpstream_login_register_control_forgot();
}

/**
 * popover Like dislike functionality
 */
function wpstream_start_trailers() {
    if (jQuery('#wpstream-video-trailer').length > 0) {
        const player = videojs('wpstream-video-trailer', {
            errorDisplay: false,
            autoplay: true,
            preload: "auto",
            muted: true,
            controls: true,
        });

        player.on('loadedmetadata', function () {
            player.play();
        });

        player.play();

        jQuery('.wpstream_video_on_demand_play_trailer_sound').on('click', function () {
            const player = videojs('wpstream-video-trailer');
            player.muted(false); // Mute the video
            player.play(); // Start playing the video
        })
    }
}

/**
 * popover Like dislike functionality
 */
function wpstream_start_popovers() {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('.popover-dismiss'));
    const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl, {
            trigger: 'focus'
        });
    });
}

/**
* Like dislike functionality
*/
function wpstream_show_like_dislike() {
    //like action
    jQuery('.wpstream-like-action').on('click', function () {
        const item = jQuery(this);
        const parent = jQuery(this).closest('.wpstream-show-like-dislike-wrapper');

        if (item.hasClass('wpstream_no_action')) {
            return;
        }

        const ajaxurl = wpstream_theme_vars.admin_url + 'admin-ajax.php';
        const postID = jQuery(this).attr('data-postID');

        jQuery.ajax({
            type: 'POST',
            url: ajaxurl,
            dataType: 'json',
            data: {
                'action': 'wpstream_handle_like_item_ajax',
                'postID': postID,
				'nonce': wpstream_theme_vars.like_nonce_ajax,
            },
            success: function (data) {
              
                if (data.success === true) {

                    parent.find('.wpstream_likes_wrapper').html(data.item_likes);
                    parent.find('.wpstream_dislikes_wrapper').html(data.item_dislikes);

                    if (item.hasClass('wpstream_already_liked')) {
                        // Class exists, remove it
                        item.removeClass('wpstream_already_liked');
                    } else {
                        // Class does not exist, add it
                        item.addClass('wpstream_already_liked');
                    }
                }
            },
            error: function (errorThrown) {
				alert('Something gone wrong, try to reload page');
            }
        });//end ajax
    });

    //dislike action
    jQuery('.wpstream-dislike-action').on('click', function () {
        const item = jQuery(this);
        const parent = jQuery(this).closest('.wpstream-show-like-dislike-wrapper');

        if (item.hasClass('wpstream_no_action')) {
            return;
        }

        const ajaxurl = wpstream_theme_vars.admin_url + 'admin-ajax.php';
        const postID = jQuery(this).attr('data-postID');

        jQuery.ajax({
            type: 'POST',
            url: ajaxurl,
            dataType: 'json',
            data: {
                'action': 'wpstream_handle_dislike_item_ajax',
                'postID': postID,
				'nonce': wpstream_theme_vars.dislike_nonce_ajax,
            },
            success: function (data) {

                if (data.success === true) {
                    parent.find('.wpstream_likes_wrapper').html(data.item_likes);
                    parent.find('.wpstream_dislikes_wrapper').html(data.item_dislikes);

                    if (item.hasClass('wpstream_already_disliked')) {
                        // Class exists, remove it
                        item.removeClass('wpstream_already_disliked');
                    } else {
                        // Class does not exist, add it
                        item.addClass('wpstream_already_disliked');
                    }
                }
            },
            error: function (errorThrown) {
				alert('Something gone wrong, try to reload page');
            }
        });//end ajax
    });
}

/**
 * Gallery Slider - Slick
 */
function wpstream_enable_gallery_slider() {

    const items = 1;
    const is_rtl = 0;
    const auto = parseInt(jQuery(this).attr('data-auto'));

    jQuery('.wpstream-gallery-slick-carousel').slick({
        infinite: true,
        slidesToShow: items,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        fade: true,
        asNavFor: '.wpstream-slick-thumbnails'
    });

    jQuery('.wpstream-slick-thumbnails').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.wpstream-gallery-slick-carousel',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
    });

    if (is_rtl === 1) {
        jQuery('.wpstream-gallery-slick-carousel').slick('slickSetOption', 'rtl', true, true);
    }
}



function wpstream_share_menu_toggle() {   
    jQuery('.wp-stream-share-icon').each(function(){
        var parent= jQuery(this).parent();
        var item = jQuery(this);
        item.click(function () {
            item.toggleClass('active');
            parent.find('.wpstream-social-share-main').show();
        });
   });

}

