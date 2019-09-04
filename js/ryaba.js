const dataURL = "https://api.myjson.com/bins/jcmhn";
let Message = "";

function handleButton() {
	$.getJSON(dataURL, handData);
}

function textParsing(item, index) {
	
	item = item.replace("{var1}", $("input[name=var1]")[0].value);
	item = item.replace("{var2}", $("input[name=var2]")[0].value);
	item = item.replace("{var3}", $("input[name=var3]")[0].value);
	item = item.replace("{var4}", $("input[name=var4]")[0].value);
	item = item.replace("{var5}", $("input[name=var5]")[0].value);
	item = item.replace("{var6}", $("input[name=var6]")[0].value);
	item = item.replace("{speach}", $("input[name=speach]")[0].value);

	Message = Message + item + "<BR>";
}

function handData(arg) {
   arg["text"].forEach(textParsing);
   $("#result").html(Message);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
