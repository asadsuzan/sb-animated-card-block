
import { __ } from '@wordpress/i18n';

import { InspectorControls, useBlockProps, AlignmentControl, PanelColorSettings } from '@wordpress/block-editor';
import {
	PanelBody, __experimentalUnitControl as UnitControl,
	__experimentalBoxControl as BoxControl, Flex, FlexItem,
	RangeControl

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
				{/* main container styles  */}
				<PanelBody title='Container' initialOpen={false}>
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
					{/* text alignment  */}
					<p>Text Align</p>
					<Flex align="center" gap="8px" >
						<FlexItem>
							<AlignmentControl

								value={styles?.shapeBoxHalf.textAlign}
								onChange={(align) =>
									setAttributes(produce(attributes, (draft) => {
										draft.styles.shapeBoxHalf.textAlign = align;
									}))
								}
							/>
						</FlexItem>
						<FlexItem>
							<span style={{ fontStyle: 'italic', fontSize: '13px' }}>
								{
									{
										left: 'Left Aligned',
										center: 'Center Aligned',
										right: 'Right Aligned',
										justify: 'Justified',
										undefined: 'Default',
										null: 'Default',
									}[styles?.shapeBoxHalf.textAlign]
								}
							</span>
						</FlexItem>
					</Flex>
				</PanelBody>

				{/* overlay styles  */}
				<PanelBody title='Overlay' initialOpen={false}>
					<PanelColorSettings

						initialOpen={false}
						colorSettings={[
							{
								value: styles.shapeBoxHalfBefore.background,
								onChange: (color) => setAttributes(produce(attributes, draft => {
									draft.styles.shapeBoxHalfBefore.background = color
								})),
								label: 'Background Color',
							},
						]}
					/>


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
