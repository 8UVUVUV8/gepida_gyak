/*
File: app.js
Author: Szekeres András
Copyright: 2023, Szekeres András
Group: Szoft I-2 N
Date: 2023-05-11
Github: https://github.com/8UVUVUV8/
Licenc: GNU GPL
*/

const kiskutya = {
    tbody: document.querySelector('#tbody')
};

// ^ bekötések objektumal -----------------------------------------------------------------------------------


const state = {
    host: 'http://localhost:8000/',
    bikes: []
};

// ^ oldal változoi -----------------------------------------------------------------------------------------



window.addEventListener(
    'load', init
);

// ^ ablak betöltése utána script metodok inditása ----------------------------------------------------------

function init(){
get_bikes()
}

// ^  scrip metodok ------------------------------------------------------------------------------------------

function get_bikes(){
    let endpoint = 'bikes'
    let url = state.host + endpoint;
    fetch(url)
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(result => 
        {
        state.bikes = result;
        console.log('2.then result = ' + result)
        render_bikes();
        },
    )
;}

// ^ adatok lekérése az api tol ----------------------------------------------------------------------------

function render_bikes(){
    var rows = '';
    console.log('render_bike function')
    state.bikes.forEach( bike =>{
        var row = `
        <tr>
            <td>${bike.id}</td>
            <td>${bike.name}</td>
            <td>${bike.wheel}</td>
            <td>${bike.usage}</td>
            <td>${bike.price}</td>
        </tr>
        `;
        rows += row;
        console.log(bike.name)

    })
    kiskutya.tbody.innerHTML = rows;
}

// ^ adatok feltöltése a táblázatba -----------------------------------------------------------------------
