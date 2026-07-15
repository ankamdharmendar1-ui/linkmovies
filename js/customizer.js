"use strict";

(function ($, wp) {
    let api = wp.customize;
    let groupKeys = [];
    let defaultSectionKeys = [];
    let defaultPanelKeys = [];
    let appendContainer = void 0,
        activeElement = void 0,
        rootHeadContainers = void 0,
        rootNodes = [],
        wasReflowed = false;

    let wpstream_customizer_data = window.wpstream_customizer_data || {};
    let customizer_icons = wpstream_customizer_data?.customizer_icons || {};
    let customizer_groups = wpstream_customizer_data?.customizer_groups || {};

    api.reflowPaneContents = _.bind(function () {
        if (wasReflowed) {
            return;
        }

        if (document.activeElement) {
            activeElement = $(document.activeElement);
        }

        // Sort the sections within each panel.
        api.panel.each(function (panel) {
            if ('themes' === panel.id) {
                return; // Don't reflow theme sections, as doing so moves them after the themes container.
            }

            //add group
            $.each(customizer_groups, (group, ids) => {
                if (ids.includes(panel.id)) {
                    panel.params.group = group;
                    return;
                }
            })

            //add icon
            if (undefined !== panel?.params?.title && undefined !== customizer_icons?.[panel.id]) {
                if (!defaultPanelKeys.includes(panel.params.title)) {
                    let $defaultPanelIcon = $('<span class="accordion-section-title-icon"></span>').html(customizer_icons?.[panel.id]);
                    defaultPanelKeys.push(panel.params.title);
                    $('#accordion-panel-' + panel.params.id + ' h3').prepend($defaultPanelIcon);
                }
            }

            //add group wrapper
            if (undefined !== panel.params.group) {
                panel.container.first('li').attr('data-group', panel.params.group);

                if (!groupKeys.includes(panel.params.group)) {
                    let $general = $('<div class="wpstream-group-wrapper"><h4>' + panel.params.group.replace(/_/i, " ") + '</h4><div class="wpstream-customizer-group group-' + panel.params.group + '"></div></div>');
                    groupKeys.push(panel.params.group);
                    $('#accordion-section-themes').parent().append($general);
                }
            }

            rootNodes.push(panel);
        });

        // Sort the controls within each section.
        api.section.each(function (section) {
            //add group
            $.each(customizer_groups, (group, ids) => {
                if (ids.includes(section.id)) {
                    section.params.group = group;
                    return;
                }
            })

            //add group
            if (undefined !== section.params.group) {
                section.container.first('li').attr('data-group', section.params.group);
            }

            if (!section.panel()) {
                rootNodes.push(section);
            }

            //add icon
            if (undefined !== section.params.title && undefined !== customizer_icons[section.id]) {
                if (!defaultSectionKeys.includes(section.params.title)) {
                    let $defaultSectionIcon = $('<span class="accordion-section-title-icon"></span>').html(customizer_icons[section.id]);
                    defaultSectionKeys.push(section.params.title);
                    $('#accordion-section-' + section.params.id + ' h3').prepend($defaultSectionIcon);
                }
            }

            //add group wrapper
            if (undefined !== section.params.group) {
                if (!groupKeys.includes(section.params.group)) {
                    let $general = $('<div class="wpstream-group-wrapper"><h4>' + section.params.group.replace(/_/i, " ") + '</h4><div class="wpstream-customizer-group group-' + section.params.group + '"></div></div>');
                    groupKeys.push(section.params.group);
                    $('#accordion-section-themes').parent().append($general);
                }
            }
        });

        // Sort the root panels and sections.
        rootNodes.sort(api.utils.prioritySort);

        rootHeadContainers = _.pluck(rootNodes, 'headContainer');
        appendContainer = $('#customize-theme-controls .customize-pane-parent');

        if (!api.utils.areElementListsEqual(rootHeadContainers, appendContainer.children())) {
            _(rootNodes).each(function (rootNode) {
                appendContainer.append(rootNode.headContainer);
            });
            wasReflowed = true;
        }

        // Now re-trigger the active Value callbacks so that the panels and sections can decide whether they can be rendered.
        api.panel.each(function (panel) {
            let value = panel.active();
            panel.active.callbacks.fireWith(panel.active, [value, value]);
        });

        api.section.each(function (section) {
            let value = section.active();
            section.active.callbacks.fireWith(section.active, [value, value]);
        });

        _(rootNodes).each(function (rootNode) {
            rootNode.headContainer.css('display', 'block');
        });

        // Restore focus if there was a reflow and there was an active (focused) element.
        if (wasReflowed && activeElement) {
            activeElement.trigger('focus');
        }

        api.trigger('pane-contents-reflowed');
    }, api);

    api.bind('ready', function () {
        // var value = api('wpstream_type_2_button_hover_background_option');
        // console.log(value.get());
        // $('#customize-control-wpstream_type_2_button_background_color_option_simple').hide();
        // $('[id^="customize-control-wpstream_type_2_button_background_color_gradient_"]').hide();
        // $('#customize-control-wpstream_type_2_button_hover_background_color_option_simple').hide();
        // $('[id^="customize-control-wpstream_type_2_button_hover_background_color_gradient_"]').hide();
        wpstream_range_control();

        let groups = $('[data-group]');
        _.each(groups, function (group, i) {
            if (!groupKeys.includes(group.dataset.group)) {
                let $general = $('<div class="wpstream-group-wrapper"><h4>' + group.dataset.group.replace(/_/i, " ") + '</h4><div class="wpstream-customizer-group group-' + group.dataset.group + '"></div></div>');
                groupKeys.push(group.dataset.group);
                $('#accordion-section-themes').parent().append($general);
            }
        });

        // Check the initial options values for buttons on page load
        [
            'wpstream_type_1_button_background',
            'wpstream_type_1_button_hover_background',
            'wpstream_type_2_button_background',
            'wpstream_type_2_button_hover_background'
        ].forEach(buttonType => {
            toggleBackgroundControls(buttonType, api(`${buttonType}_option`).get());
        });
    });

    api.bind('pane-contents-reflowed', function () {
        if ($('[data-group]').length) {
            let groups = $('[data-group]');

            _.each(groups, function (group, i) {
                let groupName = group.dataset.group;
                $(group).appendTo($('.group-' + groupName));
            });

            let $third_party = $('<div class="wpstream-group-wrapper"><h4>Third party</h4><div class="wpstream-customizer-group group-third_party"></div></div>');
            $('#accordion-section-themes').parent().append($third_party);

            $('.customize-pane-parent > li.control-section:not([data-group])').appendTo($('.group-third_party'));

            let sortOrder = Object.keys(customizer_groups);
            sortOrder.push('third_party');
            $.each(sortOrder, function (index, className) {
                $('.wpstream-group-wrapper').find('.group-' + className).parent().appendTo($('#accordion-section-themes').parent());
            });
        }


        // Bind background option change event
        [
            'wpstream_type_1_button_background',
            'wpstream_type_1_button_hover_background',
            'wpstream_type_2_button_background',
            'wpstream_type_2_button_hover_background'
        ].forEach(bindBackgroundOption);
    });

    /**
     * Toggle background controls based on the option value
     * @param buttonType
     * @param optionValue
     */
    function toggleBackgroundControls(buttonType, optionValue) {
        let simpleSelector = `#customize-control-${buttonType}_color_option_simple`;
        let gradientSelector = `[id^="customize-control-${buttonType}_color_gradient_"]`;
        if (optionValue === 'simple') {
            $(simpleSelector).show();
            $(gradientSelector).hide();
        } else {
            $(simpleSelector).hide();
            $(gradientSelector).show();
        }
    }

    /**
     * Bind background option change event
     * @param buttonType
     */
    function bindBackgroundOption(buttonType) {
        api(`${buttonType}_option`, function (value) {
            value.bind(function (optionValue) {
                toggleBackgroundControls(buttonType, optionValue);
            });
        });
    }

    /**
     * Wpstream_Range_Control
     */
    function wpstream_range_control() {
        let wrap = $('.wpstream_customizer_slider_wrapper'), timeout;

        if (!!wrap.length) {
            let range = wrap.find('.range-slider');
            let input = wrap.find('.range-input');

            range.on('input change', function (e) {
                $(this).siblings('.range-input').val(parseFloat($(this).val()));
            });

            input.on('input change', function (e) {
                if (timeout !== undefined) {
                    clearTimeout(timeout);
                }
                self = $(this);
                let min = parseFloat(self.attr('min') || 0);
                let max = parseFloat(self.attr('max') || 30);
                let val = parseFloat(self.val());
        

                timeout = setTimeout(function () {
                    if (val < min || Number.isNaN(val)) {
                        val = min;
                    } else if (val > max) {
                        val = max;
                    }
                    self.val(val);
                    $(this).siblings('.range-slider').val(val);
                }, 500);

             

                $(this).siblings('.range-slider').val(val);
            });
        }
    }

    // wp.customize('wpstream_type_2_button_background_option', function (value) {
    //     console.log('here ai em')
    //     console.log(value)
    //     value.bind(function (optionValue) {
    //         if (optionValue === 'simple') {
    //             $('#wpstream_type_2_button_background_color_option_simple').show();
    //         } else {
    //             $('#wpstream_type_2_button_background_color_option_simple').hide();
    //         }
    //     });
    // })
})(jQuery, wp);

