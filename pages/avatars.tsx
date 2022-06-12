import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import { Character } from '../api/api';
import LazyImage from '../components/LazyImage';

export const getServerSideProps:GetServerSideProps = async (context) => {
  let result:any;
  await Character.getAvatar().then((data) => result=data);
  return{
    props:{
      data:result
    }
  }

}

const avatars:NextPage = ({data}:any) => {
  return (
    <div className="mx-auto max-w-2xl sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {data.map((data) => (
          <LazyImage key={data._id} image={data} />
        ))}
        </div>
    </div>
  )
}

export default avatars;