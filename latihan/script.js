var string = '';

for( var i = 0; i < 10; i++) {
    for( var a = 0; a <= i; a++) {
        string += '* '
    }
    string += '\n'
}

for( var i = 10; i >= 0; i--) {
    for( var a = 0; a < i; a++) {
        string += '* '
    }
    string += '\n'
}

console.log(string)