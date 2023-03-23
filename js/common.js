window.addEventListener('DOMContentLoaded', function(){
	// 메인페이지와 서브페이지 include 파일 경로 설정
	console.log(window.location);

	let pathName = window.location.pathname;
	let menuName = '';

	if (pathName.indexOf('performance') > -1) {
		menuName = 'performance';
	} else if (pathName.indexOf('education') > -1) {
		menuName = 'education';
	} else if (pathName.indexOf('tickets') > -1) {
		menuName = 'tickets';
	} else if (pathName.indexOf('guide') > -1) {
		menuName = 'guide';
	} else {
		
	}

	let root = null;

	if (menuName !== '') {
		root = window.location.href.split(menuName)[0];
	} else {
		if (pathName.indexOf('index') > 0) {
			pathName = pathName.split('/index')[0];
		}
		root = window.location.origin+pathName;
	}

	console.log('root : '+root, '\npathName: '+pathName, '\n'+root+pathName);
	let	pathHeader = root + '/inc/header.html';
	let pathFooter = root + '/inc/footer.html';

	if (menuName === '') {
		console.log('main page');
	} else {
		console.log('sub page');
		pathHeader = root + '/inc/header_sub.html';
		pathFooter = root + '/inc/footer_sub.html';
	}

	fetch(pathHeader)
		.then(response => { return response.text(); })
		.then(data => {
			document.getElementById('header').innerHTML = data;
			if (menuName !== ''){
				document.querySelector('.' + menuName + '-link').classList.add('on');
			}
		});
	fetch(pathFooter)
		.then(response => { return response.text(); })
		.then(data => { document.getElementById('footer').innerHTML = data; });


	// 스케쥴 게시물 클릭
	const boardList = this.document.querySelectorAll('.board-con');
	for (let i = 0; i < boardList.length; i++) {
		boardList[i].addEventListener('click', function(){
			if (!this.classList.contains('on')) {
				for (let j = 0; j < boardList.length; j++) {
					boardList[j].classList.remove('on');
				}
				this.classList.add('on');
			} else {
				this.classList.remove('on');
			}
		});
	}


});

// 스케쥴 카테고리 정렬
function sortCategory(category, btn) {
	const boardList = this.document.querySelectorAll('.board-con');
	const btnCategory = this.document.querySelectorAll('.btn-category');
	
	for (let i = 0; i < boardList.length; i++) {
		if (category == 'all'){
			boardList[i].classList.remove('off');
		} else {
			if (!boardList[i].classList.contains(category)){
				boardList[i].classList.add('off');
			} else {
				boardList[i].classList.remove('off');
			}
		}
	}

	for (let i = 0; i < btnCategory.length; i++) {
		btnCategory[i].classList.remove('on');
	}
	btn.classList.add('on');
}


function openGnb(){
	document.querySelector('.mo-menu').classList.add('on');
}
function closeGnb(){
	document.querySelector('.mo-menu').classList.remove('on');
}
