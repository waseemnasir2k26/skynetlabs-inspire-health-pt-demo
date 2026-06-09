<?php
/**
 * Inspire Health PT — theme bootstrap.
 *
 * FSE block theme. Tokens/palette/typography live in theme.json; signature
 * runtime styling lives in assets/css/theme.css (enqueued front + editor).
 * This file wires: asset enqueue, editor styles, block-style registration,
 * nav menu, theme supports (incl. WooCommerce), a body "grain" class, and the
 * structured-data (JSON-LD) block injected into wp_head.
 *
 * @package Inspire_Health_PT
 * @since   1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // No direct access.
}

if ( ! defined( 'IHPT_VERSION' ) ) {
	define( 'IHPT_VERSION', '1.0.0' );
}

/**
 * Theme supports.
 */
function ihpt_setup() {
	// FSE / block-theme essentials.
	add_theme_support( 'wp-block-styles' );
	add_theme_support( 'align-wide' );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'editor-styles' );
	add_theme_support( 'html5', array( 'style', 'script', 'navigation-widgets', 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'automatic-feed-links' );

	// Front-end + editor stylesheet (signature CSS layered over theme.json tokens).
	add_editor_style( 'assets/css/theme.css' );

	// Make theme strings translatable.
	load_theme_textdomain( 'inspire-health-pt', get_template_directory() . '/languages' );

	// WooCommerce support (storefront-ready for the ebook / programs).
	add_theme_support( 'woocommerce' );
	add_theme_support( 'wc-product-gallery-zoom' );
	add_theme_support( 'wc-product-gallery-lightbox' );
	add_theme_support( 'wc-product-gallery-slider' );

	// Editor image sizes that match the demo's photography.
	add_image_size( 'ihpt-portrait', 720, 900, true );
	add_image_size( 'ihpt-wide', 1600, 900, true );

	// Classic-compatible nav menu location (FSE nav is block-based, but this
	// keeps the theme usable with classic menus / migrations).
	register_nav_menus(
		array(
			'primary' => __( 'Primary Navigation', 'inspire-health-pt' ),
			'footer'  => __( 'Footer Navigation', 'inspire-health-pt' ),
		)
	);
}
add_action( 'after_setup_theme', 'ihpt_setup' );

/**
 * Enqueue front-end assets.
 */
function ihpt_enqueue_assets() {
	wp_enqueue_style(
		'ihpt-theme',
		get_theme_file_uri( 'assets/css/theme.css' ),
		array(),
		IHPT_VERSION
	);

	// Scroll-reveal (IntersectionObserver). Front end only, deferred.
	$reveal = get_theme_file_path( 'assets/js/reveal.js' );
	if ( file_exists( $reveal ) ) {
		wp_enqueue_script(
			'ihpt-reveal',
			get_theme_file_uri( 'assets/js/reveal.js' ),
			array(),
			IHPT_VERSION,
			array(
				'strategy'  => 'defer',
				'in_footer' => true,
			)
		);
	}
}
add_action( 'wp_enqueue_scripts', 'ihpt_enqueue_assets' );

/**
 * Add the film-grain body class so .grain::after can render.
 *
 * @param string[] $classes Body classes.
 * @return string[]
 */
function ihpt_body_class( $classes ) {
	$classes[] = 'grain';
	return $classes;
}
add_filter( 'body_class', 'ihpt_body_class' );

/**
 * Register the signature block styles (§6 of BUILD-SPEC).
 *
 * Only name + label are passed: the actual rules live in assets/css/theme.css
 * via the generated `is-style-{name}` classes.
 */
