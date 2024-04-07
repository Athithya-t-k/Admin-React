import React from 'react'

const FilledStar = () => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 32 32">
    <defs>
      <linearGradient id="grad">
        <stop offset="100%" stopColor="yellow"/>
      </linearGradient>
    </defs>
    <path fill="url(#grad)" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
  l11.547-1.2L16.026,0.6L20.388,10.918z"/>
  </svg>
  )
}

export default FilledStar
