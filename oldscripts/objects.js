var person = {
    firstName : "Riley",
    lastName : "Osborne",
    phone : "606-264-1959",
    email : "mitchell.osborne@interapthq.com",
    dob : "07-01-1994",
    fullname : function() {
        return this.firstName + " " + this.lastName;
    }
};

function printDetails (p) {
    console.log(p.firstName);
    console.log(p.lastName);
    console.log(p.phone);
    console.log(p.email);
    console.log(p.dob);
    console.log(p.fullname());
}

printDetails(person);




