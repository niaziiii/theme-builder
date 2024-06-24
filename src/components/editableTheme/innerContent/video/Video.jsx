import React from 'react'

export default function Video() {
  return (
    <div className='flex justify-center w-full h-full m-4'>
        {/* vidoe link will be replaced with actual video link */}
        <iframe className='w-full h-full' width="560" height="315" src="https://www.youtube.com/embed/y7TlnAv6cto?si=sq1wRBSwDujSo-74" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}
