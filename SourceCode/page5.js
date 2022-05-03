const noteContainer = document.getElementById('board');


fetchHighData()

function getNode(data) {
    var obj = JSON.parse(JSON.stringify(data) || "[]");
    var res = [];
    var result = [];
    for (var i in obj) res.push(obj[i]);
    // console.log(obj);
    return res;
}

async function fetchHighData() {
    const response = await fetch("fetchHighData.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data);  
            if (typeof data == 'object') {
                getNode(data).forEach(note => {
                    const noteElement = createNote(note[0], note[2], note[3], note[5]['username']);
                    noteContainer.insertBefore(noteElement, null);
                })
            }

        })
        .catch((error) => {
            console.error('Error:', error);
        });;
}

function createNote(id, star, content, username) {
    const element = document.createElement("textarea");
    element.classList.add("note");
    element.value += username + ': \n';
    element.style = "height: 200px; box-sizing: border-box; padding: 16px; border: none; border-radius: 10px; box-shadow: 0 0 7px rgba(0, 0, 0, 0.15); resize:none; font-family: sans-serif; font-size:16px;"
    for (var i = 0; i < parseInt(star); i++) { element.value += '⭐'; }
    element.value += "\n" + content;
    element.readOnly = true;
    return element;
}