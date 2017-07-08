//ref: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show
//ref: https://stackoverflow.com/questions/41268239/simple-hide-show-divjs-how-to-start-hidden
function hint() {
    var x = document.getElementById('hint');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

//ref: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
// $(document).ready(function(){
//     $("#hide1").click(function(){
//         $("hint1").hide();
//     });
//     $("#show1").click(function(){
//         $("hint1").show();
//     });
// });
//
// $(document).ready(function(){
//     $("#hide2").click(function(){
//         $("hint2").hide("slow");
//     });
//     $("#show2").click(function(){
//         $("hint2").show("slow");
//     });
// });
//
// $(document).ready(function(){
//     $("#hide3").click(function(){
//         $("hint3").hide();
//     });
//     $("#show3").click(function(){
//         $("hint3").show();
//     });
// });
//
//
// $(document).ready(function(){
//     $("#hide4").click(function(){
//         $("hint4").hide();
//     });
//     $("#show4").click(function(){
//         $("hint4").show();
//     });
// });
//
//
// $(document).ready(function(){
//     $("#hide5").click(function(){
//         $("answer").hide();
//     });
//     $("#show5").click(function(){
//         $("answer").show();
//     });
// });
