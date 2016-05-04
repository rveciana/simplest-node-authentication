 var users = [{
    'id': 1,
    'name': 'JoeDoe',
    'email': 'joedoe@email.com',
    'password': '12345'
 },
 {
    'id': 2,
    'name': 'MaryDoe',
    'email': 'marydoe@email.com',
    'password': '12345'
 }]

 var User = function () {

};

User.prototype.findById = function(id, callback){
    var user = null;
    for(i=0; i<users.length; i++){
        if(users[i].id == id){
            user = users[i];
            break;
        }
    }
    callback(null, user);
};

User.prototype.findUser = function(email, password, callback){
    var user = null;
    for(i=0; i<users.length; i++){
        if(users[i].email == email && users[i].password == password){
            user = users[i];
            break;
        }
    }
    callback(null, user);
};

module.exports = User;