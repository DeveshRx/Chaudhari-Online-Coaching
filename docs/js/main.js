window.onscroll = function (ev) {
    var B = document.body; //IE 'quirks'
    var D = document.documentElement; //IE with doctype
    D = (D.clientHeight) ? D : B;

    if (D.scrollTop == 0) {
        console.log("SCROLL TOP");
        //  document.getElementById("navbar1").setAttribute("class", "navbar navbar-light bg-light fixed-top navbar-bg");
        $(".navbar-fixed-top").addClass("navbar-bg");
        $('.navbar-fixed-top').removeClass("navbar-bg-trans");

        document.getElementById("appnamenav").setAttribute("class", "header-text app-name-style");
        document.getElementById("topstudentlogin").setAttribute("style", "visibility: visible;");


        

    } else {
        $('.navbar-fixed-top').removeClass("navbar-bg");
        $(".navbar-fixed-top").addClass("navbar-bg-trans");

        document.getElementById("appnamenav").setAttribute("class", "header-text");
        document.getElementById("topstudentlogin").setAttribute("style", "visibility: hidden;");

    }


};