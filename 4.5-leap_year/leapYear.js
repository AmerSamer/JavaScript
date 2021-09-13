function isLeap(year){
    return (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0));
}

let leapYear = isLeap(2012);

if(leapYear){
    console.log("It is indeed a leap year.");
}else{
    console.log("This is not a leap year.");
}


