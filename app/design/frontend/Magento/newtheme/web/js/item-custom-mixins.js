define([
    'jquery',
    'uiComponent',
    'underscore',
    'Magento_Customer/js/customer-data',
    'mage/translate'
],

    ($, Component, _, customerData, $t) => {
        'use strict';

        const giftMixin = {
            defineBehaviour: function () {
                if (!this.isLoggedIn()) {

                    $('#addto-giftr').click(window.location.assign(this.loginUrl));
                    event.stopPropagation();
                }
                if (this.registries._latestValue.length === 1) {

                    this.addProduct();
                    event.stopPropagation();

                }
            },
        };

        return function (target) {
            return target.extend(giftMixin);
        };

    }
);

