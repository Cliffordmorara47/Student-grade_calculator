function getMarks(){
    var maths = parseInt(document.getElementById('maths').value);
    var physics = parseInt(document.getElementById('physics').value);
    var chemistry = parseInt(document.getElementById('chemistry').value);
    var english = parseInt(document.getElementById('english').value);

     var totalMarks = 400;
     var obtainedMarks = maths + physics + chemistry + english;
     var meanPoints = (obtainedMarks/totalMarks * 12).toFixed(0);
    console.log(obtainedMarks);
    console.log(meanPoints);

    var grade = "";
    if (obtainedMarks > 400){
        alert("Enter Valid Marks")
    }else{
        if(meanPoints == 12){
            grade = 'A';
        }else if(meanPoints == 11){
            grade = 'A-';
        }else if(meanPoints == 10){
            grade = 'B+';
        }else if(meanPoints == 9){
            grade = 'B';
        }else if(meanPoints == 8){
            grade = 'B-'
        }else if(meanPoints == 7){
            grade = 'C+'
        }else if(meanPoints == 6){
            grade = 'C'
        }else if(meanPoints == 5){
            grade = 'C-'
        }else if(meanPoints == 4){
            grade = 'C'
        }else if(meanPoints == 3){
            grade = 'D+'
        }else if(meanPoints == 2){
            grade = 'D'
        }else if(meanPoints == 1){
            grade = 'D-'
        }else if(meanPoints == 0){
            grade = 'E'
        }else{
            alert("Enter valid marks!!")
        }
    }
    if(obtainedMarks < 401){
        document.getElementById('percent').innerHTML = meanPoints;
        document.getElementById('grade').innerHTML = grade;
        if(meanPoints < 6){
            document.getElementById('pass').innerHTML = "Sorry!! You did not reach the passmark, try again next time"
        }else{
            document.getElementById('pass').innerHTML = "Congratulations!! You have passed to the next level!!"
        }
    }else{
        console.log("invalid marks")
    }
}