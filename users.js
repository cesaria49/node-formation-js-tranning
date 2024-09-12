const fs = require('fs')
const chalk = require('chalk')


// const users = [
//     {
//       name: "Luke Skywalker",
//       height: "172",
//       mass: "77",
//       eye_color: "blue",
//       gender: "male",
//     },
//     {
//       name: "Darth Vader",
//       height: "202",
//       mass: "136",
//       eye_color: "yellow",
//       gender: "male",
//     },
//     {
//       name: "Leia Organa",
//       height: "150",
//       mass: "49",
//       eye_color: "brown",
//       gender: "female",
//     },
//     {
//       name: "Anakin Skywalker",
//       height: "188",
//       mass: "84",
//       eye_color: "blue",
//       gender: "male",
//     },
//   ];

//fs.writeFileSync('userData.json', JSON.stringify(users))

const loadUsers = function(){
    try{
        
        const dataBuffer = fs.readFileSync('userData.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON) 
        
    } catch (e) {

        return[]
    }
}

const users = loadUsers()

const readUsers = function(){
    console.log(users)
    
}

const updateUSers = function(name,height,mass,eye_color,gender){
//   const users = loadUsers()
  const duplicateUsers= users.filter(function(user){
       return user.name ===  name
  })

  if (duplicateUsers.length === 0){
      users.push({
          name: name,
          height: height,
          mass: mass, 
          eye_color: eye_color,
          gender:gender
      })
      saveUsers(users)
      console.log('New user added!')
  }else{
      console.log('User taken!')
  }
  
  saveUsers(users)
}

const saveUsers = function(users){
  const dataJSON = JSON.stringify(users)
  fs.writeFileSync('userData.json',dataJSON)
}

const deleteUsers = function(name){
    // const users = loadUsers()
    const usersDeleted = users.filter(function(user){
      return user.name !== name
  })

  if (users.length > usersDeleted.length){
      
      console.log(chalk.green('User Deleted' ))
      saveUsers(usersDeleted)
  }
  else {
      console.log(chalk.green('User not found!') )
      }
 

}


module.exports = {
    readUsers: readUsers,
    deleteUsers: deleteUsers,
    updateUSers: updateUSers

}



