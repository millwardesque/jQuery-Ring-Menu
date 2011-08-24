$(document).ready(function() {
  $("#example-1 ul").ringmenu({
    use_anchor_hrefs: true
  });
  
  $('#example-1 li').click(function(evnt) {
    $('#example-1 .status').html('CLICKED: ' + $(this).html());
  });
});
