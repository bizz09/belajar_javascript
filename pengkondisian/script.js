var angka = prompt('masukkan angka : ')

if (angka % 2 === 0) {
    alert(angka + ' adalah bilangan GENAP')
} else if ( angka % 2 === 1 ) {
    alert(angka + ' adalah bilangan GANJIL')
} else {
    alert('Yang anda masukkan bukan angka :3')
}

// for(var angkot = 1; angkot <= 10; angkot++) {
//     if (angkot <= 6 ) {
//         console.log('Angkot no. ' + angkot + ' Berjalan dengan baik')
//     } else {
//         console.log('Angkot no. ' + angkot + ' sedang tidak berjalan')
//     }
// }