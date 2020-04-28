var html = "";
function calcular(){
	$(".table tbody").html("");
	var n = $("#rets").val();
	var pt = 17 * 4;
	console.log("PT: " + pt + " - n " + n);
	var c = new Array();
	var f = new Array();
	var a = 0;
	var dx = 3/n;
	html += "<tr>"+
					"<th>" + n + "</th>";
	
	for(var i = 1; i <= n; i++){
		c[i] = (i - 1 + (pt/100))*(dx);
		f[i] = 3-(Math.pow(c[i],2))/3;
		a = a + (f[i] * dx);
	}
	html += "<th>" + a + "</th></tr>";
	$(".table tbody").html(html);
	console.log("A = " + a);
}