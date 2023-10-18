let mongoose = require("mongoose");
let User = require('./user');
let Profile = require("./profail");
let Credentials = require("./credential");

mongoose.connect("mongodb+srv://borja:borborjaja@cluster0.vuxtuxm.mongodb.net/codenocht",
                {useNewUrlParser : false, useUnifiedTopology : false});



let infoUser = new User({
    login: "pepeNavarrete",
    password: "tunt"
})

infoUser.save().then(res =>{
    console.log(res);
}).catch(err =>{
    console.log("Error: " + err);
});


let infoProfail = new Profile({
    name: "javi",
    surname: "perz",
    dateOfBirth: "1989",
    comments: "no comments",
    rol: "vividor"
});

infoProfail.save().then ((val)=>{
    console.log(val);

})
.catch((err)=>{
    console.log(err)
})



let infoCree = new Credentials({
    address: "la paz",
    phone: 635447184,
    email: "elvividor@gmail.com"
});

infoCree.save().then ((val)=>{
    console.log(val);
})
.catch((err)=>{
    console.log(err)
})