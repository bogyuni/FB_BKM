window.addEventListener('scroll', function(){
	if (this.scrollY > 95) {
		this.document.querySelector('.inpage-top').classList.add('toTop');
	} else {
		this.document.querySelector('.inpage-top').classList.remove('toTop');
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
