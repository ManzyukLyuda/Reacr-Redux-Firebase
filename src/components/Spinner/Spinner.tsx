import React from 'react';
import { useSelector } from "react-redux";
import { selectIsLoading } from '../../selectors';
import './Spinner.css';

type Props = {
	children: JSX.Element;
};

const Spinner: React.FC<Props> = ({ children }) => {
	const isLoading = useSelector(selectIsLoading);
	if (isLoading) {
		return (
			<div className='preloader-wrapper'>
				<div className='spinner-layer'>
					<div className='circle-clipper left'>
						<div className='circle'></div>
					</div>
					<div className='gap-patch'>
						<div className='circle'></div>
					</div>
					<div className='circle-clipper right'>
						<div className='circle'></div>
					</div>
				</div>
			</div>
		);
	}
	return children;;
};

export default Spinner;