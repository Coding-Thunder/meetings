import Image from 'next/image'
import React from 'react'

const Loader = () => {
    return (
        <div className='flex justify-center items-center h-screen w-full'>
            <Image width={50} height={50} src={"/icons/loading-circle.svg"} alt='Loader' />
        </div>
    )
}

export default Loader