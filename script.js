let countryInfo = {
  Pakistan: {
    Punjab: { Lahore: [], Faisalabad: [], Multan: [], Rawalpindi: [], Gujranwala: [] },
    Sindh: { Karachi: [], Hyderabad: [], Sukkur: [], Larkana: [] },
    KKP: { Peshawar: [], Mardan: [], Swat: [], Abbottabad: [] },
    Balochistan: { Quetta: [], Khuzdar: [], Turbat: [], Gwadar: [] },
    Gilgit_Baltistan: { Gilgit: [], Skardu: [], Hunza: [], Nagar: [] },
    Azad_Kashmir: { Muzaffarabad: [], Mirpur: [], Rawalakot: [] }
  },
  India: {
    Maharashtra: { Mumbai: [], Pune: [], Nagpur: [] },
    Delhi: { New_Delhi: [], Delhi: [] },
    Tamil_Nadu: { Chennai: [], Coimbatore: [] }
  },
  Afghanistan: {
    Kabul: { Kabul_City: [], Paghman: [] },
    Kandahar: { Kandahar_City: [], Dand: [] },
    Herat: { Herat_City: [], Injil: [] }  
  }
};

window.onload = function() {
  const countrySelect = document.getElementById('country');
  const provinceSelect = document.getElementById('Province');
  const citySelect = document.getElementById('city');


  for (const country in countryInfo) {
    countrySelect.options[countrySelect.options.length] = new Option(country, country);
  }


  countrySelect.onchange = function() {
 
    provinceSelect.length = 1; 
    citySelect.length = 1; 

    if (this.value !== "") {
      const provinces = countryInfo[this.value];
      for (const province in provinces) {
        provinceSelect.options[provinceSelect.options.length] = new Option(province, province);
      }
    }
  };


  provinceSelect.onchange = function() {

    citySelect.length = 1; 

    if (this.value !== "") {
      const selectedCountry = countrySelect.value;
      const cities = countryInfo[selectedCountry][this.value];
      for (const city in cities) {
        citySelect.options[citySelect.options.length] = new Option(city, city);
      }
    }
  };
};
