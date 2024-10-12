const app3 = require("../server");
const api = require("../backend/api");

for(let i=0; i < 1000000; i++){
    app3.post('/api/events', api.event);
}

test("Let's see if it orks well after posting 1000000 events", () => {
    expect(app3.get('/api/events', api.events)).toBe(app3.get('/api/events', api.events));
});