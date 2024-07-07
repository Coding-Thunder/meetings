"use client"
import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'

const MeetingSetup = ({ setIsSetupComplete }: { setIsSetupComplete: (val: boolean) => void }) => {
    const [isMicCamAllowed, setIsMicCamAllowed] = useState<boolean>(false)
    const call = useCall()
    if (!call) {
        throw new Error("something went wrong")
    }
    useEffect(() => {
        if (isMicCamAllowed) {
            call?.camera.disable()
            call?.microphone.disable()
        } else {
            call?.camera.enable()
            call?.microphone.enable()
        }

    }, [isMicCamAllowed, call?.camera, call?.microphone])
    return (
        <div className='flex flex-col h-screen w-full items-center justify-center gap-3 text-white'>
            <h1 className='text-2xl font-bold'>
                Setup
            </h1>
            <VideoPreview />
            <div className='flex h-16 items-center justify-center gap-3'>
                <label htmlFor="miccam" className='flex items-center justify-center gap-2
                font-medium'>
                    <input id='miccam' name='miccam' type="checkbox" checked={isMicCamAllowed} onChange={(e) => setIsMicCamAllowed(e.target.checked)} />
                    Join with mic and camera off
                </label>
                <DeviceSettings />
            </div>
            <Button onClick={() => {
                call.join()
                setIsSetupComplete(true)
            }} className='rounded-md bg-green-500 px-4 py-2.5'>Join meeting</Button>
        </div>
    )
}

export default MeetingSetup