// 무한대
function* naturalNumbers() {
    let v = 1;
    while (true) {
        yield v++;
    }
}

const values2 = naturalNumbers();

const result2 = take(3, map(filter(values2, n => n % 2 === 0), n => n * 10));
console.log([...result2]);