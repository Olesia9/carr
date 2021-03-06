document.addEventListener('DOMContentLoaded', () => {

	const pushmenu = document.getElementsByClassName('imgTriangleSide');

	const closemenu = document.getElementsByClassName('.main')

	const hiddenOverley = document.querySelector('.hidden-overley');

	hiddenOverley.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('show');
		document.querySelector('.sidebarK').classList.toggle('show');
		document.querySelector('main').classList.toggle('sidebar-opened');
		
		for( i=0; i < pushmenu.length; i++ ){
				pushmenu[i].classList.toggle('open');
		}
	});

	const pushmenuFunction = function() {
		document.querySelector('.imgTriangleSide').classList.toggle('open');
		document.querySelector('.sidebarK').classList.toggle('show');
		document.querySelector('.hidden-overley').classList.toggle('show');
        document.querySelector('main').classList.toggle('sidebar-opened');
		document.querySelector('.contentMain').classList.toggle('sidebar-opened');
		document.querySelector('.rowDanger').classList.toggle('sidebar-opened');
		document.querySelector('.rowIndicators').classList.toggle('sidebar-opened');
		document.querySelector('.rowTable').classList.toggle('sidebar-opened');
		//document.main.classList.toggle('sidebar-opened')
	};

	for( i=0; i < pushmenu.length; i++ ){
		pushmenu[i].addEventListener('click', pushmenuFunction, false);
	}

	const sidebarAccordeon = document.querySelectorAll('.sidebarS .sidebarK a:first-child');
	const accordeonFunction =  function() { 
		this.parentNode.querySelector('ul').classList.toggle('show');
		this.querySelector('i').classList.toggle('rotate');
	}
	for( i=0; i < sidebarAccordeon.length; i++ ){
		sidebarAccordeon[i].addEventListener('click', accordeonFunction, false);
	}
});