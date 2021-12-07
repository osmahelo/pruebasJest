const createRobot = require("./robot");

describe("Create robot", () => {
  test("Start", () => {
    expect(createRobot(0, 10).moveUp()).toEqual("Limite Arriba");
    expect(createRobot(10, 10).moveUp()).toEqual("Limite Arriba");
    expect(createRobot(0, 1).moveUp()).toEqual(2);
  });
  test("Up", () => {
    expect(createRobot(0, 10).moveUp()).toEqual("Limite Arriba");
    expect(createRobot(0, 0).moveUp()).toEqual(1);
  });
  test("Down", () => {
    expect(createRobot(0, 0).moveDown()).toEqual("Limite Abajo");
    expect(createRobot(0, 9).moveDown()).toEqual(8);
  });
  
});