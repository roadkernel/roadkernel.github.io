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
    updateSongIndicator(); // Call the function to display the initial song name
  });

  var currentSongIndex = 0;
  var audio = document.getElementById("audio-player");

  $("#skip").click(function () {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audio.src = songs[currentSongIndex].path;
    updateSongIndicator(); // Add this line to update the song name
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
//player end

//popup

$("#app1").on("dblclick", function () {
  $("#popupfamily").fadeIn();
});

$("#closeBtn").on("click", function () {
  $("#popupfamily").fadeOut();
});

$(".draggable").draggable({
  handle: ".bar",
  start: function () {
    $(this).addClass("dragZ"); // Add the dragZ class to the element
    $(this).css({
      transform: "none",
      top: $(this).offset().top + "px",
      left: $(this).offset().left + "px",
    }); //I stole this sorry <3
  },
});

// $("#app4").dblclick(function(){
//   location.reload();
// });
$("#app4").dblclick(function () {
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
  $(".feed").removeClass("active");
  $(".feed-window").fadeOut();
  $(".icon").css({ top: 0, left: 0 }); // Reset all icons to default position
});

$("#app3").on("dblclick", function () {
  $(".noteswindow").fadeIn();
});

$("#close-notes-ui").on("click", function () {
  $(".noteswindow").fadeOut();
});

$("#app5").on("dblclick", function () {
  $(".updates").fadeIn();
});

$("#close-up-ui").on("click", function () {
  $(".updates").fadeOut();
});

// $("#app4").dblclick(function(){
// location.reload();
// });

//popupend

//time
function updateUTCTime() {
  var now = new Date();
  var hours = ('0' + now.getUTCHours()).slice(-2); // Get hours with leading zero
  var minutes = ('0' + now.getUTCMinutes()).slice(-2); // Get minutes with leading zero
  var timeString = hours + ':' + minutes;
  $("#utc-time").text(timeString);
}

setInterval(updateUTCTime, 1000);
//time end

//start bmenu

$(".start").on("click", function () {
  $("#start-window").toggle();
  $(this).toggleClass("active");
});

//start bmenu end

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

$("#app6").on("dblclick", function () {
  $(".feed-window").fadeIn();
});

$("#close-feed").on("click", function () {
  $(".feed-window").fadeOut();
  $(".feed").removeClass("active");
});

//end retard

//mspaint
$(".game").on("click", function () {
  $("#tpopup").fadeIn();
  $(this).addClass("active");
});

$(".game").on("click", function () {
$("#instructions").fadeIn().delay(3000).fadeOut();
});

$("#close-btn2").on("click", function () {
  $("#tpopup").fadeOut();
  $(".game").removeClass("active");
});
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let isDrawing = false;
let isErasing = false;

canvas.addEventListener("mousedown", function (e) {
  if (e.button === 0) { // Left Mouse Button (LMB) for Drawing
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
  } else if (e.button === 2) { // Third Mouse Button (mouse3) for Erasing
    isErasing = true;
    ctx.clearRect(e.offsetX - 15, e.offsetY - 15, 30, 30); // Erase three times more space
  }
});

canvas.addEventListener("mousemove", function (e) {
  if (isDrawing) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.stroke();
  } else if (isErasing) {
    ctx.clearRect(e.offsetX - 15, e.offsetY - 15, 30, 30); // Erase three times more space
  }
});

canvas.addEventListener("mouseup", function () {
  isDrawing = false;
  isErasing = false;
});

document.getElementById("clear-btn").addEventListener("click", function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
///mspaint end

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
//bgchange end


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

$("#app2").on("dblclick", function () {
  $(".conwin").fadeIn();
});

$("#close-console-ui").on("click", function () {
  $(".conwin").fadeOut();
});

const asciiArt = [
  "                                                        ",
  "                                                        ",
  "                                                        ",
  "                                                        ",
  "                                                        ",
  "          ,;                                            ",
  "        f#i         .Gt t   j.                    i     ",
  "      .E#t         j#W: Ej  EW,                  LE     ",
  "     i#W,        ;K#f   E#, E##j                L#E     ",
  "    L#D.       .G#D.    E#t E###D.             G#W.     ",
  "  :K#Wfff;    j#K;      E#t E#jG#W;           D#K.      ",
  "  i##WLLLLt ,K#f   ,GD; E#t E#t t##f         E#K.       ",
  "   .E#L      j#Wi   E#t E#t E#t  :K#E:     .E#E.        ",
  "     f#E:     .G#D: E#t E#t E#KDDDD###i   .K#E          ",
  "      ,WW;      ,K#fK#t E#t E#f,t#Wi,,,  .K#D    .dev!       ",
  "       .D#;       j###t E#t E#t  ;#W:   .W#G            ",
  "         tt        .G#t E#t DWi   ,KK: :W##########Wt   ",
  "                     ;; ,;.            :,,,,,,,,,,,,,.  ",
  ""
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
