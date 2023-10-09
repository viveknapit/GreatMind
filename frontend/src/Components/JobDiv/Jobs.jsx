import React from 'react'

//icons imported from react-icons
import {BiTimeFive} from 'react-icons/bi'

//imported  images
import logo1 from '../../Assets/top1.png';
import logo2 from '../../Assets/top2.png';
import logo3 from '../../Assets/top3.png';
import logo4 from '../../Assets/top4.png';
import logo5 from '../../Assets/top3.png';
import logo6 from '../../Assets/top3.png';
import logo7 from '../../Assets/top3.png';
import logo8 from '../../Assets/top3.png';

//jobs
const Data = [
  {
    id:1,
    image: logo1,
    tittle: 'Software Engieer',
    time: 'Now',
    location: 'Bangalore,India',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sapiente.',
    company:'Google',

  },
  {
    id:2,
    image: logo2,
    tittle: 'SDE-itern',
    time: '12-10-2023',
    location: 'Noida,India',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sapiente.',
    company:'TCS',

  },
  {
    id:3,
    image: logo3,
    tittle: 'front-end developer',
    time: 'today',
    location: 'Mumbai,India',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sapiente.',
    company:'Amazon',

  },
  {
    id:4,
    image: logo4,
    tittle: 'back-end developer',
    time: 'today',
    location: 'Pune,India',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sapiente.',
    company:'microsoft',

  },
  {
    id:5,
    image: logo5,
    tittle: 'Data Sciencist',
    time: 'today',
    location: 'Bhopal,India',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sapiente.',
    company:'infosys',

  },
  {
    id:6,
    image: logo6,
    tittle: 'ML engineer',
    time: 'today',
    location: 'Hydrabad,India',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sapiente.',
    company:'Tech Mahindra',

  },
  {
    id:7,
    image: logo7,
    tittle: 'SDE-1',
    time: '12hrs',
    location: 'Bangalore,India',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sapiente.',
    company:'Wipro',

  },
  {
    id:8,
    image: logo8,
    tittle: 'full stack developer',
    time: 'today',
    location: 'Bangalore rural',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sapiente.',
    company:'Accenture',

  }
]
const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {
          Data.map(({id,image,tittle,time,location,desc, company}) =>{
            return (
                      <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-grayIsh-400/700 hover:shadow-lg ">
                  <span className="flex justify-between items-center gap-4">
                    <h1 className='text[16px] font-semibold text-textColor group-hover:text-white '>{tittle}</h1>
                    <span className='flex items-center text-[#ccc] gap-1'>
                    <BiTimeFive/>{time}
                    </span>
                  </span>
                  <h6 className='text-[#ccc] '>{location}</h6>

                  <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]  group-hover:text-white'>
                    {desc}
                  </p>
                  <div className="company flex items-center gap-2">
                    <img src={image} alt="" className='w-[10%]' />
                    <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company} </span>
                  </div>

                  <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-liteBlue '>
                    Apply now
                  </button>
                </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Jobs
