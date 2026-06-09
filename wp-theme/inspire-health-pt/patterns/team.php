<?php
/**
 * Title: Team
 * Slug: ihpt/team
 * Categories: ihpt
 * Inserter: true
 */
$ihpt_juan   = get_theme_file_uri( 'assets/img/juan.jpg' );
$ihpt_freddy = get_theme_file_uri( 'assets/img/freddy.jpg' );
$ihpt_annie  = get_theme_file_uri( 'assets/img/annie.jpg' );
?>
<!-- wp:group {"align":"full","backgroundColor":"surface","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-surface-background-color has-background" style="padding-top:var(--wp--preset--spacing--70);padding-bottom:var(--wp--preset--spacing--70)">

	<!-- wp:paragraph {"className":"eyebrow is-style-eyebrow","textColor":"accent"} -->
	<p class="eyebrow is-style-eyebrow has-accent-color has-text-color">The Team</p>
	<!-- /wp:paragraph -->

	<!-- wp:heading -->
	<h2 class="wp-block-heading">The people behind The Vault.</h2>
	<!-- /wp:heading -->

	<!-- wp:spacer {"height":"var:preset|spacing|50"} -->
	<div style="height:var(--wp--preset--spacing--50)" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->

	<!-- wp:columns -->
	<div class="wp-block-columns">

		<!-- wp:column {"className":"is-style-green-featured","backgroundColor":"green"} -->
		<div class="wp-block-column is-style-green-featured has-green-background-color has-background">
			<!-- wp:image {"sizeSlug":"large","linkDestination":"none"} -->
			<figure class="wp-block-image size-large"><img src="<?php echo esc_url( $ihpt_juan ); ?>" alt="<?php esc_attr_e( 'Dr. Juan Guzman, PT, CSCS, Founder of Inspire Health PT', 'inspire-health-pt' ); ?>"/></figure>
			<!-- /wp:image -->
			<!-- wp:heading {"level":3} -->
			<h3 class="wp-block-heading">Dr. Juan Guzman</h3>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"className":"eyebrow is-style-eyebrow","textColor":"accent-soft"} -->
			<p class="eyebrow is-style-eyebrow has-accent-soft-color has-text-color">PT, CSCS · Founder</p>
			<!-- /wp:paragraph -->
			<!-- wp:paragraph -->
			<p>Juan built Inspire Health PT on a simple belief: you deserve more than fifteen rushed minutes and a rotating cast of aides. Every patient gets a full hour, one-on-one, with a doctor who remembers your name, your goals, and your last visit. He treats the cause, not just the symptom.</p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"className":"is-style-brass-edge","backgroundColor":"surface-2"} -->
		<div class="wp-block-column is-style-brass-edge has-surface-2-background-color has-background">
			<!-- wp:image {"sizeSlug":"large","linkDestination":"none"} -->
			<figure class="wp-block-image size-large"><img src="<?php echo esc_url( $ihpt_freddy ); ?>" alt="<?php esc_attr_e( 'Freddy Mendoza, CSCS, Strength & Conditioning', 'inspire-health-pt' ); ?>"/></figure>
			<!-- /wp:image -->
			<!-- wp:heading {"level":3} -->
			<h3 class="wp-block-heading">Freddy Mendoza</h3>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"className":"eyebrow is-style-eyebrow","textColor":"accent"} -->
			<p class="eyebrow is-style-eyebrow has-accent-color has-text-color">CSCS · Strength &amp; Conditioning</p>
			<!-- /wp:paragraph -->
			<!-- wp:paragraph -->
			<p>Freddy bridges rehab and performance — the strength work that turns “out of pain” into “better than before.” He owns the back half of the method, where recovery starts to look like training.</p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"className":"is-style-brass-edge","backgroundColor":"surface-2"} -->
		<div class="wp-block-column is-style-brass-edge has-surface-2-background-color has-background">
			<!-- wp:image {"sizeSlug":"large","linkDestination":"none"} -->
			<figure class="wp-block-image size-large"><img src="<?php echo esc_url( $ihpt_annie ); ?>" alt="<?php esc_attr_e( 'Annie De Jesus, SLP, Speech-Language Pathologist', 'inspire-health-pt' ); ?>"/></figure>
			<!-- /wp:image -->
			<!-- wp:heading {"level":3} -->
			<h3 class="wp-block-heading">Annie De Jesus</h3>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"className":"eyebrow is-style-eyebrow","textColor":"accent"} -->
			<p class="eyebrow is-style-eyebrow has-accent-color has-text-color">SLP · Speech-Language Pathologist</p>
			<!-- /wp:paragraph -->
			<!-- wp:paragraph -->
			<p>Annie rounds out the whole-person care model at The Vault, supporting clients whose recovery reaches beyond the musculoskeletal — because the standard here is the entire person, not a single joint.</p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:column -->

	</div>
	<!-- /wp:columns -->

</div>
<!-- /wp:group -->
