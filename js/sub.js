// 스케쥴 카테고리 정렬

window.addEventListener('load', function(){
	// 월 표시
	const currentMonth = parseInt(window.location.search.split('month=')[1]);
	const monthNum = document.getElementsByClassName('month-num')[0];
	monthNum.innerHTML = currentMonth;

	// 다음 월, 이전 월 링크 세팅
	const linkNext = document.getElementsByClassName('link-next')[0];
	const linkPrev = document.getElementsByClassName('link-prev')[0];
	const path = window.location.origin + window.location.pathname;
	const nextMonth = currentMonth == 12 ? 1 : currentMonth + 1;
	const prevMonth = currentMonth == 1 ? 12 : currentMonth - 1;
	linkNext.href = path+'?month=' + nextMonth;
	linkPrev.href = path+'?month=' + prevMonth;
});


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

// const currentPageName = 'performance';
const currentMonth = window.location.search.split('month=')[1];
const path = window.location.origin + window.location.pathname;

console.log(window.location.search.indexOf('dayPage'));

const currentPageDepth = window.location.search.indexOf('dayPage') > -1 ? 'dayPage' : 'subPage';
if (currentPageDepth == 'subPage'){
	const head = document.getElementsByTagName('head')[0];
	const script = document.createElement('script');
	script.src = path+'month_'+currentMonth+'.js';
	head.appendChild(script);
}

