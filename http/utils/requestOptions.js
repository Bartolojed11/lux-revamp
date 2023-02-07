export function requestOptions(method = 'GET', payload = {}, options = {}) {
    let auth
    let body
    const { token } = options

    if (payload?.token !== undefined) {
        delete payload.token
    }

    let header = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if (token !== undefined) {
        auth = {
            'Authorization': 'Bearer ' + token
        }

        header.headers = { ...header.headers, ...auth }
    }

    let returns = {
        method: method,
        ...header,
    }

    if (method != 'GET' && Object.keys(payload).length !== 0) {
        returns.body = JSON.stringify(payload)
    }

    return returns
}
