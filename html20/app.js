//using "new" with function
//new does 4 things
//one, the new object is created
// the new object is prototype linked
// the new object set as "this" binding

//if no return statement exist, then a copy of the new object is returned

log = console.log;

function Car(make, model) {
  //   log(this);
  let props = {
    make,
    model,
  };
  let info = function () {
    return this.props;
  };
}

let c1 = Car("Honda", "Accord");
let c2 = new Car("Tesla", "model 3");
log(c1);
log(c2);

function car(e) {
  console.log(e.target);
}
car(e);
