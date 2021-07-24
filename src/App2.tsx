import React from 'react';
import { useAppDispatch, useAppSelector } from './state/hooks';
import { setMyLove } from './state/mylove';

function App2(): React.ReactElement {
	const myLove = useAppSelector((state) => state.myLove.name);
	const dispatch = useAppDispatch();

	return (
		<div>
			<h1>Hello Redux Toolkit App2</h1>
			<p>My love is {myLove}</p>
			<button onClick={() => dispatch(setMyLove('rose'))}>
				change my love
			</button>
		</div>
	);
}

export default App2;
