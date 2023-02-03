// pengulangan menggunakan for

var angkotBeroperasi = 7;
var noAngkot = 1
var jmlAngkot = 10

while (noAngkot <= angkotBeroperasi) {
    console.log('Angkot no. ' + noAngkot + ' beroperasi dengan baik.')
    noAngkot++
}

for (var nilaiAwal = angkotBeroperasi + 1; nilaiAwal <= jmlAngkot; nilaiAwal++) {
    console.log('Angkot no. ' + nilaiAwal + ' sedang tidak beroperasi.');
}

