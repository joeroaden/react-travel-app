import React, { useState } from 'react'

export const Header = ({ImageList}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const myBackgroundImageWithStyles = {
    backgroundImage: `url(${ImageList[currentIndex].image})`
  }
  return (
    <div>
      <div className='backgroundImage'>Hello</div>
    </div>
  )
}

