<?php
/**
 * Title: Hero
 * Slug: ihpt/hero
 * Categories: inspire-health-pt, featured, banner
 * Inserter: true
 *
 * @package inspire-health-pt
 */
?>
<!-- wp:cover {"url":"<?php echo esc_url( get_theme_file_uri( 'assets/img/space/wide.jpg' ) ); ?>","dimRatio":60,"overlayColor":"bg","isUserOverlayColor":true,"minHeight":760,"minHeightUnit":"px","align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|70","bottom":"var:preset|spacing|70"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-cover alignfull" style="padding-top:var(--wp--preset--spacing--70);padding-bottom:var(--wp--preset--spacing--70);min-height:760px"><span aria-hidden="true" class="wp-block-cover__background has-bg-background-color has-background-dim-60 has-background-dim"></span><img class="wp-block-cover__image-background kenburns" alt="" src="<?php echo esc_url( get_theme_file_uri( 'assets/img/space/wide.jpg' ) ); ?>" data-object-fit="cover"/><div class="wp-block-cover__inner-container">
<!-- wp:paragraph {"className":"eyebrow is-style-eyebrow","textColor":"accent","fontSize":"small"} -->
<p class="eyebrow is-style-eyebrow has-accent-color has-text-color has-small-font-size"><?php esc_html_e( 'Miami · Private 1-on-1 Rehab & Performance', 'inspire-health-pt' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"textColor":"ink","fontSize":"xx-large"} -->
<h1 class="wp-block-heading has-ink-color has-text-color has-xx-large-font-size"><?php esc_html_e( 'You did everything the last clinic said. You’re still not back.', 'inspire-health-pt' ); ?></h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":"lede is-style-lede","textColor":"mint","fontSize":"lede"} -->
<p class="lede is-style-lede has-mint-color has-text-color has-lede-font-size"><?php esc_html_e( 'One-on-one rehab for the overhead athlete with a nagging shoulder, the Hyrox competitor with a tight low back, and the runner ready to call it quits over knee pain. We don’t manage pain — we find why it’s there and build you past it.', 'inspire-health-pt' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"style":{"spacing":{"blockGap":"var:preset|spacing|30","margin":{"top":"var:preset|spacing|40"}}}} -->
<div class="wp-block-buttons" style="margin-top:var(--wp--preset--spacing--40)">
<!-- wp:button {"backgroundColor":"accent","textColor":"onaccent"} -->
<div class="wp-block-button"><a class="wp-block-button__link has-onaccent-color has-accent-background-color has-text-color has-background wp-element-button" href="https://calendly.com/inspirehealthpt/60min" target="_blank" rel="noreferrer noopener"><?php esc_html_e( 'Book Your Evaluation', 'inspire-health-pt' ); ?></a></div>
<!-- /wp:button -->

<!-- wp:button {"className":"is-style-outline"} -->
<div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button" href="https://shoulder.inspirehealthpt.co/6a0f23d5d134ea342e889e00/"><?php esc_html_e( 'Start with a free 15-minute call', 'inspire-health-pt' ); ?></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div></div>
<!-- /wp:cover -->
