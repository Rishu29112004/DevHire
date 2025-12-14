import SectionHeading from '@/Components/Helper/SectionHeading';
import React from 'react'
import JobCard from './JobCard';
export const jobs = [
    {
        id: 1,
        image: "/images/j1.png",
        title: "Frontend Developer",
        location: "Bangalore, India",
        jobType: "Full Time",
        urgency: "Urgent",
    },
    {
        id: 2,
        image: "/images/j2.png",
        title: "Backend Engineer",
        location: "Pune, India",
        jobType: "Part Time",
        urgency: "Normal",
    },
    {
        id: 3,
        image: "/images/j3.png",
        title: "UI/UX Designer",
        location: "Remote",
        jobType: "Contract",
        urgency: "Urgent",
    },
    {
        id: 4,
        image: "/images/j4.png",
        title: "Product Manager",
        location: "Mumbai, India",
        jobType: "Full Time",
        urgency: "Normal",
    },
    {
        id: 5,
        image: "/images/j5.png",
        title: "Data Analyst",
        location: "Hyderabad, India",
        jobType: "Internship",
        urgency: "Normal",
    },
    {
        id: 6,
        image: "/images/j6.png",
        title: "DevOps Engineer",
        location: "Chennai, India",
        jobType: "Full Time",
        urgency: "Urgent",
    },
    {
        id: 7,
        image: "/images/j7.png",
        title: "HR Recruiter",
        location: "Delhi, India",
        jobType: "Part Time",
        urgency: "Normal",
    },
    {
        id: 8,
        image: "/images/j8.png",
        title: "QA Tester",
        location: "Noida, India",
        jobType: "Contract",
        urgency: "Urgent",
    },
    {
        id: 9,
        image: "/images/j9.png",
        title: "Mobile App Developer",
        location: "Remote",
        jobType: "Full Time",
        urgency: "Normal",
    }
];

const Job = () => {
    return (
        <div className='pt-16 pb-16 '>
            <SectionHeading heading='Featured Jobs' subHeading='Kmow your worth and fint the job that qualify your life' />
            <div className='w-[95%] sm:w-[80%] mt-16 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 items-center'>
                {jobs.map((job,index) => {
                    return <div key={job.id} data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay={index * 100}>
                        <JobCard job={job} />
                    </div>
                })}
            </div>
            <div className='mt-10 text-center'>
                <button className='px-10 py-4 bg-blue-700 text-white cursor-pointer rounded-lg hover:bg-blue-800 transition-all duration-200'>Load More Listing</button>
            </div>
        </div>
    )
}

export default Job
