import React, {useState} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Health = (props) => {
return (
    <>
    	{props.numHealth ? <h3 className="numHealth">{props.numHealth}</h3> : null }

	    <div className={'pbHealth ' + (props.health > 50 ? 'yellow' : 'green')}>
		    <ProgressBar now={props.health} />
	    </div>
    </>
)
}
export default Health;