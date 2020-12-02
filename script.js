import './styles.scss';
import kitten from './static/images/kitten.jpg';

// import $ from 'jquery';
// import 'bootstrap';
// $('body').append('jquery + bootstrap works!');

document.body.innerHTML += `<img src="${kitten}" width="100"/>`;
