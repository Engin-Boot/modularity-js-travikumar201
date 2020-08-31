const expect = require('chai').expect;
var colorOpeartionsRef = require("./color-operations.js");
var colorCodeManualRef = require("./color-code-guide.js");

function testNumberToPair(number, expectedMajor, expectedMinor) {
    const pairOfColors = colorOpeartionsRef.getColorFromPairNumber(number);
    console.log(`${number} = ${expectedMajor} ${expectedMinor}`);
    expect(pairOfColors.major).equals(expectedMajor);
    expect(pairOfColors.minor).equals(expectedMinor);
}

function testColorToNumber(majorColor, minorColor, expectedNumber) {
    const pairNumber = colorOpeartionsRef.getPairNumberFromColors(majorColor, minorColor);
    console.log(`${majorColor} ${minorColor} = ${pairNumber}`);
    expect(pairNumber).to.equal(expectedNumber);
}

function printColorCode() {
    const colorMap = colorCodeManualRef.toString();
    console.log(colorMap);
}

console.log("color coder");
printColorCode();
testNumberToPair(4, "white", "brown");
testNumberToPair(25, "violet", "slate");
testColorToNumber("black", "brown", 14);
testColorToNumber("yellow", "green", 18);