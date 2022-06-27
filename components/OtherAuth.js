import { useRouter } from 'next/router'

import { Button } from "react-bootstrap"
import { Google, Facebook } from "react-bootstrap-icons"

const OtherAuth = (options) => {
    const noAccountYet = options.noAccountYet || false

    return (
        <>
            <div className="or-continue-with mb-3 mt-3">
                <p>Or continue With</p>
            </div>

            <div className="continue-with-thirdparty mb-3 mt-3">
                <Google />
                <Facebook />
            </div>
            { noAccountYet === true && <NoAccountSection /> }
        </>
    )
}

const NoAccountSection = () => {
    const router = useRouter()

    return <>
        <div className="no-account-yet mb-3 mt-3">
            <p>No account yet?</p>
        </div>

        <Button variant="light" className="btn-full-width mt-3" onClick={ () => router.push('sign-up') }>
            Sign Up
        </Button>
    </>
}

export default OtherAuth