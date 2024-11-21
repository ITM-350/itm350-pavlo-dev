const app = require("../server");



test("Posting and event", () => {
    expect(app.post('/api/events', api.event)).toBe(app.post('/api/events', api.event));
});