const countryInfo = {
  Pakistan: {
    Punjab: ["Lahore", "Faisalabad", "Multan", "Rawalpindi", "Gujranwala"],
    Sindh: ["Karachi", "Hyderabad", "Sukkur", "Larkana"],
    KPK: ["Peshawar", "Mardan", "Swat", "Abbottabad"],
    Balochistan: ["Quetta", "Khuzdar", "Turbat", "Gwadar"],
    Gilgit_Baltistan: ["Gilgit", "Skardu", "Hunza", "Nagar"],
    Azad_Kashmir: ["Muzaffarabad", "Mirpur", "Rawalakot"]
  },
  India: {
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Delhi: ["New Delhi", "Delhi"],
    Tamil_Nadu: ["Chennai", "Coimbatore"]
  },
  Afghanistan: {
    Kabul: ["Kabul City", "Paghman"],
    Kandahar: ["Kandahar City", "Dand"],
    Herat: ["Herat City", "Injil"]
  }
};
function resetSelect(select, placeholder) {
  select.innerHTML = `<option value="">${placeholder}</option>`;
}

function populateSelect(select, items) {
  items.forEach(item => {
    select.add(new Option(item, item));
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const countrySelect = document.getElementById("country");
  const provinceSelect = document.getElementById("Province");
  const citySelect = document.getElementById("city");

  resetSelect(countrySelect, "Select Country");
  resetSelect(provinceSelect, "Select Province");
  resetSelect(citySelect, "Select City");

  populateSelect(countrySelect, Object.keys(countryInfo));

  countrySelect.addEventListener("change", () => {
    resetSelect(provinceSelect, "Select Province");
    resetSelect(citySelect, "Select City");

    if (!countrySelect.value) return;

    populateSelect(
      provinceSelect,
      Object.keys(countryInfo[countrySelect.value])
    );
  });

  provinceSelect.addEventListener("change", () => {
    resetSelect(citySelect, "Select City");

    if (!provinceSelect.value) return;

    populateSelect(
      citySelect,
      countryInfo[countrySelect.value][provinceSelect.value]
    );
  });
});
