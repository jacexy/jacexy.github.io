//This function will open the settings modal when the settings "a" element is clicked
function openSettings() {
    document.getElementById('modal').classList.add('open');
    document.body.classList.add('modal-open');
}

//This function will open the settings modal when the settings "a" element is clicked
function closeModal() {
    document.querySelector('.modal.open').classList.remove('open');
    document.body.classList.remove('modal-open');
}

//This function closes the modal when anywhere in the window is clicked besides in the modal
window.onclick = clickWindow;
function clickWindow() {
    if (event.target == modal) {
        document.querySelector('.modal.open').classList.remove('open');
        document.body.classList.remove('modal-open');
    }
} 

//This function will print an alert to inform the user that another window has opened
function emailAlert() {
	alert("You have opened your system's email application in separate window.\nPlease press 'OK' to continue.");
}

//This function jumps down to the content portion of index when the button is clicked
function jumpToContent() {
	if (document.getElementById('me-photo')) {
		document.getElementById('me-photo').scrollIntoView();
	}
}

//This function executes all functions that are involved in the settings modal
function settingsButton() {
	closeModal();
	lightMode();
	dimMode();
	darkMode();
}

//This function changes the entire website's color scheme to light mode
function lightMode() {
	//Check if the 'light' id radio box is checked
	if (document.getElementById('light').checked) {
		//Set the background of webpage to white
		document.querySelector('body').style.backgroundColor = "whitesmoke";
		//Set main header color to black
		document.querySelector('h1').style.color = "rgb(0,0,9)";
		//Set the navigation bar to white
		document.getElementById('nav-head').style.backgroundColor = "whitesmoke";
		//Set each navigation bar link to black
		document.getElementsByClassName('nav-links')[0].style.color = "rgb(0,0,9)";
		document.getElementsByClassName('nav-links')[1].style.color = "rgb(0,0,9)";
		document.getElementsByClassName('nav-links')[2].style.color = "rgb(0,0,9)";
		//Check if there is a hero element in this current document
		if (document.getElementById('hero')) {
			//Set hero image to inverted banner
			document.getElementById('hero').src = "media/banner-invert.jpg";
		}
		//Check if there is an h3 element in this current document
		if (document.querySelector('h3')) {
			//Set h3 to black
			document.querySelector('h3').style.color = "rgb(0,0,9)";
		}
		//Check if there is a tala element in this current document
		if (document.getElementById('tala')) {
			//Set tala element's background color to azure with class and add hover with it
			document.getElementById('tala').classList.remove("tala-dim");
			document.getElementById('tala').classList.remove("tala-dark");
			document.getElementById('tala').classList.add("tala-light");
		}
		//Create array of all p element instances
		let para = document.querySelectorAll('p');
		//Loop through array and set each of them to black
		for (i = 0; i < para.length; i++) {
			para[i].style.color = "rgb(0,0,9)";
		}
		//Create array of all h2 element instances
		let subheader = document.querySelectorAll('h2');
		//Loop through array and set each of them to azure
		for (i = 0; i < subheader.length; i++) {
			subheader[i].style.color = "rgb(0,214,206)";
		}
		//Check if there is a dl-link element in this current document
		if (document.getElementById('dl-link')) {
			//Set dl-link element to purple
			document.getElementById('dl-link').style.color = "#990099";
		}
		//Check if there is an ol element in this current document
		if (document.querySelector('ol')) {
			//Set ol element to black
			document.querySelector('ol').style.color = "rgb(0,0,9)";
		}
		//Check if there is a ul in a .list-and-table class in this current document
		if (document.querySelector('.list-and-table ul')) {
			//Set the ul element to black
			document.querySelector('.list-and-table ul').style.color = "rgb(0,0,9)";
		}
		//Check if there is a code element in this current document
		if (document.querySelector('code')) {
			//Set the code element to black
			document.querySelector('code').style.color = "rgb(0,0,9)";
		}
		//Check if there is a table element in this current document
		if (document.querySelector('table')) {
			//Set table's background color to dark
			document.querySelector('table').style.backgroundColor = "rgb(15, 15, 21)";
			//Set table's text color to white
			document.querySelector('table').style.color = "whitesmoke";
			//Create array of all table, th, and td elements
			let tborder = document.querySelectorAll('table, th, td');
			//Loop through array and set each of them to have a purple border
			for (i = 0; i < tborder.length; i++) {
				tborder[i].style.border = "0.275vw solid #990099";
			}
		}
		//Apply hover class to all navigation bar links with for loop to first remove other hover classes
		const nav = document.getElementsByClassName('nav-links');
		for (i = 0; i < nav.length; i++) {
			nav[i].classList.remove('dark-mode-hover');
			nav[i].classList.remove('dim-mode-hover');
			nav[i].classList.add('light-mode-hover');
		}
		//Set the active webpage's link in nav bar to azure
		document.getElementById('active').style.color = "rgb(0,214,206)";
		//Check if there is an email element in this current document
		if (document.getElementsByClassName('email')[0]) {
			//Set email element to purple
			document.getElementsByClassName('email')[0].style.color = "#990099";
		}
	}
}

