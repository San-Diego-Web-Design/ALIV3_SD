<?php

/**
 * @file
 * Starter template.php file for subthemes of Omega.
 */

/*
 * Add any conditional stylesheets you will need for this sub-theme.
 *
 * To add stylesheets that ALWAYS need to be included, you should add them to
 * your .info file instead. Only use this section if you are including
 * stylesheets based on certain conditions.
 */

/**
 * Implements hook_theme().
 */
function aliv3_theme(&$existing, $type, $theme, $path) {
  $hooks = array();
  
  return $hooks;
}

function aliv3_preprocess_search_block_form(&$vars, $hook) {
    // Modify elements of the search form
    unset($vars['form']['search_block_form']['#title']);

    // Modify elements of the submit button
    unset($vars['form']['submit']);

    // Change text on the submit button
    $vars['form']['submit']['#value'] = t('Go!');

    // Change submit button into image button - NOTE: '#src' leading '/' automatically added
    // $vars['form']['submit']['image_button'] = array('#type' => 'image_button', '#src' => path_to_theme() . '/images/search-mag.png');

    // Rebuild the rendered version (search form only, rest remains unchanged)
  unset($vars['form']['search_block_form']['#printed']);
  $vars['search']['search_block_form'] = drupal_render($vars['form']['search_block_form']);

    // Rebuild the rendered version (submit button, rest remains unchanged)
    unset($vars['form']['submit']['#printed']);
    $vars['search']['submit'] = drupal_render($vars['form']['submit']);
    
    // Collect all form elements to print entire form
  $vars['search_form'] = implode($vars['search']);
}
