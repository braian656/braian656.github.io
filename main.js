
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


const menuNav = document.querySelector('.nav');
const menuBar = document.querySelector('.bar_menu');
const menuX = document.querySelector('.fa-x');
const links = document.querySelectorAll('.item a');
  
links.forEach((link)=>{
	link.addEventListener('click',()=>{
		menuNav.style.display = 'none'
	})
})
const abrirMenu = ()=>{

	if(menuNav.style.display === 'none'){
		menuNav.style.display = 'flex';
	}else{
		menuNav.style.display = 'none'
	}
}
const cerrarMenu = ()=>{
	if(menuNav.style.display === 'flex'){
		menuNav.style.display = 'none'
	}
}


menuX.addEventListener('click', cerrarMenu);
menuBar.addEventListener('click', abrirMenu);