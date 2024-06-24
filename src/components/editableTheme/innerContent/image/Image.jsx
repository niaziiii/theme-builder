import React from 'react'
import Image from 'next/image';
import innerImg from "../../public/img1.jpg"
const InnerImage = () => {
  return (
    <div>
            <Image src={innerImg} width={500} height={500} alt='content image' className='m-2' />
    </div>
  )
}

export default InnerImage;
