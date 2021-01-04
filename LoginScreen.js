class LoginScreen{
    constructor(){
        this.logInButton = createButton("Login");
        this.signUpButton = createButton("Sign Up");

        this.userIdInput = createInput("Enter the username");
        this.password = createInput("Enter the password");

    }

    display(){
        if(isLoggedIn === false){
            image(loginImage, displayWidth/4  +100 ,displayHeight - displayHeight, displayWidth - 800, displayHeight - 150);
        }
        this.userIdInput.position(displayWidth/2 - 40, displayHeight/4);
        this.password.position(displayWidth/2 - 40, displayHeight/4 + 30)

        this.logInButton.position(displayWidth/2 + 10, displayHeight/4 + 80);
        this.signUpButton.position(displayWidth/2 + 10, displayHeight/4 + 100)

        this.signUpButton.mousePressed(()=>{
            this.setUserPassword();

        })

        this.logInButton.mousePressed(()=>{
            //this.readLoginNumber();
            //this.updateLoginNumber();
            var dbRef = database.ref('Username/User/' + this.userIdInput.value() + '/Password');
            dbRef.on("value", function(data){
                checkPass = data.val();
                //var newPass = this.password.value();
                //if(checkPass === newPass){
                    //console.log("passowrd if correct")
                    //loginPage.hide();
                //}
            })  
            if(checkPass === this.password.value()){
                console.log("hello");
                loginPage.hide();    
                isLoggedIn = true;          
            }
            else{
                isLoggedIn = false;
            }
        })


    }

    hide(){
        this.logInButton.hide();
        this.signUpButton.hide();
        this.userIdInput.hide();
        this.password.hide();
    }

    setUserPassword(){
        var dbRef = database.ref('Username/User/' + this.userIdInput.value());
        dbRef.update({
            "Username" : this.userIdInput.value(),
            "Password" : this.password.value()
        })
    }

    updateLoginNumber(){
        var dbRef = database.ref('LoginNumber')
        dbRef.update({ 
            "Number" : loginNumber 
        })
    }

    readLoginNumber(){
        var dbRef = database.ref('LoginNumber')
        dbRef.on("value", function(data){
            loginNumber = data.val();
        })
    }
    



}

/*

class LoginScreen{
    constructor(){
        this.logInButton = createButton();
        this.signUpButton = createButton();

        this.userIdInput = createInput("Enter the username");
        this.password = createInput("Enter the password");

    }

    display(){
        image(loginImage, displayWidth/4  +100 ,displayHeight - displayHeight, displayWidth - 800, displayHeight - 150);

        this.logInButton.position(displayWidth/2, displayHeight/2 + 238);
        this.signUpButton.position(displayWidth/2 + 10, displayHeight/4 + 80);

        this.logInButton.show();
        this.signUpButton.show();

        this.signUpButton.mousePressed(()=>{
            this.setUserPassword
        })


    }

    setUserPassword(){
        var dbRef = database.ref('Usernames' + this.userIdInput.value());
        dbRef.update({
            "Username" : this.userIdInput.value(),
            "Passowrd" : this.password.value()
        })
    }



}

*/