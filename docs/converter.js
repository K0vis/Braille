window.onload = function() {
	createDict();
	createUnicode();
	
	$("#convertbtn").on("click", function(){
		encodeTextarea();
	});
	
	$("#fontRange").on("input change", function(e){
		document.getElementById("outputText").style.fontSize = $(this).val() + "rem";
	});
	
}

function encodeTextarea(){
	var rows = document.getElementById("inputText").value.split('\n');
	
	var result = "";
	
	for(i = 0; i < rows.length; i++){
		currCap = false;
		currNum = false;
		
		for(j = 0; j < rows[i].length; j++){
			var curr = rows[i][j];
			
			//Doublechars
			if(j < rows[i].length - 1){
				doubleChar = curr + rows[i][j + 1]
				if(dict[doubleChar.toUpperCase()] != null){
					curr = doubleChar;
					j++;
				}
			}
			
			//Pre-notations
			if(dict[curr.toUpperCase()] == null){
				alert("Ismeretlen karakter:\n" + curr + 
				"\n" + (i+1) + " sor, " + (j+1) + " karakter.");
				result += curr;
				currCap = false;
				currNum = false;
			}
			else if((/[A-ZÁÉÍÓÖŐÚÜŰ]/).test(curr)){
				if(!currCap){
					currCap = true;
					result += encodeChar("CAP");
					result += encodeChar("CAP");
				}
				
				currNum = false;
				result += encodeChar(curr);
			}
			else if((/[0-9]/).test(curr)){
				if(!currNum){
					currNum = true;
					result += encodeChar("NUM");
				}
				
				result += encodeChar(curr);
			}
			else{
				currNum = false;
				currCap = false;
				result += encodeChar(curr.toUpperCase());
			}
		}
		result += "\n";
	}
	
	document.getElementById("outputText").value = result;
}

function encodeChar(input){
	var res = "";
	for(c = 0; c < dict[input].length; c++){
		res += unicode[dict[input][c]]
	}
	return res;
}

var unicode;
var dict;

function createDict(){
	dict = {};
	dict["A"] = [1];
	dict["Á"] = [4];
	dict["B"] = [12];
	dict["C"] = [14];
	dict["CS"] = [146];
	dict["D"] = [145];
	dict["E"] = [15];
	dict["É"] = [16];
	dict["F"] = [124];
	dict["G"] = [1245];
	dict["GY"] = [1456];
	dict["H"] = [125];
	dict["I"] = [24];
	dict["Í"] = [34];
	dict["J"] = [245];
	dict["K"] = [13];
	dict["L"] = [123];
	dict["LY"] = [456];
	dict["M"] = [134];
	dict["N"] = [1345];
	dict["NY"] = [1246];
	dict["O"] = [135];
	dict["Ó"] = [246];
	dict["Ö"] = [12345];
	dict["Ő"] = [12456];
	dict["P"] = [1234];
	dict["Q"] = [12346];
	dict["R"] = [1235];
	dict["S"] = [234];
	dict["SZ"] = [156];
	dict["T"] = [2345];
	dict["TY"] = [1256];
	dict["U"] = [136];
	dict["Ú"] = [346];
	dict["Ü"] = [12356];
	dict["Ű"] = [23456];
	dict["V"] = [1236];
	dict["W"] = [2456];
	dict["X"] = [1346];
	dict["Y"] = [13456];
	dict["Z"] = [126];
	dict["ZS"] = [345];
	dict[","] = [2];
	dict[";"] = [23];
	dict[":"] = [25];
	dict["."] = [3];
	dict["?"] = [26];
	dict["!"] = [235];
	dict["-"] = [36];
	dict["*"] = [35];
	dict["@"] = [45];
	dict["&"] = [5,12346];
	dict["("] = [2346];
	dict[")"] = [1356];
	dict["'"] = [6,3];
	dict["/"] = [5,2];
	//dict["_"] = [1]; //underline
	//dict["\""] = [1]; //eleje? vége?
	dict["§"] = [3456,1236];
	dict["€"] = [56,15];
	dict["1"] = [1];
	dict["2"] = [12];
	dict["3"] = [14];
	dict["4"] = [145];
	dict["5"] = [15];
	dict["6"] = [124];
	dict["7"] = [1245];
	dict["8"] = [125];
	dict["9"] = [24];
	dict["0"] = [245];
	dict["NUM"] = [3456]; //before numbers
	dict["CAP"] = [46]; //before capital letters
	dict["["] = [46,2346];
	dict["]"] = [46,1356];
	dict["{"] = [5,2346];
	dict["}"] = [5,1356];
	dict[" "] = [0];
}

