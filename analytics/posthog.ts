import {useRouter} from 'next/router'
import {useEffect} from 'react'
import posthog from 'posthog-js'

const apiKey = 'phc_ppi21U9RRgtK8lqMtt1wROMHuyD9LXbE2nb8sO0Dwxk'
const onPosthogLoaded = (posthogInstance: typeof posthog) => {
    if (process.env.NODE_ENV === 'development') {
        console.info('disabling analytics in development')
        posthogInstance.opt_out_capturing()
    }
}

export const usePosthog = () => {
    const router = useRouter()
    useEffect(() => {
        posthog.init(apiKey, {api_host: 'https://app.posthog.com', loaded: onPosthogLoaded})
        const handleRouteChange = () => posthog.capture('$pageview')
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router])
}
