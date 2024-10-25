let a = +prompt("a-nin ededini qeyd edin: ");
let b = +prompt("b-nin ededini qeyd edin: ");
let c = +prompt("c-nin ededini qeyd edin: ");
let sqrt = (Math.sqrt((b ** 2 - 4 * a * c), 2))


let x1 = Math.round(-b + sqrt) / 2 * a * c
let x2 = Math.round(-b - sqrt) / 2 * a * c


if ((b ** 2) < (4 * a * c)) {
    document.getElementById("x1").innerHTML = `(b**2 - 4*a*c) bu dustura gore b-nin kvadrati 4ac den boyuk olmalidir, yazdigiz ededlere gore b-nin kvadrati 4ac den balaca olur ona gore de x1 nen x2 tapilmir`
} else {
    document.getElementById("x1").innerHTML = `Eger a-${a}, b-${b}, c ise-${c} olarsa onda x1-${x1} olar`
    document.getElementById("x2").innerHTML = `Eger a-${a}, b-${b}, c ise-${c} olarsa onda x1- (${x2}) olar`
}