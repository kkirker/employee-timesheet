

  let config = {
    apiKey: "AIzaSyDCwEGOcWAW4co8OGJVz1m1Bs-Nnawk9IE",
    authDomain: "ch-bootcamp.firebaseapp.com",
    databaseURL: "https://ch-bootcamp.firebaseio.com",
    projectId: "ch-bootcamp",
    storageBucket: "ch-bootcamp.appspot.com",
    messagingSenderId: "1076651950507"
  };
  firebase.initializeApp(config);

let database = firebase.database();


//Click hander for add button 
$('#add-button').on('click', function(){

    event.preventDefault();

    let empName = $('#name').val();
    let empRole = $('#role').val();
    let startDate = $('#start-date').val();
    let empRate = $('#rate').val();


    console.log(empName);
    console.log(empRole);
    console.log(startDate);
    console.log(empRate);

    createEmployee(empName, empRole, startDate, empRate);
    

});

//Functions

//Create employee -- push the data up to the db
function createEmployee(name, role, date, rate){

    database.ref().push({
        Name: name,
        Role: role,
        StartDate: date,
        Rate: rate
    });

}
