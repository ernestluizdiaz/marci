document.addEventListener("DOMContentLoaded", function () {
	const navLinks = document.querySelectorAll(".navbar ul li a");
	navLinks.forEach((link) => {
		// Set 'active' class on Home by default
		if (
			link.getAttribute("href") === "index.html" ||
			link.getAttribute("href") === "./" ||
			link.getAttribute("href") === "/"
		) {
			link.classList.add("active");
		}
		link.addEventListener("click", function () {
			navLinks.forEach((l) => l.classList.remove("active"));
			this.classList.add("active");
			document.getElementById("myLinks").classList.remove("open");
		});
	});
});

function myNav() {
	document.getElementById("myLinks").classList.toggle("open");
}
