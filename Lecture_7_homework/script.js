$(document).ready(function () {
    $("a[href=#menuExpand]").click(function(e) {
        $("nav").toggleClass("menuOpen");

        e.preventDefault();
    });

    $("a[href=#sidebarExpand]").click(function(e) {
        var $this = $(this);

        $this.toggleClass("expanded");
        $("#sidebar").toggleClass("sidebarOpen");

        if($this.hasClass("expanded")) {
            $this.html("Hide content");
        } else {
            $this.html("Show content");
        }

        e.preventDefault();
    });
});
