underwhelm.js
=============

### ___.random(list)

Choose a random element from a list.

    ___.random([1, 2, 3, 4, 5]);
    => 3

    ___.random([1, 2, 3, 4, 5]);
    => 5

    ___.random([1, 2, 3, 4, 5]);
    => 1

### ___.coinflip()

Return either `true` or `false`.

    ___.coinflip();
    => true

    ___.coinflip();
    => false

    ___.coinflip();
    => false


### ___.maybeMap(list, transformation)

Produce a new array of values by taking each value in a list and (maybe) applying a transformation function.

    ___.maybeMap([1, 2, 3, 4, 5], function(value) {
      return value + 10;
    });
    => [11, 2, 13, 14, 5]

    ___.maybeMap([1, 2, 3, 4, 5], function(value) {
      return value + 10;
    });
    => [11, 12, 3, 4, 5]

    ___.maybeMap([1, 2, 3, 4, 5], function(value) {
      return value + 10;
    });
    => [11, 2, 13, 4, 15]
