(function() {
    var qs, js, q, s, d = document,
        gi = d.getElementById,
        ce = d.createElement,
        gt = d.getElementsByTagName,
        id = "typef_orm_share",
        b = "https://embed.typeform.com/";
    if (!gi.call(d, id)) {
        js = ce.call(d, "script");
        js.id = id;
        js.src = b + "embed.js";
        q = gt.call(d, "script")[0];
        q.parentNode.insertBefore(js, q)
    }
})();

$(document).ready(function() {
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();

    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if (scroll_start > offset.top) {
            $('#navbar').css('background-color', 'black');
        } else {
            $('#navbar').css('background-color', 'transparent');
        }
    });
});