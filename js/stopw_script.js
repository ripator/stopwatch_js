document.addEventListener("DOMContentLoaded", function (event) {

	let times = document.querySelector(".times"),
		laps = document.querySelector(".laps"),
	 	startButton = document.querySelector(".start"),
		pauseButton = document.querySelector(".pause"),
		stopButton = document.querySelector(".stop"),
		restartButton = document.querySelector(".restart"),
		lapButton = document.querySelector(".lap"),
		clearLapButton = document.querySelector(".clearlaps");


	let milsec = 0,
	 	sec = 0,
		min = 0,
		timer;

	function realTime(){
		return (min < 10 ? "0" +min : min) + ":" + (sec < 10 ? "0" + sec: sec) + ":" + (milsec < 10 ? "0" + milsec: milsec);
	}

	function startTimer() {
		
		times.textContent = realTime();
		
		milsec++;		
		if(milsec == 100) {
			milsec = 0;
			sec++;
		}

	 	if(sec == 60) {
			sec = 0;
			min++;
		}		
	}

	
	function start(){		
		clearInterval(timer);		
		timer = setInterval(startTimer, 10);		
	}

	function pause(){
		clearInterval(timer);
	}

	function stop(){
		clearInterval(timer);
		milsec = 0,
	 	sec = 0,
		min = 0,		
		times.textContent = "00" + ":" + "00" + ":" + "00";
	}

	function restart(){
		stop();
		start();
	}	

	function lap(){		
		if (times.textContent != "00" + ":" + "00" + ":" + "00"){
			let li = document.createElement("li");
			li.className = "list";
			laps.appendChild(li);
			li.innerText = realTime();
		}
	}

	function clearLap(){		
		laps.innerHTML = "";
	}

	startButton.onclick = start;
	pauseButton.onclick = pause;
	stopButton.onclick = stop;
	restartButton.onclick = restart;
	lapButton.onclick = lap;
	clearLapButton.onclick = clearLap;
});