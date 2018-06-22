

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

    $('#table').empty();


    database.ref().on('child_added', function(snapshot){

        let val = snapshot.val();
        console.log(snapshot);
        console.log(val.Name);

        $('#table').append(
            `
            <li class="list-group-item"><div class="container">
            <div class="row">
              <div class="col-sm">
              ${val.Name}
              </div>
              <div class="col-sm">
              ${val.Role}
              </div>
              <div class="col-sm">
              ${val.StartDate}
              </div>
              <div class="col-sm">
         
              </div>
              <div class="col-sm">
              ${val.Rate}
              </div>
              <div class="col-sm">

              </div>
            </div>
          </div></li>
            
            
            `
        )


       

    });

}
