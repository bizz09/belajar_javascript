// var angka = prompt('masukkan angka : ')

// switch ( angka ) {
//     case '1':
//         alert('anda memasukkan angka 1')
//         break;

//     default:
//         alert('anda tidak mamasukkan angka')
//         break;
// }

var item = prompt('Masukkan nama makanan / minuman : \n ( Contoh : nasi, susu, daging, hamburger, softdrink )')

switch (item) {
    case 'nasi':
        alert('anda memasukkan makanan yang SEHAT !')
        break;
    case 'susu':
        alert('anda memasukkan minuman yang SEHAT !')
        break;
    case 'daging':
        alert('anda memasukkan makanan yang SEHAT !')
        break;
    case 'hamburger':
        alert('anda memasukkan makanan yang tidak SEHAT !')
        break;
    case 'softdrink':
        alert('anda memasukkan minuman yang tidak SEHAT !')
        break;

    default:
        alert('anda memasukkan makanan / minuman yang salah')
        break;
}