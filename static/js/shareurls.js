$(document).ready(function () {
    $.get("https://homeapi.atcumt.com/share", function (datas) {
        for (var i = 1; i <= 7; i++) {
            var title = 'title' + i;
            var url = 'url' + i;
            $("ul.shareurls").append(
                '<li><a href="'
                + datas[url]
                + '" class="family">'
                + datas[title]
                + '</a></li>')
        }
    });
})