async function getData(value){

	let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + value, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "189a110550msh49626c470586409p11d17cjsn351fb799cf67",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
});
	let data = await response.json()
let realData = data.data
let totalData = data.total
  
  musicContents.innerHTML = null
  
realData.map((element)=>{
let songTitle = element.title
let songLink = element.link
let songPicture = element.artist.picture_big
let songMp3 = element.preview


let musicBox = document.createElement('div')
musicBox.classList.add('music-box')
imgURL = element.album.cover_big
musicBox.style.backgroundImage = `url(${imgURL})`
let h3 = document.createElement('h3')
h3.classList.add('music-box-h3')
let a = document.createElement('a')
a.classList.add('music-box-link')
let img = document.createElement('img')
img.classList.add('music-box-img')
let authorMusic = document.createElement('h3')
authorMusic.setAttribute('id', 'authorMusic')
authorMusic.textContent = element.artist.name
let audio = document.createElement('audio')
audio.controls = true
audio.classList.add('music-box-audio')
audio.classList.add('allAudio')
let source = document.createElement('source')

h3.textContent  = songTitle
a.setAttribute('href', songLink)
a.setAttribute('target', '_blank')
a.textContent = 'Listen here'
img.setAttribute('src',  songPicture)
img.setAttribute('alt',  'music')
source.setAttribute('src', songMp3)
source.setAttribute('type', 'audio/mp3')
if(totalData != null)
total.textContent = "Total musics " + totalData
else total.style.display = 'none'
audio.appendChild(source)
musicBox.appendChild(h3)
musicBox.appendChild(a)
musicBox.appendChild(authorMusic)
musicBox.appendChild(img)
musicBox.appendChild(audio)
musicContents.appendChild(musicBox) 


document.addEventListener("play", (e)=> {

let allAudio = 	document.querySelectorAll('audio')
for (var i = 0; i < allAudio.length; i++) {
	if( allAudio[i] != e.target){
	allAudio[i].pause()
	}
}
} , true)


})
}

	searcher.onclick  = () => {
if(input.value != ""){
	getData(input.value)
}
else alert(`Please! You haven't searched music :)`)
	} 





function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
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

