export function convertDates(inputData) {

    var outputData;
    outputData = inputData.map(({time, ...rest}) => {
    return {
    time: new Date(Date.UTC(
              parseInt(time.substr(0, 4)),   // Year
              parseInt(time.substr(5, 2)) - 1, // Month (zero-based)
              parseInt(time.substr(8, 2)),     // Day
              parseInt(time.substr(11, 2)),    // Hour
              parseInt(time.substr(14, 2)),    // Minute
              parseInt(time.substr(17, 2))     // Second
    )),
    ...rest
    };
    })

    return outputData

}