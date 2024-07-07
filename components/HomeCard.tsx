import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface Props { img: string, title: string, description: string, handleClick: () => void, className: string }

const HomeCard = ({ img, title, description, handleClick, className }: Props) => {
    return (
        <div onClick={handleClick} className={cn("px-4 py-6 flex flex-col justify-between w-full xl:w-max-[270px] min-h-[260px] rounded-[14px] cursor-pointer", className)}>
            <div className='flex justify-center items-center glassmorphism size-12 rounded-[10px]'>
                <Image width={27} height={27} src={img} alt={title} />
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>{title}</h1>
                <p className='text-lg font-normal'>{description}</p>
            </div>
        </div>
    )
}

export default HomeCard