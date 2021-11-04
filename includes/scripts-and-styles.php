<?php 
function shopz_scripts() {

    // Enqueue global assets
    wp_enqueue_script( 'jquery' );
    wp_enqueue_style( 'shopz-style', get_theme_file_uri( '/build/css/app.css' ), [], time());
    wp_enqueue_script( 'shopz-js', get_theme_file_uri( '/build/js/app.js' ), ['jquery'], time(), true );
}

add_action( 'wp_enqueue_scripts', 'shopz_scripts' );



?>