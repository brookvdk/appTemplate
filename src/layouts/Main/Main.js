import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as mainActions from '../../actions/Main';

const Main = () => {
  const main = useSelector((state) => state.main);
  const dispatch = useDispatch();
  
  const handleButtonClick = () => {
    const value = main.mainVariable === 'Clicked' ? 'Not Clicked' : 'Clicked';
    dispatch(mainActions.mainChange(value));
  }

  return (
    <>
      <p>Main Layout</p>
      <button onClick={handleButtonClick}>Click here!</button>
      <p>{main.mainVariable}</p>
    </>
  );
}

export default Main;
