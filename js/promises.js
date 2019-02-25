window.addEventListener('load', function(){
    const cl = console.log;
    cl("**************");
    let zoo = [];

    function getClass(obj){
        return Array.prototype.toString.call(obj).slice(8, -1);
    }

    function showSpecies(data){
        data[Object.keys(data)[0]].forEach(item => zoo.push(item.species));
    }

    function get(url){
        return new Promise((resolve, reject) => {
            const xhttp = new XMLHttpRequest();
            xhttp.open("GET", url, true);
            xhttp.onload = () => {
                if(xhttp.status == 200 && xhttp.readyState == 4){
                    resolve(JSON.parse(xhttp.response));
                } else {
                    reject(xhttp.statusText);
                }
            };
            xhttp.onerror = function(){
                reject(xhttp.statusText);
            };
            xhttp.send();
        });
    }

    const promise = get("data/birds.json");
    promise.then(function(birds){
        showSpecies(birds);
        return get("data/rodents.json");
    }).then(function(rodents){
        showSpecies(rodents);
        return get("data/other.json");
    }).then(function(other){
        showSpecies(other);
        cl(zoo);
    }).catch(function(error){
        cl(`Error: ${error}`);
    });

});