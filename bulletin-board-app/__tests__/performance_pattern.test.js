const app1 = require("../server");

var timeBefore = new Date();
var timeBefore_ms = timeBefore.getMilliseconds();
app1;
var timeAfter = new Date();
var timeAfter_ms = timeAfter.getMilliseconds();
var the_time_of_loading_the_app = timeAfter_ms - timeBefore_ms;
console.log('***************************');
console.log(timeBefore_ms);
console.log(timeAfter_ms);
console.log(the_time_of_loading_the_app);
console.log('*******************************');


test("Testing the time of loading the app", () => {
   
    expect(the_time_of_loading_the_app).toBe(2);
});