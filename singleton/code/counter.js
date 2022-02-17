//AntiPattern: Don't do this if you want only a one instance

//let counter = 0;
//
//class Counter{
//  getInstance(){
//    return this;
//  }
//
//  getCount(){
//    return counter;
//  }
//
//  increment(){
//    return ++counter;
//  }
//
//  decrement(){
//    return --counter;
//  }
//}
//
//const counter1 = new Counter();
//const counter2 = new Counter();
//
////It will be returned false
//console.log("Counter1 is equal to Counter2: ",counter1.getInstance() === counter2.getInstance());

//Insert conditional control in the constructor

//AntiPattern: Don't do this if you want only a one instance
//let instance;
//let counter = 0;
//
//class Counter{
//  constructor(){
//    if(instance){
//    throw new Error("You can only create one instance!");
//    }
//    instance = this;
//  }
//  
//  getInstance(){
//    return this;
//  }
//
//  getCount(){
//    return counter;
//  }
//
//  increment(){
//    return ++counter;
//  }
//
//  decrement(){
//    return --counter;
//  }
//}
//
////const counter1 = new Counter();
////Here it work well
////const counter2 = new Counter();
////Here will throw an error
//
////Freeze the object in order to avoid to change internal properties of the instance, for example added or modified changes, which reduces risk of accidentally overwritting the values on the Singleton
//
//const singletonCounter = Object.freeze(new Counter());
//export default singletonCounter;


//Using a regular object
//let count = 0;
//
//const counter = {
//  increment(){
//    return ++count;
//  },
//  decrement(){
//    return --count;
//  }
//};
//
//Object.freeze(counter);
//export {counter};

//objects are passed by reference so only a one copy is referenced by some instance,
//if you have redbutton and bluebutton both modifying the same counter

//WE should make testing in order because a small modification can lead to an entire test suite failing, after testingm we need to reset the entire instance in order to reset the modifications made by
//the tests

//Dependency Hiding

//When importing another module like a superCounter.js, It is no obvious that tha module is importing a Singleton. In index.js, we may be importing that module and invoke its methods. So we
//accidentally modify the values in the Singleton. Multiple Instances of Singleton be shared througout the application, which would all get modified as well.

//AntiPattern: Don't do this if you want only a one instance
let instance;
let counter = 0;

class Counter{
  constructor(){
    if(instance){
    throw new Error("You can only create one instance!");
    }
    instance = this;
  }
  
  getInstance(){
    return this;
  }

  getCount(){
    return counter;
  }

  increment(){
    return ++counter;
  }

  decrement(){
    return --counter;
  }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;


