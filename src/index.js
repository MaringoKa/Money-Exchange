// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var obj = {};
    var cur = currency;
    if (cur <= 0) {
     return obj;
    }
    else if (cur > 10000) {
      return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    else {
        if (cur >= 50) {
            obj.H = Math.floor(cur / 50);
            cur = cur - obj.H * 50;
        }
        if (cur >= 25) {
            obj.Q = Math.floor(cur / 25);
            cur = cur - obj.Q * 25;
        }
        if (cur >= 10) {
             obj.D = Math.floor(cur / 10);
             cur = cur - obj.D * 10;
         }
          if (cur >= 5) {
             obj.N = Math.floor(cur / 5);
             cur = cur - obj.N * 5;
         }
        if ((cur / 1) >= 1) {
            obj.P = Math.floor(cur / 1);
            cur = cur - obj.P;
        }

        return obj;
    }

}
