/*
48fa09238ff7a579f7c89acef3c946b7
194176696@N08
https://www.flickr.com/services/rest/?method=flickr.test.echo&name=value
https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg
flickr.interestingness.getList
flickr.people.getPhotos


*/
const loading = document.querySelector(".loading");
const frame = document.querySelector(".list");
const urlBase = "https://www.flickr.com/services/rest/?";
const method1 = "flickr.people.getPhotos";
const key = "48fa09238ff7a579f7c89acef3c946b7";
const user_id = "194176696@N08";
const per_page = 15;
const format = "json";

const url1 = `${urlBase}method=${method1}&api_key=${key}&user_id=${user_id}&per_page=${per_page}&format=${format}&nojsoncallback=1`;

fetch(url1)
.then(data=>{
    let result = data.json();
    return result;
})
.then(json=>{
    let items = json.photos.photo;

    let htmls = "";

    items.forEach(data => {
        console.log(data);

        let imgSrc = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`;
        let thumbSrc = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`;

        htmls += `
            <li class="item">
                <div class="panel">
                    <div class="txt">
                        <p>${data.title}</p>
                        <span>${data.owner}</span>
                    </div>
                    <a href="${imgSrc}"><img src="${thumbSrc}" class="thumb"></a>
                </div>
            </li>
        `;
    });
    frame.innerHTML = htmls;

    const imgs = frame.querySelectorAll("img");
    const lenImg = imgs.length;
    let countImg = 0;
    for(let el of imgs){
        el.addEventListener("load",()=>{
            countImg++;

            if(countImg == lenImg) isotopeLayout();
        });

        let thumbImg = el.closest(".item").querySelector(".thumb");
        thumbImg.addEventListener("error",(e)=>{
            e.currentTarget.closest(".item").querySelector(".thumb").setAttribute("src","img/default.jpg");
        });
    }
})

function isotopeLayout(){
    loading.classList.add("off");
    frame.classList.add("on");

    new Isotope(".list",{
        itemSelector: ".item",
        columnWidth: ".item",
        transitionDuration: "0.5s"
    });
}