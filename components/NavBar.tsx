import React, {useState,useEffect} from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { SunIcon,MoonIcon,MenuIcon,XIcon } from '@heroicons/react/solid';
import { NavLinkType } from '../models/navLink.interface';


const NavBar:React.FC = () => {
  const[isOpen,setIsOpen] = useState(false);
  const {systemTheme,theme,setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {setMounted(true)},[mounted])

  const renderThemeIcon = () => {
    if(!mounted) return null;
    const curretTheme = theme =='system' ? systemTheme : theme;

    if(curretTheme==='light'){
      return <MoonIcon 
      className='w-5 h-5 text-slate-800 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100'
      onClick={()=>setTheme('dark')}
      role='button'
      />
    }else{
      return <SunIcon
      className='w-5 h-5 text-slate-800 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100'
      onClick={()=>setTheme('light')}
      role='button' />
    }
  }

  const MenuToggle = () => {
   return  isOpen ? <XIcon className='w-5 h-5 text-slate-800 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100' onClick={() => setIsOpen(!isOpen)}/> : <MenuIcon className='w-5 h-5 text-slate-800 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100' onClick={() => setIsOpen(!isOpen)}/>
  }
  return (
    <div className="sticky top-0 z-10 flex flex-col backdrop-blur-xl shadow-sm ">
    <div className="flex flex-row w-full px-4 py-4 justify-between align-middle items-center">
        <h3 className="align-middle text-xl text-slate-800 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"> <NavLink href="/">Avatar App</NavLink></h3>
        <div className="hidden md:flex md:display:inline flex-row px-4 md:w-1/3 lg:w-1/5 justify-between align-middle items-center ">
          {renderThemeIcon()}
           <NavLink href="/characters">Characters</NavLink>
           <NavLink href="/avatars">Avatars</NavLink>
        </div>
        <div className="flex flex-row base:display:inline md:hidden w-1/5 justify-between align-middle items-center">
        {renderThemeIcon()}
          {MenuToggle()}
        </div>
    </div>
    {isOpen && 
    (<div className="relative flex flex-col base:display-inline md:hidden w-full p-4 justify-center items-center"> 
    <NavLink href="/characters" isOpen={isOpen} setIsOpen={setIsOpen}>Characters</NavLink>
    <NavLink href="/avatars" isOpen={isOpen} setIsOpen={setIsOpen}>Avatars</NavLink>
    </div>
    )}
    </div>
  )
}



const NavLink: React.FC<NavLinkType> =({href, children, isOpen,setIsOpen}) => {
  return(
    <Link href={href} passHref >
      <a className="text-slate-800 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100" onClick={isOpen && setIsOpen ? ()=>setIsOpen(!isOpen) :null} >{children}</a>
    </Link>
  )
}
export default NavBar