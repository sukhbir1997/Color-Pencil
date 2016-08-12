

$(".box").on("mouseover", function(){
	var x = $(this).attr("class");
	if(x == "box clicked"){
		$(this).css("backgroundColor", "#e67e22");
	}else{
		$(this).css("backgroundColor", "#3498db");
	}
});


$(".box").on("mouseout", function(){
	var x = $(this).attr("class");
	if(x == "box clicked"){
		$(this).css("backgroundColor", "#e67e22");
	}else{
		$(this).css("backgroundColor",$("#colorDisplay").text());
	}
});


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

$("#delete").on("click", function(){
	$(".contain, #colorControl").fadeOut(700,function(){
		$(this).remove();
		$("#delete").remove();
		$("#reset").remove();
		$("#hidden").fadeIn(1200);
		$("#colorControl").remove();
	})
});

$("#reset").on("click", function(){
	$("div.box").removeClass("clicked");
	$("div.box").css("backgroundColor", $("#colorDisplay").text());
});
	

$(".reset1").on("click", function(){
   location.reload();
})

$("input").on("change", function(){
	var color= $(this).val();
	$("#colorDisplay").text(color);
	$(".box").css("backgroundColor", $("#colorDisplay").text());
	$("#delete, #reset, .reset1").css("borderColor", $("#colorDisplay").text());
	$("div.box").removeClass("clicked");
	$("div.box").css("backgroundColor", $("#colorDisplay").text());
})








