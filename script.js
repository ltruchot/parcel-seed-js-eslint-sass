import './styles.scss';

// eslint-disable-next-line import/no-unresolved
import images from './static/images/*.*';

// import $ from 'jquery';
// import 'bootstrap';
// $('body').append('jquery + bootstrap works!');
const app = document.getElementById('app');
app.innerHTML += `<img src="${images.kitten.jpg}" style="width:100px;" />`;
// or
app.innerHTML += '<img src="images/kitten.jpg" style="width:100px;" />';
