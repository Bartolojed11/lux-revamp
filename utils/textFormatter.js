const titleCase = (string) => {
    let formatted = string.toLowerCase().split(' ')
    for (let i = 0; i < formatted.length; i++) {
        formatted[i] = formatted[i][0].toUpperCase() + formatted[i].slice(1)
    }
    return formatted.join(' ')
}

const formatAddress = (address) => {
    if (!address.city_name) return

    const { province_name } = address
    let city_name = address.city_name.toLowerCase()
    city_name = city_name.includes('city')
        ? titleCase(city_name)
        : `${titleCase(city_name)} City`
    const country = 'PH'
    const brgy_name =
        address?.brgy_name !== undefined ? `Brgy ${address.brgy_name}, ` : ''
    const postal_code =
        address?.postal_code !== undefined ? ` ${address.postal_code}, ` : ' '
    const additional_address =
        address?.additional_address !== undefined
            ? `${address.additional_address}, `
            : ''
    return `${additional_address} ${brgy_name} ${city_name},${postal_code}${province_name}, ${country}`
}

export { titleCase, formatAddress }
