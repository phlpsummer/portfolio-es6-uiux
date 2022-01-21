const frame = document.querySelector("#visual main");
const btnPrev = frame.querySelector(".btnPrev");
const btnNext = frame.querySelector(".btnNext");
const bg_ul = frame.querySelector(".bg");
const bgs = bg_ul.querySelectorAll("li");
const sMain_ul = frame.querySelector(".smallMain");
const sMainImgs = sMain_ul.querySelectorAll("li");
const lMain_ul = frame.querySelector(".largeMain");
const lMainImgs = lMain_ul.querySelectorAll("li");
const hMain_ul = frame.querySelector(".mainHall");
const hMainImgs = hMain_ul.querySelectorAll("li");
const title_ul = frame.querySelector(".txt");
const titles = title_ul.querySelectorAll("ul");

let enableClick = true;
let i = 1;


btnNext.addEventListener("click",(e)=>{
    e.preventDefault();

    if(!enableClick) return;

    enableClick = false;
    (i > 1 ? i=0 : i++);

    //title
    title_ul.querySelector(".on").classList.add("upper");
    setTimeout(()=>{
        titles.forEach((title)=>{
            title.classList.remove("on");
            title.classList.remove("upper");
        });
    }, 1000);
    setTimeout(()=>{
        titles[i].classList.add("on");
    }, 1500);

    //main img
    lMain_ul.querySelector(".on").classList.remove("on");
    hMain_ul.querySelector(".on").classList.remove("on");
    setTimeout(()=>{
        sMain_ul.querySelector(".on").classList.remove("on");
    }, 500);
    setTimeout(()=>{
        lMainImgs[i].classList.add("on");
        hMainImgs[i].classList.add("on");
    }, 1500);
    setTimeout(()=>{
        sMainImgs[i].classList.add("on");
    }, 1800);

    //bg
    let j = i - 1;
    if(j < 0) j = 2;
    new Anim(bgs[j],{
        prop: "opacity",
        value: 0,
        duration: 500,
    });
    setTimeout(()=>{
        new Anim(bgs[i],{
            prop: "opacity",
            value: 1,
            duration: 500,
            callback: ()=>{
                enableClick = true;
            }
        });
    }, 1500);
});

btnPrev.addEventListener("click",(e)=>{
    e.preventDefault();

    if(!enableClick) return;

    enableClick = false;
    (i == 0 ? i=2 : i--);

    //title
    title_ul.querySelector(".on").classList.add("upper");
    setTimeout(()=>{
        titles.forEach((title)=>{
            title.classList.remove("on");
            title.classList.remove("upper");
        });
    }, 1000);
    setTimeout(()=>{
        titles[i].classList.add("on");
    }, 1500);

    //main img
    lMain_ul.querySelector(".on").classList.remove("on");
    hMain_ul.querySelector(".on").classList.remove("on");
    setTimeout(()=>{
        sMain_ul.querySelector(".on").classList.remove("on");
    }, 500);
    setTimeout(()=>{
        lMainImgs[i].classList.add("on");
        hMainImgs[i].classList.add("on");
    }, 1500);
    setTimeout(()=>{
        sMainImgs[i].classList.add("on");
    }, 1800);

    //bg
    let j = i + 1;
    if(j == 3) j = 0;
    new Anim(bgs[j],{
        prop: "opacity",
        value: 0,
        duration: 500,
    });
    setTimeout(()=>{
        new Anim(bgs[i],{
            prop: "opacity",
            value: 1,
            duration: 500,
            callback: ()=>{
                enableClick = true;
            }
        });
    }, 1500);
});
