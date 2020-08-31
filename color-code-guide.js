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

exports.toString = function ToString(){
    //let colorMap = new Map();
    let colorString = "";
    let majorIndex = 0;
    let minorIndex = 0;
    for(majorIndex = 0; majorIndex < MajorColors.length; majorIndex++) {
        for(minorIndex = 0; minorIndex < MinorColors.length; minorIndex++){
            let colorKey = majorIndex * MinorColors.length + minorIndex + 1;
            let colorValue = MajorColors[majorIndex] + " + " + MinorColors[minorIndex];
            //colorMap.set(colorKey, colorValue);
            colorString = colorString + colorKey + " --> " + colorValue + "\n";
        }
    }
    return colorString;
}