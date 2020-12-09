export const arraySortBy = (arr, key) => {
    if (arr) {
        return arr.sort((x, y) => x[key] - y[key])
    }
    return []
}

export const arrayItemValueToString = (arr, key) => {
    if (arr) {
        return arr.map(item => {
            if (typeof item[key] == 'number')
                item[key] = item[key].toString()
            return item
        })
    }
    return null
}

export const buildParams = (selection) => {
    const params = new URLSearchParams({gt: selection.gt})
    let {types, areas} = selection
    types.forEach(item => params.append('type', item))
    areas.forEach(item => params.append('area', item))
    return params
}