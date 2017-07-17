
class Users{

constructor()
{
  this.users = [];
}

addUsers(id,name,room)
{
    var user = {id,name,room};

    this.users.push(user);

    return user;
}

getUser(id)
{
    return this.users.filter((user)=> user.id===id)[0]
}

removeUser(id)
{
    var newUser = this.getUser(id);


if(newUser)
{
    this.users= this.users.filter((user)=> user.id !== id )
}

return newUser;

}


getList(room)
{
    
    var userli= this.users.filter((user)=> user.room===room)
    var userArray = userli.map((user)=>user.name);

    return userArray ;

}

};

module.exports.Users= Users;