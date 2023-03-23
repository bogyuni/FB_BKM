window.addEventListener('load', function(){
	const boardList = document.getElementById('boardList');
	let boardConDom = [];
	let inTitle = '';
	let boardType = '';

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

	if (currentPageName === 'performance') {
		inTitle = ['일시','장소', '관람료'];
	} else if (currentPageName === 'education') {
		inTitle = ['대상','강사', '수강료'];
	}

	for (let i = 0; i < schedule.length; i++) {
		if (schedule[i].category == '대표공연'){
			boardType = 'brand';
		} else if (schedule[i].category == '정기공연'){
			boardType = 'regular';
		} else if (schedule[i].category == '기획공연'){
			boardType = 'special';
		} else if (schedule[i].category == '상설공연'){
			boardType = 'permanent';
		} else if (schedule[i].category == '명절공연'){
			boardType = 'seasonal';
		} else if (schedule[i].category == '교류공연'){
			boardType = 'exchange';
		}

		boardConDom[i] =
		`<li class="board-con ${boardType}">
			<div class="top-con">
				<div class="day-con">${schedule[i].day}</div>
				<div class="week-con">${schedule[i].week}</div>
				<div class="category-con ${boardType}">${schedule[i].category}</div>
				<div class="title-con">${schedule[i].title}</div>
			</div>
			<div class="bot-con">
				<img class="board-img" src="${schedule[i].imgSrc}" alt="">
				<div class="table-con">
					<dl>
						<dt>${inTitle[0]}</dt>
						<dd>${schedule[i].inTit1}</dd>
					</dl>
					<dl>
						<dt>${inTitle[1]}</dt>
						<dd>${schedule[i].inTit2}</dd>
					</dl>
					<dl>
						<dt>${inTitle[2]}</dt>
						<dd>${schedule[i].inTit3}</dd>
					</dl>
					<a class="link-more" href="${schedule[i].link}">더보기</a>
				</div>
			</div>
		</li>`;
		boardList.innerHTML += boardConDom[i];
	}


	// 스케쥴 게시물 클릭
	const boardCon = this.document.querySelectorAll('.board-con');
	for (let i = 0; i < boardCon.length; i++) {
		boardCon[i].querySelector('.top-con').addEventListener('click', function(){
			if (!this.parentNode.classList.contains('on')) {
				for (let j = 0; j < boardCon.length; j++) {
					boardCon[j].classList.remove('on');
				}
				this.parentNode.classList.add('on');
			} else {
				this.parentNode.classList.remove('on');
			}
		});
	}
	
});