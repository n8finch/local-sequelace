import React from 'react';
import SequelAce from './SequelAce.js';

module.exports = function (context) {
	const { hooks } = context;

	hooks.addContent('SiteInfoDatabase_TableList_TableListRow[Connect]:Before', (site) => (
		<SequelAce key="sequelace" site={site} context={context} />
	));
};
