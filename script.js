let cel = document.getElementById("cel");
let Fah = document.getElementById("Fara");

cel.addEventListener("input", function () {
  var valcel = this.value;
  let ans = (valcel * 9) / 5 + 32;
  Fah.value = ans.toFixed(2);
});

Fah.addEventListener("input", function () {
  let valfan = this.value;
  var anscel = ((valfan - 32) * 5) / 9;
  cel.value = anscel.toFixed(2);
});
