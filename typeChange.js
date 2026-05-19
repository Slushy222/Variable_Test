let selected_item = (document.querySelector(".scrollContainer")).getBoundingClientRect();
let scroll_container = document.querySelector(".scroller");
let primary_word = document.querySelectorAll(".primaryWord");
scroll_container.scrollTo(0,selected_item.top - scroll_container.offsetHeight - selected_item.height);

// let observer = new IntersectionObserver(entries => { 
// 	entries.forEach(entry => {
// 		with(entry) if(isIntersecting) target.children[0].checked = true;
// 	});
//   }, {root: scroll_container, rootMargin: `-51% 0px -49% 0px`});
// document.querySelectorAll(`.scroller`).forEach(item => observer.observe(item));

// if (selected_item == (children[0].checked == true)); {
//     primary_word.classList.add(".hello");
// };

let typeEntries = (document.querySelectorAll(".typeEntry"))

let observer = new IntersectionObserver(entries => {
	console.log(entries)
	entries.forEach(entry => {
		entry.target.classList.toggle("show", entry.isIntersecting)
	})
})
typeEntries.forEach(typeEntry => {
	observer.observe(typeEntry)
})


// observer.observe(typeEntries[0])

// if (observer.observe(typeEntries[0])) {
// 	primary_word.classList.add(".pressato2");
// };