document.querySelector('.get-jokes').addEventListener('click', getJokes);


//document.querySelector('.get-weather').addEventListener('click', getWeather)





function getJokes() {




    const xhr = new XMLHttpRequest();

    const firstname = 'name';


    xhr.open('GET', 'http://api.icndb.com/jokes/random/1', true);





    xhr.onload = function() {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);

            response.value.forEach(element => {
                    document.querySelector('.joke').innerHTML = element.joke;
                }

            );



        }
    }

    xhr.send();




}