
function keuntungan(hargaJual, hargaBeli, ...biayaLainLain) {
  console.log(`Harga Pembelian: ${hargaBeli}`);
  console.log(`Harga Penjualan: ${hargaJual}`);
  console.log(biayaLainLain)

  const keuntunganKotor = hargaJual - hargaBeli;
  const JumlahBiayaLainLain = biayaLainLain.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  const keuntunganBersih = keuntunganKotor - JumlahBiayaLainLain;
  console.log(`Keuntungan Bersih: ${keuntunganBersih}`);
}

const keuntunganJualKambing = keuntungan(3000, 2000, 0, 500);
