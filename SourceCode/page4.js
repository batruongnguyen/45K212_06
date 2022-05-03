const tbl = document.getElementById('rate-table');

fetchData()

function getRow(data) {
    var obj = JSON.parse(JSON.stringify(data) || "[]");
    var res = [];
    // for(var i in obj) {
    //   res.push(obj[i]);
    // }
    for (i = 0; i < obj.length; i++) {
        var tmp = [];
        var star = "";
        console.log(obj[i][2]);
        for (var j = 0; j < parseInt(obj[i][2]); j++) { star += '⭐'; }
        tmp[i] = {
            0: obj[i][5]["phone"],
            1: obj[i][3],
            2: star,
            3: obj[i][4],
        };
        res.push(tmp[i]);
    }
    return res;
}

async function fetchData() {
    const response = await fetch("fetchRate.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data);  
            if (typeof data == 'object') {
                getRow(data).forEach(note => {
                    var row = tbl.insertRow(tbl.rows.length),
                        i;
                    console.log(tbl.rows[0].cells.length);
                    for (i = 0; i < tbl.rows[0].cells.length; i++) {
                        createCell(row.insertCell(i), note[i], 'row');
                    }
                })
            }

        })
        .catch((error) => {
            console.error('Error:', error);
        });;
}

// create DIV element and append to the table cell
function createCell(cell, text, style) {
    var div = document.createElement('div'), // create DIV element
        txt = document.createTextNode(text); // create text node
    div.appendChild(txt); // append text node to the DIV
    div.setAttribute('class', style); // set DIV class attribute
    div.setAttribute('className', style); // set DIV class attribute for IE (?!)
    cell.appendChild(div); // append DIV to the table cell
}