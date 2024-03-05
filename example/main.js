"use strict";
const url = 'https://cartes.io/api/maps';
const headers = {
    "Accept": "application/json",
};
async function getParkData() {
    try {
        const resp = await fetch(url, { headers: headers });
        if (!resp.ok)
            throw new Error("Network Error");
        const YoseThingsData = await resp.json();
        console.log(YoseThingsData);
    }
    catch (e) {
        console.error(e);
    }
}
getParkData();
