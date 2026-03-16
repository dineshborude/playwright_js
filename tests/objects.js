let obj = {
    fname : "Dinesh",
    lname : "Borude",
    age : 28,
    city : 'Pune',
    fullName : function() {
        return this.fname + " " + this.lname;
    }

}

for(let key in obj) {
    console.log(obj[key])
}

console.log(obj.fullName())