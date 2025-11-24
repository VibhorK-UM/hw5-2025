var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.load();
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
	
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
	document.querySelector("#volume").textContent = video.volume;
	console.log("Volume information updated");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.1;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	let duration = video.duration;
	if (video.currentTime + 10 >= duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("Current time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	document.getElementById('mute').textContent = video.muted ? "Unmute" : "Mute";
});

document.querySelector('#slider').addEventListener("input",function(){
	video.volume=this.value / 100 ;
	document.querySelector("#volume").textContent = video.volume
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.remove("original");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	video.classList.add("original");
});