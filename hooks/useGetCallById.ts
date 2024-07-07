import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk'
import { useEffect, useState } from 'react'

const useGetCallById = (id: string | string[]) => {
    const [call, setCall] = useState<Call>()
    const [isCallLoadig, setIsCallLoadig] = useState(true)

    const client = useStreamVideoClient()

    useEffect(() => {
        if (!client) return
        const loadCall = async () => {
            const { calls } = await client.queryCalls({ filter_conditions: { id } })

            if (calls.length > 0) setCall(calls[0])

            setIsCallLoadig(false)
        }
        loadCall()
    }, [client, id]);

    return { call, isCallLoadig }
}

export default useGetCallById