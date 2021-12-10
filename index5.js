function pow (x, n) {
    let y=x;
    while ( n>1 ){
        x *= y;
        n--;
    }
    return x;
}

console.log ( pow(3, 3) );

