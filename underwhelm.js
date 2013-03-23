(function() {

  var root = this;

  // Choose a random element from a list.
  var random = function(list) {
    var randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  };

  // Assert dominance with three underscores.
  root.___ = {
    random: random
  };

}).call(this);
