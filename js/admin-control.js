
/*global jQuery, jQuery, */

jQuery(document).ready(function (jQuery) {
    "use strict";
    wpstream_upload_icon_menu();
    wpstream_theme_woo_bundle_select();
    wpstream_toogle_customizer();
    wpstream_slides_control();
});

function wpstream_slides_control(){
    jQuery('.customize-control-wpstream_slides_control input').on('input', function (e) {
        let input = jQuery(e.currentTarget);
        let value  = parseInt(input.val());
        let max  = parseInt(input.attr('max'));
        let min  = parseInt(input.attr('min'));
        if (value < min){
            input.val(min);
        } else if (value > max){
            input.val(max);
        }
    });
}

function  wpstream_upload_icon_menu(){

 
    jQuery('.upload-menu-icon-button').click(function(e) {
        e.preventDefault();
     
        var button = jQuery(this);
        var itemID = button.data('item-id');
        var customUploader = wp.media({
            title: 'Select Icon',
            library : {
                type : 'image'
            },
            button: {
                text: 'Use this icon'
            },
            multiple: false
        }).on('select', function() {
            var attachment = customUploader.state().get('selection').first().toJSON();
            jQuery('#edit-menu-item-icon-' + itemID).val(attachment.url);
            jQuery('#icon-preview-' + itemID).html('<img src="' + attachment.url + '" style="max-width:100px; height:auto;">');
        }).open();
    });
 
    // Handle the removal of an icon
    jQuery('.remove-menu-icon-button').click(function(e) {
        e.preventDefault();
        var itemID = jQuery(this).data('item-id');
        jQuery('#edit-menu-item-icon-' + itemID).val('');
        jQuery('#icon-preview-' + itemID).html('');
    });
    
}

function wpstream_toogle_customizer(){
   
    jQuery('.wpstream-theme-toggle-switch input[type="checkbox"]').change(function() {
        if (this.checked) {
            jQuery(this).val('true');
        } else {
            jQuery(this).val('false');
        }
    });
}

function wpstream_theme_woo_bundle_select(){
    jQuery('#product-type').on('change',function(){

        let product_type= jQuery('#product-type').val();
        if(product_type==='wpstream_bundle'){
            jQuery('._sold_individually_field').show();
            jQuery('#wpstream_woo_custom_metabox').show();
        }else{
            jQuery('#wpstream_woo_custom_metabox').hide();
        }

    });
}
    