/*`````````@Javascript METHOD```````*/

  
  //FILTER
  //Liste des utilisateurs dont la masse est supérieure à 100
  //const massSup100 =users.filter((user) => user.mass  > 10)
  //const massSup100 = users.filter(function(user))
  

  //const massSup100 = users.filter( function(user){
   //   return user.mass > 10
  //})

  //massSup100.forEach((user) => console.log(user.name))

  // massSup100.forEach(function(user){
      //console.log (user.name)
  //})

  
  
  
  

  

  
  //console.log(massSup100.name)



  //Liste des utilisateurs dont la taille est inférieure à 200
  //const minSup200 = users.filter((user) =>  user.height < 200)
  //console.log(minSup200)

  //minSup200.forEach((user) => console.log(user.name))
  //Tous les utilisateurs masculins

  const userMale =  users.filter((user) => user.gender === "male")
  //console.log(userMale)

  //userMale.forEach((user)=> console.log(user.name))

  
  //Tous les utilisateurs féminins
  const userFemale =  users.filter((user) => user.gender === "female")
  //console.log(userFemale)

  userFemale.forEach((user) => console.log(user.name))

  
  
  /*````````@NodeJs`````````*/
  //Install the required libraries {Yargs: 12.0.2, chalk:2.4.1}
  //Import the required libraries
  
  //Initialiser yargs pour les  command line arguments Create Read Update Delete
  //Create userData.json use Node.js fs module
  //Read and Log to console the JSON data from userData.json with chalk styles
  //Update users with add new user
  //Delete a user by name