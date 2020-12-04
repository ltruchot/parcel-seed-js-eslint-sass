import './styles.scss';

// import $ from 'jquery';
// import 'bootstrap';
// $('body').append('jquery + bootstrap works!');
const app = document.getElementById('app');

// every files in "static" folder can be used directly like that
app.innerHTML += '<img src="images/kitten.jpg" style="width:100px;" />';
