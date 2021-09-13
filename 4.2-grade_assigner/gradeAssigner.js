function score(numberScore) {
    if (numberScore >= 0 && numberScore <= 64)
        return "F";
    if (numberScore >= 65 && numberScore <= 69)
        return "D";
    if (numberScore >= 70 && numberScore <= 79)
        return "C";
    if (numberScore >= 80 && numberScore <= 89)
        return "B";
    if (numberScore >= 90 && numberScore <= 100)
        return "A";
}

console.log(score(100));