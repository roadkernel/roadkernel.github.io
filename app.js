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
    { name: "If We Being Real", path: "music/yeat.mp3" },
    { name: "NO DIDDY", path: "music/diddy.mp3" },
    { name: "Кожура", path: "music/kojura.mp3" },
    { name: "simswap", path: "music/simswap.mp3" },
    { name: "walmart", path: "music/walmart.mp3" },
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
});

//end retard

//mspaint
$(".game").on("click", function () {
  $("#tpopup").fadeIn();
  $(this).addClass("active");
});

$("#close-btn2").on("click", function () {
  $("#tpopup").fadeOut();
  $(".game").removeClass("active");
});

let mode = ''; // Variable to store the current mode (draw or erase)
let isDrawing = false;
let lastX = 0;
let lastY = 0;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

document.getElementById('draw-btn').addEventListener('click', function() {
    mode = 'draw';
});

document.getElementById('erase-btn').addEventListener('click', function() {
    mode = 'erase';
});

document.getElementById('clear-btn').addEventListener('click', function() {
    mode = '';
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener('mousedown', function(e) {
  if (e.button === 0) { // Check if left mouse button is clicked
      isDrawing = true;
      lastX = e.offsetX;
      lastY = e.offsetY;
  }
});

canvas.addEventListener('mousemove', function(e) {
  if (isDrawing) {
      if (mode === 'draw') {
          ctx.beginPath();
          ctx.moveTo(lastX, lastY);
          ctx.lineTo(e.offsetX, e.offsetY);
          ctx.strokeStyle = document.getElementById('color-picker').value;
          ctx.stroke();
          lastX = e.offsetX;
          lastY = e.offsetY;
      } else if (mode === 'erase') {
          ctx.clearRect(e.offsetX, e.offsetY, 30, 30); // Adjust the size for erasing
      } else {
      }
  }
});


canvas.addEventListener('mouseup', function() {
    isDrawing = false;
});
///mspaint end

//bgchange
 var images = ["shikib.png", "rb.png", "sunakobC.png", "duob.png", "mainb.png"];
 var currentIndex = 0;

 $("#changeBackground").click(function () {
   $("body").css(
     "background-image",
     "url(pics/wallpaper/" + images[currentIndex] + ")"
   );
   currentIndex = (currentIndex + 1) % images.length;
 });
//bgchange end


// document.getElementById("formattingBtn").addEventListener("click", function () {
//   window.open("txt/formats.txt", "_blank");
// });

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


$( function() {
  $( ".feed-window" ).resizable({
    handles: "se",
  });
} );

$(document).ready(function() {
  $.getJSON("shitpost.json", function(data) {
      data.forEach(function(post) { //<div>Posted by: ${post.author}</div>
          var postElement = `
              <div class="post">
                  
                  <div><strong>${post.header}</strong></div>
                  <div>${post.content}</div>
                  ${post.picture ? `<img src="${post.picture}" alt="Post Picture">` : ''}
              </div>
          `;
          $("#feedContainer").append(postElement);
      });
  });
});

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Set the default tab to open
document.getElementById("Feed").style.display = "block";
