$(document).ready(function(){
    $("#main-nav a").click(function(){
        $("section").removeClass("show");
        var target = $(this).attr("href");
        $(target).addClass("show");
    });

    $(".type-effect").typed({
        strings:["Full Stack Developer", "Front End Developer", "Back End Developer", "Designer"],
        typeSpeed:10,
        backSpeed:20,
        loop: true,
    })
});