function createUnicode(){
	unicode = {};
	unicode[0] = "\u2800"
	unicode[1] = "\u2801";
	unicode[2] = "\u2802";
	unicode[12] = "\u2803";
	unicode[3] = "\u2804";
	unicode[13] = "\u2805";
	unicode[23] = "\u2806";
	unicode[123] = "\u2807";
	unicode[4] = "\u2808";
	unicode[14] = "\u2809";
	unicode[24] = "\u280A";
	unicode[124] = "\u280B";
	unicode[34] = "\u280C";
	unicode[134] = "\u280D";
	unicode[234] = "\u280E";
	unicode[1234] = "\u280F";
	unicode[5] = "\u2810";
	unicode[15] = "\u2811";
	unicode[25] = "\u2812";
	unicode[125] = "\u2813";
	unicode[35] = "\u2814";
	unicode[135] = "\u2815";
	unicode[235] = "\u2816";
	unicode[1235] = "\u2817";
	unicode[45] = "\u2818";
	unicode[145] = "\u2819";
	unicode[245] = "\u281A";
	unicode[1245] = "\u281B";
	unicode[345] = "\u281C";
	unicode[1345] = "\u281D";
	unicode[2345] = "\u281E";
	unicode[12345] = "\u281F";
	unicode[6] = "\u2820";
	unicode[16] = "\u2821";
	unicode[26] = "\u2822";
	unicode[126] = "\u2823";
	unicode[36] = "\u2824";
	unicode[136] = "\u2825";
	unicode[236] = "\u2826";
	unicode[1236] = "\u2827";
	unicode[46] = "\u2828";
	unicode[146] = "\u2829";
	unicode[246] = "\u282A";
	unicode[1246] = "\u282B";
	unicode[346] = "\u282C";
	unicode[1346] = "\u282D";
	unicode[2346] = "\u282E";
	unicode[12346] = "\u282F";
	unicode[56] = "\u2830";
	unicode[156] = "\u2831";
	unicode[256] = "\u2832";
	unicode[1256] = "\u2833";
	unicode[356] = "\u2834";
	unicode[1356] = "\u2835";
	unicode[2356] = "\u2836";
	unicode[12356] = "\u2837";
	unicode[456] = "\u2838";
	unicode[1456] = "\u2839";
	unicode[2456] = "\u283A";
	unicode[12456] = "\u283B";
	unicode[3456] = "\u283C";
	unicode[13456] = "\u283D";
	unicode[23456] = "\u283E";
	unicode[123456] = "\u283F";
	unicode[7] = "\u2840";
	unicode[17] = "\u2841";
	unicode[27] = "\u2842";
	unicode[127] = "\u2843";
	unicode[37] = "\u2844";
	unicode[137] = "\u2845";
	unicode[237] = "\u2846";
	unicode[1237] = "\u2847";
	unicode[47] = "\u2848";
	unicode[147] = "\u2849";
	unicode[247] = "\u284A";
	unicode[1247] = "\u284B";
	unicode[347] = "\u284C";
	unicode[1347] = "\u284D";
	unicode[2347] = "\u284E";
	unicode[12347] = "\u284F";
	unicode[57] = "\u2850";
	unicode[157] = "\u2851";
	unicode[257] = "\u2852";
	unicode[1257] = "\u2853";
	unicode[357] = "\u2854";
	unicode[1357] = "\u2855";
	unicode[2357] = "\u2856";
	unicode[12357] = "\u2857";
	unicode[457] = "\u2858";
	unicode[1457] = "\u2859";
	unicode[2457] = "\u285A";
	unicode[12457] = "\u285B";
	unicode[3457] = "\u285C";
	unicode[13457] = "\u285D";
	unicode[23457] = "\u285E";
	unicode[123457] = "\u285F";
	unicode[67] = "\u2860";
	unicode[167] = "\u2861";
	unicode[267] = "\u2862";
	unicode[1267] = "\u2863";
	unicode[367] = "\u2864";
	unicode[1367] = "\u2865";
	unicode[2367] = "\u2866";
	unicode[12367] = "\u2867";
	unicode[467] = "\u2868";
	unicode[1467] = "\u2869";
	unicode[2467] = "\u286A";
	unicode[12467] = "\u286B";
	unicode[3467] = "\u286C";
	unicode[13467] = "\u286D";
	unicode[23467] = "\u286E";
	unicode[123467] = "\u286F";
	unicode[567] = "\u2870";
	unicode[1567] = "\u2871";
	unicode[2567] = "\u2872";
	unicode[12567] = "\u2873";
	unicode[3567] = "\u2874";
	unicode[13567] = "\u2875";
	unicode[23567] = "\u2876";
	unicode[123567] = "\u2877";
	unicode[4567] = "\u2878";
	unicode[14567] = "\u2879";
	unicode[24567] = "\u287A";
	unicode[124567] = "\u287B";
	unicode[34567] = "\u287C";
	unicode[134567] = "\u287D";
	unicode[234567] = "\u287E";
	unicode[1234567] = "\u287F";
	unicode[8] = "\u2880";
	unicode[18] = "\u2881";
	unicode[28] = "\u2882";
	unicode[128] = "\u2883";
	unicode[38] = "\u2884";
	unicode[138] = "\u2885";
	unicode[238] = "\u2886";
	unicode[1238] = "\u2887";
	unicode[48] = "\u2888";
	unicode[148] = "\u2889";
	unicode[248] = "\u288A";
	unicode[1248] = "\u288B";
	unicode[348] = "\u288C";
	unicode[1348] = "\u288D";
	unicode[2348] = "\u288E";
	unicode[12348] = "\u288F";
	unicode[58] = "\u2890";
	unicode[158] = "\u2891";
	unicode[258] = "\u2892";
	unicode[1258] = "\u2893";
	unicode[358] = "\u2894";
	unicode[1358] = "\u2895";
	unicode[2358] = "\u2896";
	unicode[12358] = "\u2897";
	unicode[458] = "\u2898";
	unicode[1458] = "\u2899";
	unicode[2458] = "\u289A";
	unicode[12458] = "\u289B";
	unicode[3458] = "\u289C";
	unicode[13458] = "\u289D";
	unicode[23458] = "\u289E";
	unicode[123458] = "\u289F";
	unicode[68] = "\u28A0";
	unicode[168] = "\u28A1";
	unicode[268] = "\u28A2";
	unicode[1268] = "\u28A3";
	unicode[368] = "\u28A4";
	unicode[1368] = "\u28A5";
	unicode[2368] = "\u28A6";
	unicode[12368] = "\u28A7";
	unicode[468] = "\u28A8";
	unicode[1468] = "\u28A9";
	unicode[2468] = "\u28AA";
	unicode[12468] = "\u28AB";
	unicode[3468] = "\u28AC";
	unicode[13468] = "\u28AD";
	unicode[23468] = "\u28AE";
	unicode[123468] = "\u28AF";
	unicode[568] = "\u28B0";
	unicode[1568] = "\u28B1";
	unicode[2568] = "\u28B2";
	unicode[12568] = "\u28B3";
	unicode[3568] = "\u28B4";
	unicode[13568] = "\u28B5";
	unicode[23568] = "\u28B6";
	unicode[123568] = "\u28B7";
	unicode[4568] = "\u28B8";
	unicode[14568] = "\u28B9";
	unicode[24568] = "\u28BA";
	unicode[124568] = "\u28BB";
	unicode[34568] = "\u28BC";
	unicode[134568] = "\u28BD";
	unicode[234568] = "\u28BE";
	unicode[1234568] = "\u28BF";
	unicode[78] = "\u28C0";
	unicode[178] = "\u28C1";
	unicode[278] = "\u28C2";
	unicode[1278] = "\u28C3";
	unicode[378] = "\u28C4";
	unicode[1378] = "\u28C5";
	unicode[2378] = "\u28C6";
	unicode[12378] = "\u28C7";
	unicode[478] = "\u28C8";
	unicode[1478] = "\u28C9";
	unicode[2478] = "\u28CA";
	unicode[12478] = "\u28CB";
	unicode[3478] = "\u28CC";
	unicode[13478] = "\u28CD";
	unicode[23478] = "\u28CE";
	unicode[123478] = "\u28CF";
	unicode[578] = "\u28D0";
	unicode[1578] = "\u28D1";
	unicode[2578] = "\u28D2";
	unicode[12578] = "\u28D3";
	unicode[3578] = "\u28D4";
	unicode[13578] = "\u28D5";
	unicode[23578] = "\u28D6";
	unicode[123578] = "\u28D7";
	unicode[4578] = "\u28D8";
	unicode[14578] = "\u28D9";
	unicode[24578] = "\u28DA";
	unicode[124578] = "\u28DB";
	unicode[34578] = "\u28DC";
	unicode[134578] = "\u28DD";
	unicode[234578] = "\u28DE";
	unicode[1234578] = "\u28DF";
	unicode[678] = "\u28E0";
	unicode[1678] = "\u28E1";
	unicode[2678] = "\u28E2";
	unicode[12678] = "\u28E3";
	unicode[3678] = "\u28E4";
	unicode[13678] = "\u28E5";
	unicode[23678] = "\u28E6";
	unicode[123678] = "\u28E7";
	unicode[4678] = "\u28E8";
	unicode[14678] = "\u28E9";
	unicode[24678] = "\u28EA";
	unicode[124678] = "\u28EB";
	unicode[34678] = "\u28EC";
	unicode[134678] = "\u28ED";
	unicode[234678] = "\u28EE";
	unicode[1234678] = "\u28EF";
	unicode[5678] = "\u28F0";
	unicode[15678] = "\u28F1";
	unicode[25678] = "\u28F2";
	unicode[125678] = "\u28F3";
	unicode[35678] = "\u28F4";
	unicode[135678] = "\u28F5";
	unicode[235678] = "\u28F6";
	unicode[1235678] = "\u28F7";
	unicode[45678] = "\u28F8";
	unicode[145678] = "\u28F9";
	unicode[245678] = "\u28FA";
	unicode[1245678] = "\u28FB";
	unicode[345678] = "\u28FC";
	unicode[1345678] = "\u28FD";
	unicode[2345678] = "\u28FE";
	unicode[12345678] = "\u28FF";
}