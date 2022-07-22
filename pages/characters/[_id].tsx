import React, {useState} from 'react';
import { NextPage, GetServerSideProps} from 'next';
import { Character } from '../../api/api';
import Image from 'next/image';
import { cn } from '../../utils/cn';

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  let result:any;
  const {_id}=params;
  await Character.getSingleCharacter(_id).then(data => result = data);

  return { props: {data:result } };
}

const SingleCharacter:NextPage = ({data}:any) => {
  const [loading,setLoading] = useState(true) 
  console.log(data);
  return (
    <div className='flex flex-col mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:gap-x-10 md:grid-cols-2">
        <div className="flex flex-col gap-y-4">
          <h1 className='text-xl font-semibold tracking-wide'>{data.name}</h1>
          <div className='aspect-w-3 aspect-h-4 w-full overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-800 xl:aspect-w-7 xl:aspect-h-8'>
          <Image 
            alt={data.name} 
            src={!data.photoUrl?"https://bit.ly/placeholder-img": data.photoUrl} 
            layout='fill'
            objectFit='cover'
            className={cn(
              'duration-700 ease-in-out group-hover:opacity-75',
              loading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
              )}
            onLoadingComplete={()=>setLoading(false)}/>
          </div>
          <h1 className='text-lg font-medium'>{data.affiliation}</h1>
        </div>
        <div className="flex flex-col lg:p-4 lg:ml-8 gap-y-6">
          <div className='flex flex-col justify-start gap-y-4'>
          <h1 className='text-2xl font-semibold tracking-wide'> Allies</h1>
          <ul className='list-disc list-inside'>
          {data.allies.map((ally,id)=> (
            <li key={id} >{ally}</li>
          ))}
          </ul>
          </div>
          <div className='flex flex-col justify-start gap-y-4'>
          <h1 className='text-xl font-semibold tracking-wide'>Enemies</h1>
          <ul className='list-disc list-inside'>
          {data.enemies.map((ally,id)=> (
            <li key={id} className="text-lg font-medium tracking-normal">{ally}</li>
          ))}
          </ul>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-y-4 mt-4'>
        <h1 className='text-xl font-semibold tracking-wide' >Other Traits</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 list-disc list-inside">
       {data.gender? (<li className="text-md font-medium tracking-normal">{" "}Gender:{" "}{data.gender}</li>): null}
       {data.eye? (<li className="text-md font-medium tracking-normal">{" "}Eye:{" "}{data.eye}</li>): null}
       {data.hair? (<li className="text-md font-medium tracking-normal">{" "}Hair:{" "}{data.hair}</li>): null}
       {data.skin? (<li className="text-md font-medium tracking-normal">{" "}Skin Colour:{" "}{data.skin}</li>): null}
       {data.predecessor? (<li className="text-md font-medium tracking-normal">{" "}Predecessor:{" "}{data.predecessor}</li>): null}
       {data.weapon? (<li className="text-md font-medium tracking-normal">{" "}Weapon:{" "}{data.weapon}</li>): null}
       {data.profession? (<li className="text-md font-medium tracking-normal">{" "}Profession:{" "}{data.profession}</li>): null}
      </ul>
      </div>
    </div>
  )
}

export default SingleCharacter