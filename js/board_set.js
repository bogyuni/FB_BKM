window.addEventListener('load', function(){
	// 게시물 DOM 생성
	boardConDomSet();

	// 스케쥴 게시물 클릭
	boardConClickSet();
});

function boardConClickSet() {
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
}


function boardConDomSet() {
	const boardList = document.getElementById('boardList');
	let boardConDom = [];
	let inTitle = '';
	let boardType = '';
	let pathName = window.location.pathname;
	let menuName = '';
	// 서브페이지 확인
	if (pathName.indexOf('performance') > -1) {
		menuName = 'performance';
	} else if (pathName.indexOf('education') > -1) {
		menuName = 'education';
	} else if (pathName.indexOf('tickets') > -1) {
		menuName = 'tickets';
	} else if (pathName.indexOf('guide') > -1) {
		menuName = 'guide';
	}
	
	if (menuName === 'performance') {
		inTitle = ['일시','장소', '관람료'];
	} else if (menuName === 'education') {
		inTitle = ['대상','강사', '수강료'];
	}

	for (let i = 0; i < schedule.length; i++) {
		if (schedule[i].category == '대표공연' || schedule[i].category == '교육전문가'){
			boardType = 'type1';
		} else if (schedule[i].category == '정기공연' || schedule[i].category == '일반인'){
			boardType = 'type2';
		} else if (schedule[i].category == '기획공연' || schedule[i].category == '청소년'){
			boardType = 'type3';
		} else if (schedule[i].category == '상설공연' || schedule[i].category == '외국인'){
			boardType = 'type4';
		} else if (schedule[i].category == '명절공연'){
			boardType = 'type5';
		} else if (schedule[i].category == '교류공연'){
			boardType = 'type6';
		}

		boardConDom[i] =
		`<li class="board-con ${boardType}">
			<div class="top-con">
				<div class="day-con">${schedule[i].day}</div>
				<div class="week-con">${schedule[i].week}</div>
				<div class="category-con">${schedule[i].category}</div>
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
					<a class="link-more" href="${schedule[i].link}?month=${currentMonth}&dayPage">더보기</a>
				</div>
			</div>
		</li>`;
		boardList.innerHTML += boardConDom[i];
	}
}
