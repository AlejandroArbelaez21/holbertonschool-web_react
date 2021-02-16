import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$('body').append(`<button>Click here to get started</button>`);
$('body').append(`<p id='count'></p>`);

function updateCounter() {
  $(document).ready(function() {
    let counter = $('#count').html()
    $('button').click(function() {
        counter++;
        $('#count').html(`${counter} clicks on the button`);
    });
  });
}

_.debounce(updateCounter, 250);
updateCounter();
