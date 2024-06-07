export const capitalizeFirstLetter = (str) => {
    if (!str) return ''

    return str.charAt(0).toUpperCase() + str.clice(1)
}

export const getTime = (seconds) => {
    return new Date(seconds * 1000).toLocaleTimeString('ru-Ru', { timeZone: 'Atlantic/Reykjavik', hour: 'numeric', minute: 'numeric'})
}
export const getAmTime = (seconds) => {
    return new Date(seconds * 1000).toLocaleTimeString('ru-Ru', { timeZone: 'Atlantic/Reykjavik', hour: 'numeric', minute: 'numeric', hour12: true,})
}
export const getGegreeF = (number) => {
    return Math.round((number * 9/5) + 32 )
}