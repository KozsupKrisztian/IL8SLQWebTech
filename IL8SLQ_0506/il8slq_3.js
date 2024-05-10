$(document).ready(function(){
    // Doboz eltávolítása gomb eseménykezelő
    $("#remove_box").click(function(){
        $("#box").remove(); // Doboz eltávolítása
    });

    // A DIV elem kiürítése gomb eseménykezelő
    $("#div_clear").click(function(){
        $("#box").empty(); // DIV elem tartalmának kiürítése
    });
});