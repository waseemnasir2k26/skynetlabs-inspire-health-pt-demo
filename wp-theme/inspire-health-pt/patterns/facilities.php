<?php
/**
 * Title: The Space — Facilities
 * Slug: ihpt/facilities
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
		<p class="eyebrow is-style-eyebrow has-accent-color has-text-color"><?php echo esc_html_x( 'The Space', 'facilities hero kicker', 'inspire-health-pt' ); ?></p>
		<!-- /wp:paragraph -->

		<!-- wp:heading {"level":2} -->
		<h2 class="wp-block-heading"><?php echo esc_html_x( 'This is not a clinic.', 'facilities hero heading', 'inspire-health-pt' ); ?></h2>
		<!-- /wp:heading -->

		<!-- wp:paragraph {"className":"lede is-style-lede","fontSize":"lede"} -->
		<p class="lede is-style-lede has-lede-font-size"><?php echo esc_html_x( 'No waiting room. No shared floor. No clock on the wall. The Vault is a private space built for one person at a time — the way recovery should feel.', 'facilities hero lede', 'inspire-health-pt' ); ?></p>
		<!-- /wp:paragraph -->

		<!-- wp:paragraph {"className":"is-style-tagline","textColor":"mint","fontSize":"medium"} -->
		<p class="is-style-tagline has-mint-color has-text-color has-medium-font-size"><?php echo esc_html_x( 'Privacy is the product. When the room is yours alone, the hour is actually yours — no aides, no rotation, no audience. Everything here is designed around that single idea.', 'facilities thesis', 'inspire-health-pt' ); ?></p>
		<!-- /wp:paragraph -->
	</div>
	<!-- /wp:group -->

	<!-- wp:spacer {"height":"var:preset|spacing|60"} -->
	<div style="height:var(--wp--preset--spacing--60)" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->

	<!-- wp:columns {"align":"wide"} -->
	<div class="wp-block-columns alignwide">
		<!-- wp:column {"className":"is-style-brass-edge"} -->
		<div class="wp-block-column is-style-brass-edge">
			<!-- wp:image {"sizeSlug":"large","linkDestination":"none","className":"is-style-rounded"} -->
			<figure class="wp-block-image size-large is-style-rounded"><img src="<?php echo esc_url( $ihpt_img . '/facilities/sauna.jpg' ); ?>" alt="<?php echo esc_attr_x( 'The infrared sauna at The Vault', 'image alt', 'inspire-health-pt' ); ?>"/></figure>
			<!-- /wp:image -->

			<!-- wp:heading {"level":3} -->
			<h3 class="wp-block-heading"><?php echo esc_html_x( 'The Infrared Sauna', 'amenity name', 'inspire-health-pt' ); ?></h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph -->
			<p><?php echo esc_html_x( 'Heat that works deeper than it feels. Built into the recovery flow — wind down, draw down inflammation, and let the session settle before you head back out.', 'amenity body', 'inspire-health-pt' ); ?></p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"className":"is-style-brass-edge"} -->
		<div class="wp-block-column is-style-brass-edge">
			<!-- wp:image {"sizeSlug":"large","linkDestination":"none","className":"is-style-rounded"} -->
			<figure class="wp-block-image size-large is-style-rounded"><img src="<?php echo esc_url( $ihpt_img . '/facilities/gym.jpg' ); ?>" alt="<?php echo esc_attr_x( 'The private gym at The Vault', 'image alt', 'inspire-health-pt' ); ?>"/></figure>
			<!-- /wp:image -->

			<!-- wp:heading {"level":3} -->
			<h3 class="wp-block-heading"><?php echo esc_html_x( 'The Private Gym', 'amenity name', 'inspire-health-pt' ); ?></h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph -->
			<p><?php echo esc_html_x( 'A full training boutique that’s yours for the hour. Real equipment, real loading, real performance work — not a corner of a crowded floor.', 'amenity body', 'inspire-health-pt' ); ?></p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->

	<!-- wp:columns {"align":"wide"} -->
	<div class="wp-block-columns alignwide">
		<!-- wp:column {"className":"is-style-brass-edge"} -->
		<div class="wp-block-column is-style-brass-edge">
			<!-- wp:image {"sizeSlug":"large","linkDestination":"none","className":"is-style-rounded"} -->
			<figure class="wp-block-image size-large is-style-rounded"><img src="<?php echo esc_url( $ihpt_img . '/facilities/lounge.jpg' ); ?>" alt="<?php echo esc_attr_x( 'The curated walls at The Vault', 'image alt', 'inspire-health-pt' ); ?>"/></figure>
			<!-- /wp:image -->

			<!-- wp:heading {"level":3} -->
			<h3 class="wp-block-heading"><?php echo esc_html_x( 'The Curated Walls', 'amenity name', 'inspire-health-pt' ); ?></h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph -->
			<p><?php echo esc_html_x( 'A rotating gallery of local artists turns the space into something worth being in. Recovery is an environment, and this one was chosen on purpose.', 'amenity body', 'inspire-health-pt' ); ?></p>
			<!-- /wp:paragraph -->

			<!-- wp:paragraph {"className":"is-style-tagline","fontSize":"small"} -->
			<p class="is-style-tagline has-small-font-size"><a class="ulink is-style-underline-draw" href="<?php echo esc_url( home_url( '/gallery' ) ); ?>"><?php echo esc_html_x( 'See the current exhibition', 'amenity link', 'inspire-health-pt' ); ?></a></p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"className":"is-style-brass-edge"} -->
		<div class="wp-block-column is-style-brass-edge">
			<!-- wp:image {"sizeSlug":"large","linkDestination":"none","className":"is-style-rounded"} -->
			<figure class="wp-block-image size-large is-style-rounded"><img src="<?php echo esc_url( $ihpt_img . '/facilities/treatment.jpg' ); ?>" alt="<?php echo esc_attr_x( 'The treatment suite at The Vault', 'image alt', 'inspire-health-pt' ); ?>"/></figure>
			<!-- /wp:image -->

			<!-- wp:heading {"level":3} -->
			<h3 class="wp-block-heading"><?php echo esc_html_x( 'The Treatment Suite', 'amenity name', 'inspire-health-pt' ); ?></h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph -->
			<p><?php echo esc_html_x( 'Where the hands-on work happens — quiet, private, and unhurried. The table is the start of the session, never the whole of it.', 'amenity body', 'inspire-health-pt' ); ?></p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->

	<!-- wp:spacer {"height":"var:preset|spacing|60"} -->
	<div style="height:var(--wp--preset--spacing--60)" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->

	<!-- wp:group {"layout":{"type":"constrained"}} -->
	<div class="wp-block-group">
		<!-- wp:paragraph {"className":"eyebrow is-style-eyebrow","textColor":"accent"} -->
		<p class="eyebrow is-style-eyebrow has-accent-color has-text-color"><?php echo esc_html_x( 'A day in The Vault', 'walkthrough eyebrow', 'inspire-health-pt' ); ?></p>
		<!-- /wp:paragraph -->

		<!-- wp:heading {"level":3} -->
		<h3 class="wp-block-heading"><?php echo esc_html_x( 'What one visit feels like.', 'walkthrough title', 'inspire-health-pt' ); ?></h3>
		<!-- /wp:heading -->
	</div>
	<!-- /wp:group -->

	<!-- wp:group {"align":"full","backgroundColor":"green","textColor":"ink","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignfull has-ink-color has-green-background-color has-text-color has-background" style="padding-top:var(--wp--preset--spacing--60);padding-bottom:var(--wp--preset--spacing--60)">
		<!-- wp:columns {"align":"wide"} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column {"className":"is-style-brass-top"} -->
			<div class="wp-block-column is-style-brass-top">
				<!-- wp:paragraph {"className":"numeral","textColor":"accent","fontSize":"large"} -->
				<p class="numeral has-accent-color has-text-color has-large-font-size">01</p>
				<!-- /wp:paragraph -->

				<!-- wp:heading {"level":3} -->
				<h3 class="wp-block-heading"><?php echo esc_html_x( 'You arrive', 'walkthrough step title', 'inspire-health-pt' ); ?></h3>
				<!-- /wp:heading -->

				<!-- wp:paragraph -->
				<p><?php echo esc_html_x( 'No front desk, no clipboard, no waiting room. You’re expected, and the space is ready for you.', 'walkthrough step body', 'inspire-health-pt' ); ?></p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"className":"is-style-brass-top"} -->
			<div class="wp-block-column is-style-brass-top">
				<!-- wp:paragraph {"className":"numeral","textColor":"accent","fontSize":"large"} -->
				<p class="numeral has-accent-color has-text-color has-large-font-size">02</p>
				<!-- /wp:paragraph -->

				<!-- wp:heading {"level":3} -->
				<h3 class="wp-block-heading"><?php echo esc_html_x( 'Your hour begins', 'walkthrough step title', 'inspire-health-pt' ); ?></h3>
				<!-- /wp:heading -->

				<!-- wp:paragraph -->
				<p><?php echo esc_html_x( 'One clinician, one plan, the full sixty minutes. Assessment, hands-on work, and loading — all in one room that’s only yours.', 'walkthrough step body', 'inspire-health-pt' ); ?></p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"className":"is-style-brass-top"} -->
			<div class="wp-block-column is-style-brass-top">
				<!-- wp:paragraph {"className":"numeral","textColor":"accent","fontSize":"large"} -->
				<p class="numeral has-accent-color has-text-color has-large-font-size">03</p>
				<!-- /wp:paragraph -->

				<!-- wp:heading {"level":3} -->
				<h3 class="wp-block-heading"><?php echo esc_html_x( 'You recover', 'walkthrough step title', 'inspire-health-pt' ); ?></h3>
				<!-- /wp:heading -->

				<!-- wp:paragraph -->
				<p><?php echo esc_html_x( 'Infrared sauna, a moment with the art, and a clear sense of what’s next. You leave understanding your body better than when you came in.', 'walkthrough step body', 'inspire-health-pt' ); ?></p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:column -->
		</div>
		<!-- /wp:columns -->
	</div>
	<!-- /wp:group -->

	<!-- wp:spacer {"height":"var:preset|spacing|60"} -->
	<div style="height:var(--wp--preset--spacing--60)" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->

	<!-- wp:columns {"align":"full"} -->
	<div class="wp-block-columns alignfull">
		<!-- wp:column -->
		<div class="wp-block-column">
			<!-- wp:image {"sizeSlug":"large","linkDestination":"none"} -->
			<figure class="wp-block-image size-large"><img src="<?php echo esc_url( $ihpt_img . '/space/storefront.jpg' ); ?>" alt="<?php echo esc_attr_x( 'The Vault storefront in Miami', 'image alt', 'inspire-health-pt' ); ?>"/></figure>
			<!-- /wp:image -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column -->
		<div class="wp-block-column">
			<!-- wp:image {"sizeSlug":"large","linkDestination":"none"} -->
			<figure class="wp-block-image size-large"><img src="<?php echo esc_url( $ihpt_img . '/space/wide.jpg' ); ?>" alt="<?php echo esc_attr_x( 'A wide view inside The Vault', 'image alt', 'inspire-health-pt' ); ?>"/></figure>
			<!-- /wp:image -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column -->
		<div class="wp-block-column">
			<!-- wp:image {"sizeSlug":"large","linkDestination":"none"} -->
			<figure class="wp-block-image size-large"><img src="<?php echo esc_url( $ihpt_img . '/space/door-logo.jpg' ); ?>" alt="<?php echo esc_attr_x( 'The Vault door and logo', 'image alt', 'inspire-health-pt' ); ?>"/></figure>
			<!-- /wp:image -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->

	<!-- wp:spacer {"height":"var:preset|spacing|60"} -->
	<div style="height:var(--wp--preset--spacing--60)" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->

	<!-- wp:group {"align":"full","backgroundColor":"green","textColor":"ink","className":"is-style-brass-top","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignfull is-style-brass-top has-ink-color has-green-background-color has-text-color has-background" style="padding-top:var(--wp--preset--spacing--60);padding-bottom:var(--wp--preset--spacing--60)">
		<!-- wp:heading {"level":2,"textAlign":"center"} -->
		<h2 class="wp-block-heading has-text-align-center"><?php echo esc_html_x( 'Want to see it for yourself?', 'facilities cta title', 'inspire-health-pt' ); ?></h2>
		<!-- /wp:heading -->

		<!-- wp:paragraph {"align":"center","fontSize":"lede","className":"lede is-style-lede"} -->
		<p class="lede is-style-lede has-text-align-center has-lede-font-size"><?php echo esc_html_x( 'Book an evaluation and experience The Vault firsthand.', 'facilities cta body', 'inspire-health-pt' ); ?></p>
		<!-- /wp:paragraph -->

		<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
		<div class="wp-block-buttons">
			<!-- wp:button -->
			<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="https://calendly.com/inspirehealthpt/60min" target="_blank" rel="noreferrer noopener"><?php echo esc_html_x( 'Book Your Evaluation', 'facilities cta label', 'inspire-health-pt' ); ?></a></div>
			<!-- /wp:button -->
		</div>
		<!-- /wp:buttons -->
	</div>
	<!-- /wp:group -->

</div>
<!-- /wp:group -->