function ihpt_register_block_styles() {
	$styles = array(
		'brass-edge'     => array(
			'label'  => __( 'Brass Edge', 'inspire-health-pt' ),
			'blocks' => array( 'core/group', 'core/column' ),
		),
		'brass-top'      => array(
			'label'  => __( 'Brass Top', 'inspire-health-pt' ),
			'blocks' => array( 'core/group', 'core/column' ),
		),
		'green-featured' => array(
			'label'  => __( 'Hunter Featured', 'inspire-health-pt' ),
			'blocks' => array( 'core/group', 'core/column' ),
		),
		'card'           => array(
			'label'  => __( 'Card', 'inspire-health-pt' ),
			'blocks' => array( 'core/group', 'core/column' ),
		),
		'diamond'        => array(
			'label'  => __( 'Diamond Rule', 'inspire-health-pt' ),
			'blocks' => array( 'core/separator' ),
		),
		'eyebrow'        => array(
			'label'  => __( 'Brass Eyebrow', 'inspire-health-pt' ),
			'blocks' => array( 'core/paragraph' ),
		),
		'lede'           => array(
			'label'  => __( 'Lede', 'inspire-health-pt' ),
			'blocks' => array( 'core/paragraph' ),
		),
		'tagline'        => array(
			'label'  => __( 'Tagline', 'inspire-health-pt' ),
			'blocks' => array( 'core/paragraph' ),
		),
		'ken-burns'      => array(
			'label'  => __( 'Ken Burns', 'inspire-health-pt' ),
			'blocks' => array( 'core/cover', 'core/image' ),
		),
		'marquee'        => array(
			'label'  => __( 'Marquee', 'inspire-health-pt' ),
			'blocks' => array( 'core/group' ),
		),
		'underline-draw' => array(
			'label'  => __( 'Underline Draw', 'inspire-health-pt' ),
			'blocks' => array( 'core/navigation-link', 'core/paragraph' ),
		),
	);

	foreach ( $styles as $name => $args ) {
		foreach ( $args['blocks'] as $block ) {
			register_block_style(
				$block,
				array(
					'name'  => $name,
					'label' => $args['label'],
				)
			);
		}
	}
}
add_action( 'init', 'ihpt_register_block_styles' );

/**
 * Build the structured-data (JSON-LD) graph for the clinic.
 *
 * MedicalClinic + Physician + Product (the $27 Shoulder Guide) + FAQPage.
 * All facts are verbatim from src/data.js — no fabricated metrics.
 *
 * @return array
 */
