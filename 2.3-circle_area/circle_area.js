function cal_circle_area(radius){
    let cirAria = Math.PI * radius * radius;
    console.log(cirAria);
    // console.log(toFixed(Math.PI * radius * radius));
    console.log(Math.round((cirAria + Number.EPSILON) * 100) / 100);
}
cal_circle_area(2);