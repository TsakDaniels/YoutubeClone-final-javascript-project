const videoCardContainerGR = document.querySelector('.video-containerGR');
const videoCardContainerUS = document.querySelector('.video-containerUS')


//first key AIzaSyCUxOrR3OavIe-6Pja4GuIcoguqVUQ3di4
//second key AIzaSyChAWkWcwd1QY24wvtlgQZzaCYMLqCwBSg

let api_key = "AIzaSyChAWkWcwd1QY24wvtlgQZzaCYMLqCwBSg";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";


//fetching most popular videos from US
fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    chart: 'mostPopular',
    regionCode: 'US',
    maxResults: 50
}))
.then(res => res.json())
.then(data => {
    data.items.forEach(item => {
        getChannelIcon(item);
    })
})
.catch(err => console.log(err));

const getChannelIcon = (video_data) => {
    fetch(channel_http + new URLSearchParams({
        key: api_key,
        part: 'snippet',
        id: video_data.snippet.channelId
    }))
    .then(res => res.json())
    .then(data => {
        video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
        makeVideoCard(video_data);
    })
}

const makeVideoCard = (data) => {
    videoCardContainerUS.innerHTML += `
    <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
        <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
        <div class="content">
            <img src="${data.channelThumbnail}" class="channel-icon" alt="">
            <div class="info">
                <h4 class="title">${data.snippet.title}</h4>
                <p class="channel-name">${data.snippet.channelTitle}</p>
            </div>
        </div>
    </div>
    `;
}




//fetching most popular videos from GR
fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    chart: 'mostPopular',
    regionCode: 'GR',
    maxResults: 50
}))
.then(res => res.json())
.then(data => {
    data.items.forEach(item => {
        getChannelIcon2(item);
    })
})
.catch(err => console.log(err));

const getChannelIcon2 = (video_data) => {
    fetch(channel_http + new URLSearchParams({
        key: api_key,
        part: 'snippet',
        id: video_data.snippet.channelId
    }))
    .then(res => res.json())
    .then(data => {
        video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
        makeVideoCard2(video_data);
    })
}

const makeVideoCard2 = (data) => {
    videoCardContainerGR.innerHTML += `
    <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
        <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
        <div class="content">
            <img src="${data.channelThumbnail}" class="channel-icon" alt="">
            <div class="info">
                <h4 class="title">${data.snippet.title}</h4>
                <p class="channel-name">${data.snippet.channelTitle}</p>
            </div>
        </div>
    </div>
    `;
}

// search bar
const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
})


//Show more menu
function dropdownMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    var img = document.getElementById("logoChange").src;
        if (img!= "img/logo.png") {
            document.getElementById("logoChange").src  = "img/logoDark.png";
        }
         else {
           document.getElementById("logChange").src = "img/logo.png";
       }

 }


 function showSidebar(){
    var x = document.getElementById("sidebar");
    var y = document.getElementById("Us");
    var z = document.getElementById("Gr");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.marginLeft = "250px";
        z.style.marginLeft = "250px";
        y.style.width = "85%";
        z.style.width = "85%";
    } else {
        x.style.display = "none";
        y.style.marginLeft = "0px";
        z.style.marginLeft = "0px";
        y.style.width = "100%";
        z.style.width = "100%";
    }
 }
