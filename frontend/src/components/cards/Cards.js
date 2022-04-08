import React from 'react';

const Cards = (props) => {
	return <div className={props.className}>{props.children}</div>;
};

export default Cards;
