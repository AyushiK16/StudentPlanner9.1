class ToDoList{
    constructor(){
        this.toDoButton = createButton('To-Do List');

        this.greeting = createElement('h4');
        this.saveButton = createButton("Save To-Do");
        this.deleteButton = createButton("Delete All");
        this.dateInput = createInput("DD/MM/YY")
        this.input = createInput("Enter what to do here");
        this.greeting2 = createElement('h5');

        this.dateInput1 = createInput("DD/MM/YY")
        this.input1 = createInput("Enter what to do here");

        this.act1 = createElement('h4')
        this.act2 = createElement('h4')
        this.act3 = createElement('h4')
        this.act4 = createElement('h4')
        this.act5 = createElement('h4')
        this.act6 = createElement('h4')
        this.act7 = createElement('h4')
        this.act8 = createElement('h4')
        this.act9 = createElement('h4')
        this.act10 = createElement('h4')

        this.date1 = createElement('h4')
        this.date2 = createElement('h4')
        this.date3 = createElement('h4')
        this.date4 = createElement('h4')
        this.date5 = createElement('h4')
        this.date6 = createElement('h4')
        this.date7 = createElement('h4')
        this.date8 = createElement('h4')
        this.date9 = createElement('h4')
        this.date10 = createElement('h4')

        
        //this.dateInputList = [];
        this.dateInputList = [];
        this.inputList = [];
    }

    display(){
        this.toDoButton.position(displayWidth/2 + 76, displayHeight/2 + 238);

        this.toDoButton.mousePressed(()=>{
            this.toDoButton.hide();
            //image(toDoImage, 0,-displayHeight*4,displayWidth, displayHeight*5);
            image(toDoImage, displayWidth/4  +100 ,displayHeight - displayHeight, displayWidth - 800, displayHeight - 150);

            this.greeting.html("Enter any things you want to be reminded about here!");
            this.greeting.position(displayWidth/2 - 120, displayHeight/4 - 150);

            console.log("inside display func");
            this.saveButton.position(displayWidth/2 - 40, displayHeight/2 +140);
            this.dateInput.position(displayWidth/2 - 135, 140);
            this.input.position(displayWidth/2 + 40, 140)

            this.act1.position(displayWidth/2 + 40, 140)
            this.act2.position(displayWidth/2 + 40, 180)
            this.act3.position(displayWidth/2 + 40, 220)
            this.act4.position(displayWidth/2 + 40, 260)
            this.act5.position(displayWidth/2 + 40, 300)
            this.act6.position(displayWidth/2 + 40, 340)
            this.act7.position(displayWidth/2 + 40, 380)
            this.act8.position(displayWidth/2 + 40, 420)
            this.act9.position(displayWidth/2 + 40, 460)
            this.act10.position(displayWidth/2 + 40, 500)

            this.date1.position(displayWidth/2 - 135, 140)
            this.date2.position(displayWidth/2 - 135, 180)
            this.date3.position(displayWidth/2 - 135, 220)
            this.date4.position(displayWidth/2 - 135, 260)
            this.date5.position(displayWidth/2 - 135, 300)
            this.date6.position(displayWidth/2 - 135, 340)
            this.date7.position(displayWidth/2 - 135, 380)
            this.date8.position(displayWidth/2 - 135, 420)
            this.date9.position(displayWidth/2 - 135, 460)
            this.date10.position(displayWidth/2 - 135, 500)

            
            this.greeting.show();
            this.saveButton.show();
            this.dateInput.show();
            this.input.show();
            syllabusPage.hide();
            syllabusPage.show();
            
            reminderPage.hide();
            reminderPage.show();
            
            breakPage.hide();
            breakPage.show();

            dashboardPage.hide();
            dashboardPage.show();
         
            this.dateInput1.show();
            this.input1.show();

            this.act1.show();
                    this.act2.show();
                    this.act3.show();
                    this.act4.show();
                    this.act5.show();
                    this.act6.show();
                    this.act7.show();
                    this.act8.show();
                    this.act9.show();
                    this.act10.show();
            
                    this.date1.show();
                    this.date2.show();
                    this.date3.show();
                    this.date4.show();
                    this.date5.show();
                    this.date6.show();
                    this.date7.show();
                    this.date8.show();
                    this.date9.show();
                    this.date10.show();
            this.saveButton.mousePressed(()=>{
                if(y<540){
                    mouseNo = mouseNo + 1;
                    this.updateToDoList();
                    //this.dateInput1 = createInput("DD/MM/YY")
                    //var boxName = 'dateInput' + mouseNo;
                    //('dateInput'+mouseNo) = createInput("DD/MM/YY");

                    //boxName = createInput("DD/MM/YY");
                    //var boxArray =[];
                    //boxArray.push('dateInput'+mouseNo);
                    //boxArray.push(boxName);

                    //boxName.position(displayWidth/2 - 135, y);
                    

                    this.dateInput.position(displayWidth/2 - 135, y);
                    //this.input1 = createInput("Enter what to do here");
                    this.input.position(displayWidth/2 + 40, y);
                    
                    //this.dateInputList.push(dateInput1);
                    //append(this.dateInputList, this.dateInput1);
                    this.dateInputList.push(this.dateInput1);
                    this.inputList.push(this.input1);

                    this.dateInput1.show()
                    this.input1.show();

                    

                    if(mouseNo === 1){
                        tod1 = this.input.value();
                        toDate1 = this.dateInput.value(); 
                        this.act1.html(tod1);
                        this.date1.html(toDate1);
                        this.act1.show();
                        this.date1.show();
                    }

                    if(mouseNo === 2){
                        tod2 = this.input.value();
                        toDate2 = this.dateInput.value(); 
                        this.act2.html(tod2);
                        this.date2.html(toDate2);
                        this.act2.show();
                        this.date2.show();
                    }

                    if(mouseNo === 3){
                        tod3 = this.input.value();
                        toDate3 = this.dateInput.value(); 
                        this.act3.html(tod3);
                        this.date3.html(toDate3);
                        this.act3.show();
                        this.date3.show();
                    }

                    if(mouseNo === 4){
                        tod4 = this.input.value();
                        toDate4 = this.dateInput.value(); 
                        this.act4.html(tod4);
                        this.date4.html(toDate4);
                        this.act4.show();
                        this.date4.show();
                    }

                    if(mouseNo === 5){
                        tod5 = this.input.value();
                        toDate5 = this.dateInput.value(); 
                        this.act5.html(tod5);
                        this.date5.html(toDate5);
                        this.act5.show();
                        this.date5.show();
                    }

                    if(mouseNo === 6){
                        tod6 = this.input.value();
                        toDate6 = this.dateInput.value(); 
                        this.act6.html(tod6);
                        this.date6.html(toDate6);
                        this.act6.show();
                        this.date6.show();
                    }

                    if(mouseNo === 7){
                        tod7 = this.input.value();
                        toDate7 = this.dateInput.value(); 
                        this.act7.html(tod7);
                        this.date7.html(toDate7);
                        this.act7.show();
                        this.date7.show();
                    }

                    if(mouseNo === 8){
                        tod8 = this.input.value();
                        toDate8 = this.dateInput.value(); 
                        this.act8.html(tod8);
                        this.date8.html(toDate8);
                        this.act8.show();
                        this.date8.show();
                    }

                    if(mouseNo === 9){
                        tod9 = this.input.value();
                        toDate9 = this.dateInput.value(); 
                        this.act9.html(tod9);
                        this.date9.html(toDate9);
                        this.act9.show();
                        this.date9.show();
                    }

                    if(mouseNo === 10){
                        tod10 = this.input.value();
                        toDate10 = this.dateInput.value(); 
                        this.act10.html(tod10);
                        this.date10.html(toDate10);
                        this.act10.show();
                        this.date10.show();
                    }

                    y = y + 40;

                    this.getValue();
                    //this.updateValue();
                }

                else{
                    this.input.hide();
                    this.dateInput.hide();
                    this.greeting2.html("Please add only 9 things to do at one time!")
                    this.greeting2.position(displayWidth/2 - 80, displayHeight/2 + 80);
                    this.greeting2.show();

                } 
            });    
        }) 
    }

    hide(){
        //this.greeting.hide();
        this.saveButton.hide();
        this.deleteButton.hide();
        this.dateInput.hide();
        this.input.hide();

        this.dateInput1.hide();
        this.input1.hide();

        this.input1.hide();

        this.act1.hide();
        this.act2.hide();
        this.act3.hide();
        this.act4.hide();
        this.act5.hide();
        this.act6.hide();
        this.act7.hide();
        this.act8.hide();
        this.act9.hide();
        this.act10.hide();

        this.date1.hide();
        this.date2.hide();
        this.date3.hide();
        this.date4.hide();
        this.date5.hide();
        this.date6.hide();
        this.date7.hide();
        this.date8.hide();
        this.date9.hide();
        this.date10.hide();



        //this.dateInputList.hide();

        //ADDED - 29
        /*

        for(var hi=0 ; hi<=mouseNo ; hi=hi+1){
            var temporary = this.dateInputList[hi];
            var temp2 = this.inputList[hi];
            temp2.hide();
            temporary.hide();
            console.log("in the for loop - HIDE");
        }

        for(var hi=0 ; hi<=mouseNo ; hi=hi+1){
                    //var temp1 = this.dateInputList[hi];
                    //var temp2 = this.inputList[hi];
                    
                    //temp1.hide();
                    this.dateInputList[hi].hide();
                    //temp2.hide();
                    console.log("in the for loop - HIDE");
                }
        */

        this.greeting.hide();
        this.greeting2.hide();
    }


    updateToDoList(){
        var dbRef = database.ref('ToDoList/Entry' + mouseNo);
        dbRef.update({
            "Activity" : this.input1.value(),
            "Date" : this.dateInput1.value()
        })

    }
    show(){
        this.toDoButton.show();
        //this.dateInputList.hide();
    }

    getValue(){
        var toDoRef = database.ref('ToDo/' + mouseNo);
        toDoRef.on("value",(data)=>{
          var toDoCount = data.val();
        })
        //console.log("getting count" + mouseNo);
    }

    updateValue(){
        var toDoIndex = "ToDo/" + mouseNo;
        database.ref(toDoIndex).set({
        toDoItem:this.input1,
        date:this.dateInput1
        });
    }

/*
    updateValue(){
        var toDoIndex = "ToDo/" + mouseNo;
        database.ref(toDoIndex).set({
        toDoItem:this.input1,
        date:this.dateInput1
    });
    }
    */
}