//This function changes the entire website's color scheme to dim mode
function dimMode() {
	//Check if the 'dim' id radio box is checked
	if (document.getElementById('dim').checked) {
		//Set the background of webpage to dark blue
		document.querySelector('body').style.backgroundColor = "rgb(23, 24, 38)";
		//Set main header color to white
		document.querySelector('h1').style.color = "#fbfff1";
		//Set the navigation bar to dark blue
		document.getElementById('nav-head').style.backgroundColor = "rgb(23, 24, 38)";
		//Set each navigation bar link to white
		document.getElementsByClassName('nav-links')[0].style.color = "#fbfff1";
		document.getElementsByClassName('nav-links')[1].style.color = "#fbfff1";
		document.getElementsByClassName('nav-links')[2].style.color = "#fbfff1";
		//Check if there is a hero element in this current document
		if (document.getElementById('hero')) {
			//Set hero image to black banner
			document.getElementById('hero').src = "media/banner.jpg";
		}
		//Check if there is an h3 element in this current document
		if (document.querySelector('h3')) {
			//Set h3 element to white
			document.querySelector('h3').style.color = "#fbfff1";
		}
		//Check if there is a tala element in this current document
		if (document.getElementById('tala')) {
			//Set tala element's background color to white with class and add hover with it
			document.getElementById('tala').classList.remove("tala-light");
			document.getElementById('tala').classList.remove("tala-dark");
			document.getElementById('tala').classList.add("tala-dim");
		}
		//Create array of all p element instances
		let para = document.querySelectorAll('p');
		//Loop through array and set each of them to white
		for (i = 0; i < para.length; i++) {
			para[i].style.color = "#fbfff1";
		}
		//Create array of all h2 element instances
		let subheader = document.querySelectorAll('h2');
		//Loop through array and set each of them to purple
		for (i = 0; i < subheader.length; i++) {
			subheader[i].style.color = "#990099";
		}
		//Check if there is a dl-link element in this current document
		if (document.getElementById('dl-link')) {
			//Set dl-link element to purple
			document.getElementById('dl-link').style.color = "#990099";
		}
		//Check if there is an ol element in this current document
		if (document.querySelector('ol')) {
			//Set ol element to white
			document.querySelector('ol').style.color = "#fbfff1";
		}
		//Check if there is a ul in a .list-and-table class in this current document
		if (document.querySelector('.list-and-table ul')) {
			//Set the ul element to white
			document.querySelector('.list-and-table ul').style.color = "#fbfff1";
		}
		//Check if there is a code element in this current document
		if (document.querySelector('code')) {
			//Set the code element to white
			document.querySelector('code').style.color = "#fbfff1";
		}
		//Check if there is a table element in this current document
		if (document.querySelector('table')) {
			//Set table's background color to dark
			document.querySelector('table').style.backgroundColor = "rgb(18, 15, 23)";
			//Set table's text color to white
			document.querySelector('table').style.color = "#fbfff1";
			//Create array of all table, th, and td elements
			let tborder = document.querySelectorAll('table, th, td');
			//Loop through array and set each of them to have a white border
			for (i = 0; i < tborder.length; i++) {
				tborder[i].style.border = "0.275vw solid #fbfff1";
			}
		}
		//Apply hover class to all navigation bar links with for loop to first remove other hover classes
		const nav = document.getElementsByClassName('nav-links');
		for (i = 0; i < nav.length; i++) {
			nav[i].classList.remove('light-mode-hover');
			nav[i].classList.remove('dark-mode-hover');
			nav[i].classList.add('dim-mode-hover');
		}
		//Set the active webpage's link in nav bar to gray
		document.getElementById('active').style.color = "gray";
		//Check if there is an email element in this current document
		if (document.getElementsByClassName('email')[0]) {
			//Set email element to white
			document.getElementsByClassName('email')[0].style.color = "#fbfff1";
		}
	}
}

