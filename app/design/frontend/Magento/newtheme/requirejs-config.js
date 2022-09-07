var config = {

    deps: [
        "js/custom",
        "js/addtocart",
    ],

    map: {
        '*': {
            'selectize': 'js/jquery.nice-select',
            'QtyWidget': 'js/addtocart'
        }
    },

    shim: {
        "selectize": ["jquery"],
        'QtyWidget': ['jquery', 'jquery/ui']
    },

    config: {
        mixins: {
            'Mirasvit_Giftr/js/item' : {'js/item-custom-mixins':true}
        }
    }
};
