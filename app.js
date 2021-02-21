const url = `https://restcountries.eu/rest/v2/all`;
fetch(url)
    .then(res => res.json())
    .then(data => {
        const countries = data;
        countries.forEach(country => {
            const displayCountries = document.getElementById('displayCountries');
            const countryDiv = document.createElement('div');
            countryDiv.className = 'row my-3 p-3 gx-5';
            countryDiv.innerHTML = `<div class="single-country col">
                                        <div class="p-3 border bg-light">
                                            <h2>Name : ${country.name}</h2>
                                            <h2>Capital : ${country.capital}</h2>
                                            <button type='button' onclick="countryDetails('${country.name}')">Details</button>
                                        </div>
                                    </div>`;
            displayCountries.append(countryDiv);
        });
    })

const countryDetails = countryName => {
    const countryUrl = `https://restcountries.eu/rest/v2/name/${countryName}`
    fetch(countryUrl)
        .then(res => res.json())
        .then(data => console.log(data[0].capital));
}