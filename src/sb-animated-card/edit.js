
import { __ } from '@wordpress/i18n';

import { useBlockProps } from '@wordpress/block-editor';

import './editor.scss';
import Card from '../components/common/Card';

export default function Edit() {
	return (
		<div {...useBlockProps()}>

			<Card />

		</div>
	);
}
