import React from 'react';

const Filler = ( {theme} ) => {
    return(
        <div className={theme === 'dark' ? 'fillerDark' : 'fillerLight'}>
            <h1 className="p3">Welcome to Sticky Notes Dashboard!</h1>
            <h4 className="openingInfo"><i className={theme === 'dark' ? 'yellow far fa-hand-point-left' : 'white far fa-hand-point-left'}></i>Add your first note by clicking on the plus button</h4>
            <h4 className="openingInfo">Select your location by clicking on "My location"<i className={theme === 'dark' ? 'yellow far fa-hand-point-up' : 'white far fa-hand-point-up'}></i></h4>
            <h4 className="openingInfo">Choose your preferred theme by toggling on/off button <i className={theme === 'dark' ? 'yellow far fa-hand-point-up' : 'white far fa-hand-point-up'}></i></h4>
        </div>
    )
}

export default Filler;