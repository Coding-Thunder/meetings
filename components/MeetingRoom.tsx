import { cn } from '@/lib/utils'
import { CallControls, CallParticipantsList, PaginatedGridLayout, SpeakerLayout } from '@stream-io/video-react-sdk'
import React, { useState } from 'react'

const MeetingRoom = () => {
    type CallLayoutType = "grid" | "speaker-left" | "speaker-right"
    const [layout, setLayout] = useState<CallLayoutType>("speaker-left")
    const [showParticipants, setShowParticipants] = useState<boolean>(false);

    const CallLayout = () => {
        switch (layout) {
            case "grid":
                return <PaginatedGridLayout />
            case "speaker-left":
                return <SpeakerLayout participantsBarPosition={"right"} />
            default:
                return <SpeakerLayout participantsBarPosition={"left"} />
        }
    }
    return (
        <section className="relative h-screen w-full overflow-hidden pt-4 text-white">

            <div className="relatibe flex size-full items-center justify-center">
                <div className="flex size-full max-w-[1000px] items-center">
                    <CallLayout />
                </div>
                <div className={cn("h-[calc(100vh-86px-)] hidden ml-2", { "show-block": showParticipants })}>
                    <CallParticipantsList onClose={() => setShowParticipants(false)} />
                </div>
            </div>
            <div className="fixed bottom-0 flex w-full items-center justify-center gap-5">
                <CallControls />
            </div>
        </section>
    )
}

export default MeetingRoom