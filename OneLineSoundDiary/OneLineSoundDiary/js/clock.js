 function clock()
{
    var twoDigit =function(num){
	var digit
	if( num < 10 ){
	    digit = "0" + num; }
	else { digit = num; }
	return digit;
    }
    var weeks = new Array("日","月","火","水","木","金","土");
    var now = new Date();

    var year = now.getFullYear();
    var month = twoDigit(now.getMonth() + 1);
    var day = twoDigit(now.getDate());
    var week = weeks[now.getDay()];

    var hour = twoDigit(now.getHours());
    var minute = twoDigit(now.getMinutes());
    var second = twoDigit(now.getSeconds());
    
    document.getElementById("date").textContent = year + "年" + month + "月" + day + "日 (" + week + ")";
}
setInterval(clock, 1000);
