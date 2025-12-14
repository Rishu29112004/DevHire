import SectionHeading from '@/Components/Helper/SectionHeading';
import React from 'react'
import { GiTakeMyMoney } from 'react-icons/gi';
import { IoBriefcaseOutline, IoCodeSlashOutline, IoColorPaletteOutline, IoMegaphoneOutline, IoPeopleCircleOutline, IoSchoolOutline, IoSettingsSharp } from 'react-icons/io5';
import CategoryCart from './CategoryCart';

export const categoryData= [
  {
    id: 1,
    categoryName: "Accounting / Finance",
    openPositions: 2,
    icon: <GiTakeMyMoney className="w-10 h-10 text-blue-700 dark:text-white" />,
  },
  {
    id: 2,
    categoryName: "Marketing",
    openPositions: 86,
    icon: <IoMegaphoneOutline className="w-10 h-10 text-blue-700 dark:text-white" />,
  },
  {
    id: 3,
    categoryName: "Development",
    openPositions: 120,
    icon: <IoCodeSlashOutline className="w-10 h-10 text-blue-700 dark:text-white" />,
  },
  {
    id: 4,
    categoryName: "UI / UX Design",
    openPositions: 43,
    icon: <IoColorPaletteOutline className="w-10 h-10 text-blue-700 dark:text-white" />,
  },
  {
    id: 5,
    categoryName: "Business",
    openPositions: 65,
    icon: <IoBriefcaseOutline className="w-10 h-10 text-blue-700 dark:text-white" />,
  },
  {
    id: 6,
    categoryName: "Human Resources",
    openPositions: 34,
    icon: <IoPeopleCircleOutline className="w-10 h-10 text-blue-700 dark:text-white" />,
  },
  {
    id: 7,
    categoryName: "Operations",
    openPositions: 29,
    icon: <IoSettingsSharp className="w-10 h-10 text-blue-700 dark:text-white" />,
  },
  {
    id: 8,
    categoryName: "Education / Training",
    openPositions: 18,
    icon: <IoSchoolOutline className="w-10 h-10 text-blue-700 dark:text-white" />,
  },
];
const Category = () => {
  return (
    <div className='pt-16 pb-16'>
      <SectionHeading heading='Popular Job Categories' subHeading='2020 jobs live - 293 added today.'/>
      <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {categoryData.map((Category,index)=>{
            return <div key={Category.id} data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay={index * 100}>
                <CategoryCart category={Category}/>
            </div>
        })}
      </div>
    </div>
  )
}

export default Category
