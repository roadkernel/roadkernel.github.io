$(document).ready(function () {
  //player

  $("#player").click(function () {
    $(".music-player").fadeIn();
    $(this).addClass("active");
  });

  $("#play").click(function () {
    document.getElementById("audio-player").play();
  });

  $("#stop").click(function () {
    var audio = document.getElementById("audio-player");
    audio.pause();
  });

  $("#mute").click(function () {
    var audio = document.getElementById("audio-player");
    audio.muted = !audio.muted;
  });

  $(document).ready(function() {
    $(".icon").draggable();
  });

  var songs = [
    { name: "Кожура", path: "music/kojura.mp3" },
    { name: "simswap", path: "music/simswap.mp3" },
    { name: "walmart", path: "music/walmart.mp3" },
    { name: "vision", path: "music/vision.mp3" },
  ];

  $(document).ready(function () {
    audio.src = songs[currentSongIndex].path;
    updateSongIndicator();
  });

  var currentSongIndex = 0;
  var audio = document.getElementById("audio-player");

  $("#skip").click(function () {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audio.src = songs[currentSongIndex].path;
    updateSongIndicator();
    audio.play();
  });

  function updateSongIndicator() {
    $("#current-song").text(songs[currentSongIndex].name);
  }

  $("#close").click(function () {
    $(".music-player").fadeOut();
    $("#player").removeClass("active");
  });
});

//popup

$("#app1").on("click", function () {
  $("#popupfamily").fadeIn();
});

$("#closeBtn").on("click", function () {
  $("#popupfamily").fadeOut();
});

$(".draggable").draggable({
  handle: ".bar",
  start: function () {
    $(this).css({
      transform: "none",
      top: $(this).offset().top + "px",
      left: $(this).offset().left + "px",
    });
  },
});

$("#app4").on("click", function () {
  $(".music-player").fadeOut();
  $("#popupfamily").fadeOut();
  $(".noteswindow").fadeOut();
  $("#rpopup").fadeOut();
  $(".test-retard").removeClass("active");
  $("#player").removeClass("active");
  $(".game").removeClass("active");
  $("#tpopup").fadeOut();
  $(".conwin").fadeOut();
  $(".updates").fadeOut();
  $(".icon").css({ top: 0, left: 0 });
});

$("#app3").on("click", function () {
  $(".noteswindow").fadeIn();
});

$("#close-notes-ui").on("click", function () {
  $(".noteswindow").fadeOut();
});

$("#app5").on("click", function () {
  $(".updates").fadeIn();
});

$("#close-up-ui").on("click", function () {
  $(".updates").fadeOut();
});

$("#app4").on("click", function () {
  $(".music-player").fadeOut();
  $("#popupfamily").fadeOut();
  $(".noteswindow").fadeOut();
  $("#rpopup").fadeOut();
  $(".test-retard").removeClass("active");
  $("#player").removeClass("active");
  $(".game").removeClass("active");
  $("#tpopup").fadeOut();
  $(".conwin").fadeOut();
  $(".updates").fadeOut();
  $(".icon").css({ top: 0, left: 0 });
});

//time
function updateUTCTime() {
  var now = new Date();
  var hours = ('0' + now.getUTCHours()).slice(-2);
  var minutes = ('0' + now.getUTCMinutes()).slice(-2);
  var timeString = hours + ':' + minutes;
  $("#utc-time").text(timeString);
}

setInterval(updateUTCTime, 1000);

//start bmenu

$(".start").on("click", function () {
  $("#start-window").toggle();
  $(this).toggleClass("active");
});

//start-retard
$(".test-retard").on("click", function () {
  var randomPercentage = Math.floor(Math.random() * 101);
  $("#retard-level").text(randomPercentage);
  $("#rpopup").fadeIn();
  $(this).addClass("active");
});

$("#reroll-btn").on("click", function () {
  var randomPercentage = Math.floor(Math.random() * 101);
  $("#retard-level").text(randomPercentage);
});

$("#close-btn").on("click", function () {
  $("#rpopup").fadeOut();
  $(".test-retard").removeClass("active");
});

//mspaint
$(".game").on("click", function () {
  $("#tpopup").fadeIn();
  $(this).addClass("active");
});

$("#close-btn2").on("click", function () {
  $("#tpopup").fadeOut();
  $(".game").removeClass("active");
});

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let isDrawing = false;

canvas.addEventListener("mousedown", function (e) {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener("mousemove", function (e) {
  if (isDrawing) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.stroke();
  }
});

canvas.addEventListener("mouseup", function () {
  isDrawing = false;
});

document.getElementById("clear-btn").addEventListener("click", function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

//bgchange
// var images = ["winbg.png", "sunako.png", "shiki.png"];
// var currentIndex = 0;

// $("#changeBackground").click(function () {
//   $("body").css(
//     "background-image",
//     "url(pics/wallpaper/" + images[currentIndex] + ")"
//   );
//   currentIndex = (currentIndex + 1) % images.length;
// });

document.getElementById("formattingBtn").addEventListener("click", function () {
  window.open("txt/formats.txt", "_blank");
});

$(document).ready(function () {
  $("#redirectButton").on("click", function () {
    window.location.href = "/bootmenu.html";
  });
});

// });

// terminal start

$("#app2").on("click", function () {
  $(".conwin").fadeIn();
});

$("#close-console-ui").on("click", function () {
  $(".conwin").fadeOut();
});

const asciiArt = [
  "",
  "",
  "",
  " ██╗      ██████╗ ██████╗ ███████╗███╗   ███╗       ██████╗ ███████╗  ",
  " ██║     ██╔═══██╗██╔══██╗██╔════╝████╗ ████║      ██╔═══██╗██╔════╝  ",
  " ██║     ██║   ██║██████╔╝█████╗  ██╔████╔██║█████╗██║   ██║███████╗  ",
  " ██║     ██║   ██║██╔══██╗██╔══╝  ██║╚██╔╝██║╚════╝██║   ██║╚════██║  ",
  " ███████╗╚██████╔╝██║  ██║███████╗██║ ╚═╝ ██║      ╚██████╔╝███████║  ",
  " ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝       ╚═════╝ ╚══════╝  ",
  "",
  "                       If not us, then who!",
  "",
  "",
  "",
  " ██╗      ██████╗ ██████╗ ███████╗███╗   ███╗       ██████╗ ███████╗  ",
  " ██║     ██╔═══██╗██╔══██╗██╔════╝████╗ ████║      ██╔═══██╗██╔════╝  ",
  " ██║     ██║   ██║██████╔╝█████╗  ██╔████╔██║█████╗██║   ██║███████╗  ",
  " ██║     ██║   ██║██╔══██╗██╔══╝  ██║╚██╔╝██║╚════╝██║   ██║╚════██║  ",
  " ███████╗╚██████╔╝██║  ██║███████╗██║ ╚═╝ ██║      ╚██████╔╝███████║  ",
  " ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝       ╚═════╝ ╚══════╝  ",
  "",
  "                       If not us, then who!"
];

const consoleElement = document.querySelector('.console');
let lineIndex = 0;

function displayNextLine() {
  consoleElement.textContent += asciiArt[lineIndex] + '\n';
  lineIndex = (lineIndex + 1) % asciiArt.length;
  if (lineIndex === 0) {
      setTimeout(() => {
          consoleElement.textContent = '';
          setTimeout(displayNextLine, 400);
      }, 3000);
  } else {
      setTimeout(displayNextLine, 400);
  }
}

displayNextLine();

//terminal end
