function pilihComputer() {
  let range = 9;
  let awal = 1;
  let angkaBaru = Math.floor(Math.random() * range) + awal;

  if (angkaBaru <= 3) return 'gunting';
  else if (angkaBaru >= 6) return 'batu';
  else return 'kertas';

}

function getHasil(player, comp) {
  if (player == comp) return 'SERI Bro';
  else if (player == 'gunting') {
    return (comp == 'batu') ? 'KALAH !' : 'MENANG !';
  } else if (player == 'batu') {
    return (comp == 'kertas') ? 'KALAH !' : 'MENANG !';
  } else if (player == 'kertas') {
    return (comp == 'gunting') ? 'KALAH !' : 'MENANG !';
  } else return 'SALAH KLIK!';
}

function putar() {
  const imgComp = document.querySelector('.img-komputer');
  const gambar = ['gunting', 'batu', 'kertas'];
  let i = 0;
  const waktuAwal = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuAwal > 1000) {
      clearInterval();
      return;
    }
    imgComp.setAttribute('src', 'img/' + gambar[i++] + '.jpg');
    if (i == gambar.length) i = 0;
  }, 100)
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(element => {
  element.addEventListener('click', function () {
    const pilihanPlayer = element.className;
    const pilihanComputer = pilihComputer();
    const hasil = getHasil(pilihanPlayer, pilihanComputer);

    const info = document.querySelector('.info');
    const imgComp = document.querySelector('.img-komputer');

    putar();
    setTimeout(function () {
      info.innerHTML = hasil;
      imgComp.setAttribute('src', 'img/' + pilihanComputer + '.jpg');
    }, 1000)

  })
})





















// Cara Lama (Karena harus menyeleksi 3 gambar)

// const pGunting = document.querySelector('.gunting ');
// const info = document.querySelector('.info');
// const imgComp = document.querySelector('.img-komputer');

// pGunting.addEventListener('click', function () {
//   const pilihanPlayer = pGunting.className;
//   const pilihanComputer = pilihComputer();
//   const hasil = getHasil(pilihanPlayer, pilihanComputer);

//   info.innerHTML = hasil;

//   imgComp.setAttribute('src', 'img/' + pilihanComputer + '.jpg');
// })

// Cara cepat