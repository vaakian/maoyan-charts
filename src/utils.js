export const arraySortBy = (arr, key) => {
    if (arr) {
        return arr.sort((x, y) => x[key] - y[key])
    }
    return []
}

export const arrayItemValueToString = (arr, key) => {
    if(arr) {
        return arr.map(item => {
            if (typeof item[key] == 'number')
                item[key] = item[key].toString()
            return item
        })
    }
    return null
}