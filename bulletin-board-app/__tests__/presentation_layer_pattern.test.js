const app = require("../server");
var routes = require('../backend');

test("Trying to get index page", () => {
    expect(app.get('/', routes.index)).toBe(app.get('/', routes.index));
});