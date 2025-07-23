
import { __ } from '@wordpress/i18n';

import { useBlockProps } from '@wordpress/block-editor';

import './editor.scss';
import Card from '../components/common/Card';
import StyleSettings from '../components/settings/StyleSettings';
import GeneralSettings from '../components/settings/GeneralSettings';
import Style from '../components/common/Style';



export default function Edit({ attributes, setAttributes }) {
	const { cards, styles } = attributes
	return (
		<>
			<StyleSettings {...{ attributes, setAttributes }} />
			<GeneralSettings {...{ attributes, setAttributes }} />


			<div {...useBlockProps()}>
				<Style {...{ styles }} />
				{
					cards.map((card, idx) => {
						return <Card key={idx} {...{ card }} />
					})
				}

			</div>
		</>
	);
}
