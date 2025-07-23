
import { __ } from '@wordpress/i18n';

import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	PanelBody, __experimentalUnitControl as UnitControl,
	__experimentalBoxControl as BoxControl

} from '@wordpress/components';
import { produce } from 'immer'
import './editor.scss';
import Card from '../components/common/Card';
// import StyleSettings from '../components/settings/StyleSettings';
// import GeneralSettings from '../components/settings/GeneralSettings';
import Style from '../components/common/Style';




export default function Edit({ attributes, setAttributes }) {
	const { cards, styles } = attributes
	return (
		<>
			{/* <StyleSettings {...{ attributes, setAttributes }} />
			<GeneralSettings {...{ attributes, setAttributes }} /> */}


			<InspectorControls group='styles'>
				<PanelBody title='Container'>
					{/* width  */}
					<UnitControl label="width" value={styles.shapeBox.width} unit='%' onChange={(width) => {
						setAttributes(produce(attributes, draft => {
							draft.styles.shapeBox.width = width
						}))
					}} />
					{/* height  */}
					<UnitControl label="height" value={styles.shapeBox.height} unit='px' onChange={(height) => {
						setAttributes(produce(attributes, draft => {
							draft.styles.shapeBox.height = height
						}))
					}} />

					{/* margin  */}
					<BoxControl label='margin' values={styles.shapeBox.margin} onChange={(margin) => {
						setAttributes(produce(attributes, draft => {
							draft.styles.shapeBox.margin = margin
						}))
					}} />
				</PanelBody>
			</InspectorControls>
			<InspectorControls ></InspectorControls>




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
