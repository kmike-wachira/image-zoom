jQuery(document).ready(function ($) {
    $('a[href$=".pdf"]')
        .attr('download', '')
        .attr('target', '_blank');
});