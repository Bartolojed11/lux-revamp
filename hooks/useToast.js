import { toast } from 'react-toastify'

export function useToast() {
    const toastSuccess = (message, timeout = 3000) => {
        const type = 'success'
        toast[type](message, setToast(type, timeout))
    }

    const toastError = (message, timeout = 3000) => {
        const type = 'error'
        toast[type](message, setToast(type, timeout))
    }

    const toastWarning = (message, timeout = 3000) => {
        const type = 'warning'
        toast[type](message, setToast(type, timeout))
    }

    const setToast = (type, timeout) => {
        const theme = type != 'error' ? 'light' : 'colored'
        let options = {
            position: 'top-center',
            autoClose: timeout,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: theme,
        }

        return options
    }

    return { toastSuccess, toastError, toastWarning }
}
