var Purchases = {}


$(document).ready(function(){
  $('#purchases').submit(function(event){
    var itemInput = $('#item').val();
    var amountInput = parseFloat($('#amount').val()).toFixed(2);;
    event.preventDefault();
    $('#lists').append('<tr><td>' + itemInput + '</td>' + '<td>|   $' + amountInput + '</td></tr>')

  });
});
