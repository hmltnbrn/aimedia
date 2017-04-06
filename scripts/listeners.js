// Using jQuery for simplicity's sake on some
// Event listeners can also be added if you just want plain old vanilla JavaScript
(function() {
  focus();

  $(".nav-link").click(function() {
    var inner = $(this).html();
    $(".nav-link").removeClass("show");
    $(this).addClass("show");
    consoleing("User just clicked the " + inner + " navigation link.");
  });

  $("a, .main-button, .school-button").click(function() {
    var inner = $(this).html();
    consoleing("User just clicked the " + inner + " link.");
  });

  var listener = addEventListener('blur', function() {
    if(document.activeElement === document.getElementById('youtube')) {
      consoleing("User is interacting with the video.");
    }
    removeEventListener('blur', listener);
  });

  $("#contact-form").submit(function(e) {
    var valueOb = $(this).serializeArray();
    consoleing(valueOb);
    e.preventDefault();
  });

  function consoleing(message) {
    if(typeof message === 'string') {
      console.log(message);
    }
    else {
      for (var i=0; i<message.length; i++) {
        console.log(message[i].name + " is " + message[i].value);
      }
    }
  }

})();
