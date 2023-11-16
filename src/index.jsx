import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [buttonClicks, setButtonClicks] = useState({});
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    window.alert('გვერდი ჩაიტვირთა.');
    setPageLoaded(true);
  }, []);

  useEffect(() => {
    if (pageLoaded) {
      window.alert('გვერდზე დაფიქსირდა განახლება.');
    }
  }, [pageLoaded]);

  const handleButtonClick = (buttonName) => {
    setButtonClicks((prevClicks) => ({
      ...prevClicks,
      [buttonName]: (prevClicks[buttonName] || 0) + 1,
    }));
  };

  const buttons = [];
  for (let i = 1; i <= 99; i++) {
    const buttonName = `${i}`;
    buttons.push(
      <button
        className='btn btn-outline-light px-5 m-2'
        key={buttonName}
        onClick={() => handleButtonClick(buttonName)}
      >
        {buttonClicks[buttonName] || 0}
      </button>
    );
  }

  return (
    <div onClick={() => setPageLoaded(prev => !prev)}>
      <h3 className='m-2 py-3 text-light'>თითოეულ ღილაკს აწერია რამდენჯერ დააკლიკეს მას</h3>
      {buttons}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));