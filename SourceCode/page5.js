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
<<<<<<< HEAD
    element.value += username + ': \n';
=======
>>>>>>> 37921022aa44f7a422debd3b71f62e198d09c303
    element.style = ""
    for (var i = 0; i < parseInt(star); i++) { element.value += '⭐'; }
    element.value += "\n" + content;
    element.readOnly = true;
    return element;
}