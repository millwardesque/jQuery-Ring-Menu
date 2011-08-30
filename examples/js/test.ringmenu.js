$(document).ready(function() {
  // Initialize the ring menu
  $("#example-1 ul").ringmenu({
  });
  
  // Process clicks on the ring items
  $('#example-1 li').click(function(evnt) {
    $('#example-1 .status').html('CLICKED: ' + $(this).html());
  });
  
  // Toggle the menu when the A key is pressed
  $('body').keypress(function(evnt) {
    switch (evnt.which) {
      case 65:  // Upper-case A
      case 97:  // Lower-case A
        $("#example-1 ul").ringmenu('toggle');
        break;
      default:
        break;
    }
  });
});
