class Dashboard{
    constructor(){
        this.dashboardButton = createButton('Dashboard');
        this.x1 = createElement('h2');
        //this.x1.html("this is the x1");
        this.x2 = createElement('h2');
        this.try1 = null;

        this.sub1 = createElement('h2');
        this.sub2 = createElement('h2');
        this.sub3 = createElement('h2');
        this.sub4 = createElement('h2');
        this.sub5 = createElement('h2');
        this.sub6 = createElement('h2');


        this.det1 = createElement('h3');
        this.det2 = createElement('h3');
        this.det3 = createElement('h3');
        this.det4 = createElement('h3');
        this.det5 = createElement('h3');
        this.det6 = createElement('h3');

        

    }

    
display(){
    this.dashboardButton.position(displayWidth/2 - 152, displayHeight/2 + 238);


        this.dashboardButton.mousePressed(()=>{
            this.dashboardButton.hide();
            //image(syllabusImage, 0,-displayHeight*4,displayWidth, displayHeight*5);
            //image(dashboardImage, 0,-displayHeight*4,displayWidth, displayHeight*5);
            image(dashboardImage, displayWidth/4  +100 ,displayHeight - displayHeight, displayWidth - 800, displayHeight - 150);
            this.x1.position(displayWidth/2 - 73, displayHeight/2 - 390)    
            this.x2.position(displayWidth/2 + 155, displayHeight/2 + 100) 
            //SUBJECT NAMES
            //ROW1
            this.sub1.position(displayWidth/2 - 140, displayHeight/2 - 400) 
            this.sub2.position(displayWidth/2 + 155, displayHeight/2 - 400)
            //ROW2 
            this.sub3.position(displayWidth/2 - 140, displayHeight/2 - 150) 
            this.sub4.position(displayWidth/2 + 155, displayHeight/2 - 150)
            //ROW3
            this.sub5.position(displayWidth/2 - 140, displayHeight/2 + 100) 
            this.sub6.position(displayWidth/2 + 155, displayHeight/2 + 100)

            //SUBJECT DETAILS
            //ROW1
            this.det1.position(displayWidth/2 - 140, displayHeight/2 - 380) 
            this.det2.position(displayWidth/2 + 155, displayHeight/2 - 380) 
            //ROW2
            this.det3.position(displayWidth/2 - 140, displayHeight/2 - 120) 
            this.det4.position(displayWidth/2 + 155, displayHeight/2 - 120) 
            //ROW2
            this.det5.position(displayWidth/2 - 140, displayHeight/2 + 120) 
            this.det6.position(displayWidth/2 + 155, displayHeight/2 + 120) 



            //this.x2.html(subjectName1);
            if(subjectName1 !== null){
                this.sub1.html(subjectName1)
                this.det1.html(subjectDetail1);
                this.sub1.show();
                this.det1.show();
                console.log("inside sub 1 not undefined")
            }
           

            if(subjectName2 !== null){
                this.sub2.html(subjectName2)
                this.det2.html(subjectDetail2);
                this.sub2.show();
                this.det2.show();
                console.log("inside sub 1 not undefined")
            }
            

            if(subjectName3 !== null){
                this.sub3.html(subjectName3)
                this.det3.html(subjectDetail3);
                this.sub3.show();
                this.det3.show();
                console.log("inside sub 1 not undefined")
            }
           

            if(subjectName4 !== null){
                this.sub4.html(subjectName4)
                this.det4.html(subjectDetail4);
                this.sub4.show();
                this.det4.show();
                console.log("inside sub 1 not undefined")
            }
            

            if(subjectName5 !== null){
                this.sub5.html(subjectName5)
                this.det5.html(subjectDetail5);
                this.sub5.show();
                this.det5.show();
                console.log("inside sub 1 not undefined")
              }

            if(subjectName6 !== null){
                this.sub6.html(subjectName6)
                this.det6.html(subjectDetail6);
                this.sub6.show();
                this.det6.show();
                console.log("inside sub 1 not undefined")
            }
      
        
          
            toDoPage.hide();
            toDoPage.show();

            reminderPage.show();
            reminderPage.hide();
            
            breakPage.hide();
            breakPage.show();
            syllabusPage.hide();
            syllabusPage.show();

            //this.readSyllabus1();

        })
    }

    hide(){
        this.sub1.hide();
        this.sub2.hide();
        this.sub3.hide();
        this.sub4.hide();
        this.sub5.hide();
        this.sub6.hide();

        this.det1.hide();
        this.det2.hide();
        this.det3.hide();
        this.det4.hide();
        this.det5.hide();
        this.det6.hide();
        //nothing as of yet.
    }

    show(){
        this.dashboardButton.show();
    }

    

    

}

/*


readSyllabus2(){
        var dbRef = database.ref('Syllabus/Subject1/Name');
        dbRef.on("value", function(snapshot){
            snapshot.forEach(function (childSnapshot){
                var data = childSnapshot.val();
                console.log(data);
                
            });
        })
    }


    readSyllabus1(){
        var dbRef = database.ref('Syllabus/Subject1/Name');
            dbRef.on("value", function(data){
                //const hello = data.val();
                //this.x1.html(hello);
                //this.try1 = data.val();
                //this.x1.html(this.try1);
                //text(hello, displayWidth/2 - 73, displayHeight/2 - 390)

                console.log(data.val())
                //var name1 = data.val();
                //this.x1.html(name1);
         })
         

        var dbRef2 = database.ref('Syllabus/Subject1/Details')
        dbRef2.on("value", function(data){
            console.log(data.val())
            this.x2.html(data.val());
        })

    }

*/

