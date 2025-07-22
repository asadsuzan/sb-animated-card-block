
import { __ } from '@wordpress/i18n';

import { useBlockProps } from '@wordpress/block-editor';

import './editor.scss';
import Card from '../components/common/Card';

export default function Edit({ attributes, setAttributes }) {
	const { cards } = attributes
	return (
		<div {...useBlockProps()}>

			{
				cards.map((card, idx) => {
					return <Card key={idx} {...{ card }} />
				})
			}

		</div>
	);
}
