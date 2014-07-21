describe('Purchase',function(){
  describe('amount',function(){
    it('totals the amounts inputted', function(){
      var testPurchase = Object.create(Purchase);
      testPurchase.purchaseValue(20);
      testPurchase.totalCost.should.equal(20);
    });
  });
});
