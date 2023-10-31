function ubahKondisiLampu() {
  let teksTombol = document.getElementById("tombol").innerHTML;
  if (teksTombol == "ON") {
    document.getElementById("lampu").src = "lampu_nyala.png";
    document.getElementById("tombol").innerHTML = "Matikan";
  } else {
    document.getElementById("lampu").src = "lampu_mati.png";
    document.getElementById("tombol").innerHTML = "ON";
  }
}