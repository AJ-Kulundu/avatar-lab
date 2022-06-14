import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CharacterType } from '../models/character.interface';
import { NavLinkType } from '../models/navLink.interface';

interface ImageType extends CharacterType{
  href?:string;
}

function cn(...classes:string[]){
    return classes.filter(Boolean).join(' ')
}

const LazyImage:React.FC<{image:ImageType}> = ({image}) => {
    const [loading,setLoading] = useState(true) 
  return (
    
    <div className="group" >
    <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-800 xl:aspect-w-7 xl:aspect-h-8'>
     <Image 
      alt={image.name}
      src={!image.photoUrl?"https://bit.ly/placeholder-img": image.photoUrl}
      layout='fill'
      objectFit='cover'
      className={cn(
        'duration-700 ease-in-out group-hover:opacity-75',
        loading
          ? 'scale-110 blur-2xl grayscale'
          : 'scale-100 blur-0 grayscale-0'
      )}
      onLoadingComplete={()=>setLoading(false)}
      priority={image.photoUrl== "https://vignette.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png/revision/latest?cb=20130612174003"|| "https://bit.ly/placeholder-img" ? true :false}
      />
      </div>
     <Navlink href={`/characters/${image._id}`}>{image.name}</Navlink>
      <p className="mt-1 text-lg font-medium text-slate-800 group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-slate-100">{!image.affiliation?"No Affiliation":image.affiliation}</p>
    </div>  
    
  )
}

const Navlink: React.FC <NavLinkType> = ({href,children}) =>{
return(
  <Link href={href} passHref>
    <a>
    <h3 className='mt-4 text-lg text-slate-800 group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-slate-100'>{children}</h3>
    </a>
    </Link>
)
}
export default LazyImage;