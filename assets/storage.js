const CACHE_KEY = "ulasan_history";

function checkForStorage() {
    return typeof (Storage) !== "undefined";
}

function putHistory(data) {
    if (checkForStorage()) {
        let historyData = null;
        if (localStorage.getItem(CACHE_KEY) === null) {
            historyData = [];
        } else {
            historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
        }

        historyData.unshift(data);

        if (historyData.length > 5) {
            historyData.pop();
        }

        localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
    }
}


function showUlasan() {
    if (checkForStorage()) {
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    } else {
        return [];
    }
}

function renderUlasan() {
    const historyData = showUlasan();
    let historyList = document.querySelector("#listUlasan");

    // selalu hapus konten HTML pada elemen historyList agar tidak menampilkan data ganda
    historyList.innerHTML = "";

    for (let history of historyData) {
        let row = document.createElement('tr');
        row.innerHTML = "<td>" + history.nama + "</td>";
        row.innerHTML += "<td>" + history.pesan + "</td>";

        historyList.appendChild(row);
    }
}

renderUlasan();