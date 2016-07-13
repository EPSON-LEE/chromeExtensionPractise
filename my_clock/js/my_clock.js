function my_clock(el){

    var myDate = new Date();

    var y = myDate.getFullYear();
    var mo = myDate.getMonth() + 1;
    var d = myDate.getDate();

    var h = myDate.getHours();
    var m = myDate.getMinutes();
    var s = myDate.getSeconds();

    h = h>=10?h:('0' + h);
    m = m>=10?m:('0' + m);
    s = s>=10?s:('0' + s);

    el.innerHTML = y + "-" + mo + "-" + d + "<br>" + h+":"+m+":"+s;

    setTimeout(function(){my_clock(el)});
}
    var clock_div = document.getElementById('clock_div');
    my_clock(clock_div);