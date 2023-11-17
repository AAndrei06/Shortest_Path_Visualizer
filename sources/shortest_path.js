document.addEventListener('DOMContentLoaded', function() {
	let setStartBtn = document.getElementById("start-btn");
	let setFinishBtn = document.getElementById('finish-btn');
	let clearBtn = document.getElementById('clear-btn');
	let startSearchBtn = document.getElementById("start-search-btn");
	let wallsBtn = document.getElementById("walls-btn");
	let gridSection = document.getElementsByClassName("grid-section")[0];
	gridSection.innerHTML = "";
	for (let i = 0;i < 322;i++){
		gridSection.innerHTML += `<div class = "box-element"></div>`;
	}
	let cells = document.getElementsByClassName("box-element");
	let n = 14,m = 23;
	let memoryBegin = 0;
	let memoryEnd = 0;
	let startCoordinates = [0,0];
	let finishCoordinates = [0,0];
	let maze = [];
	let mazq = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

	let start = false;
	let finish = false;
	let placeWalls = false;
	for (let i = 0;i < cells.length;i++){
		cells[i].style.background = "whitesmoke";
	}

	// Place Start ----------------------------------------------------

	setStartBtn.onclick = () => {
		if (start == false){
			start = true;
			finish = false;
			placeWalls = false;
			wallsBtn.innerHTML = "Place Walls";
			setStartBtn.innerHTML = "Setting Start...";
			for (let i = 0;i < cells.length;i++){
				if (cells[i].style.background == "red"){
					cells[i].style.background = "whitesmoke";
				}
			}
		}
	}
	for (let i = 0;i < cells.length;i++){
		cells[i].addEventListener("click",() => {
			if (start == true){
				cells[i].style.background = "red";
				let temp = [];
				maze = [];
				for (let j = 0;j < cells.length;j++){
					if (cells[j].style.background == "red"){
						memoryBegin = j;
						temp.push(1);
					}else if (cells[j].style.background == "whitesmoke"){
						temp.push(0);
					}else if (cells[j].style.background == "blue"){
						memoryEnd = j;
						temp.push(9999);
					}else if (cells[j].style.background == "black"){
						temp.push(10000);
					}

					if (temp.length == 23){
						maze.push(temp);
						temp = [];
					}
				}
				start = false;
				finish = false;
				placeWalls = false;
				setStartBtn.innerHTML = "Place Start";
			}
		})
	}

	// End Place Start -------------------------------------------------

	// Place Finish ----------------------------------------------------

	setFinishBtn.onclick = () => {
		if (finish == false){
			finish = true;
			start = false;
			placeWalls = false;
			setFinishBtn.innerHTML = "Setting Finish...";
			wallsBtn.innerHTML = "Place Walls";
			for (let i = 0;i < cells.length;i++){
				if (cells[i].style.background == "blue"){
					cells[i].style.background = "whitesmoke";
				}
			}
		}
	}

	for (let i = 0;i < cells.length;i++){
		cells[i].addEventListener("click",() => {
			if (finish == true){
				cells[i].style.background = "blue";
				let temp = [];
				maze = [];
				for (let j = 0;j < cells.length;j++){
					if (cells[j].style.background == "red"){
						memoryBegin = j;
						temp.push(1);
					}else if (cells[j].style.background == "whitesmoke"){
						temp.push(0);
					}else if (cells[j].style.background == "blue"){
						memoryEnd = j;
						temp.push(9999);
					}else if (cells[j].style.background == "black"){
						temp.push(10000);
					}

					if (temp.length == 23){
						maze.push(temp);
						temp = [];
					}
				}
				finish = false;
				placeWalls = false;
				start = false;
				setFinishBtn.innerHTML = "Place Finish";
			}
		})
	}

	// End place finish ------------------------------------------------

	// Place walls ---------------------------------------------------

	wallsBtn.onclick = () => {

		placeWalls = true;
		finish = false;
		start = false;
		wallsBtn.innerHTML = "Placing Walls...";
		for (let i = 0;i < cells.length;i++){
		cells[i].addEventListener("click",() => {
			if (placeWalls == true){
				if (cells[i].style.background != "black"){
					cells[i].style.background = "black";
				}else{
					cells[i].style.background = "whitesmoke";
				}
				let temp = [];
				maze = [];
				for (let j = 0;j < cells.length;j++){
					if (cells[j].style.background == "red"){
						temp.push(1);
						memoryBegin = j;
					}else if (cells[j].style.background == "whitesmoke"){
						temp.push(0);
					}else if (cells[j].style.background == "blue"){
						temp.push(9999);
						memoryEnd = j;
					}else if(cells[j].style.background == "black"){
						temp.push(10000);
					}

					if (temp.length == 23){
						maze.push(temp);
						temp = [];
					}
				}
				finish = false;
				start = false;
			}
		})
	}

	}

	// End Place Walls -------------------------------------------

	// Clear 

	clearBtn.onclick = () =>{
		for (let i = 0;i < cells.length;i++){
			cells[i].style.background = "whitesmoke";
		}
	}

	// End Clear

	function startSearch(){

		for (let i = 0;i < n;i++){
			for (let j = 0;j < m;j++){
				
				if (maze[i][j] == 0){
					mazq[i][j] = -1;
				}
				
				if (maze[i][j] == 10000){
					mazq[i][j] = 10000;
				}
				if (maze[i][j] == 1){
					mazq[i][j] = 1;
				}

				if (mazq[i][j] == 9999){
					mazq[i][j] == 9999;
				}
			}
		}

		let queue = [[startCoordinates[0],startCoordinates[1],1]];

		let row,col,dist;
		let s = 0;
		while (s < queue.length){
			let [row, col, dist] = queue[s];
		    maze[row][col] = dist;

		    const neighbors = [
		        [row + 1, col],
		        [row - 1, col],
		        [row, col + 1],
		        [row, col - 1]
		    ];

		    for (const [r, c] of neighbors) {
		        if (r >= 0 && r < n && c >= 0 && c < m && maze[r][c] === 0) {
		            queue.push([r, c, dist + 1]);
		            maze[r][c] = -1;
		        }
		    }

		    s++;
		}
		s=0;
		let mr;
		let mc;
		queue = [[finishCoordinates[0],finishCoordinates[1]]];
		let tmp = []
		while (s <= queue.length && s < 3000){
			row = queue[s][0];
			col = queue[s][1];
			mazq[row][col] = 0;

			if (row == startCoordinates[0] && col == startCoordinates[1]){
				break;
			}

			if (row + 1 < n && maze[row+1][col] < maze[row][col]){
				mr = row+1;
				mc = col;
			}

			if (row - 1 >= 0 && maze[row-1][col] < maze[row][col]){
				mr = row-1;
				mc = col;
			}

			if (col + 1 < m && maze[row][col+1] < maze[row][col]){
				mr = row;
				mc = col+1;
			}

			if (col - 1 >= 0 && maze[row][col-1] < maze[row][col]){
				mr = row;
				mc = col-1;
			}
			queue.push([mr,mc]);
			s++;

		}

		for (let i = 0;i < n;i++){
			for (let j = 0;j < m;j++){
				tmp.push(mazq[i][j]);
			}
		}
		for (let i = 0;i < cells.length;i++){
			cells[i].style.transition = "1s";
			if (tmp[i] == -1){
				cells[i].style.background = "whitesmoke";
			}else if (tmp[i] == 10000){
				cells[i].style.background = "black";
			}else if (tmp[i] == 0){
				cells[i].style.background = "yellow";
			}
			cells[i].style.transition = "0.1s";
		}
		cells[memoryBegin].style.background = "red";
		cells[memoryEnd].style.background = "blue";
		for (let i = 0;i < n;i++){
			for (let j = 0;j < m;j++){
				mazq[i][j] = 0;
			}
		}
		tmp = [];

	}

	startSearchBtn.onclick = () => {
		try {
		  for (let i = 0;i < cells.length;i++){
			if (cells[i].style.background == "yellow"){
				cells[i].style.background = "whitesmoke";
			}
		}
		for (let i = 0;i < n;i++){
			for (let j = 0;j < m;j++){
				if (maze[i][j] == 1){
					mazq[i][j] = 1;
					startCoordinates = [i,j];
				}else if(maze[i][j] == 9999){
					finishCoordinates = [i,j];
					mazq[i][j] = 99;
				}else if(maze[i][j] == 10000){
					mazq[i][j] = 999;
				}
			}
		}

		startSearch();
		}
		catch(err) {
		  alert("Something went wrong,try refreshing the page!");
		}
		
	}

 });
