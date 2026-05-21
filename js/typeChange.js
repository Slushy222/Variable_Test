let typeEntries = (document.querySelectorAll(".typeEntry"))
let firstType = (document.querySelector(".scroller > li:first-of-type"))
let secondType = (document.querySelector(".scroller").children[1])
let thirdType = (document.querySelector(".scroller").children[2])
let fourthType = (document.querySelector(".scroller").children[3])
let fifthType = (document.querySelector(".scroller").children[4])
let sixthType = (document.querySelector(".scroller").children[5])
let seventhType = (document.querySelector(".scroller").children[6])

let heading1 = (document.querySelector("h1"))

let observer = new IntersectionObserver(entries => {
	// console.log(entries)
	entries.forEach(entry => {
		entry.target.classList.toggle("selected", entry.isIntersecting)
	})
	typeChange()
},
{
	threshold: 0.75,
}
)

typeEntries.forEach(typeEntry => {
	observer.observe(typeEntry)
})


function typeChange() {
	if (firstType.classList.contains("selected")) {
		heading1.classList.add("pressato")
		heading1.classList.replace("cheee", "pressato")

	} else if (secondType.classList.contains("selected")) {
		heading1.classList.replace("pressato", "cheee")
		heading1.classList.replace("firelli", "cheee")

	} else if (thirdType.classList.contains("selected")) {
		heading1.classList.replace("cheee", "firelli")
		heading1.classList.replace("loretta", "firelli")

	} else if (fourthType.classList.contains("selected")) {
		heading1.classList.replace("firelli", "loretta")
		heading1.classList.replace("meursault", "loretta")

	} else if (fifthType.classList.contains("selected")) {
		heading1.classList.replace("loretta", "meursault")
		heading1.classList.replace("earlysans", "meursault")

	} else if (sixthType.classList.contains("selected")) {
		heading1.classList.replace("meursault", "earlysans")
		heading1.classList.replace("scatterplot", "earlysans")

	} else if (seventhType.classList.contains("selected")) {
		heading1.classList.replace("earlysans", "scatterplot")
	} else {
		console.log("no type selected")
	}
}

// InputEvent("scroll", (event) => {
// 	console.log("scroll!")
// })