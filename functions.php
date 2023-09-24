<?php

/**
 * 
 * Enqueue the scripts and styles
 * 
 */
function ow_styles() {
	wp_enqueue_style(
		'ow-style',
		get_stylesheet_uri(),
		[],
		OW_THEME_VERSION
	);

	wp_register_script(
		'lottiePlayer',
		'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js',
		'',
		true
	);

	wp_register_script(
		'lottieInteractive',
		'https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js',
		'',
		true
	);

	wp_register_script( 
		'toggle', 
		get_template_directory_uri() . '/assets/js/toggle.js', 
		array(), 
		'1.0.0', 
		true
	);

	wp_enqueue_script('lottiePlayer');
	wp_enqueue_script('lottieInteractive');
    wp_enqueue_script('toggle');
}
add_action( 'wp_enqueue_scripts', 'ow_styles' );

/**
 *
 * Add classes to the body tag.
 * 
 */
function ow_body_classes( $classes ) {
	$classes[] = 'no-animation';
	return $classes;
}
add_filter( 'body_class', 'ow_body_classes' );