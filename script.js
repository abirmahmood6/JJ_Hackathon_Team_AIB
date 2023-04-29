// The code below is for the sun mode

// Get references to the sun mode button and body element
const sunModeButton = document.getElementById("Sun-mode-btn");
const body = document.body;

// Listen for the button click event
sunModeButton.addEventListener('click', () => {
  console.log('Sun mode button clicked!');
  body.classList.toggle("Sun-mode");
});

// The code below is for the signup form 1
// Get references to the form and list elements

const form = document.getElementById('signup-form');
const list = document.getElementById('sign-up-list');

// Listen for the form submit event
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data
  const name = form.elements['name'].value;
  const country = form.elements['country'].value;

  // Create a new list item with the form data
  const listItem = document.createElement('li');
  listItem.textContent = `${name} (${country})`;

  // Add the new list item to the list
  list.appendChild(listItem);

  // Reset the form
  form.reset();
});



// The code below is for the signup form 2
// Get references to the form and list elements

const form2 = document.getElementById('signup-form2');
const list2 = document.getElementById('sign-up-list2');

// Listen for the form submit event
form2.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data
  const name2 = form2.elements['name2'].value;
  const country2 = form2.elements['country2'].value;

  // Create a new list item with the form data
  const listItem2 = document.createElement('li');
  listItem2.textContent = `${name2} (${country2})`;

  // Add the new list item to the list
  list2.appendChild(listItem2);

  // Reset the form
  form2.reset();
});


// The code below is for the signup form 3
// Get references to the form and list elements

const form3 = document.getElementById('signup-form3');
const list3 = document.getElementById('sign-up-list3');

// Listen for the form submit event
form3.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data
  const name3 = form3.elements['name3'].value;
  const country3 = form3.elements['country3'].value;

  // Create a new list item with the form data
  const listItem3 = document.createElement('li');
  listItem3.textContent = `${name3} (${country3})`;

  // Add the new list item to the list
  list3.appendChild(listItem3);

  // Reset the form
  form3.reset();
});













//add comments in code using double slash to explain each step so we not lost
// The code below is for the home scenary
let bg = document.getElementById("bg");
let bird = document.getElementById("bird");
let foliage = document.getElementById("foliage");
let forest = document.getElementById("forest");
let text = document.getElementById("text");

let rates = {bg: 0.5, 
             bird: 0.7, 
             forest: 0.15,
             foliage: 0.1,
             text: 1}

const handleScroll = () => {
  let scrollDistance = window.scrollY;

  bg.style.top = scrollDistance * rates.bg + 'px';
  bird.style.left = -scrollDistance * rates.bird + 'px';
  forest.style.top = -scrollDistance * rates.forest + 'px';
  foliage.style.top = scrollDistance * rates.foliage + 'px';
  text.style.top = scrollDistance * rates.text + 'px';
}

window.addEventListener('scroll', handleScroll)

// The code below is for the take action scenary
let ag = document.getElementById("ag");
let aird = document.getElementById("aird");
let aext = document.getElementById("aext");

let aates = {ag: 0.5, 
             aird: 0.7, 
             aext: 1}

const aandleScroll = () => {
  let acrollDistance = window.scrollY;

  ag.style.top = acrollDistance * aates.ag + 'px';
  aird.style.left = -acrollDistance * aates.aird + 'px';
  aext.style.top = acrollDistance * aates.aext + 'px';
}

window.addEventListener('scroll', aandleScroll)


//Code below is for Boroughs
function showInfo(borough) {
			var info = document.getElementById('info');
			var boroughInfo = document.getElementById(borough + '-info');
			var allBoroughsInfo = document.querySelectorAll('#info p');

			allBoroughsInfo.forEach(function (info) {
				info.style.display = 'none';
			});

			if (boroughInfo.style.display === 'block') {
				boroughInfo.style.display = 'none';
				info.style.display = 'none';
			} else {
				boroughInfo.style.display = 'block';
				info.style.display = 'block';
			}
     event.preventDefault();
		}