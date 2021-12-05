// https://www.googleapis.com/youtube/v3/playlistItems
// PL-4RqvSks9qU6ZgUR9NmKCqXWeUJ97FLH
class myYoutube{
    constructor(selector,opt){
        const main = document.querySelector("main");
        const frame = document.querySelector(selector);
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${opt.key}&part=snippet&playlistId=${opt.playlist}&maxResults=${opt.count}`;

        fetch(url)
        .then(data=>{
            return data.json();
        })
        .then(json=>{
            const items = json.items;
            let resultHtml = "";

            items.forEach(item => {
                console.log(item);
                let vidTit = item.snippet.title;
                let vidDesc = item.snippet.description;
                let vidDate = item.snippet.publishedAt;

                if(vidTit.length > 40) vidTit = vidTit.substr(0,40)+"...";
                if(vidDesc.length > 120) vidDesc = vidDesc.substr(0,120)+"...";
                vidDate = vidDate.split("T")[0];

                resultHtml += `
                    <article>
                        <a href="${item.snippet.resourceId.videoId}" class="vidLink">
                            <img src="${item.snippet.thumbnails.standard.url}">
                        </a>
                        <div class="con">
                            <div class="title">${vidTit}</div>
                            <p>${vidDesc}</p>
                            <span>${vidDate}</span>
                        </div>
                    </article>
                `;
            });
            frame.innerHTML = resultHtml;
        })
    }
}

