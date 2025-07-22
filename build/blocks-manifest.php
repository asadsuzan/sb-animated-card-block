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
						'cardNo' => 1,
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
					
				)
			),
			'options' => array(
				'type' => 'object',
				'default' => array(
					
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
