<?php
// This file is generated. Do not modify it manually.
return array(
	'sb-animated-card' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/sb-animated-card',
		'version' => '0.1.0',
		'title' => 'animated card block',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'center',
				'full',
				'left',
				'right',
				'wide'
			)
		),
		'attributes' => array(
			'cards' => array(
				'type' => 'array',
				'default' => array(
					array(
						'imgUrl' => 'https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
						'cardNo' => '01',
						'mainTitle' => 'Design',
						'content' => 'Customer interactions, study and analysis of company branding through creative briefs. Creation of mock-up designs by using UI tools that simulate actions and pre-visualize the reactions.',
						'link' => array(
							'txt' => 'Read More',
							'href' => '#',
							'target' => '_self'
						)
					)
				)
			),
			'styles' => array(
				'type' => 'object',
				'default' => array(
					'sbWrapper' => array(
						'gap' => '15px',
						'display' => 'grid',
						'columns' => 1,
						'width' => '100%'
					),
					'shapeBox' => array(
						'position' => 'relative',
						'zIndex' => 1,
						'maxWidth' => '500px',
						'height' => '430px',
						'margin' => array(
							'top' => '30px',
							'bottom' => '30px',
							'left' => '10px',
							'right' => '10px'
						),
						'boxShadow' => ' 0 6px 30px 0 rgba(0,0,0, .12)',
						'overflow' => 'hidden',
						'width' => '100%',
						'borderRadius' => 0
					),
					'shapeBoxHalf' => array(
						'overflow' => 'hidden',
						'textAlign' => 'left'
					),
					'shapeBoxHalfBefore' => array(
						'content' => '',
						'position' => 'absolute',
						'top' => 0,
						'left' => 0,
						'right' => 0,
						'bottom' => 0,
						'transform' => 'skewY(53.5deg)',
						'transformOrigin' => 'top left',
						'transition' => 'transform .4s',
						'background' => '#fff',
						'zIndex' => 1
					),
					'shapeBoxImg' => array(
						'width' => '100%',
						'height' => '100%',
						'oObjectFit' => 'cover',
						'objectFit' => 'cover'
					),
					'bgBlack' => array(
						'bgColor' => '#000'
					),
					'ShapeBoxHalfFigCaption' => array(
						'position' => 'absolute',
						'left' => 0,
						'right' => 0,
						'bottom' => 0,
						'padding' => array(
							'top' => '0',
							'bottom' => '30px',
							'left' => '30px',
							'right' => '30px'
						),
						'transition' => 'transform .4s',
						'transform' => 'translateY(100%)',
						'zIndex' => 3
					),
					'ShapeBoxHalfFigCaptionShowContent' => array(
						'position' => 'absolute',
						'bottom' => 'calc(100% + 30px)',
						'left' => '30px',
						'right' => '30px',
						'transition' => 'bottom .4s'
					),
					'cardNo' => array(
						'fontSize' => '36px',
						'color' => '#ffc107',
						'padding' => array(
							'top' => '0',
							'bottom' => '0',
							'left' => '0',
							'right' => '0'
						),
						'margin' => array(
							'top' => '10px',
							'bottom' => '10px',
							'left' => '0',
							'right' => '0'
						),
						'fontWeight' => '500px'
					),
					'cardMainTitle' => array(
						'margin' => array(
							'top' => '8px',
							'bottom' => '0',
							'left' => '0',
							'right' => '0'
						),
						'fontWeight' => '700',
						'fontSize' => '24px',
						'textTransform' => 'uppercase',
						'color' => '#292b2c'
					),
					'cardContent' => array(
						'color' => '#9f9f9f',
						'margin' => array(
							'top' => '20px',
							'bottom' => '0',
							'left' => '0',
							'right' => '0'
						),
						'lineHeight' => 1.5,
						'fontSize' => '15px',
						'textTransform' => 'none'
					),
					'readMoreBtn' => array(
						'border' => array(
							'width' => '2px',
							'color' => '#db3236',
							'style' => 'solid'
						),
						'fontSize' => '14px',
						'cursor' => 'pointer',
						'padding' => array(
							'top' => '10px',
							'bottom' => '10px',
							'left' => '20px',
							'right' => '20px'
						),
						'display' => 'inline-block',
						'textTransform' => 'uppercase',
						'letterSpacing' => '.08em',
						'fontWeight' => '600',
						'position' => 'relative',
						'-webkit-transition' => 'all 0.3s',
						'-moz-transition' => 'all 0.3s',
						'transition' => 'all 0.3s',
						'background' => '#db3236',
						'color' => '#fff',
						'borderRadius' => 2,
						'margin' => array(
							'top' => '25px',
							'bottom' => '0',
							'left' => '0',
							'right' => '0'
						),
						'textDecoration' => 'none'
					),
					'readMoreBtnHover' => array(
						'background' => 'transparent',
						'color' => '#db3236'
					),
					'shapeBoxHalfAfter' => array(
						'position' => 'absolute',
						'top' => 0,
						'left' => 0,
						'right' => 0,
						'bottom' => 0,
						'background' => '#fdd744',
						'opacity' => 0,
						'transition' => 'opacity .4s;'
					),
					'shapeBoxHalfBeforeHover' => array(
						'transform' => 'skewY(20deg)'
					),
					'shapeBoxHalfHoverFigCaption' => array(
						'transform' => 'translateY(0)'
					),
					'shapeBoxHalfHoverFigCaptionShowContent' => array(
						'bottom' => '100%'
					),
					'shapeBoxHalfHoverAfter' => array(
						'opacity' => '1'
					)
				)
			),
			'options' => array(
				'type' => 'object',
				'default' => array(
					'selectedCardIdx' => 0
				)
			)
		),
		'textdomain' => 'sb-animated-card',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
