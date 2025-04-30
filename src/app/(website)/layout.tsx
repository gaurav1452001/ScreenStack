import React from 'react'
import Navbar from './_components/navbar'
type Props = {
    children: React.ReactNode
}

const layout = ({children}: Props) => {
  return (
    <div className='flex flex-col px-4 py-4 xl:px-6 '>
        <Navbar/>
        {children}
    </div>
  )

}
export default layout