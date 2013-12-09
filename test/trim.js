'use strict';

var test = require('tap').test
  , applyTransform = require('apply-transform')
  , transform = require('../')

var html = [
    '       <div class="container-overview">'
  , '                                       '
  , '                                       '
  , '                                       '
  , '                                       '
  , '                                       '
  , '       <div class="description"><p>Public wicked API</p></div>'
  , '                                       '
  , '                                       '
  , '                                       '
  , '<dl class="details">'].join('\n');

function inspect(obj, depth) {
  console.error(require('util').inspect(obj, false, depth || 5, true));
}

test('\ntransforming html with empty lines and leading white spaces', function (t) {
  applyTransform(transform(), html, function (err, res) {
    if (err) { t.fail(err); return t.end() } 
    t.deepEqual(
        res.split('\n')
      , [ '<div class="container-overview">',
          '<div class="description"><p>Public wicked API</p></div>',
          '<dl class="details">' ]
      , 'trims leading spaces and removes empty lines'
    )
    t.end()      
  });
})
