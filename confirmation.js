const confirmButton = document.querySelector(".confirm-button");
const selectedLocation = document.getElementById("selected-location");
const selectedInsurance = document.getElementById("selected-insurance");
const totalPrice = document.getElementById("total-price");
const gmap1 = document.getElementById("gmap1");
const gmap2 = document.getElementById("gmap2");
const gmap3 = document.getElementById("gmap3");
let basePrice = Number(
  document
    .getElementById("base-price")
    .innerHTML.replace(
      /[\$\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BD\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6]/,
      ""
    )
);

function calculateTotalPrice() {
  const location = document.querySelector(
    'input[name="delivery-location"]:checked'
  );
  const insurance = document.querySelector('input[name="insurance"]:checked');

  if (location && insurance) {
    selectedLocation.textContent = location.nextElementSibling.textContent;
    selectedInsurance.textContent = insurance.nextElementSibling.textContent;

    let totalPriceValue = basePrice;

    if (location.value === "loc1") {
      gmap1.removeAttribute("hidden");
      gmap2.setAttribute("hidden", true);
      gmap3.setAttribute("hidden", true);
    } else if (location.value === "loc2") {
      totalPriceValue += 20;
      gmap1.setAttribute("hidden", true);
      gmap2.removeAttribute("hidden");
      gmap3.setAttribute("hidden", true);
    } else if (location.value === "loc3") {
      gmap1.setAttribute("hidden", true);
      gmap2.setAttribute("hidden", true);
      gmap3.removeAttribute("hidden");
      totalPriceValue += 40;
    }

    if (insurance.value === "insurance2") {
      totalPriceValue += 200;
    }

    totalPrice.textContent = totalPriceValue + "€";
  }
}

const deliveryLocations = document.querySelectorAll(
  'input[name="delivery-location"]'
);
deliveryLocations.forEach(function (location) {
  location.addEventListener("change", calculateTotalPrice, { passive: true });
});

const insurances = document.querySelectorAll('input[name="insurance"]');
insurances.forEach(function (insurance) {
  insurance.addEventListener("change", calculateTotalPrice, { passive: true });
});
