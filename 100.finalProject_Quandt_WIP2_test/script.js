//*Javascript Document

const videoPart1 = [
					{src: "videos/Snowfall2.mp4", caption: "Vön jïp jova sö fay deyon gélö ketfráö tlolfän otsïv,"},
					{src: "videos/Snowbush.mp4", caption: "Sö yusjéög iste pïs tukjé mao o glossöf tá glö snar."},
					{src: "videos/Lights.mp4", caption: "Sö müni sïm slar"},
					{src: "videos/Bushlights1.mp4",caption: "Deyon sö véld joldae glar."},
					{src: "videos/Bushlight2.mp4", caption: "Övae ondai ras"},
					];

const videoPart2 = [
					{src: "videos/CitySnow2.mp4", caption: "Ev ketlånö müöl indyr."},
					{src: "videos/Candle1.mp4", caption: "Ras sö ketnörtjé ojo"},
					{src: "videos/Fireplace1.mp4", caption: "Fisnå et ketjüs,"},
					{src: "videos/Ornaments1.mp4", caption: "Deyon müte sïge kettéj dråf dos tradov."},
					{src: "videos/clip09.mp4", caption: "Ketnifjé ösajf tsïv vön dj ondai ejar"},
					];

const videoPart3 = [
					{src: "videos/clip10.mp4", caption: "Müni reev veg jívn sönri"},
					{src: "videos/clip11_face.mp4", caption: "Deyon jírejösh reev sï noy."},
					{src: "videos/clip12_face.mp4", caption: "Sii ol slät tá ketdepra"},
					{src: "videos/clip13_face.mp4", caption: "Dos sö dj fráö föf joga,"},
					{src: "videos/clip14_face.mp4", caption: "Deyon ketstáör löå el ketjo"},
					{src: "videos/clip15_face.mp4", caption: "Dos igïsa jå halär."},
					{src: "videos/clip16_face.mp4", caption: "Pin vön e et ëvma"},
					{src: "videos/clip17_face.mp4", caption: "Kao okuva e kau,"},
					{src: "videos/clip18_face.mp4", caption: "Sö dj syrá saj tsïv"},
					{src: "videos/clip20_random.mp4", caption: "Müöl müj ït muur."},
					];

const titleOverlay = document.getElementById("titleOverlay");
const player = document.getElementById("player");
const titleText = document.getElementById("titleText"); // NEW
const replayBtn = document.getElementById("replayBtn");

function picker(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  console.log("Random word:", array[randomIndex]);
  return array[randomIndex];	
}

titleOverlay.addEventListener("click", buildVideo);
replayBtn.addEventListener("click", buildVideo);

let playlist = []; // creates an empty array
let currentIndex = 0;

function buildVideo() {
  	//titleOverlay.style.display = "none"; //REMOVED
	titleOverlay.classList.add("playing"); //New
	player.classList.add("fullscreen");
	replayBtn.style.display = "none";
	
	playlist = [
    picker(videoPart1),
    picker(videoPart2),
    picker(videoPart3)
  ];
		
	currentIndex = 0;
	
	playCurrent();
}

function playCurrent() {
	const current = playlist[currentIndex]; // { src: "...", caption: "..." }
	titleText.textContent = current.caption;
	
	player.src = current.src;
	player.load();
	player.play().catch(err => {
		console.warn("Play interrupted (autoplay policy?):", err);
	});
}

// Advance when a video ends
player.addEventListener("ended", () => {
	currentIndex++;
	if (currentIndex < playlist.length) {
		playCurrent();
	} else {
		console.log("All three parts finished.");
		replayBtn.style.display = "block";
	}
});