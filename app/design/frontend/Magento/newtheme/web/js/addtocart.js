define([
    'jquery',
    'jquery/ui'
  ],

    function($) {
        'use strict';

        $.widget('drexelprogect.mywidget', {
            /**
             * @private
             */

            _create: function (qty) {
                $("#increment").click(function() {
                    var currentVal = parseInt($("#qty").val());

                        $("#qty").val(currentVal + 1);

                });

                $("#decrement").click(function() {
                    var currentVal = parseInt($("#qty").val());

                        if(currentVal > 1) {
                            $("#qty").val(currentVal - 1);
                        }
                });
                return(qty);
            }
        });

        return $.drexelprogect.mywidget;
});
