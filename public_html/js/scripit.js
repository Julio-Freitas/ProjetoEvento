
let url = 'https://api.sympla.com.br/public/v3/events';

let headers = new Headers();

//headers.append('Content-Type', 'text/json');
headers.append('s_token', 'f4b1cdb021e908423810debc0720b9075726d9863487f757f37b1dfdaf6050e5');

fetch(url, {method:'GET',
        headers: headers,
        //credentials: 'user:passwd'
       })
.then(response => response.json())
.then(result =>{
    for(let obj of result){
        //Trabalhar com objeto
    }
});
//.done();

function parseJSON(response) {
return response.json()
}