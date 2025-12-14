import React from 'react'
import { LuNetwork } from 'react-icons/lu'

const Footer = () => {
    return (
        <div className='pt-16 pb-16 bg-gray-200 dark:bg-gray-900'>
            <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 items-start'>

                <div className='xl:col-span-2'>
                    <div className='flex items-center space-x-2'>
                        <div className='w-10 h-10 bg-cyan-800 dark:bg-white rounded-full flex items-center justify-center flex-col'>
                            <LuNetwork className='w-5 h-5 text-white dark:text-black' />
                        </div>
                        <h1 className='text-xl hidden sm:block md:text-2xl text-cyan-800 dark:text-white  font-bold'>DevHire</h1>
                    </div>
                    <p className='mt-4 text-sm text-gray-600 dark:text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique architecto doloribus repellendus qui aspernatur iusto tenetur hic debitis sequi nam vel quidem, voluptate tempore magnam voluptates dicta facere velit, illum nulla totam. Error, delectus numquam doloremque quasi nisi expedita voluptate.</p>

                    <div className='mt-5'>
                        <h1 className='lg:text-xl text-base text-gray-700 dark:text-gray-300 font-medium'>Call us</h1>
                        <p className='mt-1 text-gray-600 dark:text-gray-300 lg:text-lg text-base font-bold'>+918825358911</p>
                    </div>

                    <p className='text-sm text-gray-600 dark:text-gray-400 mt-4'>Dhaka Tangail</p>
                    <p className='text-sm text-gray-600 dark:text-gray-400 mt-2'>Dhaka Tangail UK</p>
                    <p className='text-sm text-gray-600 dark:text-gray-400 mt-2'>uk@gmail.com</p>
                </div>

                <div className='space-y-6'>
                    <h1 className='text-lg font-bold text-gray-800 dark:text-gray-200'>For Candidates</h1>
                    <p className='footer_link'>Brows Job</p>
                    <p className='footer_link'>Brows Categories</p>
                    <p className='footer_link'>Candidate Dashboard</p>
                    <p className='footer_link'>Job Alerts</p>
                    <p className='footer_link'>My Bookmarks</p>
                </div>

                <div className='space-y-6'>
                    <h1 className='text-lg font-bold text-gray-800 dark:text-gray-200'>For Employers</h1>
                    <p className='footer_link'>Brows Candidates</p>
                    <p className='footer_link'>Employer Dashboard</p>
                    <p className='footer_link'>Add Job</p>
                    <p className='footer_link'>Job Packages</p>
                </div>

                <div className='space-y-6'>
                    <h1 className='text-lg font-bold text-gray-800 dark:text-gray-200'>About US</h1>
                    <p className='footer_link'>Job page</p>
                    <p className='footer_link'>Job Page Alternative</p>
                    <p className='footer_link'>Resume Page</p>
                    <p className='footer_link'>Blog</p>
                    <p className='footer_link'>Contact</p>
                </div>

                <div className='space-y-6'>
                    <h1 className='text-lg font-bold text-gray-800 dark:text-gray-200'>Helpful Resourses</h1>
                    <p className='footer_link'>Site Map</p>
                    <p className='footer_link'>Terms of Use</p>
                    <p className='footer_link'>Privacy Center</p>
                    <p className='footer_link'>Security Center</p>
                    <p className='footer_link'>Accessibility Center</p>
                </div>

            </div>
            <div className='pt-6 mt-10 border-t w-[90%] mx-auto border-gray-300 dark:border-gray-800'>
                <p className='text-gray-500'>© 2025 webdevwarriors. All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
