module.exports = function User(email,password){
    this.email = email;
    this.password = password;
 
    
    this.createUser = function(){
        var  userCreated = {
            "email":email,
            "password":password 
        }
        return createUser;
    }

    

}