$(".buttonconfirm").click(function() {
    var yoshi1 = $(".dot1").val();
    var yoshi2 = $(".dot2").val();
    var yoshi3 = $(".dot3").val();
    console.log(parseInt(yoshi2));
    yoshi2 = parseInt(yoshi2);
    console.log(parseInt(yoshi3));
    yoshi3 = parseInt(yoshi3);
    $(".theBIGone").text(yoshi1 + " will be playing at your wedding. You will be " + (yoshi3 + 3) + " inches tall. And if all goes well, there will be a blimp shining the number " + yoshi2 + " above your gorgeous venue.");
});
$(".click1").click(function() {
    var click1 = $(".dot1").val();
    $(".yoshi1").text(click1);
});
$(".click2").click(function() {
    var click2 = $(".dot2").val();
    $(".yoshi2").text(click2);
});
$(".click3").click(function() {
var click3 = $(".dot3").val();
    $(".yoshi3").text(click3);
});