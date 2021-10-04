//-------------------<global functions>---------------------//

//universal function value getter and splitter//
function getValue(id, split, type) {
    let valStr = document.getElementById(id).value;

    if(split == 'split') {
        
        const valArr = valStr.split(':');
        return valArr;

    }; if (type == 'number') {
        return Number(valStr);
    } else {
        return valStr;
    }
};

//universal function display//
function displayAt(id, string, symbol) {
    return document.getElementById(id).innerHTML = `${string}${symbol}`
};

//-------------------</global functions>---------------------//

//-------------------<im poor html>---------------------//
function solveEMI() {
    //gets the input values//
    const amount = getValue('principalAmount', '', 'number');
    const months = getValue('monthlyInstallments', '', 'number');
    const rate = getValue('interestRate', '', 'number');

    //solving and formula//
    const interest = (amount * (rate * 0.01)) / months;
    const displayTotal = ((amount / months) + interest).toFixed(2);
    const displayTotalAmtPd = (displayTotal * months).toFixed(2);
    const displayInterestPd = (displayTotalAmtPd - amount).toFixed(2);
    
    //output of values//
    displayAt('totalAmountPd', displayTotalAmtPd, '');
    displayAt('totalInterestPd', displayInterestPd, '');
    displayAt('monthlyPayment', displayTotal, '');
};

//-------------------</im poor html>---------------------//


//-------------------<hours battery life html>---------------------//

function minToHrsConverter() {

    //constant values//
    const minutes = getValue('minutes', '', 'number');

    //calculations//
    const hrs = Math.trunc(minutes / 60);
    const min = Math.trunc(minutes % 60);

    //display output//
    displayAt('outputHrs', `${hrs}h ${min}m`, '');
};

//-------------------</hours battery life html>---------------------//


//-------------------<storage approx html>---------------------//

function storageEstimate() {

    //constant values//
    const frontPixels = getValue('frontCam', '', 'number') * (1 / 3);
    const rearPixels = getValue('rearCam', '', 'number') * (1 / 3);
    const mb = getValue('storageSize', '', 'number') * 1000;
    
    //calculations with direct display output//
    displayAt('displayStorage', gigaSize, 'Gb');
    displayAt('displayRearCam', Math.round(mb / rearPixels));
    displayAt('displaySelfies', Math.round(mb / frontPixels));
    displayAt('displayVid720', Math.ceil(mb / 32)); 
    displayAt('displayVid1080', Math.ceil(mb / 72)); 
    displayAt('displayVid4k', Math.ceil(mb / 288));
};

//-------------------</storage approx html>---------------------//


//-------------------<english units html>---------------------//

//execution of the functions input necessary strings and ID//
function convertToInch() {
    
    //conversion constant//
    let conversionConstant = 25.4;

    //calculations//
    let valHeight = (getValue('inputHeight', '', 'number') / conversionConstant).toFixed(2);
    let valLength = (getValue('inputLength', '', 'number') / conversionConstant).toFixed(2);
    let valWidth = (getValue('inputWidth', '', 'number') / conversionConstant).toFixed(2);
    let valThickness = (getValue('inputThickness', '', 'number') / conversionConstant).toFixed(2);

    //display output values//
    displayAt('displayHeight', valHeight, '"');
    displayAt('display2', valLength, '"');
    displayAt('displayWidth', valWidth, '"');
    displayAt('displayThickness', valThickness, '"');
};

//-------------------</english units html>---------------------//


//-------------------<dimensions html>---------------------//

//diagonal solver function//
function getDiagonal(width, height) {
    return Math.sqrt(width ** 2 + height ** 2)
};

//ratio solver function//
function getRatio() {
    let diagonalWidth = getValue('inputAspectRatio', 'split', 'number')[0];
    let diagonalHeight = getValue('inputAspectRatio', 'split', 'number')[1];

    const ratioVal = getValue('inputDiagonalMeasure') / getDiagonal(diagonalWidth, diagonalHeight);
    return ratioVal;
};

//final solver and output display function//
function calculateDimensions() {
    let findWidth = (getValue('inputAspectRatio', 'split', 'number')[0] * getRatio()).toFixed(2);
    let findHeight = (getValue('inputAspectRatio', 'split', 'number')[1] * getRatio()).toFixed(2);
    let findArea = (findWidth * findHeight).toFixed(2);

    displayAt('displayWidthInch', findWidth, '"');
    displayAt('displayHeightInch', findHeight, '"');
    displayAt('displayTotalArea', findArea, ' sq. in.');
};

//-------------------</dimensions html>---------------------//