const $bg = $("#visual main .bg");
const $main = $("#visual main .mainImg");
const $smallMain = $("#visual main .smallMain");
const $largeMain = $("#visual main .largeMain");
const $title = $("#visual main .title")
let num = 1;
let isDone = true;


$(".btnNext").on("click",function(){
    if(isDone) {
        isDone = false;

        if(num==2){
            num=-1;
        }

        bgNext();
        mainNext();

        $title.children("li.on").addClass("upper");
        setTimeout(function(){
            $title.children("li").removeClass("upper");
            $title.children("li").removeClass("on");
        }, 1000);
        setTimeout(function(){
            $title.children("li").eq(num).addClass("on");
        }, 2000);

        num++;
    }
});

function bgNext(){
    $bg.children("li").fadeOut(500);
    $bg.children("li").first().delay(500).appendTo($bg);
    $bg.children("li").eq(1).delay(2750).fadeIn(500,function(){
        isDone=true;
    });
}

function bgPrev(){
    $bg.children("li").fadeOut(500);
    $bg.children("li").last().delay(500).prependTo($bg);
    $bg.children("li").eq(1).delay(2750).fadeIn(500,function(){
        isDone=true;
    });
}

function mainNext(){
    $largeMain.children("li").removeClass("on");
    setTimeout(function(){
        $smallMain.children("li").removeClass("on");
    }, 500);

    setTimeout(function(){
        $smallMain.children("li").eq(num).addClass("on");
        $largeMain.children("li").eq(num).addClass("on");
    }, 2000);
}