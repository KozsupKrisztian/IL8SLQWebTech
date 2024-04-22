$(document).ready(function(){
    var animation;

    function animateBox() {
        animation = $("#box")
        .animate({
            left: '300px',
            width: '300px',
            fontSize: '30pt'
        }, 1000)
        .animate({
            top: '300px',
            width: '300px',
            height: '110%',
            fontSize: '24pt'
        }, 1000)
        .animate({
            left: '150px',
            opacity: '0.4'
        }, 1000)
        .animate({
            opacity: '1',
            fontSize: '12pt'
        }, 1000)
        .animate({
            left: '150px',
            top: '50px',
            width: '150px',
            height: 'auto',
            fontSize: '12pt',
            opacity: '1'
        }, 1000, function(){
            alert("VÉGE");
            $("#box").css({
                left: '150px',
                top: '50px',
                width: '150px',
                height: 'auto',
                fontSize: '12pt',
                opacity: '1'
            });
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