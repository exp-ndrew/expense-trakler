describe('Purchase',function(){
  describe('amount',function(){
    it('totals the amounts inputted', function(){
      var testPurchase = Object.create(Purchase);
      testPurchase.total([20,10,5]);
      testPurchase.total.should.equal(35);
    });
  });
});
