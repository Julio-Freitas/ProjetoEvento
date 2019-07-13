$(function(){
   /** scroll  */
   $('.scroll').click(function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop:$(this.hash).offset().top
        },800)
   });

   $('.menu-toggle').click(function(){
       $('nav.menu').slideToggle();
   })
});


/*
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


let headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('s_token','f4b1cdb021e908423810debc0720b9075726d9863487f757f37b1dfdaf6050e5');
*/


var url = 'https://api.sympla.com.br/public/v3/';
fetch(url,{
    header:{
    'Content-Type' : 'application/json'
},
    method: 'GET',
    mode: 'no-cors'
})
    .then(response => {
    	return response.json();
    })
    .then( result => {
        //const dados = result // tranformando em texto para jogar na tela
        console.log(result);
    }
);