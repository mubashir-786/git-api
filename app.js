
var arr = []
//     function userdata(){
//      fetch("https://api.github.com/users/mubashir-786")
//         .then(function(userData){
//             return userData.json()
//         })
//         .then(function(data){
//             console.log(data)
            
//                 arr.push(data)

//              var name = document.getElementById("name")
//     name.innerHTML = arr[0].following
        
//     })
    
        
      
//   console.log(arr)
     


      


   
    
//     }

function val(){
    var userVal = document.getElementById("uservalue").value 
    if(userVal == ""){
        alert("Please Enter GitHub Username")
    }else{
    var git = "https://api.github.com/users/" + userVal
    fetch(git)
    .then(function(userData){
        return userData.json()
    })
    .then(function(data){
        arr = []
        console.log(data)
        
        
            arr.push(data)

         var pic = document.getElementById("pic")
         var nam = document.getElementById("name")
         var bio = document.getElementById("bio")
         var repo = document.getElementById("repo")
         var follow = document.getElementById("follower")
         var folli = document.getElementById("following")
         var log = document.getElementById("log")
         nam.innerHTML = arr[0].name
         bio.innerHTML = arr[0].bio
         pic.src =  arr[0].avatar_url
        repo.innerHTML = arr[0].public_repos
        follow.innerHTML = arr[0].followers
        folli.innerHTML = arr[0].following
        log.innerText = arr[0].login
         
        console.log(arr)

         document.getElementById("uservalue").value = ""
})
.catch(function(error){
    alert("Error" )
})
    }
}




