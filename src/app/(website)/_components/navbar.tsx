import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className='flex w-full justify-between items-center'>
            <div className='flex flex-row text-2xl font-semibold items-center gap-x-3'>
                <Menu />
                <Image src='/logo2.png' alt='logo' width={40} height={40} className='invert' />
            </div>
            <div className='hidden md:flex flex-row gap-x-16 items-center'>
                <Link href="/" className='text-xs font-semibold bg-violet-800 rounded-[19px] px-3 py-1.5 hover:bg-violet-500'>Home</Link>
                <Link href="/" className='text-xs font-semibold bg-violet-800 rounded-[19px] px-3 py-1.5 hover:bg-violet-500'>Price</Link>
                <Link href="/" className='text-xs font-semibold bg-violet-800 rounded-[19px] px-3 py-1.5 hover:bg-violet-500'>About</Link>
            </div>
            <Link href="/auth/sing-in">
                <Button className='text-base'>Login</Button>
            </Link>
        </div>
    )
}

export default Navbar