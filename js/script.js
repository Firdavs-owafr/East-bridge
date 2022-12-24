let search = document.querySelector('.search'),
    searchBox = document.querySelector('.wrapper-box')

search.addEventListener('click', () => {
    searchBox.style.display = 'flex'
    document.body.style.overflow = 'hidden'
})

searchBox.addEventListener('click', () => {
    document.body.style.overflow = ''
})

let btnNext = document.querySelector(".left"),
    btnPrev = document.querySelector(".right"),
    slides = document.querySelectorAll(".background-img")

let sliderCount = 0

function showSlide(i = 0) {
    slides[i].classList.add("active")
}

function hideSlides() {
    slides.forEach(item => {
        item.classList.remove("active")
    })
}

btnNext.addEventListener("click", () => {
    sliderCount++
    if (sliderCount >= slides.length) {
        sliderCount = 0
    }
    hideSlides()
    showSlide(sliderCount)
})

btnPrev.addEventListener("click", () => {
    sliderCount--
    if (sliderCount < 0) {
        sliderCount = slides.length - 1
    }
    hideSlides()
    showSlide(sliderCount)
})

hideSlides()
showSlide()

// setInterval(() => {
// 	sliderCount++
// 	if (sliderCount >= slides.length) {
// 		sliderCount = 0
// 	}
// 	hideSlides()
// 	showSlide(sliderCount)
// }, 5000)
// ParticlesJS Config.
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 700
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 0.1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 10,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});


