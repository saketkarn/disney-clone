import React, { useState } from 'react'
import disney_logo from '../assets/disney_logo.jpg'
import {HiHome, HiStar, HiPlayCircle, HiTv} from "react-icons/hi2"
import { FaSearchengin } from "react-icons/fa";
import {HiPlus, HiDotsVertical} from "react-icons/hi"
import HeaderItem from './HeaderItem'

const Header = () => {

    const [toggle, setToggle] = useState(false)
    const menu=[
        {
            index:0,
            name:'HOME',
            icon:HiHome
        },
        {
            index:1,
            name:'SEARCH',
            icon:FaSearchengin
        },
        {
            index:2,
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            index:3,
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            index:4,
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            index:5,
            name:'SERIES',
            icon:HiTv
        },

    ]

  return (
    <div className='flex items-center justify-between p-5'>
    <div className='flex gap-8 items-center'>
        <img src={disney_logo} className='w-[80px] md:w-[115px] object-cover'/>
        <div className='hidden md:flex gap-8'>
        {menu.map(({index, name, icon})=>(
            <HeaderItem name={name} Icon={icon} key={index}/>
        ))}
        </div>
        <div className='flex md:hidden gap-5'>
        {menu.map(({index, icon})=>index<3 &&(
            <HeaderItem name={''} Icon={icon} key={index}/>
        ))}
        </div>
        <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
            <HeaderItem name={''} Icon={HiDotsVertical}/>
            {toggle? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
            {menu.map(({index, name, icon})=>index>2 &&(
                <HeaderItem name={name} Icon={icon} key={index}/>
            ))}
            </div>:null}
        </div>
      </div>
      <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=254075" 
      className='w-[40px] rounded-full'/>
    </div>
  )
}

export default Header
