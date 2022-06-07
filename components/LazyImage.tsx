import React, {useState} from 'react';
import Image from 'next/image';
import { CharacterType } from '../models/character.interface';

function cn(...classes:string[]){
    return classes.filter(Boolean).join(' ')
}

const LazyImage:React.FC<{image:CharacterType}> = ({image}:{image:CharacterType}) => {
    const [loading,setLoading] = useState(true) 
  return (
    <div className="group">
    <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
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
      />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{image.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{!image.affiliation?"No Affiliation":image.affiliation}</p>
    </div>    
  )
}

export default LazyImage;