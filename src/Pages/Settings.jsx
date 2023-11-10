import React, { useState, useEffect } from 'react';
import{ PiUserBold} from 'react-icons/pi'
import{BsFillHeartFill,BsShare} from 'react-icons/bs'
import{MdOutlineStarRate}from 'react-icons/md'
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  
  useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundColor = 'black'; 
      document.body.style.color = '#fff'; 
        } else {
      document.body.style.backgroundColor = '#fff'; 
            document.body.style.color = '#333'; 
    }
  }, [isDarkMode]);

  const handleThemeChange = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className='set'>
      <p>Account  <PiUserBold  className='ico mx-2'/></p>
     <p>Favourites<BsFillHeartFill className='ico mx-2'/></p>
     <p>Shared recipes<BsShare className='ico mx-2'/></p>
     <p>Ratings<MdOutlineStarRate className='ico'/></p>
      <button onClick={handleThemeChange} className='btn'>
        {isDarkMode ? 'light theme' : ' Dark Mode'}
      </button>
    </div>
  );
};

export default App;
