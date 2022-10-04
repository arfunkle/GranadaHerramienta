document.addEventListener("DOMContentLoaded", () => {
    fetch("./words.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        // console.log(data);
        document.getElementById("start").addEventListener("click", () => {
            var rand = 0;
            for (var i = 0; i < 5; i++) {
                // console.log(Object.keys(data).length);
                rand = Math.floor(Math.random() * Object.keys(data).length);
                document.getElementById(i).children[0].innerHTML = Object.values(data)[rand];
                document.getElementById(i).children[2].innerHTML = "";
            }
            document.getElementById("questions").removeAttribute("hidden");
            document.getElementById("finish").addEventListener("click", () => {
                for (var i = 0; i < 5; i++) {
                    value = document.getElementById(i).children[0].innerHTML.toLowerCase();
                    key = document.getElementById(i).children[1].children[0].value;
                    correction = document.getElementById(i).children[2];
                    if (key in data) {
                        if (data[key]==value) {
                            correction.innerHTML = "Correcto";
                            correction.style.color = "green";
                        }
                    } else {
                        correction.innerHTML = "Incorrecto";
                        correction.style.color = "red";
                    }
                }
            });
        });
        document.getElementById("enter").addEventListener("click", () => {
            word = document.getElementById("word").value.toLowerCase();
            definition = document.getElementById("definition").value;
            response = document.getElementById("response");
            response.innerHTML = "";
            if (word in data) {
                response.innerHTML = "Lo siento, ya tenemos este palabra.";
            } else {
                data[word] = definition;
                console.log(data);
                response.innerHTML = "¡Gracias!";
                $.ajax({
                    url: "./interactions.php",
                    datatype: "json",
                    type: "POST",
                    data: {json: JSON.stringify(data)},
                    success: function () {alert("Thanks!"); },
                    failure: function() {alert("Error!");}
                })
                
            }
        })

    });
})

