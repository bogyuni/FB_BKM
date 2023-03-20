window.addEventListener('DOMContentLoaded', function(){
	fetch('/inc/header.html')
		.then(response => { return response.text(); })
		.then(data => { document.getElementById('header').innerHTML = data; });
	fetch('/inc/footer.html')
		.then(response => { return response.text(); })
		.then(data => { document.getElementById('footer').innerHTML = data; });

});


function openGnb(){
	alert('open');
}