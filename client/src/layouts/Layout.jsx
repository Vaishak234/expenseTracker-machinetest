import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { setExpense } from '../redux/expense/expenseSlice'

const Layout = () => {

    const [isOpen ,setIsOpen ] = useState(false)
    const dispatch = useDispatch()

    useEffect(()=>{
       
        dispatch(setExpense())
        
    },[dispatch])

    return (
        <div className='flex'>

            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

            <section className=' w-full  h-screen '>
                <Navbar setIsOpen={setIsOpen}/>

                <main className='p-4'>
                    <Outlet />
                </main>

            </section>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    )
}

export default Layout
