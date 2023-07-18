
const carousel = document.querySelector('.carousel');
const imgCarousel = document.querySelectorAll('.carousel .img')
const btnPrevious = document.querySelector('.fa-arrow-left');
const btnNext = document.querySelector('.fa-arrow-right');

let count = 0;

let widthImg = imgCarousel[0].clientWidth;

const previous = () =>{
	if(count <= 0) return;
	count--
	carousel.style.transform = `translateX(${-widthImg * count}px)`;

};

const next = () =>{
	if (count >= imgCarousel.length - 1)return;
	count++
	carousel.style.transform = `translateX(${-widthImg * count}px)`;
};

window.addEventListener('resize', () => {
  widthImg = imgCarousel[0].clientWidth;
});

btnPrevious.addEventListener('click', previous);
btnNext.addEventListener('click', next);

const headerDisplay = document.querySelector('.header_display')
const menuBar = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-sharp');
const items = document.getElementsByTagName('a');

const closeMenu = ()=>{
	headerDisplay.style.display = 'none';
	menuBar.style.display= 'flex';
}

const menuDisplay = ()=>{
	if (headerDisplay.style.display = 'none') {
		headerDisplay.style.display = 'flex';
		menuBar.style.display = 'none';
	}
}

close.addEventListener('click', closeMenu)
menuBar.addEventListener('click', menuDisplay);
