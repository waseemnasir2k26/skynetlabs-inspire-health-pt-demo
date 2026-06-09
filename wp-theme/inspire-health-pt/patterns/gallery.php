<?php
/**
 * Title: The Gallery
 * Slug: ihpt/gallery
 * Categories: ihpt
 * Inserter: true
 */

$ihpt_img = get_theme_file_uri( 'assets/img' );
?>
<!-- wp:group {"align":"full","backgroundColor":"bg","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-bg-background-color has-background" style="padding-top:var(--wp--preset--spacing--70);padding-bottom:var(--wp--preset--spacing--70)">

	<!-- wp:group {"layout":{"type":"constrained"}} -->
	<div class="wp-block-group">
		<!-- wp:paragraph {"className":"eyebrow is-style-eyebrow","textColor":"accent"} -->
		<p class="eyebrow is-style-eyebrow has-accent-color has-text-color"><?php echo esc_html_x( 'The Gallery', 'gallery hero kicker', 'inspire-health-pt' ); ?></p>
		<!-- /wp:paragraph -->

		<!-- wp:heading {"level":2} -->
		<h2 class="wp-block-heading"><?php echo esc_html_x( 'The walls are part of the work.', 'gallery hero heading', 'inspire-health-pt' ); ?></h2>
		<!-- /wp:heading -->

		<!-- wp:paragraph {"className":"lede is-style-lede","fontSize":"lede"} -->
		<p class="lede is-style-lede has-lede-font-size"><?php echo esc_html_x( 'A rotating exhibition of local Miami artists lives inside The Vault. The art changes; the intent doesn’t — to make the space you recover in worth being in.', 'gallery hero lede', 'inspire-health-pt' ); ?></p>
		<!-- /wp:paragraph -->

		<!-- wp:paragraph {"className":"is-style-tagline","textColor":"mint","fontSize":"medium"} -->
		<p class="is-style-tagline has-mint-color has-text-color has-medium-font-size"><?php echo esc_html_x( 'We believe environment is part of recovery. So instead of motivational posters and fluorescent light, The Vault holds a curated, rotating gallery — work chosen to be looked at, sat with, and protected. It’s the same instinct behind everything we do: things worth keeping deserve a vault.', 'gallery manifesto', 'inspire-health-pt' ); ?></p>
		<!-- /wp:paragraph -->
	</div>
	<!-- /wp:group -->

	<!-- wp:spacer {"height":"var:preset|spacing|60"} -->
	<div style="height:var(--wp--preset--spacing--60)" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->

	<!-- wp:group {"layout":{"type":"constrained"}} -->
	<div class="wp-block-group">
		<!-- wp:paragraph {"className":"eyebrow is-style-eyebrow","textColor":"accent"} -->
		<p class="eyebrow is-style-eyebrow has-accent-color has-text-color"><?php echo esc_html_x( 'Current Exhibition', 'gallery current eyebrow', 'inspire-health-pt' ); ?> &middot; <?php echo esc_html_x( 'Now showing', 'gallery season', 'inspire-health-pt' ); ?></p>
		<!-- /wp:paragraph -->

		<!-- wp:heading {"level":3} -->
		<h3 class="wp-block-heading"><?php echo esc_html_x( 'The Vault Collection', 'gallery current title', 'inspire-health-pt' ); ?></h3>
		<!-- /wp:heading -->

		<!-- wp:paragraph -->
		<p><?php echo esc_html_x( 'This season the walls belong to Miami mixed-media artist Katy Hirschfeld — layered collage built from hundreds of cut fragments, each piece chosen for the room it lives in.', 'gallery current statement', 'inspire-health-pt' ); ?></p>
		<!-- /wp:paragraph -->
	</div>
	<!-- /wp:group -->

	<!-- wp:spacer {"height":"var:preset|spacing|50"} -->
	<div style="height:var(--wp--preset--spacing--50)" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->

	<!-- wp:group {"align":"wide","className":"is-style-brass-edge","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide is-style-brass-edge">
		<!-- wp:paragraph {"className":"eyebrow is-style-eyebrow","textColor":"accent"} -->
		<p class="eyebrow is-style-eyebrow has-accent-color has-text-color"><?php echo esc_html_x( 'Mixed-media collage', 'gallery artist medium', 'inspire-health-pt' ); ?></p>
		<!-- /wp:paragraph -->

		<!-- wp:heading {"level":3} -->
		<h3 class="wp-block-heading"><?php echo esc_html_x( 'Katy Hirschfeld', 'gallery artist name', 'inspire-health-pt' ); ?></h3>
		<!-- /wp:heading -->

		<!-- wp:paragraph -->
		<p><?php echo esc_html_x( 'My collages are often influenced by my personal outlook and true life experiences. I share a fraction of my own little world, by promoting strength, knowledge, and self awareness to overcome social flux and challenges; learning from them through the art of mixed media. I like to express my playful side, never shunning the Basquiat beneath. Culled from the social consciousness and current events of today, each of my pieces features a different cultural comment viewed through the lens of my experiences. The simple overlapping of many small pieces, arranged in just the right way speaks volumes, touching on issues implicitly without being overbearing or sanctimonious. My work tends to stand as a viewer’s test, challenging what one sees versus what they feel in relation to the contemporary pits, progress and powers affecting us all.', 'gallery artist statement', 'inspire-health-pt' ); ?></p>
		<!-- /wp:paragraph -->
	</div>
	<!-- /wp:group -->

	<!-- wp:spacer {"height":"var:preset|spacing|50"} -->
	<div style="height:var(--wp--preset--spacing--50)" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->

	<!-- wp:gallery {"columns":3,"linkTo":"none","align":"wide","className":"columns-3"} -->
	<figure class="wp-block-gallery has-nested-images columns-3 is-cropped alignwide">
		<!-- wp:image {"sizeSlug":"large","linkDestination":"none"} -->
		<figure class="wp-block-image size-large"><img src="<?php echo esc_url( $ihpt_img . '/gallery/katie-1.jpg' ); ?>" alt="<?php echo esc_attr_x( 'Mixed-media collage by Katy Hirschfeld', 'image alt', 'inspire-health-pt' ); ?>"/></figure>
		<!-- /wp:image -->

		<!-- wp:image {"sizeSlug":"large","linkDestination":"none"} -->
		<figure class="wp-block-image size-large"><img src="<?php echo esc_url( $ihpt_img . '/gallery/katie-4.jpg' ); ?>" alt="<?php echo esc_attr_x( 'Mixed-media collage by Katy Hirschfeld', 'image alt', 'inspire-health-pt' ); ?>"/></figure>
		<!-- /wp:image -->

		<!-- wp:image {"sizeSlug":"large","linkDestination":"none"} -->
		<figure class="wp-block-image size-large"><img src="<?php echo esc_url( $ihpt_img . '/gallery/katie-5.jpg' ); ?>" alt="<?php echo esc_attr_x( 'Mixed-media collage by Katy Hirschfeld', 'image alt', 'inspire-health-pt' ); ?>"/></figure>
		<!-- /wp:image -->

		<!-- wp:image {"sizeSlug":"large","linkDestination":"none"} -->
		<figure class="wp-block-image size-large"><img src="<?php echo esc_url( $ihpt_img . '/gallery/katie-2.jpg' ); ?>" alt="<?php echo esc_attr_x( 'Mixed-media collage by Katy Hirschfeld', 'image alt', 'inspire-health-pt' ); ?>"/></figure>
		<!-- /wp:image -->

		<!-- wp:image {"sizeSlug":"large","linkDestination":"none"} -->
		<figure class="wp-block-image size-large"><img src="<?php echo esc_url( $ihpt_img . '/gallery/katie-3.jpg' ); ?>" alt="<?php echo esc_attr_x( 'Mixed-media collage by Katy Hirschfeld', 'image alt', 'inspire-health-pt' ); ?>"/></figure>
		<!-- /wp:image -->
	</figure>
	<!-- /wp:gallery -->

	<!-- wp:spacer {"height":"var:preset|spacing|60"} -->
	<div style="height:var(--wp--preset--spacing--60)" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->

	<!-- wp:group {"align":"full","backgroundColor":"green","textColor":"ink","className":"is-style-brass-top","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignfull is-style-brass-top has-ink-color has-green-background-color has-text-color has-background" style="padding-top:var(--wp--preset--spacing--60);padding-bottom:var(--wp--preset--spacing--60)">
		<!-- wp:heading {"level":2,"textAlign":"center"} -->
		<h2 class="wp-block-heading has-text-align-center"><?php echo esc_html_x( 'Are you a local artist?', 'gallery applyCta title', 'inspire-health-pt' ); ?></h2>
		<!-- /wp:heading -->

		<!-- wp:paragraph {"align":"center","fontSize":"lede","className":"lede is-style-lede"} -->
		<p class="lede is-style-lede has-text-align-center has-lede-font-size"><?php echo esc_html_x( 'The Vault rotates new work each season. Tell us about yours.', 'gallery applyCta body', 'inspire-health-pt' ); ?></p>
		<!-- /wp:paragraph -->

		<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
		<div class="wp-block-buttons">
			<!-- wp:button -->
			<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="https://shoulder.inspirehealthpt.co/6a0f23d5d134ea342e889e00/" target="_blank" rel="noreferrer noopener"><?php echo esc_html_x( 'Start a free 15-minute call', 'gallery applyCta label', 'inspire-health-pt' ); ?></a></div>
			<!-- /wp:button -->
		</div>
		<!-- /wp:buttons -->
	</div>
	<!-- /wp:group -->

</div>
<!-- /wp:group -->
