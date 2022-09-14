console.log("Welcome to Spotify");
//Initialize the variable

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressBar = document.getElementById('myprogressBar'); 
let mastersongname = document.getElementById('masterSongName'); 
let gif = document.getElementById('gif'); 
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs =[
    
    {songName:"salam-e-ishq", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"},
    {songName:" jasn-salam-e-ishq", filepath: "songs/2.mp3", coverpath: "covers/2.jpg"},
    {songName:" hifg salam-e-ishq", filepath: "songs/3.mp3", coverpath: "covers/3.jpg"},
    {songName:"teaf salam-e-ishq", filepath: "songs/4.mp3", coverpath: "covers/4.jpg"},
    {songName:" ishq salam-e-ishq", filepath: "songs/5.mp3", coverpath: "covers/5.jpg"},
    {songName:" bahara salam-e-ishq", filepath: "songs/6.mp3", coverpath: "covers/6.jpg"},
    {songName:"salam-e-ishq", filepath: "songs/7.mp3", coverpath: "covers/7.jpg"},
    {songName:"salam-e-ishq", filepath: "songs/8.mp3", coverpath: "covers/8.jpg"},
     
]

songItems.forEach((element , i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath; 
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
    

})


// audioElement.play();


// handle play pause click
 masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)   {
        audioElement.play();
        masterplay.classList.remove( 'fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    } 
    else{
        audioElement.pause();
        masterplay.classList.remove( 'fa-pause-circle');
        masterplay.classList.add('fa-play-circle'); 
        gif.style.opacity=0;
    }
 })


// listen to events
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    // console.log(progress);
    myprogressBar.value = progress;  
})


myprogressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');

})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        // console.log(e.target);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        mastersongname.innerText = songs[songIndex].songName;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle'); 
    })         
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src =`songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play(); 
    mastersongname.innerText = songs[songIndex].songName;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    mastersongname.innerText = songs[songIndex].songName;
    
    
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})



