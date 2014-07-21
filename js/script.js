var Purchase = {
  total: function() {
    return this.price * this.quantity;

  }
}

var Category = {
  counter: 0,
  purchases: [{}],
  purchaseTotal: function() {
    var total = 0;
    this.purchases.forEach(function(purchase){
      total += purchase.total();
    })
    return total;
  }
}

$(document).ready(function(){
  var currentCategory;

  // ADD CATEGORY //
 $('#category').submit(function(event){
  event.preventDefault();
  var catInput = $('#categoryInput').val();
  $('#categories').append('<li class="clickable">' + catInput + '</li>');
  var category = Object.create(Category);
  category.name = catInput;
  category.purchases = [];
  $('#categoryInput').val("");

  // CLICK CATEGORY //
  $('ul#categories li').last().click(function(event){
    $('td.data').empty();
    if (category.counter === 0) {
      $('#totalChart').hide();
    } else {
      $('#totalChart').show();
    }
    $('#purchaseEntry').show();
    $('#categoryTitle').text(category.name);
    currentCategory = category;
    currentCategory.purchases.forEach(function(purchase) {
    $('#lists').append('<tr><td class="data">' + purchase.quantity + '</td><td class="data">' + purchase.item + '</td>' + '<td class="data">$' + purchase.total() + '</td></tr>');
      })
    $('#total').text('$' + currentCategory.purchaseTotal());
    })
});
  // ADD PURCHASES //
  $('#purchases').submit(function(event){
    currentCategory.counter = 1;
    var itemInput = $('#item').val();
    var priceInput = parseFloat($('#price').val()).toFixed(2);
    var quantityInput = parseInt($('#quantity').val());
    event.preventDefault();
    var purchase = Object.create(Purchase);
    purchase.item = itemInput;
    purchase.price = priceInput;
    purchase.quantity = quantityInput;
    currentCategory.purchases.push(purchase);
    var priceTotal = purchase.total();
    $('#totalChart').show();
    $('#lists').append('<tr><td class="data">' + quantityInput + '</td><td class="data">' + itemInput + '</td>' + '<td class="data">$' + priceTotal + '</td></tr>');
    $('#total').text('$' + currentCategory.purchaseTotal());
    $('#item').val('');
    $('#price').val('');
    $('#quantity').val('');
    });
  });

