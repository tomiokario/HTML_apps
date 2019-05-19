//契約データ量(G)
var monthData = 20;
//データリセット日
var resetDate = 11;

setInterval(clock, 1000);

function clock(){
    var now   = new Date();
    var year  = now.getFullYear();
    var month = now.getMonth();
    var day   = now.getDate(); 
    
    daysData(resetDate, monthData, year, month, day);
}


function daysData(resetDate, monthData, year, month, day){

    // clock_dateの書き換え
    display("clock_date",  year + "年" + month + "月" + day + "日");

    // 月調整
    if(day <= resetDate){
        month = month - 1;
    }


    // 閏年は無視する
    // 日数:days
    var days;
    if(month==2){
        days = 28;
    }
    else if(month==4 || month==6 || month==9 || month==11){
        days = 30;
    }
    else{
        days = 31;
    }


    // 残り日数
    var remainingDays;
    if(resetDate < day){
        remainingDays = days - day + resetDate;
    }
    else{
        remainingDays = resetDate - day;
    }


    // 1日あたりのデータ量
    var dayData = monthData / days;


    // 残りデータ量
    var remainingData = remainingDays * dayData;


    // HTML書き換え
    display("remaining_days", round(remainingDays) + "日");
    display("data_per_days", round(dayData) + "GB");
    display("remaining_data", round(remainingData) + "GB");;
}


// 丸めの幅0.01で四捨五入
function round(num){
    num = 100 * num;
    num = Math.round(num);
    num = num / 100;
    return num;
}



function display(id, message){
    document.getElementById(id).textContent = message;
}

