const events_json3 = require("../backend/events");

test("Here is the date in milliseconds of the event with id 1", () => {
    expect(Date.parse(events_json3[0].date)).toBe(1511222400000);
});