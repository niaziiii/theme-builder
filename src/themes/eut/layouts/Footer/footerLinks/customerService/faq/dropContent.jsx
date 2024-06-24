import React from 'react'

const DropContent = () => {
    const dropContent = [
        {
          title: ["this is content 1"]
        },
        {
          title: ["this is content 2"]
        }
        ,
        {
          title: ["this is content 3"]
        },
      ]
  return (
    <div>
       {dropContent.title.map((item) =>
                      (
                        <div className='block my-2 border border-gray-200'>
                          {item}
                        </div>
                      ))}
    </div>
  )
}

export default DropContent
