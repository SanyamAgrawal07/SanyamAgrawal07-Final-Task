// const gry = document.getElementById("gry");

// gry.addEventListener("click",function(event){
//     event.preventDefault();
//     var url = "http://hp-api.herokuapp.com/api/characters/house/gryffindor";
//     fetch(url,{
//       method:"GET"
//     }).then(function(response) {
//        if(response.ok) {
//            return response.json();
//        } else {
//            throw new Error(Error);
//        }
//    }).then(function(data){
//        console.log(data);
//    }).catch(function(error){
//        console.log(error);
//    });

/////////////////////////////////////////////////////////////////////////////////////////////
const gry = document.getElementById("gry");
gry.addEventListener("click",function(event){
    event.preventDefault();
    var url = "http://hp-api.herokuapp.com/api/characters/house/gryffindor";
    fetch(url,{
      method:"GET"
    }).then(function(response) {
       if(response.ok) {
           return response.json();
       } else {
           throw new Error(Error);
       }
   }).then(function(data){
    //    console.log(data);
       appenData(data);
        
   }).catch(function(error){
       console.log(error);
   });
});

function appenData(data){
    var firstcontainer = document.getElementById("gry");
    for (var i=0; i< data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = '' + data[i].name + '' ;
        div.innerHTML += "<br>";
        div.innerHTML += '' + data[i].dateOfBirth;
        div.innerHTML += "<br>";
        div.innerHTML += '' + data[i].species;
        div.innerHTML += "<br>";
        div.innerHTML += '' + data[i].house;
        div.innerHTML += "<br>";
        div.innerHTML += '' + data[i].ancestry;
        div.innerHTML += "<br>";
        div.innerHTML += '' + data[i].wand.wood;
        div.innerHTML += "<br>";
        div.innerHTML += '' + data[i].wand.core;
        div.innerHTML += "<br>";
        div.innerHTML += '' + data[i].wand.length;
        div.innerHTML += "<br>";
        div.innerHTML += '' + data[i].patronus;
        div.innerHTML += "<br>";
        // console.log(div.innerHTML)
        firstcontainer.insertAdjacentElement("afterend",div)
        
    }
}
////////////////////////////////////////////////////////////////////////////////////////////

const sly = document.getElementById("sly");
sly.addEventListener("click",function(event){
    event.preventDefault();
    var url = "http://hp-api.herokuapp.com/api/characters/house/slytherin?hogwartsStudent=true";
    fetch(url,{
      method:"GET"
    }).then(function(response) {
       if(response.ok) {
           return response.json();
       } else {
           throw new Error(Error);
       }
   }).then(function(data){
       console.log(data);
        
   }).catch(function(error){
       console.log(error);
   });
});

function appendData(data){
    var secondcontainer = document.getElementById("sly");
    for (var i=0; i< data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = '' + data[i].name + '' ;
        div.innerHTML += "<br>";
        div.innerHTML = '' + data[i].dateOfBirth;
        div.innerHTML += "<br>";
        div.innerHTML = '' + data[i].species;
        div.innerHTML += "<br>";
        div.innerHTML = '' + data[i].house;
        div.innerHTML += "<br>";
        div.innerHTML = '' + data[i].ancestry;
        div.innerHTML += "<br>";
        div.innerHTML = '' + data[i].wand.wood;
        div.innerHTML += "<br>";
        div.innerHTML = '' + data[i].wand.core;
        div.innerHTML += "<br>";
        div.innerHTML = '' + data[i].wand.length;
        div.innerHTML += "<br>";
        div.innerHTML = '' + data[i].patronus;
        div.innerHTML += "<br>";

    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////

const hup = document.getElementById("hup");
hup.addEventListener("click",function(event){
    event.preventDefault();
    var url = "http://hp-api.herokuapp.com/api/characters/house/hufflepuff";
    fetch(url,{
      method:"GET"
    }).then(function(response) {
       if(response.ok) {
           return response.json();
       } else {
           throw new Error(Error);
       }
   }).then(function(data){
       console.log(data);
        
   }).catch(function(error){
       console.log(error);
   });
});

function appendData(data){
    var thirdcontainer = document.getElementById("hup");
    for (var i=0; i< data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = '' + data[i].name + '' ;
        div.innerHTML += "<br>";
        div.innerHTML = '' + data[i].dateOfBirth;
        div.innerHTML += "<br>";
        div.innerHTML = '' + data[i].species;
        div.innerHTML += "<br>";
        div.innerHTML = '' + data[i].house;
        div.innerHTML += "<br>";
        div.innerHTML = '' + data[i].ancestry;
        div.innerHTML += "<br>";
        div.innerHTML = '' + data[i].wand.wood;
        div.innerHTML += "<br>";
        div.innerHTML = '' + data[i].wand.core;
        div.innerHTML += "<br>";
        div.innerHTML = '' + data[i].wand.length;
        div.innerHTML += "<br>";
        div.innerHTML = '' + data[i].patronus;
        div.innerHTML += "<br>";

    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////

const rav = document.getElementById("rav");
rav.addEventListener("click",function(event){
    event.preventDefault();
    var url = "http://hp-api.herokuapp.com/api/characters/house/ravenclaw";
    fetch(url,{
      method:"GET"
    }).then(function(response) {
       if(response.ok) {
           return response.json();
       } else {
           throw new Error(Error);
       }
   }).then(function(data){
       console.log(data);
        
   }).catch(function(error){
       console.log(error);
   });
});

function appendData(data){
    var firstcontainer = document.getElementById("rav");
    for (var i=0; i< data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = '' + data[i].name + '' ;
        div.innerHTML += "<br>";
        div.innerHTML = '' + data[i].dateOfBirth;
        div.innerHTML += "<br>";
        div.innerHTML = '' + data[i].species;
        div.innerHTML += "<br>";
        div.innerHTML = '' + data[i].house;
        div.innerHTML += "<br>";
        div.innerHTML = '' + data[i].ancestry;
        div.innerHTML += "<br>";
        div.innerHTML = '' + data[i].wand.wood;
        div.innerHTML += "<br>";
        div.innerHTML = '' + data[i].wand.core;
        div.innerHTML += "<br>";
        div.innerHTML = '' + data[i].wand.length;
        div.innerHTML += "<br>";
        div.innerHTML = '' + data[i].patronus;
        div.innerHTML += "<br>";

    }
}