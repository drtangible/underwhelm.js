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


  // Produce a new array of values by taking each value in a list and (maybe) applying a transformation function.
  var maybeMap = function(list, transformation) {
    var possiblyTransformedValues = [];

    for (var i=0; i<list.length; i++) {
      possiblyTransformedValues.push(coinflip() ? list[i] : transformation(list[i]))
    };

    return possiblyTransformedValues;
  };


  // Assert dominance with three underscores.
  root.___ = {
    random: random,
    coinflip: coinflip,
    maybeMap: maybeMap
  };

}).call(this);
