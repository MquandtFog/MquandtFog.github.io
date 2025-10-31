/**JavaScript to randomly switch between videos and remember playback positions**/
document.addEventListener("DOMContentLoaded"), function () {
    /**Reference to the video player and text box**/
    var videoPlayer = document.getELementById("videoPlayer");
    var textBox = document.getElementById("textBox");
    
    //Array of video sources
    var videoSources = ["videos/video01.mp4", 
						"videos/video02.mp4", 
						"videos/video03.mp4",
						"videos/video04.mp4",
						"videos/video05.mp4"];
    
    //Array to store playback time for each video, initialized to zero
    var videoTimes = [0, 0, 0];
    
    //Store the index of the currently playing video 
    var currentVideoIndex = 0;
    
function getRandomIndex() {
	let newIndex;
	do {
		newIndex = Math.floor(Math.random() * videoSources.length);
	} while (newIndex === currentVideoIndex);
	return newIndex;
}
	
	function toggleVideo(){
		
		if (isSoundEnabled === false) {
			videoPlayer.muted = false;
			isSoundEnabled = true;
		}
		
		videoTime[currentVideoIndex] = videoPlayer.currentTime;
		currentVideoIndex = getRandomIndex();
		
		videoPlayer.src = videoSources[currentVideoIndex];
		videoPlayer.load();
		videoPlayer.currentTime = videoTimes[currentVideoIndex];
		videoPlayer.play();
	}
	
    //Function to switch to a random video and save the current video time
    function switchToRandomVideo() {
        //Save the current playback time of the currently playing video
        videoTimes[currentVideoIndex] = videoPlayer.currentTime;
        
        //Pick a random index that is diff from the current one
        let newVideoIndex;
        do {
            newVideoIndex = Math.floor(Math.random() * videoSources.length);
        } while (newVideoIndex === currentVideoIndex); //ensure it's not the same video//
        
        //update the video source to the saved playback and time//
        currentVideoIndex = newVideoIndex;
        videoPlayer.src = videoSources[currentVideoIndex];
        
        //Load the video at the saved playback time and play
        videoPlayer.currentTime = videoTimes[currentVideoIndex];
        videoPlayer.play();
    }
    
    //add click event listener to the text box to switch videos
    textBox.addEventListener("click", switchToRandomVideo);
}};
// JavaScript Document