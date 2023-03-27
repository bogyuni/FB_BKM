// const currentPageName = 'performance';
const currentMonth = window.location.search.split('month=')[1];
const path = window.location.origin + window.location.pathname;
const currentPageDepth = window.location.search.indexOf('dayPage') > -1 ? 'dayPage' : 'subPage';
if (currentPageDepth == 'subPage'){
	const head = document.getElementsByTagName('head')[0];
	const script = document.createElement('script');
	script.src = path+'month_'+currentMonth+'.js';
	head.appendChild(script);
}


window.addEventListener('load', function(){
	// 일자 페이지 확인
	const checkDayPage = window.location.search.indexOf('dayPage') > -1;
	// 월 표시
	const currentMonth = parseInt(window.location.search.split('month=')[1]);
	const monthNum = document.getElementsByClassName('month-num')[0];

	if (checkDayPage === false) {
		// 다음 월, 이전 월 링크 세팅
		monthNum.innerHTML = currentMonth;
		const linkNext = document.getElementsByClassName('link-next')[0];
		const linkPrev = document.getElementsByClassName('link-prev')[0];
		const path = window.location.origin + window.location.pathname;
		const nextMonth = currentMonth == 12 ? 1 : currentMonth + 1;
		const prevMonth = currentMonth == 1 ? 12 : currentMonth - 1;
		linkNext.href = path+'?month=' + nextMonth;
		linkPrev.href = path+'?month=' + prevMonth;
	}
});


/**
 * 카테고리 태그 정렬
 * @param {string} category 선택된 태그이름
 * @param {this} btn this
 */
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
