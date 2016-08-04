$(function(){

	var askRows = parseInt(prompt("Enter number of rows:"));
	var askCols = parseInt(prompt("Enter number of columns:"));
	var down = false;

	function createGrid(rows, cols){
		var i = 0;
		var grid = document.createElement("table");
		grid.className = "grid";
		for(var g = 1; g <= rows; g++){
			var tr = grid.appendChild(document.createElement("tr"));
			for(var j = 1; j <= cols; j++){
				var cell = tr.appendChild(document.createElement("td"));
			}
		}
		return grid;
	}
	var grid = createGrid(askRows, askCols); 

	$("#black").click(function(){
		paintIt("black");
	})
	$("#red").click(function(){
		paintIt("red");
	})
	$("#blue").click(function(){
		paintIt("blue");
	})
	$("#green").click(function(){
		paintIt("green");
	})


	$("#wrapper").append(grid);

	$("td").mousedown(function(){
		$(this).css("background-color", "white");
	})


	function paintIt(color){
	$("td").bind({
		    mousedown : function(){
		    	down = true;  
		    },
		    mousemove : function(){
		    	if(down){
		        	$(this).css("background-color", color);
		        }
		    },
		    mouseup : function(){
		    	down = false;
		   }
		})
	};
});

function clearBoard(){
	$("td").css("background-color", "white");
}