function* map(iter, mapper) {
    for (const v of iter) {
        yield mapper(v);
    }
}

function* filter(iter, test) {
    for (const v of iter) {
        if (test(v)) {
            yield v;
        }
    }
}

function* take(n, iter) {
    for (const v of iter) {
        if (n <= 0) return;
        yield v;
        n--;
    }
}

const values = [1,2,3,4,5,6,7,8,9,10];
const result = take(3, map(filter(values, n => n % 2 === 0), n => n * 10));
console.log([...result]);


