(function() {

  var root = this;

  // Choose a random element from a list.
  var random = function(list) {
    var randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  };

  // Return either `true` or `false`.
  var coinflip = function() {
    return random([true, false]);
  };

  // Assert dominance with three underscores.
  root.___ = {
    random: random,
    coinflip: coinflip
  };

}).call(this);
