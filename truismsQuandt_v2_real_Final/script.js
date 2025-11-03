/**select image by id**/
const videoPlayer = document.getElementById('videoPlayer');
   const textBox = document.getElementById('textBox');
	
// Array of video sources for toggling
const videoSources = [
	'videos/video01.mp4',
	'videos/video02.mp4',
	'videos/video03.mp4',
	'videos/video04.mov',
	'videos/video05.mp4'
	
	];

// Current video index, starting with the first video
let currentVideoIndex = 0;

// Array to store the playback time for each video
const videoTimes = [0, 0];

var isSoundEnabled = false;

function toggleVideo() {
	
	if (isSoundEnabled === false) {
			videoPlayer.muted = false;
			isSoundEnabled = true;
	}
	
	videoTimes[currentVideoIndex] = videoPlayer.currentTime;
	currentVideoIndex = 1 - currentVideoIndex;
	videoPlayer.src = videoSources[currentVideoIndex];
	videoPlayer.load();
	videoPlayer.currentTime = videoTimes[currentVideoIndex];
	videoPlayer.play();
}
// Add a click event to the text box to switch videos
textBox.addEventListener("click", toggleVideo);
