"use client"
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'


const MobileNav = () => {
    const pathname = usePathname()
    return (
        <section className='w-full max-w-[264]'>
            <Sheet>
                <SheetTrigger asChild>
                    <Image className='cursor-pointer sm:hidden' width={36} height={36} src={"/icons/hamburger.svg"} alt='Menu' />
                </SheetTrigger>
                <SheetContent side={"left"} className='border-none bg-dark-1'>
                    <Link href={"/"} className='flex items-center gap-1'>
                        <Image src={"/icons/logo.svg"} width={32} height={32} alt='yoom' className='max-sm:size-10' />
                        <p className='text-[26px] font-extrabold text-white'>
                            Yoom
                        </p>
                    </Link>
                    <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
                        <SheetClose asChild>
                            <section className='flex h-full flex-col gap-6 pt-16 text-white'>
                                {sidebarLinks.map((link) => {
                                    const isActive = pathname === link.route

                                    return (
                                        <SheetClose key={link.label} asChild>
                                            <Link href={link.route} className={cn("flex gap-4 items-center p-4 rounded-lg w-full max-w-60", { "bg-blue-1": isActive })}>
                                                <Image src={link.imgUrl} width={20} height={20} alt='sidebar icon' /> <p className='font-semibold '>{link.label}</p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}
                            </section>

                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>

        </section>
    )
}

export default MobileNav