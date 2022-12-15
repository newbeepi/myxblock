/* Javascript for MyXBlock. */
function MyXBlock(runtime, element) {

    $('.header', element).click(function(eventObject) {
        $('.content', element).slideDown("slow");
    });

    $(function ($) {
        /* Here's where you'd do things on page load. */
    });
}
