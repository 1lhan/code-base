export const calculateYAxisValues = (data, yKey, numIntervals) => {
    const sortedData = data.slice().sort((a, b) => b[yKey] - a[yKey])
    const highestValue = sortedData[0][yKey] // 14.74
    const lowestValue = sortedData[sortedData.length - 1][yKey] // 19.4

    let yAxisValues = []

    if (lowestValue > 1) {
        let _1 = Math.pow(10, String(Math.floor(lowestValue)).length - 1) // Math.floor(14.74) = 14, String(14).length - 1 = 1, Math.pow(10, 1) = 10
        let _2 = Math.floor(lowestValue / _1) // Math.floor(14.74 / 10) => Math.floor(1.474) => 1
        yAxisValues.push(_1 * _2) // 10 * 1 = 10
    }
    else yAxisValues.push((Math.floor(lowestValue * 10) / 10))

    if (highestValue > 1) {
        let _1 = Math.pow(10, String(Math.floor(highestValue)).length - 1) // Math.floor(19) = 10, String(19).length - 1 = 1, Math.pow(10, 1) = 10
        let _2 = Math.ceil(highestValue / _1) // Math.ceil(19.4 / 10) => Math.ceil(1.94) => 2
        yAxisValues.push(_1 * _2) // 10 * 2 = 20
    }
    else yAxisValues.push((Math.ceil(highestValue * 10) / 10))

    // yAxisValues = [10, 20]
    // numIntervals = 3

    if (numIntervals > 0) {
        const lowestYAxisValue = yAxisValues[0] // 10
        const highestYAxisValue = yAxisValues[yAxisValues.length - 1] // 20
        const intervalSize = (highestYAxisValue - lowestYAxisValue) / (numIntervals + 1) // (20 - 10 / (3 + 1)) = 2.5

        for (let i = 1; i <= numIntervals; i++) { yAxisValues.splice(i, 0, lowestYAxisValue + (intervalSize * i)) }
    }

    return yAxisValues.reverse()
}