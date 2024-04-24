const checkTriangleType = (a, b, c) => {
    if (a === b && b === c) 
        return 'Equilateral';
    if(a ===b || b === c || a === c)
        return 'Isosceles';
    else
        return 'Scalene';
}
console.log(checkTriangleType(3, 3, 3,));
console.log(checkTriangleType(3, 5, 3,));
console.log(checkTriangleType(3, 8, 6,));