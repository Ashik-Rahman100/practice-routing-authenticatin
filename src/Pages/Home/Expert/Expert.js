import React from 'react';

const Expert = ({expert}) => {
    const{name, expetise,img} = expert;
    return (
        <div className='col-lg-4 col-sm-6 col-12 '>
            <img src={img} alt="" />
            <h2>{expetise}</h2>
            <h4>{name}</h4>
        </div>
    );
};

export default Expert;