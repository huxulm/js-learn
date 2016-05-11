(function () {
    var d1 = new Date();
    var d2 = new Date();
    var d3 = new Date(2016, 5, 14, 10, 25, 59, 29);

    console.log(d1);
    console.log(d2);
    console.log(d3);
    
    // Date.now()   return time in mills  
    // console.log(Date.now());
    console.log(new Date(Date.now()));
    
    // Date.parse() return time in mills
    // console.log(Date.parse('2016-5-11 05:20:02'));   // 1462915202000
    console.log(new Date(Date.parse('2016-5-11 05:20:02')));
    
    // JavaScript Date instances
    // All Date instances inherit from Date.prototype. 
    // The prototype object of the Date constructor can be modified to affect all Date instances. 
    console.log('Date.prototype.getDate()' + d2.getDate());
    console.log('Date.prototype.getDay()' + d2.getDay());
    console.log('Date.prototype.getFullYear()' + d2.getFullYear());
    console.log('Date.prototype.getHours()' + d2.getHours());
    console.log('Date.prototype.getMilliseconds()' + d2.getMilliseconds());
    console.log('Date.prototype.getMinutes()' + d2.getMinutes());
    console.log('Date.prototype.getMonth()' + d2.getMonth());
    console.log('Date.prototype.getSeconds()' + d2.getSeconds());
    console.log('Date.prototype.getTime()' + d2.getTime());
    console.log('Date.prototype.getTimezoneOffset()' + d2.getTimezoneOffset());
    console.log('Date.prototype.getUTCDate()' + d2.getUTCDate());
    console.log('Date.prototype.getUTCDay()' + d2.getUTCDay());
    console.log('Date.prototype.getUTCFullYear()' + d2.getUTCFullYear());
    console.log('Date.prototype.getUTCHours()' + d2.getUTCHours());
    console.log('Date.prototype.getUTCMilliseconds()' + d2.getUTCMilliseconds());
    console.log('Date.prototype.getUTCMinutes()' + d2.getUTCMinutes());
    console.log('Date.prototype.getUTCMonth()' + d2.getUTCMonth());
    console.log('Date.prototype.getUTCSeconds()' + d2.getUTCSeconds());
    
    // use Date.prototype.getFullYear() instead
    // console.log('Date.prototype.getYear()' + Date.prototype.getYear());
    
    // Conversion getter
    console.log('d2.toDateString()' + d2.toDateString());
    console.log('d2.toISOString()' + d2.toISOString());
    console.log('d2.toJSON()' + d2.toJSON());
    console.log('d2.toLocaleDateString()' + d2.toLocaleDateString());
    console.log('d2.toLocaleString()' + d2.toLocaleString());
    console.log('d2.toLocaleTimeString()' + d2.toLocaleTimeString());
    console.log('d2.toString()' + d2.toString());
    console.log('d2.toTimeString()' + d2.toTimeString());
    console.log('d2.toUTCString()' + d2.toUTCString());
    console.log('d2.valueOf()' + d2.valueOf());
}).call(this);