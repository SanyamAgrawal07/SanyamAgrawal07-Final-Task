const sly = document.getElementById("sly");
sly.addEventListener("click",function(event){
    event.preventDefault();
    var url = "https://hp-api.herokuapp.com/api/characters/house/slytherin";
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
    var firstcontainer = document.getElementById("sly");
    for (var i=0; i< data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = 
        `<table>
        <tr>
            <td>${data[i].name}</td>
            <td>${data[i].dateOfBirth}</td>
            <td>${data[i].species}</td>
            <td>${data[i].alternate_names}</td>
            <td>${data[i].wand.wood}</td>
            <td>${data[i].wand.core}</td>
            <td>${data[i].wand.length}</td>
            <td>${data[i].patronus}</td>
            
        </tr>
        </table>`
        firstcontainer.insertAdjacentElement("beforeend",div)
        
    }
}
