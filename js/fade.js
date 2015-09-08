$(document).ready(function() {
      $('#page-wrap').fadeIn(800);

      $('.menu-item').click(function(event) {
          event.preventDefault();
          var newLocation = this.href;
          $('#page-wrap').fadeOut(1000, function () {
              window.location = newLocation;
          });
      });
});