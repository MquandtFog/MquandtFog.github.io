// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');

// Array of slides (5 images)
const slides = [
	{ src: 'images/image01.jpg', 
	 alt: 'main',
	 caption: 'How do you deal with the inevitable change and loss of everything and everyone you love?'
	},
	{ src: 'images/image02.jpg', 
	 alt: 'second',
	 caption: 'I know it’s hard sometimes, but in spite of it all, you keep going.'
	},
	{ src: 'images/image03.jpg', 
	 alt: 'third',
	 caption: 'It won’t always make sense, and so much is out of your control,'
	},
	{ src: 'images/image04.jpg', 
	 alt: 'fourth',
	 caption: 'but you keep going through this giant, crazy world.'
	},
	{ src: 'images/image05.jpg', 
	 alt: 'fifth',
	 caption: '‘Cause somehow, you just know it’s worth it.'
	},
	{ src: 'images/image06.jpg', 
	 alt: 'sixth',
	 caption: 'But what if something goes wrong?'
	},
	{ src: 'images/image07.jpg', 
	 alt: 'seventh',
	 caption: 'Lots of things will go wrong, but you already knew that!'
	},
	{ src: 'images/image08.jpg', 
	 alt: 'eighth',
	 caption: 'Sometimes you need to remind yourself of the beauty that’s right there in front of you.'
	},
	{ src: 'images/image09.jpg', 
	 alt: 'ninth',
	 caption: 'Just ‘cause you see it everyday, doesn’t make it any less amazing.'
	},
	{ src: 'images/image10.jpg', 
	 alt: 'tenth',
	 caption: 'Look for the good. It is there.'
	}
];
// JavaScript Document

let currentIndex = 0;
// Preload images
slides.forEach(({ src }) => {
const i = new Image();
i.src = src;
});

// Helper to show slide
function showSlide(index) {
const slide = slides[index];
	mainImage.src = slide.src;
	mainImage.alt = slide.alt;
	caption.textContent = slide.caption; // updates caption text
}
// Advance on click
function nextSlide() {
	currentIndex = (currentIndex + 1) % slides.length;
	showSlide(currentIndex);
}
// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);

