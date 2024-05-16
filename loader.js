$(document).ready(function() {
    // Function to fade in and out the loading animation
    function fadeLoadingAnimation() {
      $('#loading-animation').fadeIn(100, function() {
        $(this).fadeOut(1000, function() {
          // After fading out, make the main-site visible
          $('.main-site').css('display', 'block');
        });
      });
    }

    // Function to add Lorem Ipsum text dynamically
    function addLoremIpsumText() {
      // var loremIpsum1 = "Welcome, User! I Hope you stay.";
      var loremIpsum2 = "is NOT built for mobile devices!";
      var loremIpsum3 = "JS reads your User-Agent.";
      var loremIpsum4 = "Some Apps are disabled.";

      // Insert Lorem Ipsum text letter by letter
      // insertTextLetterByLetter('#loading-text', loremIpsum1);
      insertTextLetterByLetter('#loading-text-2', loremIpsum2);
      insertTextLetterByLetter('#loading-text-3', loremIpsum3);
      insertTextLetterByLetter('#loading-text-4', loremIpsum4);
    }

    // Function to insert text letter by letter
    function insertTextLetterByLetter(elementId, text) {
      var index = 0;
      var interval = setInterval(function() {
        if (index < text.length) {
          $(elementId).append(text[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50); // Adjust the interval for typing speed
    }


    setTimeout(function() {
      $('#no-phones-svg').fadeIn(500);
    }, 3000); // Задержка в 1 секунду перед появлением SVG

    // Call the functions after a certain delay
    setTimeout(addLoremIpsumText, 2000); // Add Lorem Ipsum text after 2 seconds
    setTimeout(fadeLoadingAnimation, 10000); // Fade loading animation after 10 seconds
  });
  

  $(document).ready(function() {
    $("#fadeinout").fadeIn(2000).delay(6000).fadeOut(1000);
});
