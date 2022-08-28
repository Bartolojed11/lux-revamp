export function requestOptions(method = 'GET', payload = {}, options = {}) {
    let auth
    let body
    const { token } = options

    let header = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if (Object.keys(payload).length !== 0) {
        body = {
            body: JSON.stringify(payload)
        }
    }

    if (token !== undefined) {
        auth = {
            'Authorization': 'Bearer ' + token
        }

        header.headers = { ...header.headers, ...auth }
    }

    return {
        method: method,
        ...header,
        ...body
    }
}