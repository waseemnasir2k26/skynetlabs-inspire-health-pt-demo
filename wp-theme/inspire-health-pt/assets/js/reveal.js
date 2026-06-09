/* Inspire Health PT — scroll reveal. Adds .in to .reveal elements as they enter the viewport. */
( function () {
  'use strict';
  var els = document.querySelectorAll( '.reveal' );
  if ( ! els.length ) { return; }
  if ( ! ( 'IntersectionObserver' in window ) ||
       window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches ) {
    els.forEach( function ( el ) { el.classList.add( 'in' ); } );
    return;
  }
  var io = new IntersectionObserver( function ( entries ) {
    entries.forEach( function ( e ) {
      if ( e.isIntersecting ) { e.target.classList.add( 'in' ); io.unobserve( e.target ); }
    } );
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 } );
  els.forEach( function ( el ) { io.observe( el ); } );
}() );
