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
