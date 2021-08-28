let btn = document.getElementById('btn');
btn.addEventListener('click', ()=>{
    let math = document.getElementById('math').value,
    physics = document.getElementById('physics').value,
    chemistry = document.getElementById('chemistry').value,
    biology = document.getElementById('biology').value;

    let totalValue = parseFloat(math) + parseFloat(physics) + parseFloat(chemistry) + parseFloat(biology);
    let percent = (totalValue/400)*100;
    let percentage = percent.toFixed(2);
    if(percentage <= 100 && percentage >= 90){
        grade = 'A+';
    }
    else if(percentage <= 89 && percentage >= 75){
        grade = 'A';
    }
    else if(percentage <= 74 && percentage >= 60){
        grade = 'B+';
    }
    else if(percentage <= 59 && percentage >= 45){
        grade = 'B';
    }
    else if(percentage <= 44 && percentage >= 30){
        grade = 'C';
    }
    else if(percentage >= 1 && percentage<= 29){
        grade = 'D';
    }
    else{
        alert('Fill the all blanks OR put a value that is less-than or equal to 100')
    }
    document.getElementById('show-total').innerHTML = `Out of 400 your total is ${totalValue};`;
    document.getElementById('show-grades').innerHTML = `Your got ${grade} grade;`;
    document.getElementById('show-percentage').innerHTML = `Your got ${percentage} % ;`;
    if(percentage >= 30){
        document.getElementById('show-value').innerHTML = `congrats , you are passed;`;
    }else{
        document.getElementById('show-value').innerHTML = `sorry , you are failed;`;
    }


    let showData = document.getElementById('show-data');
    showData.classList.add('active')

})