import React, {useState} from 'react';
import * as PropTypes from 'prop-types';

export const SiteContext = React.createContext([
	{
		showFullHistory: false,
	},
	{
		showFull: () => null,
		showRecent: () => null,
	},	
])

const Store = ({children}) => {
	const [showFullHistory, setShowFullHistory] = useState(false);
	const showFull = () => setShowFullHistory(true);
	const showRecent = () => setShowFullHistory(false);

	return (
		<SiteContext.Provider value={[{showFullHistory}, {showFull, showRecent}]}>
			{children}
		</SiteContext.Provider>
	);
}

Store.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Store;