import React, {useState,useEffect} from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { SunIcon,MoonIcon } from '@heroicons/react/solid';

const NavBar = () => {
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
  return (
    <div className="sticky top-0 z-10 flex flex-row w-full px-4 py-4 justify-between align-middle items-center shadow-sm backdrop-blur-xl ">
        <h3 className="align-middle text-xl text-slate-800 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100">Avatar App</h3>
        <div className="flex flex-row px-4 w-1/5 justify-between align-middle items-center ">
          {renderThemeIcon()}
           <NavLink href="/">Characters</NavLink>
           <NavLink href="/avatars">Avatars</NavLink>
        </div>
    </div>
  )
}



const NavLink =({href, children}) => {
  return(
    <Link href={href} passHref>
      <a className="text-slate-800 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100" >{children}</a>
    </Link>
  )
}
export default NavBar