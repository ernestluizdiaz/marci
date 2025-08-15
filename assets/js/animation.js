class ScrollAnimator {
	constructor() {
		this.animatedElements = [];
		this.init();
	}

	init() {
		setTimeout(() => {
			const heroItems = document.querySelector(".hero-items");
			if (heroItems) {
				heroItems.classList.add("animate");
			}
		}, 500);

		this.setupIntersectionObserver();

		this.setupScrollListener();
	}

	setupIntersectionObserver() {
		const options = {
			threshold: 0.1,
			rootMargin: "0px 0px -50px 0px",
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					this.animateElement(entry.target);
				}
			});
		}, options);

		const animationClasses = [
			".fade-in-up",
			".fade-in",
			".slide-left",
			".slide-right",
			".scale-in",
			".marci-experience",
			".marci-items",
			".zoom-in-out",
		];

		animationClasses.forEach((className) => {
			const elements = document.querySelectorAll(className);
			elements.forEach((el) => {
				observer.observe(el);
			});
		});
	}

	setupScrollListener() {
		let ticking = false;

		window.addEventListener("scroll", () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					this.handleScroll();
					ticking = false;
				});
				ticking = true;
			}
		});
	}

	animateElement(element) {
		const delay = this.animatedElements.length * 100;

		setTimeout(() => {
			element.classList.add("animate");

			if (element.tagName === "BUTTON") {
				this.addRippleEffect(element);
			}
		}, delay);

		this.animatedElements.push(element);
	}

	addRippleEffect(button) {
		button.addEventListener("click", (e) => {
			const ripple = document.createElement("span");
			const rect = button.getBoundingClientRect();
			const size = Math.max(rect.width, rect.height);
			const x = e.clientX - rect.left - size / 2;
			const y = e.clientY - rect.top - size / 2;

			ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
          `;

			button.style.position = "relative";
			button.style.overflow = "hidden";
			button.appendChild(ripple);

			setTimeout(() => {
				ripple.remove();
			}, 600);
		});
	}
}

const style = document.createElement("style");
style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.8);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

			@keyframes zoomPulse {
				0% {
					transform: scale(1);
				}
				100% {
					transform: scale(1.05);
				}
			}

			@keyframes heroFadeInUp {
				0% {
					opacity: 0;
					transform: translateY(40px) scale(1);
				}
				100% {
					opacity: 1;
					transform: translateY(0) scale(1);
				}
			}
    `;
document.head.appendChild(style);

document.addEventListener("DOMContentLoaded", () => {
	new ScrollAnimator();
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute("href"));
		if (target) {
			target.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	});
});
