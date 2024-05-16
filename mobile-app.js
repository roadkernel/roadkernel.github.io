$(document).ready(function () {
  // Player
  $("#player").on("click", function () {
    $(".music-player").fadeIn();
    $(this).addClass("active");
  });

  $("#play").on("click", function () {
    document.getElementById("audio-player").play();
  });

  $("#stop").on("click", function () {
    var audio = document.getElementById("audio-player");
    audio.pause();
  });

  $("#mute").on("click", function () {
    var audio = document.getElementById("audio-player");
    audio.muted = !audio.muted;
  });

  $(document).ready(function () {
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

  $("#skip").on("click", function () {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audio.src = songs[currentSongIndex].path;
    updateSongIndicator();
    audio.play();
  });

  function updateSongIndicator() {
    $("#current-song").text(songs[currentSongIndex].name);
  }

  $("#close").on("click", function () {
    $(".music-player").fadeOut();
    $("#player").removeClass("active");
  });

  // Popup
  $("#app1").on("click", function () {
    $("#popupfamily").fadeIn();
  });

  $("#closeBtn").on("click", function () {
    $("#popupfamily").fadeOut();
  });

  $(".draggable").draggable({
    handle: ".bar",
    start: function () {
      $(this).addClass("dragZ");
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
    $(".feed").removeClass("active");
    $(".feed-window").fadeOut();
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
    $(".feed").removeClass("active");
    $(".feed-window").fadeOut();
    $(".icon").css({ top: 0, left: 0 });
  });

  $("#app6").on("click", function () {
    $(".feed-window").fadeIn();
  });

  $("#close-feed").on("click", function () {
    $(".feed-window").fadeOut();
    $(".feed").removeClass("active");
  });

  // Time
  function updateUTCTime() {
    var now = new Date();
    var hours = ("0" + now.getUTCHours()).slice(-2);
    var minutes = ("0" + now.getUTCMinutes()).slice(-2);
    var timeString = hours + ":" + minutes;
    $("#utc-time").text(timeString);
  }

  setInterval(updateUTCTime, 1000);

  // Start Bmenu
  $(".start").on("click", function () {
    $("#start-window").toggle();
    $(this).toggleClass("active");
  });

  // Start Retard
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

  // Mspaint
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

  canvas.addEventListener("touchstart", function (e) {
    e.preventDefault();
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.touches[0].clientX, e.touches[0].clientY);
  });

  canvas.addEventListener("touchmove", function (e) {
    e.preventDefault();
    if (isDrawing) {
      ctx.lineTo(e.touches[0].clientX, e.touches[0].clientY);
      ctx.strokeStyle = "#000";
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  });

  canvas.addEventListener("touchend", function () {
    isDrawing = false;
  });

  document.getElementById("clear-btn").addEventListener("click", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  // Formatting Button
  document.getElementById("formattingBtn").addEventListener("click", function () {
    window.open("txt/formats.txt", "_blank");
  });

  $(document).ready(function () {
    $("#redirectButton").on("click", function () {
      window.location.href = "/bootmenu.html";
    });
  });

  // Terminal
  $("#app2").on("click", function () {
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
    "       .D#;       j###t E#t DWi   ,KK: :W##########Wt   ",
    "         tt        .G#t E#t DWi   ,KK: :W##########Wt   ",
    "                     ;; ,;.            :,,,,,,,,,,,,,.  ",
    ""
  ];

  const consoleElement = document.querySelector(".console");
  let lineIndex = 0;

  function displayNextLine() {
    consoleElement.textContent += asciiArt[lineIndex] + "\n";
    lineIndex = (lineIndex + 1) % asciiArt.length;
    if (lineIndex === 0) {
      setTimeout(() => {
        consoleElement.textContent = "";
        setTimeout(displayNextLine, 400);
      }, 3000);
    } else {
      setTimeout(displayNextLine, 400);
    }
  }

  displayNextLine();
});
