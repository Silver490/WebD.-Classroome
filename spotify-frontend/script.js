// Song data: name and audio file URL (replace with your own files/URLs)
const songs = [
    {
        name: "On & On - Cartoon, Daniel Levi",
        url: "https://github.com/KanakGautamCB/wdppcb23Feb/blob/main/lec19-hackathon/Resources/1.mp3?raw=true",
    },
    {
        name: "Invincible Deaf Kev",
        url: "https://github.com/KanakGautamCB/wdppcb23Feb/blob/main/lec19-hackathon/Resources/2.mp3?raw=true",
    },
    {
        name: "Martals-Warriyo, laura Brehm",
        url: "https://github.com/KanakGautamCB/wdppcb23Feb/blob/main/lec19-hackathon/Resources/3.mp3?raw=true",
    },
    {
        name: "Shine - Spektrem",
        url: "https://github.com/KanakGautamCB/wdppcb23Feb/blob/main/lec19-hackathon/Resources/4.mp3?raw=true",
    },
    {
        name: "Why we lose - Cartoon, Coleman Trapp",
        url: "https://github.com/KanakGautamCB/wdppcb23Feb/blob/main/lec19-hackathon/Resources/5.mp3?raw=true",
    },
];

const playButtons = document.querySelectorAll(".songs-list .fa-circle-play");
const audioPlayer = document.getElementById("audio-player");
const playerInfo = document.querySelector(".player-info span");
const nextButton = document.querySelector(".fa-forward");
const prevButton = document.querySelector(".fa-backward");
const mainPlay = document.getElementById("main-play");
const progressBar = document.getElementById("progress-bar");

let currentSongIndex = 0;

// play function

function playSong(index){
    currentSongIndex = index
    audioPlayer.src = songs[index].url
    audioPlayer.play();
    playerInfo.textContent = songs[index].name
    mainPlay.classList.remove("fa-circle-play")
    mainPlay.classList.add("fa-circle-pause")

}

// Play button in song list
playButtons.forEach((button,index)=>{
    button.addEventListener("click",()=>{
        playSong(index)
    })
})


// Main play/pause button

mainPlay.addEventListener("click",()=>{
    if(audioPlayer.paused){ // Check if the audio is paused
        audioPlayer.play()
        mainPlay.classList.remove('fa-circle-play')
        mainPlay.classList.add("fa-circle-pause")
    }
    else{
        audioPlayer.pause() // check if the audio is playing
        mainPlay.classList.remove('fa-circle-pause')
        mainPlay.classList.add('fa-circle-play')
    }
        
})


// Next/Previous functionality
nextButton.addEventListener("click",()=>{
    
    // Increment the current song index
    // and loop back to the start if at the end
    currentSongIndex = (currentSongIndex + 1) % songs.length
    playSong(currentSongIndex)
})

prevButton.addEventListener("click",()=>{
    // Decrement the current song index
    // and loop back to the end if at the start
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length
    playSong(currentSongIndex)
})



// Update progress bar as song plays
audioPlayer.addEventListener("timeupdate",()=>{
    if(audioPlayer.duration){
        progressBar.value  = (audioPlayer.currentTime / audioPlayer.duration) * 100

    }
})

// Seek functionality
progressBar.addEventListener("input",()=>{
    if(audioPlayer.duration){// Check if the audio duration is available
        audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration
    }
})


// When song ends, play next
audioPlayer.addEventListener("ended",()=>{
    nextButton.click()
})


// Initialize UI
playerInfo.textContent = songs[0].name
mainPlay.classList.add("fa-circle-play")



// let currentSongIndex = 0;

// // Play song by index
// function playSong(index) {
//     currentSongIndex = index;
//     audioPlayer.src = songs[index].url;
//     audioPlayer.play();
//     playerInfo.textContent = songs[index].name;
//     mainPlay.classList.remove("fa-circle-play");
//     mainPlay.classList.add("fa-circle-pause");
// }

// // Play button in song list
// playButtons.forEach((btn, idx) => {
//     btn.addEventListener("click", () => {
//         playSong(idx);
//     });
// });

// // Main play/pause button
// mainPlay.addEventListener("click", () => {
//     if (audioPlayer.paused) {
//         audioPlayer.play();
//         mainPlay.classList.remove("fa-circle-play");
//         mainPlay.classList.add("fa-circle-pause");
//     } else {
//         audioPlayer.pause();
//         mainPlay.classList.remove("fa-circle-pause");
//         mainPlay.classList.add("fa-circle-play");
//     }
// });

// // Next/Previous functionality
// nextButton.addEventListener("click", () => {
//     currentSongIndex = (currentSongIndex + 1) % songs.length;
//     playSong(currentSongIndex);
// });

// prevButton.addEventListener("click", () => {
//     currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
//     playSong(currentSongIndex);
// });



// // Update progress bar as song plays
// audioPlayer.addEventListener("timeupdate", () => {
//     if (audioPlayer.duration) {
//         progressBar.value =
//             (audioPlayer.currentTime / audioPlayer.duration) * 100;
//     }
// });

// // Seek functionality
// progressBar.addEventListener("input", () => {
//     if (audioPlayer.duration) {
//         audioPlayer.currentTime =
//             (progressBar.value / 100) * audioPlayer.duration;
//     }
// });

// // When song ends, play next
// audioPlayer.addEventListener("ended", () => {
//     nextButton.click();
// });

// // Initialize UI
// playerInfo.textContent = songs[0].name;
// mainPlay.classList.add("fa-circle-play");
