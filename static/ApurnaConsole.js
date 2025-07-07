

/**
 * Apurna JS Console
 * @copyright (c) 2024-present APSF LLC (apsf.ch) and contributors
 * @license MIT
 * @version v2.0.0
 */
class ApurnaConsole {

  /**
   * Is Initialize
   */
  static is_init = false;

  /**
   * Options
   */
  static _options = {

    // Debug Modes
    'debug'            : false,
    'debug_dev'        : false,
    'debug_ajax'       : false,
    'debug_form'       : false,
    'debug_model'      : false,
    'debug_trigger'    : false,
    'debug_database'   : false,
    'debug_redirect'   : false,
    'debug_exception'  : false,
    'debug_permission' : false,

  };




  /**
   * Initialize
   */
  static init() {

    // Exit if already initialized
    if(ApurnaConsole.is_init == true) {
      return;
    }

    // Set Options
    for_each(ApurnaConsole._options, function(option_key, option_value) {

      // Set debug modes
      if(option_key.startsWith('debug') == true) {

        // Get modes from context attributes
        option_value = parse_bool($('context').attr(option_key));

      }

      ApurnaConsole.set_option(option_key, option_value);

    });

    // Mark as initialized
    ApurnaConsole.is_init = true;

  }




  /**
   * Set Option
   */
  static set_option(key, value = null) {

    ApurnaConsole._options[key] = value;

  }




  /**
   * Get Option
   */
  static get_option(key) {

    return ApurnaConsole._options[key];

  }




  /**
   * Debug
   */
  static debug(key, value = null) {

    if(ApurnaConsole._options.debug_dev == false) {
      return;
    }

    if(is_empty(value) == true) {
      console.log(key);
    }
    else {
      console.log(key, value);
    }

  }




  /**
   * Ajax
   */
  static ajax(key, value = null) {

    if(ApurnaConsole._options.debug_ajax == false) {
      return;
    }

    if(is_empty(value) == true) {
      console.log(key);
    }
    else {
      console.log(key, value);
    }

  }




  /**
   * Info
   */
  static info(key, value = null) {

    console.info(key, value);

  }




  /**
   * Log
   */
  static log(key, value = null) {

    if(is_empty(value) == true) {
      console.log(key);
    }
    else {
      console.log(key, value);
    }

  }




  /**
   * Warn
   */
  static warn(key, value = null) {

    console.warn(key, value);

  }




  /**
   * Error
   */
  static error(key, value = null) {

    console.error(key, value);

  }




  /**
   * Trace
   */
  static trace(key, value = null) {

    if(ApurnaConsole._options.debug_dev == false) {
      return;
    }

    if(is_empty(value) == true) {
      console.trace(key);
    }
    else {
      console.trace(key, value);
    }

  }




  /**
   * Table
   */
  static table(data) {

    console.table(data);

  }




  /**
   * Exception
   */
  static exception(key, value = null) {

    if(ApurnaConsole._options.debug_exception == false) {
      return;
    }

    ApurnaConsole.error(key, value);

  }




}




/**
 * Init Console
 */
$(document).ready(function() {

  ApurnaConsole.init();

});





