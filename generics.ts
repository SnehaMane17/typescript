type keyValuepair<K, V> = {
    key: K;
    value: V
}

let stringNumberPair: keyValuepair<string, number> = {
    key: 'age',
    value: 20
}

let numberArrayPair: keyValuepair<number, string[]> = {
    key: 1,
    value: ['test',]
}