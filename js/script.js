function userForm(){
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var city= document.getElementById("city").value;
    var province = document.getElementById("province").value;
    var membership = document.getElementsByName("membership");
    var membershipChoice;
    for(var i = 0; i < membership.length; i++){
        if(membership[i].checked){
            membershipChoice = membership[i].value;
        }
    }
    document.getElementById("result").innerHTML = "First Name: " + firstname + "<br>" + "Last Name: " + lastname + "<br>" + "Email: " + email + "<br>" + "City: " + city + "<br>" + "Province: " + province + "<br>" + "Membership: " +  membershipChoice;
}
const form = document.getElementById('sub');
console.log(form);
form.addEventListener('click', (e) => {
    var numbers = document.getElementById('numbers').value;
    document.getElementById('result').innerHTML = numbers;
    if (numbers.length == 0) {
        alert('Please enter numbers');
        e.preventDefault(); }
    else {
        var numbersArray = numbers.split(' ');
        var choice_type = document.getElementsByName('calculate');
        console.log(choice_type);
        var choice;
        for(var i = 0; i < choice_type.length; i++){
            if(choice_type[i].checked){
                choice = choice_type[i].value;
            }
        }
        if(choice == 'autoSum'){
            var sum = 0;
            for(var i = 0; i < numbersArray.length; i++){
                sum += parseInt(numbersArray[i]);
            }
            document.getElementById('result').innerHTML = sum;
        }
        else if(choice == 'average'){
            var sum = 0;
            for(var i = 0; i < numbersArray.length; i++){
                sum += parseInt(numbersArray[i]);
            }
            var average = sum / numbersArray.length;
            document.getElementById('result').innerHTML = average;
        }
        else if(choice == 'max'){
            document.getElementById('result').innerHTML = Math.max(...numbersArray);
        }
        else if(choice == 'min'){
            document.getElementById('result').innerHTML = Math.min(...numbersArray);
        }
    }
    e.preventDefault();
});


