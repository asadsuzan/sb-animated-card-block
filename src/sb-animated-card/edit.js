
import { __ } from '@wordpress/i18n';

import { InspectorControls, useBlockProps, AlignmentControl, PanelColorSettings, MediaUpload } from '@wordpress/block-editor';
import {
	PanelBody, __experimentalUnitControl as UnitControl,
	__experimentalBoxControl as BoxControl, Flex, FlexItem,
	RangeControl,
	FontSizePicker,
	SelectControl, BorderControl,
	Button,
	TextControl,
	TextareaControl,
	FocalPointPicker

} from '@wordpress/components';
import { produce } from 'immer'
import './editor.scss';
import Card from '../components/common/Card';
// import StyleSettings from '../components/settings/StyleSettings';
// import GeneralSettings from '../components/settings/GeneralSettings';
import Style from '../components/common/Style';
import { useState } from 'react';




export default function Edit({ attributes, setAttributes }) {
	const [focalPoint, setFocalPoint] = useState({
		x: 0.5,
		y: 0.5,
	});

	const { cards, styles, options } = attributes
	const url = cards[options?.selectedCardIdx].imgUrl;
	/* Example function to render the CSS styles based on Focal Point Picker value */
	const style = {
		backgroundImage: `url(${cards[options?.selectedCardIdx]?.imgUrl})`,
		backgroundPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`,
		height: "100%", width: "100%",
		backgroundSize: "cover"
	};
	const FONT_SIZES = [
		{ name: __('Small'), slug: 'small', size: 12 },
		{ name: __('Normal'), slug: 'normal', size: 16 },
		{ name: __('Medium'), slug: 'medium', size: 20 },
		{ name: __('Large'), slug: 'large', size: 24 },
		{ name: __('Extra Large'), slug: 'x-large', size: 32 },
		{ name: __('Huge'), slug: 'huge', size: 48 },
	];
	const FONT_WEIGHTS = [
		{ label: 'Default', value: '' },
		{ label: 'Thin (100)', value: '100' },
		{ label: 'Extra Light (200)', value: '200' },
		{ label: 'Light (300)', value: '300' },
		{ label: 'Normal (400)', value: '400' },
		{ label: 'Medium (500)', value: '500' },
		{ label: 'Semi Bold (600)', value: '600' },
		{ label: 'Bold (700)', value: '700' },
		{ label: 'Extra Bold (800)', value: '800' },
		{ label: 'Black (900)', value: '900' },
	]
	const TEXT_TRANSFORMS = [
		{ label: 'None', value: 'none' },
		{ label: 'Uppercase', value: 'uppercase' },
		{ label: 'Lowercase', value: 'lowercase' },
		{ label: 'Capitalize', value: 'capitalize' },
	]
	const LINK_TARGET = [
		{ label: "_Blank", value: "_blank" },
		{ label: "_Parent", value: "_parent" },
		{ label: "_Self", value: "_self" },
		{ label: "_Top", value: "_top" },
	]
	// handle add card 
	const handleAddCard = () => {
		setAttributes(produce(attributes, draft => {
			draft.cards.push({
				"imgUrl": "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
				"cardNo": "01",
				"mainTitle": "Design",
				"content": "Customer interactions, study and analysis of company branding through creative briefs. Creation of mock-up designs by using UI tools that simulate actions and pre-visualize the reactions.",
				"link": {
					"txt": "Read More",
					"href": "#",
					"target": "_self"
				}
			})
		}))
	}

	// handle delete card 

	const handleDeleCard = () => {
		if (cards.length > 1) {
			setAttributes(produce(attributes, draft => {
				draft.cards.splice(options.selectedCardIdx, 1)
			}))
		}
	}

	// handle img upload 
	const handleImgUpload = (mediaUrl) => {

		setAttributes(produce(attributes, draft => {
			draft.cards[options.selectedCardIdx].imgUrl = mediaUrl
		}))

	}

	//  handle Heading change 
	const handleHeadingChange = (newHeading) => {

		setAttributes(produce(attributes, draft => {
			draft.cards[options.selectedCardIdx].cardNo = newHeading
		}))

	}
	//  handle Sub- Heading change 
	const handleSubHeadingChange = (newSubHeading) => {

		setAttributes(produce(attributes, draft => {
			draft.cards[options.selectedCardIdx].mainTitle = newSubHeading
		}))

	}
	//  handle content change 
	const handleContentChange = (content) => {

		setAttributes(produce(attributes, draft => {
			draft.cards[options.selectedCardIdx].content = content
		}))

	}

	//  handle handleLinkTxt
	const handleLinkTxt = (txt) => {
		setAttributes(produce(attributes, draft => {
			draft.cards[options.selectedCardIdx].link.txt = txt
		}))
	}

	//  handle href 
	const handleLinkHref = (href) => {
		setAttributes(produce(attributes, draft => {
			draft.cards[options.selectedCardIdx].link.href = href
		}))
	}
	return (
		<>



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
					{/* border radius  */}
					<RangeControl
						label="Border Radius"
						value={styles.shapeBox.borderRadius || 0}
						min={0}
						max={100}
						step={1}
						onChange={(radius) => {
							setAttributes(produce(attributes, draft => {
								draft.styles.shapeBox.borderRadius = radius
							}))
						}}
					/>
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

					<p>content </p>
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
					<p>Image </p>
					<PanelColorSettings

						initialOpen={false}
						colorSettings={[
							{
								value: styles.shapeBoxHalfAfter.background,
								onChange: (color) => setAttributes(produce(attributes, draft => {
									draft.styles.shapeBoxHalfAfter.background = color
								})),
								label: 'Background Color',
							},
						]}
					/>


				</PanelBody>

				{/* Typography */}

				<PanelBody title='Typography' initialOpen={false}>
					<PanelBody title='Heading'>
						{/* font size  */}
						<FontSizePicker fontSizes={FONT_SIZES}

							value={styles.cardNo.fontSize}

							onChange={(size) => setAttributes(produce(attributes, draft => {
								draft.styles.cardNo.fontSize = size
							}))}

						/>
						{/* text color  */}

						<PanelColorSettings

							initialOpen={false}
							colorSettings={[
								{
									value: styles.cardNo.color,
									onChange: (color) => setAttributes(produce(attributes, draft => {
										draft.styles.cardNo.color = color
									})),
									label: 'Text Color',
								},
							]}
						/>


					</PanelBody>
					<PanelBody title='Sub Heading'>
						{/* font size  */}
						<FontSizePicker fontSizes={FONT_SIZES}

							value={styles.cardMainTitle.fontSize}

							onChange={(size) => setAttributes(produce(attributes, draft => {
								draft.styles.cardMainTitle.fontSize = size
							}))}

						/>
						{/* text color  */}

						<PanelColorSettings

							initialOpen={false}
							colorSettings={[
								{
									value: styles.cardMainTitle.color,
									onChange: (color) => setAttributes(produce(attributes, draft => {
										draft.styles.cardMainTitle.color = color
									})),
									label: 'Text Color',
								},
							]}
						/>

						<SelectControl
							label="Text Transform"
							value={styles.cardMainTitle.textTransform || 'none'}
							options={TEXT_TRANSFORMS}
							onChange={(value) => setAttributes(produce(attributes, draft => {
								draft.styles.cardMainTitle.textTransform = value
							}))}
						/>
						<SelectControl
							label="Font Weight"
							value={styles.cardMainTitle.fontWeight || 'normal'}
							options={FONT_WEIGHTS}
							onChange={(value) => setAttributes(produce(attributes, draft => {
								draft.styles.cardMainTitle.fontWeight = value
							}))}
						/>
					</PanelBody>
					<PanelBody title='Content'>
						{/* font size  */}
						<FontSizePicker fontSizes={FONT_SIZES}

							value={styles.cardContent.fontSize}

							onChange={(size) => setAttributes(produce(attributes, draft => {
								draft.styles.cardContent.fontSize = size
							}))}

						/>
						{/* text color  */}

						<PanelColorSettings

							initialOpen={false}
							colorSettings={[
								{
									value: styles.cardContent.color,
									onChange: (color) => setAttributes(produce(attributes, draft => {
										draft.styles.cardContent.color = color
									})),
									label: 'Text Color',
								},
							]}
						/>
						<RangeControl
							label="Line Height"
							value={styles.cardContent.lineHeight || 1.6}
							min={1}
							max={3}
							step={0.1}
							onChange={(lineHeight) => setAttributes(produce(attributes, draft => {
								draft.styles.cardContent.lineHeight = lineHeight
							}))}
						/>

						<SelectControl
							label="Text Transform"
							value={styles.cardContent.textTransform || 'none'}
							options={TEXT_TRANSFORMS}
							onChange={(value) => setAttributes(produce(attributes, draft => {
								draft.styles.cardContent.textTransform = value
							}))}
						/>
					</PanelBody>

				</PanelBody>


				{/* button styles  */}
				<PanelBody title='Button' initialOpen={false}>
					{/* font size  */}
					<FontSizePicker fontSizes={FONT_SIZES}

						value={styles.readMoreBtn.fontSize}

						onChange={(size) => setAttributes(produce(attributes, draft => {
							draft.styles.readMoreBtn.fontSize = size
						}))}

					/>
					{/* font weight  */}
					<SelectControl
						label="Font Weight"
						value={styles.readMoreBtn.fontWeight || 'normal'}
						options={FONT_WEIGHTS}
						onChange={(value) => setAttributes(produce(attributes, draft => {
							draft.styles.readMoreBtn.fontWeight = value
						}))}
					/>
					{/* text transform  */}
					<SelectControl
						label="Text Transform"
						value={styles.readMoreBtn.textTransform || 'none'}
						options={TEXT_TRANSFORMS}
						onChange={(value) => setAttributes(produce(attributes, draft => {
							draft.styles.readMoreBtn.textTransform = value
						}))}
					/>
					{/* padding  */}
					<BoxControl label='Padding' values={styles.readMoreBtn.padding} onChange={(padding) => {
						setAttributes(produce(attributes, draft => {
							draft.styles.readMoreBtn.padding = padding
						}))
					}} />
					{/* border radius  */}
					<RangeControl
						label="Border Radius"
						value={styles.readMoreBtn.borderRadius || 0}
						min={0}
						max={100}
						step={1}
						onChange={(radius) => {
							setAttributes(produce(attributes, draft => {
								draft.styles.readMoreBtn.borderRadius = radius
							}))
						}}
					/>
					{/* border  */}
					<BorderControl
						label="styles"
						value={styles.readMoreBtn.border}
						onChange={(borderStyle) => setAttributes(produce(attributes, draft => {
							draft.styles.readMoreBtn.border = borderStyle
						}))}
					/>
					{/* background  */}
					<PanelColorSettings

						initialOpen={false}
						colorSettings={[
							{
								value: styles.readMoreBtn.background,
								onChange: (color) => setAttributes(produce(attributes, draft => {
									draft.styles.readMoreBtn.background = color
								})),
								label: 'Background Color',
							},
						]}
					/>
					{/* text color  */}
					<PanelColorSettings

						initialOpen={false}
						colorSettings={[
							{
								value: styles.readMoreBtn.color,
								onChange: (color) => setAttributes(produce(attributes, draft => {
									draft.styles.readMoreBtn.color = color
								})),
								label: 'Text  Color',
							},
						]}
					/>

					{/* on hover  */}
					<p>On Hover</p>
					{/* background  */}
					<PanelColorSettings

						initialOpen={false}
						colorSettings={[
							{
								value: styles.readMoreBtnHover.background,
								onChange: (color) => setAttributes(produce(attributes, draft => {
									draft.styles.readMoreBtnHover.background = color
								})),
								label: 'Background Color',
							},
						]}
					/>
					{/* text color  */}
					<PanelColorSettings

						initialOpen={false}
						colorSettings={[
							{
								value: styles.readMoreBtnHover.color,
								onChange: (color) => setAttributes(produce(attributes, draft => {
									draft.styles.readMoreBtnHover.color = color
								})),
								label: 'Text  Color',
							},
						]}
					/>
				</PanelBody>
			</InspectorControls>
			<InspectorControls >








				{/* grid settings  */}
				<PanelBody title="Grid Settings" initialOpen={false}>
					<RangeControl
						label="Number of Columns"
						value={styles.sbWrapper.columns || 1}
						onChange={(column) => {
							setAttributes(produce(attributes, draft => {
								draft.styles.sbWrapper.columns = column
							}))
						}}
						min={1}
						max={4}
					/>
				</PanelBody>

				<FocalPointPicker
					__nextHasNoMarginBottom
					url={url}
					value={focalPoint}
					onDragStart={setFocalPoint}
					onDrag={setFocalPoint}
					onChange={setFocalPoint}
				/>
				<PanelBody title='Card Item'>
					{/* media upload  */}
					<MediaUpload
						onSelect={(media) => {
							handleImgUpload(media.url)
						}}
						multiple={false}
						render={({ open }) => (
							<div style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								gap: "5px"
							}}>
								<img height={"50px"} width={"100px"} alt='user' src={cards[options?.selectedCardIdx]?.imgUrl} />
								<Button style={{
									textAlign: "Center"
								}} variant='primary' icon={"upload"} size='small' onClick={open}>
									upload
								</Button>
								<span>Or</span>
								<TextControl label="add url" value={cards[options?.selectedCardIdx]?.imgUrl} onChange={(newUrl) => handleImgUpload(newUrl)} />

							</div>
						)}
					/>

					<TextControl label="Heading" value={cards[options.selectedCardIdx]?.cardNo} onChange={handleHeadingChange} />

					<TextControl label="Sub Heading" value={cards[options.selectedCardIdx]?.mainTitle} onChange={handleSubHeadingChange} />

					<TextareaControl label="content" value={cards[options.selectedCardIdx]?.content} onChange={handleContentChange} />

					<PanelBody title='Link'>
						<TextControl label="Text" value={cards[options.selectedCardIdx]?.link.txt} onChange={handleLinkTxt} />
						<TextControl label="Href" value={cards[options.selectedCardIdx]?.link.href} onChange={handleLinkHref} />

						<SelectControl
							label="Target"
							value={cards[options?.selectedCardIdx].link.target}
							options={LINK_TARGET}
							onChange={(value) => setAttributes(produce(attributes, draft => {
								draft.cards[options?.selectedCardIdx].link.target = value
							}))}
						/>

					</PanelBody>

					{/* add and remove card item  */}
					<div style={{
						display: "flex",
						justifyContent: "space-between"
					}}>
						<Button variant='primary' onClick={handleAddCard}>Add Card</Button>
						{
							cards?.length > 1 && <Button variant='secondary' onClick={handleDeleCard}>Remove Card</Button>
						}
					</div>
				</PanelBody>
			</InspectorControls>




			<div {...useBlockProps({
				draggable: false
			})}>
				<Style {...{ styles }} />

				<div className='sb-wrapper'>
					{
						cards.map((card, idx) => {
							return <Card key={idx} {...{ card, options, attributes, setAttributes, idx, isBackend: true, style }} />
						})
					}
				</div>


			</div>
		</>
	);
}
