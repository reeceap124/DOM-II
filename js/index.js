//create a tag selector
//create a class selector

const body = document.querySelector('body');
body.addEventListener('click', ()=>{
    body.style.background = 'beige';
})
body.addEventListener('dblclick', ()=>{
    body.style.background = '#8FBC8F'
})

body.addEventListener('keydown', ()=>{
    body.style.background = 'black';
})

const adventureImg = document.querySelector('.adventureImg');
window.addEventListener('wheel', ()=>{
    adventureImg.src = "img/scaryFace.jpg";

})

let scrolling;
window.addEventListener('scroll', function ( event ) {

	// listens for the scroll event and when it hears it, clears the timeout counter (scrolling in this case)
	window.clearTimeout( scrolling );

	// if no scroll event is heard, this counts up to the predefined number and then executes the code
	scrolling = setTimeout(function() {

		//callback
        adventureImg.src = 'img/adventure.jpg';
	},100);

}, false);

const pElements = document.querySelectorAll('p');
console.log(pElements)
let originalText = [];
pElements.forEach((el, index)=> {

    originalText.push(el.innerText);
    el.id = index;
    el.addEventListener('mouseover',()=>{
        
        el.textContent = `HIIII!!!`
    })

})

pElements.forEach(el=>{
    el.addEventListener('mouseleave', ()=>{
        el.style.color = 'red'
        el.style.transition = 'color 0.4s'
        el.innerText = originalText[el.id]
        
    })
})

pElements.forEach(el=>{
    el.addEventListener('click', (event)=>{
        el.style.color = 'blue'
        event.stopPropagation();
    })
})

const navItems = document.querySelectorAll('.nav-link');
navItems.forEach(el=>{
    el.addEventListener('click', (event)=>{
        event.preventDefault();
    })
})

const firstH2 = document.querySelector('h2')
firstH2.addEventListener('dblclick', (event)=>{
    firstH2.style.color = 'pink';
    event.stopPropagation();
})

