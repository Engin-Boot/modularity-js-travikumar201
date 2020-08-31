const MajorColors = [
    "white",
    "red",
    "black",
    "yellow",
    "violet"
];

const MinorColors = [
    "blue",
    "orange",
    "green",
    "brown",
    "slate"
];

function getMajorIndex(majorColor){
    let majorIndex = 0;
    for(majorIndex = 0; majorIndex < MajorColors.length; majorIndex++) {
        if(MajorColors[majorIndex] == majorColor) {
            break;
        }
    }
    return majorIndex;
}

function getMinorIndex(minorColor){
    let minorIndex = 0;
    for(minorIndex = 0; minorIndex < MinorColors.length; minorIndex++) {
        if(MinorColors[minorIndex] == minorColor) {
            break;
        }
    }
    return minorIndex;
}

exports.getColorFromPairNumber = function GetColorFromPairNumber(pairNumber) {
    let colorPair = {};
    const zeroBasedPairNumber = pairNumber - 1;
    const majorColorIndex =
        Math.floor(zeroBasedPairNumber / MinorColors.length);
    colorPair.major = MajorColors[majorColorIndex];
    colorPair.minor = MinorColors[zeroBasedPairNumber % MinorColors.length];
    return colorPair;
}

exports.getPairNumberFromColors = function GetPairNumberFromColors(majorColor, minorColor) {

    let majorIndex = getMajorIndex(majorColor);
    let minorIndex = getMinorIndex(minorColor);
    
    return majorIndex * MinorColors.length + minorIndex + 1;
}