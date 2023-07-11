const hamburguer = document.querySelector('.hamburguer')
const header = document.querySelector('.header')


const displayBox = ()=>{
	if (header.style.display ==='none') {
		header.style.display='flex';
	}else{
		header.style.display='none';
	}
}



hamburguer.addEventListener('click', displayBox);


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




// const nav = document.querySelector('.nav');

// document.addEventListener('scroll', () =>{
// 	const header = document.querySelector('.header');
// 	if(window.scrollY > 0){
// 		header.classList.add('scrolled')
// 	}else{
// 		header.classList.remove('scrolled')
// 	}
// })

