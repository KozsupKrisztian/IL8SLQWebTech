$(document).ready(function(){
    var animation;

    function animateBox() {
        animation = $("#box").animate({
            left: '600px',
            width: '600px',
            fontSize: '30pt'
        }, 1000)
        .animate({
            top: '300px',
            width: '300px',
            height: '110%',
            fontSize: '24pt'
        }, 1000)
        .animate({
            left: '300px',
            opacity: '0.4'
        }, 1000)
        .animate({
            opacity: '1',
            fontSize: '12pt'
        }, 1000)
        .animate({
            left: '300px',
            top: '100px',
            width: '300px',
            height: 'auto',
            fontSize: '12pt',
            opacity: '1'
        }, 1000, function(){
            alert("VÉGE");
        });
    }

    $("#startAnimation").click(function(){
        animateBox();
    });

    $("#resetAnimation").click(function(){
        $("#box").stop();
        $("#box").css({
            left: '300px',
            top: '100px',
            width: '300px',
            height: 'auto',
            fontSize: '12pt',
            opacity: '1'
        });
    });

    $("#stopAnimation").click(function(){
        $("#box").stop();
    });

    $("p:first").click(function(){
        $(this).hide();
    });

    $("p:last").dblclick(function(){
        $(this).hide();
    });

    $("#elrejt").click(function(){
        $("p").hide();
    });

    $("#megjelenit").click(function(){
        $("p").show();
    });

    $("#elrejtMegjelenit").click(function(){
        $("p").toggle();
    });
});