//This function changes the entire website's color scheme to dark mode
function darkMode() {
	//Check if the 'dark' id radio box is checked
	if (document.getElementById('dark').checked) {
		//Set the background of webpage to black
		document.querySelector('body').style.backgroundColor = "rgb(0,0,9)";
		//Set main header color to white
		document.querySelector('h1').style.color = "whitesmoke";
		//Set the navigation bar to black
		document.getElementById('nav-head').style.backgroundColor = "rgb(0,0,9)";
		//Set each navigation bar link to white
		document.getElementsByClassName('nav-links')[0].style.color = "whitesmoke";
		document.getElementsByClassName('nav-links')[1].style.color = "whitesmoke";
		document.getElementsByClassName('nav-links')[2].style.color = "whitesmoke";
		//Check if there is a hero element in this current document
		if (document.getElementById('hero')) {
			//Set hero image to black banner
			document.getElementById('hero').src = "media/banner.jpg";
		}
		//Check if there is an h3 element in this current document
		if (document.querySelector('h3')) {
			//Set h3 element to white
			document.querySelector('h3').style.color = "whitesmoke";
		}
		//Check if there is a tala element in this current document
		if (document.getElementById('tala')) {
			//Set tala element's background color to white with class and add hover with it
			document.getElementById('tala').classList.remove("tala-light");
			document.getElementById('tala').classList.remove("tala-dim");
			document.getElementById('tala').classList.add("tala-dark");
		}
		//Create array of all p element instances
		let para = document.querySelectorAll('p');
		//Loop through array and set each of them to white
		for (i = 0; i < para.length; i++) {
			para[i].style.color = "whitesmoke";
		}
		//Create array of all h2 element instances
		let subheader = document.querySelectorAll('h2');
		//Loop through array and set each of them to purple
		for (i = 0; i < subheader.length; i++) {
			subheader[i].style.color = "#990099";
		}
		//Check if there is a dl-link element in this current document
		if (document.getElementById('dl-link')) {
			//Set dl-link element to purple
			document.getElementById('dl-link').style.color = "#990099";
		}
		//Check if there is an ol element in this current document
		if (document.querySelector('ol')) {
			//Set ol element to white
			document.querySelector('ol').style.color = "whitesmoke";
		}
		//Check if there is a ul in a .list-and-table class in this current document
		if (document.querySelector('.list-and-table ul')) {
			//Set the ul element to white
			document.querySelector('.list-and-table ul').style.color = "whitesmoke";
		}
		//Check if there is a code element in this current document
		if (document.querySelector('code')) {
			//Set the code element to white
			document.querySelector('code').style.color = "whitesmoke";
		}
		//Check if there is a table element in this current document
		if (document.querySelector('table')) {
			//Set table's background color to dark
			document.querySelector('table').style.backgroundColor = "rgb(15, 15, 21)";
			//Set table's text color to white
			document.querySelector('table').style.color = "whitesmoke";
			//Create array of all table, th, and td elements
			let tborder = document.querySelectorAll('table, th, td');
			//Loop through array and set each of them to have a white border
			for (i = 0; i < tborder.length; i++) {
				tborder[i].style.border = "0.275vw solid whitesmoke";
			}
		}
		//Apply hover class to all navigation bar links with for loop to first remove other hover classes
		const nav = document.getElementsByClassName('nav-links');
		for (i = 0; i < nav.length; i++) {
			nav[i].classList.remove('light-mode-hover');
			nav[i].classList.remove('dim-mode-hover');
			nav[i].classList.add('dark-mode-hover');
		}
		//Set the active webpage's link in nav bar to gray
		document.getElementById('active').style.color = "#bababa";
		//Check if there is an email element in this current document
		if (document.getElementsByClassName('email')[0]) {
			//Set email element to white
			document.getElementsByClassName('email')[0].style.color = "whitesmoke";
		}
	}
}