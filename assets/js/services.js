function applyAnimations() {
	const isWideScreen = window.innerWidth >= 1020;
	const serviceItems = document.querySelectorAll(".service-item");

	serviceItems.forEach((item, index) => {
		// remove all animation classes first
		item.classList.remove("slide-left", "slide-right", "fade-in-up");

		if (isWideScreen) {
			// only apply separate animations on wide screens
			if (index === 0) item.classList.add("slide-left");
			if (index === 1) item.classList.add("fade-in-up");
			if (index === 2) item.classList.add("slide-right");
		} else {
			// all fade-in-up for smaller widths
			item.classList.add("fade-in-up");
		}
	});
}

// run on load
applyAnimations();

// run again on resize
window.addEventListener("resize", applyAnimations);
