fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((res) => {
    let table = document.querySelector("#flags");
    res.forEach((el) => {
      let tr = document.createElement("tr");
      let country = document.createElement("td");
      let region = document.createElement("td");
      let population = document.createElement("td");
      let flags = document.createElement("td");
      let img = document.createElement("img");

      tr.append(country);
      tr.append(region);
      tr.append(population);
      tr.append(flags);
      flags.append(img);
      table.append(tr);

      country.textContent = el.name.common;
      region.textContent = el.region;
      population.textContent = el.population;
      img.src = el.flags.svg;
      img.style.width = "70px"
    });
  });
console.log(data);

