import React, { ReactNode } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'


interface Props {
    isOpen: boolean
    onClose: () => void
    title: string
    className?: string
    buttonText?: string
    handleClick?: () => void
    children?: ReactNode
    image?: string
    buttonIcon?: string
}
const MeetingModal = ({ isOpen, onClose, title, className, handleClick, image, children, buttonIcon, buttonText }: Props) => {
    return (
        <Dialog onOpenChange={onClose} open={isOpen}>
            <DialogContent className='flex w-full max-5-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white'>
                <div className='flex flex-col gap-6'>
                    {image && (
                        <div className='flex justify-center items-center'>
                            <Image src={image} alt={image} width={72} height={72} />
                        </div>
                    )}
                    <h1 className={cn("text-3xl font-bold leading-[42px]", className)}>{title}</h1>
                    {children}
                    <Button className='bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0' onClick={handleClick}>
                        {buttonIcon && (
                            <div className='flex justify-center items-center'>
                                <Image src={buttonIcon} alt={buttonIcon} width={13} height={13} />
                            </div>
                        )} &nbsp;
                        {buttonText || "Schedule Meeting"}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default MeetingModal