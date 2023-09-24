/**
 * Animation play/pause toggle
 */

document.addEventListener( "DOMContentLoaded", function(){

	// Get reduced motion preference
	const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

	// Get status of toggle button on the site
	let animationStatus = localStorage.getItem("KIanimationStatus");

	// Get the main toggle element
	const animationControls = document.querySelector("#animation-controls");

	// Get the Lottie elements
	let computerPlayer = document.querySelector("#computer");
	let browserPlayer = document.querySelector("#browser");
	let scrollerPlayer = document.querySelector("#scroller");

	// Set an initial status based on user preferences if one doesn't exist yet and call the play or pause function accordingly.
	if ( animationStatus === null ) {
		if ( !isReduced ) {
			localStorage.setItem("KIanimationStatus", "play");
			playAnimations();
		} else {
			localStorage.setItem("KIanimationStatus", "pause");
			pauseAnimations();
		}

	// Otherwise, call the play or pause function
	} else if ( animationStatus == 'play' ){
		playAnimations();
	} else {
		pauseAnimations();
	}

	// When the toggle is clicked
	animationControls.onclick = function() {

		// Get the animation status
		animationStatus = localStorage.getItem("KIanimationStatus");
		
		// Call the play or pause function opposite of what the current setting is
		if ( animationStatus == 'play' ){
			pauseAnimations();
		} else {
			playAnimations();
		}
	}

	/**
	 * Play animations
	 */
	function playAnimations(){
		// Set the value in the browser
		localStorage["KIanimationStatus"] = "play";

		// Set the new aria value
		animationControls.setAttribute("aria-pressed", "true");

		// Change out the body class
		document.body.classList.add('animation');
		document.body.classList.remove('no-animation');

		// Play the animations
		if (computerPlayer !== null) {
			// This animates continuously
			computerPlayer.play();
		}
		if (browserPlayer !== null) {
			// This animates based on scroll
			LottieInteractivity.create({
				player: '#browser',
				mode: "scroll",
				actions: [
					{
					visibility: [0, 1],
					type: "seek",
					frames: [0, 152],
					},
				]
			});
		}
		if (scrollerPlayer !== null) {
			// This animates based on scroll
			LottieInteractivity.create({
				player: '#scroller',
				mode: "scroll",
					actions: [
					{
						visibility: [0, 1],
						type: "seek",
						frames: [0, 119],
					},
					]
			});
		}
	}
	function pauseAnimations(){
		// Set the value in the browser
		localStorage["KIanimationStatus"] = "pause";

		// Set the new aria value
		animationControls.setAttribute("aria-pressed", "false");

		// Change out the body class
		document.body.classList.add('no-animation');
		document.body.classList.remove('animation');

		// Pause/show a frame from the animation
		if (computerPlayer !== null) {
			// Pauses at current frame
			computerPlayer.pause();
		}
		if (browserPlayer !== null) {
			// Pauses at a specific frame
			LottieInteractivity.create({
				player: '#browser',
				mode: "scroll",
				actions: [
					{
					visibility: [0, 1],
					type: "seek",
					frames: [152],
					},
				]
			});
		}
		if (scrollerPlayer !== null) {
			// Pauses at a specific frame
			LottieInteractivity.create({
				player: '#scroller',
				mode: "scroll",
					actions: [
					{
						visibility: [0, 1],
						type: "seek",
						frames: [117],
					},
					]
			});
		}
	}

});