function writealgodemo1() {
    var side_a = Math.random() * 10 + 5;
    var side_b = Math.random() * 10 + 5;
    document.write("<p>side a=" + side_a + "</p><p>side b=" + side_b + "</p>");
    document.write("<p>Площадь квадрата" + side_a * side_a + "</p>");
    document.write("<p>Обьем куба" + side_a * side_a * side_a + "</p>");
    document.write("<p>Площадь прямоугольника" + side_a * side_b + "</p>");
}

function writealgodemo2() {
    var side_a = Math.random() * 10 + 5;
    var side_b = Math.random() * 10 + 5;
    document.write("<p>side a=" + side_a + "</p><p>side b=" + side_b + "</p>");
    document.write("<p>Площадь прямоугольного треугольника" + side_a * side_b / 2 + "</p>");
}

function writealgodemo3() {
    var radius = Math.random() * 10 + 5;
    var square = Math.PI * radius * radius;
    document.write("<p>Radius= " + radius + "</p>");
    document.write("<p>Площадь круга" + square + "</p>");
}