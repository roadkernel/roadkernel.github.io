$(document).ready(function() {
    $('#login-btn').click(function() {
      var login = $('#login').val();
      var password = $('#password').val();
  
      // Perform login validation here
      if (login === '' || password === '') {
        alert('Please enter your login and password.');
      } else {
        // Perform login action here
        alert('Login successful!');
      }
    });
  });

  $(document).ready(function() {
    $('#toggle-form-btn2').click(function() {
      $('.login-form').toggle();
      $('.registration-form').toggle();
    });
  });
  

  $(document).ready(function() {
    $('#toggle-form-btn').click(function() {
      $('.login-form').toggle();
      $('.registration-form').toggle();
    });
  });
  

$(document).ready(function() {
    $('#preferred-login').on('input', function() {
        $(this).val($(this).val().replace(/[^a-zA-Z0-9.,@]/g, ''));
    });

    $('input[type="text"], textarea').on('input', function() {
        $(this).val($(this).val().replace(/[^a-zA-Z0-9.,@ ]/g, ''));
    });
});

$('#register-btn').click(function() {
    var $btn = $(this);
    if ($('#preferred-login, textarea, #contact').val() === '') {
        alert('Login must be filled.');
    } else {

        // Display success message
        alert('Success')
        // Reset form fields
        $('#preferred-login').val('');
        $('#contact').val('');
        $('#why').val('');
    }
});
