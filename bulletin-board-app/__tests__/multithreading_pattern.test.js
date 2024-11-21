const events_json5 = require("../backend/events");
const { Worker, workerData, isMainThread, parentPort } = require('worker_threads');

var events = 0;

if(isMainThread){
    const worker1 = new Worker(__filename, { workerData: events_json5[0].title});
    worker1.once('message', message => {console.log(message);events++;});
    const worker2 = new Worker(__filename, { workerData: events_json5[1].title});
    worker2.once('message', message => {console.log(message);events++;});
    const worker3 = new Worker(__filename, { workerData: events_json5[2].title});
    worker3.once('message', message => {console.log(message);events++;});
} else {
    parentPort.postMessage('this is ' + workerData)
}

test("there are three events", () => {
    expect(events).toBe(3);
});