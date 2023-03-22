window.addEventListener('DOMContentLoaded', function(){
	// 메인페이지와 서브페이지 include 파일 경로 설정
	// let pathName = window.location.pathname.split('/')[1];
	console.log(window.location);

	let pathName = window.location.pathname;
	let root = window.location.href.split(pathName)[0];

	if (pathName.indexOf('performance') > -1) {
		pathName = 'performance';
	} else if (pathName.indexOf('education') > -1) {
		pathName = 'education';
	} else if (pathName.indexOf('tickets') > -1) {
		pathName = 'tickets';
	} else if (pathName.indexOf('guide') > -1) {
		pathName = 'guide';
	} else {
		pathName = '';
	}

	console.log(pathName);
	let	pathHeader = root + '/inc/header.html';
	let pathFooter = root + '/inc/footer.html';
	// let	pathHeader = '../inc/header.html';
	// let pathFooter = '../inc/footer.html';

	if (pathName === '') {
		console.log('main page');
	} else {
		console.log('sub page');
		pathHeader = root + '/inc/header_sub.html';
		pathFooter = root + '/inc/footer_sub.html';
		// pathHeader = '../inc/header_sub.html';
		// pathFooter = '../inc/footer_sub.html';
	}

	fetch(pathHeader)
		.then(response => { return response.text(); })
		.then(data => {
			document.getElementById('header').innerHTML = data;
			if (pathName !== ''){
				document.querySelector('.'+pathName+'-link').classList.add('on');
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
