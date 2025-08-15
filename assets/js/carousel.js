const galleryData = [
	{
		img: "assets/img/gallery-1.webp",
		caption: "Golden rays spilling over the horizon at dawn.",
		location: "Santorini, Greece",
	},
	{
		img: "assets/img/gallery-2.webp",
		caption: "A calm lake reflecting the deep colors of autumn.",
		location: "Lake Bled, Slovenia",
	},
	{
		img: "assets/img/gallery-3.webp",
		caption: "City lights twinkling under a starry night sky.",
		location: "Tokyo, Japan",
	},
	{
		img: "assets/img/gallery-4.webp",
		caption: "Winding paths through a field of blooming lavender.",
		location: "Provence, France",
	},
	{
		img: "assets/img/gallery-5.webp",
		caption: "A lone traveler walking across a sunlit desert.",
		location: "Sahara Desert, Morocco",
	},
	{
		img: "assets/img/gallery-6.webp",
		caption: "Snow-covered peaks stretching beyond the clouds.",
		location: "Swiss Alps, Switzerland",
	},
	{
		img: "assets/img/gallery-7.webp",
		caption: "Vibrant coral reefs teeming with marine life.",
		location: "Australia",
	},
];

const slidesContainer = document.getElementById("carouselSlides");
const thumbsContainer = document.getElementById("carouselThumbs");

// Build slides
slidesContainer.innerHTML = galleryData
	.map(
		(item) => `
    <li class="carousel__slide">
      <figure>
        <div><img src="${item.img}" alt=""></div>
        <figcaption>
          ${item.caption}
          <span class="location"><strong>Location:</strong> ${item.location}</span>
        </figcaption>
      </figure>
    </li>
  `
	)
	.join("");

// Build thumbnails
thumbsContainer.innerHTML = galleryData
	.map(
		(item, index) => `
    <li><img src="${item.img}" data-slide="${index}" alt=""></li>
  `
	)
	.join("");

// Carousel logic
const slides = document.querySelectorAll("#carouselSlides .carousel__slide");
const thumbs = document.querySelectorAll("#carouselThumbs img");
let currentSlide = 0;

function showSlide(index) {
	const offset = index * -100;
	slides[0].style.marginLeft = `${offset}%`;
	currentSlide = index;

	thumbs.forEach((t) => (t.parentElement.style.boxShadow = ""));
	thumbs[index].parentElement.style.boxShadow =
		"0px 0px 0px 5px rgba(0, 0, 255, 0.5)";
}

thumbs.forEach((thumb, index) => {
	thumb.addEventListener("click", () => {
		showSlide(index);
	});
});

// Init
showSlide(0);
