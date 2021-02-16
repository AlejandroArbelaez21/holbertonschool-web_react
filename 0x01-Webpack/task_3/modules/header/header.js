import $ from 'jquery';
import './header.css';

$('body').prepend(`<span id='logo' ></span>`);
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
console.log('Init header');
