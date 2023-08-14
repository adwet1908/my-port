import React from 'react';

const LinkButton = (props) => {
    const profileUrl = props.url;

    return (
        <div >
            <p style={{fontSize: '25px', fontStyle: 'Borel'}}>Click the button to visit my {props.site} profile  : 
                <a href={profileUrl} target="_blank" rel="noopener noreferrer">
                    <button className='link-button'> Visit {props.site}</button>
                </a>
            </p>
        </div>
    );
};

export default LinkButton;
