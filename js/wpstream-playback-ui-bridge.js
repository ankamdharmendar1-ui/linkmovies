(function (window, document, $) {
    "use strict";

    if (!$ || window.wpstreamPlaybackUiBridgeRegistered) {
        return;
    }

    window.wpstreamPlaybackUiBridgeRegistered = true;

    function resolveContextRoot(root) {
        var $root = $(root);
        if (!$root.length) {
            return $root;
        }

        // Keep updates scoped around the current player instance only.
        var $context = $root.closest(
            ".wpstream_simple_player_shortcode_wrapper, .wpstream_theme_display_player_wrapper_with_chat, .wpstream_title_wrapper_simple, .wpstream_add_to_cart_over_trailer"
        );

        if (!$context.length) {
            $context = $root.parents().slice(0, 4).last();
        }

        return $context.length ? $context : $root;
    }

    function findInContext(root, targetClass) {
        var $context = resolveContextRoot(root);
        return $context.filter(targetClass).add($context.find(targetClass));
    }

    function showHideInContext(root, targetClass, show) {
        var method = show ? "show" : "hide";
        findInContext(root, targetClass).each(function () {
            $(this)[method]();
        });
    }

    function addRemoveClassInContext(root, targetClass, className, add) {
        var method = add ? "addClass" : "removeClass";
        findInContext(root, targetClass).each(function () {
            $(this)[method](className);
        });
    }

    function applyDecorativeState(state, root) {
        switch (state) {
            case "idle":
                showHideInContext(root, ".wpstream_hide_on_trailer", true);
                showHideInContext(root, ".wpstream_hide_on_play", true);
                showHideInContext(root, ".wpstream_bundle_title_details", true);
                showHideInContext(root, ".wpstream_video_on_demand_play_trailer", true);
                showHideInContext(root, ".wpstream_video_on_demand_unmute_trailer", false);
                addRemoveClassInContext(root, ".vjs-wpstream", "wpstream_theme_player_has_trailer", false);
                break;
            case "playing_trailer":
                showHideInContext(root, ".wpstream_hide_on_trailer", false);
                showHideInContext(root, ".wpstream_hide_on_play", true);
                showHideInContext(root, ".wpstream_bundle_title_details", false);
                showHideInContext(root, ".wpstream_video_on_demand_play_trailer", false);
                addRemoveClassInContext(root, ".vjs-wpstream", "wpstream_theme_player_has_trailer", true);
                break;
            case "playing_content":
                showHideInContext(root, ".wpstream_hide_on_trailer", false);
                showHideInContext(root, ".wpstream_hide_on_play", false);
                showHideInContext(root, ".wpstream_bundle_title_details", false);
                showHideInContext(root, ".wpstream_video_on_demand_play_trailer", false);
                showHideInContext(root, ".wpstream_video_on_demand_unmute_trailer", false);
                addRemoveClassInContext(root, ".vjs-wpstream", "wpstream_theme_player_has_trailer", false);
                break;
        }
    }

    document.addEventListener("wpstream:playback-state-change", function (event) {
        var detail = event && event.detail ? event.detail : {};
        if (!detail.state || !detail.root) {
            return;
        }

        applyDecorativeState(detail.state, detail.root);
    });
})(window, document, window.jQuery);
