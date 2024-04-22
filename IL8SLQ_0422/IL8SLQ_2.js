$(document).ready(function() {
    $('#szoveg').click(function() {
        alert('HTML kód...');
    });

    $('#html_kod').click(function() {
        alert('ME GEIK - KK');
    });

    $('#ertek').click(function() {
        var name = $('#name').val();
        alert('Név: ' + name);
    });

    $('form').submit(function(e) {
        e.preventDefault();
        alert('Jelentkezés');
    });

    $('#parameter').click(function() {
        var link = $('#link').attr('href');
        var url = new URL(link);
        var area = url.pathname;
        var id = $('#box').attr('id');
        
        alert('Paraméter értéke:\nLink: ' + link + '\nTerület: ' + area + '\nID: ' + id);
    });

    $('#link').click(function(e) {
        e.preventDefault();
        window.open($(this).attr('href'), '_blank');
    });
});
