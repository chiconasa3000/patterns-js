import {currentTime} from "./get_time.js";
currentTime();

//Importing Singleton Pattern in order to make one only instance
import singletonCounter from "./counter";

singletonCounter.increment();
singletonCounter.increment();
singletonCounter.increment();

console.log("Counter in index.js", singletonCounter.getCount())
