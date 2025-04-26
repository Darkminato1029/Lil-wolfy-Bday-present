const videoPlayer = document.getElementById("videoPlayer");
const birthdaySong = document.getElementById("birthdaySong");
const canvas = document.getElementById("fireworksCanvas");

function fireworkBoom() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
}

function showFireworks() {
  canvas.classList.remove("hidden");
  confetti({ particleCount: 300, spread: 120, origin: { y: 0.6 } });
  setTimeout(() => {
    canvas.classList.add("hidden");
  }, 5000);
}

document.getElementById("btn1").addEventListener("click", () => {
  fireworkBoom();
  document.getElementById("btn1").classList.add("hidden");
  birthdaySong.play();
  playVideo("video1.mp4", () => {
    document.getElementById("btn2").classList.remove("hidden");
  });
});

document.getElementById("btn2").addEventListener("click", () => {
  fireworkBoom();
  document.getElementById("btn2").classList.add("hidden");
  playVideo("video2.mp4", () => {
    document.getElementById("btn3").classList.remove("hidden");
  });
});

document.getElementById("btn3").addEventListener("click", () => {
  fireworkBoom();
  document.getElementById("btn3").classList.add("hidden");
  document.getElementById("questionContainer").classList.remove("hidden");
});

document.getElementById("option1").addEventListener("click", () => {
  document.getElementById("questionContainer").classList.add("hidden");
  birthdaySong.pause();
  birthdaySong.currentTime = 0;
  playVideo("video3.mp4", () => {
    document.getElementById("btn4").classList.remove("hidden");
  });
});

document.getElementById("btn4").addEventListener("click", () => {
  fireworkBoom();
  document.getElementById("btn4").classList.add("hidden");
  playVideo("video4.mp4", () => {
    document.getElementById("btnPlay").classList.remove("hidden");
  });
});

document.getElementById("btnPlay").addEventListener("click", () => {
  fireworkBoom();
  document.getElementById("btnPlay").classList.add("hidden");
  playVideo("video5.mp4", () => {
    document.getElementById("btn5").classList.remove("hidden");
    showFireworks();
  });
});

document.getElementById("btn5").addEventListener("click", () => {
  window.location.href = "secondpage.html";
});

function playVideo(src, onEnd) {
  videoPlayer.src = src;
  videoPlayer.play();
  videoPlayer.onended = () => {
    onEnd();
  };
}