function ihpt_jsonld_graph() {
	$site_url = home_url( '/' );

	$clinic = array(
		'@type'       => array( 'MedicalClinic', 'PhysicalTherapy' ),
		'@id'         => $site_url . '#clinic',
		'name'        => 'Inspire Health PT',
		'alternateName' => 'The Vault',
		'url'         => $site_url,
		'email'       => 'inspirehealthpt@gmail.com',
		'telephone'   => '+13054797757',
		'priceRange'  => '$$$',
		'address'     => array(
			'@type'           => 'PostalAddress',
			'streetAddress'   => '3257 NW 7th Ave Circle',
			'addressLocality' => 'Miami',
			'addressRegion'   => 'FL',
			'postalCode'      => '33127',
			'addressCountry'  => 'US',
		),
		'medicalSpecialty' => 'PhysicalTherapy',
		'aggregateRating'  => array(
			'@type'       => 'AggregateRating',
			'ratingValue' => '5.0',
			'reviewCount' => '72',
			'bestRating'  => '5',
			'worstRating' => '1',
		),
	);

	$physician = array(
		'@type'           => 'Physician',
		'@id'             => $site_url . '#dr-guzman',
		'name'            => 'Dr. Juan Guzman',
		'jobTitle'        => 'PT, CSCS · Founder',
		'medicalSpecialty' => 'PhysicalTherapy',
		'worksFor'        => array( '@id' => $site_url . '#clinic' ),
	);

	$product = array(
		'@type'       => 'Product',
		'@id'         => $site_url . '#shoulder-guide',
		'name'        => 'Shoulder Health & Freedom',
		'description' => 'Understand what’s happening inside your shoulder. Move better. Get back to the life you’ve been missing.',
		'brand'       => array(
			'@type' => 'Brand',
			'name'  => 'Inspire Health PT',
		),
		'offers'      => array(
			'@type'         => 'Offer',
			'price'         => '27.00',
			'priceCurrency' => 'USD',
			'availability'  => 'https://schema.org/InStock',
		),
	);

	// FAQPage — verbatim Q/A pairs from data.js FAQ.items.
	$faq_items = array(
		array(
			'Do you take insurance?',
			'We’re an out-of-network, cash-pay clinic. We provide a detailed superbill you can submit to your insurer for possible out-of-network reimbursement. Coverage varies by plan, so we recommend checking your benefits.',
		),
		array(
			'Do I need a referral to be seen?',
			'Florida allows direct access to physical therapy, so in most cases you can book an evaluation without a physician referral. Certain conditions or timeframes may require one, and we’ll guide you if so.',
		),
		array(
			'Why is cash-pay worth it?',
			'You get a full hour of one-on-one time with the same clinician every visit, a plan built around your goals instead of insurance limits, and typically fewer total visits to reach them.',
		),
		array(
			'What happens at my first visit?',
			'A complete movement and injury assessment, hands-on treatment the same day, and a clear, custom plan you’ll understand before you leave.',
		),
		array(
			'What is “The Vault”?',
			'It’s our private space and our standard: one room, one therapist, one hour. A curated training boutique — art on the walls, an infrared sauna, no waiting room — designed to feel like anything but a clinic.',
		),
		array(
			'Can I work with you remotely?',
			'Yes. The Founder’s Vault is our virtual program — train directly with Dr. Guzman from anywhere, with programming built around your goals. See the Founder’s Vault page for details.',
		),
		array(
			'Where are you located?',
			'3257 NW 7th Ave Circle, Miami, FL 33127 — convenient to Wynwood, Edgewater, Midtown, and Brickell.',
		),
		array(
			'How do I book?',
			'Reserve a time online in under a minute, or start with a free 15-minute call if you’re not sure yet. We’ll confirm your evaluation and send everything you need beforehand.',
		),
	);

	$main_entity = array();
	foreach ( $faq_items as $pair ) {
		$main_entity[] = array(
			'@type'          => 'Question',
			'name'           => $pair[0],
			'acceptedAnswer' => array(
				'@type' => 'Answer',
				'text'  => $pair[1],
			),
		);
	}

	$faq_page = array(
		'@type'      => 'FAQPage',
		'@id'        => $site_url . '#faq',
		'mainEntity' => $main_entity,
	);

	return array(
		'@context' => 'https://schema.org',
		'@graph'   => array( $clinic, $physician, $product, $faq_page ),
	);
}

/**
 * Inject the JSON-LD structured data into the document head.
 */
function ihpt_print_jsonld() {
	$graph = ihpt_jsonld_graph();

	// JSON_UNESCAPED_SLASHES keeps URLs clean; JSON_UNESCAPED_UNICODE renders
	// the \uXXXX escape sequences as real curly quotes.
	$json = wp_json_encode( $graph, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE );

	if ( false === $json ) {
		return;
	}

	echo "\n<script type=\"application/ld+json\">" . $json . "</script>\n"; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- valid JSON-LD, escaped via wp_json_encode.
}
add_action( 'wp_head', 'ihpt_print_jsonld', 20 );

/**
 * Conditionally load the Calendly inline-embed script on the Evaluation LP.
 */
function ihpt_maybe_enqueue_calendly() {
	if ( is_page_template( 'page-evaluation' ) || is_page( 'evaluation' ) ) {
		wp_enqueue_style(
			'ihpt-calendly',
			'https://assets.calendly.com/assets/external/widget.css',
			array(),
			null
		);
		wp_enqueue_script(
			'ihpt-calendly',
			'https://assets.calendly.com/assets/external/widget.js',
			array(),
			null,
			array( 'in_footer' => true )
		);
	}
}
add_action( 'wp_enqueue_scripts', 'ihpt_maybe_enqueue_calendly' );
