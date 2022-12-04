import React from 'react';
import NoneRouter from '../../Router/NoneRouter';
import './ChatLayout.css';

function NoneLayout(props) {
	return (
		<div clsssName='wrapper'>
			<main>
				<div>
					<NoneRouter />
				</div>
			</main>
		</div>
	);
}

export default NoneLayout;
