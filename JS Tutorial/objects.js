// object in javascript
let obj = {
    name : 'aniket',
    age : 20,
    address: 'mumbai',
    full_detail : function(){
        return (`${this.name} , ${this.age} , ${this.address}`);
    }
}
console.log(obj);
console.log(obj.full_detail());
