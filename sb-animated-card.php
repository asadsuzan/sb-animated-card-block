<?php
/**
 * Plugin Name:       animated card block
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           1.0.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       sb-animated-card
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'PSB_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'PSB_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'PSB_DIR_PATH', plugin_dir_path( __FILE__ ) );

add_action( 'init', 'create_block_sb_animated_card_block_init' );
add_action( 'admin_enqueue_scripts', 'acb_wp_enqueue_scripts' );


function create_block_sb_animated_card_block_init() {
	
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
		return;
	}
	if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
		wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
	}
	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach ( array_keys( $manifest_data ) as $block_type ) {
		register_block_type( __DIR__ . "/build/{$block_type}" );
	}
}

function acb_wp_enqueue_scripts($hook){
	echo $hook;

	if ($hook === "tools.php") {
		wp_enqueue_script(
		"my_custom_script",
		// "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
		PSB_DIR_URL . "./src/swiper/swiper-bundle.min.js",
		[],
		PSB_VERSION,
		true
    );

	wp_enqueue_style(
		"my_custom_style",
		// "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
		PSB_DIR_URL . "./src/swiper/swiper-bundle.min.css",
		PSB_VERSION
    );
	}

	


}


