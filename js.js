$(function(){

var askRows = parseInt(prompt("Enter number of rows:"));
var askCols = parseInt(prompt("Enter number of columns:"));

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

$("#red").click(function(){
		$("td").mouseover(function(){
		$(this).css("background-color", "red");
	});	
})
$("#blue").click(function(){
		$("td").mouseover(function(){
		$(this).css("background-color", "blue");
	});	
})
$("#green").click(function(){
		$("td").mouseover(function(){
		$(this).css("background-color", "green");
	});
})


$("#wrapper").append(grid);

$("td").mouseover(function(){
	$(this).css("background-color", "black");
});

$("td").mousedown(function(){
	$(this).css("background-color", "white");
})
$("#red").text("")
});

function clearBoard(){
	$("td").css("background-color", "white");
}
