import React from 'react';

import './card-list.styles.css';

import { Card } from '../card/card.component.jsx';

export const CardList = props => {
	return (
		<div className='card-list'>
			{props.monsters.map(monster => (
				<Card key={monster.id} monster={monster} /> //* here we put another curly braces because that is what is going to be put in this slot, so it needs to specify again that this is js, not jsx.
			))}
		</div>
	);
};
