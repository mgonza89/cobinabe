jQuery(document).ready(function () {
   
    jQuery('#hideshowCuenca').on('click', function (event) {
        jQuery('#mapacuenca').show();
        jQuery('#maparegion').hide();
        jQuery('#mapasubregion').hide();
    });

    jQuery('#hideshowRegion').on('click', function (event) {
        jQuery('#maparegion').show();
        jQuery('#mapasubregion').hide();
        jQuery('#mapacuenca').hide();
    });

    jQuery('#hideshowSubregion').on('click', function (event) {
        console.log('tuvieja');
        jQuery('#mapasubregion').show();
        jQuery('#maparegion').hide();
        jQuery('#mapacuenca').hide();
    });
    document.getElementById('iFrameMapaCuenca').onload = function () {
        jQuery('#mapacuenca').show();
        jQuery('#maparegion').hide();
        jQuery('#mapasubregion').hide();
    };
});