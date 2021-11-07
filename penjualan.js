function Hasil() {
    var buah = document.getElementById('buah').value;
    var kg = document.getElementById('kg').value;
    var ds = document.getElementById('ds').value;
    total(buah, kg, ds);
}

function total(buah, kg, ds) {
    var hargaBuah = getHargaBuah(buah);
    document.getElementById('total').innerHTML = ("Jenis buah : " + buah + "<br>");
    document.getElementById('total').innerHTML += ("Harga buah/kg : Rp" + hargaBuah + "<br>");
    document.getElementById('total').innerHTML += ("Jumlah kg : " + kg + "kg<br>");
    document.getElementById('total').innerHTML += ("Potongan diskon : " + ds + "%<br>");
    document.getElementById('total').innerHTML += ("Besar diskon : Rp" + (ds / 100) * (hargaBuah * kg) + "<br>");

    document.getElementById('total').innerHTML += ("<br>Sub total : Rp" + (hargaBuah * kg) + "<br>");
    document.getElementById('total').innerHTML += ("Total : Rp" + ((hargaBuah * kg) - (ds / 100) * (hargaBuah * kg)));
}

function getHargaBuah(buah) {
    var hargaBuah;

    if (buah == 'Apel') {
        hargaBuah = 23000;
    } else if (buah == 'Pisang') {
        hargaBuah = 12000;
    } else if (buah == 'Anggur') {
        hargaBuah = 35000;
    } else if (buah == 'Mangga') {
        hargaBuah = 17000;
    } else if (buah == 'Rambutan') {
        hargaBuah = 15000;
    }
    return hargaBuah;
}