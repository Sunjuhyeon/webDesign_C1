$(document).ready(function(){
    // setInterval(function(){
    //     $(".slideBox").animate({"marginTop":-350}, 400, function(){
    //         $(this).find("div").eq(0).appendTo($(this))
    //         $(this).css("margin-top",0)
    //     })
    // }, 3000)

    let count=0
    setInterval(function(){
        count++;
        count %= 3;
        $(".slideBox > div").eq(count).addClass("on").siblings().removeClass("on")
    },2000)

    $("#tab h2").click(function(){
        $(this).parent().addClass("view").siblings().removeClass("view")
    })
})