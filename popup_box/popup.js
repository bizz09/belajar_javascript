// contoh pop up 1
// alert('hello') 

// contoh pop up 2
// var nama = prompt('masukkan nama');
// alert('hello '+ nama);

// contoh alert 3
// confirm('kamu nanya??') //contoh 1

// alert confirm jika menggunakan pengkondisian
// var test = confirm('kamu nanya??')
// if ( test === true ) {
//     alert('kamu menekan OK!')
// } else {
//     alert('kamu menekan CANCEL!')
// }

// Contoh program sederhana pop up box
alert('Selamat datang')
var lagi = true

while (lagi === true) {
    var nama = prompt('Masukkan nama kamu : ')
    alert('hallo ' + nama)

    lagi = confirm('Coba Lagi')
}
 alert('Terima kasih ' + nama)