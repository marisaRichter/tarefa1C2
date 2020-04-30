var html = "";
function calcular(){
	$(".table tbody").html("");
	var n = $("#rets").val();
	var pt = 17 * 4;
	console.log("PT: " + pt + " - n " + n);
	var c = new Array();
	var f = new Array();
	var a = 0;
	var an = 0;
	var dx = 3/n;
	html += "<tr>"+
					"<th>" + n + "</th>";
	
	for(var i = 1; i <= n; i++){
		c[i] = (i - 1 + (pt/100))*(dx);
		f[i] = 3-(Math.pow(c[i],2))/3;
		a = a + (f[i] * dx);
	}
	
	an = ( 6 + ( 9 / ( 2 * n ) ) - ( 3 / ( 2 * Math.pow(n,2) ) ) + (( ( 9 * pt ) / 10000 ) * (1/n)) * ( -100 + ( 100/n ) - ( pt/n ) ) );
	html += "<th>" + a + "</th>";
	html += "<th>" + an + "</th></tr>";
	$(".table tbody").html(html);
	console.log("A = " + a);
}