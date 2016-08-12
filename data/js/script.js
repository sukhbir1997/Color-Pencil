//#e67e22-Orange Shade
//#3498db-Blue Shade


//Handling animations on mouseover;
$(".box").on("mouseover", function(){
	var x = $(this).attr("class");
	if(x == "box clicked"){
		// if box is clicked retain orange shade
		$(this).css("backgroundColor", "#e67e22");
	}else{
		// if box isnt clicked change to blue
		$(this).css("backgroundColor", "#3498db");
	}
});

//Handling Animations on Mouseout
$(".box").on("mouseout", function(){
	var x = $(this).attr("class");
	if(x == "box clicked"){
		// if box is clicked retain orange shade;
		$(this).css("backgroundColor", "#e67e22");
	}else{
		// if box isnt clicked change back to theme color;
		$(this).css("backgroundColor",$("#colorDisplay").text());
	}
});

//Handling Animations on User Click
$(".box").on("click", function(){
	var z =$(this).css("backgroundColor")
	if(z == "rgb(52, 152, 219)"){
		$(this).css("backgroundColor", "#e67e22")
		$(this).addClass("clicked")
	}
	else{
		$(this).removeClass("clicked");
		$(this).css("backgroundColor", "#3498db")
	}
});

//Clearing the color pencil and display hidden content
$("#delete").on("click", function(){
	$(".contain, #colorControl").fadeOut(700,function(){
		$(this).remove();
		$("#delete").remove();
		$("#reset").remove();
		$("#hidden").fadeIn(1200);
		$("#colorControl").remove();
	})
});

// Reset game
$("#reset").on("click", function(){
	$("div.box").removeClass("clicked");
	$("div.box").css("backgroundColor", $("#colorDisplay").text());
});
	
//go back to the game. from the hidden message page
$(".reset1").on("click", function(){
   location.reload();
})

//input responsible for changing theme color and reseting the game;
$("input").on("change", function(){
	var color= $(this).val();
	$("#colorDisplay").text(color);
	$(".box").css("backgroundColor", $("#colorDisplay").text());
	$("#delete, #reset, .reset1").css("borderColor", $("#colorDisplay").text());
	$("div.box").removeClass("clicked");
	$("div.box").css("backgroundColor", $("#colorDisplay").text());
})








