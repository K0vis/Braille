window.onload = function() {
	/*Button aspect ratio*/
	setCircleAspectRatio();
	$(window).resize(function(){
		setCircleAspectRatio();
	});
	/*Checkbox change event*/
	createABC();
	$(":checkbox").change(function(){
		var sum = 0;
		$(":checkbox").each(function(){
			if($(this).get(0).checked){
			sum += parseInt($(this).val());
			}
		});
		changeLetter(sum);
	});
	
	$("#flush").on("click", function(){
		$(".previous .myCard").remove();
	});
}

function setCircleAspectRatio()
{
	var y = $(".switch").css("width");
	$(".switch").css("height",y);
}

var abc;

function changeLetter(index)
{
	if(index != 0)
	{
		$("#letter").html('');
		
		$.each(abc[index - 1].alias, function(){
			var newResult = $("<span></span>").addClass("largeText myCard");
			var items = $.makeArray($(this));
			var item = items.join("");
			newResult.html(item);
			newResult.on("click", function(){
				var copy = $(this).clone();
				copy.on("click", function(){
					$(this).remove();
				});
				copy.insertBefore("#flush");
			});
			$("#letter").append(newResult);
		});
	}
	else
	{
		$("#letter").html('');
		$("#letter").append($('<span>Karakterek</span>').addClass("largeText myCard font-weight-bold"));
	}
}

function createABC()
{
	var def = "Karakter";
	abc = [
		{index: "1", alias:["A","1"]},
		{index: "2", alias:[",","/ vége"]},
		{index: "3", alias:["B","2"]},
		{index: "4", alias:[".","' vége"]},
		{index: "5", alias:["K","Nagybetű előjelző"]},
		{index: "6", alias:[";"]},
		{index: "7", alias:["L"]},
		{index: "8", alias:["Á"]},
		{index: "9", alias:["C","3"]},
		{index: "10", alias:["I","9"]},
		{index: "11", alias:["F","6"]},
		{index: "12", alias:["Í"]},
		{index: "13", alias:["M"]},
		{index: "14", alias:["S"]},
		{index: "15", alias:["P"]},
		{index: "16", alias:["& eleje", "/ eleje"]},
		{index: "17", alias:["E","€ vége", "5"]},
		{index: "18", alias:[":"]},
		{index: "19", alias:["H","8"]},
		{index: "20", alias:["*", "Listajel vége"]},
		{index: "21", alias:["O"]},
		{index: "22", alias:["!"]},
		{index: "23", alias:["R"]},
		{index: "24", alias:["@"]},
		{index: "25", alias:["D","4"]},
		{index: "26", alias:["J","0","% eleje"]},
		{index: "27", alias:["G", "7"]},
		{index: "28", alias:["ZS"]},
		{index: "29", alias:["N"]},
		{index: "30", alias:["T"]},
		{index: "31", alias:["Ö"]},
		{index: "32", alias:["' eleje", "Listajel eleje"]},
		{index: "33", alias:["É"]},
		{index: "34", alias:["?"]},
		{index: "35", alias:["Z"]},
		{index: "36", alias:["-"]},
		{index: "37", alias:["U"]},
		{index: "38", alias:["\" eleje","Kiemelőjel vége"]},
		{index: "39", alias:["V","§ vége"]},
		{index: "40", alias:[""]},
		{index: "41", alias:["CS"]},
		{index: "42", alias:["Ó"]},
		{index: "43", alias:["NY"]},
		{index: "44", alias:["Ú"]},
		{index: "45", alias:["X"]},
		{index: "46", alias:["("]},
		{index: "47", alias:["Q","& vége"]},
		{index: "48", alias:["€ eleje"]},
		{index: "49", alias:["SZ"]},
		{index: "50", alias:[""]},
		{index: "51", alias:["TY"]},
		{index: "52", alias:["\" vége","Kiemelőjel eleje", "% vége"]},
		{index: "53", alias:[")"]},
		{index: "54", alias:[""]},
		{index: "55", alias:["Ü"]},
		{index: "56", alias:["LY"]},
		{index: "57", alias:["GY"]},
		{index: "58", alias:["W"]},
		{index: "59", alias:["Ő"]},
		{index: "60", alias:["§ eleje","Szám előjelző"]},
		{index: "61", alias:["Y"]},
		{index: "62", alias:["Ű"]},
		{index: "63", alias:[""]}
	];
}