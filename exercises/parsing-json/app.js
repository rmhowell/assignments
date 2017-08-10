var xhr = new XMLHttpRequest();


    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200){
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        
        for(var i = 0; i <= data.objects[0].pokemon.length; i++) {
            var createEl = document.createElement("p");
            createEl.className = "poke";
            document.body.appendChild(createEl)
            createEl.innerHTML = data.objects[0].pokemon[i].name + ": " + data.objects[0].pokemon[i].resource_uri;
        }
        
    }
}



xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();