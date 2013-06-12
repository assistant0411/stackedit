/*!
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */

/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */

// > (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.

// > Underscore may be freely distributed under the MIT license.

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

/**
 * @license RequireJS text 2.0.6 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */

/**
 * Copyright 2013 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.4.1
 * @url craig.is/killing/mice
 */

/**
 * jGrowl 1.2.11
 *
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Written by Stan Lemon <stosh1985@gmail.com>
 * Last updated: 2013.02.14
 *
 * jGrowl is a jQuery plugin implementing unobtrusive userland notifications.  These
 * notifications function similarly to the Growl Framework available for
 * Mac OS X (http://growl.info).
 *
 * To Do:
 * - Move library settings to containers and allow them to be changed per container
 *
 * Changes in 1.2.11
 * - Fix artifacts left behind by the shutdown method and text-cleanup
 *
 * Changes in 1.2.10
 * - Fix beforeClose to be called in click event
 *
 * Changes in 1.2.9
 * - Fixed BC break in jQuery 2.0 beta
 *
 * Changes in 1.2.8
 * - Fixes for jQuery 1.9 and the MSIE6 check, note that with jQuery 2.0 support
 *   jGrowl intends to drop support for IE6 altogether
 *
 * Changes in 1.2.6
 * - Fixed js error when a notification is opening and closing at the same time
 *
 * Changes in 1.2.5
 * - Changed wrapper jGrowl's options usage to "o" instead of $.jGrowl.defaults
 * - Added themeState option to control 'highlight' or 'error' for jQuery UI
 * - Ammended some CSS to provide default positioning for nested usage.
 * - Changed some CSS to be prefixed with jGrowl- to prevent namespacing issues
 * - Added two new options - openDuration and closeDuration to allow
 *   better control of notification open and close speeds, respectively
 *   Patch contributed by Jesse Vincet.
 * - Added afterOpen callback.  Patch contributed by Russel Branca.
 *
 * Changes in 1.2.4
 * - Fixed IE bug with the close-all button
 * - Fixed IE bug with the filter CSS attribute (special thanks to gotwic)
 * - Update IE opacity CSS
 * - Changed font sizes to use "em", and only set the base style
 *
 * Changes in 1.2.3
 * - The callbacks no longer use the container as context, instead they use the actual notification
 * - The callbacks now receive the container as a parameter after the options parameter
 * - beforeOpen and beforeClose now check the return value, if it's false - the notification does
 *   not continue.  The open callback will also halt execution if it returns false.
 * - Fixed bug where containers would get confused
 * - Expanded the pause functionality to pause an entire container.
 *
 * Changes in 1.2.2
 * - Notification can now be theme rolled for jQuery UI, special thanks to Jeff Chan!
 *
 * Changes in 1.2.1
 * - Fixed instance where the interval would fire the close method multiple times.
 * - Added CSS to hide from print media
 * - Fixed issue with closer button when div { position: relative } is set
 * - Fixed leaking issue with multiple containers.  Special thanks to Matthew Hanlon!
 *
 * Changes in 1.2.0
 * - Added message pooling to limit the number of messages appearing at a given time.
 * - Closing a notification is now bound to the notification object and triggered by the close button.
 *
 * Changes in 1.1.2
 * - Added iPhone styled example
 * - Fixed possible IE7 bug when determining if the ie6 class shoudl be applied.
 * - Added template for the close button, so that it's content could be customized.
 *
 * Changes in 1.1.1
 * - Fixed CSS styling bug for ie6 caused by a mispelling
 * - Changes height restriction on default notifications to min-height
 * - Added skinned examples using a variety of images
 * - Added the ability to customize the content of the [close all] box
 * - Added jTweet, an example of using jGrowl + Twitter
 *
 * Changes in 1.1.0
 * - Multiple container and instances.
 * - Standard $.jGrowl() now wraps $.fn.jGrowl() by first establishing a generic jGrowl container.
 * - Instance methods of a jGrowl container can be called by $.fn.jGrowl(methodName)
 * - Added glue preferenced, which allows notifications to be inserted before or after nodes in the container
 * - Added new log callback which is called before anything is done for the notification
 * - Corner's attribute are now applied on an individual notification basis.
 *
 * Changes in 1.0.4
 * - Various CSS fixes so that jGrowl renders correctly in IE6.
 *
 * Changes in 1.0.3
 * - Fixed bug with options persisting across notifications
 * - Fixed theme application bug
 * - Simplified some selectors and manipulations.
 * - Added beforeOpen and beforeClose callbacks
 * - Reorganized some lines of code to be more readable
 * - Removed unnecessary this.defaults context
 * - If corners plugin is present, it's now customizable.
 * - Customizable open animation.
 * - Customizable close animation.
 * - Customizable animation easing.
 * - Added customizable positioning (top-left, top-right, bottom-left, bottom-right, center)
 *
 * Changes in 1.0.2
 * - All CSS styling is now external.
 * - Added a theme parameter which specifies a secondary class for styling, such
 *   that notifications can be customized in appearance on a per message basis.
 * - Notification life span is now customizable on a per message basis.
 * - Added the ability to disable the global closer, enabled by default.
 * - Added callbacks for when a notification is opened or closed.
 * - Added callback for the global closer.
 * - Customizable animation speed.
 * - jGrowl now set itself up and tears itself down.
 *
 * Changes in 1.0.1:
 * - Removed dependency on metadata plugin in favor of .data()
 * - Namespaced all events
 */

// Copyright (C) 2006 Google Inc.

//      http://www.apache.org/licenses/LICENSE-2.0

/*
CSS Browser Selector 0.6.1
Originally written by Rafael Lima (http://rafael.adm.br)
http://rafael.adm.br/css_browser_selector
License: http://creativecommons.org/licenses/by/2.5/

Co-maintained by:
https://github.com/verbatim/css_browser_selector

*/

/*! Copyright (c) 2013 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.1.3
 *
 * Requires: 1.2.2+
 */

/* ===================================================
 * bootstrap-transition.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#transitions
 * ===================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

/* ==========================================================
 * bootstrap-alert.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#alerts
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

/* ============================================================
 * bootstrap-button.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#buttons
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */

/* ==========================================================
 * bootstrap-carousel.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#carousel
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

/* =============================================================
 * bootstrap-collapse.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#collapse
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */

/* ============================================================
 * bootstrap-dropdown.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */

/* =========================================================
 * bootstrap-modal.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#modals
 * =========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

/* ===========================================================
 * bootstrap-tooltip.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

/* ===========================================================
 * bootstrap-popover.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#popovers
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */

/* =============================================================
 * bootstrap-scrollspy.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#scrollspy
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================== */

/* ========================================================
 * bootstrap-tab.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */

/* =============================================================
 * bootstrap-typeahead.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#typeahead
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */

/* ==========================================================
 * bootstrap-affix.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#affix
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

/*
 * waitForImages 1.4.2
 * -------------------
 * Provides a callback when all images have loaded in your given selector.
 * https://github.com/alexanderdickson/waitForImages
 *
 * Copyright (c) 2013 Alex Dickson
 * Licensed under the MIT license.
 */

/*! jQuery UI - v1.9.2 - 2013-03-26
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.effect.js, jquery.ui.effect-slide.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */

/*!
 * jQuery Color Animations v2.0.0
 * http://jquery.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Mon Aug 13 13:41:02 2012 -0500
 */

/**
 * @preserve
 * jquery.layout 1.3.0 - Release Candidate 30.79
 * $Date: 2013-01-12 08:00:00 (Sat, 12 Jan 2013) $
 * $Rev: 303007 $
 *
 * Copyright (c) 2013 Kevin Dalman (http://allpro.net)
 * Based on work by Fabrizio Balliano (http://www.fabrizioballiano.net)
 *
 * Dual licensed under the GPL (http://www.gnu.org/licenses/gpl.html)
 * and MIT (http://www.opensource.org/licenses/mit-license.php) licenses.
 *
 * SEE: http://layout.jquery-dev.net/LICENSE.txt
 * 
 * Changelog: http://layout.jquery-dev.net/changelog.cfm#1.3.0.rc30.79
 *
 * Docs: http://layout.jquery-dev.net/documentation.html
 * Tips: http://layout.jquery-dev.net/tips.html
 * Help: http://groups.google.com/group/jquery-ui-layout
 */

/**
 * jquery.layout.state 1.0
 * $Date: 2011-07-16 08:00:00 (Sat, 16 July 2011) $
 *
 * Copyright (c) 2012 
 *   Kevin Dalman (http://allpro.net)
 *
 * Dual licensed under the GPL (http://www.gnu.org/licenses/gpl.html)
 * and MIT (http://www.opensource.org/licenses/mit-license.php) licenses.
 *
 * @requires: UI Layout 1.3.0.rc30.1 or higher
 * @requires: $.ui.cookie (above)
 *
 * @see: http://groups.google.com/group/jquery-ui-layout
 */

/**
 * jquery.layout.buttons 1.0
 * $Date: 2011-07-16 08:00:00 (Sat, 16 July 2011) $
 *
 * Copyright (c) 2012 
 *   Kevin Dalman (http://allpro.net)
 *
 * Dual licensed under the GPL (http://www.gnu.org/licenses/gpl.html)
 * and MIT (http://www.opensource.org/licenses/mit-license.php) licenses.
 *
 * @requires: UI Layout 1.3.0.rc30.1 or higher
 *
 * @see: http://groups.google.com/group/jquery-ui-layout
 *
 * Docs: [ to come ]
 * Tips: [ to come ]
 */

/**
 * jquery.layout.browserZoom 1.0
 * $Date: 2011-12-29 08:00:00 (Thu, 29 Dec 2011) $
 *
 * Copyright (c) 2012 
 *   Kevin Dalman (http://allpro.net)
 *
 * Dual licensed under the GPL (http://www.gnu.org/licenses/gpl.html)
 * and MIT (http://www.opensource.org/licenses/mit-license.php) licenses.
 *
 * @requires: UI Layout 1.3.0.rc30.1 or higher
 *
 * @see: http://groups.google.com/group/jquery-ui-layout
 *
 * TODO: Extend logic to handle other problematic zooming in browsers
 * TODO: Add hotkey/mousewheel bindings to _instantly_ respond to these zoom event
 */

function runDelayedFunction() {
 void 0 !== delayedFunction && delayedFunction();
}

function log(e) {
 window.console && showLog && console.log(e);
}

function css_browser_selector(e) {
 function t() {
  var e = window.outerWidth || b.clientWidth, t = window.outerHeight || b.clientHeight;
  n.orientation = t > e ? "portrait" : "landscape", b.className = b.className.replace(/ ?orientation_\w+/g, "").replace(/ [min|max|cl]+[w|h]_\d+/g, "");
  for (var r = o - 1; r >= 0; r--) if (e >= i[r]) {
   n.maxw = i[r];
   break;
  }
  widthClasses = "";
  for (var s in n) widthClasses += " " + s + "_" + n[s];
  return b.className = b.className + widthClasses, widthClasses;
 }
 var n = {}, i = [ 320, 480, 640, 768, 1024, 1152, 1280, 1440, 1680, 1920, 2560 ], o = i.length, r = e.toLowerCase(), s = function(e) {
  return RegExp(e, "i").test(r);
 }, a = function(e, t) {
  t = t.replace(".", "_");
  for (var n = t.indexOf("_"), i = ""; n > 0; ) i += " " + e + t.substring(0, n), 
  n = t.indexOf("_", n + 1);
  return i += " " + e + t;
 }, l = "gecko", c = "webkit", u = "chrome", d = "firefox", p = "safari", f = "opera", h = "mobile", g = "android", m = "blackberry", v = "lang_", y = "device_", b = document.documentElement, w = [ !/opera|webtv/i.test(r) && /msie\s(\d+)/.test(r) ? "ie ie" + (/trident\/4\.0/.test(r) ? "8" : RegExp.$1) : s("firefox/") ? l + " " + d + (/firefox\/((\d+)(\.(\d+))(\.\d+)*)/.test(r) ? " " + d + RegExp.$2 + " " + d + RegExp.$2 + "_" + RegExp.$4 : "") : s("gecko/") ? l : s("opera") ? f + (/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(r) ? " " + f + RegExp.$2 + " " + f + RegExp.$2 + "_" + RegExp.$4 : /opera(\s|\/)(\d+)\.(\d+)/.test(r) ? " " + f + RegExp.$2 + " " + f + RegExp.$2 + "_" + RegExp.$3 : "") : s("konqueror") ? "konqueror" : s("blackberry") ? m + (/Version\/(\d+)(\.(\d+)+)/i.test(r) ? " " + m + RegExp.$1 + " " + m + RegExp.$1 + RegExp.$2.replace(".", "_") : /Blackberry ?(([0-9]+)([a-z]?))[\/|;]/gi.test(r) ? " " + m + RegExp.$2 + (RegExp.$3 ? " " + m + RegExp.$2 + RegExp.$3 : "") : "") : s("android") ? g + (/Version\/(\d+)(\.(\d+))+/i.test(r) ? " " + g + RegExp.$1 + " " + g + RegExp.$1 + RegExp.$2.replace(".", "_") : "") + (/Android (.+); (.+) Build/i.test(r) ? " " + y + RegExp.$2.replace(/ /g, "_").replace(/-/g, "_") : "") : s("chrome") ? c + " " + u + (/chrome\/((\d+)(\.(\d+))(\.\d+)*)/.test(r) ? " " + u + RegExp.$2 + (RegExp.$4 > 0 ? " " + u + RegExp.$2 + "_" + RegExp.$4 : "") : "") : s("iron") ? c + " iron" : s("applewebkit/") ? c + " " + p + (/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(r) ? " " + p + RegExp.$2 + " " + p + RegExp.$2 + RegExp.$3.replace(".", "_") : / Safari\/(\d+)/i.test(r) ? "419" == RegExp.$1 || "417" == RegExp.$1 || "416" == RegExp.$1 || "412" == RegExp.$1 ? " " + p + "2_0" : "312" == RegExp.$1 ? " " + p + "1_3" : "125" == RegExp.$1 ? " " + p + "1_2" : "85" == RegExp.$1 ? " " + p + "1_0" : "" : "") : s("mozilla/") ? l : "", s("android|mobi|mobile|j2me|iphone|ipod|ipad|blackberry|playbook|kindle|silk") ? h : "", s("j2me") ? "j2me" : s("ipad|ipod|iphone") ? (/CPU( iPhone)? OS (\d+[_|\.]\d+([_|\.]\d+)*)/i.test(r) ? "ios" + a("ios", RegExp.$2) : "") + " " + (/(ip(ad|od|hone))/gi.test(r) ? RegExp.$1 : "") : s("playbook") ? "playbook" : s("kindle|silk") ? "kindle" : s("playbook") ? "playbook" : s("mac") ? "mac" + (/mac os x ((\d+)[.|_](\d+))/.test(r) ? " mac" + RegExp.$2 + " mac" + RegExp.$1.replace(".", "_") : "") : s("win") ? "win" + (s("windows nt 6.2") ? " win8" : s("windows nt 6.1") ? " win7" : s("windows nt 6.0") ? " vista" : s("windows nt 5.2") || s("windows nt 5.1") ? " win_xp" : s("windows nt 5.0") ? " win_2k" : s("windows nt 4.0") || s("WinNT4.0") ? " win_nt" : "") : s("freebsd") ? "freebsd" : s("x11|linux") ? "linux" : "", /[; |\[](([a-z]{2})(\-[a-z]{2})?)[)|;|\]]/i.test(r) ? (v + RegExp.$2).replace("-", "_") + ("" != RegExp.$3 ? (" " + v + RegExp.$1).replace("-", "_") : "") : "", s("ipad|iphone|ipod") && !s("safari") ? "ipad_app" : "" ];
 window.onresize = t, t();
 var x = w.join(" ") + " js ";
 return b.className = (x + b.className.replace(/\b(no[-|_]?)?js\b/g, "")).replace(/^ /, "").replace(/ +/g, " "), 
 x;
}

function printStackTrace(e) {
 e = e || {
  guess: !0
 };
 var t = e.e || null, n = !!e.guess, i = new printStackTrace.implementation(), o = i.run(t);
 return n ? i.guessAnonymousFunctions(o) : o;
}

(function(e, t) {
 function n(e) {
  var t = e.length, n = lt.type(e);
  return lt.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e);
 }
 function i(e) {
  var t = kt[e] = {};
  return lt.each(e.match(ut) || [], function(e, n) {
   t[n] = !0;
  }), t;
 }
 function o(e, n, i, o) {
  if (lt.acceptData(e)) {
   var r, s, a = lt.expando, l = "string" == typeof n, c = e.nodeType, u = c ? lt.cache : e, d = c ? e[a] : e[a] && a;
   if (d && u[d] && (o || u[d].data) || !l || i !== t) return d || (c ? e[a] = d = Z.pop() || lt.guid++ : d = a), 
   u[d] || (u[d] = {}, c || (u[d].toJSON = lt.noop)), ("object" == typeof n || "function" == typeof n) && (o ? u[d] = lt.extend(u[d], n) : u[d].data = lt.extend(u[d].data, n)), 
   r = u[d], o || (r.data || (r.data = {}), r = r.data), i !== t && (r[lt.camelCase(n)] = i), 
   l ? (s = r[n], null == s && (s = r[lt.camelCase(n)])) : s = r, s;
  }
 }
 function r(e, t, n) {
  if (lt.acceptData(e)) {
   var i, o, r, s = e.nodeType, l = s ? lt.cache : e, c = s ? e[lt.expando] : lt.expando;
   if (l[c]) {
    if (t && (r = n ? l[c] : l[c].data)) {
     lt.isArray(t) ? t = t.concat(lt.map(t, lt.camelCase)) : t in r ? t = [ t ] : (t = lt.camelCase(t), 
     t = t in r ? [ t ] : t.split(" "));
     for (i = 0, o = t.length; o > i; i++) delete r[t[i]];
     if (!(n ? a : lt.isEmptyObject)(r)) return;
    }
    (n || (delete l[c].data, a(l[c]))) && (s ? lt.cleanData([ e ], !0) : lt.support.deleteExpando || l != l.window ? delete l[c] : l[c] = null);
   }
  }
 }
 function s(e, n, i) {
  if (i === t && 1 === e.nodeType) {
   var o = "data-" + n.replace(Tt, "-$1").toLowerCase();
   if (i = e.getAttribute(o), "string" == typeof i) {
    try {
     i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : St.test(i) ? lt.parseJSON(i) : i;
    } catch (r) {}
    lt.data(e, n, i);
   } else i = t;
  }
  return i;
 }
 function a(e) {
  var t;
  for (t in e) if (("data" !== t || !lt.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
  return !0;
 }
 function l() {
  return !0;
 }
 function c() {
  return !1;
 }
 function u(e, t) {
  do e = e[t]; while (e && 1 !== e.nodeType);
  return e;
 }
 function d(e, t, n) {
  if (t = t || 0, lt.isFunction(t)) return lt.grep(e, function(e, i) {
   var o = !!t.call(e, i, e);
   return o === n;
  });
  if (t.nodeType) return lt.grep(e, function(e) {
   return e === t === n;
  });
  if ("string" == typeof t) {
   var i = lt.grep(e, function(e) {
    return 1 === e.nodeType;
   });
   if (Wt.test(t)) return lt.filter(t, i, !n);
   t = lt.filter(t, i);
  }
  return lt.grep(e, function(e) {
   return lt.inArray(e, t) >= 0 === n;
  });
 }
 function p(e) {
  var t = Ut.split("|"), n = e.createDocumentFragment();
  if (n.createElement) for (;t.length; ) n.createElement(t.pop());
  return n;
 }
 function f(e, t) {
  return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t));
 }
 function h(e) {
  var t = e.getAttributeNode("type");
  return e.type = (t && t.specified) + "/" + e.type, e;
 }
 function g(e) {
  var t = rn.exec(e.type);
  return t ? e.type = t[1] : e.removeAttribute("type"), e;
 }
 function m(e, t) {
  for (var n, i = 0; null != (n = e[i]); i++) lt._data(n, "globalEval", !t || lt._data(t[i], "globalEval"));
 }
 function v(e, t) {
  if (1 === t.nodeType && lt.hasData(e)) {
   var n, i, o, r = lt._data(e), s = lt._data(t, r), a = r.events;
   if (a) {
    delete s.handle, s.events = {};
    for (n in a) for (i = 0, o = a[n].length; o > i; i++) lt.event.add(t, n, a[n][i]);
   }
   s.data && (s.data = lt.extend({}, s.data));
  }
 }
 function y(e, t) {
  var n, i, o;
  if (1 === t.nodeType) {
   if (n = t.nodeName.toLowerCase(), !lt.support.noCloneEvent && t[lt.expando]) {
    o = lt._data(t);
    for (i in o.events) lt.removeEvent(t, i, o.handle);
    t.removeAttribute(lt.expando);
   }
   "script" === n && t.text !== e.text ? (h(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), 
   lt.support.html5Clone && e.innerHTML && !lt.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, 
   t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
  }
 }
 function b(e, n) {
  var i, o, r = 0, s = typeof e.getElementsByTagName !== X ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== X ? e.querySelectorAll(n || "*") : t;
  if (!s) for (s = [], i = e.childNodes || e; null != (o = i[r]); r++) !n || lt.nodeName(o, n) ? s.push(o) : lt.merge(s, b(o, n));
  return n === t || n && lt.nodeName(e, n) ? lt.merge([ e ], s) : s;
 }
 function w(e) {
  tn.test(e.type) && (e.defaultChecked = e.checked);
 }
 function x(e, t) {
  if (t in e) return t;
  for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = Tn.length; o--; ) if (t = Tn[o] + n, 
  t in e) return t;
  return i;
 }
 function C(e, t) {
  return e = t || e, "none" === lt.css(e, "display") || !lt.contains(e.ownerDocument, e);
 }
 function k(e, t) {
  for (var n, i, o, r = [], s = 0, a = e.length; a > s; s++) i = e[s], i.style && (r[s] = lt._data(i, "olddisplay"), 
  n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && C(i) && (r[s] = lt._data(i, "olddisplay", E(i.nodeName)))) : r[s] || (o = C(i), 
  (n && "none" !== n || !o) && lt._data(i, "olddisplay", o ? n : lt.css(i, "display"))));
  for (s = 0; a > s; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
  return e;
 }
 function S(e, t, n) {
  var i = yn.exec(t);
  return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t;
 }
 function T(e, t, n, i, o) {
  for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += lt.css(e, n + Sn[r], !0, o)), 
  i ? ("content" === n && (s -= lt.css(e, "padding" + Sn[r], !0, o)), "margin" !== n && (s -= lt.css(e, "border" + Sn[r] + "Width", !0, o))) : (s += lt.css(e, "padding" + Sn[r], !0, o), 
  "padding" !== n && (s += lt.css(e, "border" + Sn[r] + "Width", !0, o)));
  return s;
 }
 function _(e, t, n) {
  var i = !0, o = "width" === t ? e.offsetWidth : e.offsetHeight, r = dn(e), s = lt.support.boxSizing && "border-box" === lt.css(e, "boxSizing", !1, r);
  if (0 >= o || null == o) {
   if (o = pn(e, t, r), (0 > o || null == o) && (o = e.style[t]), bn.test(o)) return o;
   i = s && (lt.support.boxSizingReliable || o === e.style[t]), o = parseFloat(o) || 0;
  }
  return o + T(e, t, n || (s ? "border" : "content"), i, r) + "px";
 }
 function E(e) {
  var t = V, n = xn[e];
  return n || (n = P(e, t), "none" !== n && n || (un = (un || lt("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), 
  t = (un[0].contentWindow || un[0].contentDocument).document, t.write("<!doctype html><html><body>"), 
  t.close(), n = P(e, t), un.detach()), xn[e] = n), n;
 }
 function P(e, t) {
  var n = lt(t.createElement(e)).appendTo(t.body), i = lt.css(n[0], "display");
  return n.remove(), i;
 }
 function I(e, t, n, i) {
  var o;
  if (lt.isArray(t)) lt.each(t, function(t, o) {
   n || En.test(e) ? i(e, o) : I(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i);
  }); else if (n || "object" !== lt.type(t)) i(e, t); else for (o in t) I(e + "[" + o + "]", t[o], n, i);
 }
 function $(e) {
  return function(t, n) {
   "string" != typeof t && (n = t, t = "*");
   var i, o = 0, r = t.toLowerCase().match(ut) || [];
   if (lt.isFunction(n)) for (;i = r[o++]; ) "+" === i[0] ? (i = i.slice(1) || "*", 
   (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
  };
 }
 function z(e, n, i, o) {
  function r(l) {
   var c;
   return s[l] = !0, lt.each(e[l] || [], function(e, l) {
    var u = l(n, i, o);
    return "string" != typeof u || a || s[u] ? a ? !(c = u) : t : (n.dataTypes.unshift(u), 
    r(u), !1);
   }), c;
  }
  var s = {}, a = e === qn;
  return r(n.dataTypes[0]) || !s["*"] && r("*");
 }
 function N(e, n) {
  var i, o, r = lt.ajaxSettings.flatOptions || {};
  for (o in n) n[o] !== t && ((r[o] ? e : i || (i = {}))[o] = n[o]);
  return i && lt.extend(!0, e, i), e;
 }
 function R(e, n, i) {
  var o, r, s, a, l = e.contents, c = e.dataTypes, u = e.responseFields;
  for (a in u) a in i && (n[u[a]] = i[a]);
  for (;"*" === c[0]; ) c.shift(), r === t && (r = e.mimeType || n.getResponseHeader("Content-Type"));
  if (r) for (a in l) if (l[a] && l[a].test(r)) {
   c.unshift(a);
   break;
  }
  if (c[0] in i) s = c[0]; else {
   for (a in i) {
    if (!c[0] || e.converters[a + " " + c[0]]) {
     s = a;
     break;
    }
    o || (o = a);
   }
   s = s || o;
  }
  return s ? (s !== c[0] && c.unshift(s), i[s]) : t;
 }
 function L(e, t) {
  var n, i, o, r, s = {}, a = 0, l = e.dataTypes.slice(), c = l[0];
  if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), l[1]) for (o in e.converters) s[o.toLowerCase()] = e.converters[o];
  for (;i = l[++a]; ) if ("*" !== i) {
   if ("*" !== c && c !== i) {
    if (o = s[c + " " + i] || s["* " + i], !o) for (n in s) if (r = n.split(" "), r[1] === i && (o = s[c + " " + r[0]] || s["* " + r[0]])) {
     o === !0 ? o = s[n] : s[n] !== !0 && (i = r[0], l.splice(a--, 0, i));
     break;
    }
    if (o !== !0) if (o && e["throws"]) t = o(t); else try {
     t = o(t);
    } catch (u) {
     return {
      state: "parsererror",
      error: o ? u : "No conversion from " + c + " to " + i
     };
    }
   }
   c = i;
  }
  return {
   state: "success",
   data: t
  };
 }
 function A() {
  try {
   return new e.XMLHttpRequest();
  } catch (t) {}
 }
 function O() {
  try {
   return new e.ActiveXObject("Microsoft.XMLHTTP");
  } catch (t) {}
 }
 function M() {
  return setTimeout(function() {
   Zn = t;
  }), Zn = lt.now();
 }
 function D(e, t) {
  lt.each(t, function(t, n) {
   for (var i = (ri[t] || []).concat(ri["*"]), o = 0, r = i.length; r > o; o++) if (i[o].call(e, t, n)) return;
  });
 }
 function j(e, t, n) {
  var i, o, r = 0, s = oi.length, a = lt.Deferred().always(function() {
   delete l.elem;
  }), l = function() {
   if (o) return !1;
   for (var t = Zn || M(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(r);
   return a.notifyWith(e, [ c, r, n ]), 1 > r && l ? n : (a.resolveWith(e, [ c ]), 
   !1);
  }, c = a.promise({
   elem: e,
   props: lt.extend({}, t),
   opts: lt.extend(!0, {
    specialEasing: {}
   }, n),
   originalProperties: t,
   originalOptions: n,
   startTime: Zn || M(),
   duration: n.duration,
   tweens: [],
   createTween: function(t, n) {
    var i = lt.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
    return c.tweens.push(i), i;
   },
   stop: function(t) {
    var n = 0, i = t ? c.tweens.length : 0;
    if (o) return this;
    for (o = !0; i > n; n++) c.tweens[n].run(1);
    return t ? a.resolveWith(e, [ c, t ]) : a.rejectWith(e, [ c, t ]), this;
   }
  }), u = c.props;
  for (H(u, c.opts.specialEasing); s > r; r++) if (i = oi[r].call(c, e, u, c.opts)) return i;
  return D(c, u), lt.isFunction(c.opts.start) && c.opts.start.call(e, c), lt.fx.timer(lt.extend(l, {
   elem: e,
   anim: c,
   queue: c.opts.queue
  })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always);
 }
 function H(e, t) {
  var n, i, o, r, s;
  for (o in e) if (i = lt.camelCase(o), r = t[i], n = e[o], lt.isArray(n) && (r = n[1], 
  n = e[o] = n[0]), o !== i && (e[i] = n, delete e[o]), s = lt.cssHooks[i], s && "expand" in s) {
   n = s.expand(n), delete e[i];
   for (o in n) o in e || (e[o] = n[o], t[o] = r);
  } else t[i] = r;
 }
 function F(e, t, n) {
  var i, o, r, s, a, l, c, u, d, p = this, f = e.style, h = {}, g = [], m = e.nodeType && C(e);
  n.queue || (u = lt._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, 
  d = u.empty.fire, u.empty.fire = function() {
   u.unqueued || d();
  }), u.unqueued++, p.always(function() {
   p.always(function() {
    u.unqueued--, lt.queue(e, "fx").length || u.empty.fire();
   });
  })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [ f.overflow, f.overflowX, f.overflowY ], 
  "inline" === lt.css(e, "display") && "none" === lt.css(e, "float") && (lt.support.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), 
  n.overflow && (f.overflow = "hidden", lt.support.shrinkWrapBlocks || p.always(function() {
   f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2];
  }));
  for (o in t) if (s = t[o], ti.exec(s)) {
   if (delete t[o], l = l || "toggle" === s, s === (m ? "hide" : "show")) continue;
   g.push(o);
  }
  if (r = g.length) {
   a = lt._data(e, "fxshow") || lt._data(e, "fxshow", {}), "hidden" in a && (m = a.hidden), 
   l && (a.hidden = !m), m ? lt(e).show() : p.done(function() {
    lt(e).hide();
   }), p.done(function() {
    var t;
    lt._removeData(e, "fxshow");
    for (t in h) lt.style(e, t, h[t]);
   });
   for (o = 0; r > o; o++) i = g[o], c = p.createTween(i, m ? a[i] : 0), h[i] = a[i] || lt.style(e, i), 
   i in a || (a[i] = c.start, m && (c.end = c.start, c.start = "width" === i || "height" === i ? 1 : 0));
  }
 }
 function B(e, t, n, i, o) {
  return new B.prototype.init(e, t, n, i, o);
 }
 function W(e, t) {
  var n, i = {
   height: e
  }, o = 0;
  for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = Sn[o], i["margin" + n] = i["padding" + n] = e;
  return t && (i.opacity = i.width = e), i;
 }
 function q(e) {
  return lt.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1;
 }
 var G, U, X = typeof t, V = e.document, Y = e.location, K = e.jQuery, J = e.$, Q = {}, Z = [], et = "1.9.1", tt = Z.concat, nt = Z.push, it = Z.slice, ot = Z.indexOf, rt = Q.toString, st = Q.hasOwnProperty, at = et.trim, lt = function(e, t) {
  return new lt.fn.init(e, t, U);
 }, ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ut = /\S+/g, dt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, pt = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, ft = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ht = /^[\],:{}\s]*$/, gt = /(?:^|:|,)(?:\s*\[)+/g, mt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, vt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, yt = /^-ms-/, bt = /-([\da-z])/gi, wt = function(e, t) {
  return t.toUpperCase();
 }, xt = function(e) {
  (V.addEventListener || "load" === e.type || "complete" === V.readyState) && (Ct(), 
  lt.ready());
 }, Ct = function() {
  V.addEventListener ? (V.removeEventListener("DOMContentLoaded", xt, !1), e.removeEventListener("load", xt, !1)) : (V.detachEvent("onreadystatechange", xt), 
  e.detachEvent("onload", xt));
 };
 lt.fn = lt.prototype = {
  jquery: et,
  constructor: lt,
  init: function(e, n, i) {
   var o, r;
   if (!e) return this;
   if ("string" == typeof e) {
    if (o = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [ null, e, null ] : pt.exec(e), 
    !o || !o[1] && n) return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
    if (o[1]) {
     if (n = n instanceof lt ? n[0] : n, lt.merge(this, lt.parseHTML(o[1], n && n.nodeType ? n.ownerDocument || n : V, !0)), 
     ft.test(o[1]) && lt.isPlainObject(n)) for (o in n) lt.isFunction(this[o]) ? this[o](n[o]) : this.attr(o, n[o]);
     return this;
    }
    if (r = V.getElementById(o[2]), r && r.parentNode) {
     if (r.id !== o[2]) return i.find(e);
     this.length = 1, this[0] = r;
    }
    return this.context = V, this.selector = e, this;
   }
   return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : lt.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, 
   this.context = e.context), lt.makeArray(e, this));
  },
  selector: "",
  length: 0,
  size: function() {
   return this.length;
  },
  toArray: function() {
   return it.call(this);
  },
  get: function(e) {
   return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
  },
  pushStack: function(e) {
   var t = lt.merge(this.constructor(), e);
   return t.prevObject = this, t.context = this.context, t;
  },
  each: function(e, t) {
   return lt.each(this, e, t);
  },
  ready: function(e) {
   return lt.ready.promise().done(e), this;
  },
  slice: function() {
   return this.pushStack(it.apply(this, arguments));
  },
  first: function() {
   return this.eq(0);
  },
  last: function() {
   return this.eq(-1);
  },
  eq: function(e) {
   var t = this.length, n = +e + (0 > e ? t : 0);
   return this.pushStack(n >= 0 && t > n ? [ this[n] ] : []);
  },
  map: function(e) {
   return this.pushStack(lt.map(this, function(t, n) {
    return e.call(t, n, t);
   }));
  },
  end: function() {
   return this.prevObject || this.constructor(null);
  },
  push: nt,
  sort: [].sort,
  splice: [].splice
 }, lt.fn.init.prototype = lt.fn, lt.extend = lt.fn.extend = function() {
  var e, n, i, o, r, s, a = arguments[0] || {}, l = 1, c = arguments.length, u = !1;
  for ("boolean" == typeof a && (u = a, a = arguments[1] || {}, l = 2), "object" == typeof a || lt.isFunction(a) || (a = {}), 
  c === l && (a = this, --l); c > l; l++) if (null != (r = arguments[l])) for (o in r) e = a[o], 
  i = r[o], a !== i && (u && i && (lt.isPlainObject(i) || (n = lt.isArray(i))) ? (n ? (n = !1, 
  s = e && lt.isArray(e) ? e : []) : s = e && lt.isPlainObject(e) ? e : {}, a[o] = lt.extend(u, s, i)) : i !== t && (a[o] = i));
  return a;
 }, lt.extend({
  noConflict: function(t) {
   return e.$ === lt && (e.$ = J), t && e.jQuery === lt && (e.jQuery = K), lt;
  },
  isReady: !1,
  readyWait: 1,
  holdReady: function(e) {
   e ? lt.readyWait++ : lt.ready(!0);
  },
  ready: function(e) {
   if (e === !0 ? !--lt.readyWait : !lt.isReady) {
    if (!V.body) return setTimeout(lt.ready);
    lt.isReady = !0, e !== !0 && --lt.readyWait > 0 || (G.resolveWith(V, [ lt ]), lt.fn.trigger && lt(V).trigger("ready").off("ready"));
   }
  },
  isFunction: function(e) {
   return "function" === lt.type(e);
  },
  isArray: Array.isArray || function(e) {
   return "array" === lt.type(e);
  },
  isWindow: function(e) {
   return null != e && e == e.window;
  },
  isNumeric: function(e) {
   return !isNaN(parseFloat(e)) && isFinite(e);
  },
  type: function(e) {
   return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Q[rt.call(e)] || "object" : typeof e;
  },
  isPlainObject: function(e) {
   if (!e || "object" !== lt.type(e) || e.nodeType || lt.isWindow(e)) return !1;
   try {
    if (e.constructor && !st.call(e, "constructor") && !st.call(e.constructor.prototype, "isPrototypeOf")) return !1;
   } catch (n) {
    return !1;
   }
   var i;
   for (i in e) ;
   return i === t || st.call(e, i);
  },
  isEmptyObject: function(e) {
   var t;
   for (t in e) return !1;
   return !0;
  },
  error: function(e) {
   throw Error(e);
  },
  parseHTML: function(e, t, n) {
   if (!e || "string" != typeof e) return null;
   "boolean" == typeof t && (n = t, t = !1), t = t || V;
   var i = ft.exec(e), o = !n && [];
   return i ? [ t.createElement(i[1]) ] : (i = lt.buildFragment([ e ], t, o), o && lt(o).remove(), 
   lt.merge([], i.childNodes));
  },
  parseJSON: function(n) {
   return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = lt.trim(n), 
   n && ht.test(n.replace(mt, "@").replace(vt, "]").replace(gt, ""))) ? Function("return " + n)() : (lt.error("Invalid JSON: " + n), 
   t);
  },
  parseXML: function(n) {
   var i, o;
   if (!n || "string" != typeof n) return null;
   try {
    e.DOMParser ? (o = new DOMParser(), i = o.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), 
    i.async = "false", i.loadXML(n));
   } catch (r) {
    i = t;
   }
   return i && i.documentElement && !i.getElementsByTagName("parsererror").length || lt.error("Invalid XML: " + n), 
   i;
  },
  noop: function() {},
  globalEval: function(t) {
   t && lt.trim(t) && (e.execScript || function(t) {
    e.eval.call(e, t);
   })(t);
  },
  camelCase: function(e) {
   return e.replace(yt, "ms-").replace(bt, wt);
  },
  nodeName: function(e, t) {
   return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  },
  each: function(e, t, i) {
   var o, r = 0, s = e.length, a = n(e);
   if (i) {
    if (a) for (;s > r && (o = t.apply(e[r], i), o !== !1); r++) ; else for (r in e) if (o = t.apply(e[r], i), 
    o === !1) break;
   } else if (a) for (;s > r && (o = t.call(e[r], r, e[r]), o !== !1); r++) ; else for (r in e) if (o = t.call(e[r], r, e[r]), 
   o === !1) break;
   return e;
  },
  trim: at && !at.call("﻿ ") ? function(e) {
   return null == e ? "" : at.call(e);
  } : function(e) {
   return null == e ? "" : (e + "").replace(dt, "");
  },
  makeArray: function(e, t) {
   var i = t || [];
   return null != e && (n(Object(e)) ? lt.merge(i, "string" == typeof e ? [ e ] : e) : nt.call(i, e)), 
   i;
  },
  inArray: function(e, t, n) {
   var i;
   if (t) {
    if (ot) return ot.call(t, e, n);
    for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++) if (n in t && t[n] === e) return n;
   }
   return -1;
  },
  merge: function(e, n) {
   var i = n.length, o = e.length, r = 0;
   if ("number" == typeof i) for (;i > r; r++) e[o++] = n[r]; else for (;n[r] !== t; ) e[o++] = n[r++];
   return e.length = o, e;
  },
  grep: function(e, t, n) {
   var i, o = [], r = 0, s = e.length;
   for (n = !!n; s > r; r++) i = !!t(e[r], r), n !== i && o.push(e[r]);
   return o;
  },
  map: function(e, t, i) {
   var o, r = 0, s = e.length, a = n(e), l = [];
   if (a) for (;s > r; r++) o = t(e[r], r, i), null != o && (l[l.length] = o); else for (r in e) o = t(e[r], r, i), 
   null != o && (l[l.length] = o);
   return tt.apply([], l);
  },
  guid: 1,
  proxy: function(e, n) {
   var i, o, r;
   return "string" == typeof n && (r = e[n], n = e, e = r), lt.isFunction(e) ? (i = it.call(arguments, 2), 
   o = function() {
    return e.apply(n || this, i.concat(it.call(arguments)));
   }, o.guid = e.guid = e.guid || lt.guid++, o) : t;
  },
  access: function(e, n, i, o, r, s, a) {
   var l = 0, c = e.length, u = null == i;
   if ("object" === lt.type(i)) {
    r = !0;
    for (l in i) lt.access(e, n, l, i[l], !0, s, a);
   } else if (o !== t && (r = !0, lt.isFunction(o) || (a = !0), u && (a ? (n.call(e, o), 
   n = null) : (u = n, n = function(e, t, n) {
    return u.call(lt(e), n);
   })), n)) for (;c > l; l++) n(e[l], i, a ? o : o.call(e[l], l, n(e[l], i)));
   return r ? e : u ? n.call(e) : c ? n(e[0], i) : s;
  },
  now: function() {
   return new Date().getTime();
  }
 }), lt.ready.promise = function(t) {
  if (!G) if (G = lt.Deferred(), "complete" === V.readyState) setTimeout(lt.ready); else if (V.addEventListener) V.addEventListener("DOMContentLoaded", xt, !1), 
  e.addEventListener("load", xt, !1); else {
   V.attachEvent("onreadystatechange", xt), e.attachEvent("onload", xt);
   var n = !1;
   try {
    n = null == e.frameElement && V.documentElement;
   } catch (i) {}
   n && n.doScroll && function o() {
    if (!lt.isReady) {
     try {
      n.doScroll("left");
     } catch (e) {
      return setTimeout(o, 50);
     }
     Ct(), lt.ready();
    }
   }();
  }
  return G.promise(t);
 }, lt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
  Q["[object " + t + "]"] = t.toLowerCase();
 }), U = lt(V);
 var kt = {};
 lt.Callbacks = function(e) {
  e = "string" == typeof e ? kt[e] || i(e) : lt.extend({}, e);
  var n, o, r, s, a, l, c = [], u = !e.once && [], d = function(t) {
   for (o = e.memory && t, r = !0, a = l || 0, l = 0, s = c.length, n = !0; c && s > a; a++) if (c[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
    o = !1;
    break;
   }
   n = !1, c && (u ? u.length && d(u.shift()) : o ? c = [] : p.disable());
  }, p = {
   add: function() {
    if (c) {
     var t = c.length;
     (function i(t) {
      lt.each(t, function(t, n) {
       var o = lt.type(n);
       "function" === o ? e.unique && p.has(n) || c.push(n) : n && n.length && "string" !== o && i(n);
      });
     })(arguments), n ? s = c.length : o && (l = t, d(o));
    }
    return this;
   },
   remove: function() {
    return c && lt.each(arguments, function(e, t) {
     for (var i; (i = lt.inArray(t, c, i)) > -1; ) c.splice(i, 1), n && (s >= i && s--, 
     a >= i && a--);
    }), this;
   },
   has: function(e) {
    return e ? lt.inArray(e, c) > -1 : !(!c || !c.length);
   },
   empty: function() {
    return c = [], this;
   },
   disable: function() {
    return c = u = o = t, this;
   },
   disabled: function() {
    return !c;
   },
   lock: function() {
    return u = t, o || p.disable(), this;
   },
   locked: function() {
    return !u;
   },
   fireWith: function(e, t) {
    return t = t || [], t = [ e, t.slice ? t.slice() : t ], !c || r && !u || (n ? u.push(t) : d(t)), 
    this;
   },
   fire: function() {
    return p.fireWith(this, arguments), this;
   },
   fired: function() {
    return !!r;
   }
  };
  return p;
 }, lt.extend({
  Deferred: function(e) {
   var t = [ [ "resolve", "done", lt.Callbacks("once memory"), "resolved" ], [ "reject", "fail", lt.Callbacks("once memory"), "rejected" ], [ "notify", "progress", lt.Callbacks("memory") ] ], n = "pending", i = {
    state: function() {
     return n;
    },
    always: function() {
     return o.done(arguments).fail(arguments), this;
    },
    then: function() {
     var e = arguments;
     return lt.Deferred(function(n) {
      lt.each(t, function(t, r) {
       var s = r[0], a = lt.isFunction(e[t]) && e[t];
       o[r[1]](function() {
        var e = a && a.apply(this, arguments);
        e && lt.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n.promise() : this, a ? [ e ] : arguments);
       });
      }), e = null;
     }).promise();
    },
    promise: function(e) {
     return null != e ? lt.extend(e, i) : i;
    }
   }, o = {};
   return i.pipe = i.then, lt.each(t, function(e, r) {
    var s = r[2], a = r[3];
    i[r[1]] = s.add, a && s.add(function() {
     n = a;
    }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
     return o[r[0] + "With"](this === o ? i : this, arguments), this;
    }, o[r[0] + "With"] = s.fireWith;
   }), i.promise(o), e && e.call(o, o), o;
  },
  when: function(e) {
   var t, n, i, o = 0, r = it.call(arguments), s = r.length, a = 1 !== s || e && lt.isFunction(e.promise) ? s : 0, l = 1 === a ? e : lt.Deferred(), c = function(e, n, i) {
    return function(o) {
     n[e] = this, i[e] = arguments.length > 1 ? it.call(arguments) : o, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i);
    };
   };
   if (s > 1) for (t = Array(s), n = Array(s), i = Array(s); s > o; o++) r[o] && lt.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, t)) : --a;
   return a || l.resolveWith(i, r), l.promise();
  }
 }), lt.support = function() {
  var t, n, i, o, r, s, a, l, c, u, d = V.createElement("div");
  if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
  n = d.getElementsByTagName("*"), i = d.getElementsByTagName("a")[0], !n || !i || !n.length) return {};
  r = V.createElement("select"), a = r.appendChild(V.createElement("option")), o = d.getElementsByTagName("input")[0], 
  i.style.cssText = "top:1px;float:left;opacity:.5", t = {
   getSetAttribute: "t" !== d.className,
   leadingWhitespace: 3 === d.firstChild.nodeType,
   tbody: !d.getElementsByTagName("tbody").length,
   htmlSerialize: !!d.getElementsByTagName("link").length,
   style: /top/.test(i.getAttribute("style")),
   hrefNormalized: "/a" === i.getAttribute("href"),
   opacity: /^0.5/.test(i.style.opacity),
   cssFloat: !!i.style.cssFloat,
   checkOn: !!o.value,
   optSelected: a.selected,
   enctype: !!V.createElement("form").enctype,
   html5Clone: "<:nav></:nav>" !== V.createElement("nav").cloneNode(!0).outerHTML,
   boxModel: "CSS1Compat" === V.compatMode,
   deleteExpando: !0,
   noCloneEvent: !0,
   inlineBlockNeedsLayout: !1,
   shrinkWrapBlocks: !1,
   reliableMarginRight: !0,
   boxSizingReliable: !0,
   pixelPosition: !1
  }, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, r.disabled = !0, 
  t.optDisabled = !a.disabled;
  try {
   delete d.test;
  } catch (p) {
   t.deleteExpando = !1;
  }
  o = V.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), 
  o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, 
  o.setAttribute("checked", "t"), o.setAttribute("name", "t"), s = V.createDocumentFragment(), 
  s.appendChild(o), t.appendChecked = o.checked, t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, 
  d.attachEvent && (d.attachEvent("onclick", function() {
   t.noCloneEvent = !1;
  }), d.cloneNode(!0).click());
  for (u in {
   submit: !0,
   change: !0,
   focusin: !0
  }) d.setAttribute(l = "on" + u, "t"), t[u + "Bubbles"] = l in e || d.attributes[l].expando === !1;
  return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", 
  t.clearCloneStyle = "content-box" === d.style.backgroundClip, lt(function() {
   var n, i, o, r = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", s = V.getElementsByTagName("body")[0];
   s && (n = V.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 
   s.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", 
   o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", 
   c = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", 
   t.reliableHiddenOffsets = c && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", 
   t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, 
   e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, 
   t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
    width: "4px"
   }).width, i = d.appendChild(V.createElement("div")), i.style.cssText = d.style.cssText = r, 
   i.style.marginRight = i.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), 
   typeof d.style.zoom !== X && (d.innerHTML = "", d.style.cssText = r + "width:1px;padding:1px;display:inline;zoom:1", 
   t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", 
   d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (s.style.zoom = 1)), 
   s.removeChild(n), n = d = o = i = null);
  }), n = r = s = a = i = o = null, t;
 }();
 var St = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, Tt = /([A-Z])/g;
 lt.extend({
  cache: {},
  expando: "jQuery" + (et + Math.random()).replace(/\D/g, ""),
  noData: {
   embed: !0,
   object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
   applet: !0
  },
  hasData: function(e) {
   return e = e.nodeType ? lt.cache[e[lt.expando]] : e[lt.expando], !!e && !a(e);
  },
  data: function(e, t, n) {
   return o(e, t, n);
  },
  removeData: function(e, t) {
   return r(e, t);
  },
  _data: function(e, t, n) {
   return o(e, t, n, !0);
  },
  _removeData: function(e, t) {
   return r(e, t, !0);
  },
  acceptData: function(e) {
   if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
   var t = e.nodeName && lt.noData[e.nodeName.toLowerCase()];
   return !t || t !== !0 && e.getAttribute("classid") === t;
  }
 }), lt.fn.extend({
  data: function(e, n) {
   var i, o, r = this[0], a = 0, l = null;
   if (e === t) {
    if (this.length && (l = lt.data(r), 1 === r.nodeType && !lt._data(r, "parsedAttrs"))) {
     for (i = r.attributes; i.length > a; a++) o = i[a].name, o.indexOf("data-") || (o = lt.camelCase(o.slice(5)), 
     s(r, o, l[o]));
     lt._data(r, "parsedAttrs", !0);
    }
    return l;
   }
   return "object" == typeof e ? this.each(function() {
    lt.data(this, e);
   }) : lt.access(this, function(n) {
    return n === t ? r ? s(r, e, lt.data(r, e)) : null : (this.each(function() {
     lt.data(this, e, n);
    }), t);
   }, null, n, arguments.length > 1, null, !0);
  },
  removeData: function(e) {
   return this.each(function() {
    lt.removeData(this, e);
   });
  }
 }), lt.extend({
  queue: function(e, n, i) {
   var o;
   return e ? (n = (n || "fx") + "queue", o = lt._data(e, n), i && (!o || lt.isArray(i) ? o = lt._data(e, n, lt.makeArray(i)) : o.push(i)), 
   o || []) : t;
  },
  dequeue: function(e, t) {
   t = t || "fx";
   var n = lt.queue(e, t), i = n.length, o = n.shift(), r = lt._queueHooks(e, t), s = function() {
    lt.dequeue(e, t);
   };
   "inprogress" === o && (o = n.shift(), i--), r.cur = o, o && ("fx" === t && n.unshift("inprogress"), 
   delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire();
  },
  _queueHooks: function(e, t) {
   var n = t + "queueHooks";
   return lt._data(e, n) || lt._data(e, n, {
    empty: lt.Callbacks("once memory").add(function() {
     lt._removeData(e, t + "queue"), lt._removeData(e, n);
    })
   });
  }
 }), lt.fn.extend({
  queue: function(e, n) {
   var i = 2;
   return "string" != typeof e && (n = e, e = "fx", i--), i > arguments.length ? lt.queue(this[0], e) : n === t ? this : this.each(function() {
    var t = lt.queue(this, e, n);
    lt._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && lt.dequeue(this, e);
   });
  },
  dequeue: function(e) {
   return this.each(function() {
    lt.dequeue(this, e);
   });
  },
  delay: function(e, t) {
   return e = lt.fx ? lt.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
    var i = setTimeout(t, e);
    n.stop = function() {
     clearTimeout(i);
    };
   });
  },
  clearQueue: function(e) {
   return this.queue(e || "fx", []);
  },
  promise: function(e, n) {
   var i, o = 1, r = lt.Deferred(), s = this, a = this.length, l = function() {
    --o || r.resolveWith(s, [ s ]);
   };
   for ("string" != typeof e && (n = e, e = t), e = e || "fx"; a--; ) i = lt._data(s[a], e + "queueHooks"), 
   i && i.empty && (o++, i.empty.add(l));
   return l(), r.promise(n);
  }
 });
 var _t, Et, Pt = /[\t\r\n]/g, It = /\r/g, $t = /^(?:input|select|textarea|button|object)$/i, zt = /^(?:a|area)$/i, Nt = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, Rt = /^(?:checked|selected)$/i, Lt = lt.support.getSetAttribute, At = lt.support.input;
 lt.fn.extend({
  attr: function(e, t) {
   return lt.access(this, lt.attr, e, t, arguments.length > 1);
  },
  removeAttr: function(e) {
   return this.each(function() {
    lt.removeAttr(this, e);
   });
  },
  prop: function(e, t) {
   return lt.access(this, lt.prop, e, t, arguments.length > 1);
  },
  removeProp: function(e) {
   return e = lt.propFix[e] || e, this.each(function() {
    try {
     this[e] = t, delete this[e];
    } catch (n) {}
   });
  },
  addClass: function(e) {
   var t, n, i, o, r, s = 0, a = this.length, l = "string" == typeof e && e;
   if (lt.isFunction(e)) return this.each(function(t) {
    lt(this).addClass(e.call(this, t, this.className));
   });
   if (l) for (t = (e || "").match(ut) || []; a > s; s++) if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Pt, " ") : " ")) {
    for (r = 0; o = t[r++]; ) 0 > i.indexOf(" " + o + " ") && (i += o + " ");
    n.className = lt.trim(i);
   }
   return this;
  },
  removeClass: function(e) {
   var t, n, i, o, r, s = 0, a = this.length, l = 0 === arguments.length || "string" == typeof e && e;
   if (lt.isFunction(e)) return this.each(function(t) {
    lt(this).removeClass(e.call(this, t, this.className));
   });
   if (l) for (t = (e || "").match(ut) || []; a > s; s++) if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Pt, " ") : "")) {
    for (r = 0; o = t[r++]; ) for (;i.indexOf(" " + o + " ") >= 0; ) i = i.replace(" " + o + " ", " ");
    n.className = e ? lt.trim(i) : "";
   }
   return this;
  },
  toggleClass: function(e, t) {
   var n = typeof e, i = "boolean" == typeof t;
   return lt.isFunction(e) ? this.each(function(n) {
    lt(this).toggleClass(e.call(this, n, this.className, t), t);
   }) : this.each(function() {
    if ("string" === n) for (var o, r = 0, s = lt(this), a = t, l = e.match(ut) || []; o = l[r++]; ) a = i ? a : !s.hasClass(o), 
    s[a ? "addClass" : "removeClass"](o); else (n === X || "boolean" === n) && (this.className && lt._data(this, "__className__", this.className), 
    this.className = this.className || e === !1 ? "" : lt._data(this, "__className__") || "");
   });
  },
  hasClass: function(e) {
   for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Pt, " ").indexOf(t) >= 0) return !0;
   return !1;
  },
  val: function(e) {
   var n, i, o, r = this[0];
   {
    if (arguments.length) return o = lt.isFunction(e), this.each(function(n) {
     var r, s = lt(this);
     1 === this.nodeType && (r = o ? e.call(this, n, s.val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : lt.isArray(r) && (r = lt.map(r, function(e) {
      return null == e ? "" : e + "";
     })), i = lt.valHooks[this.type] || lt.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, r, "value") !== t || (this.value = r));
    });
    if (r) return i = lt.valHooks[r.type] || lt.valHooks[r.nodeName.toLowerCase()], 
    i && "get" in i && (n = i.get(r, "value")) !== t ? n : (n = r.value, "string" == typeof n ? n.replace(It, "") : null == n ? "" : n);
   }
  }
 }), lt.extend({
  valHooks: {
   option: {
    get: function(e) {
     var t = e.attributes.value;
     return !t || t.specified ? e.value : e.text;
    }
   },
   select: {
    get: function(e) {
     for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++) if (n = i[l], 
     !(!n.selected && l !== o || (lt.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && lt.nodeName(n.parentNode, "optgroup"))) {
      if (t = lt(n).val(), r) return t;
      s.push(t);
     }
     return s;
    },
    set: function(e, t) {
     var n = lt.makeArray(t);
     return lt(e).find("option").each(function() {
      this.selected = lt.inArray(lt(this).val(), n) >= 0;
     }), n.length || (e.selectedIndex = -1), n;
    }
   }
  },
  attr: function(e, n, i) {
   var o, r, s, a = e.nodeType;
   if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === X ? lt.prop(e, n, i) : (r = 1 !== a || !lt.isXMLDoc(e), 
   r && (n = n.toLowerCase(), o = lt.attrHooks[n] || (Nt.test(n) ? Et : _t)), i === t ? o && r && "get" in o && null !== (s = o.get(e, n)) ? s : (typeof e.getAttribute !== X && (s = e.getAttribute(n)), 
   null == s ? t : s) : null !== i ? o && r && "set" in o && (s = o.set(e, i, n)) !== t ? s : (e.setAttribute(n, i + ""), 
   i) : (lt.removeAttr(e, n), t));
  },
  removeAttr: function(e, t) {
   var n, i, o = 0, r = t && t.match(ut);
   if (r && 1 === e.nodeType) for (;n = r[o++]; ) i = lt.propFix[n] || n, Nt.test(n) ? !Lt && Rt.test(n) ? e[lt.camelCase("default-" + n)] = e[i] = !1 : e[i] = !1 : lt.attr(e, n, ""), 
   e.removeAttribute(Lt ? n : i);
  },
  attrHooks: {
   type: {
    set: function(e, t) {
     if (!lt.support.radioValue && "radio" === t && lt.nodeName(e, "input")) {
      var n = e.value;
      return e.setAttribute("type", t), n && (e.value = n), t;
     }
    }
   }
  },
  propFix: {
   tabindex: "tabIndex",
   readonly: "readOnly",
   "for": "htmlFor",
   "class": "className",
   maxlength: "maxLength",
   cellspacing: "cellSpacing",
   cellpadding: "cellPadding",
   rowspan: "rowSpan",
   colspan: "colSpan",
   usemap: "useMap",
   frameborder: "frameBorder",
   contenteditable: "contentEditable"
  },
  prop: function(e, n, i) {
   var o, r, s, a = e.nodeType;
   if (e && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !lt.isXMLDoc(e), s && (n = lt.propFix[n] || n, 
   r = lt.propHooks[n]), i !== t ? r && "set" in r && (o = r.set(e, i, n)) !== t ? o : e[n] = i : r && "get" in r && null !== (o = r.get(e, n)) ? o : e[n];
  },
  propHooks: {
   tabIndex: {
    get: function(e) {
     var n = e.getAttributeNode("tabindex");
     return n && n.specified ? parseInt(n.value, 10) : $t.test(e.nodeName) || zt.test(e.nodeName) && e.href ? 0 : t;
    }
   }
  }
 }), Et = {
  get: function(e, n) {
   var i = lt.prop(e, n), o = "boolean" == typeof i && e.getAttribute(n), r = "boolean" == typeof i ? At && Lt ? null != o : Rt.test(n) ? e[lt.camelCase("default-" + n)] : !!o : e.getAttributeNode(n);
   return r && r.value !== !1 ? n.toLowerCase() : t;
  },
  set: function(e, t, n) {
   return t === !1 ? lt.removeAttr(e, n) : At && Lt || !Rt.test(n) ? e.setAttribute(!Lt && lt.propFix[n] || n, n) : e[lt.camelCase("default-" + n)] = e[n] = !0, 
   n;
  }
 }, At && Lt || (lt.attrHooks.value = {
  get: function(e, n) {
   var i = e.getAttributeNode(n);
   return lt.nodeName(e, "input") ? e.defaultValue : i && i.specified ? i.value : t;
  },
  set: function(e, n, i) {
   return lt.nodeName(e, "input") ? (e.defaultValue = n, t) : _t && _t.set(e, n, i);
  }
 }), Lt || (_t = lt.valHooks.button = {
  get: function(e, n) {
   var i = e.getAttributeNode(n);
   return i && ("id" === n || "name" === n || "coords" === n ? "" !== i.value : i.specified) ? i.value : t;
  },
  set: function(e, n, i) {
   var o = e.getAttributeNode(i);
   return o || e.setAttributeNode(o = e.ownerDocument.createAttribute(i)), o.value = n += "", 
   "value" === i || n === e.getAttribute(i) ? n : t;
  }
 }, lt.attrHooks.contenteditable = {
  get: _t.get,
  set: function(e, t, n) {
   _t.set(e, "" === t ? !1 : t, n);
  }
 }, lt.each([ "width", "height" ], function(e, n) {
  lt.attrHooks[n] = lt.extend(lt.attrHooks[n], {
   set: function(e, i) {
    return "" === i ? (e.setAttribute(n, "auto"), i) : t;
   }
  });
 })), lt.support.hrefNormalized || (lt.each([ "href", "src", "width", "height" ], function(e, n) {
  lt.attrHooks[n] = lt.extend(lt.attrHooks[n], {
   get: function(e) {
    var i = e.getAttribute(n, 2);
    return null == i ? t : i;
   }
  });
 }), lt.each([ "href", "src" ], function(e, t) {
  lt.propHooks[t] = {
   get: function(e) {
    return e.getAttribute(t, 4);
   }
  };
 })), lt.support.style || (lt.attrHooks.style = {
  get: function(e) {
   return e.style.cssText || t;
  },
  set: function(e, t) {
   return e.style.cssText = t + "";
  }
 }), lt.support.optSelected || (lt.propHooks.selected = lt.extend(lt.propHooks.selected, {
  get: function(e) {
   var t = e.parentNode;
   return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
  }
 })), lt.support.enctype || (lt.propFix.enctype = "encoding"), lt.support.checkOn || lt.each([ "radio", "checkbox" ], function() {
  lt.valHooks[this] = {
   get: function(e) {
    return null === e.getAttribute("value") ? "on" : e.value;
   }
  };
 }), lt.each([ "radio", "checkbox" ], function() {
  lt.valHooks[this] = lt.extend(lt.valHooks[this], {
   set: function(e, n) {
    return lt.isArray(n) ? e.checked = lt.inArray(lt(e).val(), n) >= 0 : t;
   }
  });
 });
 var Ot = /^(?:input|select|textarea)$/i, Mt = /^key/, Dt = /^(?:mouse|contextmenu)|click/, jt = /^(?:focusinfocus|focusoutblur)$/, Ht = /^([^.]*)(?:\.(.+)|)$/;
 lt.event = {
  global: {},
  add: function(e, n, i, o, r) {
   var s, a, l, c, u, d, p, f, h, g, m, v = lt._data(e);
   if (v) {
    for (i.handler && (c = i, i = c.handler, r = c.selector), i.guid || (i.guid = lt.guid++), 
    (a = v.events) || (a = v.events = {}), (d = v.handle) || (d = v.handle = function(e) {
     return typeof lt === X || e && lt.event.triggered === e.type ? t : lt.event.dispatch.apply(d.elem, arguments);
    }, d.elem = e), n = (n || "").match(ut) || [ "" ], l = n.length; l--; ) s = Ht.exec(n[l]) || [], 
    h = m = s[1], g = (s[2] || "").split(".").sort(), u = lt.event.special[h] || {}, 
    h = (r ? u.delegateType : u.bindType) || h, u = lt.event.special[h] || {}, p = lt.extend({
     type: h,
     origType: m,
     data: o,
     handler: i,
     guid: i.guid,
     selector: r,
     needsContext: r && lt.expr.match.needsContext.test(r),
     namespace: g.join(".")
    }, c), (f = a[h]) || (f = a[h] = [], f.delegateCount = 0, u.setup && u.setup.call(e, o, g, d) !== !1 || (e.addEventListener ? e.addEventListener(h, d, !1) : e.attachEvent && e.attachEvent("on" + h, d))), 
    u.add && (u.add.call(e, p), p.handler.guid || (p.handler.guid = i.guid)), r ? f.splice(f.delegateCount++, 0, p) : f.push(p), 
    lt.event.global[h] = !0;
    e = null;
   }
  },
  remove: function(e, t, n, i, o) {
   var r, s, a, l, c, u, d, p, f, h, g, m = lt.hasData(e) && lt._data(e);
   if (m && (u = m.events)) {
    for (t = (t || "").match(ut) || [ "" ], c = t.length; c--; ) if (a = Ht.exec(t[c]) || [], 
    f = g = a[1], h = (a[2] || "").split(".").sort(), f) {
     for (d = lt.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, 
     p = u[f] || [], a = a[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
     l = r = p.length; r--; ) s = p[r], !o && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (p.splice(r, 1), 
     s.selector && p.delegateCount--, d.remove && d.remove.call(e, s));
     l && !p.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || lt.removeEvent(e, f, m.handle), 
     delete u[f]);
    } else for (f in u) lt.event.remove(e, f + t[c], n, i, !0);
    lt.isEmptyObject(u) && (delete m.handle, lt._removeData(e, "events"));
   }
  },
  trigger: function(n, i, o, r) {
   var s, a, l, c, u, d, p, f = [ o || V ], h = st.call(n, "type") ? n.type : n, g = st.call(n, "namespace") ? n.namespace.split(".") : [];
   if (l = d = o = o || V, 3 !== o.nodeType && 8 !== o.nodeType && !jt.test(h + lt.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), 
   h = g.shift(), g.sort()), a = 0 > h.indexOf(":") && "on" + h, n = n[lt.expando] ? n : new lt.Event(h, "object" == typeof n && n), 
   n.isTrigger = !0, n.namespace = g.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
   n.result = t, n.target || (n.target = o), i = null == i ? [ n ] : lt.makeArray(i, [ n ]), 
   u = lt.event.special[h] || {}, r || !u.trigger || u.trigger.apply(o, i) !== !1)) {
    if (!r && !u.noBubble && !lt.isWindow(o)) {
     for (c = u.delegateType || h, jt.test(c + h) || (l = l.parentNode); l; l = l.parentNode) f.push(l), 
     d = l;
     d === (o.ownerDocument || V) && f.push(d.defaultView || d.parentWindow || e);
    }
    for (p = 0; (l = f[p++]) && !n.isPropagationStopped(); ) n.type = p > 1 ? c : u.bindType || h, 
    s = (lt._data(l, "events") || {})[n.type] && lt._data(l, "handle"), s && s.apply(l, i), 
    s = a && l[a], s && lt.acceptData(l) && s.apply && s.apply(l, i) === !1 && n.preventDefault();
    if (n.type = h, !(r || n.isDefaultPrevented() || u._default && u._default.apply(o.ownerDocument, i) !== !1 || "click" === h && lt.nodeName(o, "a") || !lt.acceptData(o) || !a || !o[h] || lt.isWindow(o))) {
     d = o[a], d && (o[a] = null), lt.event.triggered = h;
     try {
      o[h]();
     } catch (m) {}
     lt.event.triggered = t, d && (o[a] = d);
    }
    return n.result;
   }
  },
  dispatch: function(e) {
   e = lt.event.fix(e);
   var n, i, o, r, s, a = [], l = it.call(arguments), c = (lt._data(this, "events") || {})[e.type] || [], u = lt.event.special[e.type] || {};
   if (l[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
    for (a = lt.event.handlers.call(this, e, c), n = 0; (r = a[n++]) && !e.isPropagationStopped(); ) for (e.currentTarget = r.elem, 
    s = 0; (o = r.handlers[s++]) && !e.isImmediatePropagationStopped(); ) (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, 
    e.data = o.data, i = ((lt.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l), 
    i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
    return u.postDispatch && u.postDispatch.call(this, e), e.result;
   }
  },
  handlers: function(e, n) {
   var i, o, r, s, a = [], l = n.delegateCount, c = e.target;
   if (l && c.nodeType && (!e.button || "click" !== e.type)) for (;c != this; c = c.parentNode || this) if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
    for (r = [], s = 0; l > s; s++) o = n[s], i = o.selector + " ", r[i] === t && (r[i] = o.needsContext ? lt(i, this).index(c) >= 0 : lt.find(i, this, null, [ c ]).length), 
    r[i] && r.push(o);
    r.length && a.push({
     elem: c,
     handlers: r
    });
   }
   return n.length > l && a.push({
    elem: this,
    handlers: n.slice(l)
   }), a;
  },
  fix: function(e) {
   if (e[lt.expando]) return e;
   var t, n, i, o = e.type, r = e, s = this.fixHooks[o];
   for (s || (this.fixHooks[o] = s = Dt.test(o) ? this.mouseHooks : Mt.test(o) ? this.keyHooks : {}), 
   i = s.props ? this.props.concat(s.props) : this.props, e = new lt.Event(r), t = i.length; t--; ) n = i[t], 
   e[n] = r[n];
   return e.target || (e.target = r.srcElement || V), 3 === e.target.nodeType && (e.target = e.target.parentNode), 
   e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e;
  },
  props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
  fixHooks: {},
  keyHooks: {
   props: "char charCode key keyCode".split(" "),
   filter: function(e, t) {
    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), 
    e;
   }
  },
  mouseHooks: {
   props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
   filter: function(e, n) {
    var i, o, r, s = n.button, a = n.fromElement;
    return null == e.pageX && null != n.clientX && (o = e.target.ownerDocument || V, 
    r = o.documentElement, i = o.body, e.pageX = n.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), 
    e.pageY = n.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), 
    !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), 
    e;
   }
  },
  special: {
   load: {
    noBubble: !0
   },
   click: {
    trigger: function() {
     return lt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), 
     !1) : t;
    }
   },
   focus: {
    trigger: function() {
     if (this !== V.activeElement && this.focus) try {
      return this.focus(), !1;
     } catch (e) {}
    },
    delegateType: "focusin"
   },
   blur: {
    trigger: function() {
     return this === V.activeElement && this.blur ? (this.blur(), !1) : t;
    },
    delegateType: "focusout"
   },
   beforeunload: {
    postDispatch: function(e) {
     e.result !== t && (e.originalEvent.returnValue = e.result);
    }
   }
  },
  simulate: function(e, t, n, i) {
   var o = lt.extend(new lt.Event(), n, {
    type: e,
    isSimulated: !0,
    originalEvent: {}
   });
   i ? lt.event.trigger(o, null, t) : lt.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault();
  }
 }, lt.removeEvent = V.removeEventListener ? function(e, t, n) {
  e.removeEventListener && e.removeEventListener(t, n, !1);
 } : function(e, t, n) {
  var i = "on" + t;
  e.detachEvent && (typeof e[i] === X && (e[i] = null), e.detachEvent(i, n));
 }, lt.Event = function(e, n) {
  return this instanceof lt.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, 
  this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : c) : this.type = e, 
  n && lt.extend(this, n), this.timeStamp = e && e.timeStamp || lt.now(), this[lt.expando] = !0, 
  t) : new lt.Event(e, n);
 }, lt.Event.prototype = {
  isDefaultPrevented: c,
  isPropagationStopped: c,
  isImmediatePropagationStopped: c,
  preventDefault: function() {
   var e = this.originalEvent;
   this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
  },
  stopPropagation: function() {
   var e = this.originalEvent;
   this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
  },
  stopImmediatePropagation: function() {
   this.isImmediatePropagationStopped = l, this.stopPropagation();
  }
 }, lt.each({
  mouseenter: "mouseover",
  mouseleave: "mouseout"
 }, function(e, t) {
  lt.event.special[e] = {
   delegateType: t,
   bindType: t,
   handle: function(e) {
    var n, i = this, o = e.relatedTarget, r = e.handleObj;
    return (!o || o !== i && !lt.contains(i, o)) && (e.type = r.origType, n = r.handler.apply(this, arguments), 
    e.type = t), n;
   }
  };
 }), lt.support.submitBubbles || (lt.event.special.submit = {
  setup: function() {
   return lt.nodeName(this, "form") ? !1 : (lt.event.add(this, "click._submit keypress._submit", function(e) {
    var n = e.target, i = lt.nodeName(n, "input") || lt.nodeName(n, "button") ? n.form : t;
    i && !lt._data(i, "submitBubbles") && (lt.event.add(i, "submit._submit", function(e) {
     e._submit_bubble = !0;
    }), lt._data(i, "submitBubbles", !0));
   }), t);
  },
  postDispatch: function(e) {
   e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && lt.event.simulate("submit", this.parentNode, e, !0));
  },
  teardown: function() {
   return lt.nodeName(this, "form") ? !1 : (lt.event.remove(this, "._submit"), t);
  }
 }), lt.support.changeBubbles || (lt.event.special.change = {
  setup: function() {
   return Ot.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (lt.event.add(this, "propertychange._change", function(e) {
    "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
   }), lt.event.add(this, "click._change", function(e) {
    this._just_changed && !e.isTrigger && (this._just_changed = !1), lt.event.simulate("change", this, e, !0);
   })), !1) : (lt.event.add(this, "beforeactivate._change", function(e) {
    var t = e.target;
    Ot.test(t.nodeName) && !lt._data(t, "changeBubbles") && (lt.event.add(t, "change._change", function(e) {
     !this.parentNode || e.isSimulated || e.isTrigger || lt.event.simulate("change", this.parentNode, e, !0);
    }), lt._data(t, "changeBubbles", !0));
   }), t);
  },
  handle: function(e) {
   var n = e.target;
   return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t;
  },
  teardown: function() {
   return lt.event.remove(this, "._change"), !Ot.test(this.nodeName);
  }
 }), lt.support.focusinBubbles || lt.each({
  focus: "focusin",
  blur: "focusout"
 }, function(e, t) {
  var n = 0, i = function(e) {
   lt.event.simulate(t, e.target, lt.event.fix(e), !0);
  };
  lt.event.special[t] = {
   setup: function() {
    0 === n++ && V.addEventListener(e, i, !0);
   },
   teardown: function() {
    0 === --n && V.removeEventListener(e, i, !0);
   }
  };
 }), lt.fn.extend({
  on: function(e, n, i, o, r) {
   var s, a;
   if ("object" == typeof e) {
    "string" != typeof n && (i = i || n, n = t);
    for (s in e) this.on(s, n, i, e[s], r);
    return this;
   }
   if (null == i && null == o ? (o = n, i = n = t) : null == o && ("string" == typeof n ? (o = i, 
   i = t) : (o = i, i = n, n = t)), o === !1) o = c; else if (!o) return this;
   return 1 === r && (a = o, o = function(e) {
    return lt().off(e), a.apply(this, arguments);
   }, o.guid = a.guid || (a.guid = lt.guid++)), this.each(function() {
    lt.event.add(this, e, o, i, n);
   });
  },
  one: function(e, t, n, i) {
   return this.on(e, t, n, i, 1);
  },
  off: function(e, n, i) {
   var o, r;
   if (e && e.preventDefault && e.handleObj) return o = e.handleObj, lt(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), 
   this;
   if ("object" == typeof e) {
    for (r in e) this.off(r, n, e[r]);
    return this;
   }
   return (n === !1 || "function" == typeof n) && (i = n, n = t), i === !1 && (i = c), 
   this.each(function() {
    lt.event.remove(this, e, i, n);
   });
  },
  bind: function(e, t, n) {
   return this.on(e, null, t, n);
  },
  unbind: function(e, t) {
   return this.off(e, null, t);
  },
  delegate: function(e, t, n, i) {
   return this.on(t, e, n, i);
  },
  undelegate: function(e, t, n) {
   return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
  },
  trigger: function(e, t) {
   return this.each(function() {
    lt.event.trigger(e, t, this);
   });
  },
  triggerHandler: function(e, n) {
   var i = this[0];
   return i ? lt.event.trigger(e, n, i, !0) : t;
  }
 }), function(e, t) {
  function n(e) {
   return ht.test(e + "");
  }
  function i() {
   var e, t = [];
   return e = function(n, i) {
    return t.push(n += " ") > S.cacheLength && delete e[t.shift()], e[n] = i;
   };
  }
  function o(e) {
   return e[j] = !0, e;
  }
  function r(e) {
   var t = z.createElement("div");
   try {
    return e(t);
   } catch (n) {
    return !1;
   } finally {
    t = null;
   }
  }
  function s(e, t, n, i) {
   var o, r, s, a, l, c, u, f, h, g;
   if ((t ? t.ownerDocument || t : H) !== z && $(t), t = t || z, n = n || [], !e || "string" != typeof e) return n;
   if (1 !== (a = t.nodeType) && 9 !== a) return [];
   if (!R && !i) {
    if (o = gt.exec(e)) if (s = o[1]) {
     if (9 === a) {
      if (r = t.getElementById(s), !r || !r.parentNode) return n;
      if (r.id === s) return n.push(r), n;
     } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(s)) && M(t, r) && r.id === s) return n.push(r), 
     n;
    } else {
     if (o[2]) return J.apply(n, Q.call(t.getElementsByTagName(e), 0)), n;
     if ((s = o[3]) && F.getByClassName && t.getElementsByClassName) return J.apply(n, Q.call(t.getElementsByClassName(s), 0)), 
     n;
    }
    if (F.qsa && !L.test(e)) {
     if (u = !0, f = j, h = t, g = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
      for (c = d(e), (u = t.getAttribute("id")) ? f = u.replace(yt, "\\$&") : t.setAttribute("id", f), 
      f = "[id='" + f + "'] ", l = c.length; l--; ) c[l] = f + p(c[l]);
      h = ft.test(e) && t.parentNode || t, g = c.join(",");
     }
     if (g) try {
      return J.apply(n, Q.call(h.querySelectorAll(g), 0)), n;
     } catch (m) {} finally {
      u || t.removeAttribute("id");
     }
    }
   }
   return w(e.replace(st, "$1"), t, n, i);
  }
  function a(e, t) {
   var n = t && e, i = n && (~t.sourceIndex || V) - (~e.sourceIndex || V);
   if (i) return i;
   if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
   return e ? 1 : -1;
  }
  function l(e) {
   return function(t) {
    var n = t.nodeName.toLowerCase();
    return "input" === n && t.type === e;
   };
  }
  function c(e) {
   return function(t) {
    var n = t.nodeName.toLowerCase();
    return ("input" === n || "button" === n) && t.type === e;
   };
  }
  function u(e) {
   return o(function(t) {
    return t = +t, o(function(n, i) {
     for (var o, r = e([], n.length, t), s = r.length; s--; ) n[o = r[s]] && (n[o] = !(i[o] = n[o]));
    });
   });
  }
  function d(e, t) {
   var n, i, o, r, a, l, c, u = G[e + " "];
   if (u) return t ? 0 : u.slice(0);
   for (a = e, l = [], c = S.preFilter; a; ) {
    (!n || (i = at.exec(a))) && (i && (a = a.slice(i[0].length) || a), l.push(o = [])), 
    n = !1, (i = ct.exec(a)) && (n = i.shift(), o.push({
     value: n,
     type: i[0].replace(st, " ")
    }), a = a.slice(n.length));
    for (r in S.filter) !(i = pt[r].exec(a)) || c[r] && !(i = c[r](i)) || (n = i.shift(), 
    o.push({
     value: n,
     type: r,
     matches: i
    }), a = a.slice(n.length));
    if (!n) break;
   }
   return t ? a.length : a ? s.error(e) : G(e, l).slice(0);
  }
  function p(e) {
   for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
   return i;
  }
  function f(e, t, n) {
   var i = t.dir, o = n && "parentNode" === i, r = W++;
   return t.first ? function(t, n, r) {
    for (;t = t[i]; ) if (1 === t.nodeType || o) return e(t, n, r);
   } : function(t, n, s) {
    var a, l, c, u = B + " " + r;
    if (s) {
     for (;t = t[i]; ) if ((1 === t.nodeType || o) && e(t, n, s)) return !0;
    } else for (;t = t[i]; ) if (1 === t.nodeType || o) if (c = t[j] || (t[j] = {}), 
    (l = c[i]) && l[0] === u) {
     if ((a = l[1]) === !0 || a === k) return a === !0;
    } else if (l = c[i] = [ u ], l[1] = e(t, n, s) || k, l[1] === !0) return !0;
   };
  }
  function h(e) {
   return e.length > 1 ? function(t, n, i) {
    for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1;
    return !0;
   } : e[0];
  }
  function g(e, t, n, i, o) {
   for (var r, s = [], a = 0, l = e.length, c = null != t; l > a; a++) (r = e[a]) && (!n || n(r, i, o)) && (s.push(r), 
   c && t.push(a));
   return s;
  }
  function m(e, t, n, i, r, s) {
   return i && !i[j] && (i = m(i)), r && !r[j] && (r = m(r, s)), o(function(o, s, a, l) {
    var c, u, d, p = [], f = [], h = s.length, m = o || b(t || "*", a.nodeType ? [ a ] : a, []), v = !e || !o && t ? m : g(m, p, e, a, l), y = n ? r || (o ? e : h || i) ? [] : s : v;
    if (n && n(v, y, a, l), i) for (c = g(y, f), i(c, [], a, l), u = c.length; u--; ) (d = c[u]) && (y[f[u]] = !(v[f[u]] = d));
    if (o) {
     if (r || e) {
      if (r) {
       for (c = [], u = y.length; u--; ) (d = y[u]) && c.push(v[u] = d);
       r(null, y = [], c, l);
      }
      for (u = y.length; u--; ) (d = y[u]) && (c = r ? Z.call(o, d) : p[u]) > -1 && (o[c] = !(s[c] = d));
     }
    } else y = g(y === s ? y.splice(h, y.length) : y), r ? r(null, s, y, l) : J.apply(s, y);
   });
  }
  function v(e) {
   for (var t, n, i, o = e.length, r = S.relative[e[0].type], s = r || S.relative[" "], a = r ? 1 : 0, l = f(function(e) {
    return e === t;
   }, s, !0), c = f(function(e) {
    return Z.call(t, e) > -1;
   }, s, !0), u = [ function(e, n, i) {
    return !r && (i || n !== I) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
   } ]; o > a; a++) if (n = S.relative[e[a].type]) u = [ f(h(u), n) ]; else {
    if (n = S.filter[e[a].type].apply(null, e[a].matches), n[j]) {
     for (i = ++a; o > i && !S.relative[e[i].type]; i++) ;
     return m(a > 1 && h(u), a > 1 && p(e.slice(0, a - 1)).replace(st, "$1"), n, i > a && v(e.slice(a, i)), o > i && v(e = e.slice(i)), o > i && p(e));
    }
    u.push(n);
   }
   return h(u);
  }
  function y(e, t) {
   var n = 0, i = t.length > 0, r = e.length > 0, a = function(o, a, l, c, u) {
    var d, p, f, h = [], m = 0, v = "0", y = o && [], b = null != u, w = I, x = o || r && S.find.TAG("*", u && a.parentNode || a), C = B += null == w ? 1 : Math.random() || .1;
    for (b && (I = a !== z && a, k = n); null != (d = x[v]); v++) {
     if (r && d) {
      for (p = 0; f = e[p++]; ) if (f(d, a, l)) {
       c.push(d);
       break;
      }
      b && (B = C, k = ++n);
     }
     i && ((d = !f && d) && m--, o && y.push(d));
    }
    if (m += v, i && v !== m) {
     for (p = 0; f = t[p++]; ) f(y, h, a, l);
     if (o) {
      if (m > 0) for (;v--; ) y[v] || h[v] || (h[v] = K.call(c));
      h = g(h);
     }
     J.apply(c, h), b && !o && h.length > 0 && m + t.length > 1 && s.uniqueSort(c);
    }
    return b && (B = C, I = w), y;
   };
   return i ? o(a) : a;
  }
  function b(e, t, n) {
   for (var i = 0, o = t.length; o > i; i++) s(e, t[i], n);
   return n;
  }
  function w(e, t, n, i) {
   var o, r, s, a, l, c = d(e);
   if (!i && 1 === c.length) {
    if (r = c[0] = c[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && 9 === t.nodeType && !R && S.relative[r[1].type]) {
     if (t = S.find.ID(s.matches[0].replace(wt, xt), t)[0], !t) return n;
     e = e.slice(r.shift().value.length);
    }
    for (o = pt.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !S.relative[a = s.type]); ) if ((l = S.find[a]) && (i = l(s.matches[0].replace(wt, xt), ft.test(r[0].type) && t.parentNode || t))) {
     if (r.splice(o, 1), e = i.length && p(r), !e) return J.apply(n, Q.call(i, 0)), n;
     break;
    }
   }
   return E(e, c)(i, t, R, n, ft.test(e)), n;
  }
  function x() {}
  var C, k, S, T, _, E, P, I, $, z, N, R, L, A, O, M, D, j = "sizzle" + -new Date(), H = e.document, F = {}, B = 0, W = 0, q = i(), G = i(), U = i(), X = typeof t, V = 1 << 31, Y = [], K = Y.pop, J = Y.push, Q = Y.slice, Z = Y.indexOf || function(e) {
   for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
   return -1;
  }, et = "[\\x20\\t\\r\\n\\f]", tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", nt = tt.replace("w", "w#"), it = "([*^$|!~]?=)", ot = "\\[" + et + "*(" + tt + ")" + et + "*(?:" + it + et + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + nt + ")|)|)" + et + "*\\]", rt = ":(" + tt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ot.replace(3, 8) + ")*)|.*)\\)|)", st = RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"), at = RegExp("^" + et + "*," + et + "*"), ct = RegExp("^" + et + "*([\\x20\\t\\r\\n\\f>+~])" + et + "*"), ut = RegExp(rt), dt = RegExp("^" + nt + "$"), pt = {
   ID: RegExp("^#(" + tt + ")"),
   CLASS: RegExp("^\\.(" + tt + ")"),
   NAME: RegExp("^\\[name=['\"]?(" + tt + ")['\"]?\\]"),
   TAG: RegExp("^(" + tt.replace("w", "w*") + ")"),
   ATTR: RegExp("^" + ot),
   PSEUDO: RegExp("^" + rt),
   CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"),
   needsContext: RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")
  }, ft = /[\x20\t\r\n\f]*[+~]/, ht = /^[^{]+\{\s*\[native code/, gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, mt = /^(?:input|select|textarea|button)$/i, vt = /^h\d$/i, yt = /'|\\/g, bt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, wt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, xt = function(e, t) {
   var n = "0x" + t - 65536;
   return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n);
  };
  try {
   Q.call(H.documentElement.childNodes, 0)[0].nodeType;
  } catch (Ct) {
   Q = function(e) {
    for (var t, n = []; t = this[e++]; ) n.push(t);
    return n;
   };
  }
  _ = s.isXML = function(e) {
   var t = e && (e.ownerDocument || e).documentElement;
   return t ? "HTML" !== t.nodeName : !1;
  }, $ = s.setDocument = function(e) {
   var i = e ? e.ownerDocument || e : H;
   return i !== z && 9 === i.nodeType && i.documentElement ? (z = i, N = i.documentElement, 
   R = _(i), F.tagNameNoComments = r(function(e) {
    return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length;
   }), F.attributes = r(function(e) {
    e.innerHTML = "<select></select>";
    var t = typeof e.lastChild.getAttribute("multiple");
    return "boolean" !== t && "string" !== t;
   }), F.getByClassName = r(function(e) {
    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 
    2 === e.getElementsByClassName("e").length) : !1;
   }), F.getByName = r(function(e) {
    e.id = j + 0, e.innerHTML = "<a name='" + j + "'></a><div name='" + j + "'></div>", 
    N.insertBefore(e, N.firstChild);
    var t = i.getElementsByName && i.getElementsByName(j).length === 2 + i.getElementsByName(j + 0).length;
    return F.getIdNotName = !i.getElementById(j), N.removeChild(e), t;
   }), S.attrHandle = r(function(e) {
    return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== X && "#" === e.firstChild.getAttribute("href");
   }) ? {} : {
    href: function(e) {
     return e.getAttribute("href", 2);
    },
    type: function(e) {
     return e.getAttribute("type");
    }
   }, F.getIdNotName ? (S.find.ID = function(e, t) {
    if (typeof t.getElementById !== X && !R) {
     var n = t.getElementById(e);
     return n && n.parentNode ? [ n ] : [];
    }
   }, S.filter.ID = function(e) {
    var t = e.replace(wt, xt);
    return function(e) {
     return e.getAttribute("id") === t;
    };
   }) : (S.find.ID = function(e, n) {
    if (typeof n.getElementById !== X && !R) {
     var i = n.getElementById(e);
     return i ? i.id === e || typeof i.getAttributeNode !== X && i.getAttributeNode("id").value === e ? [ i ] : t : [];
    }
   }, S.filter.ID = function(e) {
    var t = e.replace(wt, xt);
    return function(e) {
     var n = typeof e.getAttributeNode !== X && e.getAttributeNode("id");
     return n && n.value === t;
    };
   }), S.find.TAG = F.tagNameNoComments ? function(e, n) {
    return typeof n.getElementsByTagName !== X ? n.getElementsByTagName(e) : t;
   } : function(e, t) {
    var n, i = [], o = 0, r = t.getElementsByTagName(e);
    if ("*" === e) {
     for (;n = r[o++]; ) 1 === n.nodeType && i.push(n);
     return i;
    }
    return r;
   }, S.find.NAME = F.getByName && function(e, n) {
    return typeof n.getElementsByName !== X ? n.getElementsByName(name) : t;
   }, S.find.CLASS = F.getByClassName && function(e, n) {
    return typeof n.getElementsByClassName === X || R ? t : n.getElementsByClassName(e);
   }, A = [], L = [ ":focus" ], (F.qsa = n(i.querySelectorAll)) && (r(function(e) {
    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || L.push("\\[" + et + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), 
    e.querySelectorAll(":checked").length || L.push(":checked");
   }), r(function(e) {
    e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && L.push("[*^$]=" + et + "*(?:\"\"|'')"), 
    e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
    L.push(",.*:");
   })), (F.matchesSelector = n(O = N.matchesSelector || N.mozMatchesSelector || N.webkitMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function(e) {
    F.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), A.push("!=", rt);
   }), L = RegExp(L.join("|")), A = RegExp(A.join("|")), M = n(N.contains) || N.compareDocumentPosition ? function(e, t) {
    var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
   } : function(e, t) {
    if (t) for (;t = t.parentNode; ) if (t === e) return !0;
    return !1;
   }, D = N.compareDocumentPosition ? function(e, t) {
    var n;
    return e === t ? (P = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === i || M(H, e) ? -1 : t === i || M(H, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
   } : function(e, t) {
    var n, o = 0, r = e.parentNode, s = t.parentNode, l = [ e ], c = [ t ];
    if (e === t) return P = !0, 0;
    if (!r || !s) return e === i ? -1 : t === i ? 1 : r ? -1 : s ? 1 : 0;
    if (r === s) return a(e, t);
    for (n = e; n = n.parentNode; ) l.unshift(n);
    for (n = t; n = n.parentNode; ) c.unshift(n);
    for (;l[o] === c[o]; ) o++;
    return o ? a(l[o], c[o]) : l[o] === H ? -1 : c[o] === H ? 1 : 0;
   }, P = !1, [ 0, 0 ].sort(D), F.detectDuplicates = P, z) : z;
  }, s.matches = function(e, t) {
   return s(e, null, null, t);
  }, s.matchesSelector = function(e, t) {
   if ((e.ownerDocument || e) !== z && $(e), t = t.replace(bt, "='$1']"), !(!F.matchesSelector || R || A && A.test(t) || L.test(t))) try {
    var n = O.call(e, t);
    if (n || F.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
   } catch (i) {}
   return s(t, z, null, [ e ]).length > 0;
  }, s.contains = function(e, t) {
   return (e.ownerDocument || e) !== z && $(e), M(e, t);
  }, s.attr = function(e, t) {
   var n;
   return (e.ownerDocument || e) !== z && $(e), R || (t = t.toLowerCase()), (n = S.attrHandle[t]) ? n(e) : R || F.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null;
  }, s.error = function(e) {
   throw Error("Syntax error, unrecognized expression: " + e);
  }, s.uniqueSort = function(e) {
   var t, n = [], i = 1, o = 0;
   if (P = !F.detectDuplicates, e.sort(D), P) {
    for (;t = e[i]; i++) t === e[i - 1] && (o = n.push(i));
    for (;o--; ) e.splice(n[o], 1);
   }
   return e;
  }, T = s.getText = function(e) {
   var t, n = "", i = 0, o = e.nodeType;
   if (o) {
    if (1 === o || 9 === o || 11 === o) {
     if ("string" == typeof e.textContent) return e.textContent;
     for (e = e.firstChild; e; e = e.nextSibling) n += T(e);
    } else if (3 === o || 4 === o) return e.nodeValue;
   } else for (;t = e[i]; i++) n += T(t);
   return n;
  }, S = s.selectors = {
   cacheLength: 50,
   createPseudo: o,
   match: pt,
   find: {},
   relative: {
    ">": {
     dir: "parentNode",
     first: !0
    },
    " ": {
     dir: "parentNode"
    },
    "+": {
     dir: "previousSibling",
     first: !0
    },
    "~": {
     dir: "previousSibling"
    }
   },
   preFilter: {
    ATTR: function(e) {
     return e[1] = e[1].replace(wt, xt), e[3] = (e[4] || e[5] || "").replace(wt, xt), 
     "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
    },
    CHILD: function(e) {
     return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || s.error(e[0]), 
     e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && s.error(e[0]), 
     e;
    },
    PSEUDO: function(e) {
     var t, n = !e[5] && e[2];
     return pt.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && ut.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
     e[2] = n.slice(0, t)), e.slice(0, 3));
    }
   },
   filter: {
    TAG: function(e) {
     return "*" === e ? function() {
      return !0;
     } : (e = e.replace(wt, xt).toLowerCase(), function(t) {
      return t.nodeName && t.nodeName.toLowerCase() === e;
     });
    },
    CLASS: function(e) {
     var t = q[e + " "];
     return t || (t = RegExp("(^|" + et + ")" + e + "(" + et + "|$)")) && q(e, function(e) {
      return t.test(e.className || typeof e.getAttribute !== X && e.getAttribute("class") || "");
     });
    },
    ATTR: function(e, t, n) {
     return function(i) {
      var o = s.attr(i, e);
      return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o + " ").indexOf(n) > -1 : "|=" === t ? o === n || o.slice(0, n.length + 1) === n + "-" : !1) : !0;
     };
    },
    CHILD: function(e, t, n, i, o) {
     var r = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
     return 1 === i && 0 === o ? function(e) {
      return !!e.parentNode;
     } : function(t, n, l) {
      var c, u, d, p, f, h, g = r !== s ? "nextSibling" : "previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a;
      if (m) {
       if (r) {
        for (;g; ) {
         for (d = t; d = d[g]; ) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
         h = g = "only" === e && !h && "nextSibling";
        }
        return !0;
       }
       if (h = [ s ? m.firstChild : m.lastChild ], s && y) {
        for (u = m[j] || (m[j] = {}), c = u[e] || [], f = c[0] === B && c[1], p = c[0] === B && c[2], 
        d = f && m.childNodes[f]; d = ++f && d && d[g] || (p = f = 0) || h.pop(); ) if (1 === d.nodeType && ++p && d === t) {
         u[e] = [ B, f, p ];
         break;
        }
       } else if (y && (c = (t[j] || (t[j] = {}))[e]) && c[0] === B) p = c[1]; else for (;(d = ++f && d && d[g] || (p = f = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (y && ((d[j] || (d[j] = {}))[e] = [ B, p ]), 
       d !== t)); ) ;
       return p -= o, p === i || 0 === p % i && p / i >= 0;
      }
     };
    },
    PSEUDO: function(e, t) {
     var n, i = S.pseudos[e] || S.setFilters[e.toLowerCase()] || s.error("unsupported pseudo: " + e);
     return i[j] ? i(t) : i.length > 1 ? (n = [ e, e, "", t ], S.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function(e, n) {
      for (var o, r = i(e, t), s = r.length; s--; ) o = Z.call(e, r[s]), e[o] = !(n[o] = r[s]);
     }) : function(e) {
      return i(e, 0, n);
     }) : i;
    }
   },
   pseudos: {
    not: o(function(e) {
     var t = [], n = [], i = E(e.replace(st, "$1"));
     return i[j] ? o(function(e, t, n, o) {
      for (var r, s = i(e, null, o, []), a = e.length; a--; ) (r = s[a]) && (e[a] = !(t[a] = r));
     }) : function(e, o, r) {
      return t[0] = e, i(t, null, r, n), !n.pop();
     };
    }),
    has: o(function(e) {
     return function(t) {
      return s(e, t).length > 0;
     };
    }),
    contains: o(function(e) {
     return function(t) {
      return (t.textContent || t.innerText || T(t)).indexOf(e) > -1;
     };
    }),
    lang: o(function(e) {
     return dt.test(e || "") || s.error("unsupported lang: " + e), e = e.replace(wt, xt).toLowerCase(), 
     function(t) {
      var n;
      do if (n = R ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), 
      n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
      return !1;
     };
    }),
    target: function(t) {
     var n = e.location && e.location.hash;
     return n && n.slice(1) === t.id;
    },
    root: function(e) {
     return e === N;
    },
    focus: function(e) {
     return e === z.activeElement && (!z.hasFocus || z.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
    },
    enabled: function(e) {
     return e.disabled === !1;
    },
    disabled: function(e) {
     return e.disabled === !0;
    },
    checked: function(e) {
     var t = e.nodeName.toLowerCase();
     return "input" === t && !!e.checked || "option" === t && !!e.selected;
    },
    selected: function(e) {
     return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
    },
    empty: function(e) {
     for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
     return !0;
    },
    parent: function(e) {
     return !S.pseudos.empty(e);
    },
    header: function(e) {
     return vt.test(e.nodeName);
    },
    input: function(e) {
     return mt.test(e.nodeName);
    },
    button: function(e) {
     var t = e.nodeName.toLowerCase();
     return "input" === t && "button" === e.type || "button" === t;
    },
    text: function(e) {
     var t;
     return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
    },
    first: u(function() {
     return [ 0 ];
    }),
    last: u(function(e, t) {
     return [ t - 1 ];
    }),
    eq: u(function(e, t, n) {
     return [ 0 > n ? n + t : n ];
    }),
    even: u(function(e, t) {
     for (var n = 0; t > n; n += 2) e.push(n);
     return e;
    }),
    odd: u(function(e, t) {
     for (var n = 1; t > n; n += 2) e.push(n);
     return e;
    }),
    lt: u(function(e, t, n) {
     for (var i = 0 > n ? n + t : n; --i >= 0; ) e.push(i);
     return e;
    }),
    gt: u(function(e, t, n) {
     for (var i = 0 > n ? n + t : n; t > ++i; ) e.push(i);
     return e;
    })
   }
  };
  for (C in {
   radio: !0,
   checkbox: !0,
   file: !0,
   password: !0,
   image: !0
  }) S.pseudos[C] = l(C);
  for (C in {
   submit: !0,
   reset: !0
  }) S.pseudos[C] = c(C);
  E = s.compile = function(e, t) {
   var n, i = [], o = [], r = U[e + " "];
   if (!r) {
    for (t || (t = d(e)), n = t.length; n--; ) r = v(t[n]), r[j] ? i.push(r) : o.push(r);
    r = U(e, y(o, i));
   }
   return r;
  }, S.pseudos.nth = S.pseudos.eq, S.filters = x.prototype = S.pseudos, S.setFilters = new x(), 
  $(), s.attr = lt.attr, lt.find = s, lt.expr = s.selectors, lt.expr[":"] = lt.expr.pseudos, 
  lt.unique = s.uniqueSort, lt.text = s.getText, lt.isXMLDoc = s.isXML, lt.contains = s.contains;
 }(e);
 var Ft = /Until$/, Bt = /^(?:parents|prev(?:Until|All))/, Wt = /^.[^:#\[\.,]*$/, qt = lt.expr.match.needsContext, Gt = {
  children: !0,
  contents: !0,
  next: !0,
  prev: !0
 };
 lt.fn.extend({
  find: function(e) {
   var t, n, i, o = this.length;
   if ("string" != typeof e) return i = this, this.pushStack(lt(e).filter(function() {
    for (t = 0; o > t; t++) if (lt.contains(i[t], this)) return !0;
   }));
   for (n = [], t = 0; o > t; t++) lt.find(e, this[t], n);
   return n = this.pushStack(o > 1 ? lt.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, 
   n;
  },
  has: function(e) {
   var t, n = lt(e, this), i = n.length;
   return this.filter(function() {
    for (t = 0; i > t; t++) if (lt.contains(this, n[t])) return !0;
   });
  },
  not: function(e) {
   return this.pushStack(d(this, e, !1));
  },
  filter: function(e) {
   return this.pushStack(d(this, e, !0));
  },
  is: function(e) {
   return !!e && ("string" == typeof e ? qt.test(e) ? lt(e, this.context).index(this[0]) >= 0 : lt.filter(e, this).length > 0 : this.filter(e).length > 0);
  },
  closest: function(e, t) {
   for (var n, i = 0, o = this.length, r = [], s = qt.test(e) || "string" != typeof e ? lt(e, t || this.context) : 0; o > i; i++) for (n = this[i]; n && n.ownerDocument && n !== t && 11 !== n.nodeType; ) {
    if (s ? s.index(n) > -1 : lt.find.matchesSelector(n, e)) {
     r.push(n);
     break;
    }
    n = n.parentNode;
   }
   return this.pushStack(r.length > 1 ? lt.unique(r) : r);
  },
  index: function(e) {
   return e ? "string" == typeof e ? lt.inArray(this[0], lt(e)) : lt.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  },
  add: function(e, t) {
   var n = "string" == typeof e ? lt(e, t) : lt.makeArray(e && e.nodeType ? [ e ] : e), i = lt.merge(this.get(), n);
   return this.pushStack(lt.unique(i));
  },
  addBack: function(e) {
   return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
  }
 }), lt.fn.andSelf = lt.fn.addBack, lt.each({
  parent: function(e) {
   var t = e.parentNode;
   return t && 11 !== t.nodeType ? t : null;
  },
  parents: function(e) {
   return lt.dir(e, "parentNode");
  },
  parentsUntil: function(e, t, n) {
   return lt.dir(e, "parentNode", n);
  },
  next: function(e) {
   return u(e, "nextSibling");
  },
  prev: function(e) {
   return u(e, "previousSibling");
  },
  nextAll: function(e) {
   return lt.dir(e, "nextSibling");
  },
  prevAll: function(e) {
   return lt.dir(e, "previousSibling");
  },
  nextUntil: function(e, t, n) {
   return lt.dir(e, "nextSibling", n);
  },
  prevUntil: function(e, t, n) {
   return lt.dir(e, "previousSibling", n);
  },
  siblings: function(e) {
   return lt.sibling((e.parentNode || {}).firstChild, e);
  },
  children: function(e) {
   return lt.sibling(e.firstChild);
  },
  contents: function(e) {
   return lt.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : lt.merge([], e.childNodes);
  }
 }, function(e, t) {
  lt.fn[e] = function(n, i) {
   var o = lt.map(this, t, n);
   return Ft.test(e) || (i = n), i && "string" == typeof i && (o = lt.filter(i, o)), 
   o = this.length > 1 && !Gt[e] ? lt.unique(o) : o, this.length > 1 && Bt.test(e) && (o = o.reverse()), 
   this.pushStack(o);
  };
 }), lt.extend({
  filter: function(e, t, n) {
   return n && (e = ":not(" + e + ")"), 1 === t.length ? lt.find.matchesSelector(t[0], e) ? [ t[0] ] : [] : lt.find.matches(e, t);
  },
  dir: function(e, n, i) {
   for (var o = [], r = e[n]; r && 9 !== r.nodeType && (i === t || 1 !== r.nodeType || !lt(r).is(i)); ) 1 === r.nodeType && o.push(r), 
   r = r[n];
   return o;
  },
  sibling: function(e, t) {
   for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
   return n;
  }
 });
 var Ut = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Xt = / jQuery\d+="(?:null|\d+)"/g, Vt = RegExp("<(?:" + Ut + ")[\\s/>]", "i"), Yt = /^\s+/, Kt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Jt = /<([\w:]+)/, Qt = /<tbody/i, Zt = /<|&#?\w+;/, en = /<(?:script|style|link)/i, tn = /^(?:checkbox|radio)$/i, nn = /checked\s*(?:[^=]|=\s*.checked.)/i, on = /^$|\/(?:java|ecma)script/i, rn = /^true\/(.*)/, sn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, an = {
  option: [ 1, "<select multiple='multiple'>", "</select>" ],
  legend: [ 1, "<fieldset>", "</fieldset>" ],
  area: [ 1, "<map>", "</map>" ],
  param: [ 1, "<object>", "</object>" ],
  thead: [ 1, "<table>", "</table>" ],
  tr: [ 2, "<table><tbody>", "</tbody></table>" ],
  col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
  td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
  _default: lt.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
 }, ln = p(V), cn = ln.appendChild(V.createElement("div"));
 an.optgroup = an.option, an.tbody = an.tfoot = an.colgroup = an.caption = an.thead, 
 an.th = an.td, lt.fn.extend({
  text: function(e) {
   return lt.access(this, function(e) {
    return e === t ? lt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || V).createTextNode(e));
   }, null, e, arguments.length);
  },
  wrapAll: function(e) {
   if (lt.isFunction(e)) return this.each(function(t) {
    lt(this).wrapAll(e.call(this, t));
   });
   if (this[0]) {
    var t = lt(e, this[0].ownerDocument).eq(0).clone(!0);
    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
     for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
     return e;
    }).append(this);
   }
   return this;
  },
  wrapInner: function(e) {
   return lt.isFunction(e) ? this.each(function(t) {
    lt(this).wrapInner(e.call(this, t));
   }) : this.each(function() {
    var t = lt(this), n = t.contents();
    n.length ? n.wrapAll(e) : t.append(e);
   });
  },
  wrap: function(e) {
   var t = lt.isFunction(e);
   return this.each(function(n) {
    lt(this).wrapAll(t ? e.call(this, n) : e);
   });
  },
  unwrap: function() {
   return this.parent().each(function() {
    lt.nodeName(this, "body") || lt(this).replaceWith(this.childNodes);
   }).end();
  },
  append: function() {
   return this.domManip(arguments, !0, function(e) {
    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e);
   });
  },
  prepend: function() {
   return this.domManip(arguments, !0, function(e) {
    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild);
   });
  },
  before: function() {
   return this.domManip(arguments, !1, function(e) {
    this.parentNode && this.parentNode.insertBefore(e, this);
   });
  },
  after: function() {
   return this.domManip(arguments, !1, function(e) {
    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
   });
  },
  remove: function(e, t) {
   for (var n, i = 0; null != (n = this[i]); i++) (!e || lt.filter(e, [ n ]).length > 0) && (t || 1 !== n.nodeType || lt.cleanData(b(n)), 
   n.parentNode && (t && lt.contains(n.ownerDocument, n) && m(b(n, "script")), n.parentNode.removeChild(n)));
   return this;
  },
  empty: function() {
   for (var e, t = 0; null != (e = this[t]); t++) {
    for (1 === e.nodeType && lt.cleanData(b(e, !1)); e.firstChild; ) e.removeChild(e.firstChild);
    e.options && lt.nodeName(e, "select") && (e.options.length = 0);
   }
   return this;
  },
  clone: function(e, t) {
   return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
    return lt.clone(this, e, t);
   });
  },
  html: function(e) {
   return lt.access(this, function(e) {
    var n = this[0] || {}, i = 0, o = this.length;
    if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Xt, "") : t;
    if (!("string" != typeof e || en.test(e) || !lt.support.htmlSerialize && Vt.test(e) || !lt.support.leadingWhitespace && Yt.test(e) || an[(Jt.exec(e) || [ "", "" ])[1].toLowerCase()])) {
     e = e.replace(Kt, "<$1></$2>");
     try {
      for (;o > i; i++) n = this[i] || {}, 1 === n.nodeType && (lt.cleanData(b(n, !1)), 
      n.innerHTML = e);
      n = 0;
     } catch (r) {}
    }
    n && this.empty().append(e);
   }, null, e, arguments.length);
  },
  replaceWith: function(e) {
   var t = lt.isFunction(e);
   return t || "string" == typeof e || (e = lt(e).not(this).detach()), this.domManip([ e ], !0, function(e) {
    var t = this.nextSibling, n = this.parentNode;
    n && (lt(this).remove(), n.insertBefore(e, t));
   });
  },
  detach: function(e) {
   return this.remove(e, !0);
  },
  domManip: function(e, n, i) {
   e = tt.apply([], e);
   var o, r, s, a, l, c, u = 0, d = this.length, p = this, m = d - 1, v = e[0], y = lt.isFunction(v);
   if (y || !(1 >= d || "string" != typeof v || lt.support.checkClone) && nn.test(v)) return this.each(function(o) {
    var r = p.eq(o);
    y && (e[0] = v.call(this, o, n ? r.html() : t)), r.domManip(e, n, i);
   });
   if (d && (c = lt.buildFragment(e, this[0].ownerDocument, !1, this), o = c.firstChild, 
   1 === c.childNodes.length && (c = o), o)) {
    for (n = n && lt.nodeName(o, "tr"), a = lt.map(b(c, "script"), h), s = a.length; d > u; u++) r = c, 
    u !== m && (r = lt.clone(r, !0, !0), s && lt.merge(a, b(r, "script"))), i.call(n && lt.nodeName(this[u], "table") ? f(this[u], "tbody") : this[u], r, u);
    if (s) for (l = a[a.length - 1].ownerDocument, lt.map(a, g), u = 0; s > u; u++) r = a[u], 
    on.test(r.type || "") && !lt._data(r, "globalEval") && lt.contains(l, r) && (r.src ? lt.ajax({
     url: r.src,
     type: "GET",
     dataType: "script",
     async: !1,
     global: !1,
     "throws": !0
    }) : lt.globalEval((r.text || r.textContent || r.innerHTML || "").replace(sn, "")));
    c = o = null;
   }
   return this;
  }
 }), lt.each({
  appendTo: "append",
  prependTo: "prepend",
  insertBefore: "before",
  insertAfter: "after",
  replaceAll: "replaceWith"
 }, function(e, t) {
  lt.fn[e] = function(e) {
   for (var n, i = 0, o = [], r = lt(e), s = r.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), 
   lt(r[i])[t](n), nt.apply(o, n.get());
   return this.pushStack(o);
  };
 }), lt.extend({
  clone: function(e, t, n) {
   var i, o, r, s, a, l = lt.contains(e.ownerDocument, e);
   if (lt.support.html5Clone || lt.isXMLDoc(e) || !Vt.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (cn.innerHTML = e.outerHTML, 
   cn.removeChild(r = cn.firstChild)), !(lt.support.noCloneEvent && lt.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || lt.isXMLDoc(e))) for (i = b(r), 
   a = b(e), s = 0; null != (o = a[s]); ++s) i[s] && y(o, i[s]);
   if (t) if (n) for (a = a || b(e), i = i || b(r), s = 0; null != (o = a[s]); s++) v(o, i[s]); else v(e, r);
   return i = b(r, "script"), i.length > 0 && m(i, !l && b(e, "script")), i = a = o = null, 
   r;
  },
  buildFragment: function(e, t, n, i) {
   for (var o, r, s, a, l, c, u, d = e.length, f = p(t), h = [], g = 0; d > g; g++) if (r = e[g], 
   r || 0 === r) if ("object" === lt.type(r)) lt.merge(h, r.nodeType ? [ r ] : r); else if (Zt.test(r)) {
    for (a = a || f.appendChild(t.createElement("div")), l = (Jt.exec(r) || [ "", "" ])[1].toLowerCase(), 
    u = an[l] || an._default, a.innerHTML = u[1] + r.replace(Kt, "<$1></$2>") + u[2], 
    o = u[0]; o--; ) a = a.lastChild;
    if (!lt.support.leadingWhitespace && Yt.test(r) && h.push(t.createTextNode(Yt.exec(r)[0])), 
    !lt.support.tbody) for (r = "table" !== l || Qt.test(r) ? "<table>" !== u[1] || Qt.test(r) ? 0 : a : a.firstChild, 
    o = r && r.childNodes.length; o--; ) lt.nodeName(c = r.childNodes[o], "tbody") && !c.childNodes.length && r.removeChild(c);
    for (lt.merge(h, a.childNodes), a.textContent = ""; a.firstChild; ) a.removeChild(a.firstChild);
    a = f.lastChild;
   } else h.push(t.createTextNode(r));
   for (a && f.removeChild(a), lt.support.appendChecked || lt.grep(b(h, "input"), w), 
   g = 0; r = h[g++]; ) if ((!i || -1 === lt.inArray(r, i)) && (s = lt.contains(r.ownerDocument, r), 
   a = b(f.appendChild(r), "script"), s && m(a), n)) for (o = 0; r = a[o++]; ) on.test(r.type || "") && n.push(r);
   return a = null, f;
  },
  cleanData: function(e, t) {
   for (var n, i, o, r, s = 0, a = lt.expando, l = lt.cache, c = lt.support.deleteExpando, u = lt.event.special; null != (n = e[s]); s++) if ((t || lt.acceptData(n)) && (o = n[a], 
   r = o && l[o])) {
    if (r.events) for (i in r.events) u[i] ? lt.event.remove(n, i) : lt.removeEvent(n, i, r.handle);
    l[o] && (delete l[o], c ? delete n[a] : typeof n.removeAttribute !== X ? n.removeAttribute(a) : n[a] = null, 
    Z.push(o));
   }
  }
 });
 var un, dn, pn, fn = /alpha\([^)]*\)/i, hn = /opacity\s*=\s*([^)]*)/, gn = /^(top|right|bottom|left)$/, mn = /^(none|table(?!-c[ea]).+)/, vn = /^margin/, yn = RegExp("^(" + ct + ")(.*)$", "i"), bn = RegExp("^(" + ct + ")(?!px)[a-z%]+$", "i"), wn = RegExp("^([+-])=(" + ct + ")", "i"), xn = {
  BODY: "block"
 }, Cn = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
 }, kn = {
  letterSpacing: 0,
  fontWeight: 400
 }, Sn = [ "Top", "Right", "Bottom", "Left" ], Tn = [ "Webkit", "O", "Moz", "ms" ];
 lt.fn.extend({
  css: function(e, n) {
   return lt.access(this, function(e, n, i) {
    var o, r, s = {}, a = 0;
    if (lt.isArray(n)) {
     for (r = dn(e), o = n.length; o > a; a++) s[n[a]] = lt.css(e, n[a], !1, r);
     return s;
    }
    return i !== t ? lt.style(e, n, i) : lt.css(e, n);
   }, e, n, arguments.length > 1);
  },
  show: function() {
   return k(this, !0);
  },
  hide: function() {
   return k(this);
  },
  toggle: function(e) {
   var t = "boolean" == typeof e;
   return this.each(function() {
    (t ? e : C(this)) ? lt(this).show() : lt(this).hide();
   });
  }
 }), lt.extend({
  cssHooks: {
   opacity: {
    get: function(e, t) {
     if (t) {
      var n = pn(e, "opacity");
      return "" === n ? "1" : n;
     }
    }
   }
  },
  cssNumber: {
   columnCount: !0,
   fillOpacity: !0,
   fontWeight: !0,
   lineHeight: !0,
   opacity: !0,
   orphans: !0,
   widows: !0,
   zIndex: !0,
   zoom: !0
  },
  cssProps: {
   "float": lt.support.cssFloat ? "cssFloat" : "styleFloat"
  },
  style: function(e, n, i, o) {
   if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
    var r, s, a, l = lt.camelCase(n), c = e.style;
    if (n = lt.cssProps[l] || (lt.cssProps[l] = x(c, l)), a = lt.cssHooks[n] || lt.cssHooks[l], 
    i === t) return a && "get" in a && (r = a.get(e, !1, o)) !== t ? r : c[n];
    if (s = typeof i, "string" === s && (r = wn.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(lt.css(e, n)), 
    s = "number"), !(null == i || "number" === s && isNaN(i) || ("number" !== s || lt.cssNumber[l] || (i += "px"), 
    lt.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (c[n] = "inherit"), 
    a && "set" in a && (i = a.set(e, i, o)) === t))) try {
     c[n] = i;
    } catch (u) {}
   }
  },
  css: function(e, n, i, o) {
   var r, s, a, l = lt.camelCase(n);
   return n = lt.cssProps[l] || (lt.cssProps[l] = x(e.style, l)), a = lt.cssHooks[n] || lt.cssHooks[l], 
   a && "get" in a && (s = a.get(e, !0, i)), s === t && (s = pn(e, n, o)), "normal" === s && n in kn && (s = kn[n]), 
   "" === i || i ? (r = parseFloat(s), i === !0 || lt.isNumeric(r) ? r || 0 : s) : s;
  },
  swap: function(e, t, n, i) {
   var o, r, s = {};
   for (r in t) s[r] = e.style[r], e.style[r] = t[r];
   o = n.apply(e, i || []);
   for (r in t) e.style[r] = s[r];
   return o;
  }
 }), e.getComputedStyle ? (dn = function(t) {
  return e.getComputedStyle(t, null);
 }, pn = function(e, n, i) {
  var o, r, s, a = i || dn(e), l = a ? a.getPropertyValue(n) || a[n] : t, c = e.style;
  return a && ("" !== l || lt.contains(e.ownerDocument, e) || (l = lt.style(e, n)), 
  bn.test(l) && vn.test(n) && (o = c.width, r = c.minWidth, s = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, 
  l = a.width, c.width = o, c.minWidth = r, c.maxWidth = s)), l;
 }) : V.documentElement.currentStyle && (dn = function(e) {
  return e.currentStyle;
 }, pn = function(e, n, i) {
  var o, r, s, a = i || dn(e), l = a ? a[n] : t, c = e.style;
  return null == l && c && c[n] && (l = c[n]), bn.test(l) && !gn.test(n) && (o = c.left, 
  r = e.runtimeStyle, s = r && r.left, s && (r.left = e.currentStyle.left), c.left = "fontSize" === n ? "1em" : l, 
  l = c.pixelLeft + "px", c.left = o, s && (r.left = s)), "" === l ? "auto" : l;
 }), lt.each([ "height", "width" ], function(e, n) {
  lt.cssHooks[n] = {
   get: function(e, i, o) {
    return i ? 0 === e.offsetWidth && mn.test(lt.css(e, "display")) ? lt.swap(e, Cn, function() {
     return _(e, n, o);
    }) : _(e, n, o) : t;
   },
   set: function(e, t, i) {
    var o = i && dn(e);
    return S(e, t, i ? T(e, n, i, lt.support.boxSizing && "border-box" === lt.css(e, "boxSizing", !1, o), o) : 0);
   }
  };
 }), lt.support.opacity || (lt.cssHooks.opacity = {
  get: function(e, t) {
   return hn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
  },
  set: function(e, t) {
   var n = e.style, i = e.currentStyle, o = lt.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", r = i && i.filter || n.filter || "";
   n.zoom = 1, (t >= 1 || "" === t) && "" === lt.trim(r.replace(fn, "")) && n.removeAttribute && (n.removeAttribute("filter"), 
   "" === t || i && !i.filter) || (n.filter = fn.test(r) ? r.replace(fn, o) : r + " " + o);
  }
 }), lt(function() {
  lt.support.reliableMarginRight || (lt.cssHooks.marginRight = {
   get: function(e, n) {
    return n ? lt.swap(e, {
     display: "inline-block"
    }, pn, [ e, "marginRight" ]) : t;
   }
  }), !lt.support.pixelPosition && lt.fn.position && lt.each([ "top", "left" ], function(e, n) {
   lt.cssHooks[n] = {
    get: function(e, i) {
     return i ? (i = pn(e, n), bn.test(i) ? lt(e).position()[n] + "px" : i) : t;
    }
   };
  });
 }), lt.expr && lt.expr.filters && (lt.expr.filters.hidden = function(e) {
  return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !lt.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || lt.css(e, "display"));
 }, lt.expr.filters.visible = function(e) {
  return !lt.expr.filters.hidden(e);
 }), lt.each({
  margin: "",
  padding: "",
  border: "Width"
 }, function(e, t) {
  lt.cssHooks[e + t] = {
   expand: function(n) {
    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [ n ]; 4 > i; i++) o[e + Sn[i] + t] = r[i] || r[i - 2] || r[0];
    return o;
   }
  }, vn.test(e) || (lt.cssHooks[e + t].set = S);
 });
 var _n = /%20/g, En = /\[\]$/, Pn = /\r?\n/g, In = /^(?:submit|button|image|reset|file)$/i, $n = /^(?:input|select|textarea|keygen)/i;
 lt.fn.extend({
  serialize: function() {
   return lt.param(this.serializeArray());
  },
  serializeArray: function() {
   return this.map(function() {
    var e = lt.prop(this, "elements");
    return e ? lt.makeArray(e) : this;
   }).filter(function() {
    var e = this.type;
    return this.name && !lt(this).is(":disabled") && $n.test(this.nodeName) && !In.test(e) && (this.checked || !tn.test(e));
   }).map(function(e, t) {
    var n = lt(this).val();
    return null == n ? null : lt.isArray(n) ? lt.map(n, function(e) {
     return {
      name: t.name,
      value: e.replace(Pn, "\r\n")
     };
    }) : {
     name: t.name,
     value: n.replace(Pn, "\r\n")
    };
   }).get();
  }
 }), lt.param = function(e, n) {
  var i, o = [], r = function(e, t) {
   t = lt.isFunction(t) ? t() : null == t ? "" : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
  };
  if (n === t && (n = lt.ajaxSettings && lt.ajaxSettings.traditional), lt.isArray(e) || e.jquery && !lt.isPlainObject(e)) lt.each(e, function() {
   r(this.name, this.value);
  }); else for (i in e) I(i, e[i], n, r);
  return o.join("&").replace(_n, "+");
 }, lt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
  lt.fn[t] = function(e, n) {
   return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
  };
 }), lt.fn.hover = function(e, t) {
  return this.mouseenter(e).mouseleave(t || e);
 };
 var zn, Nn, Rn = lt.now(), Ln = /\?/, An = /#.*$/, On = /([?&])_=[^&]*/, Mn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Dn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, jn = /^(?:GET|HEAD)$/, Hn = /^\/\//, Fn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Bn = lt.fn.load, Wn = {}, qn = {}, Gn = "*/".concat("*");
 try {
  Nn = Y.href;
 } catch (Un) {
  Nn = V.createElement("a"), Nn.href = "", Nn = Nn.href;
 }
 zn = Fn.exec(Nn.toLowerCase()) || [], lt.fn.load = function(e, n, i) {
  if ("string" != typeof e && Bn) return Bn.apply(this, arguments);
  var o, r, s, a = this, l = e.indexOf(" ");
  return l >= 0 && (o = e.slice(l, e.length), e = e.slice(0, l)), lt.isFunction(n) ? (i = n, 
  n = t) : n && "object" == typeof n && (s = "POST"), a.length > 0 && lt.ajax({
   url: e,
   type: s,
   dataType: "html",
   data: n
  }).done(function(e) {
   r = arguments, a.html(o ? lt("<div>").append(lt.parseHTML(e)).find(o) : e);
  }).complete(i && function(e, t) {
   a.each(i, r || [ e.responseText, t, e ]);
  }), this;
 }, lt.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
  lt.fn[t] = function(e) {
   return this.on(t, e);
  };
 }), lt.each([ "get", "post" ], function(e, n) {
  lt[n] = function(e, i, o, r) {
   return lt.isFunction(i) && (r = r || o, o = i, i = t), lt.ajax({
    url: e,
    type: n,
    dataType: r,
    data: i,
    success: o
   });
  };
 }), lt.extend({
  active: 0,
  lastModified: {},
  etag: {},
  ajaxSettings: {
   url: Nn,
   type: "GET",
   isLocal: Dn.test(zn[1]),
   global: !0,
   processData: !0,
   async: !0,
   contentType: "application/x-www-form-urlencoded; charset=UTF-8",
   accepts: {
    "*": Gn,
    text: "text/plain",
    html: "text/html",
    xml: "application/xml, text/xml",
    json: "application/json, text/javascript"
   },
   contents: {
    xml: /xml/,
    html: /html/,
    json: /json/
   },
   responseFields: {
    xml: "responseXML",
    text: "responseText"
   },
   converters: {
    "* text": e.String,
    "text html": !0,
    "text json": lt.parseJSON,
    "text xml": lt.parseXML
   },
   flatOptions: {
    url: !0,
    context: !0
   }
  },
  ajaxSetup: function(e, t) {
   return t ? N(N(e, lt.ajaxSettings), t) : N(lt.ajaxSettings, e);
  },
  ajaxPrefilter: $(Wn),
  ajaxTransport: $(qn),
  ajax: function(e, n) {
   function i(e, n, i, o) {
    var r, d, y, b, x, k = n;
    2 !== w && (w = 2, l && clearTimeout(l), u = t, a = o || "", C.readyState = e > 0 ? 4 : 0, 
    i && (b = R(p, C, i)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (x = C.getResponseHeader("Last-Modified"), 
    x && (lt.lastModified[s] = x), x = C.getResponseHeader("etag"), x && (lt.etag[s] = x)), 
    204 === e ? (r = !0, k = "nocontent") : 304 === e ? (r = !0, k = "notmodified") : (r = L(p, b), 
    k = r.state, d = r.data, y = r.error, r = !y)) : (y = k, (e || !k) && (k = "error", 
    0 > e && (e = 0))), C.status = e, C.statusText = (n || k) + "", r ? g.resolveWith(f, [ d, k, C ]) : g.rejectWith(f, [ C, k, y ]), 
    C.statusCode(v), v = t, c && h.trigger(r ? "ajaxSuccess" : "ajaxError", [ C, p, r ? d : y ]), 
    m.fireWith(f, [ C, k ]), c && (h.trigger("ajaxComplete", [ C, p ]), --lt.active || lt.event.trigger("ajaxStop")));
   }
   "object" == typeof e && (n = e, e = t), n = n || {};
   var o, r, s, a, l, c, u, d, p = lt.ajaxSetup({}, n), f = p.context || p, h = p.context && (f.nodeType || f.jquery) ? lt(f) : lt.event, g = lt.Deferred(), m = lt.Callbacks("once memory"), v = p.statusCode || {}, y = {}, b = {}, w = 0, x = "canceled", C = {
    readyState: 0,
    getResponseHeader: function(e) {
     var t;
     if (2 === w) {
      if (!d) for (d = {}; t = Mn.exec(a); ) d[t[1].toLowerCase()] = t[2];
      t = d[e.toLowerCase()];
     }
     return null == t ? null : t;
    },
    getAllResponseHeaders: function() {
     return 2 === w ? a : null;
    },
    setRequestHeader: function(e, t) {
     var n = e.toLowerCase();
     return w || (e = b[n] = b[n] || e, y[e] = t), this;
    },
    overrideMimeType: function(e) {
     return w || (p.mimeType = e), this;
    },
    statusCode: function(e) {
     var t;
     if (e) if (2 > w) for (t in e) v[t] = [ v[t], e[t] ]; else C.always(e[C.status]);
     return this;
    },
    abort: function(e) {
     var t = e || x;
     return u && u.abort(t), i(0, t), this;
    }
   };
   if (g.promise(C).complete = m.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || Nn) + "").replace(An, "").replace(Hn, zn[1] + "//"), 
   p.type = n.method || n.type || p.method || p.type, p.dataTypes = lt.trim(p.dataType || "*").toLowerCase().match(ut) || [ "" ], 
   null == p.crossDomain && (o = Fn.exec(p.url.toLowerCase()), p.crossDomain = !(!o || o[1] === zn[1] && o[2] === zn[2] && (o[3] || ("http:" === o[1] ? 80 : 443)) == (zn[3] || ("http:" === zn[1] ? 80 : 443)))), 
   p.data && p.processData && "string" != typeof p.data && (p.data = lt.param(p.data, p.traditional)), 
   z(Wn, p, n, C), 2 === w) return C;
   c = p.global, c && 0 === lt.active++ && lt.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), 
   p.hasContent = !jn.test(p.type), s = p.url, p.hasContent || (p.data && (s = p.url += (Ln.test(s) ? "&" : "?") + p.data, 
   delete p.data), p.cache === !1 && (p.url = On.test(s) ? s.replace(On, "$1_=" + Rn++) : s + (Ln.test(s) ? "&" : "?") + "_=" + Rn++)), 
   p.ifModified && (lt.lastModified[s] && C.setRequestHeader("If-Modified-Since", lt.lastModified[s]), 
   lt.etag[s] && C.setRequestHeader("If-None-Match", lt.etag[s])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), 
   C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Gn + "; q=0.01" : "") : p.accepts["*"]);
   for (r in p.headers) C.setRequestHeader(r, p.headers[r]);
   if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === w)) return C.abort();
   x = "abort";
   for (r in {
    success: 1,
    error: 1,
    complete: 1
   }) C[r](p[r]);
   if (u = z(qn, p, n, C)) {
    C.readyState = 1, c && h.trigger("ajaxSend", [ C, p ]), p.async && p.timeout > 0 && (l = setTimeout(function() {
     C.abort("timeout");
    }, p.timeout));
    try {
     w = 1, u.send(y, i);
    } catch (k) {
     if (!(2 > w)) throw k;
     i(-1, k);
    }
   } else i(-1, "No Transport");
   return C;
  },
  getScript: function(e, n) {
   return lt.get(e, t, n, "script");
  },
  getJSON: function(e, t, n) {
   return lt.get(e, t, n, "json");
  }
 }), lt.ajaxSetup({
  accepts: {
   script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
  },
  contents: {
   script: /(?:java|ecma)script/
  },
  converters: {
   "text script": function(e) {
    return lt.globalEval(e), e;
   }
  }
 }), lt.ajaxPrefilter("script", function(e) {
  e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
 }), lt.ajaxTransport("script", function(e) {
  if (e.crossDomain) {
   var n, i = V.head || lt("head")[0] || V.documentElement;
   return {
    send: function(t, o) {
     n = V.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), 
     n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
      (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, 
      n.parentNode && n.parentNode.removeChild(n), n = null, t || o(200, "success"));
     }, i.insertBefore(n, i.firstChild);
    },
    abort: function() {
     n && n.onload(t, !0);
    }
   };
  }
 });
 var Xn = [], Vn = /(=)\?(?=&|$)|\?\?/;
 lt.ajaxSetup({
  jsonp: "callback",
  jsonpCallback: function() {
   var e = Xn.pop() || lt.expando + "_" + Rn++;
   return this[e] = !0, e;
  }
 }), lt.ajaxPrefilter("json jsonp", function(n, i, o) {
  var r, s, a, l = n.jsonp !== !1 && (Vn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Vn.test(n.data) && "data");
  return l || "jsonp" === n.dataTypes[0] ? (r = n.jsonpCallback = lt.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, 
  l ? n[l] = n[l].replace(Vn, "$1" + r) : n.jsonp !== !1 && (n.url += (Ln.test(n.url) ? "&" : "?") + n.jsonp + "=" + r), 
  n.converters["script json"] = function() {
   return a || lt.error(r + " was not called"), a[0];
  }, n.dataTypes[0] = "json", s = e[r], e[r] = function() {
   a = arguments;
  }, o.always(function() {
   e[r] = s, n[r] && (n.jsonpCallback = i.jsonpCallback, Xn.push(r)), a && lt.isFunction(s) && s(a[0]), 
   a = s = t;
  }), "script") : t;
 });
 var Yn, Kn, Jn = 0, Qn = e.ActiveXObject && function() {
  var e;
  for (e in Yn) Yn[e](t, !0);
 };
 lt.ajaxSettings.xhr = e.ActiveXObject ? function() {
  return !this.isLocal && A() || O();
 } : A, Kn = lt.ajaxSettings.xhr(), lt.support.cors = !!Kn && "withCredentials" in Kn, 
 Kn = lt.support.ajax = !!Kn, Kn && lt.ajaxTransport(function(n) {
  if (!n.crossDomain || lt.support.cors) {
   var i;
   return {
    send: function(o, r) {
     var s, a, l = n.xhr();
     if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), 
     n.xhrFields) for (a in n.xhrFields) l[a] = n.xhrFields[a];
     n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
     try {
      for (a in o) l.setRequestHeader(a, o[a]);
     } catch (c) {}
     l.send(n.hasContent && n.data || null), i = function(e, o) {
      var a, c, u, d;
      try {
       if (i && (o || 4 === l.readyState)) if (i = t, s && (l.onreadystatechange = lt.noop, 
       Qn && delete Yn[s]), o) 4 !== l.readyState && l.abort(); else {
        d = {}, a = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (d.text = l.responseText);
        try {
         u = l.statusText;
        } catch (p) {
         u = "";
        }
        a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = d.text ? 200 : 404;
       }
      } catch (f) {
       o || r(-1, f);
      }
      d && r(a, u, d, c);
     }, n.async ? 4 === l.readyState ? setTimeout(i) : (s = ++Jn, Qn && (Yn || (Yn = {}, 
     lt(e).unload(Qn)), Yn[s] = i), l.onreadystatechange = i) : i();
    },
    abort: function() {
     i && i(t, !0);
    }
   };
  }
 });
 var Zn, ei, ti = /^(?:toggle|show|hide)$/, ni = RegExp("^(?:([+-])=|)(" + ct + ")([a-z%]*)$", "i"), ii = /queueHooks$/, oi = [ F ], ri = {
  "*": [ function(e, t) {
   var n, i, o = this.createTween(e, t), r = ni.exec(t), s = o.cur(), a = +s || 0, l = 1, c = 20;
   if (r) {
    if (n = +r[2], i = r[3] || (lt.cssNumber[e] ? "" : "px"), "px" !== i && a) {
     a = lt.css(o.elem, e, !0) || n || 1;
     do l = l || ".5", a /= l, lt.style(o.elem, e, a + i); while (l !== (l = o.cur() / s) && 1 !== l && --c);
    }
    o.unit = i, o.start = a, o.end = r[1] ? a + (r[1] + 1) * n : n;
   }
   return o;
  } ]
 };
 lt.Animation = lt.extend(j, {
  tweener: function(e, t) {
   lt.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.split(" ");
   for (var n, i = 0, o = e.length; o > i; i++) n = e[i], ri[n] = ri[n] || [], ri[n].unshift(t);
  },
  prefilter: function(e, t) {
   t ? oi.unshift(e) : oi.push(e);
  }
 }), lt.Tween = B, B.prototype = {
  constructor: B,
  init: function(e, t, n, i, o, r) {
   this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), 
   this.end = i, this.unit = r || (lt.cssNumber[n] ? "" : "px");
  },
  cur: function() {
   var e = B.propHooks[this.prop];
   return e && e.get ? e.get(this) : B.propHooks._default.get(this);
  },
  run: function(e) {
   var t, n = B.propHooks[this.prop];
   return this.pos = t = this.options.duration ? lt.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, 
   this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
   n && n.set ? n.set(this) : B.propHooks._default.set(this), this;
  }
 }, B.prototype.init.prototype = B.prototype, B.propHooks = {
  _default: {
   get: function(e) {
    var t;
    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = lt.css(e.elem, e.prop, ""), 
    t && "auto" !== t ? t : 0) : e.elem[e.prop];
   },
   set: function(e) {
    lt.fx.step[e.prop] ? lt.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[lt.cssProps[e.prop]] || lt.cssHooks[e.prop]) ? lt.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
   }
  }
 }, B.propHooks.scrollTop = B.propHooks.scrollLeft = {
  set: function(e) {
   e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
  }
 }, lt.each([ "toggle", "show", "hide" ], function(e, t) {
  var n = lt.fn[t];
  lt.fn[t] = function(e, i, o) {
   return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, i, o);
  };
 }), lt.fn.extend({
  fadeTo: function(e, t, n, i) {
   return this.filter(C).css("opacity", 0).show().end().animate({
    opacity: t
   }, e, n, i);
  },
  animate: function(e, t, n, i) {
   var o = lt.isEmptyObject(e), r = lt.speed(t, n, i), s = function() {
    var t = j(this, lt.extend({}, e), r);
    s.finish = function() {
     t.stop(!0);
    }, (o || lt._data(this, "finish")) && t.stop(!0);
   };
   return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s);
  },
  stop: function(e, n, i) {
   var o = function(e) {
    var t = e.stop;
    delete e.stop, t(i);
   };
   return "string" != typeof e && (i = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), 
   this.each(function() {
    var t = !0, n = null != e && e + "queueHooks", r = lt.timers, s = lt._data(this);
    if (n) s[n] && s[n].stop && o(s[n]); else for (n in s) s[n] && s[n].stop && ii.test(n) && o(s[n]);
    for (n = r.length; n--; ) r[n].elem !== this || null != e && r[n].queue !== e || (r[n].anim.stop(i), 
    t = !1, r.splice(n, 1));
    (t || !i) && lt.dequeue(this, e);
   });
  },
  finish: function(e) {
   return e !== !1 && (e = e || "fx"), this.each(function() {
    var t, n = lt._data(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = lt.timers, s = i ? i.length : 0;
    for (n.finish = !0, lt.queue(this, e, []), o && o.cur && o.cur.finish && o.cur.finish.call(this), 
    t = r.length; t--; ) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), 
    r.splice(t, 1));
    for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
    delete n.finish;
   });
  }
 }), lt.each({
  slideDown: W("show"),
  slideUp: W("hide"),
  slideToggle: W("toggle"),
  fadeIn: {
   opacity: "show"
  },
  fadeOut: {
   opacity: "hide"
  },
  fadeToggle: {
   opacity: "toggle"
  }
 }, function(e, t) {
  lt.fn[e] = function(e, n, i) {
   return this.animate(t, e, n, i);
  };
 }), lt.speed = function(e, t, n) {
  var i = e && "object" == typeof e ? lt.extend({}, e) : {
   complete: n || !n && t || lt.isFunction(e) && e,
   duration: e,
   easing: n && t || t && !lt.isFunction(t) && t
  };
  return i.duration = lt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in lt.fx.speeds ? lt.fx.speeds[i.duration] : lt.fx.speeds._default, 
  (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
   lt.isFunction(i.old) && i.old.call(this), i.queue && lt.dequeue(this, i.queue);
  }, i;
 }, lt.easing = {
  linear: function(e) {
   return e;
  },
  swing: function(e) {
   return .5 - Math.cos(e * Math.PI) / 2;
  }
 }, lt.timers = [], lt.fx = B.prototype.init, lt.fx.tick = function() {
  var e, n = lt.timers, i = 0;
  for (Zn = lt.now(); n.length > i; i++) e = n[i], e() || n[i] !== e || n.splice(i--, 1);
  n.length || lt.fx.stop(), Zn = t;
 }, lt.fx.timer = function(e) {
  e() && lt.timers.push(e) && lt.fx.start();
 }, lt.fx.interval = 13, lt.fx.start = function() {
  ei || (ei = setInterval(lt.fx.tick, lt.fx.interval));
 }, lt.fx.stop = function() {
  clearInterval(ei), ei = null;
 }, lt.fx.speeds = {
  slow: 600,
  fast: 200,
  _default: 400
 }, lt.fx.step = {}, lt.expr && lt.expr.filters && (lt.expr.filters.animated = function(e) {
  return lt.grep(lt.timers, function(t) {
   return e === t.elem;
  }).length;
 }), lt.fn.offset = function(e) {
  if (arguments.length) return e === t ? this : this.each(function(t) {
   lt.offset.setOffset(this, e, t);
  });
  var n, i, o = {
   top: 0,
   left: 0
  }, r = this[0], s = r && r.ownerDocument;
  if (s) return n = s.documentElement, lt.contains(n, r) ? (typeof r.getBoundingClientRect !== X && (o = r.getBoundingClientRect()), 
  i = q(s), {
   top: o.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
   left: o.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
  }) : o;
 }, lt.offset = {
  setOffset: function(e, t, n) {
   var i = lt.css(e, "position");
   "static" === i && (e.style.position = "relative");
   var o, r, s = lt(e), a = s.offset(), l = lt.css(e, "top"), c = lt.css(e, "left"), u = ("absolute" === i || "fixed" === i) && lt.inArray("auto", [ l, c ]) > -1, d = {}, p = {};
   u ? (p = s.position(), o = p.top, r = p.left) : (o = parseFloat(l) || 0, r = parseFloat(c) || 0), 
   lt.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (d.top = t.top - a.top + o), 
   null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : s.css(d);
  }
 }, lt.fn.extend({
  position: function() {
   if (this[0]) {
    var e, t, n = {
     top: 0,
     left: 0
    }, i = this[0];
    return "fixed" === lt.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), 
    t = this.offset(), lt.nodeName(e[0], "html") || (n = e.offset()), n.top += lt.css(e[0], "borderTopWidth", !0), 
    n.left += lt.css(e[0], "borderLeftWidth", !0)), {
     top: t.top - n.top - lt.css(i, "marginTop", !0),
     left: t.left - n.left - lt.css(i, "marginLeft", !0)
    };
   }
  },
  offsetParent: function() {
   return this.map(function() {
    for (var e = this.offsetParent || V.documentElement; e && !lt.nodeName(e, "html") && "static" === lt.css(e, "position"); ) e = e.offsetParent;
    return e || V.documentElement;
   });
  }
 }), lt.each({
  scrollLeft: "pageXOffset",
  scrollTop: "pageYOffset"
 }, function(e, n) {
  var i = /Y/.test(n);
  lt.fn[e] = function(o) {
   return lt.access(this, function(e, o, r) {
    var s = q(e);
    return r === t ? s ? n in s ? s[n] : s.document.documentElement[o] : e[o] : (s ? s.scrollTo(i ? lt(s).scrollLeft() : r, i ? r : lt(s).scrollTop()) : e[o] = r, 
    t);
   }, e, o, arguments.length, null);
  };
 }), lt.each({
  Height: "height",
  Width: "width"
 }, function(e, n) {
  lt.each({
   padding: "inner" + e,
   content: n,
   "": "outer" + e
  }, function(i, o) {
   lt.fn[o] = function(o, r) {
    var s = arguments.length && (i || "boolean" != typeof o), a = i || (o === !0 || r === !0 ? "margin" : "border");
    return lt.access(this, function(n, i, o) {
     var r;
     return lt.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (r = n.documentElement, 
     Math.max(n.body["scroll" + e], r["scroll" + e], n.body["offset" + e], r["offset" + e], r["client" + e])) : o === t ? lt.css(n, i, a) : lt.style(n, i, o, a);
    }, n, s ? o : t, s, null);
   };
  });
 }), e.jQuery = e.$ = lt, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
  return lt;
 });
})(window), function() {
 var e = this, t = e._, n = {}, i = Array.prototype, o = Object.prototype, r = Function.prototype, s = i.push, a = i.slice, l = i.concat, c = o.toString, u = o.hasOwnProperty, d = i.forEach, p = i.map, f = i.reduce, h = i.reduceRight, g = i.filter, m = i.every, v = i.some, y = i.indexOf, b = i.lastIndexOf, w = Array.isArray, x = Object.keys, C = r.bind, k = function(e) {
  return e instanceof k ? e : this instanceof k ? (this._wrapped = e, void 0) : new k(e);
 };
 "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = k), 
 exports._ = k) : e._ = k, k.VERSION = "1.4.4";
 var S = k.each = k.forEach = function(e, t, i) {
  if (null != e) if (d && e.forEach === d) e.forEach(t, i); else if (e.length === +e.length) {
   for (var o = 0, r = e.length; r > o; o++) if (t.call(i, e[o], o, e) === n) return;
  } else for (var s in e) if (k.has(e, s) && t.call(i, e[s], s, e) === n) return;
 };
 k.map = k.collect = function(e, t, n) {
  var i = [];
  return null == e ? i : p && e.map === p ? e.map(t, n) : (S(e, function(e, o, r) {
   i[i.length] = t.call(n, e, o, r);
  }), i);
 };
 var T = "Reduce of empty array with no initial value";
 k.reduce = k.foldl = k.inject = function(e, t, n, i) {
  var o = arguments.length > 2;
  if (null == e && (e = []), f && e.reduce === f) return i && (t = k.bind(t, i)), 
  o ? e.reduce(t, n) : e.reduce(t);
  if (S(e, function(e, r, s) {
   o ? n = t.call(i, n, e, r, s) : (n = e, o = !0);
  }), !o) throw new TypeError(T);
  return n;
 }, k.reduceRight = k.foldr = function(e, t, n, i) {
  var o = arguments.length > 2;
  if (null == e && (e = []), h && e.reduceRight === h) return i && (t = k.bind(t, i)), 
  o ? e.reduceRight(t, n) : e.reduceRight(t);
  var r = e.length;
  if (r !== +r) {
   var s = k.keys(e);
   r = s.length;
  }
  if (S(e, function(a, l, c) {
   l = s ? s[--r] : --r, o ? n = t.call(i, n, e[l], l, c) : (n = e[l], o = !0);
  }), !o) throw new TypeError(T);
  return n;
 }, k.find = k.detect = function(e, t, n) {
  var i;
  return _(e, function(e, o, r) {
   return t.call(n, e, o, r) ? (i = e, !0) : void 0;
  }), i;
 }, k.filter = k.select = function(e, t, n) {
  var i = [];
  return null == e ? i : g && e.filter === g ? e.filter(t, n) : (S(e, function(e, o, r) {
   t.call(n, e, o, r) && (i[i.length] = e);
  }), i);
 }, k.reject = function(e, t, n) {
  return k.filter(e, function(e, i, o) {
   return !t.call(n, e, i, o);
  }, n);
 }, k.every = k.all = function(e, t, i) {
  t || (t = k.identity);
  var o = !0;
  return null == e ? o : m && e.every === m ? e.every(t, i) : (S(e, function(e, r, s) {
   return (o = o && t.call(i, e, r, s)) ? void 0 : n;
  }), !!o);
 };
 var _ = k.some = k.any = function(e, t, i) {
  t || (t = k.identity);
  var o = !1;
  return null == e ? o : v && e.some === v ? e.some(t, i) : (S(e, function(e, r, s) {
   return o || (o = t.call(i, e, r, s)) ? n : void 0;
  }), !!o);
 };
 k.contains = k.include = function(e, t) {
  return null == e ? !1 : y && e.indexOf === y ? -1 != e.indexOf(t) : _(e, function(e) {
   return e === t;
  });
 }, k.invoke = function(e, t) {
  var n = a.call(arguments, 2), i = k.isFunction(t);
  return k.map(e, function(e) {
   return (i ? t : e[t]).apply(e, n);
  });
 }, k.pluck = function(e, t) {
  return k.map(e, function(e) {
   return e[t];
  });
 }, k.where = function(e, t, n) {
  return k.isEmpty(t) ? n ? null : [] : k[n ? "find" : "filter"](e, function(e) {
   for (var n in t) if (t[n] !== e[n]) return !1;
   return !0;
  });
 }, k.findWhere = function(e, t) {
  return k.where(e, t, !0);
 }, k.max = function(e, t, n) {
  if (!t && k.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.max.apply(Math, e);
  if (!t && k.isEmpty(e)) return -1/0;
  var i = {
   computed: -1/0,
   value: -1/0
  };
  return S(e, function(e, o, r) {
   var s = t ? t.call(n, e, o, r) : e;
   s >= i.computed && (i = {
    value: e,
    computed: s
   });
  }), i.value;
 }, k.min = function(e, t, n) {
  if (!t && k.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.min.apply(Math, e);
  if (!t && k.isEmpty(e)) return 1/0;
  var i = {
   computed: 1/0,
   value: 1/0
  };
  return S(e, function(e, o, r) {
   var s = t ? t.call(n, e, o, r) : e;
   i.computed > s && (i = {
    value: e,
    computed: s
   });
  }), i.value;
 }, k.shuffle = function(e) {
  var t, n = 0, i = [];
  return S(e, function(e) {
   t = k.random(n++), i[n - 1] = i[t], i[t] = e;
  }), i;
 };
 var E = function(e) {
  return k.isFunction(e) ? e : function(t) {
   return t[e];
  };
 };
 k.sortBy = function(e, t, n) {
  var i = E(t);
  return k.pluck(k.map(e, function(e, t, o) {
   return {
    value: e,
    index: t,
    criteria: i.call(n, e, t, o)
   };
  }).sort(function(e, t) {
   var n = e.criteria, i = t.criteria;
   if (n !== i) {
    if (n > i || void 0 === n) return 1;
    if (i > n || void 0 === i) return -1;
   }
   return e.index < t.index ? -1 : 1;
  }), "value");
 };
 var P = function(e, t, n, i) {
  var o = {}, r = E(t || k.identity);
  return S(e, function(t, s) {
   var a = r.call(n, t, s, e);
   i(o, a, t);
  }), o;
 };
 k.groupBy = function(e, t, n) {
  return P(e, t, n, function(e, t, n) {
   (k.has(e, t) ? e[t] : e[t] = []).push(n);
  });
 }, k.countBy = function(e, t, n) {
  return P(e, t, n, function(e, t) {
   k.has(e, t) || (e[t] = 0), e[t]++;
  });
 }, k.sortedIndex = function(e, t, n, i) {
  n = null == n ? k.identity : E(n);
  for (var o = n.call(i, t), r = 0, s = e.length; s > r; ) {
   var a = r + s >>> 1;
   o > n.call(i, e[a]) ? r = a + 1 : s = a;
  }
  return r;
 }, k.toArray = function(e) {
  return e ? k.isArray(e) ? a.call(e) : e.length === +e.length ? k.map(e, k.identity) : k.values(e) : [];
 }, k.size = function(e) {
  return null == e ? 0 : e.length === +e.length ? e.length : k.keys(e).length;
 }, k.first = k.head = k.take = function(e, t, n) {
  return null == e ? void 0 : null == t || n ? e[0] : a.call(e, 0, t);
 }, k.initial = function(e, t, n) {
  return a.call(e, 0, e.length - (null == t || n ? 1 : t));
 }, k.last = function(e, t, n) {
  return null == e ? void 0 : null == t || n ? e[e.length - 1] : a.call(e, Math.max(e.length - t, 0));
 }, k.rest = k.tail = k.drop = function(e, t, n) {
  return a.call(e, null == t || n ? 1 : t);
 }, k.compact = function(e) {
  return k.filter(e, k.identity);
 };
 var I = function(e, t, n) {
  return S(e, function(e) {
   k.isArray(e) ? t ? s.apply(n, e) : I(e, t, n) : n.push(e);
  }), n;
 };
 k.flatten = function(e, t) {
  return I(e, t, []);
 }, k.without = function(e) {
  return k.difference(e, a.call(arguments, 1));
 }, k.uniq = k.unique = function(e, t, n, i) {
  k.isFunction(t) && (i = n, n = t, t = !1);
  var o = n ? k.map(e, n, i) : e, r = [], s = [];
  return S(o, function(n, i) {
   (t ? i && s[s.length - 1] === n : k.contains(s, n)) || (s.push(n), r.push(e[i]));
  }), r;
 }, k.union = function() {
  return k.uniq(l.apply(i, arguments));
 }, k.intersection = function(e) {
  var t = a.call(arguments, 1);
  return k.filter(k.uniq(e), function(e) {
   return k.every(t, function(t) {
    return k.indexOf(t, e) >= 0;
   });
  });
 }, k.difference = function(e) {
  var t = l.apply(i, a.call(arguments, 1));
  return k.filter(e, function(e) {
   return !k.contains(t, e);
  });
 }, k.zip = function() {
  for (var e = a.call(arguments), t = k.max(k.pluck(e, "length")), n = Array(t), i = 0; t > i; i++) n[i] = k.pluck(e, "" + i);
  return n;
 }, k.object = function(e, t) {
  if (null == e) return {};
  for (var n = {}, i = 0, o = e.length; o > i; i++) t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
  return n;
 }, k.indexOf = function(e, t, n) {
  if (null == e) return -1;
  var i = 0, o = e.length;
  if (n) {
   if ("number" != typeof n) return i = k.sortedIndex(e, t), e[i] === t ? i : -1;
   i = 0 > n ? Math.max(0, o + n) : n;
  }
  if (y && e.indexOf === y) return e.indexOf(t, n);
  for (;o > i; i++) if (e[i] === t) return i;
  return -1;
 }, k.lastIndexOf = function(e, t, n) {
  if (null == e) return -1;
  var i = null != n;
  if (b && e.lastIndexOf === b) return i ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
  for (var o = i ? n : e.length; o--; ) if (e[o] === t) return o;
  return -1;
 }, k.range = function(e, t, n) {
  1 >= arguments.length && (t = e || 0, e = 0), n = arguments[2] || 1;
  for (var i = Math.max(Math.ceil((t - e) / n), 0), o = 0, r = Array(i); i > o; ) r[o++] = e, 
  e += n;
  return r;
 }, k.bind = function(e, t) {
  if (e.bind === C && C) return C.apply(e, a.call(arguments, 1));
  var n = a.call(arguments, 2);
  return function() {
   return e.apply(t, n.concat(a.call(arguments)));
  };
 }, k.partial = function(e) {
  var t = a.call(arguments, 1);
  return function() {
   return e.apply(this, t.concat(a.call(arguments)));
  };
 }, k.bindAll = function(e) {
  var t = a.call(arguments, 1);
  return 0 === t.length && (t = k.functions(e)), S(t, function(t) {
   e[t] = k.bind(e[t], e);
  }), e;
 }, k.memoize = function(e, t) {
  var n = {};
  return t || (t = k.identity), function() {
   var i = t.apply(this, arguments);
   return k.has(n, i) ? n[i] : n[i] = e.apply(this, arguments);
  };
 }, k.delay = function(e, t) {
  var n = a.call(arguments, 2);
  return setTimeout(function() {
   return e.apply(null, n);
  }, t);
 }, k.defer = function(e) {
  return k.delay.apply(k, [ e, 1 ].concat(a.call(arguments, 1)));
 }, k.throttle = function(e, t) {
  var n, i, o, r, s = 0, a = function() {
   s = new Date(), o = null, r = e.apply(n, i);
  };
  return function() {
   var l = new Date(), c = t - (l - s);
   return n = this, i = arguments, 0 >= c ? (clearTimeout(o), o = null, s = l, r = e.apply(n, i)) : o || (o = setTimeout(a, c)), 
   r;
  };
 }, k.debounce = function(e, t, n) {
  var i, o;
  return function() {
   var r = this, s = arguments, a = function() {
    i = null, n || (o = e.apply(r, s));
   }, l = n && !i;
   return clearTimeout(i), i = setTimeout(a, t), l && (o = e.apply(r, s)), o;
  };
 }, k.once = function(e) {
  var t, n = !1;
  return function() {
   return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t);
  };
 }, k.wrap = function(e, t) {
  return function() {
   var n = [ e ];
   return s.apply(n, arguments), t.apply(this, n);
  };
 }, k.compose = function() {
  var e = arguments;
  return function() {
   for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [ e[n].apply(this, t) ];
   return t[0];
  };
 }, k.after = function(e, t) {
  return 0 >= e ? t() : function() {
   return 1 > --e ? t.apply(this, arguments) : void 0;
  };
 }, k.keys = x || function(e) {
  if (e !== Object(e)) throw new TypeError("Invalid object");
  var t = [];
  for (var n in e) k.has(e, n) && (t[t.length] = n);
  return t;
 }, k.values = function(e) {
  var t = [];
  for (var n in e) k.has(e, n) && t.push(e[n]);
  return t;
 }, k.pairs = function(e) {
  var t = [];
  for (var n in e) k.has(e, n) && t.push([ n, e[n] ]);
  return t;
 }, k.invert = function(e) {
  var t = {};
  for (var n in e) k.has(e, n) && (t[e[n]] = n);
  return t;
 }, k.functions = k.methods = function(e) {
  var t = [];
  for (var n in e) k.isFunction(e[n]) && t.push(n);
  return t.sort();
 }, k.extend = function(e) {
  return S(a.call(arguments, 1), function(t) {
   if (t) for (var n in t) e[n] = t[n];
  }), e;
 }, k.pick = function(e) {
  var t = {}, n = l.apply(i, a.call(arguments, 1));
  return S(n, function(n) {
   n in e && (t[n] = e[n]);
  }), t;
 }, k.omit = function(e) {
  var t = {}, n = l.apply(i, a.call(arguments, 1));
  for (var o in e) k.contains(n, o) || (t[o] = e[o]);
  return t;
 }, k.defaults = function(e) {
  return S(a.call(arguments, 1), function(t) {
   if (t) for (var n in t) null == e[n] && (e[n] = t[n]);
  }), e;
 }, k.clone = function(e) {
  return k.isObject(e) ? k.isArray(e) ? e.slice() : k.extend({}, e) : e;
 }, k.tap = function(e, t) {
  return t(e), e;
 };
 var $ = function(e, t, n, i) {
  if (e === t) return 0 !== e || 1 / e == 1 / t;
  if (null == e || null == t) return e === t;
  e instanceof k && (e = e._wrapped), t instanceof k && (t = t._wrapped);
  var o = c.call(e);
  if (o != c.call(t)) return !1;
  switch (o) {
  case "[object String]":
   return e == t + "";

  case "[object Number]":
   return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;

  case "[object Date]":
  case "[object Boolean]":
   return +e == +t;

  case "[object RegExp]":
   return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase;
  }
  if ("object" != typeof e || "object" != typeof t) return !1;
  for (var r = n.length; r--; ) if (n[r] == e) return i[r] == t;
  n.push(e), i.push(t);
  var s = 0, a = !0;
  if ("[object Array]" == o) {
   if (s = e.length, a = s == t.length) for (;s-- && (a = $(e[s], t[s], n, i)); ) ;
  } else {
   var l = e.constructor, u = t.constructor;
   if (l !== u && !(k.isFunction(l) && l instanceof l && k.isFunction(u) && u instanceof u)) return !1;
   for (var d in e) if (k.has(e, d) && (s++, !(a = k.has(t, d) && $(e[d], t[d], n, i)))) break;
   if (a) {
    for (d in t) if (k.has(t, d) && !s--) break;
    a = !s;
   }
  }
  return n.pop(), i.pop(), a;
 };
 k.isEqual = function(e, t) {
  return $(e, t, [], []);
 }, k.isEmpty = function(e) {
  if (null == e) return !0;
  if (k.isArray(e) || k.isString(e)) return 0 === e.length;
  for (var t in e) if (k.has(e, t)) return !1;
  return !0;
 }, k.isElement = function(e) {
  return !(!e || 1 !== e.nodeType);
 }, k.isArray = w || function(e) {
  return "[object Array]" == c.call(e);
 }, k.isObject = function(e) {
  return e === Object(e);
 }, S([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(e) {
  k["is" + e] = function(t) {
   return c.call(t) == "[object " + e + "]";
  };
 }), k.isArguments(arguments) || (k.isArguments = function(e) {
  return !(!e || !k.has(e, "callee"));
 }), k.isFunction = function(e) {
  return "function" == typeof e;
 }, k.isFinite = function(e) {
  return isFinite(e) && !isNaN(parseFloat(e));
 }, k.isNaN = function(e) {
  return k.isNumber(e) && e != +e;
 }, k.isBoolean = function(e) {
  return e === !0 || e === !1 || "[object Boolean]" == c.call(e);
 }, k.isNull = function(e) {
  return null === e;
 }, k.isUndefined = function(e) {
  return void 0 === e;
 }, k.has = function(e, t) {
  return u.call(e, t);
 }, k.noConflict = function() {
  return e._ = t, this;
 }, k.identity = function(e) {
  return e;
 }, k.times = function(e, t, n) {
  for (var i = Array(e), o = 0; e > o; o++) i[o] = t.call(n, o);
  return i;
 }, k.random = function(e, t) {
  return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1));
 };
 var z = {
  escape: {
   "&": "&amp;",
   "<": "&lt;",
   ">": "&gt;",
   '"': "&quot;",
   "'": "&#x27;",
   "/": "&#x2F;"
  }
 };
 z.unescape = k.invert(z.escape);
 var N = {
  escape: RegExp("[" + k.keys(z.escape).join("") + "]", "g"),
  unescape: RegExp("(" + k.keys(z.unescape).join("|") + ")", "g")
 };
 k.each([ "escape", "unescape" ], function(e) {
  k[e] = function(t) {
   return null == t ? "" : ("" + t).replace(N[e], function(t) {
    return z[e][t];
   });
  };
 }), k.result = function(e, t) {
  if (null == e) return null;
  var n = e[t];
  return k.isFunction(n) ? n.call(e) : n;
 }, k.mixin = function(e) {
  S(k.functions(e), function(t) {
   var n = k[t] = e[t];
   k.prototype[t] = function() {
    var e = [ this._wrapped ];
    return s.apply(e, arguments), M.call(this, n.apply(k, e));
   };
  });
 };
 var R = 0;
 k.uniqueId = function(e) {
  var t = ++R + "";
  return e ? e + t : t;
 }, k.templateSettings = {
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  escape: /<%-([\s\S]+?)%>/g
 };
 var L = /(.)^/, A = {
  "'": "'",
  "\\": "\\",
  "\r": "r",
  "\n": "n",
  "	": "t",
  "\u2028": "u2028",
  "\u2029": "u2029"
 }, O = /\\|'|\r|\n|\t|\u2028|\u2029/g;
 k.template = function(e, t, n) {
  var i;
  n = k.defaults({}, n, k.templateSettings);
  var o = RegExp([ (n.escape || L).source, (n.interpolate || L).source, (n.evaluate || L).source ].join("|") + "|$", "g"), r = 0, s = "__p+='";
  e.replace(o, function(t, n, i, o, a) {
   return s += e.slice(r, a).replace(O, function(e) {
    return "\\" + A[e];
   }), n && (s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (s += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), 
   o && (s += "';\n" + o + "\n__p+='"), r = a + t.length, t;
  }), s += "';\n", n.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
  try {
   i = Function(n.variable || "obj", "_", s);
  } catch (a) {
   throw a.source = s, a;
  }
  if (t) return i(t, k);
  var l = function(e) {
   return i.call(this, e, k);
  };
  return l.source = "function(" + (n.variable || "obj") + "){\n" + s + "}", l;
 }, k.chain = function(e) {
  return k(e).chain();
 };
 var M = function(e) {
  return this._chain ? k(e).chain() : e;
 };
 k.mixin(k), S([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(e) {
  var t = i[e];
  k.prototype[e] = function() {
   var n = this._wrapped;
   return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], 
   M.call(this, n);
  };
 }), S([ "concat", "join", "slice" ], function(e) {
  var t = i[e];
  k.prototype[e] = function() {
   return M.call(this, t.apply(this._wrapped, arguments));
  };
 }), k.extend(k.prototype, {
  chain: function() {
   return this._chain = !0, this;
  },
  value: function() {
   return this._wrapped;
  }
 });
}.call(this), define("underscore", function(e) {
 return function() {
  var t;
  return t || e._;
 };
}(this));

var saveAs = saveAs || navigator.msSaveBlob && navigator.msSaveBlob.bind(navigator) || function(e) {
 try {
  var t = e.document, n = function() {
   return e.URL || e.webkitURL || e;
  }, i = e.URL || e.webkitURL || e, o = t.createElementNS("http://www.w3.org/1999/xhtml", "a"), r = "download" in o, s = function(n) {
   var i = t.createEvent("MouseEvents");
   i.initMouseEvent("click", !0, !1, e, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n.dispatchEvent(i);
  }, a = e.webkitRequestFileSystem, l = e.requestFileSystem || a || e.mozRequestFileSystem, c = function(t) {
   (e.setImmediate || e.setTimeout)(function() {
    throw t;
   }, 0);
  }, u = "application/octet-stream", d = 0, p = [], f = function() {
   for (var e = p.length; e--; ) {
    var t = p[e];
    "string" == typeof t ? i.revokeObjectURL(t) : t.remove();
   }
   p.length = 0;
  }, h = function(e, t, n) {
   t = [].concat(t);
   for (var i = t.length; i--; ) {
    var o = e["on" + t[i]];
    if ("function" == typeof o) try {
     o.call(e, n || e);
    } catch (r) {
     c(r);
    }
   }
  }, g = function(t, i) {
   var c, f, g, m = this, v = t.type, y = !1, b = function() {
    var e = n().createObjectURL(t);
    return p.push(e), e;
   }, w = function() {
    h(m, "writestart progress write writeend".split(" "));
   }, x = function() {
    (y || !c) && (c = b(t)), f && (f.location.href = c), m.readyState = m.DONE, w();
   }, C = function(e) {
    return function() {
     return m.readyState !== m.DONE ? e.apply(this, arguments) : void 0;
    };
   }, k = {
    create: !0,
    exclusive: !1
   };
   return m.readyState = m.INIT, i || (i = "download"), r ? (c = b(t), o.href = c, 
   o.download = i, s(o), m.readyState = m.DONE, w(), void 0) : (e.chrome && v && v !== u && (g = t.slice || t.webkitSlice, 
   t = g.call(t, 0, t.size, u), y = !0), a && "download" !== i && (i += ".download"), 
   f = v === u || a ? e : e.open(), l ? (d += t.size, l(e.TEMPORARY, d, C(function(e) {
    e.root.getDirectory("saved", k, C(function(e) {
     var n = function() {
      e.getFile(i, k, C(function(e) {
       e.createWriter(C(function(n) {
        n.onwriteend = function(t) {
         f.location.href = e.toURL(), p.push(e), m.readyState = m.DONE, h(m, "writeend", t);
        }, n.onerror = function() {
         var e = n.error;
         e.code !== e.ABORT_ERR && x();
        }, "writestart progress write abort".split(" ").forEach(function(e) {
         n["on" + e] = m["on" + e];
        }), n.write(t), m.abort = function() {
         n.abort(), m.readyState = m.DONE;
        }, m.readyState = m.WRITING;
       }), x);
      }), x);
     };
     e.getFile(i, {
      create: !1
     }, C(function(e) {
      e.remove(), n();
     }), C(function(e) {
      e.code === e.NOT_FOUND_ERR ? n() : x();
     }));
    }), x);
   }), x), void 0) : (x(), void 0));
  }, m = g.prototype, v = function(e, t) {
   return new g(e, t);
  };
  return m.abort = function() {
   var e = this;
   e.readyState = e.DONE, h(e, "abort");
  }, m.readyState = m.INIT = 0, m.WRITING = 1, m.DONE = 2, m.error = m.onwritestart = m.onprogress = m.onwrite = m.onabort = m.onerror = m.onwriteend = null, 
  e.addEventListener("unload", f, !1), v;
 } catch (y) {
  return void 0;
 }
}(self);

define("libs/FileSaver", function() {}), define("utils", [ "jquery", "underscore", "libs/FileSaver" ], function(e, t) {
 function n(n) {
  return t.isString(n) ? e(n) : n;
 }
 function i(e, t) {
  void 0 !== t && (e.stop(!0, !0).addClass("error").delay(1e3).switchClass("error"), 
  t.stopPropagation());
 }
 var o = {};
 o.getURLParameter = function(e) {
  var t = RegExp(e + "=(.+?)(&|$)");
  try {
   return decodeURIComponent(t.exec(location.search)[1]);
  } catch (n) {
   return void 0;
  }
 }, o.getInputValue = function(e) {
  return e = n(e), e.val();
 }, o.setInputValue = function(e, t) {
  e = n(e), e.val(t);
 }, o.getInputTextValue = function(e, t, r) {
  e = n(e);
  var s = e.val();
  return void 0 === s ? (i(e, t), void 0) : (s = o.trim(s), 0 === s.length || void 0 !== r && !s.match(r) ? (i(e, t), 
  void 0) : s);
 }, o.getInputIntValue = function(e, t, r, s) {
  e = n(e);
  var a = o.getInputTextValue(e, t);
  return void 0 === a ? void 0 : (a = parseInt(a), 0/0 === a || void 0 !== r && r > a || void 0 !== s && a > s ? (i(e, t), 
  void 0) : a);
 }, o.getInputRegExpValue = function(e, t) {
  e = n(e);
  var r = o.getInputTextValue(e, t);
  if (void 0 === r) return void 0;
  try {
   RegExp(r);
  } catch (s) {
   return i(e, t), void 0;
  }
  return r;
 }, o.getInputChecked = function(e) {
  return e = n(e), e.prop("checked");
 }, o.setInputChecked = function(e, t) {
  e = n(e), e.prop("checked", t);
 }, o.getInputRadio = function(t) {
  return e("input:radio[name=" + t + "]:checked").prop("value");
 }, o.setInputRadio = function(t, n) {
  e("input:radio[name=" + t + "][value=" + n + "]").prop("checked", !0);
 }, o.resetModalInputs = function() {
  e(".modal input[type=text]:not([disabled]), .modal input[type=password]").val("");
 }, o.trim = function(t) {
  return e.trim(t);
 }, o.slugify = function(e) {
  return e.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
 }, o.checkUrl = function(e, t) {
  return e ? (0 !== e.indexOf("http") && (e = "http://" + e), t && -1 === e.indexOf("/", e.length - 1) && (e += "/"), 
  e) : e;
 }, o.popupWindow = function(e, t, n, i) {
  var o = screen.width / 2 - n / 2, r = screen.height / 2 - i / 2;
  return window.open(e, t, [ "toolbar=no, ", "location=no, ", "directories=no, ", "status=no, ", "menubar=no, ", "scrollbars=no, ", "resizable=no, ", "copyhistory=no, ", "width=" + n + ", ", "height=" + i + ", ", "top=" + r + ", ", "left=" + o ].join(""));
 }, o.saveAs = function(e, t) {
  if (void 0 !== saveAs) {
   var n = new Blob([ e ], {
    type: "text/plain;charset=utf-8"
   });
   saveAs(n, t);
  } else {
   var i = "data:application/octet-stream;base64," + o.encodeBase64(e);
   window.open(i, "file");
  }
 }, o.randomString = function() {
  return t.random(4294967296).toString(36);
 }, o.updateCurrentTime = function() {
  o.currentTime = new Date().getTime();
 }, o.updateCurrentTime(), o.storeAttributes = function(e) {
  var n = e.syncIndex || e.publishIndex;
  e = t.omit(e, "syncIndex", "publishIndex"), e.provider = e.provider.providerId, 
  localStorage[n] = JSON.stringify(e);
 }, o.retrieveIndexArray = function(e) {
  try {
   return t.compact(localStorage[e].split(";"));
  } catch (n) {
   return localStorage[e] = ";", [];
  }
 }, o.appendIndexToArray = function(e, t) {
  localStorage[e] += t + ";";
 }, o.removeIndexFromArray = function(e, t) {
  localStorage[e] = localStorage[e].replace(";" + t + ";", ";");
 }, o.retrieveIgnoreError = function(e) {
  try {
   return JSON.parse(localStorage[e]);
  } catch (t) {
   return void 0;
  }
 }, o.encodeBase64 = function(e) {
  if (0 === e.length) return "";
  var t, n, i = [], o = 0;
  for (e = encodeURI(e), t = e.length; t > o; ) n = e[o], o += 1, "%" !== n ? i.push(n.charCodeAt(0)) : (n = e[o] + e[o + 1], 
  i.push(parseInt(n, 16)), o += 2);
  var r, s, a = "=", l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = [], u = i.length - i.length % 3;
  for (r = 0; u > r; r += 3) s = i[r] << 16 | i[r + 1] << 8 | i[r + 2], c.push(l.charAt(s >> 18)), 
  c.push(l.charAt(63 & s >> 12)), c.push(l.charAt(63 & s >> 6)), c.push(l.charAt(63 & s));
  switch (i.length - u) {
  case 1:
   s = i[r] << 16, c.push(l.charAt(s >> 18) + l.charAt(63 & s >> 12) + a + a);
   break;

  case 2:
   s = i[r] << 16 | i[r + 1] << 8, c.push(l.charAt(s >> 18) + l.charAt(63 & s >> 12) + l.charAt(63 & s >> 6) + a);
  }
  return c.join("");
 };
 var r = [ 0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117 ];
 return o.crc32 = function(e) {
  for (var t = 0, n = -1, i = 0; e.length > i; i++) t = 255 & (n ^ e.charCodeAt(i)), 
  n = n >>> 8 ^ r[t];
  return n = -1 ^ n, 0 > n && (n = 4294967295 + n + 1), n.toString(16);
 }, o;
});

var MAIN_URL = "http://benweet.github.io/stackedit/", GOOGLE_ANALYTICS_ACCOUNT_ID = "UA-39556145-1", GOOGLE_API_KEY = "AIzaSyAeCU8CGcSkn0z9js6iocHuPBX4f_mMWkw", GOOGLE_SCOPES = [ "https://www.googleapis.com/auth/drive.install", "https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/blogger" ], GOOGLE_DRIVE_APP_ID = "241271498917", DROPBOX_APP_KEY = "lq6mwopab8wskas", DROPBOX_APP_SECRET = "851fgnucpezy84t", BITLY_ACCESS_TOKEN = "317e033bfd48cf31155a68a536b1860013b09c4c", DEFAULT_FILE_TITLE = "Title", GDRIVE_DEFAULT_FILE_TITLE = "New Markdown document", CHECK_ONLINE_PERIOD = 12e4, AJAX_TIMEOUT = 3e4, ASYNC_TASK_DEFAULT_TIMEOUT = 6e4, ASYNC_TASK_LONG_TIMEOUT = 18e4, SYNC_PERIOD = 18e4, USER_IDLE_THRESHOLD = 3e5, TEMPORARY_FILE_INDEX = "file.tempIndex", WELCOME_DOCUMENT_TITLE = "Welcome document", DOWNLOAD_PROXY_URL = "http://stackedit-download-proxy.herokuapp.com/", WORDPRESS_CLIENT_ID = "3185", WORDPRESS_PROXY_URL = "http://stackedit-wordpress-proxy.herokuapp.com/", SSH_PROXY_URL = "http://stackedit-ssh-proxy.herokuapp.com/", delayedFunction = void 0, BASE_URL = "http://localhost/stackedit/", GOOGLE_CLIENT_ID = "241271498917-lev37kef013q85avc91am1gccg5g8lrb.apps.googleusercontent.com", GITHUB_CLIENT_ID = "e47fef6055344579799d", GATEKEEPER_URL = "http://stackedit-gatekeeper-localhost.herokuapp.com/", TUMBLR_PROXY_URL = "http://stackedit-tumblr-proxy-local.herokuapp.com/";

0 === location.hostname.indexOf("benweet.github.io") && (BASE_URL = MAIN_URL, GOOGLE_CLIENT_ID = "241271498917-jpto9lls9fqnem1e4h6ppds9uob8rpvu.apps.googleusercontent.com", 
GITHUB_CLIENT_ID = "fa0d09514da8377ee32e", GATEKEEPER_URL = "http://stackedit-gatekeeper.herokuapp.com/", 
TUMBLR_PROXY_URL = "http://stackedit-tumblr-proxy.herokuapp.com/");

var THEME_LIST = {
 "": "Default",
 "blue-gray": "Blue-Gray",
 night: "Night"
};

define("config", function() {}), define("settings", [ "underscore", "config" ], function(e) {
 var t = {
  layoutOrientation: "horizontal",
  lazyRendering: !0,
  editorFontSize: 14,
  defaultContent: "\n\n\n> Written with [StackEdit](" + MAIN_URL + ").",
  commitMsg: "Published with " + MAIN_URL,
  template: [ "<!DOCTYPE html>\n", "<html>\n", "<head>\n", '<meta charset="utf-8">\n', "<title><%= documentTitle %></title>\n", '<link rel="stylesheet" href="', MAIN_URL, 'css/main-min.css" />\n', "</head>\n", "<body><%= documentHTML %></body>\n", "</html>" ].join(""),
  sshProxy: SSH_PROXY_URL,
  extensionSettings: {}
 };
 try {
  e.extend(t, JSON.parse(localStorage.settings));
 } catch (n) {}
 return t;
}), define("text", [ "module" ], function(e) {
 var t, n, i, o, r = [ "Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0" ], s = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, a = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im, l = "undefined" != typeof location && location.href, c = l && location.protocol && location.protocol.replace(/\:/, ""), u = l && location.hostname, d = l && (location.port || void 0), p = [], f = e.config && e.config() || {};
 return t = {
  version: "2.0.6",
  strip: function(e) {
   if (e) {
    e = e.replace(s, "");
    var t = e.match(a);
    t && (e = t[1]);
   } else e = "";
   return e;
  },
  jsEscape: function(e) {
   return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029");
  },
  createXhr: f.createXhr || function() {
   var e, t, n;
   if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest();
   if ("undefined" != typeof ActiveXObject) for (t = 0; 3 > t; t += 1) {
    n = r[t];
    try {
     e = new ActiveXObject(n);
    } catch (i) {}
    if (e) {
     r = [ n ];
     break;
    }
   }
   return e;
  },
  parseName: function(e) {
   var t, n, i, o = !1, r = e.indexOf("."), s = 0 === e.indexOf("./") || 0 === e.indexOf("../");
   return -1 !== r && (!s || r > 1) ? (t = e.substring(0, r), n = e.substring(r + 1, e.length)) : t = e, 
   i = n || t, r = i.indexOf("!"), -1 !== r && (o = "strip" === i.substring(r + 1), 
   i = i.substring(0, r), n ? n = i : t = i), {
    moduleName: t,
    ext: n,
    strip: o
   };
  },
  xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
  useXhr: function(e, n, i, o) {
   var r, s, a, l = t.xdRegExp.exec(e);
   return l ? (r = l[2], s = l[3], s = s.split(":"), a = s[1], s = s[0], !(r && r !== n || s && s.toLowerCase() !== i.toLowerCase() || (a || s) && a !== o)) : !0;
  },
  finishLoad: function(e, n, i, o) {
   i = n ? t.strip(i) : i, f.isBuild && (p[e] = i), o(i);
  },
  load: function(e, n, i, o) {
   if (o.isBuild && !o.inlineText) return i(), void 0;
   f.isBuild = o.isBuild;
   var r = t.parseName(e), s = r.moduleName + (r.ext ? "." + r.ext : ""), a = n.toUrl(s), p = f.useXhr || t.useXhr;
   !l || p(a, c, u, d) ? t.get(a, function(n) {
    t.finishLoad(e, r.strip, n, i);
   }, function(e) {
    i.error && i.error(e);
   }) : n([ s ], function(e) {
    t.finishLoad(r.moduleName + "." + r.ext, r.strip, e, i);
   });
  },
  write: function(e, n, i) {
   if (p.hasOwnProperty(n)) {
    var o = t.jsEscape(p[n]);
    i.asModule(e + "!" + n, "define(function () { return '" + o + "';});\n");
   }
  },
  writeFile: function(e, n, i, o, r) {
   var s = t.parseName(n), a = s.ext ? "." + s.ext : "", l = s.moduleName + a, c = i.toUrl(s.moduleName + a) + ".js";
   t.load(l, i, function() {
    var n = function(e) {
     return o(c, e);
    };
    n.asModule = function(e, t) {
     return o.asModule(e, c, t);
    }, t.write(e, l, n, r);
   }, r);
  }
 }, "node" === f.env || !f.env && "undefined" != typeof process && process.versions && process.versions.node ? (n = require.nodeRequire("fs"), 
 t.get = function(e, t) {
  var i = n.readFileSync(e, "utf8");
  0 === i.indexOf("﻿") && (i = i.substring(1)), t(i);
 }) : "xhr" === f.env || !f.env && t.createXhr() ? t.get = function(e, n, i, o) {
  var r, s = t.createXhr();
  if (s.open("GET", e, !0), o) for (r in o) o.hasOwnProperty(r) && s.setRequestHeader(r.toLowerCase(), o[r]);
  f.onXhr && f.onXhr(s, e), s.onreadystatechange = function() {
   var t, o;
   4 === s.readyState && (t = s.status, t > 399 && 600 > t ? (o = Error(e + " HTTP status: " + t), 
   o.xhr = s, i(o)) : n(s.responseText), f.onXhrComplete && f.onXhrComplete(s, e));
  }, s.send(null);
 } : "rhino" === f.env || !f.env && "undefined" != typeof Packages && "undefined" != typeof java ? t.get = function(e, t) {
  var n, i, o = "utf-8", r = new java.io.File(e), s = java.lang.System.getProperty("line.separator"), a = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(r), o)), l = "";
  try {
   for (n = new java.lang.StringBuffer(), i = a.readLine(), i && i.length() && 65279 === i.charAt(0) && (i = i.substring(1)), 
   n.append(i); null !== (i = a.readLine()); ) n.append(s), n.append(i);
   l = "" + n + "";
  } finally {
   a.close();
  }
  t(l);
 } : ("xpconnect" === f.env || !f.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (i = Components.classes, 
 o = Components.interfaces, Components.utils["import"]("resource://gre/modules/FileUtils.jsm"), 
 t.get = function(e, t) {
  var n, r, s = {}, a = new FileUtils.File(e);
  try {
   n = i["@mozilla.org/network/file-input-stream;1"].createInstance(o.nsIFileInputStream), 
   n.init(a, 1, 0, !1), r = i["@mozilla.org/intl/converter-input-stream;1"].createInstance(o.nsIConverterInputStream), 
   r.init(n, "utf-8", n.available(), o.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER), 
   r.readString(n.available(), s), r.close(), n.close(), t(s.value);
  } catch (l) {
   throw Error((a && a.path || "") + ": " + l);
  }
 }), t;
}), define("text!html/settingsExtensionsAccordion.html", [], function() {
 return '<div class="accordion-group">\r\n	<div class="accordion-heading">\r\n		<label class="checkbox pull-right"> <input\r\n			id="input-enable-extension-<%= extensionId %>" type="checkbox"<%\r\n			if(!optional) print(\'disabled\') %>> enabled\r\n		</label> <a data-toggle="collapse"\r\n			data-parent="#accordion-extensions" class="accordion-toggle"\r\n			href="#collapse-<%= extensionId %>"> <%= extensionName %> </a>\r\n	</div>\r\n	<div id="collapse-<%= extensionId %>" class="accordion-body collapse">\r\n		<div class="accordion-inner"><%= settingsBloc %></div>\r\n	</div>\r\n</div>\r\n';
}), define("extensions/googleAnalytics", [ "jquery", "underscore", "settings", "config" ], function(e, t, n) {
 var i = {
  extensionId: "googleAnalytics",
  extensionName: "Google Analytics",
  optional: !0,
  settingsBloc: "<p>Sends anonymous statistics about usage and errors to help improve StackEdit.</p>"
 }, o = !1, r = !1;
 window._gaq = [];
 var s = function() {
  if (o === !1 && r === !1) {
   var t = "/ga.js";
   location.search.match(/(\?|&)console/) && (t = "/u/ga_debug.js"), e.ajax({
    url: "http://www.google-analytics.com" + t,
    dataType: "script"
   }).done(function() {
    o = !0;
   });
  }
 };
 i.onReady = function() {
  _gaq.push([ "_setAccount", GOOGLE_ANALYTICS_ACCOUNT_ID ]), _gaq.push([ "_trackPageview" ]), 
  _gaq.push([ "_trackEvent", "Settings", "layoutOrientation", "" + n.layoutOrientation ]), 
  _gaq.push([ "_trackEvent", "Settings", "lazyRendering", "" + n.lazyRendering ]), 
  _gaq.push([ "_trackEvent", "Settings", "editorFontSize", "" + n.editorFontSize ]), 
  _gaq.push([ "_trackEvent", "Settings", "defaultContent backlink", "" + (-1 !== n.defaultContent.indexOf(MAIN_URL)) ]), 
  _gaq.push([ "_trackEvent", "Settings", "commitMsg backlink", "" + (-1 !== n.commitMsg.indexOf(MAIN_URL)) ]), 
  _gaq.push([ "_trackEvent", "Settings", "sshProxy unchanged", "" + (n.sshProxy == SSH_PROXY_URL) ]), 
  t.each(n.extensionSettings, function(e, t) {
   _gaq.push([ "_trackEvent", "Extensions", t + " enabled", "" + (e.enabled === !0) ]);
  }), window.onerror = function(e, t, n) {
   _gaq.push([ "_trackEvent", "Error", t, e + " (" + n + ")" ]);
  }, s();
 }, i.onOfflineChanged = function(e) {
  r = e, s();
 };
 var a = 0;
 return i.onSyncRunning = function(e) {
  e === !0 && (a = new Date().getTime());
 }, i.onPublishRunning = function(e) {
  e === !0 && (a = new Date().getTime());
 }, i.onSyncSuccess = function() {
  var e = new Date().getTime();
  _gaq.push([ "_trackTiming", "Sync", "SyncTime", e - a ]);
 }, i.onSyncImportSuccess = function(e, t) {
  _gaq.push([ "_trackEvent", "Sync", "SyncImport" ]), _gaq.push([ "_trackEvent", "Sync", "SyncImport provider", t.providerId ]);
 }, i.onSyncExportSuccess = function(e, t) {
  _gaq.push([ "_trackEvent", "Sync", "SyncExport" ]), _gaq.push([ "_trackEvent", "Sync", "SyncExport provider", t.provider.providerId ]);
 }, i.onPublishSuccess = function(e) {
  var n = new Date().getTime();
  _gaq.push([ "_trackTiming", "Publish", "PublishSuccess", n - a ]), t.each(e.publishLocations, function(e) {
   _gaq.push([ "_trackEvent", "Publish", "PublishSuccess provider", e.provider.providerId ]);
  });
 }, i.onNewPublishSuccess = function(e, t) {
  _gaq.push([ "_trackEvent", "Publish", "NewPublish provider", t.provider.providerId ]);
 }, i;
}), define("text!html/buttonSync.html", [], function() {
 return '<button class="btn" title="Synchronize all documents">\r\n	<i class="icon-refresh"></i>\r\n</button>';
}), define("text!html/buttonSyncSettingsBloc.html", [], function() {
 return '<p>Adds a "Synchronize documents" button in the navigation bar.</p>\r\n<div class="form-horizontal">\r\n	<div class="control-group">\r\n		<label class="control-label" for="input-sync-period">Sync\r\n			period (0: manual)</label>\r\n		<div class="controls">\r\n			<input type="text" id="input-sync-period" class="input-mini"\r\n				placeholder="180000"> <span class="help-inline">ms</span>\r\n		</div>\r\n	</div>\r\n</div>';
}), define("extensions/buttonSync", [ "jquery", "underscore", "utils", "text!html/buttonSync.html", "text!html/buttonSyncSettingsBloc.html" ], function(e, t, n, i, o) {
 var r = {
  extensionId: "buttonSync",
  extensionName: 'Button "Synchronize"',
  defaultConfig: {
   syncPeriod: 18e4
  },
  settingsBloc: o
 };
 r.onLoadSettings = function() {
  n.setInputValue("#input-sync-period", r.config.syncPeriod);
 }, r.onSaveSettings = function(e, t) {
  e.syncPeriod = n.getInputIntValue("#input-sync-period", t, 0);
 };
 var s = void 0, a = !1, l = !1, c = !1, u = function() {
  void 0 !== s && (a === !0 || l === !1 || c ? s.addClass("disabled") : s.removeClass("disabled"));
 }, d = void 0;
 r.onSynchronizerCreated = function(e) {
  d = e;
 };
 var p = 0;
 r.onPeriodicRun = function() {
  viewerMode === !0 || !r.config.syncPeriod || p + r.config.syncPeriod > n.currentTime || d.sync() === !0 && (p = n.currentTime);
 }, r.onCreateButton = function() {
  return s = e(i).click(function() {
   e(this).hasClass("disabled") || d.sync();
  });
 }, r.onReady = u, r.onSyncRunning = function(e) {
  a = e, l = !0, u();
 }, r.onSyncSuccess = function() {
  l = !1, u();
 }, r.onOfflineChanged = function(e) {
  c = e, u();
 };
 var f = function(e) {
  0 !== t.size(e.syncLocations) && (l = !0, u());
 };
 return r.onContentChanged = f, r.onTitleChanged = f, r;
}), define("text!html/buttonPublish.html", [], function() {
 return '<button class="btn" title="Publish this document">\r\n	<i class="icon-share"></i>\r\n</button>';
}), define("extensions/buttonPublish", [ "jquery", "underscore", "text!html/buttonPublish.html" ], function(e, t, n) {
 function i() {
  void 0 !== r && (a === !0 || l === !1 || c === !0 ? r.addClass("disabled") : r.removeClass("disabled"));
 }
 var o = {
  extensionId: "buttonPublish",
  extensionName: 'Button "Publish"',
  settingsBloc: '<p>Adds a "Publish document" button in the navigation bar.</p>'
 }, r = void 0, s = void 0, a = !1, l = !1, c = !1, u = void 0;
 o.onPublisherCreated = function(e) {
  u = e;
 }, o.onCreateButton = function() {
  return r = e(n).click(function() {
   e(this).hasClass("disabled") || u.publish();
  });
 }, o.onPublishRunning = function(e) {
  a = e, i();
 }, o.onOfflineChanged = function(e) {
  c = e, i();
 };
 var d = function() {
  l = 0 === t.size(s.publishLocations) ? !1 : !0, i();
 };
 return o.onFileSelected = function(e) {
  s = e, d();
 }, o.onPublishRemoved = d, o.onNewPublishSuccess = d, o;
}), define("text!html/buttonShare.html", [], function() {
 return '<button class="btn dropdown-toggle" data-toggle="dropdown"\r\n	title="Share this document">\r\n	<i class="icon-link"></i>\r\n</button>\r\n<div id="link-container" class="dropdown-menu pull-right">\r\n	<h3 class="muted">Sharing</h3>\r\n	<div class="link-list"></div>\r\n	<p class="no-link">To share this document you need first to <a\r\n		href="#" class="action-publish-gist">publish it as a Gist</a> in\r\n		Markdown format.\r\n	</p>\r\n	<blockquote class="muted">\r\n		<b>NOTE:</b> You can open any URL within StackEdit using <a\r\n			href="viewer.html?url=https://raw.github.com/benweet/stackedit/master/README.md"\r\n			title="Sharing example">viewer.html?url=...</a>\r\n	</blockquote>\r\n</div>\r\n';
}), define("text!html/buttonShareLocation.html", [], function() {
 return '<div class="input-prepend">\r\n	<a href="<%= link %>" class="add-on" title="Sharing location"><i\r\n		class="icon-link"></i></a> <input class="span2" type="text"\r\n		value="<%= link %>" readonly />\r\n</div>\r\n';
}), define("extensions/buttonShare", [ "jquery", "underscore", "text!html/buttonShare.html", "text!html/buttonShareLocation.html" ], function(e, t, n, i) {
 var o = {
  extensionId: "buttonShare",
  extensionName: 'Button "Share"',
  optional: !0,
  settingsBloc: '<p>Adds a "Share document" button in the navigation bar.</p>'
 };
 o.onCreateButton = function() {
  return e(n);
 };
 var r = void 0, s = function(n) {
  if (void 0 === n || n === r) {
   var o = e("#link-container .link-list").empty();
   e("#link-container .no-link").show();
   var s = t.values(r.publishLocations);
   t.each(s, function(n) {
    if (n.sharingLink) {
     var r = e(t.template(i, {
      link: n.sharingLink
     }));
     r.click(function(e) {
      e.stopPropagation();
     }), o.append(r), e("#link-container .no-link").hide();
    }
   });
  }
 };
 return o.onFileSelected = function(e) {
  r = e, s(e);
 }, o.onNewPublishSuccess = s, o.onPublishRemoved = s, o;
}), define("text!html/buttonStat.html", [], function() {
 return '<button class="btn dropdown-toggle" data-toggle="dropdown"\r\n	title="Document\'s statistics">\r\n	<i class="icon-stat"></i>\r\n</button>\r\n<div id="statistics-container" class="dropdown-menu pull-right">\r\n	<h3 class="muted">Statistics</h3>\r\n	<div class="stat">\r\n		<div>\r\n			<%= name1 %>: <span id="span-stat-value1"></span>\r\n		</div>\r\n		<div>\r\n			<%= name2 %>: <span id="span-stat-value2"></span>\r\n		</div>\r\n		<div>\r\n			<%= name3 %>: <span id="span-stat-value3"></span>\r\n		</div>\r\n	</div>\r\n</div>\r\n';
}), define("text!html/buttonStatSettingsBloc.html", [], function() {
 return '<p>Adds a "Document\'s statistics" button in the navigation bar.</p>\r\n<div class="form-horizontal">\r\n	<div class="control-group form-inline">\r\n		<label class="label-text" for="input-stat-name1">Title</label> <input\r\n			id="input-stat-name1" type="text" class="input-small"> <label\r\n			class="label-text" for="input-stat-value1">RegExp</label> <input\r\n			id="input-stat-value1" type="text" class="span2">\r\n	</div>\r\n	<div class="control-group form-inline">\r\n		<label class="label-text" for="input-stat-name2">Title</label> <input\r\n			id="input-stat-name2" type="text" class="input-small"> <label\r\n			class="label-text" for="input-stat-value2">RegExp</label> <input\r\n			id="input-stat-value2" type="text" class="span2">\r\n	</div>\r\n	<div class="control-group form-inline">\r\n		<label class="label-text" for="input-stat-name3">Title</label> <input\r\n			id="input-stat-name3" type="text" class="input-small"> <label\r\n			class="label-text" for="input-stat-value3">RegExp</label> <input\r\n			id="input-stat-value3" type="text" class="span2">\r\n	</div>\r\n</div>\r\n';
}), define("extensions/buttonStat", [ "jquery", "underscore", "utils", "text!html/buttonStat.html", "text!html/buttonStatSettingsBloc.html" ], function(e, t, n, i, o) {
 var r = {
  extensionId: "buttonStat",
  extensionName: 'Button "Statistics"',
  optional: !0,
  defaultConfig: {
   name1: "Characters",
   value1: "\\S",
   name2: "Words",
   value2: "\\S+",
   name3: "Paragraphs",
   value3: "\\S.*"
  },
  settingsBloc: o
 };
 return r.onLoadSettings = function() {
  t.each([ 1, 2, 3 ], function(e) {
   n.setInputValue("#input-stat-name" + e, r.config["name" + e]), n.setInputValue("#input-stat-value" + e, r.config["value" + e]);
  });
 }, r.onSaveSettings = function(e, i) {
  t.each([ 1, 2, 3 ], function(t) {
   e["name" + t] = n.getInputTextValue("#input-stat-name" + t, i), e["value" + t] = n.getInputRegExpValue("#input-stat-value" + t, i);
  });
 }, r.onCreateButton = function() {
  return e(t.template(i, r.config));
 }, r.onPreviewFinished = function() {
  var t = e("#wmd-preview").clone().find("script").remove().end().text();
  e("#span-stat-value1").text((t.match(RegExp(r.config.value1, "g")) || []).length), 
  e("#span-stat-value2").text((t.match(RegExp(r.config.value2, "g")) || []).length), 
  e("#span-stat-value3").text((t.match(RegExp(r.config.value3, "g")) || []).length);
 }, r;
}), define("text!html/dialogAbout.html", [], function() {
 return '\r\n<dl>\r\n	<dt>About:</dt>\r\n	<dd>\r\n		<a target="_blank" href="https://github.com/benweet/stackedit/">GitHub\r\n			project</a> / <a target="_blank"\r\n			href="https://github.com/benweet/stackedit/issues">issue tracker</a>\r\n	</dd>\r\n	<dd>\r\n		<a target="_blank"\r\n			href="https://chrome.google.com/webstore/detail/stackedit/iiooodelglhkcpgbajoejffhijaclcdg">Chrome\r\n			app</a> (thanks for your review!)\r\n	</dd>\r\n	<dd>\r\n		<a target="_blank" href="https://twitter.com/stackedit/">Follow on\r\n			Twitter</a>\r\n	</dd>\r\n	<dd>\r\n		<a target="_blank" href="https://www.facebook.com/stackedit/">Follow\r\n			on Facebook</a>\r\n	</dd>\r\n	<dd>\r\n		<a target="_blank"\r\n			href="https://plus.google.com/110816046787593496375" rel="publisher">Follow\r\n			on Google+</a>\r\n	</dd>\r\n</dl>\r\n<dl>\r\n	<dt>Developers:</dt>\r\n	<dd>\r\n		<a target="_blank" href="http://www.benoitschweblin.com">Benoit\r\n			Schweblin</a><br />\r\n	</dd>\r\n	<dd>Pete Eigel (contributor)</dd>\r\n</dl>\r\n<dl>\r\n	<dt>Credit:</dt>\r\n	<% _.each(libraries, function(url, name) { %>\r\n	<dd>\r\n		<a target="_blank" href="<%= url %>"><%= name %></a>\r\n	</dd>\r\n	<% }); %>\r\n</dl>\r\n<dl>\r\n	<dt>Related projects:</dt>\r\n	<% _.each(projects, function(url, name) { %>\r\n	<dd>\r\n		<a target="_blank" href="<%= url %>"><%= name %></a>\r\n	</dd>\r\n	<% }); %>\r\n</dl>\r\n<p>Copyright 2013 <a target="_blank"\r\n	href="http://www.benoitschweblin.com">Benoit Schweblin</a><br />\r\n	Licensed under an <a target="_blank"\r\n	href="http://www.apache.org/licenses/LICENSE-2.0">Apache License</a></p>\r\n';
}), define("extensions/dialogAbout", [ "jquery", "underscore", "text!html/dialogAbout.html" ], function(e, t, n) {
 var i = {
  extensionId: "dialogAbout",
  extensionName: 'Dialog "About"',
  settingsBloc: '<p>Prints the content of the "About" dialog box.</p>'
 }, o = {
  Bootstrap: "http://twitter.github.io/bootstrap/",
  "CSS Browser Selector": "https://github.com/rafaelp/css_browser_selector/",
  "Dropbox-js": "https://github.com/dropbox/dropbox-js",
  "FileSaver.js": "https://github.com/eligrey/FileSaver.js/",
  Gatekeeper: "https://github.com/prose/gatekeeper",
  "Github.js": "https://github.com/michael/github",
  Glyphicons: "http://glyphicons.com/",
  jGrowl: "https://github.com/stanlemon/jGrowl/",
  jQuery: "http://jquery.com/",
  "jQuery Mouse Wheel Plugin": "https://github.com/brandonaaron/jquery-mousewheel",
  Mousetrap: "http://craig.is/killing/mice",
  PageDown: "https://code.google.com/p/pagedown/",
  "Pagedown-extra": "https://github.com/jmcmanus/pagedown-extra/",
  Prettify: "https://code.google.com/p/google-code-prettify/",
  RequireJS: "http://requirejs.org/",
  "stacktrace.js": "http://stacktracejs.com/",
  "UI Layout": "http://layout.jquery-dev.net/",
  "Underscore.js": "http://underscorejs.org/",
  waitForImages: "https://github.com/alexanderdickson/waitForImages"
 }, r = {
  "StackEdit Download Proxy": "https://github.com/benweet/stackedit-download-proxy",
  "StackEdit SSH Proxy": "https://github.com/benweet/stackedit-ssh-proxy",
  "StackEdit Tumblr Proxy": "https://github.com/benweet/stackedit-tumblr-proxy",
  "StackEdit WordPress Proxy": "https://github.com/benweet/stackedit-wordpress-proxy"
 };
 return i.onReady = function() {
  e("#modal-about .modal-body").html(t.template(n, {
   libraries: o,
   projects: r
  }));
 }, i;
}), define("text!html/dialogManagePublicationLocation.html", [], function() {
 return '<div class="input-prepend input-append">\r\n	<span class="add-on" title="<%= provider.providerName %>"> <i\r\n		class="icon-<%= provider.providerId %>"></i>\r\n	</span> <input class="span5" type="text" value="<%= publishDesc %>" disabled />\r\n</div>\r\n';
}), define("extensions/dialogManagePublication", [ "jquery", "underscore", "text!html/dialogManagePublicationLocation.html" ], function(e, t, n) {
 var i = {
  extensionId: "dialogManagePublication",
  extensionName: 'Dialog "Manage publication"',
  settingsBloc: '<p>Populates the "Manage publication" dialog box.</p>'
 }, o = void 0;
 i.onFileMgrCreated = function(e) {
  o = e;
 };
 var r = void 0, s = '<a class="btn" title="Remove this location"><i class="icon-trash"></i></a>', a = function(i) {
  if (void 0 === i || i === r) {
   var a = t.values(r.publishLocations);
   e(".msg-no-publish, .msg-publish-list").addClass("hide");
   var l = e("#manage-publish-list").empty();
   a.length > 0 ? e(".msg-publish-list").removeClass("hide") : e(".msg-no-publish").removeClass("hide"), 
   t.each(a, function(i) {
    formattedAttributes = t.omit(i, "provider", "publishIndex", "sharingLink"), formattedAttributes.password && (formattedAttributes.password = "********");
    var r = JSON.stringify(formattedAttributes).replace(/{|}|"/g, "").replace(/,/g, ", "), a = e(t.template(n, {
     provider: i.provider,
     publishDesc: r
    }));
    a.append(e(s).click(function() {
     o.removePublish(i);
    })), l.append(a);
   });
  }
 };
 return i.onFileSelected = function(e) {
  r = e, a(e);
 }, i.onNewPublishSuccess = a, i.onPublishRemoved = a, i;
}), define("text!html/dialogManageSynchronizationLocation.html", [], function() {
 return '<div class="input-prepend input-append">\r\n	<span class="add-on" title="<%= provider.providerName %>"> <i\r\n		class="icon-<%= provider.providerId %>"></i>\r\n	</span> <input class="span5" type="text" value="<%= syncDesc %>" disabled />\r\n</div>\r\n';
}), define("extensions/dialogManageSynchronization", [ "jquery", "underscore", "text!html/dialogManageSynchronizationLocation.html" ], function(e, t, n) {
 var i = {
  extensionId: "dialogManageSynchronization",
  extensionName: 'Dialog "Manage synchronization"',
  settingsBloc: '<p>Populates the "Manage synchronization" dialog box.</p>'
 }, o = void 0;
 i.onFileMgrCreated = function(e) {
  o = e;
 };
 var r = void 0, s = '<a class="btn" title="Remove this location"><i class="icon-trash"></i></a>', a = function(i) {
  if (void 0 === i || i === r) {
   var a = t.values(r.syncLocations);
   e(".msg-no-sync, .msg-sync-list").addClass("hide");
   var l = e("#manage-sync-list").empty();
   a.length > 0 ? e(".msg-sync-list").removeClass("hide") : e(".msg-no-sync").removeClass("hide"), 
   t.each(a, function(i) {
    var r = i.id || i.path, a = e(t.template(n, {
     provider: i.provider,
     syncDesc: r
    }));
    a.append(e(s).click(function() {
     o.removeSync(i);
    })), l.append(a);
   });
  }
 };
 return i.onFileSelected = function(e) {
  r = e, a(e);
 }, i.onSyncExportSuccess = a, i.onSyncRemoved = a, i.onReady = function() {
  e(".sync-manual").each(function() {
   var t = e(this);
   t.find("input").keyup(function(e) {
    13 == e.which && (t.find("a").click(), e.stopPropagation());
   });
  });
 }, i;
}), function() {
 function e(e, t, n) {
  return e.addEventListener ? (e.addEventListener(t, n, !1), void 0) : (e.attachEvent("on" + t, n), 
  void 0);
 }
 function t(e) {
  if ("keypress" == e.type) {
   var t = String.fromCharCode(e.which);
   return e.shiftKey || (t = t.toLowerCase()), t;
  }
  return w[e.which] ? w[e.which] : x[e.which] ? x[e.which] : String.fromCharCode(e.which).toLowerCase();
 }
 function n(e, t) {
  return e.sort().join(",") === t.sort().join(",");
 }
 function i(e) {
  e = e || {};
  var t, n = !1;
  for (t in _) e[t] ? n = !0 : _[t] = 0;
  n || (P = !1);
 }
 function o(e, t, i, o, r, s) {
  var a, l, u = [], d = i.type;
  if (!S[e]) return [];
  for ("keyup" == d && c(e) && (t = [ e ]), a = 0; S[e].length > a; ++a) if (l = S[e][a], 
  (o || !l.seq || _[l.seq] == l.level) && d == l.action && ("keypress" == d && !i.metaKey && !i.ctrlKey || n(t, l.modifiers))) {
   var p = !o && l.combo == r, f = o && l.seq == o && l.level == s;
   (p || f) && S[e].splice(a, 1), u.push(l);
  }
  return u;
 }
 function r(e) {
  var t = [];
  return e.shiftKey && t.push("shift"), e.altKey && t.push("alt"), e.ctrlKey && t.push("ctrl"), 
  e.metaKey && t.push("meta"), t;
 }
 function s(e, t, n) {
  $.stopCallback(t, t.target || t.srcElement, n) || e(t, n) === !1 && (t.preventDefault && t.preventDefault(), 
  t.stopPropagation && t.stopPropagation(), t.returnValue = !1, t.cancelBubble = !0);
 }
 function a(e, t, n) {
  var r, a = o(e, t, n), l = {}, u = 0, d = !1;
  for (r = 0; a.length > r; ++r) a[r].seq && (u = Math.max(u, a[r].level));
  for (r = 0; a.length > r; ++r) if (a[r].seq) {
   if (a[r].level != u) continue;
   d = !0, l[a[r].seq] = 1, s(a[r].callback, n, a[r].combo);
  } else d || s(a[r].callback, n, a[r].combo);
  n.type != P || c(e) || i(l);
 }
 function l(e) {
  "number" != typeof e.which && (e.which = e.keyCode);
  var n = t(e);
  if (n) return "keyup" == e.type && E == n ? (E = !1, void 0) : ($.handleKey(n, r(e), e), 
  void 0);
 }
 function c(e) {
  return "shift" == e || "ctrl" == e || "alt" == e || "meta" == e;
 }
 function u() {
  clearTimeout(b), b = setTimeout(i, 1e3);
 }
 function d() {
  if (!y) {
   y = {};
   for (var e in w) e > 95 && 112 > e || w.hasOwnProperty(e) && (y[w[e]] = e);
  }
  return y;
 }
 function p(e, t, n) {
  return n || (n = d()[e] ? "keydown" : "keypress"), "keypress" == n && t.length && (n = "keydown"), 
  n;
 }
 function f(e, n, o, r) {
  function a(t) {
   return function() {
    P = t, ++_[e], u();
   };
  }
  function l(n) {
   s(o, n, e), "keyup" !== r && (E = t(n)), setTimeout(i, 10);
  }
  _[e] = 0;
  for (var c = 0; n.length > c; ++c) {
   var d = c + 1 === n.length, p = d ? l : a(r || g(n[c + 1]).action);
   m(n[c], p, r, e, c);
  }
 }
 function h(e) {
  return "+" === e ? [ "+" ] : e.split("+");
 }
 function g(e, t) {
  var n, i, o, r = [];
  for (n = h(e), o = 0; n.length > o; ++o) i = n[o], k[i] && (i = k[i]), t && "keypress" != t && C[i] && (i = C[i], 
  r.push("shift")), c(i) && r.push(i);
  return t = p(i, r, t), {
   key: i,
   modifiers: r,
   action: t
  };
 }
 function m(e, t, n, i, r) {
  T[e + ":" + n] = t, e = e.replace(/\s+/g, " ");
  var s, a = e.split(" ");
  return a.length > 1 ? (f(e, a, t, n), void 0) : (s = g(e, n), S[s.key] = S[s.key] || [], 
  o(s.key, s.modifiers, {
   type: s.action
  }, i, e, r), S[s.key][i ? "unshift" : "push"]({
   callback: t,
   modifiers: s.modifiers,
   action: s.action,
   seq: i,
   level: r,
   combo: e
  }), void 0);
 }
 function v(e, t, n) {
  for (var i = 0; e.length > i; ++i) m(e[i], t, n);
 }
 for (var y, b, w = {
  8: "backspace",
  9: "tab",
  13: "enter",
  16: "shift",
  17: "ctrl",
  18: "alt",
  20: "capslock",
  27: "esc",
  32: "space",
  33: "pageup",
  34: "pagedown",
  35: "end",
  36: "home",
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  45: "ins",
  46: "del",
  91: "meta",
  93: "meta",
  224: "meta"
 }, x = {
  106: "*",
  107: "+",
  109: "-",
  110: ".",
  111: "/",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
 }, C = {
  "~": "`",
  "!": "1",
  "@": "2",
  "#": "3",
  $: "4",
  "%": "5",
  "^": "6",
  "&": "7",
  "*": "8",
  "(": "9",
  ")": "0",
  _: "-",
  "+": "=",
  ":": ";",
  '"': "'",
  "<": ",",
  ">": ".",
  "?": "/",
  "|": "\\"
 }, k = {
  option: "alt",
  command: "meta",
  "return": "enter",
  escape: "esc",
  mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
 }, S = {}, T = {}, _ = {}, E = !1, P = !1, I = 1; 20 > I; ++I) w[111 + I] = "f" + I;
 for (I = 0; 9 >= I; ++I) w[I + 96] = I;
 e(document, "keypress", l), e(document, "keydown", l), e(document, "keyup", l);
 var $ = {
  bind: function(e, t, n) {
   return e = e instanceof Array ? e : [ e ], v(e, t, n), this;
  },
  unbind: function(e, t) {
   return $.bind(e, function() {}, t);
  },
  trigger: function(e, t) {
   return T[e + ":" + t] && T[e + ":" + t]({}, e), this;
  },
  reset: function() {
   return S = {}, T = {}, this;
  },
  stopCallback: function(e, t) {
   return (" " + t.className + " ").indexOf(" mousetrap ") > -1 ? !1 : "INPUT" == t.tagName || "SELECT" == t.tagName || "TEXTAREA" == t.tagName || t.contentEditable && "true" == t.contentEditable;
  },
  handleKey: a
 };
 window.Mousetrap = $, "function" == typeof define && define.amd && define("mousetrap", $);
}(), define("fileSystem", {}), define("text!html/documentSelectorSettingsBloc.html", [], function() {
 return '<p>Builds the "Open document" dropdown menu.</p>\r\n<div class="form-horizontal">\r\n	<div class="control-group">\r\n		<label class="control-label" for="select-document-selector-orderby">Order\r\n			by</label>\r\n		<div class="controls">\r\n			<select id="select-document-selector-orderby">\r\n				<option value="title">Document title</option>\r\n				<option value="mru">Most recently used</option>\r\n			</select>\r\n		</div>\r\n	</div>\r\n	<div class="control-group">\r\n		<label class="control-label"\r\n			for="input-document-selector-shortcut-previous">"Previous"\r\n			shortcut <a href="http://craig.is/killing/mice#keys" target="_blank">(?)</a></label>\r\n		<div class="controls">\r\n			<input type="text" id="input-document-selector-shortcut-previous"\r\n				class="span2">\r\n		</div>\r\n	</div>\r\n	<div class="control-group">\r\n		<label class="control-label"\r\n			for="input-document-selector-shortcut-next">"Next"\r\n			shortcut <a href="http://craig.is/killing/mice#keys" target="_blank">(?)</a></label>\r\n		<div class="controls">\r\n			<input type="text" id="input-document-selector-shortcut-next"\r\n				class="span2">\r\n		</div>\r\n	</div>\r\n</div>';
}), define("extensions/documentSelector", [ "jquery", "underscore", "utils", "mousetrap", "fileSystem", "text!html/documentSelectorSettingsBloc.html" ], function(e, t, n, i, o, r) {
 function s(n) {
  var i = e("#file-selector li:not(.stick)");
  if (i.show(), n) {
   var o = n.toLowerCase().split(/\s+/);
   i.each(function() {
    var n = e(this).text().toLowerCase();
    t.some(o, function(e) {
     return -1 === n.indexOf(e);
    }) && e(this).hide();
   });
  }
 }
 var a = {
  extensionId: "documentSelector",
  extensionName: "Document Selector",
  defaultConfig: {
   orderBy: "title",
   shortcutPrevious: "Ctrl+[",
   shortcutNext: "Ctrl+]"
  },
  settingsBloc: r
 };
 a.onLoadSettings = function() {
  n.setInputValue("#select-document-selector-orderby", a.config.sortBy), n.setInputValue("#input-document-selector-shortcut-previous", a.config.shortcutPrevious), 
  n.setInputValue("#input-document-selector-shortcut-next", a.config.shortcutNext);
 }, a.onSaveSettings = function(e, t) {
  e.orderBy = n.getInputValue("#select-document-selector-orderby"), e.shortcutPrevious = n.getInputTextValue("#input-document-selector-shortcut-previous", t), 
  e.shortcutNext = n.getInputTextValue("#input-document-selector-shortcut-next", t);
 };
 var l = void 0;
 a.onFileMgrCreated = function(e) {
  l = e;
 };
 var c = void 0, u = void 0, d = void 0, p = function() {
  function n(e) {
   var n = [], i = t.values(e.syncLocations), o = t.values(e.publishLocations), r = i.concat(o);
   return t.chain(r).sortBy(function(e) {
    return e.provider.providerId;
   }).each(function(e) {
    n.push('<i class="icon-' + e.provider.providerId + '"></i>');
   }), n.push(" "), n.push(e.title), n.join("");
  }
  c = {}, e("#file-selector li:not(.stick)").empty(), t.chain(o).sortBy(d).each(function(t) {
   var i = e('<a href="#">').html(n(t)).click(function() {
    c[t.fileIndex].is(".disabled") ? e("#wmd-input").focus() : l.selectFile(t);
   }), o = e("<li>").append(i);
   c[t.fileIndex] = o, e("#file-selector").append(o);
  }), u = t.values(c);
 }, f = void 0;
 return a.onFileSelected = function(t) {
  f = t, p(), e("#file-selector li:not(.stick)").removeClass("disabled");
  var n = c[t.fileIndex];
  void 0 !== n && n.addClass("disabled");
 }, a.onFileCreated = p, a.onFileDeleted = p, a.onTitleChanged = p, a.onSyncExportSuccess = p, 
 a.onSyncRemoved = p, a.onNewPublishSuccess = p, a.onPublishRemoved = p, a.onReady = function() {
  "title" == a.config.orderBy ? d = function(e) {
   return e.title.toLowerCase();
  } : "mru" == a.config.orderBy && (d = function(e) {
   return -e.selectTime;
  });
  var n = void 0;
  e(".action-open-file").click(function() {
   e("#file-selector").parent().is(".open") || (s(), void 0 === n && t.defer(function() {
    e("#file-search").val("").focus();
   }));
  }).prop("title", t.template("<%= title %>  <%= shortcutPrevious %>  <%= shortcutNext %>", {
   title: e(".action-open-file").prop("title"),
   shortcutPrevious: a.config.shortcutPrevious,
   shortcutNext: a.config.shortcutNext
  })), e("#file-search").keyup(function(t) {
   13 == t.which || 27 == t.which ? e(this).parent().click() : s(e(this).val());
  }).click(function(e) {
   e.stopPropagation();
  }), i.bind(a.config.shortcutPrevious.toLowerCase(), function() {
   void 0 === n && (e("#file-selector").parent().is(".open") || e(".action-open-file").click(), 
   n = c[f.fileIndex]);
   var i = t.indexOf(u, n) - 1;
   return -2 === i && (i = -1), n = u[(i + u.length) % u.length], t.defer(function() {
    n.find("a").focus();
   }), !1;
  }), i.bind(a.config.shortcutNext.toLowerCase(), function() {
   void 0 === n && (e("#file-selector").parent().is(".open") || e(".action-open-file").click(), 
   n = c[f.fileIndex]);
   var i = t.indexOf(u, n) + 1;
   return n = u[i % u.length], t.defer(function() {
    n.find("a").focus();
   }), !1;
  }), i.bind("ctrl", function() {
   void 0 !== n && (n.find("a").click(), n = void 0);
  }, "keyup");
 }, a;
}), define("extensions/documentTitle", [ "jquery", "underscore" ], function(e, t) {
 var n = {
  extensionId: "documentTitle",
  extensionName: "Document Title",
  settingsBloc: "<p>Responsible for showing the document title in the navigation bar.</p>"
 }, i = void 0;
 n.onLayoutCreated = function(e) {
  i = e;
 };
 var o = void 0, r = function(n) {
  function r(e) {
   var n = [], i = t.values(e.syncLocations), o = t.values(e.publishLocations), r = i.concat(o);
   return t.chain(r).sortBy(function(e) {
    return e.provider.providerId;
   }).each(function(e) {
    n.push('<i class="icon-' + e.provider.providerId + '"></i>');
   }), n.push(" "), n.push(e.title), n.join("");
  }
  if (n === o) {
   var s = o.title;
   document.title = "StackEdit - " + s, e("#file-title").html(r(o)), e(".file-title").text(s), 
   e("#file-title-input").val(s), void 0 !== i && t.defer(i.resizeAll);
  }
 };
 return n.onFileSelected = function(e) {
  o = e, r(e);
 }, n.onTitleChanged = r, n.onSyncExportSuccess = r, n.onSyncRemoved = r, n.onNewPublishSuccess = r, 
 n.onPublishRemoved = r, n;
}), define("extensions/workingIndicator", [ "jquery", "underscore" ], function(e) {
 var t = {
  extensionId: "workingIndicator",
  extensionName: "Working Indicator",
  settingsBloc: "<p>Displays an animated image when a network operation is running.</p>"
 };
 return t.onAsyncRunning = function(t) {
  t === !1 ? (e(".working-indicator").removeClass("show"), e("body").removeClass("working")) : (e(".working-indicator").addClass("show"), 
  e("body").addClass("working"));
 }, t;
}), function(e) {
 var t = function() {
  return !1 === e.support.boxModel && e.support.objectAll && e.support.leadingWhitespace;
 }();
 e.jGrowl = function(t, n) {
  0 == e("#jGrowl").size() && e('<div id="jGrowl"></div>').addClass(n && n.position ? n.position : e.jGrowl.defaults.position).appendTo("body"), 
  e("#jGrowl").jGrowl(t, n);
 }, e.fn.jGrowl = function(t, n) {
  if (e.isFunction(this.each)) {
   var i = arguments;
   return this.each(function() {
    void 0 == e(this).data("jGrowl.instance") && (e(this).data("jGrowl.instance", e.extend(new e.fn.jGrowl(), {
     notifications: [],
     element: null,
     interval: null
    })), e(this).data("jGrowl.instance").startup(this)), e.isFunction(e(this).data("jGrowl.instance")[t]) ? e(this).data("jGrowl.instance")[t].apply(e(this).data("jGrowl.instance"), e.makeArray(i).slice(1)) : e(this).data("jGrowl.instance").create(t, n);
   });
  }
 }, e.extend(e.fn.jGrowl.prototype, {
  defaults: {
   pool: 0,
   header: "",
   group: "",
   sticky: !1,
   position: "top-right",
   glue: "after",
   theme: "default",
   themeState: "highlight",
   corners: "10px",
   check: 250,
   life: 3e3,
   closeDuration: "normal",
   openDuration: "normal",
   easing: "swing",
   closer: !0,
   closeTemplate: "&times;",
   closerTemplate: "<div>[ close all ]</div>",
   log: function() {},
   beforeOpen: function() {},
   afterOpen: function() {},
   open: function() {},
   beforeClose: function() {},
   close: function() {},
   animateOpen: {
    opacity: "show"
   },
   animateClose: {
    opacity: "hide"
   }
  },
  notifications: [],
  element: null,
  interval: null,
  create: function(t, n) {
   var n = e.extend({}, this.defaults, n);
   n.speed !== void 0 && (n.openDuration = n.speed, n.closeDuration = n.speed), this.notifications.push({
    message: t,
    options: n
   }), n.log.apply(this.element, [ this.element, t, n ]);
  },
  render: function(t) {
   var n = this, i = t.message, o = t.options;
   o.themeState = "" == o.themeState ? "" : "ui-state-" + o.themeState;
   var t = e("<div/>").addClass("jGrowl-notification " + o.themeState + " ui-corner-all" + (void 0 != o.group && "" != o.group ? " " + o.group : "")).append(e("<div/>").addClass("jGrowl-close").html(o.closeTemplate)).append(e("<div/>").addClass("jGrowl-header").html(o.header)).append(e("<div/>").addClass("jGrowl-message").html(i)).data("jGrowl", o).addClass(o.theme).children("div.jGrowl-close").bind("click.jGrowl", function() {
    e(this).parent().trigger("jGrowl.beforeClose");
   }).parent();
   e(t).bind("mouseover.jGrowl", function() {
    e("div.jGrowl-notification", n.element).data("jGrowl.pause", !0);
   }).bind("mouseout.jGrowl", function() {
    e("div.jGrowl-notification", n.element).data("jGrowl.pause", !1);
   }).bind("jGrowl.beforeOpen", function() {
    0 != o.beforeOpen.apply(t, [ t, i, o, n.element ]) && e(this).trigger("jGrowl.open");
   }).bind("jGrowl.open", function() {
    0 != o.open.apply(t, [ t, i, o, n.element ]) && ("after" == o.glue ? e("div.jGrowl-notification:last", n.element).after(t) : e("div.jGrowl-notification:first", n.element).before(t), 
    e(this).animate(o.animateOpen, o.openDuration, o.easing, function() {
     e.support.opacity === !1 && this.style.removeAttribute("filter"), null != e(this).data("jGrowl") && (e(this).data("jGrowl").created = new Date()), 
     e(this).trigger("jGrowl.afterOpen");
    }));
   }).bind("jGrowl.afterOpen", function() {
    o.afterOpen.apply(t, [ t, i, o, n.element ]);
   }).bind("jGrowl.beforeClose", function() {
    0 != o.beforeClose.apply(t, [ t, i, o, n.element ]) && e(this).trigger("jGrowl.close");
   }).bind("jGrowl.close", function() {
    e(this).data("jGrowl.pause", !0), e(this).animate(o.animateClose, o.closeDuration, o.easing, function() {
     e.isFunction(o.close) ? o.close.apply(t, [ t, i, o, n.element ]) !== !1 && e(this).remove() : e(this).remove();
    });
   }).trigger("jGrowl.beforeOpen"), "" != o.corners && void 0 != e.fn.corner && e(t).corner(o.corners), 
   e("div.jGrowl-notification:parent", n.element).size() > 1 && 0 == e("div.jGrowl-closer", n.element).size() && 0 != this.defaults.closer && e(this.defaults.closerTemplate).addClass("jGrowl-closer " + this.defaults.themeState + " ui-corner-all").addClass(this.defaults.theme).appendTo(n.element).animate(this.defaults.animateOpen, this.defaults.speed, this.defaults.easing).bind("click.jGrowl", function() {
    e(this).siblings().trigger("jGrowl.beforeClose"), e.isFunction(n.defaults.closer) && n.defaults.closer.apply(e(this).parent()[0], [ e(this).parent()[0] ]);
   });
  },
  update: function() {
   e(this.element).find("div.jGrowl-notification:parent").each(function() {
    void 0 != e(this).data("jGrowl") && void 0 != e(this).data("jGrowl").created && e(this).data("jGrowl").created.getTime() + parseInt(e(this).data("jGrowl").life) < new Date().getTime() && 1 != e(this).data("jGrowl").sticky && (void 0 == e(this).data("jGrowl.pause") || 1 != e(this).data("jGrowl.pause")) && e(this).trigger("jGrowl.beforeClose");
   }), this.notifications.length > 0 && (0 == this.defaults.pool || e(this.element).find("div.jGrowl-notification:parent").size() < this.defaults.pool) && this.render(this.notifications.shift()), 
   2 > e(this.element).find("div.jGrowl-notification:parent").size() && e(this.element).find("div.jGrowl-closer").animate(this.defaults.animateClose, this.defaults.speed, this.defaults.easing, function() {
    e(this).remove();
   });
  },
  startup: function(n) {
   this.element = e(n).addClass("jGrowl").append('<div class="jGrowl-notification"></div>'), 
   this.interval = setInterval(function() {
    e(n).data("jGrowl.instance").update();
   }, parseInt(this.defaults.check)), t && e(this.element).addClass("ie6");
  },
  shutdown: function() {
   e(this.element).removeClass("jGrowl").find("div.jGrowl-notification").trigger("jGrowl.close").parent().empty();
  },
  close: function() {
   e(this.element).find("div.jGrowl-notification").each(function() {
    e(this).trigger("jGrowl.beforeClose");
   });
  }
 }), e.jGrowl.defaults = e.fn.jGrowl.prototype.defaults;
}(jQuery), define("jgrowl", [ "jquery" ], function(e) {
 return function() {
  var t;
  return t || e.jQuery.jGrowl;
 };
}(this)), define("text!html/notificationsSettingsBloc.html", [], function() {
 return '<p>Shows notification messages in the bottom-right corner of the\r\n	screen.</p>\r\n<div class="form-horizontal">\r\n	<div class="control-group">\r\n		<label class="control-label" for="input-notifications-timeout">Timeout</label>\r\n		<div class="controls">\r\n			<input type="text" id="input-notifications-timeout"\r\n				class="input-mini"> <span class="help-inline">ms</span>\r\n		</div>\r\n	</div>\r\n</div>';
}), define("extensions/notifications", [ "jquery", "underscore", "utils", "jgrowl", "text!html/notificationsSettingsBloc.html" ], function(e, t, n, i, o) {
 function r(e, n, o) {
  if (logger.info(e), e) {
   var r = e.indexOf("|");
   (-1 === r || (e = e.substring(0, r))) && (o = o || {}, n = n || "icon-info-sign", 
   i("<i class='icon-white " + n + "'></i> " + t.escape(e), o));
  }
 }
 var s = {
  extensionId: "notifications",
  extensionName: "Notifications",
  defaultConfig: {
   timeout: 8e3
  },
  settingsBloc: o
 };
 return s.onLoadSettings = function() {
  n.setInputValue("#input-notifications-timeout", s.config.timeout);
 }, s.onSaveSettings = function(e, t) {
  e.timeout = n.getInputIntValue("#input-notifications-timeout", t, 1, 6e4);
 }, s.onReady = function() {
  i.defaults.life = s.config.timeout, i.defaults.closer = !1, i.defaults.closeTemplate = "", 
  i.defaults.position = "bottom-right";
 }, s.onMessage = function(e) {
  r(e);
 }, s.onError = function(e) {
  logger.error(e), t.isString(e) ? r(e, "icon-warning-sign") : t.isObject(e) && r(e.message, "icon-warning-sign");
 }, s.onOfflineChanged = function(t) {
  t === !0 ? r("You are offline.", "icon-exclamation-sign msg-offline", {
   sticky: !0,
   close: function() {
    r("You are back online!", "icon-signal");
   }
  }) : e(".msg-offline").parents(".jGrowl-notification").trigger("jGrowl.beforeClose");
 }, s.onSyncImportSuccess = function(e, n) {
  var i = t.map(e, function(e) {
   return e.title;
  }).join(", ");
  r(i + " imported successfully from " + n.providerName + ".");
 }, s.onSyncExportSuccess = function(e, t) {
  r('"' + e.title + '" will now be synchronized on ' + t.provider.providerName + ".");
 }, s.onSyncRemoved = function(e, t) {
  r(t.provider.providerName + " synchronized location has been removed.");
 }, s.onPublishSuccess = function(e) {
  r('"' + e.title + '" successfully published.');
 }, s.onNewPublishSuccess = function(e, t) {
  r('"' + e.title + '" is now published on ' + t.provider.providerName + ".");
 }, s.onPublishRemoved = function(e, t) {
  r(t.provider.providerName + " publish location has been removed.");
 }, s;
}), define("text!html/markdownExtraSettingsBloc.html", [], function() {
 return '<p>Adds extra features to the original Markdown syntax.</p>\r\n<div class="form-horizontal">\r\n	<div class="control-group">\r\n		<label class="control-label" for="input-markdownextra-prettify">Prettify\r\n			syntax highlighting</label>\r\n		<div class="controls">\r\n			<input type="checkbox" id="input-markdownextra-prettify">\r\n		</div>\r\n	</div>\r\n</div>\r\n';
});

var Markdown;

Markdown = "object" == typeof exports && "function" == typeof require ? exports : {}, 
function() {
 function e(e) {
  return e;
 }
 function t() {
  return !1;
 }
 function n() {}
 function i() {}
 n.prototype = {
  chain: function(t, n) {
   var i = this[t];
   if (!i) throw Error("unknown hook " + t);
   this[t] = i === e ? n : function() {
    var e = Array.prototype.slice.call(arguments, 0);
    return e[0] = i.apply(null, e), n.apply(null, e);
   };
  },
  set: function(e, t) {
   if (!this[e]) throw Error("unknown hook " + e);
   this[e] = t;
  },
  addNoop: function(t) {
   this[t] = e;
  },
  addFalse: function(e) {
   this[e] = t;
  }
 }, Markdown.HookCollection = n, i.prototype = {
  set: function(e, t) {
   this["s_" + e] = t;
  },
  get: function(e) {
   return this["s_" + e];
  }
 }, Markdown.Converter = function() {
  function e(e) {
   return e = e.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(?:\n+)/gm, function(e, t, n, i, o, r) {
    return t = t.toLowerCase(), L.set(t, k(n)), o ? i : (r && A.set(t, r.replace(/"/g, "&quot;")), 
    "");
   });
  }
  function t(e) {
   return e = e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm, o), 
   e = e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm, o), 
   e = e.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, o), e = e.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g, o), 
   e = e.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, o);
  }
  function o(e, t) {
   var n = t;
   return n = n.replace(/^\n+/, ""), n = n.replace(/\n+$/g, ""), n = "\n\n~K" + (O.push(n) - 1) + "K\n\n";
  }
  function r(e, n) {
   e = R.preBlockGamut(e, D), e = f(e);
   var i = "<hr />\n";
   return e = e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, i), e = e.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm, i), 
   e = e.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm, i), e = h(e), e = m(e), e = x(e), 
   e = R.postBlockGamut(e, D), e = t(e), e = C(e, n);
  }
  function s(e) {
   return e = R.preSpanGamut(e), e = y(e), e = a(e), e = S(e), e = u(e), e = l(e), 
   e = _(e), e = e.replace(/~P/g, "://"), e = k(e), e = w(e), e = e.replace(/  +\n/g, " <br>\n"), 
   e = R.postSpanGamut(e);
  }
  function a(e) {
   var t = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi;
   return e = e.replace(t, function(e) {
    var t = e.replace(/(.)<\/?code>(?=.)/g, "$1`");
    return t = z(t, "!" == e.charAt(1) ? "\\`*_/" : "\\`*_");
   });
  }
  function l(e) {
   return e = e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, c), 
   e = e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()\s])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, c), 
   e = e.replace(/(\[([^\[\]]+)\])()()()()()/g, c);
  }
  function c(e, t, n, i, o, r, s, a) {
   void 0 == a && (a = "");
   var l = t, c = n.replace(/:\/\//g, "~P"), u = i.toLowerCase(), p = o, f = a;
   if ("" == p) if ("" == u && (u = c.toLowerCase().replace(/ ?\n/g, " ")), p = "#" + u, 
   void 0 != L.get(u)) p = L.get(u), void 0 != A.get(u) && (f = A.get(u)); else {
    if (!(l.search(/\(\s*\)$/m) > -1)) return l;
    p = "";
   }
   p = $(p), p = z(p, "*_");
   var h = '<a href="' + p + '"';
   return "" != f && (f = d(f), f = z(f, "*_"), h += ' title="' + f + '"'), h += ">" + c + "</a>";
  }
  function u(e) {
   return e = e.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, p), e = e.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, p);
  }
  function d(e) {
   return e.replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  }
  function p(e, t, n, i, o, r, s, a) {
   var l = t, c = n, u = i.toLowerCase(), p = o, f = a;
   if (f || (f = ""), "" == p) {
    if ("" == u && (u = c.toLowerCase().replace(/ ?\n/g, " ")), p = "#" + u, void 0 == L.get(u)) return l;
    p = L.get(u), void 0 != A.get(u) && (f = A.get(u));
   }
   c = z(d(c), "*_[]()"), p = z(p, "*_");
   var h = '<img src="' + p + '" alt="' + c + '"';
   return f = d(f), f = z(f, "*_"), h += ' title="' + f + '"', h += " />";
  }
  function f(e) {
   return e = e.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm, function(e, t) {
    return "<h1>" + s(t) + "</h1>\n\n";
   }), e = e.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm, function(e, t) {
    return "<h2>" + s(t) + "</h2>\n\n";
   }), e = e.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm, function(e, t, n) {
    var i = t.length;
    return "<h" + i + ">" + s(n) + "</h" + i + ">\n\n";
   });
  }
  function h(e, t) {
   e += "~0";
   var n = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;
   return M ? e = e.replace(n, function(e, n, i) {
    var o = n, r = i.search(/[*+-]/g) > -1 ? "ul" : "ol", s = g(o, r, t);
    return s = s.replace(/\s+$/, ""), s = "<" + r + ">" + s + "</" + r + ">\n";
   }) : (n = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g, 
   e = e.replace(n, function(e, t, n, i) {
    var o = t, r = n, s = i.search(/[*+-]/g) > -1 ? "ul" : "ol", a = g(r, s);
    return a = o + "<" + s + ">\n" + a + "</" + s + ">\n";
   })), e = e.replace(/~0/, "");
  }
  function g(e, t, n) {
   M++, e = e.replace(/\n{2,}$/, "\n"), e += "~0";
   var i = j[t], o = RegExp("(^[ \\t]*)(" + i + ")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1(" + i + ")[ \\t]+))", "gm"), a = !1;
   return e = e.replace(o, function(e, t, i, o) {
    var l = o, c = /\n\n$/.test(l), u = c || l.search(/\n{2,}/) > -1;
    return u || a ? l = r(P(l), !0) : (l = h(P(l), !0), l = l.replace(/\n$/, ""), n || (l = s(l))), 
    a = c, "<li>" + l + "</li>\n";
   }), e = e.replace(/~0/g, ""), M--, e;
  }
  function m(e) {
   return e += "~0", e = e.replace(/(?:\n\n|^\n?)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g, function(e, t, n) {
    var i = t, o = n;
    return i = b(P(i)), i = I(i), i = i.replace(/^\n+/g, ""), i = i.replace(/\n+$/g, ""), 
    i = "<pre><code>" + i + "\n</code></pre>", "\n\n" + i + "\n\n" + o;
   }), e = e.replace(/~0/, "");
  }
  function v(e) {
   return e = e.replace(/(^\n+|\n+$)/g, ""), "\n\n~K" + (O.push(e) - 1) + "K\n\n";
  }
  function y(e) {
   return e = e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function(e, t, n, i) {
    var o = i;
    return o = o.replace(/^([ \t]*)/g, ""), o = o.replace(/[ \t]*$/g, ""), o = b(o), 
    o = o.replace(/:\/\//g, "~P"), t + "<code>" + o + "</code>";
   });
  }
  function b(e) {
   return e = e.replace(/&/g, "&amp;"), e = e.replace(/</g, "&lt;"), e = e.replace(/>/g, "&gt;"), 
   e = z(e, "*_{}[]\\", !1);
  }
  function w(e) {
   return e = e.replace(/([\W_]|^)(\*\*|__)(?=\S)([^\r]*?\S[\*_]*)\2([\W_]|$)/g, "$1<strong>$3</strong>$4"), 
   e = e.replace(/([\W_]|^)(\*|_)(?=\S)([^\r\*_]*?\S)\2([\W_]|$)/g, "$1<em>$3</em>$4");
  }
  function x(e) {
   return e = e.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm, function(e, t) {
    var n = t;
    return n = n.replace(/^[ \t]*>[ \t]?/gm, "~0"), n = n.replace(/~0/g, ""), n = n.replace(/^[ \t]+$/gm, ""), 
    n = r(n), n = n.replace(/(^|\n)/g, "$1  "), n = n.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(e, t) {
     var n = t;
     return n = n.replace(/^  /gm, "~0"), n = n.replace(/~0/g, "");
    }), v("<blockquote>\n" + n + "\n</blockquote>");
   });
  }
  function C(e, t) {
   e = e.replace(/^\n+/g, ""), e = e.replace(/\n+$/g, "");
   for (var n = e.split(/\n{2,}/g), i = [], o = /~K(\d+)K/, r = n.length, a = 0; r > a; a++) {
    var l = n[a];
    o.test(l) ? i.push(l) : /\S/.test(l) && (l = s(l), l = l.replace(/^([ \t]*)/g, "<p>"), 
    l += "</p>", i.push(l));
   }
   if (!t) {
    r = i.length;
    for (var a = 0; r > a; a++) for (var c = !0; c; ) c = !1, i[a] = i[a].replace(/~K(\d+)K/g, function(e, t) {
     return c = !0, O[t];
    });
   }
   return i.join("\n\n");
  }
  function k(e) {
   return e = e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), e = e.replace(/<(?![a-z\/?!]|~D)/gi, "&lt;");
  }
  function S(e) {
   return e = e.replace(/\\(\\)/g, N), e = e.replace(/\\([`*_{}\[\]()>#+-.!])/g, N);
  }
  function T(e, t, n, i) {
   if (t) return e;
   if (")" !== i.charAt(i.length - 1)) return "<" + n + i + ">";
   for (var o = i.match(/[()]/g), r = 0, s = 0; o.length > s; s++) "(" === o[s] ? 0 >= r ? r = 1 : r++ : r--;
   var a = "";
   if (0 > r) {
    var l = RegExp("\\){1," + -r + "}$");
    i = i.replace(l, function(e) {
     return a = e, "";
    });
   }
   if (a) {
    var c = i.charAt(i.length - 1);
    W.test(c) || (a = c + a, i = i.substr(0, i.length - 1));
   }
   return "<" + n + i + ">" + a;
  }
  function _(e) {
   e = e.replace(B, T);
   var t = function(e, t) {
    return '<a href="' + t + '">' + R.plainLinkText(t) + "</a>";
   };
   return e = e.replace(/<((https?|ftp):[^'">\s]+)>/gi, t);
  }
  function E(e) {
   return e = e.replace(/~E(\d+)E/g, function(e, t) {
    var n = parseInt(t);
    return String.fromCharCode(n);
   });
  }
  function P(e) {
   return e = e.replace(/^(\t|[ ]{1,4})/gm, "~0"), e = e.replace(/~0/g, "");
  }
  function I(e) {
   if (!/\t/.test(e)) return e;
   var t, n = [ "    ", "   ", "  ", " " ], i = 0;
   return e.replace(/[\n\t]/g, function(e, o) {
    return "\n" === e ? (i = o + 1, e) : (t = (o - i) % 4, i = o + 1, n[t]);
   });
  }
  function $(e) {
   if (!e) return "";
   var t = e.length;
   return e.replace(q, function(n, i) {
    return "~D" == n ? "%24" : ":" != n || i != t - 1 && !/[0-9\/]/.test(e.charAt(i + 1)) ? "%" + n.charCodeAt(0).toString(16) : ":";
   });
  }
  function z(e, t, n) {
   var i = "([" + t.replace(/([\[\]\\])/g, "\\$1") + "])";
   n && (i = "\\\\" + i);
   var o = RegExp(i, "g");
   return e = e.replace(o, N);
  }
  function N(e, t) {
   var n = t.charCodeAt(0);
   return "~E" + n + "E";
  }
  var R = this.hooks = new n();
  R.addNoop("plainLinkText"), R.addNoop("preConversion"), R.addNoop("postNormalization"), 
  R.addNoop("preBlockGamut"), R.addNoop("postBlockGamut"), R.addNoop("preSpanGamut"), 
  R.addNoop("postSpanGamut"), R.addNoop("postConversion");
  var L, A, O, M;
  this.makeHtml = function(n) {
   if (L) throw Error("Recursive call to converter.makeHtml");
   return L = new i(), A = new i(), O = [], M = 0, n = R.preConversion(n), n = n.replace(/~/g, "~T"), 
   n = n.replace(/\$/g, "~D"), n = n.replace(/\r\n/g, "\n"), n = n.replace(/\r/g, "\n"), 
   n = "\n\n" + n + "\n\n", n = I(n), n = n.replace(/^[ \t]+$/gm, ""), n = R.postNormalization(n), 
   n = t(n), n = e(n), n = r(n), n = E(n), n = n.replace(/~D/g, "$$"), n = n.replace(/~T/g, "~"), 
   n = R.postConversion(n), O = A = L = null, n;
  };
  var D = function(e) {
   return r(e);
  }, j = {
   ol: "\\d+[.]",
   ul: "[*+-]"
  }, H = "[-A-Z0-9+&@#/%?=~_|[\\]()!:,.;]", F = "[-A-Z0-9+&@#/%=~_|[\\])]", B = RegExp('(="|<)?\\b(https?|ftp)(://' + H + "*" + F + ")(?=$|\\W)", "gi"), W = RegExp(F, "i"), q = /(?:["'*()[\]:]|~D)/g;
 };
}(), define("libs/Markdown.Converter", function() {});

var IN_GLOBAL_SCOPE = !0;

window.PR_SHOULD_USE_CONTINUATION = !0;

var prettyPrintOne, prettyPrint;

(function() {
 function e(e) {
  function t(e) {
   var t = e.charCodeAt(0);
   if (92 !== t) return t;
   var n = e.charAt(1);
   return t = d[n], t ? t : n >= "0" && "7" >= n ? parseInt(e.substring(1), 8) : "u" === n || "x" === n ? parseInt(e.substring(2), 16) : e.charCodeAt(1);
  }
  function n(e) {
   if (32 > e) return (16 > e ? "\\x0" : "\\x") + e.toString(16);
   var t = String.fromCharCode(e);
   return "\\" === t || "-" === t || "]" === t || "^" === t ? "\\" + t : t;
  }
  function i(e) {
   var i = e.substring(1, e.length - 1).match(RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]", "g")), o = [], r = "^" === i[0], s = [ "[" ];
   r && s.push("^");
   for (var a = r ? 1 : 0, l = i.length; l > a; ++a) {
    var c = i[a];
    if (/\\[bdsw]/i.test(c)) s.push(c); else {
     var u, d = t(c);
     l > a + 2 && "-" === i[a + 1] ? (u = t(i[a + 2]), a += 2) : u = d, o.push([ d, u ]), 
     65 > u || d > 122 || (65 > u || d > 90 || o.push([ 32 | Math.max(65, d), 32 | Math.min(u, 90) ]), 
     97 > u || d > 122 || o.push([ -33 & Math.max(97, d), -33 & Math.min(u, 122) ]));
    }
   }
   o.sort(function(e, t) {
    return e[0] - t[0] || t[1] - e[1];
   });
   for (var p = [], f = [], a = 0; o.length > a; ++a) {
    var h = o[a];
    h[0] <= f[1] + 1 ? f[1] = Math.max(f[1], h[1]) : p.push(f = h);
   }
   for (var a = 0; p.length > a; ++a) {
    var h = p[a];
    s.push(n(h[0])), h[1] > h[0] && (h[1] + 1 > h[0] && s.push("-"), s.push(n(h[1])));
   }
   return s.push("]"), s.join("");
  }
  function o(e) {
   for (var t = e.source.match(RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)", "g")), o = t.length, a = [], l = 0, c = 0; o > l; ++l) {
    var u = t[l];
    if ("(" === u) ++c; else if ("\\" === u.charAt(0)) {
     var d = +u.substring(1);
     d && (c >= d ? a[d] = -1 : t[l] = n(d));
    }
   }
   for (var l = 1; a.length > l; ++l) -1 === a[l] && (a[l] = ++r);
   for (var l = 0, c = 0; o > l; ++l) {
    var u = t[l];
    if ("(" === u) ++c, a[c] || (t[l] = "(?:"); else if ("\\" === u.charAt(0)) {
     var d = +u.substring(1);
     d && c >= d && (t[l] = "\\" + a[d]);
    }
   }
   for (var l = 0; o > l; ++l) "^" === t[l] && "^" !== t[l + 1] && (t[l] = "");
   if (e.ignoreCase && s) for (var l = 0; o > l; ++l) {
    var u = t[l], p = u.charAt(0);
    u.length >= 2 && "[" === p ? t[l] = i(u) : "\\" !== p && (t[l] = u.replace(/[a-zA-Z]/g, function(e) {
     var t = e.charCodeAt(0);
     return "[" + String.fromCharCode(-33 & t, 32 | t) + "]";
    }));
   }
   return t.join("");
  }
  for (var r = 0, s = !1, a = !1, l = 0, c = e.length; c > l; ++l) {
   var u = e[l];
   if (u.ignoreCase) a = !0; else if (/[a-z]/i.test(u.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi, ""))) {
    s = !0, a = !1;
    break;
   }
  }
  for (var d = {
   b: 8,
   t: 9,
   n: 10,
   v: 11,
   f: 12,
   r: 13
  }, p = [], l = 0, c = e.length; c > l; ++l) {
   var u = e[l];
   if (u.global || u.multiline) throw Error("" + u);
   p.push("(?:" + o(u) + ")");
  }
  return RegExp(p.join("|"), a ? "gi" : "g");
 }
 function t(e, t) {
  function n(e) {
   var l = e.nodeType;
   if (1 == l) {
    if (i.test(e.className)) return;
    for (var c = e.firstChild; c; c = c.nextSibling) n(c);
    var u = e.nodeName.toLowerCase();
    ("br" === u || "li" === u) && (o[a] = "\n", s[a << 1] = r++, s[1 | a++ << 1] = e);
   } else if (3 == l || 4 == l) {
    var d = e.nodeValue;
    d.length && (d = t ? d.replace(/\r\n?/g, "\n") : d.replace(/[ \t\r\n]+/g, " "), 
    o[a] = d, s[a << 1] = r, r += d.length, s[1 | a++ << 1] = e);
   }
  }
  var i = /(?:^|\s)nocode(?:\s|$)/, o = [], r = 0, s = [], a = 0;
  return n(e), {
   sourceCode: o.join("").replace(/\n$/, ""),
   spans: s
  };
 }
 function n(e, t, n, i) {
  if (t) {
   var o = {
    sourceCode: t,
    basePos: e
   };
   n(o), i.push.apply(i, o.decorations);
  }
 }
 function i(e) {
  for (var t = void 0, n = e.firstChild; n; n = n.nextSibling) {
   var i = n.nodeType;
   t = 1 === i ? t ? e : n : 3 === i ? W.test(n.nodeValue) ? e : t : t;
  }
  return t === e ? void 0 : t;
 }
 function o(t, i) {
  var o, r = {};
  (function() {
   for (var n = t.concat(i), s = [], a = {}, l = 0, c = n.length; c > l; ++l) {
    var u = n[l], d = u[3];
    if (d) for (var p = d.length; --p >= 0; ) r[d.charAt(p)] = u;
    var f = u[1], h = "" + f;
    a.hasOwnProperty(h) || (s.push(f), a[h] = null);
   }
   s.push(/[\0-\uffff]/), o = e(s);
  })();
  var s = i.length, a = function(e) {
   for (var t = e.sourceCode, l = e.basePos, u = [ l, A ], d = 0, p = t.match(o) || [], f = {}, h = 0, g = p.length; g > h; ++h) {
    var m, v = p[h], y = f[v], b = void 0;
    if ("string" == typeof y) m = !1; else {
     var w = r[v.charAt(0)];
     if (w) b = v.match(w[1]), y = w[0]; else {
      for (var x = 0; s > x; ++x) if (w = i[x], b = v.match(w[1])) {
       y = w[0];
       break;
      }
      b || (y = A);
     }
     m = y.length >= 5 && "lang-" === y.substring(0, 5), !m || b && "string" == typeof b[1] || (m = !1, 
     y = D), m || (f[v] = y);
    }
    var C = d;
    if (d += v.length, m) {
     var k = b[1], S = v.indexOf(k), T = S + k.length;
     b[2] && (T = v.length - b[2].length, S = T - k.length);
     var _ = y.substring(5);
     n(l + C, v.substring(0, S), a, u), n(l + C + S, k, c(_, k), u), n(l + C + T, v.substring(T), a, u);
    } else u.push(l + C, y);
   }
   e.decorations = u;
  };
  return a;
 }
 function r(e) {
  var t = [], n = [];
  e.tripleQuotedStrings ? t.push([ I, /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/, null, "'\"" ]) : e.multiLineStrings ? t.push([ I, /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/, null, "'\"`" ]) : t.push([ I, /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/, null, "\"'" ]), 
  e.verbatimStrings && n.push([ I, /^@\"(?:[^\"]|\"\")*(?:\"|$)/, null ]);
  var i = e.hashComments;
  i && (e.cStyleComments ? (i > 1 ? t.push([ z, /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, null, "#" ]) : t.push([ z, /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/, null, "#" ]), 
  n.push([ I, /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/, null ])) : t.push([ z, /^#[^\r\n]*/, null, "#" ])), 
  e.cStyleComments && (n.push([ z, /^\/\/[^\r\n]*/, null ]), n.push([ z, /^\/\*[\s\S]*?(?:\*\/|$)/, null ]));
  var r = e.regexLiterals;
  if (r) {
   var s = r > 1 ? "" : "\n\r", a = s ? "." : "[\\S\\s]", l = "/(?=[^/*" + s + "])" + "(?:[^/\\x5B\\x5C" + s + "]" + "|\\x5C" + a + "|\\x5B(?:[^\\x5C\\x5D" + s + "]" + "|\\x5C" + a + ")*(?:\\x5D|$))+" + "/";
   n.push([ "lang-regex", RegExp("^" + B + "(" + l + ")") ]);
  }
  var c = e.types;
  c && n.push([ N, c ]);
  var u = ("" + e.keywords).replace(/^ | $/g, "");
  u.length && n.push([ $, RegExp("^(?:" + u.replace(/[\s,]+/g, "|") + ")\\b"), null ]), 
  t.push([ A, /^\s+/, null, " \r\n	 " ]);
  var d = "^.[^\\s\\w.$@'\"`/\\\\]*";
  return e.regexLiterals && (d += "(?!s*/)"), n.push([ R, /^@[a-z_$][a-z_$@0-9]*/i, null ], [ N, /^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/, null ], [ A, /^[a-z_$][a-z_$@0-9]*/i, null ], [ R, RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"), null, "0123456789" ], [ A, /^\\[\s\S]?/, null ], [ L, RegExp(d), null ]), 
  o(t, n);
 }
 function s(e, t, n) {
  function i(e) {
   var t = e.nodeType;
   if (1 != t || r.test(e.className)) {
    if ((3 == t || 4 == t) && n) {
     var l = e.nodeValue, c = l.match(s);
     if (c) {
      var u = l.substring(0, c.index);
      e.nodeValue = u;
      var d = l.substring(c.index + c[0].length);
      if (d) {
       var p = e.parentNode;
       p.insertBefore(a.createTextNode(d), e.nextSibling);
      }
      o(e), u || e.parentNode.removeChild(e);
     }
    }
   } else if ("br" === e.nodeName) o(e), e.parentNode && e.parentNode.removeChild(e); else for (var f = e.firstChild; f; f = f.nextSibling) i(f);
  }
  function o(e) {
   function t(e, n) {
    var i = n ? e.cloneNode(!1) : e, o = e.parentNode;
    if (o) {
     var r = t(o, 1), s = e.nextSibling;
     r.appendChild(i);
     for (var a = s; a; a = s) s = a.nextSibling, r.appendChild(a);
    }
    return i;
   }
   for (;!e.nextSibling; ) if (e = e.parentNode, !e) return;
   for (var n, i = t(e.nextSibling, 0); (n = i.parentNode) && 1 === n.nodeType; ) i = n;
   c.push(i);
  }
  for (var r = /(?:^|\s)nocode(?:\s|$)/, s = /\r\n?|\n/, a = e.ownerDocument, l = a.createElement("li"); e.firstChild; ) l.appendChild(e.firstChild);
  for (var c = [ l ], u = 0; c.length > u; ++u) i(c[u]);
  t === (0 | t) && c[0].setAttribute("value", t);
  var d = a.createElement("ol");
  d.className = "linenums";
  for (var p = Math.max(0, 0 | t - 1) || 0, u = 0, f = c.length; f > u; ++u) l = c[u], 
  l.className = "L" + (u + p) % 10, l.firstChild || l.appendChild(a.createTextNode(" ")), 
  d.appendChild(l);
  e.appendChild(d);
 }
 function a(e) {
  var t = /\bMSIE\s(\d+)/.exec(navigator.userAgent);
  t = t && 8 >= +t[1];
  var n = /\n/g, i = e.sourceCode, o = i.length, r = 0, s = e.spans, a = s.length, l = 0, c = e.decorations, u = c.length, d = 0;
  c[u] = o;
  var p, f;
  for (f = p = 0; u > f; ) c[f] !== c[f + 2] ? (c[p++] = c[f++], c[p++] = c[f++]) : f += 2;
  for (u = p, f = p = 0; u > f; ) {
   for (var h = c[f], g = c[f + 1], m = f + 2; u >= m + 2 && c[m + 1] === g; ) m += 2;
   c[p++] = h, c[p++] = g, f = m;
  }
  u = c.length = p;
  var v, y = e.sourceNode;
  y && (v = y.style.display, y.style.display = "none");
  try {
   for (;a > l; ) {
    s[l];
    var b, w = s[l + 2] || o, x = c[d + 2] || o, m = Math.min(w, x), C = s[l + 1];
    if (1 !== C.nodeType && (b = i.substring(r, m))) {
     t && (b = b.replace(n, "\r")), C.nodeValue = b;
     var k = C.ownerDocument, S = k.createElement("span");
     S.className = c[d + 1];
     var T = C.parentNode;
     T.replaceChild(S, C), S.appendChild(C), w > r && (s[l + 1] = C = k.createTextNode(i.substring(m, w)), 
     T.insertBefore(C, S.nextSibling));
    }
    r = m, r >= w && (l += 2), r >= x && (d += 2);
   }
  } finally {
   y && (y.style.display = v);
  }
 }
 function l(e, t) {
  for (var n = t.length; --n >= 0; ) {
   var i = t[n];
   G.hasOwnProperty(i) ? f.console && console.warn("cannot override language handler %s", i) : G[i] = e;
  }
 }
 function c(e, t) {
  return e && G.hasOwnProperty(e) || (e = /^\s*</.test(t) ? "default-markup" : "default-code"), 
  G[e];
 }
 function u(e) {
  var n = e.langExtension;
  try {
   var i = t(e.sourceNode, e.pre), o = i.sourceCode;
   e.sourceCode = o, e.spans = i.spans, e.basePos = 0, c(n, o)(e), a(e);
  } catch (r) {
   f.console && console.log(r && r.stack || r);
  }
 }
 function d(e, t, n) {
  var i = document.createElement("div");
  i.innerHTML = "<pre>" + e + "</pre>", i = i.firstChild, n && s(i, n, !0);
  var o = {
   langExtension: t,
   numberLines: n,
   sourceNode: i,
   pre: 1
  };
  return u(o), i.innerHTML;
 }
 function p(e, t) {
  function n(e) {
   return r.getElementsByTagName(e);
  }
  function o() {
   for (var t = f.PR_SHOULD_USE_CONTINUATION ? g.now() + 250 : 1/0; c.length > v && t > g.now(); v++) {
    for (var n = c[v], r = S, l = n; l = l.previousSibling; ) {
     var d = l.nodeType, p = (7 === d || 8 === d) && l.nodeValue;
     if (p ? !/^\??prettify\b/.test(p) : 3 !== d || /\S/.test(l.nodeValue)) break;
     if (p) {
      r = {}, p.replace(/\b(\w+)=([\w:.%+-]+)/g, function(e, t, n) {
       r[t] = n;
      });
      break;
     }
    }
    var h = n.className;
    if ((r !== S || b.test(h)) && !w.test(h)) {
     for (var T = !1, _ = n.parentNode; _; _ = _.parentNode) {
      var E = _.tagName;
      if (k.test(E) && _.className && b.test(_.className)) {
       T = !0;
       break;
      }
     }
     if (!T) {
      n.className += " prettyprinted";
      var P = r.lang;
      if (!P) {
       P = h.match(y);
       var I;
       !P && (I = i(n)) && C.test(I.tagName) && (P = I.className.match(y)), P && (P = P[1]);
      }
      var $;
      if (x.test(n.tagName)) $ = 1; else {
       var z = n.currentStyle, N = a.defaultView, R = z ? z.whiteSpace : N && N.getComputedStyle ? N.getComputedStyle(n, null).getPropertyValue("white-space") : 0;
       $ = R && "pre" === R.substring(0, 3);
      }
      var L = r.linenums;
      (L = "true" === L || +L) || (L = h.match(/\blinenums\b(?::(\d+))?/), L = L ? L[1] && L[1].length ? +L[1] : !0 : !1), 
      L && s(n, L, $), m = {
       langExtension: P,
       sourceNode: n,
       numberLines: L,
       pre: $
      }, u(m);
     }
    }
   }
   c.length > v ? setTimeout(o, 250) : "function" == typeof e && e();
  }
  for (var r = t || document.body, a = r.ownerDocument || document, l = [ n("pre"), n("code"), n("xmp") ], c = [], d = 0; l.length > d; ++d) for (var p = 0, h = l[d].length; h > p; ++p) c.push(l[d][p]);
  l = null;
  var g = Date;
  g.now || (g = {
   now: function() {
    return +new Date();
   }
  });
  var m, v = 0, y = /\blang(?:uage)?-([\w.]+)(?!\S)/, b = /\bprettyprint\b/, w = /\bprettyprinted\b/, x = /pre|xmp/i, C = /^code$/i, k = /^(?:pre|code|xmp)$/i, S = {};
  o();
 }
 var f = window, h = [ "break,continue,do,else,for,if,return,while" ], g = [ h, "auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile" ], m = [ g, "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof" ], v = [ m, "alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where" ], y = [ m, "abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient" ], b = [ y, "as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where" ], w = "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes", x = [ m, "debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN" ], C = "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END", k = [ h, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None" ], S = [ h, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END" ], T = [ h, "as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use" ], _ = [ h, "case,done,elif,esac,eval,fi,function,in,local,set,then,until" ], E = [ v, b, x, C, k, S, _ ], P = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/, I = "str", $ = "kwd", z = "com", N = "typ", R = "lit", L = "pun", A = "pln", O = "tag", M = "dec", D = "src", j = "atn", H = "atv", F = "nocode", B = "(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*", W = /\S/, q = r({
  keywords: E,
  hashComments: !0,
  cStyleComments: !0,
  multiLineStrings: !0,
  regexLiterals: !0
 }), G = {};
 l(q, [ "default-code" ]), l(o([], [ [ A, /^[^<?]+/ ], [ M, /^<!\w[^>]*(?:>|$)/ ], [ z, /^<\!--[\s\S]*?(?:-\->|$)/ ], [ "lang-", /^<\?([\s\S]+?)(?:\?>|$)/ ], [ "lang-", /^<%([\s\S]+?)(?:%>|$)/ ], [ L, /^(?:<[%?]|[%?]>)/ ], [ "lang-", /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i ], [ "lang-js", /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i ], [ "lang-css", /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i ], [ "lang-in.tag", /^(<\/?[a-z][^<>]*>)/i ] ]), [ "default-markup", "htm", "html", "mxml", "xhtml", "xml", "xsl" ]), 
 l(o([ [ A, /^[\s]+/, null, " 	\r\n" ], [ H, /^(?:\"[^\"]*\"?|\'[^\']*\'?)/, null, "\"'" ] ], [ [ O, /^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i ], [ j, /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i ], [ "lang-uq.val", /^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/ ], [ L, /^[=<>\/]+/ ], [ "lang-js", /^on\w+\s*=\s*\"([^\"]+)\"/i ], [ "lang-js", /^on\w+\s*=\s*\'([^\']+)\'/i ], [ "lang-js", /^on\w+\s*=\s*([^\"\'>\s]+)/i ], [ "lang-css", /^style\s*=\s*\"([^\"]+)\"/i ], [ "lang-css", /^style\s*=\s*\'([^\']+)\'/i ], [ "lang-css", /^style\s*=\s*([^\"\'>\s]+)/i ] ]), [ "in.tag" ]), 
 l(o([], [ [ H, /^[\s\S]+/ ] ]), [ "uq.val" ]), l(r({
  keywords: v,
  hashComments: !0,
  cStyleComments: !0,
  types: P
 }), [ "c", "cc", "cpp", "cxx", "cyc", "m" ]), l(r({
  keywords: "null,true,false"
 }), [ "json" ]), l(r({
  keywords: b,
  hashComments: !0,
  cStyleComments: !0,
  verbatimStrings: !0,
  types: P
 }), [ "cs" ]), l(r({
  keywords: y,
  cStyleComments: !0
 }), [ "java" ]), l(r({
  keywords: _,
  hashComments: !0,
  multiLineStrings: !0
 }), [ "bash", "bsh", "csh", "sh" ]), l(r({
  keywords: k,
  hashComments: !0,
  multiLineStrings: !0,
  tripleQuotedStrings: !0
 }), [ "cv", "py", "python" ]), l(r({
  keywords: C,
  hashComments: !0,
  multiLineStrings: !0,
  regexLiterals: 2
 }), [ "perl", "pl", "pm" ]), l(r({
  keywords: S,
  hashComments: !0,
  multiLineStrings: !0,
  regexLiterals: !0
 }), [ "rb", "ruby" ]), l(r({
  keywords: x,
  cStyleComments: !0,
  regexLiterals: !0
 }), [ "javascript", "js" ]), l(r({
  keywords: w,
  hashComments: 3,
  cStyleComments: !0,
  multilineStrings: !0,
  tripleQuotedStrings: !0,
  regexLiterals: !0
 }), [ "coffee" ]), l(r({
  keywords: T,
  cStyleComments: !0,
  multilineStrings: !0
 }), [ "rc", "rs", "rust" ]), l(o([], [ [ I, /^[\s\S]+/ ] ]), [ "regex" ]);
 var U = f.PR = {
  createSimpleLexer: o,
  registerLangHandler: l,
  sourceDecorator: r,
  PR_ATTRIB_NAME: j,
  PR_ATTRIB_VALUE: H,
  PR_COMMENT: z,
  PR_DECLARATION: M,
  PR_KEYWORD: $,
  PR_LITERAL: R,
  PR_NOCODE: F,
  PR_PLAIN: A,
  PR_PUNCTUATION: L,
  PR_SOURCE: D,
  PR_STRING: I,
  PR_TAG: O,
  PR_TYPE: N,
  prettyPrintOne: IN_GLOBAL_SCOPE ? f.prettyPrintOne = d : prettyPrintOne = d,
  prettyPrint: prettyPrint = IN_GLOBAL_SCOPE ? f.prettyPrint = p : prettyPrint = p
 };
 "function" == typeof define && define.amd && define("google-code-prettify", [], function() {
  return U;
 });
})(), define("libs/prettify", function() {}), function() {
 function e(e) {
  return e.replace(/^\s+|\s+$/g, "");
 }
 function t(e) {
  return e.replace(/\s+$/g, "");
 }
 function n(e) {
  return e.replace(RegExp("^(\\t|[ ]{1,4})", "gm"), "");
 }
 function i(e, t) {
  return -1 != e.indexOf(t);
 }
 function o(e, t) {
  return e.replace(/<[^>]*>?/gi, function(e) {
   return e.match(t) ? e : "";
  });
 }
 function r(e, t) {
  for (var n = {}, i = 0; e.length > i; i++) n[e[i]] = e[i];
  for (i = 0; t.length > i; i++) n[t[i]] = t[i];
  var o = [];
  for (var r in n) n.hasOwnProperty(r) && o.push(n[r]);
  return o;
 }
 function s(e) {
  return "" != e.charAt(0) && (e = "" + e), "" != e.charAt(e.length - 1) && (e += ""), 
  e;
 }
 function a(e) {
  return "" == e.charAt(0) && (e = e.substr(1)), "" == e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), 
  e;
 }
 function l(e, t) {
  return o(c(e, t), p);
 }
 function c(e, t) {
  var n = t.blockGamutHookCallback(e);
  return n = d(n), n = n.replace(/~D/g, "$$").replace(/~T/g, "~"), n = t.previousPostConversion(n);
 }
 function u(e) {
  return e.replace(/\\\|/g, "&#124;").replace(/\\:/g, "&#58;");
 }
 function d(e) {
  return e = e.replace(/~E(\d+)E/g, function(e, t) {
   var n = parseInt(t);
   return String.fromCharCode(n);
  });
 }
 var p = RegExp([ "^(<\\/?(a|abbr|acronym|applet|area|b|basefont|", "bdo|big|button|cite|code|del|dfn|em|figcaption|", "font|i|iframe|img|input|ins|kbd|label|map|", "mark|meter|object|param|progress|q|ruby|rp|rt|s|", "samp|script|select|small|span|strike|strong|", "sub|sup|textarea|time|tt|u|var|wbr)[^>]*>|", "<(br)\\s?\\/?>)$" ].join(""), "i");
 Array.indexOf || (Array.prototype.indexOf = function(e) {
  for (var t = 0; this.length > t; t++) if (this[t] == e) return t;
  return -1;
 }), Markdown.Extra = function() {
  this.converter = null, this.hashBlocks = [], this.attributeBlocks = !1, this.googleCodePrettify = !1, 
  this.highlightJs = !1, this.tableClass = "", this.tabWidth = 4;
 }, Markdown.Extra.init = function(e, t) {
  var n = new Markdown.Extra(), o = [], r = [], s = [ "unHashExtraBlocks" ];
  return t = t || {}, t.extensions = t.extensions || [ "all" ], i(t.extensions, "all") && (t.extensions = [ "tables", "fenced_code_gfm", "def_list", "attr_list" ]), 
  i(t.extensions, "attr_list") && (o.push("hashFcbAttributeBlocks"), r.push("hashHeaderAttributeBlocks"), 
  s.push("applyAttributeBlocks"), n.attributeBlocks = !0), i(t.extensions, "tables") && r.push("tables"), 
  i(t.extensions, "fenced_code_gfm") && o.push("fencedCodeBlocks"), i(t.extensions, "def_list") && r.push("definitionLists"), 
  e.hooks.chain("postNormalization", function(e) {
   return n.doTransform(o, e) + "\n";
  }), e.hooks.chain("preBlockGamut", function(e, t) {
   return n.blockGamutHookCallback = t, e = u(e), n.doTransform(r, e) + "\n";
  }), n.previousPostConversion = e.hooks.postConversion, e.hooks.chain("postConversion", function(e) {
   return e = n.doTransform(s, e), this.hashBlocks = [], e;
  }), "highlighter" in t && (n.googleCodePrettify = "prettify" === t.highlighter, 
  n.highlightJs = "highlight" === t.highlighter), "table_class" in t && (n.tableClass = t.table_class), 
  n.converter = e, n;
 }, Markdown.Extra.prototype.doTransform = function(e, t) {
  for (var n = 0; e.length > n; n++) t = this[e[n]](t);
  return t;
 }, Markdown.Extra.prototype.hashExtraBlock = function(e) {
  return "\n<p>~X" + (this.hashBlocks.push(e) - 1) + "X</p>\n";
 }, Markdown.Extra.prototype.unHashExtraBlocks = function(e) {
  function t() {
   var i = !1;
   e = e.replace(/<p>~X(\d+)X<\/p>/g, function(e, t) {
    i = !0;
    var o = parseInt(t, 10);
    return n.hashBlocks[o];
   }), i === !0 && t();
  }
  var n = this;
  return t(), e;
 }, Markdown.Extra.prototype.hashHeaderAttributeBlocks = function(e) {
  function t(e, t, n) {
   return "<p>~XX" + (r.hashBlocks.push(n) - 1) + "XX</p>\n" + t + "\n";
  }
  var n = "\\{\\s*[.|#][^}]+\\}", i = RegExp("^(#{1,6}.*#{0,6})\\s+(" + n + ")[ \\t]*(\\n|0x03)", "gm"), o = RegExp("^(.*)\\s+(" + n + ")[ \\t]*\\n" + "(?=[\\-|=]+\\s*(\\n|0x03))", "gm"), r = this;
  return e = e.replace(i, t), e = e.replace(o, t);
 }, Markdown.Extra.prototype.hashFcbAttributeBlocks = function(e) {
  function t(e, t, n) {
   return "<p>~XX" + (o.hashBlocks.push(n) - 1) + "XX</p>\n" + t + "\n";
  }
  var n = "\\{\\s*[.|#][^}]+\\}", i = RegExp("^(```[^{]*)\\s+(" + n + ")[ \\t]*\\n" + "(?=([\\s\\S]*?)\\n```\\s*(\\n|0x03))", "gm"), o = this;
  return e.replace(i, t);
 }, Markdown.Extra.prototype.applyAttributeBlocks = function(e) {
  var t = this, n = RegExp('<p>~XX(\\d+)XX</p>[\\s]*(?:<(h[1-6]|pre)(?: +class="(\\S+)")?(>[\\s\\S]*?</\\2>))', "gm");
  return e = e.replace(n, function(e, n, i, o, s) {
   if (!i) return "";
   for (var a = parseInt(n, 10), l = t.hashBlocks[a], c = l.match(/#[^\s{}]+/g) || [], u = c[0] ? ' id="' + c[0].substr(1, c[0].length - 1) + '"' : "", d = l.match(/\.[^\s{}]+/g) || [], p = 0; d.length > p; p++) d[p] = d[p].substr(1, d[p].length - 1);
   var f = "";
   return o && (d = r(d, [ o ])), d.length > 0 && (f = ' class="' + d.join(" ") + '"'), 
   "<" + i + u + f + s;
  });
 }, Markdown.Extra.prototype.tables = function(t) {
  function n(t, n, o, r) {
   n = n.replace(/^ *[|]/m, ""), o = o.replace(/^ *[|]/m, ""), r = r.replace(/^ *[|]/gm, ""), 
   n = n.replace(/[|] *$/m, ""), o = o.replace(/[|] *$/m, ""), r = r.replace(/[|] *$/gm, ""), 
   alignspecs = o.split(/ *[|] */), align = [];
   for (var s = 0; alignspecs.length > s; s++) {
    var a = alignspecs[s];
    align[s] = a.match(/^ *-+: *$/m) ? ' style="text-align:right;"' : a.match(/^ *:-+: *$/m) ? ' style="text-align:center;"' : a.match(/^ *:-+ *$/m) ? ' style="text-align:left;"' : "";
   }
   var c = n.split(/ *[|] */), u = c.length, d = i.tableClass ? ' class="' + i.tableClass + '"' : "", p = [ "<table", d, ">\n", "<thead>\n", "<tr>\n" ].join("");
   for (s = 0; u > s; s++) {
    var f = l(e(c[s]), i);
    p += [ "  <th", align[s], ">", f, "</th>\n" ].join("");
   }
   p += "</tr>\n</thead>\n";
   var h = r.split("\n");
   for (s = 0; h.length > s; s++) if (!h[s].match(/^\s*$/)) {
    for (var g = h[s].split(/ *[|] */), m = u - g.length, v = 0; m > v; v++) g.push("");
    for (p += "<tr>\n", v = 0; u > v; v++) {
     var y = l(e(g[v]), i);
     p += [ "  <td", align[v], ">", y, "</td>\n" ].join("");
    }
    p += "</tr>\n";
   }
   return p += "</table>\n", i.hashExtraBlock(p);
  }
  var i = this, o = RegExp([ "^", "[ ]{0,3}", "[|]", "(.+)\\n", "[ ]{0,3}", "[|]([ ]*[-:]+[-| :]*)\\n", "(", "(?:[ ]*[|].*\\n?)*", ")", "(?:\\n|$)" ].join(""), "gm"), r = RegExp([ "^", "[ ]{0,3}", "(\\S.*[|].*)\\n", "[ ]{0,3}", "([-:]+[ ]*[|][-| :]*)\\n", "(", "(?:.*[|].*\\n?)*", ")", "(?:\\n|$)" ].join(""), "gm");
  return t = t.replace(o, n), t = t.replace(r, n);
 }, Markdown.Extra.prototype.fencedCodeBlocks = function(e) {
  function t(e) {
   return e = e.replace(/&/g, "&amp;"), e = e.replace(/</g, "&lt;"), e = e.replace(/>/g, "&gt;"), 
   e = e.replace(/~D/g, "$$"), e = e.replace(/~T/g, "~");
  }
  var n = this;
  return e = e.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g, function(e, i, o) {
   var r = i, s = o, a = n.googleCodePrettify ? ' class="prettyprint"' : "", l = "";
   r && (l = n.googleCodePrettify || n.highlightJs ? ' class="language-' + r + '"' : ' class="' + r + '"');
   var c = [ "<pre", a, "><code", l, ">", t(s), "</code></pre>" ].join("");
   return n.hashExtraBlock(c);
  });
 }, Markdown.Extra.prototype.definitionLists = function(t) {
  var n = RegExp([ "(\\x02\\n?|\\n\\n)", "(?:", "(", "(", "[ ]{0,3}", "((?:[ \\t]*\\S.*\\n)+)", "\\n?", "[ ]{0,3}:[ ]+", ")", "([\\s\\S]+?)", "(", "(?=\\0x03)", "|", "(?=", "\\n{2,}", "(?=\\S)", "(?!", "[ ]{0,3}", "(?:\\S.*\\n)+?", "\\n?", "[ ]{0,3}:[ ]+", ")", "(?!", "[ ]{0,3}:[ ]+", ")", ")", ")", ")", ")" ].join(""), "gm"), i = this;
  return t = s(t), t = t.replace(n, function(t, n, o) {
   var r = e(i.processDefListItems(o));
   return r = "<dl>\n" + r + "\n</dl>", n + i.hashExtraBlock(r) + "\n\n";
  }), a(t);
 }, Markdown.Extra.prototype.processDefListItems = function(i) {
  var o = this, r = RegExp([ "(\\x02\\n?|\\n\\n+)", "(", "[ ]{0,3}", "(?![:][ ]|[ ])", "(?:\\S.*\\n)+?", ")", "(?=\\n?[ ]{0,3}:[ ])" ].join(""), "gm"), u = RegExp([ "\\n(\\n+)?", "(", "[ ]{0,3}", "[:][ ]+", ")", "([\\s\\S]+?)", "(?=\\n*", "(?:", "\\n[ ]{0,3}[:][ ]|", "<dt>|\\x03", ")", ")" ].join(""), "gm");
  return i = s(i), i = i.replace(/\n{2,}(?=\\x03)/, "\n"), i = i.replace(r, function(t, n, i) {
   for (var r = e(i).split("\n"), s = "", a = 0; r.length > a; a++) {
    var c = r[a];
    c = l(e(c), o), s += "\n<dt>" + c + "</dt>";
   }
   return s + "\n";
  }), i = i.replace(u, function(e, i, r, s) {
   return i || s.match(/\n{2,}/) ? (s = Array(r.length + 1).join(" ") + s, s = n(s) + "\n\n", 
   s = "\n" + c(s, o) + "\n") : (s = t(s), s = l(n(s), o)), "\n<dd>" + s + "</dd>\n";
  }), a(i);
 };
}(), define("libs/Markdown.Extra", function() {}), define("extensions/markdown-extra", [ "utils", "text!html/markdownExtraSettingsBloc.html", "libs/Markdown.Extra" ], function(e, t) {
 var n = {
  extensionId: "markdownExtra",
  extensionName: "Markdown Extra",
  optional: !0,
  defaultConfig: {
   prettify: !0
  },
  settingsBloc: t
 };
 return n.onLoadSettings = function() {
  e.setInputChecked("#input-markdownextra-prettify", n.config.prettify);
 }, n.onSaveSettings = function(t) {
  t.prettify = e.getInputChecked("#input-markdownextra-prettify");
 }, n.onEditorConfigure = function(e) {
  var t = e.getConverter(), i = {};
  n.config.prettify === !0 && (i.highlighter = "prettify", e.hooks.chain("onPreviewRefresh", prettyPrint)), 
  Markdown.Extra.init(t, i);
 }, n;
}), define("text!html/tocSettingsBloc.html", [], function() {
 return '<p>Generates a table of content when a [TOC] marker is found.</p>\r\n<div class="form-horizontal">\r\n	<div class="control-group">\r\n		<label class="control-label" for="input-toc-marker">Marker\r\n			RegExp</label>\r\n		<div class="controls">\r\n			<input type="text" id="input-toc-marker" class="span2">\r\n		</div>\r\n	</div>\r\n</div>';
}), define("extensions/toc", [ "jquery", "underscore", "utils", "text!html/tocSettingsBloc.html" ], function(e, t, n, i) {
 function o(e, t, n) {
  this.tagName = e, this.anchor = t, this.text = n, this.children = [];
 }
 function r(e, n) {
  function i() {
   void 0 !== l && (l.children.length > 0 && (l.children = r(l.children, n + 1)), a.push(l));
  }
  n = n || 1;
  var s = "H" + n, a = [], l = void 0;
  return t.each(e, function(e) {
   e.tagName != s ? (void 0 === l && (l = new o()), l.children.push(e)) : (i(), l = e);
  }), i(), a;
 }
 function s() {
  function i(e) {
   for (var i = e.prop("id") || n.slugify(e.text()), o = i, r = 0; t.has(s, o); ) o = i + "-" + ++r;
   return s[o] = !0, e.prop("id", o), o;
  }
  var s = {}, a = [];
  return e("#wmd-preview > h1,#wmd-preview > h2,#wmd-preview > h3,#wmd-preview > h4,#wmd-preview > h5,#wmd-preview > h6").each(function() {
   a.push(new o(e(this).prop("tagName"), i(e(this)), e(this).text()));
  }), a = r(a), '<div class="toc"><ul>' + ("" + a) + "</ul></div>";
 }
 var a = {
  extensionId: "toc",
  extensionName: "Table of Content",
  optional: !0,
  defaultConfig: {
   marker: "\\[(TOC|toc)\\]"
  },
  settingsBloc: i
 };
 return a.onLoadSettings = function() {
  n.setInputValue("#input-toc-marker", a.config.marker);
 }, a.onSaveSettings = function(e, t) {
  e.marker = n.getInputRegExpValue("#input-toc-marker", t);
 }, o.prototype.childrenToString = function() {
  if (0 === this.children.length) return "";
  var e = "<ul>";
  return t.each(this.children, function(t) {
   e += "" + t;
  }), e += "</ul>";
 }, o.prototype.toString = function() {
  var e = "<li>";
  return this.anchor && this.text && (e += '<a href="#' + this.anchor + '">' + this.text + "</a>"), 
  e += this.childrenToString() + "</li>";
 }, a.onEditorConfigure = function(t) {
  t.hooks.chain("onPreviewRefresh", function() {
   var t = s(), n = e("#wmd-preview").html();
   n = n.replace(RegExp("<p>" + a.config.marker + "<\\/p>", "g"), t), e("#wmd-preview").html(n);
  });
 }, a;
}), define("extensions/mathJax", [ "libs/MathJax" ], function() {
 function e(e, t) {
  var n = s.slice(e, t + 1).join("").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  for (m.Browser.isMSIE && (n = n.replace(/(%[^\n]*)\n/g, "$1<br/>\n")); t > e; ) s[t] = "", 
  t--;
  s[e] = "@@" + d.length + "@@", d.push(n), a = l = c = null;
 }
 function t(t) {
  a = l = c = null, d = [], s = t.replace(/\r\n?/g, "\n").split(v);
  for (var n = 1, i = s.length; i > n; n += 2) {
   var o = s[n];
   "@" === o.charAt(0) ? (s[n] = "@@" + d.length + "@@", d.push(o)) : a ? o === l ? u ? c = n : e(a, n) : o.match(/\n.*\n/) ? (c && (n = c, 
   e(a, n)), a = l = c = null, u = 0) : "{" === o ? u++ : "}" === o && u && u-- : o === g || "$$" === o ? (a = n, 
   l = o, u = 0) : "begin" === o.substr(1, 5) && (a = n, l = "\\end" + o.substr(6), 
   u = 0);
  }
  return c && e(a, c), s.join("");
 }
 function n(e) {
  return e = e.replace(/@@(\d+)@@/g, function(e, t) {
   return d[t];
  }), d = null, e;
 }
 function i() {
  f = !1, m.cancelTypeset = !1, m.Queue([ "Typeset", m, h ]), m.Queue(y);
 }
 function o() {
  f || (f = !0, m.Cancel(), m.Queue(i));
 }
 var r = {
  extensionId: "mathJax",
  extensionName: "MathJax",
  optional: !0,
  settingsBloc: "<p>Allows StackEdit to interpret LaTex mathematical expressions.</p>"
 };
 r.onReady = function() {
  MathJax.Hub.Config({
   "HTML-CSS": {
    preferredFont: "TeX",
    availableFonts: [ "STIX", "TeX" ],
    linebreaks: {
     automatic: !0
    },
    EqnChunk: MathJax.Hub.Browser.isMobile ? 10 : 50,
    imageFont: null
   },
   tex2jax: {
    inlineMath: [ [ "$", "$" ], [ "\\\\(", "\\\\)" ] ],
    displayMath: [ [ "$$", "$$" ], [ "\\[", "\\]" ] ],
    processEscapes: !0,
    ignoreClass: "tex2jax_ignore|dno"
   },
   TeX: {
    noUndefined: {
     attributes: {
      mathcolor: "red",
      mathbackground: "#FFEEEE",
      mathsize: "90%"
     }
    },
    Safe: {
     allow: {
      URLs: "safe",
      classes: "safe",
      cssIDs: "safe",
      styles: "safe",
      fontsize: "all"
     }
    }
   },
   messageStyle: "none"
  });
 };
 var s, a, l, c, u, d, p = !1, f = !1, h = null, g = "$", m = MathJax.Hub;
 m.Queue(function() {
  p = !0, m.processUpdateTime = 50, m.Config({
   "HTML-CSS": {
    EqnChunk: 10,
    EqnChunkFactor: 1
   },
   SVG: {
    EqnChunk: 10,
    EqnChunkFactor: 1
   }
  });
 });
 var v = /(\$\$?|\\(?:begin|end)\{[a-z]*\*?\}|\\[\\{}$]|[{}]|(?:\n\s*)+|@@\d+@@)/i, y = void 0;
 if (r.onEditorConfigure = function(e) {
  h = document.getElementById("wmd-preview");
  var i = e.getConverter();
  i.hooks.chain("preConversion", t), i.hooks.chain("postConversion", n);
 }, r.onAsyncPreview = function(e) {
  y = e, o();
 }, !m.Cancel) {
  m.cancelTypeset = !1;
  var b = "MathJax Canceled";
  m.Register.StartupHook("HTML-CSS Jax Config", function() {
   var e = MathJax.OutputJax["HTML-CSS"], t = e.Translate;
   e.Augment({
    Translate: function(n, i) {
     if (m.cancelTypeset || i.cancelled) throw Error(b);
     return t.call(e, n, i);
    }
   });
  }), m.Register.StartupHook("SVG Jax Config", function() {
   var e = MathJax.OutputJax.SVG, t = e.Translate;
   e.Augment({
    Translate: function(n, i) {
     if (m.cancelTypeset || i.cancelled) throw Error(b);
     return t.call(e, n, i);
    }
   });
  }), m.Register.StartupHook("TeX Jax Config", function() {
   var e = MathJax.InputJax.TeX, t = e.Translate;
   e.Augment({
    Translate: function(n, i) {
     if (m.cancelTypeset || i.cancelled) throw Error(b);
     return t.call(e, n, i);
    }
   });
  });
  var w = m.processError;
  m.processError = function(e, t, n) {
   return e.message !== b ? w.call(m, e, t, n) : (MathJax.Message.Clear(0, 0), t.jaxIDs = [], 
   t.jax = {}, t.scripts = [], t.i = t.j = 0, t.cancelled = !0, null);
  }, m.Cancel = function() {
   this.cancelTypeset = !0;
  };
 }
 return r;
}), define("extensions/emailConverter", [], function() {
 var e = {
  extensionId: "emailConverter",
  extensionName: "Email Converter",
  optional: !0,
  settingsBloc: "<p>Converts email adresses in the form &lt;email@example.com&gt; into clickable links.</p>"
 };
 return e.onEditorConfigure = function(e) {
  e.getConverter().hooks.chain("postConversion", function(e) {
   return e.replace(/<(mailto\:)?([^\s>]+@[^\s>]+\.\S+?)>/g, function(e, t, n) {
    return '<a href="mailto:' + n + '">' + n + "</a>";
   });
  });
 }, e;
}), define("text!html/scrollLinkSettingsBloc.html", [], function() {
 return '<p>Binds together editor and preview scrollbars.</p>\r\n<blockquote class="muted">\r\n	<b>NOTE:</b> The mapping between Markdown and HTML is based on the\r\n	position of the title elements (h1 h2 ...) in the page. Therefore if\r\n	your document does not contain any title the mapping will be linear and\r\n	consequently less accurate.\r\n</blockquote>';
}), showLog = !0, css_browser_selector(navigator.userAgent), define("libs/css_browser_selector", function() {}), 
function(e) {
 "function" == typeof define && define.amd ? define("libs/jquery.mousewheel", [ "jquery" ], e) : "object" == typeof exports ? module.exports = e : e(jQuery);
}(function(e) {
 function t(t) {
  var o, r = t || window.event, s = [].slice.call(arguments, 1), a = 0, l = 0, c = 0, u = 0, d = 0;
  return t = e.event.fix(r), t.type = "mousewheel", r.wheelDelta && (a = r.wheelDelta), 
  r.detail && (a = -1 * r.detail), r.deltaY && (c = -1 * r.deltaY, a = c), r.deltaX && (l = r.deltaX, 
  a = -1 * l), void 0 !== r.wheelDeltaY && (c = r.wheelDeltaY), void 0 !== r.wheelDeltaX && (l = -1 * r.wheelDeltaX), 
  u = Math.abs(a), (!n || n > u) && (n = u), d = Math.max(Math.abs(c), Math.abs(l)), 
  (!i || i > d) && (i = d), o = a > 0 ? "floor" : "ceil", a = Math[o](a / n), l = Math[o](l / i), 
  c = Math[o](c / i), s.unshift(t, a, l, c), (e.event.dispatch || e.event.handle).apply(this, s);
 }
 var n, i, o = [ "wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll" ], r = "onwheel" in document || document.documentMode >= 9 ? [ "wheel" ] : [ "mousewheel", "DomMouseScroll", "MozMousePixelScroll" ];
 if (e.event.fixHooks) for (var s = o.length; s; ) e.event.fixHooks[o[--s]] = e.event.mouseHooks;
 e.event.special.mousewheel = {
  setup: function() {
   if (this.addEventListener) for (var e = r.length; e; ) this.addEventListener(r[--e], t, !1); else this.onmousewheel = t;
  },
  teardown: function() {
   if (this.removeEventListener) for (var e = r.length; e; ) this.removeEventListener(r[--e], t, !1); else this.onmousewheel = null;
  }
 }, e.fn.extend({
  mousewheel: function(e) {
   return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
  },
  unmousewheel: function(e) {
   return this.unbind("mousewheel", e);
  }
 });
}), define("extensions/scrollLink", [ "jquery", "underscore", "text!html/scrollLinkSettingsBloc.html", "libs/css_browser_selector", "libs/jquery.mousewheel" ], function(e, t, n) {
 function i(e) {
  return parseFloat(e.substring(0, e.length - 2));
 }
 var o = {
  extensionId: "scrollLink",
  extensionName: "Scroll Link",
  optional: !0,
  settingsBloc: n
 }, r = [], s = [], a = void 0, l = void 0, c = t.debounce(function() {
  function t(e) {
   var t = c;
   void 0 !== e && (o.val(e), t += o.prop("scrollHeight"));
   var n = d + t;
   r.push({
    startOffset: d,
    endOffset: n,
    height: t
   }), d = n, c = 0;
  }
  var n = e("#wmd-input");
  r = [];
  var o = e("#md-section-helper");
  o.width(n.width());
  var c = i(n.css("padding-top")), u = 0, d = 0, f = n.val() + "\n\n";
  f.replace(/^```.*\n[\s\S]*?\n```|(^.+[ \t]*\n=+[ \t]*\n+|^.+[ \t]*\n-+[ \t]*\n+|^\#{1,6}[ \t]*.+?[ \t]*\#*\n+)/gm, function(e, n, i) {
   if (n) {
    var o = void 0;
    i > u && (o = f.substring(u, i - 1)), t(o), u = i;
   }
   return "";
  }), c += i(n.css("padding-bottom")), t(f.substring(u, f.length - 2));
  var h = e(".preview-container");
  s = [];
  var g = 0, m = h.scrollTop();
  e("#wmd-preview").children("h1,h2,h3,h4,h5,h6").each(function() {
   var t = e(this).position().top + m + i(e(this).css("margin-top"));
   s.push({
    startOffset: g,
    endOffset: t,
    height: t - g
   }), g = t;
  });
  var v = h.prop("scrollHeight");
  s.push({
   startOffset: g,
   endOffset: v,
   height: v - g
  }), a = -10, l = -10, p();
 }, 500), u = !1, d = !1, p = t.debounce(function() {
  function n(e, n, i, o, r, s) {
   var a = void 0, l = t.find(n, function(t, n) {
    return a = n, t.endOffset > e;
   });
   if (void 0 !== l) {
    var c = (e - l.startOffset) / l.height, u = o[a], d = u.startOffset + u.height * c;
    return d = t.min([ d, i.prop("scrollHeight") - i.outerHeight() ]), 9 >= Math.abs(d - r) ? (s(r), 
    void 0) : (i.animate({
     scrollTop: d
    }, 500, function() {
     s(d);
    }), void 0);
   }
  }
  if (0 !== r.length && r.length === s.length) {
   var i = e("#wmd-input"), o = i.scrollTop(), c = e(".preview-container"), p = c.scrollTop();
   u === !0 && Math.abs(o - a) > 9 ? (u = !1, a = o, n(o, r, c, s, p, function(e) {
    l = e;
   })) : d === !0 && Math.abs(p - l) > 9 && (d = !1, l = p, n(p, s, i, r, o, function(e) {
    a = e;
   }));
  }
 }, 500);
 return o.onLayoutConfigure = function(e) {
  e.onresize = function() {
   u = !0, c();
  };
 }, o.onLayoutCreated = function() {
  e(".preview-container").bind("keyup mouseup mousewheel", function() {
   d = !0, u = !1, p();
  }), e("#wmd-input").bind("keyup mouseup mousewheel", function() {
   u = !0, d = !1, p();
  });
 }, o.onEditorConfigure = function(t) {
  t.getConverter().hooks.chain("postConversion", function(t) {
   var n = e("#wmd-preview");
   return n.height(n.height()), t;
  });
 }, o.onPreviewFinished = function() {
  e("#wmd-preview").height("auto"), u = !0, c();
 }, o;
}), !function(e) {
 e(function() {
  e.support.transition = function() {
   var e = function() {
    var e, t = document.createElement("bootstrap"), n = {
     WebkitTransition: "webkitTransitionEnd",
     MozTransition: "transitionend",
     OTransition: "oTransitionEnd otransitionend",
     transition: "transitionend"
    };
    for (e in n) if (void 0 !== t.style[e]) return n[e];
   }();
   return e && {
    end: e
   };
  }();
 });
}(window.jQuery), !function(e) {
 var t = '[data-dismiss="alert"]', n = function(n) {
  e(n).on("click", t, this.close);
 };
 n.prototype.close = function(t) {
  function n() {
   i.trigger("closed").remove();
  }
  var i, o = e(this), r = o.attr("data-target");
  r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), i = e(r), t && t.preventDefault(), 
  i.length || (i = o.hasClass("alert") ? o : o.parent()), i.trigger(t = e.Event("close")), 
  t.isDefaultPrevented() || (i.removeClass("in"), e.support.transition && i.hasClass("fade") ? i.on(e.support.transition.end, n) : n());
 };
 var i = e.fn.alert;
 e.fn.alert = function(t) {
  return this.each(function() {
   var i = e(this), o = i.data("alert");
   o || i.data("alert", o = new n(this)), "string" == typeof t && o[t].call(i);
  });
 }, e.fn.alert.Constructor = n, e.fn.alert.noConflict = function() {
  return e.fn.alert = i, this;
 }, e(document).on("click.alert.data-api", t, n.prototype.close);
}(window.jQuery), !function(e) {
 var t = function(t, n) {
  this.$element = e(t), this.options = e.extend({}, e.fn.button.defaults, n);
 };
 t.prototype.setState = function(e) {
  var t = "disabled", n = this.$element, i = n.data(), o = n.is("input") ? "val" : "html";
  e += "Text", i.resetText || n.data("resetText", n[o]()), n[o](i[e] || this.options[e]), 
  setTimeout(function() {
   "loadingText" == e ? n.addClass(t).attr(t, t) : n.removeClass(t).removeAttr(t);
  }, 0);
 }, t.prototype.toggle = function() {
  var e = this.$element.closest('[data-toggle="buttons-radio"]');
  e && e.find(".active").removeClass("active"), this.$element.toggleClass("active");
 };
 var n = e.fn.button;
 e.fn.button = function(n) {
  return this.each(function() {
   var i = e(this), o = i.data("button"), r = "object" == typeof n && n;
   o || i.data("button", o = new t(this, r)), "toggle" == n ? o.toggle() : n && o.setState(n);
  });
 }, e.fn.button.defaults = {
  loadingText: "loading..."
 }, e.fn.button.Constructor = t, e.fn.button.noConflict = function() {
  return e.fn.button = n, this;
 }, e(document).on("click.button.data-api", "[data-toggle^=button]", function(t) {
  var n = e(t.target);
  n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle");
 });
}(window.jQuery), !function(e) {
 var t = function(t, n) {
  this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), 
  this.options = n, "hover" == this.options.pause && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this));
 };
 t.prototype = {
  cycle: function(t) {
   return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), 
   this;
  },
  getActiveIndex: function() {
   return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), 
   this.$items.index(this.$active);
  },
  to: function(t) {
   var n = this.getActiveIndex(), i = this;
   if (!(t > this.$items.length - 1 || 0 > t)) return this.sliding ? this.$element.one("slid", function() {
    i.to(t);
   }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", e(this.$items[t]));
  },
  pause: function(t) {
   return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition.end && (this.$element.trigger(e.support.transition.end), 
   this.cycle(!0)), clearInterval(this.interval), this.interval = null, this;
  },
  next: function() {
   return this.sliding ? void 0 : this.slide("next");
  },
  prev: function() {
   return this.sliding ? void 0 : this.slide("prev");
  },
  slide: function(t, n) {
   var i, o = this.$element.find(".item.active"), r = n || o[t](), s = this.interval, a = "next" == t ? "left" : "right", l = "next" == t ? "first" : "last", c = this;
   if (this.sliding = !0, s && this.pause(), r = r.length ? r : this.$element.find(".item")[l](), 
   i = e.Event("slide", {
    relatedTarget: r[0],
    direction: a
   }), !r.hasClass("active")) {
    if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), 
    this.$element.one("slid", function() {
     var t = e(c.$indicators.children()[c.getActiveIndex()]);
     t && t.addClass("active");
    })), e.support.transition && this.$element.hasClass("slide")) {
     if (this.$element.trigger(i), i.isDefaultPrevented()) return;
     r.addClass(t), r[0].offsetWidth, o.addClass(a), r.addClass(a), this.$element.one(e.support.transition.end, function() {
      r.removeClass([ t, a ].join(" ")).addClass("active"), o.removeClass([ "active", a ].join(" ")), 
      c.sliding = !1, setTimeout(function() {
       c.$element.trigger("slid");
      }, 0);
     });
    } else {
     if (this.$element.trigger(i), i.isDefaultPrevented()) return;
     o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger("slid");
    }
    return s && this.cycle(), this;
   }
  }
 };
 var n = e.fn.carousel;
 e.fn.carousel = function(n) {
  return this.each(function() {
   var i = e(this), o = i.data("carousel"), r = e.extend({}, e.fn.carousel.defaults, "object" == typeof n && n), s = "string" == typeof n ? n : r.slide;
   o || i.data("carousel", o = new t(this, r)), "number" == typeof n ? o.to(n) : s ? o[s]() : r.interval && o.pause().cycle();
  });
 }, e.fn.carousel.defaults = {
  interval: 5e3,
  pause: "hover"
 }, e.fn.carousel.Constructor = t, e.fn.carousel.noConflict = function() {
  return e.fn.carousel = n, this;
 }, e(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function(t) {
  var n, i, o = e(this), r = e(o.attr("data-target") || (n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")), s = e.extend({}, r.data(), o.data());
  r.carousel(s), (i = o.attr("data-slide-to")) && r.data("carousel").pause().to(i).cycle(), 
  t.preventDefault();
 });
}(window.jQuery), !function(e) {
 var t = function(t, n) {
  this.$element = e(t), this.options = e.extend({}, e.fn.collapse.defaults, n), this.options.parent && (this.$parent = e(this.options.parent)), 
  this.options.toggle && this.toggle();
 };
 t.prototype = {
  constructor: t,
  dimension: function() {
   var e = this.$element.hasClass("width");
   return e ? "width" : "height";
  },
  show: function() {
   var t, n, i, o;
   if (!this.transitioning && !this.$element.hasClass("in")) {
    if (t = this.dimension(), n = e.camelCase([ "scroll", t ].join("-")), i = this.$parent && this.$parent.find("> .accordion-group > .in"), 
    i && i.length) {
     if (o = i.data("collapse"), o && o.transitioning) return;
     i.collapse("hide"), o || i.data("collapse", null);
    }
    this.$element[t](0), this.transition("addClass", e.Event("show"), "shown"), e.support.transition && this.$element[t](this.$element[0][n]);
   }
  },
  hide: function() {
   var t;
   !this.transitioning && this.$element.hasClass("in") && (t = this.dimension(), this.reset(this.$element[t]()), 
   this.transition("removeClass", e.Event("hide"), "hidden"), this.$element[t](0));
  },
  reset: function(e) {
   var t = this.dimension();
   return this.$element.removeClass("collapse")[t](e || "auto")[0].offsetWidth, this.$element[null !== e ? "addClass" : "removeClass"]("collapse"), 
   this;
  },
  transition: function(t, n, i) {
   var o = this, r = function() {
    "show" == n.type && o.reset(), o.transitioning = 0, o.$element.trigger(i);
   };
   this.$element.trigger(n), n.isDefaultPrevented() || (this.transitioning = 1, this.$element[t]("in"), 
   e.support.transition && this.$element.hasClass("collapse") ? this.$element.one(e.support.transition.end, r) : r());
  },
  toggle: function() {
   this[this.$element.hasClass("in") ? "hide" : "show"]();
  }
 };
 var n = e.fn.collapse;
 e.fn.collapse = function(n) {
  return this.each(function() {
   var i = e(this), o = i.data("collapse"), r = e.extend({}, e.fn.collapse.defaults, i.data(), "object" == typeof n && n);
   o || i.data("collapse", o = new t(this, r)), "string" == typeof n && o[n]();
  });
 }, e.fn.collapse.defaults = {
  toggle: !0
 }, e.fn.collapse.Constructor = t, e.fn.collapse.noConflict = function() {
  return e.fn.collapse = n, this;
 }, e(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(t) {
  var n, i = e(this), o = i.attr("data-target") || t.preventDefault() || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""), r = e(o).data("collapse") ? "toggle" : i.data();
  i[e(o).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), e(o).collapse(r);
 });
}(window.jQuery), !function(e) {
 function t() {
  e(".dropdown-backdrop").remove(), e(i).each(function() {
   n(e(this)).removeClass("open");
  });
 }
 function n(t) {
  var n, i = t.attr("data-target");
  return i || (i = t.attr("href"), i = i && /#/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), 
  n = i && e(i), n && n.length || (n = t.parent()), n;
 }
 var i = "[data-toggle=dropdown]", o = function(t) {
  var n = e(t).on("click.dropdown.data-api", this.toggle);
  e("html").on("click.dropdown.data-api", function() {
   n.parent().removeClass("open");
  });
 };
 o.prototype = {
  constructor: o,
  toggle: function() {
   var i, o, r = e(this);
   if (!r.is(".disabled, :disabled")) return i = n(r), o = i.hasClass("open"), t(), 
   o || ("ontouchstart" in document.documentElement && e('<div class="dropdown-backdrop"/>').insertBefore(e(this)).on("click", t), 
   i.toggleClass("open")), r.focus(), !1;
  },
  keydown: function(t) {
   var o, r, s, a, l;
   if (/(38|40|27)/.test(t.keyCode) && (o = e(this), t.preventDefault(), t.stopPropagation(), 
   !o.is(".disabled, :disabled"))) {
    if (s = n(o), a = s.hasClass("open"), !a || a && 27 == t.keyCode) return 27 == t.which && s.find(i).focus(), 
    o.click();
    r = e("[role=menu] li:not(.divider):visible a", s), r.length && (l = r.index(r.filter(":focus")), 
    38 == t.keyCode && l > 0 && l--, 40 == t.keyCode && r.length - 1 > l && l++, ~l || (l = 0), 
    r.eq(l).focus());
   }
  }
 };
 var r = e.fn.dropdown;
 e.fn.dropdown = function(t) {
  return this.each(function() {
   var n = e(this), i = n.data("dropdown");
   i || n.data("dropdown", i = new o(this)), "string" == typeof t && i[t].call(n);
  });
 }, e.fn.dropdown.Constructor = o, e.fn.dropdown.noConflict = function() {
  return e.fn.dropdown = r, this;
 }, e(document).on("click.dropdown.data-api", t).on("click.dropdown.data-api", ".dropdown form", function(e) {
  e.stopPropagation();
 }).on("click.dropdown.data-api", i, o.prototype.toggle).on("keydown.dropdown.data-api", i + ", [role=menu]", o.prototype.keydown);
}(window.jQuery), !function(e) {
 var t = function(t, n) {
  this.options = n, this.$element = e(t).delegate('[data-dismiss="modal"]', "click.dismiss.modal", e.proxy(this.hide, this)), 
  this.options.remote && this.$element.find(".modal-body").load(this.options.remote);
 };
 t.prototype = {
  constructor: t,
  toggle: function() {
   return this[this.isShown ? "hide" : "show"]();
  },
  show: function() {
   var t = this, n = e.Event("show");
   this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, 
   this.escape(), this.backdrop(function() {
    var n = e.support.transition && t.$element.hasClass("fade");
    t.$element.parent().length || t.$element.appendTo(document.body), t.$element.show(), 
    n && t.$element[0].offsetWidth, t.$element.addClass("in").attr("aria-hidden", !1), 
    t.enforceFocus(), n ? t.$element.one(e.support.transition.end, function() {
     t.$element.focus().trigger("shown");
    }) : t.$element.focus().trigger("shown");
   }));
  },
  hide: function(t) {
   t && t.preventDefault(), t = e.Event("hide"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, 
   this.escape(), e(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), 
   e.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal());
  },
  enforceFocus: function() {
   var t = this;
   e(document).on("focusin.modal", function(e) {
    t.$element[0] === e.target || t.$element.has(e.target).length || t.$element.focus();
   });
  },
  escape: function() {
   var e = this;
   this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(t) {
    27 == t.which && e.hide();
   }) : this.isShown || this.$element.off("keyup.dismiss.modal");
  },
  hideWithTransition: function() {
   var t = this, n = setTimeout(function() {
    t.$element.off(e.support.transition.end), t.hideModal();
   }, 500);
   this.$element.one(e.support.transition.end, function() {
    clearTimeout(n), t.hideModal();
   });
  },
  hideModal: function() {
   var e = this;
   this.$element.hide(), this.backdrop(function() {
    e.removeBackdrop(), e.$element.trigger("hidden");
   });
  },
  removeBackdrop: function() {
   this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  },
  backdrop: function(t) {
   var n = this.$element.hasClass("fade") ? "fade" : "";
   if (this.isShown && this.options.backdrop) {
    var i = e.support.transition && n;
    if (this.$backdrop = e('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), 
    this.$backdrop.click("static" == this.options.backdrop ? e.proxy(this.$element[0].focus, this.$element[0]) : e.proxy(this.hide, this)), 
    i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
    i ? this.$backdrop.one(e.support.transition.end, t) : t();
   } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t) : t()) : t && t();
  }
 };
 var n = e.fn.modal;
 e.fn.modal = function(n) {
  return this.each(function() {
   var i = e(this), o = i.data("modal"), r = e.extend({}, e.fn.modal.defaults, i.data(), "object" == typeof n && n);
   o || i.data("modal", o = new t(this, r)), "string" == typeof n ? o[n]() : r.show && o.show();
  });
 }, e.fn.modal.defaults = {
  backdrop: !0,
  keyboard: !0,
  show: !0
 }, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function() {
  return e.fn.modal = n, this;
 }, e(document).on("click.modal.data-api", '[data-toggle="modal"]', function(t) {
  var n = e(this), i = n.attr("href"), o = e(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")), r = o.data("modal") ? "toggle" : e.extend({
   remote: !/#/.test(i) && i
  }, o.data(), n.data());
  t.preventDefault(), o.modal(r).one("hide", function() {
   n.focus();
  });
 });
}(window.jQuery), !function(e) {
 var t = function(e, t) {
  this.init("tooltip", e, t);
 };
 t.prototype = {
  constructor: t,
  init: function(t, n, i) {
   var o, r, s, a, l;
   for (this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.enabled = !0, 
   s = this.options.trigger.split(" "), l = s.length; l--; ) a = s[l], "click" == a ? this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this)) : "manual" != a && (o = "hover" == a ? "mouseenter" : "focus", 
   r = "hover" == a ? "mouseleave" : "blur", this.$element.on(o + "." + this.type, this.options.selector, e.proxy(this.enter, this)), 
   this.$element.on(r + "." + this.type, this.options.selector, e.proxy(this.leave, this)));
   this.options.selector ? this._options = e.extend({}, this.options, {
    trigger: "manual",
    selector: ""
   }) : this.fixTitle();
  },
  getOptions: function(t) {
   return t = e.extend({}, e.fn[this.type].defaults, this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
    show: t.delay,
    hide: t.delay
   }), t;
  },
  enter: function(t) {
   var n, i = e.fn[this.type].defaults, o = {};
   return this._options && e.each(this._options, function(e, t) {
    i[e] != t && (o[e] = t);
   }, this), n = e(t.currentTarget)[this.type](o).data(this.type), n.options.delay && n.options.delay.show ? (clearTimeout(this.timeout), 
   n.hoverState = "in", this.timeout = setTimeout(function() {
    "in" == n.hoverState && n.show();
   }, n.options.delay.show), void 0) : n.show();
  },
  leave: function(t) {
   var n = e(t.currentTarget)[this.type](this._options).data(this.type);
   return this.timeout && clearTimeout(this.timeout), n.options.delay && n.options.delay.hide ? (n.hoverState = "out", 
   this.timeout = setTimeout(function() {
    "out" == n.hoverState && n.hide();
   }, n.options.delay.hide), void 0) : n.hide();
  },
  show: function() {
   var t, n, i, o, r, s, a = e.Event("show");
   if (this.hasContent() && this.enabled) {
    if (this.$element.trigger(a), a.isDefaultPrevented()) return;
    switch (t = this.tip(), this.setContent(), this.options.animation && t.addClass("fade"), 
    r = "function" == typeof this.options.placement ? this.options.placement.call(this, t[0], this.$element[0]) : this.options.placement, 
    t.detach().css({
     top: 0,
     left: 0,
     display: "block"
    }), this.options.container ? t.appendTo(this.options.container) : t.insertAfter(this.$element), 
    n = this.getPosition(), i = t[0].offsetWidth, o = t[0].offsetHeight, r) {
    case "bottom":
     s = {
      top: n.top + n.height,
      left: n.left + n.width / 2 - i / 2
     };
     break;

    case "top":
     s = {
      top: n.top - o,
      left: n.left + n.width / 2 - i / 2
     };
     break;

    case "left":
     s = {
      top: n.top + n.height / 2 - o / 2,
      left: n.left - i
     };
     break;

    case "right":
     s = {
      top: n.top + n.height / 2 - o / 2,
      left: n.left + n.width
     };
    }
    this.applyPlacement(s, r), this.$element.trigger("shown");
   }
  },
  applyPlacement: function(e, t) {
   var n, i, o, r, s = this.tip(), a = s[0].offsetWidth, l = s[0].offsetHeight;
   s.offset(e).addClass(t).addClass("in"), n = s[0].offsetWidth, i = s[0].offsetHeight, 
   "top" == t && i != l && (e.top = e.top + l - i, r = !0), "bottom" == t || "top" == t ? (o = 0, 
   0 > e.left && (o = -2 * e.left, e.left = 0, s.offset(e), n = s[0].offsetWidth, i = s[0].offsetHeight), 
   this.replaceArrow(o - a + n, n, "left")) : this.replaceArrow(i - l, i, "top"), r && s.offset(e);
  },
  replaceArrow: function(e, t, n) {
   this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "");
  },
  setContent: function() {
   var e = this.tip(), t = this.getTitle();
   e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right");
  },
  hide: function() {
   function t() {
    var t = setTimeout(function() {
     n.off(e.support.transition.end).detach();
    }, 500);
    n.one(e.support.transition.end, function() {
     clearTimeout(t), n.detach();
    });
   }
   var n = this.tip(), i = e.Event("hide");
   return this.$element.trigger(i), i.isDefaultPrevented() ? void 0 : (n.removeClass("in"), 
   e.support.transition && this.$tip.hasClass("fade") ? t() : n.detach(), this.$element.trigger("hidden"), 
   this);
  },
  fixTitle: function() {
   var e = this.$element;
   (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "");
  },
  hasContent: function() {
   return this.getTitle();
  },
  getPosition: function() {
   var t = this.$element[0];
   return e.extend({}, "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
    width: t.offsetWidth,
    height: t.offsetHeight
   }, this.$element.offset());
  },
  getTitle: function() {
   var e, t = this.$element, n = this.options;
   return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title);
  },
  tip: function() {
   return this.$tip = this.$tip || e(this.options.template);
  },
  arrow: function() {
   return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  },
  validate: function() {
   this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null);
  },
  enable: function() {
   this.enabled = !0;
  },
  disable: function() {
   this.enabled = !1;
  },
  toggleEnabled: function() {
   this.enabled = !this.enabled;
  },
  toggle: function(t) {
   var n = t ? e(t.currentTarget)[this.type](this._options).data(this.type) : this;
   n.tip().hasClass("in") ? n.hide() : n.show();
  },
  destroy: function() {
   this.hide().$element.off("." + this.type).removeData(this.type);
  }
 };
 var n = e.fn.tooltip;
 e.fn.tooltip = function(n) {
  return this.each(function() {
   var i = e(this), o = i.data("tooltip"), r = "object" == typeof n && n;
   o || i.data("tooltip", o = new t(this, r)), "string" == typeof n && o[n]();
  });
 }, e.fn.tooltip.Constructor = t, e.fn.tooltip.defaults = {
  animation: !0,
  placement: "top",
  selector: !1,
  template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  trigger: "hover focus",
  title: "",
  delay: 0,
  html: !1,
  container: !1
 }, e.fn.tooltip.noConflict = function() {
  return e.fn.tooltip = n, this;
 };
}(window.jQuery), !function(e) {
 var t = function(e, t) {
  this.init("popover", e, t);
 };
 t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype, {
  constructor: t,
  setContent: function() {
   var e = this.tip(), t = this.getTitle(), n = this.getContent();
   e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content")[this.options.html ? "html" : "text"](n), 
   e.removeClass("fade top bottom left right in");
  },
  hasContent: function() {
   return this.getTitle() || this.getContent();
  },
  getContent: function() {
   var e, t = this.$element, n = this.options;
   return e = ("function" == typeof n.content ? n.content.call(t[0]) : n.content) || t.attr("data-content");
  },
  tip: function() {
   return this.$tip || (this.$tip = e(this.options.template)), this.$tip;
  },
  destroy: function() {
   this.hide().$element.off("." + this.type).removeData(this.type);
  }
 });
 var n = e.fn.popover;
 e.fn.popover = function(n) {
  return this.each(function() {
   var i = e(this), o = i.data("popover"), r = "object" == typeof n && n;
   o || i.data("popover", o = new t(this, r)), "string" == typeof n && o[n]();
  });
 }, e.fn.popover.Constructor = t, e.fn.popover.defaults = e.extend({}, e.fn.tooltip.defaults, {
  placement: "right",
  trigger: "click",
  content: "",
  template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
 }), e.fn.popover.noConflict = function() {
  return e.fn.popover = n, this;
 };
}(window.jQuery), !function(e) {
 function t(t, n) {
  var i, o = e.proxy(this.process, this), r = e(t).is("body") ? e(window) : e(t);
  this.options = e.extend({}, e.fn.scrollspy.defaults, n), this.$scrollElement = r.on("scroll.scroll-spy.data-api", o), 
  this.selector = (this.options.target || (i = e(t).attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", 
  this.$body = e("body"), this.refresh(), this.process();
 }
 t.prototype = {
  constructor: t,
  refresh: function() {
   var t, n = this;
   this.offsets = e([]), this.targets = e([]), t = this.$body.find(this.selector).map(function() {
    var t = e(this), i = t.data("target") || t.attr("href"), o = /^#\w/.test(i) && e(i);
    return o && o.length && [ [ o.position().top + (!e.isWindow(n.$scrollElement.get(0)) && n.$scrollElement.scrollTop()), i ] ] || null;
   }).sort(function(e, t) {
    return e[0] - t[0];
   }).each(function() {
    n.offsets.push(this[0]), n.targets.push(this[1]);
   });
  },
  process: function() {
   var e, t = this.$scrollElement.scrollTop() + this.options.offset, n = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, i = n - this.$scrollElement.height(), o = this.offsets, r = this.targets, s = this.activeTarget;
   if (t >= i) return s != (e = r.last()[0]) && this.activate(e);
   for (e = o.length; e--; ) s != r[e] && t >= o[e] && (!o[e + 1] || o[e + 1] >= t) && this.activate(r[e]);
  },
  activate: function(t) {
   var n, i;
   this.activeTarget = t, e(this.selector).parent(".active").removeClass("active"), 
   i = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', 
   n = e(i).parent("li").addClass("active"), n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), 
   n.trigger("activate");
  }
 };
 var n = e.fn.scrollspy;
 e.fn.scrollspy = function(n) {
  return this.each(function() {
   var i = e(this), o = i.data("scrollspy"), r = "object" == typeof n && n;
   o || i.data("scrollspy", o = new t(this, r)), "string" == typeof n && o[n]();
  });
 }, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.defaults = {
  offset: 10
 }, e.fn.scrollspy.noConflict = function() {
  return e.fn.scrollspy = n, this;
 }, e(window).on("load", function() {
  e('[data-spy="scroll"]').each(function() {
   var t = e(this);
   t.scrollspy(t.data());
  });
 });
}(window.jQuery), !function(e) {
 var t = function(t) {
  this.element = e(t);
 };
 t.prototype = {
  constructor: t,
  show: function() {
   var t, n, i, o = this.element, r = o.closest("ul:not(.dropdown-menu)"), s = o.attr("data-target");
   s || (s = o.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, "")), o.parent("li").hasClass("active") || (t = r.find(".active:last a")[0], 
   i = e.Event("show", {
    relatedTarget: t
   }), o.trigger(i), i.isDefaultPrevented() || (n = e(s), this.activate(o.parent("li"), r), 
   this.activate(n, n.parent(), function() {
    o.trigger({
     type: "shown",
     relatedTarget: t
    });
   })));
  },
  activate: function(t, n, i) {
   function o() {
    r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), 
    t.addClass("active"), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), 
    t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), i && i();
   }
   var r = n.find("> .active"), s = i && e.support.transition && r.hasClass("fade");
   s ? r.one(e.support.transition.end, o) : o(), r.removeClass("in");
  }
 };
 var n = e.fn.tab;
 e.fn.tab = function(n) {
  return this.each(function() {
   var i = e(this), o = i.data("tab");
   o || i.data("tab", o = new t(this)), "string" == typeof n && o[n]();
  });
 }, e.fn.tab.Constructor = t, e.fn.tab.noConflict = function() {
  return e.fn.tab = n, this;
 }, e(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
  t.preventDefault(), e(this).tab("show");
 });
}(window.jQuery), !function(e) {
 var t = function(t, n) {
  this.$element = e(t), this.options = e.extend({}, e.fn.typeahead.defaults, n), this.matcher = this.options.matcher || this.matcher, 
  this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, 
  this.updater = this.options.updater || this.updater, this.source = this.options.source, 
  this.$menu = e(this.options.menu), this.shown = !1, this.listen();
 };
 t.prototype = {
  constructor: t,
  select: function() {
   var e = this.$menu.find(".active").attr("data-value");
   return this.$element.val(this.updater(e)).change(), this.hide();
  },
  updater: function(e) {
   return e;
  },
  show: function() {
   var t = e.extend({}, this.$element.position(), {
    height: this.$element[0].offsetHeight
   });
   return this.$menu.insertAfter(this.$element).css({
    top: t.top + t.height,
    left: t.left
   }).show(), this.shown = !0, this;
  },
  hide: function() {
   return this.$menu.hide(), this.shown = !1, this;
  },
  lookup: function() {
   var t;
   return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (t = e.isFunction(this.source) ? this.source(this.query, e.proxy(this.process, this)) : this.source, 
   t ? this.process(t) : this);
  },
  process: function(t) {
   var n = this;
   return t = e.grep(t, function(e) {
    return n.matcher(e);
   }), t = this.sorter(t), t.length ? this.render(t.slice(0, this.options.items)).show() : this.shown ? this.hide() : this;
  },
  matcher: function(e) {
   return ~e.toLowerCase().indexOf(this.query.toLowerCase());
  },
  sorter: function(e) {
   for (var t, n = [], i = [], o = []; t = e.shift(); ) t.toLowerCase().indexOf(this.query.toLowerCase()) ? ~t.indexOf(this.query) ? i.push(t) : o.push(t) : n.push(t);
   return n.concat(i, o);
  },
  highlighter: function(e) {
   var t = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
   return e.replace(RegExp("(" + t + ")", "ig"), function(e, t) {
    return "<strong>" + t + "</strong>";
   });
  },
  render: function(t) {
   var n = this;
   return t = e(t).map(function(t, i) {
    return t = e(n.options.item).attr("data-value", i), t.find("a").html(n.highlighter(i)), 
    t[0];
   }), t.first().addClass("active"), this.$menu.html(t), this;
  },
  next: function() {
   var t = this.$menu.find(".active").removeClass("active"), n = t.next();
   n.length || (n = e(this.$menu.find("li")[0])), n.addClass("active");
  },
  prev: function() {
   var e = this.$menu.find(".active").removeClass("active"), t = e.prev();
   t.length || (t = this.$menu.find("li").last()), t.addClass("active");
  },
  listen: function() {
   this.$element.on("focus", e.proxy(this.focus, this)).on("blur", e.proxy(this.blur, this)).on("keypress", e.proxy(this.keypress, this)).on("keyup", e.proxy(this.keyup, this)), 
   this.eventSupported("keydown") && this.$element.on("keydown", e.proxy(this.keydown, this)), 
   this.$menu.on("click", e.proxy(this.click, this)).on("mouseenter", "li", e.proxy(this.mouseenter, this)).on("mouseleave", "li", e.proxy(this.mouseleave, this));
  },
  eventSupported: function(e) {
   var t = e in this.$element;
   return t || (this.$element.setAttribute(e, "return;"), t = "function" == typeof this.$element[e]), 
   t;
  },
  move: function(e) {
   if (this.shown) {
    switch (e.keyCode) {
    case 9:
    case 13:
    case 27:
     e.preventDefault();
     break;

    case 38:
     e.preventDefault(), this.prev();
     break;

    case 40:
     e.preventDefault(), this.next();
    }
    e.stopPropagation();
   }
  },
  keydown: function(t) {
   this.suppressKeyPressRepeat = ~e.inArray(t.keyCode, [ 40, 38, 9, 13, 27 ]), this.move(t);
  },
  keypress: function(e) {
   this.suppressKeyPressRepeat || this.move(e);
  },
  keyup: function(e) {
   switch (e.keyCode) {
   case 40:
   case 38:
   case 16:
   case 17:
   case 18:
    break;

   case 9:
   case 13:
    if (!this.shown) return;
    this.select();
    break;

   case 27:
    if (!this.shown) return;
    this.hide();
    break;

   default:
    this.lookup();
   }
   e.stopPropagation(), e.preventDefault();
  },
  focus: function() {
   this.focused = !0;
  },
  blur: function() {
   this.focused = !1, !this.mousedover && this.shown && this.hide();
  },
  click: function(e) {
   e.stopPropagation(), e.preventDefault(), this.select(), this.$element.focus();
  },
  mouseenter: function(t) {
   this.mousedover = !0, this.$menu.find(".active").removeClass("active"), e(t.currentTarget).addClass("active");
  },
  mouseleave: function() {
   this.mousedover = !1, !this.focused && this.shown && this.hide();
  }
 };
 var n = e.fn.typeahead;
 e.fn.typeahead = function(n) {
  return this.each(function() {
   var i = e(this), o = i.data("typeahead"), r = "object" == typeof n && n;
   o || i.data("typeahead", o = new t(this, r)), "string" == typeof n && o[n]();
  });
 }, e.fn.typeahead.defaults = {
  source: [],
  items: 8,
  menu: '<ul class="typeahead dropdown-menu"></ul>',
  item: '<li><a href="#"></a></li>',
  minLength: 1
 }, e.fn.typeahead.Constructor = t, e.fn.typeahead.noConflict = function() {
  return e.fn.typeahead = n, this;
 }, e(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function() {
  var t = e(this);
  t.data("typeahead") || t.typeahead(t.data());
 });
}(window.jQuery), !function(e) {
 var t = function(t, n) {
  this.options = e.extend({}, e.fn.affix.defaults, n), this.$window = e(window).on("scroll.affix.data-api", e.proxy(this.checkPosition, this)).on("click.affix.data-api", e.proxy(function() {
   setTimeout(e.proxy(this.checkPosition, this), 1);
  }, this)), this.$element = e(t), this.checkPosition();
 };
 t.prototype.checkPosition = function() {
  if (this.$element.is(":visible")) {
   var t, n = e(document).height(), i = this.$window.scrollTop(), o = this.$element.offset(), r = this.options.offset, s = r.bottom, a = r.top, l = "affix affix-top affix-bottom";
   "object" != typeof r && (s = a = r), "function" == typeof a && (a = r.top()), "function" == typeof s && (s = r.bottom()), 
   t = null != this.unpin && i + this.unpin <= o.top ? !1 : null != s && o.top + this.$element.height() >= n - s ? "bottom" : null != a && a >= i ? "top" : !1, 
   this.affixed !== t && (this.affixed = t, this.unpin = "bottom" == t ? o.top - i : null, 
   this.$element.removeClass(l).addClass("affix" + (t ? "-" + t : "")));
  }
 };
 var n = e.fn.affix;
 e.fn.affix = function(n) {
  return this.each(function() {
   var i = e(this), o = i.data("affix"), r = "object" == typeof n && n;
   o || i.data("affix", o = new t(this, r)), "string" == typeof n && o[n]();
  });
 }, e.fn.affix.Constructor = t, e.fn.affix.defaults = {
  offset: 0
 }, e.fn.affix.noConflict = function() {
  return e.fn.affix = n, this;
 }, e(window).on("load", function() {
  e('[data-spy="affix"]').each(function() {
   var t = e(this), n = t.data();
   n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), 
   n.offsetTop && (n.offset.top = n.offsetTop), t.affix(n);
  });
 });
}(window.jQuery), define("libs/bootstrap", function() {}), function(e) {
 var t = "waitForImages";
 e.waitForImages = {
  hasImageProperties: [ "backgroundImage", "listStyleImage", "borderImage", "borderCornerImage" ]
 }, e.expr[":"].uncached = function(t) {
  if (!e(t).is('img[src!=""]')) return !1;
  var n = new Image();
  return n.src = t.src, !n.complete;
 }, e.fn.waitForImages = function(n, i, o) {
  var r = 0, s = 0;
  if (e.isPlainObject(arguments[0]) && (o = arguments[0].waitForAll, i = arguments[0].each, 
  n = arguments[0].finished), n = n || e.noop, i = i || e.noop, o = !!o, !e.isFunction(n) || !e.isFunction(i)) throw new TypeError("An invalid callback was supplied.");
  return this.each(function() {
   var a = e(this), l = [], c = e.waitForImages.hasImageProperties || [], u = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
   o ? a.find("*").andSelf().each(function() {
    var t = e(this);
    t.is("img:uncached") && l.push({
     src: t.attr("src"),
     element: t[0]
    }), e.each(c, function(e, n) {
     var i, o = t.css(n);
     if (!o) return !0;
     for (;i = u.exec(o); ) l.push({
      src: i[2],
      element: t[0]
     });
    });
   }) : a.find("img:uncached").each(function() {
    l.push({
     src: this.src,
     element: this
    });
   }), r = l.length, s = 0, 0 === r && n.call(a[0]), e.each(l, function(o, l) {
    var c = new Image();
    e(c).bind("load." + t + " error." + t, function(e) {
     return s++, i.call(l.element, s, r, "load" == e.type), s == r ? (n.call(a[0]), !1) : void 0;
    }), c.src = l.src;
   });
  });
 };
}(jQuery), define("libs/jquery.waitforimages", function() {}), define("extensionMgr", [ "jquery", "underscore", "utils", "settings", "text!html/settingsExtensionsAccordion.html", "extensions/googleAnalytics", "extensions/buttonSync", "extensions/buttonPublish", "extensions/buttonShare", "extensions/buttonStat", "extensions/dialogAbout", "extensions/dialogManagePublication", "extensions/dialogManageSynchronization", "extensions/documentSelector", "extensions/documentTitle", "extensions/workingIndicator", "extensions/notifications", "extensions/markdown-extra", "extensions/toc", "extensions/mathJax", "extensions/emailConverter", "extensions/scrollLink", "libs/bootstrap", "libs/jquery.waitforimages" ], function(e, t, n, i, o) {
 function r(e) {
  return t.chain(u).map(function(t) {
   return t.config.enabled && t[e];
  }).compact().value();
 }
 function s(e, n) {
  var i = r(e);
  return function() {
   n || logger.log(e, arguments);
   var o = arguments;
   t.each(i, function(e) {
    e.apply(null, o);
   });
  };
 }
 function a(e, t) {
  c[e] = s(e, t);
 }
 function l(n) {
  e("#accordion-extensions").append(e(t.template(o, {
   extensionId: n.extensionId,
   extensionName: n.extensionName,
   optional: n.optional,
   settingsBloc: n.settingsBloc
  })));
 }
 var c = {}, u = t.chain(arguments).map(function(e) {
  return t.isObject(e) && e.extensionId && e;
 }).compact().value();
 extensionSettings = i.extensionSettings || {}, t.each(u, function(e) {
  e.config = t.extend({}, e.defaultConfig, extensionSettings[e.extensionId]), e.config.enabled = !e.optional || void 0 === e.config.enabled || e.config.enabled === !0;
 }), c.onLoadSettings = function() {
  logger.log("onLoadSettings"), t.each(u, function(e) {
   n.setInputChecked("#input-enable-extension-" + e.extensionId, e.config.enabled);
   var t = e.onLoadSettings;
   t && t();
  });
 }, c.onSaveSettings = function(e, i) {
  logger.log("onSaveSettings"), t.each(u, function(o) {
   var r = t.extend({}, o.defaultConfig);
   r.enabled = n.getInputChecked("#input-enable-extension-" + o.extensionId);
   var s = o.onSaveSettings;
   s && s(r, i), e[o.extensionId] = r;
  });
 }, a("onReady"), a("onMessage"), a("onError"), a("onOfflineChanged"), a("onAsyncRunning", !0), 
 a("onPeriodicRun", !0), a("onFileMgrCreated"), a("onSynchronizerCreated"), a("onPublisherCreated"), 
 a("onExtensionMgrCreated"), a("onFileCreated"), a("onFileDeleted"), a("onFileSelected"), 
 a("onContentChanged"), a("onTitleChanged"), a("onSyncRunning"), a("onSyncSuccess"), 
 a("onSyncImportSuccess"), a("onSyncExportSuccess"), a("onSyncRemoved"), a("onPublishRunning"), 
 a("onPublishSuccess"), a("onNewPublishSuccess"), a("onPublishRemoved"), a("onLayoutConfigure"), 
 a("onLayoutCreated"), a("onEditorConfigure");
 var d = s("onPreviewFinished"), p = r("onAsyncPreview"), f = p.length + 1;
 return c.onAsyncPreview = function() {
  function n() {
   ++i === f && d();
  }
  logger.log("onAsyncPreview");
  var i = 0;
  e("#wmd-preview").waitForImages(n), t.each(p, function(e) {
   e(n);
  });
 }, e(function() {
  t.chain(u).sortBy(function(e) {
   return e.extensionName.toLowerCase();
  }).each(l), logger.log("onCreateButton");
  var n = r("onCreateButton");
  t.each(n, function(t) {
   e("#extension-buttons").append(e('<div class="btn-group">').append(t()));
  });
 }), c.onExtensionMgrCreated(c), c;
}), define("text!html/settingsTemplateTooltip.html", [], function() {
 return 'Available variables:\r\n<br>\r\n<ul>\r\n	<li><b>documentTitle</b>: document title</li>\r\n	<li><b>documentMarkdown</b>: document in Markdown format</li>\r\n	<li><b>documentHTML</b>: document in HTML format</li>\r\n	<li><b>publishAttributes</b>: attributes of the publish location\r\n		(undefined when using "Save")</li>\r\n</ul>\r\nExamples:\r\n<br />\r\n&lt;title&gt;&lt;%= documentTitle %&gt;&lt;&#x2F;title&gt;\r\n<br />\r\n&lt;div&gt;&lt;%- documentHTML %&gt;&lt;&#x2F;div&gt;\r\n<br />\r\n&lt;% if(publishAttributes.provider == &quot;github&quot;)\r\nprint(documentMarkdown); %&gt;\r\n<br />\r\n<br />\r\n<a target="_blank" href="http://underscorejs.org/#template">More\r\n	info</a>';
}), define("storage", [ "underscore", "utils" ], function(e, t) {
 var n = t.retrieveIndexArray("file.list"), i = localStorage.version;
 if (void 0 === i && (localStorage.removeItem("sync.queue"), localStorage.removeItem("sync.current"), 
 localStorage.removeItem("file.counter"), e.each(n, function(n) {
  localStorage[n + ".publish"] = ";";
  var i = t.retrieveIndexArray(n + ".sync");
  e.each(i, function(e) {
   localStorage[e + ".contentCRC"] = "0", void 0 !== localStorage[e + ".etag"] && (localStorage[e + ".titleCRC"] = "0");
  });
 }), i = "v1"), "v1" == i) {
  var o = localStorage["sync.gdrive.lastChangeId"];
  o && (localStorage["gdrive.lastChangeId"] = o, localStorage.removeItem("sync.gdrive.lastChangeId"));
  var r = localStorage["sync.dropbox.lastChangeId"];
  r && (localStorage["dropbox.lastChangeId"] = r, localStorage.removeItem("sync.dropbox.lastChangeId"));
  var s = "gdrive", a = "dropbox", l = "sync." + s + ".", c = "sync." + a + ".";
  e.each(n, function(n) {
   var i = t.retrieveIndexArray(n + ".sync");
   e.each(i, function(e) {
    var t = {};
    0 === e.indexOf(l) ? (t.provider = s, t.id = e.substring(l.length), t.etag = localStorage[e + ".etag"], 
    t.contentCRC = localStorage[e + ".contentCRC"], t.titleCRC = localStorage[e + ".titleCRC"]) : 0 === e.indexOf(c) && (t.provider = a, 
    t.path = decodeURIComponent(e.substring(c.length)), t.version = localStorage[e + ".version"], 
    t.contentCRC = localStorage[e + ".contentCRC"]), localStorage[e] = JSON.stringify(t), 
    localStorage.removeItem(e + ".etag"), localStorage.removeItem(e + ".version"), localStorage.removeItem(e + ".contentCRC"), 
    localStorage.removeItem(e + ".titleCRC");
   });
  }), i = "v2";
 }
 if ("v2" == i && (e.each(n, function(n) {
  e.has(localStorage, n + ".sync") || (localStorage.removeItem(n + ".title"), localStorage.removeItem(n + ".publish"), 
  localStorage.removeItem(n + ".content"), t.removeIndexFromArray("file.list", n));
 }), i = "v3"), "v3" == i) {
  var u = localStorage["file.current"];
  void 0 !== u && -1 === localStorage["file.list"].indexOf(";" + u + ";") && localStorage.removeItem("file.current"), 
  i = "v4";
 }
 "v4" == i && (localStorage.removeItem("githubToken"), i = "v5"), "v5" == i && (e.each(n, function(n) {
  var i = t.retrieveIndexArray(n + ".publish");
  e.each(i, function(e) {
   var t = JSON.parse(localStorage[e]);
   "gdrive" == t.provider && (t.id = t.fileId, t.fileId = void 0, localStorage[e] = JSON.stringify(t));
  });
 }), i = "v6"), localStorage.version = i;
}), function(e, t) {
 function n(t, n) {
  var o, r, s, a = t.nodeName.toLowerCase();
  return "area" === a ? (o = t.parentNode, r = o.name, t.href && r && "map" === o.nodeName.toLowerCase() ? (s = e("img[usemap=#" + r + "]")[0], 
  !!s && i(s)) : !1) : (/input|select|textarea|button|object/.test(a) ? !t.disabled : "a" === a ? t.href || n : n) && i(t);
 }
 function i(t) {
  return e.expr.filters.visible(t) && !e(t).parents().andSelf().filter(function() {
   return "hidden" === e.css(this, "visibility");
  }).length;
 }
 var o = 0, r = /^ui-id-\d+$/;
 e.ui = e.ui || {}, e.ui.version || (e.extend(e.ui, {
  version: "1.9.2",
  keyCode: {
   BACKSPACE: 8,
   COMMA: 188,
   DELETE: 46,
   DOWN: 40,
   END: 35,
   ENTER: 13,
   ESCAPE: 27,
   HOME: 36,
   LEFT: 37,
   NUMPAD_ADD: 107,
   NUMPAD_DECIMAL: 110,
   NUMPAD_DIVIDE: 111,
   NUMPAD_ENTER: 108,
   NUMPAD_MULTIPLY: 106,
   NUMPAD_SUBTRACT: 109,
   PAGE_DOWN: 34,
   PAGE_UP: 33,
   PERIOD: 190,
   RIGHT: 39,
   SPACE: 32,
   TAB: 9,
   UP: 38
  }
 }), e.fn.extend({
  _focus: e.fn.focus,
  focus: function(t, n) {
   return "number" == typeof t ? this.each(function() {
    var i = this;
    setTimeout(function() {
     e(i).focus(), n && n.call(i);
    }, t);
   }) : this._focus.apply(this, arguments);
  },
  scrollParent: function() {
   var t;
   return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
    return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"));
   }).eq(0) : this.parents().filter(function() {
    return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"));
   }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t;
  },
  zIndex: function(n) {
   if (n !== t) return this.css("zIndex", n);
   if (this.length) for (var i, o, r = e(this[0]); r.length && r[0] !== document; ) {
    if (i = r.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (o = parseInt(r.css("zIndex"), 10), 
    !isNaN(o) && 0 !== o)) return o;
    r = r.parent();
   }
   return 0;
  },
  uniqueId: function() {
   return this.each(function() {
    this.id || (this.id = "ui-id-" + ++o);
   });
  },
  removeUniqueId: function() {
   return this.each(function() {
    r.test(this.id) && e(this).removeAttr("id");
   });
  }
 }), e.extend(e.expr[":"], {
  data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
   return function(n) {
    return !!e.data(n, t);
   };
  }) : function(t, n, i) {
   return !!e.data(t, i[3]);
  },
  focusable: function(t) {
   return n(t, !isNaN(e.attr(t, "tabindex")));
  },
  tabbable: function(t) {
   var i = e.attr(t, "tabindex"), o = isNaN(i);
   return (o || i >= 0) && n(t, !o);
  }
 }), e(function() {
  var t = document.body, n = t.appendChild(n = document.createElement("div"));
  n.offsetHeight, e.extend(n.style, {
   minHeight: "100px",
   height: "auto",
   padding: 0,
   borderWidth: 0
  }), e.support.minHeight = 100 === n.offsetHeight, e.support.selectstart = "onselectstart" in n, 
  t.removeChild(n).style.display = "none";
 }), e("<a>").outerWidth(1).jquery || e.each([ "Width", "Height" ], function(n, i) {
  function o(t, n, i, o) {
   return e.each(r, function() {
    n -= parseFloat(e.css(t, "padding" + this)) || 0, i && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), 
    o && (n -= parseFloat(e.css(t, "margin" + this)) || 0);
   }), n;
  }
  var r = "Width" === i ? [ "Left", "Right" ] : [ "Top", "Bottom" ], s = i.toLowerCase(), a = {
   innerWidth: e.fn.innerWidth,
   innerHeight: e.fn.innerHeight,
   outerWidth: e.fn.outerWidth,
   outerHeight: e.fn.outerHeight
  };
  e.fn["inner" + i] = function(n) {
   return n === t ? a["inner" + i].call(this) : this.each(function() {
    e(this).css(s, o(this, n) + "px");
   });
  }, e.fn["outer" + i] = function(t, n) {
   return "number" != typeof t ? a["outer" + i].call(this, t) : this.each(function() {
    e(this).css(s, o(this, t, !0, n) + "px");
   });
  };
 }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
  return function(n) {
   return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this);
  };
 }(e.fn.removeData)), function() {
  var t = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
  e.ui.ie = t.length ? !0 : !1, e.ui.ie6 = 6 === parseFloat(t[1], 10);
 }(), e.fn.extend({
  disableSelection: function() {
   return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
    e.preventDefault();
   });
  },
  enableSelection: function() {
   return this.unbind(".ui-disableSelection");
  }
 }), e.extend(e.ui, {
  plugin: {
   add: function(t, n, i) {
    var o, r = e.ui[t].prototype;
    for (o in i) r.plugins[o] = r.plugins[o] || [], r.plugins[o].push([ n, i[o] ]);
   },
   call: function(e, t, n) {
    var i, o = e.plugins[t];
    if (o && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType) for (i = 0; o.length > i; i++) e.options[o[i][0]] && o[i][1].apply(e.element, n);
   }
  },
  contains: e.contains,
  hasScroll: function(t, n) {
   if ("hidden" === e(t).css("overflow")) return !1;
   var i = n && "left" === n ? "scrollLeft" : "scrollTop", o = !1;
   return t[i] > 0 ? !0 : (t[i] = 1, o = t[i] > 0, t[i] = 0, o);
  },
  isOverAxis: function(e, t, n) {
   return e > t && t + n > e;
  },
  isOver: function(t, n, i, o, r, s) {
   return e.ui.isOverAxis(t, i, r) && e.ui.isOverAxis(n, o, s);
  }
 }));
}(jQuery), function(e, t) {
 var n = 0, i = Array.prototype.slice, o = e.cleanData;
 e.cleanData = function(t) {
  for (var n, i = 0; null != (n = t[i]); i++) try {
   e(n).triggerHandler("remove");
  } catch (r) {}
  o(t);
 }, e.widget = function(n, i, o) {
  var r, s, a, l, c = n.split(".")[0];
  n = n.split(".")[1], r = c + "-" + n, o || (o = i, i = e.Widget), e.expr[":"][r.toLowerCase()] = function(t) {
   return !!e.data(t, r);
  }, e[c] = e[c] || {}, s = e[c][n], a = e[c][n] = function(e, n) {
   return this._createWidget ? (arguments.length && this._createWidget(e, n), t) : new a(e, n);
  }, e.extend(a, s, {
   version: o.version,
   _proto: e.extend({}, o),
   _childConstructors: []
  }), l = new i(), l.options = e.widget.extend({}, l.options), e.each(o, function(t, n) {
   e.isFunction(n) && (o[t] = function() {
    var e = function() {
     return i.prototype[t].apply(this, arguments);
    }, o = function(e) {
     return i.prototype[t].apply(this, e);
    };
    return function() {
     var t, i = this._super, r = this._superApply;
     return this._super = e, this._superApply = o, t = n.apply(this, arguments), this._super = i, 
     this._superApply = r, t;
    };
   }());
  }), a.prototype = e.widget.extend(l, {
   widgetEventPrefix: s ? l.widgetEventPrefix : n
  }, o, {
   constructor: a,
   namespace: c,
   widgetName: n,
   widgetBaseClass: r,
   widgetFullName: r
  }), s ? (e.each(s._childConstructors, function(t, n) {
   var i = n.prototype;
   e.widget(i.namespace + "." + i.widgetName, a, n._proto);
  }), delete s._childConstructors) : i._childConstructors.push(a), e.widget.bridge(n, a);
 }, e.widget.extend = function(n) {
  for (var o, r, s = i.call(arguments, 1), a = 0, l = s.length; l > a; a++) for (o in s[a]) r = s[a][o], 
  s[a].hasOwnProperty(o) && r !== t && (n[o] = e.isPlainObject(r) ? e.isPlainObject(n[o]) ? e.widget.extend({}, n[o], r) : e.widget.extend({}, r) : r);
  return n;
 }, e.widget.bridge = function(n, o) {
  var r = o.prototype.widgetFullName || n;
  e.fn[n] = function(s) {
   var a = "string" == typeof s, l = i.call(arguments, 1), c = this;
   return s = !a && l.length ? e.widget.extend.apply(null, [ s ].concat(l)) : s, a ? this.each(function() {
    var i, o = e.data(this, r);
    return o ? e.isFunction(o[s]) && "_" !== s.charAt(0) ? (i = o[s].apply(o, l), i !== o && i !== t ? (c = i && i.jquery ? c.pushStack(i.get()) : i, 
    !1) : t) : e.error("no such method '" + s + "' for " + n + " widget instance") : e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + s + "'");
   }) : this.each(function() {
    var t = e.data(this, r);
    t ? t.option(s || {})._init() : e.data(this, r, new o(s, this));
   }), c;
  };
 }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
  widgetName: "widget",
  widgetEventPrefix: "",
  defaultElement: "<div>",
  options: {
   disabled: !1,
   create: null
  },
  _createWidget: function(t, i) {
   i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = n++, 
   this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), 
   this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetName, this), 
   e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
    remove: function(e) {
     e.target === i && this.destroy();
    }
   }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), 
   this._create(), this._trigger("create", null, this._getCreateEventData()), this._init();
  },
  _getCreateOptions: e.noop,
  _getCreateEventData: e.noop,
  _create: e.noop,
  _init: e.noop,
  destroy: function() {
   this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), 
   this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), 
   this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), 
   this.focusable.removeClass("ui-state-focus");
  },
  _destroy: e.noop,
  widget: function() {
   return this.element;
  },
  option: function(n, i) {
   var o, r, s, a = n;
   if (0 === arguments.length) return e.widget.extend({}, this.options);
   if ("string" == typeof n) if (a = {}, o = n.split("."), n = o.shift(), o.length) {
    for (r = a[n] = e.widget.extend({}, this.options[n]), s = 0; o.length - 1 > s; s++) r[o[s]] = r[o[s]] || {}, 
    r = r[o[s]];
    if (n = o.pop(), i === t) return r[n] === t ? null : r[n];
    r[n] = i;
   } else {
    if (i === t) return this.options[n] === t ? null : this.options[n];
    a[n] = i;
   }
   return this._setOptions(a), this;
  },
  _setOptions: function(e) {
   var t;
   for (t in e) this._setOption(t, e[t]);
   return this;
  },
  _setOption: function(e, t) {
   return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), 
   this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), 
   this;
  },
  enable: function() {
   return this._setOption("disabled", !1);
  },
  disable: function() {
   return this._setOption("disabled", !0);
  },
  _on: function(n, i, o) {
   var r, s = this;
   "boolean" != typeof n && (o = i, i = n, n = !1), o ? (i = r = e(i), this.bindings = this.bindings.add(i)) : (o = i, 
   i = this.element, r = this.widget()), e.each(o, function(o, a) {
    function l() {
     return n || s.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? s[a] : a).apply(s, arguments) : t;
    }
    "string" != typeof a && (l.guid = a.guid = a.guid || l.guid || e.guid++);
    var c = o.match(/^(\w+)\s*(.*)$/), u = c[1] + s.eventNamespace, d = c[2];
    d ? r.delegate(d, u, l) : i.bind(u, l);
   });
  },
  _off: function(e, t) {
   t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, 
   e.unbind(t).undelegate(t);
  },
  _delay: function(e, t) {
   function n() {
    return ("string" == typeof e ? i[e] : e).apply(i, arguments);
   }
   var i = this;
   return setTimeout(n, t || 0);
  },
  _hoverable: function(t) {
   this.hoverable = this.hoverable.add(t), this._on(t, {
    mouseenter: function(t) {
     e(t.currentTarget).addClass("ui-state-hover");
    },
    mouseleave: function(t) {
     e(t.currentTarget).removeClass("ui-state-hover");
    }
   });
  },
  _focusable: function(t) {
   this.focusable = this.focusable.add(t), this._on(t, {
    focusin: function(t) {
     e(t.currentTarget).addClass("ui-state-focus");
    },
    focusout: function(t) {
     e(t.currentTarget).removeClass("ui-state-focus");
    }
   });
  },
  _trigger: function(t, n, i) {
   var o, r, s = this.options[t];
   if (i = i || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), 
   n.target = this.element[0], r = n.originalEvent) for (o in r) o in n || (n[o] = r[o]);
   return this.element.trigger(n, i), !(e.isFunction(s) && s.apply(this.element[0], [ n ].concat(i)) === !1 || n.isDefaultPrevented());
  }
 }, e.each({
  show: "fadeIn",
  hide: "fadeOut"
 }, function(t, n) {
  e.Widget.prototype["_" + t] = function(i, o, r) {
   "string" == typeof o && (o = {
    effect: o
   });
   var s, a = o ? o === !0 || "number" == typeof o ? n : o.effect || n : t;
   o = o || {}, "number" == typeof o && (o = {
    duration: o
   }), s = !e.isEmptyObject(o), o.complete = r, o.delay && i.delay(o.delay), s && e.effects && (e.effects.effect[a] || e.uiBackCompat !== !1 && e.effects[a]) ? i[t](o) : a !== t && i[a] ? i[a](o.duration, o.easing, r) : i.queue(function(n) {
    e(this)[t](), r && r.call(i[0]), n();
   });
  };
 }), e.uiBackCompat !== !1 && (e.Widget.prototype._getCreateOptions = function() {
  return e.metadata && e.metadata.get(this.element[0])[this.widgetName];
 });
}(jQuery), function(e) {
 var t = !1;
 e(document).mouseup(function() {
  t = !1;
 }), e.widget("ui.mouse", {
  version: "1.9.2",
  options: {
   cancel: "input,textarea,button,select,option",
   distance: 1,
   delay: 0
  },
  _mouseInit: function() {
   var t = this;
   this.element.bind("mousedown." + this.widgetName, function(e) {
    return t._mouseDown(e);
   }).bind("click." + this.widgetName, function(n) {
    return !0 === e.data(n.target, t.widgetName + ".preventClickEvent") ? (e.removeData(n.target, t.widgetName + ".preventClickEvent"), 
    n.stopImmediatePropagation(), !1) : undefined;
   }), this.started = !1;
  },
  _mouseDestroy: function() {
   this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
  },
  _mouseDown: function(n) {
   if (!t) {
    this._mouseStarted && this._mouseUp(n), this._mouseDownEvent = n;
    var i = this, o = 1 === n.which, r = "string" == typeof this.options.cancel && n.target.nodeName ? e(n.target).closest(this.options.cancel).length : !1;
    return o && !r && this._mouseCapture(n) ? (this.mouseDelayMet = !this.options.delay, 
    this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
     i.mouseDelayMet = !0;
    }, this.options.delay)), this._mouseDistanceMet(n) && this._mouseDelayMet(n) && (this._mouseStarted = this._mouseStart(n) !== !1, 
    !this._mouseStarted) ? (n.preventDefault(), !0) : (!0 === e.data(n.target, this.widgetName + ".preventClickEvent") && e.removeData(n.target, this.widgetName + ".preventClickEvent"), 
    this._mouseMoveDelegate = function(e) {
     return i._mouseMove(e);
    }, this._mouseUpDelegate = function(e) {
     return i._mouseUp(e);
    }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), 
    n.preventDefault(), t = !0, !0)) : !0;
   }
  },
  _mouseMove: function(t) {
   return !e.ui.ie || document.documentMode >= 9 || t.button ? this._mouseStarted ? (this._mouseDrag(t), 
   t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, 
   this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t);
  },
  _mouseUp: function(t) {
   return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), 
   this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), 
   this._mouseStop(t)), !1;
  },
  _mouseDistanceMet: function(e) {
   return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
  },
  _mouseDelayMet: function() {
   return this.mouseDelayMet;
  },
  _mouseStart: function() {},
  _mouseDrag: function() {},
  _mouseStop: function() {},
  _mouseCapture: function() {
   return !0;
  }
 });
}(jQuery), function(e, t) {
 function n(e, t, n) {
  return [ parseInt(e[0], 10) * (p.test(e[0]) ? t / 100 : 1), parseInt(e[1], 10) * (p.test(e[1]) ? n / 100 : 1) ];
 }
 function i(t, n) {
  return parseInt(e.css(t, n), 10) || 0;
 }
 e.ui = e.ui || {};
 var o, r = Math.max, s = Math.abs, a = Math.round, l = /left|center|right/, c = /top|center|bottom/, u = /[\+\-]\d+%?/, d = /^\w+/, p = /%$/, f = e.fn.position;
 e.position = {
  scrollbarWidth: function() {
   if (o !== t) return o;
   var n, i, r = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), s = r.children()[0];
   return e("body").append(r), n = s.offsetWidth, r.css("overflow", "scroll"), i = s.offsetWidth, 
   n === i && (i = r[0].clientWidth), r.remove(), o = n - i;
  },
  getScrollInfo: function(t) {
   var n = t.isWindow ? "" : t.element.css("overflow-x"), i = t.isWindow ? "" : t.element.css("overflow-y"), o = "scroll" === n || "auto" === n && t.width < t.element[0].scrollWidth, r = "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight;
   return {
    width: o ? e.position.scrollbarWidth() : 0,
    height: r ? e.position.scrollbarWidth() : 0
   };
  },
  getWithinInfo: function(t) {
   var n = e(t || window), i = e.isWindow(n[0]);
   return {
    element: n,
    isWindow: i,
    offset: n.offset() || {
     left: 0,
     top: 0
    },
    scrollLeft: n.scrollLeft(),
    scrollTop: n.scrollTop(),
    width: i ? n.width() : n.outerWidth(),
    height: i ? n.height() : n.outerHeight()
   };
  }
 }, e.fn.position = function(t) {
  if (!t || !t.of) return f.apply(this, arguments);
  t = e.extend({}, t);
  var o, p, h, g, m, v = e(t.of), y = e.position.getWithinInfo(t.within), b = e.position.getScrollInfo(y), w = v[0], x = (t.collision || "flip").split(" "), C = {};
  return 9 === w.nodeType ? (p = v.width(), h = v.height(), g = {
   top: 0,
   left: 0
  }) : e.isWindow(w) ? (p = v.width(), h = v.height(), g = {
   top: v.scrollTop(),
   left: v.scrollLeft()
  }) : w.preventDefault ? (t.at = "left top", p = h = 0, g = {
   top: w.pageY,
   left: w.pageX
  }) : (p = v.outerWidth(), h = v.outerHeight(), g = v.offset()), m = e.extend({}, g), 
  e.each([ "my", "at" ], function() {
   var e, n, i = (t[this] || "").split(" ");
   1 === i.length && (i = l.test(i[0]) ? i.concat([ "center" ]) : c.test(i[0]) ? [ "center" ].concat(i) : [ "center", "center" ]), 
   i[0] = l.test(i[0]) ? i[0] : "center", i[1] = c.test(i[1]) ? i[1] : "center", e = u.exec(i[0]), 
   n = u.exec(i[1]), C[this] = [ e ? e[0] : 0, n ? n[0] : 0 ], t[this] = [ d.exec(i[0])[0], d.exec(i[1])[0] ];
  }), 1 === x.length && (x[1] = x[0]), "right" === t.at[0] ? m.left += p : "center" === t.at[0] && (m.left += p / 2), 
  "bottom" === t.at[1] ? m.top += h : "center" === t.at[1] && (m.top += h / 2), o = n(C.at, p, h), 
  m.left += o[0], m.top += o[1], this.each(function() {
   var l, c, u = e(this), d = u.outerWidth(), f = u.outerHeight(), w = i(this, "marginLeft"), k = i(this, "marginTop"), S = d + w + i(this, "marginRight") + b.width, T = f + k + i(this, "marginBottom") + b.height, _ = e.extend({}, m), E = n(C.my, u.outerWidth(), u.outerHeight());
   "right" === t.my[0] ? _.left -= d : "center" === t.my[0] && (_.left -= d / 2), "bottom" === t.my[1] ? _.top -= f : "center" === t.my[1] && (_.top -= f / 2), 
   _.left += E[0], _.top += E[1], e.support.offsetFractions || (_.left = a(_.left), 
   _.top = a(_.top)), l = {
    marginLeft: w,
    marginTop: k
   }, e.each([ "left", "top" ], function(n, i) {
    e.ui.position[x[n]] && e.ui.position[x[n]][i](_, {
     targetWidth: p,
     targetHeight: h,
     elemWidth: d,
     elemHeight: f,
     collisionPosition: l,
     collisionWidth: S,
     collisionHeight: T,
     offset: [ o[0] + E[0], o[1] + E[1] ],
     my: t.my,
     at: t.at,
     within: y,
     elem: u
    });
   }), e.fn.bgiframe && u.bgiframe(), t.using && (c = function(e) {
    var n = g.left - _.left, i = n + p - d, o = g.top - _.top, a = o + h - f, l = {
     target: {
      element: v,
      left: g.left,
      top: g.top,
      width: p,
      height: h
     },
     element: {
      element: u,
      left: _.left,
      top: _.top,
      width: d,
      height: f
     },
     horizontal: 0 > i ? "left" : n > 0 ? "right" : "center",
     vertical: 0 > a ? "top" : o > 0 ? "bottom" : "middle"
    };
    d > p && p > s(n + i) && (l.horizontal = "center"), f > h && h > s(o + a) && (l.vertical = "middle"), 
    l.important = r(s(n), s(i)) > r(s(o), s(a)) ? "horizontal" : "vertical", t.using.call(this, e, l);
   }), u.offset(e.extend(_, {
    using: c
   }));
  });
 }, e.ui.position = {
  fit: {
   left: function(e, t) {
    var n, i = t.within, o = i.isWindow ? i.scrollLeft : i.offset.left, s = i.width, a = e.left - t.collisionPosition.marginLeft, l = o - a, c = a + t.collisionWidth - s - o;
    t.collisionWidth > s ? l > 0 && 0 >= c ? (n = e.left + l + t.collisionWidth - s - o, 
    e.left += l - n) : e.left = c > 0 && 0 >= l ? o : l > c ? o + s - t.collisionWidth : o : l > 0 ? e.left += l : c > 0 ? e.left -= c : e.left = r(e.left - a, e.left);
   },
   top: function(e, t) {
    var n, i = t.within, o = i.isWindow ? i.scrollTop : i.offset.top, s = t.within.height, a = e.top - t.collisionPosition.marginTop, l = o - a, c = a + t.collisionHeight - s - o;
    t.collisionHeight > s ? l > 0 && 0 >= c ? (n = e.top + l + t.collisionHeight - s - o, 
    e.top += l - n) : e.top = c > 0 && 0 >= l ? o : l > c ? o + s - t.collisionHeight : o : l > 0 ? e.top += l : c > 0 ? e.top -= c : e.top = r(e.top - a, e.top);
   }
  },
  flip: {
   left: function(e, t) {
    var n, i, o = t.within, r = o.offset.left + o.scrollLeft, a = o.width, l = o.isWindow ? o.scrollLeft : o.offset.left, c = e.left - t.collisionPosition.marginLeft, u = c - l, d = c + t.collisionWidth - a - l, p = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0, f = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0, h = -2 * t.offset[0];
    0 > u ? (n = e.left + p + f + h + t.collisionWidth - a - r, (0 > n || s(u) > n) && (e.left += p + f + h)) : d > 0 && (i = e.left - t.collisionPosition.marginLeft + p + f + h - l, 
    (i > 0 || d > s(i)) && (e.left += p + f + h));
   },
   top: function(e, t) {
    var n, i, o = t.within, r = o.offset.top + o.scrollTop, a = o.height, l = o.isWindow ? o.scrollTop : o.offset.top, c = e.top - t.collisionPosition.marginTop, u = c - l, d = c + t.collisionHeight - a - l, p = "top" === t.my[1], f = p ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0, h = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0, g = -2 * t.offset[1];
    0 > u ? (i = e.top + f + h + g + t.collisionHeight - a - r, e.top + f + h + g > u && (0 > i || s(u) > i) && (e.top += f + h + g)) : d > 0 && (n = e.top - t.collisionPosition.marginTop + f + h + g - l, 
    e.top + f + h + g > d && (n > 0 || d > s(n)) && (e.top += f + h + g));
   }
  },
  flipfit: {
   left: function() {
    e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments);
   },
   top: function() {
    e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments);
   }
  }
 }, function() {
  var t, n, i, o, r, s = document.getElementsByTagName("body")[0], a = document.createElement("div");
  t = document.createElement(s ? "div" : "body"), i = {
   visibility: "hidden",
   width: 0,
   height: 0,
   border: 0,
   margin: 0,
   background: "none"
  }, s && e.extend(i, {
   position: "absolute",
   left: "-1000px",
   top: "-1000px"
  });
  for (r in i) t.style[r] = i[r];
  t.appendChild(a), n = s || document.documentElement, n.insertBefore(t, n.firstChild), 
  a.style.cssText = "position: absolute; left: 10.7432222px;", o = e(a).offset().left, 
  e.support.offsetFractions = o > 10 && 11 > o, t.innerHTML = "", n.removeChild(t);
 }(), e.uiBackCompat !== !1 && function(e) {
  var n = e.fn.position;
  e.fn.position = function(i) {
   if (!i || !i.offset) return n.call(this, i);
   var o = i.offset.split(" "), r = i.at.split(" ");
   return 1 === o.length && (o[1] = o[0]), /^\d/.test(o[0]) && (o[0] = "+" + o[0]), 
   /^\d/.test(o[1]) && (o[1] = "+" + o[1]), 1 === r.length && (/left|center|right/.test(r[0]) ? r[1] = "center" : (r[1] = r[0], 
   r[0] = "center")), n.call(this, e.extend(i, {
    at: r[0] + o[0] + " " + r[1] + o[1],
    offset: t
   }));
  };
 }(jQuery);
}(jQuery), function(e) {
 e.widget("ui.draggable", e.ui.mouse, {
  version: "1.9.2",
  widgetEventPrefix: "drag",
  options: {
   addClasses: !0,
   appendTo: "parent",
   axis: !1,
   connectToSortable: !1,
   containment: !1,
   cursor: "auto",
   cursorAt: !1,
   grid: !1,
   handle: !1,
   helper: "original",
   iframeFix: !1,
   opacity: !1,
   refreshPositions: !1,
   revert: !1,
   revertDuration: 500,
   scope: "default",
   scroll: !0,
   scrollSensitivity: 20,
   scrollSpeed: 20,
   snap: !1,
   snapMode: "both",
   snapTolerance: 20,
   stack: !1,
   zIndex: !1
  },
  _create: function() {
   "original" != this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), 
   this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), 
   this._mouseInit();
  },
  _destroy: function() {
   this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), 
   this._mouseDestroy();
  },
  _mouseCapture: function(t) {
   var n = this.options;
   return this.helper || n.disabled || e(t.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(t), 
   this.handle ? (e(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function() {
    e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
     width: this.offsetWidth + "px",
     height: this.offsetHeight + "px",
     position: "absolute",
     opacity: "0.001",
     zIndex: 1e3
    }).css(e(this).offset()).appendTo("body");
   }), !0) : !1);
  },
  _mouseStart: function(t) {
   var n = this.options;
   return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), 
   this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), 
   this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), 
   this.offset = this.positionAbs = this.element.offset(), this.offset = {
    top: this.offset.top - this.margins.top,
    left: this.offset.left - this.margins.left
   }, e.extend(this.offset, {
    click: {
     left: t.pageX - this.offset.left,
     top: t.pageY - this.offset.top
    },
    parent: this._getParentOffset(),
    relative: this._getRelativeOffset()
   }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, 
   this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), 
   n.containment && this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), 
   !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), 
   this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0);
  },
  _mouseDrag: function(t, n) {
   if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), 
   !n) {
    var i = this._uiHash();
    if (this._trigger("drag", t, i) === !1) return this._mouseUp({}), !1;
    this.position = i.position;
   }
   return this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), 
   this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"), 
   e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1;
  },
  _mouseStop: function(t) {
   var n = !1;
   e.ui.ddmanager && !this.options.dropBehaviour && (n = e.ui.ddmanager.drop(this, t)), 
   this.dropped && (n = this.dropped, this.dropped = !1);
   for (var i = this.element[0], o = !1; i && (i = i.parentNode); ) i == document && (o = !0);
   if (!o && "original" === this.options.helper) return !1;
   if ("invalid" == this.options.revert && !n || "valid" == this.options.revert && n || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, n)) {
    var r = this;
    e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
     r._trigger("stop", t) !== !1 && r._clear();
    });
   } else this._trigger("stop", t) !== !1 && this._clear();
   return !1;
  },
  _mouseUp: function(t) {
   return e("div.ui-draggable-iframeFix").each(function() {
    this.parentNode.removeChild(this);
   }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t);
  },
  cancel: function() {
   return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), 
   this;
  },
  _getHandle: function(t) {
   var n = this.options.handle && e(this.options.handle, this.element).length ? !1 : !0;
   return e(this.options.handle, this.element).find("*").andSelf().each(function() {
    this == t.target && (n = !0);
   }), n;
  },
  _createHelper: function(t) {
   var n = this.options, i = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [ t ])) : "clone" == n.helper ? this.element.clone().removeAttr("id") : this.element;
   return i.parents("body").length || i.appendTo("parent" == n.appendTo ? this.element[0].parentNode : n.appendTo), 
   i[0] == this.element[0] || /(fixed|absolute)/.test(i.css("position")) || i.css("position", "absolute"), 
   i;
  },
  _adjustOffsetFromHelper: function(t) {
   "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
    left: +t[0],
    top: +t[1] || 0
   }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), 
   "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
  },
  _getParentOffset: function() {
   this.offsetParent = this.helper.offsetParent();
   var t = this.offsetParent.offset();
   return "absolute" == this.cssPosition && this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), 
   t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
    top: 0,
    left: 0
   }), {
    top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
   };
  },
  _getRelativeOffset: function() {
   if ("relative" == this.cssPosition) {
    var e = this.element.position();
    return {
     top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
     left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
    };
   }
   return {
    top: 0,
    left: 0
   };
  },
  _cacheMargins: function() {
   this.margins = {
    left: parseInt(this.element.css("marginLeft"), 10) || 0,
    top: parseInt(this.element.css("marginTop"), 10) || 0,
    right: parseInt(this.element.css("marginRight"), 10) || 0,
    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
   };
  },
  _cacheHelperProportions: function() {
   this.helperProportions = {
    width: this.helper.outerWidth(),
    height: this.helper.outerHeight()
   };
  },
  _setContainment: function() {
   var t = this.options;
   if ("parent" == t.containment && (t.containment = this.helper[0].parentNode), ("document" == t.containment || "window" == t.containment) && (this.containment = [ "document" == t.containment ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" == t.containment ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" == t.containment ? 0 : e(window).scrollLeft()) + e("document" == t.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" == t.containment ? 0 : e(window).scrollTop()) + (e("document" == t.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]), 
   /^(document|window|parent)$/.test(t.containment) || t.containment.constructor == Array) t.containment.constructor == Array && (this.containment = t.containment); else {
    var n = e(t.containment), i = n[0];
    if (!i) return;
    n.offset();
    var o = "hidden" != e(i).css("overflow");
    this.containment = [ (parseInt(e(i).css("borderLeftWidth"), 10) || 0) + (parseInt(e(i).css("paddingLeft"), 10) || 0), (parseInt(e(i).css("borderTopWidth"), 10) || 0) + (parseInt(e(i).css("paddingTop"), 10) || 0), (o ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(e(i).css("borderLeftWidth"), 10) || 0) - (parseInt(e(i).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (o ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(e(i).css("borderTopWidth"), 10) || 0) - (parseInt(e(i).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom ], 
    this.relative_container = n;
   }
  },
  _convertPositionTo: function(t, n) {
   n || (n = this.position);
   var i = "absolute" == t ? 1 : -1, o = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent), r = /(html|body)/i.test(o[0].tagName);
   return {
    top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : o.scrollTop()) * i,
    left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : o.scrollLeft()) * i
   };
  },
  _generatePosition: function(t) {
   var n = this.options, i = "absolute" != this.cssPosition || this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, o = /(html|body)/i.test(i[0].tagName), r = t.pageX, s = t.pageY;
   if (this.originalPosition) {
    var a;
    if (this.containment) {
     if (this.relative_container) {
      var l = this.relative_container.offset();
      a = [ this.containment[0] + l.left, this.containment[1] + l.top, this.containment[2] + l.left, this.containment[3] + l.top ];
     } else a = this.containment;
     t.pageX - this.offset.click.left < a[0] && (r = a[0] + this.offset.click.left), 
     t.pageY - this.offset.click.top < a[1] && (s = a[1] + this.offset.click.top), t.pageX - this.offset.click.left > a[2] && (r = a[2] + this.offset.click.left), 
     t.pageY - this.offset.click.top > a[3] && (s = a[3] + this.offset.click.top);
    }
    if (n.grid) {
     var c = n.grid[1] ? this.originalPageY + Math.round((s - this.originalPageY) / n.grid[1]) * n.grid[1] : this.originalPageY;
     s = a ? c - this.offset.click.top < a[1] || c - this.offset.click.top > a[3] ? c - this.offset.click.top < a[1] ? c + n.grid[1] : c - n.grid[1] : c : c;
     var u = n.grid[0] ? this.originalPageX + Math.round((r - this.originalPageX) / n.grid[0]) * n.grid[0] : this.originalPageX;
     r = a ? u - this.offset.click.left < a[0] || u - this.offset.click.left > a[2] ? u - this.offset.click.left < a[0] ? u + n.grid[0] : u - n.grid[0] : u : u;
    }
   }
   return {
    top: s - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : i.scrollTop()),
    left: r - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : i.scrollLeft())
   };
  },
  _clear: function() {
   this.helper.removeClass("ui-draggable-dragging"), this.helper[0] == this.element[0] || this.cancelHelperRemoval || this.helper.remove(), 
   this.helper = null, this.cancelHelperRemoval = !1;
  },
  _trigger: function(t, n, i) {
   return i = i || this._uiHash(), e.ui.plugin.call(this, t, [ n, i ]), "drag" == t && (this.positionAbs = this._convertPositionTo("absolute")), 
   e.Widget.prototype._trigger.call(this, t, n, i);
  },
  plugins: {},
  _uiHash: function() {
   return {
    helper: this.helper,
    position: this.position,
    originalPosition: this.originalPosition,
    offset: this.positionAbs
   };
  }
 }), e.ui.plugin.add("draggable", "connectToSortable", {
  start: function(t, n) {
   var i = e(this).data("draggable"), o = i.options, r = e.extend({}, n, {
    item: i.element
   });
   i.sortables = [], e(o.connectToSortable).each(function() {
    var n = e.data(this, "sortable");
    n && !n.options.disabled && (i.sortables.push({
     instance: n,
     shouldRevert: n.options.revert
    }), n.refreshPositions(), n._trigger("activate", t, r));
   });
  },
  stop: function(t, n) {
   var i = e(this).data("draggable"), o = e.extend({}, n, {
    item: i.element
   });
   e.each(i.sortables, function() {
    this.instance.isOver ? (this.instance.isOver = 0, i.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, 
    this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), 
    this.instance.options.helper = this.instance.options._helper, "original" == i.options.helper && this.instance.currentItem.css({
     top: "auto",
     left: "auto"
    })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, o));
   });
  },
  drag: function(t, n) {
   var i = e(this).data("draggable"), o = this;
   e.each(i.sortables, function() {
    var r = !1, s = this;
    this.instance.positionAbs = i.positionAbs, this.instance.helperProportions = i.helperProportions, 
    this.instance.offset.click = i.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (r = !0, 
    e.each(i.sortables, function() {
     return this.instance.positionAbs = i.positionAbs, this.instance.helperProportions = i.helperProportions, 
     this.instance.offset.click = i.offset.click, this != s && this.instance._intersectsWith(this.instance.containerCache) && e.ui.contains(s.instance.element[0], this.instance.element[0]) && (r = !1), 
     r;
    })), r ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(o).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), 
    this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
     return n.helper[0];
    }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), 
    this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = i.offset.click.top, 
    this.instance.offset.click.left = i.offset.click.left, this.instance.offset.parent.left -= i.offset.parent.left - this.instance.offset.parent.left, 
    this.instance.offset.parent.top -= i.offset.parent.top - this.instance.offset.parent.top, 
    i._trigger("toSortable", t), i.dropped = this.instance.element, i.currentItem = i.element, 
    this.instance.fromOutside = i), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, 
    this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), 
    this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, 
    this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), 
    i._trigger("fromSortable", t), i.dropped = !1);
   });
  }
 }), e.ui.plugin.add("draggable", "cursor", {
  start: function() {
   var t = e("body"), n = e(this).data("draggable").options;
   t.css("cursor") && (n._cursor = t.css("cursor")), t.css("cursor", n.cursor);
  },
  stop: function() {
   var t = e(this).data("draggable").options;
   t._cursor && e("body").css("cursor", t._cursor);
  }
 }), e.ui.plugin.add("draggable", "opacity", {
  start: function(t, n) {
   var i = e(n.helper), o = e(this).data("draggable").options;
   i.css("opacity") && (o._opacity = i.css("opacity")), i.css("opacity", o.opacity);
  },
  stop: function(t, n) {
   var i = e(this).data("draggable").options;
   i._opacity && e(n.helper).css("opacity", i._opacity);
  }
 }), e.ui.plugin.add("draggable", "scroll", {
  start: function() {
   var t = e(this).data("draggable");
   t.scrollParent[0] != document && "HTML" != t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset());
  },
  drag: function(t) {
   var n = e(this).data("draggable"), i = n.options, o = !1;
   n.scrollParent[0] != document && "HTML" != n.scrollParent[0].tagName ? (i.axis && "x" == i.axis || (n.overflowOffset.top + n.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? n.scrollParent[0].scrollTop = o = n.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - n.overflowOffset.top < i.scrollSensitivity && (n.scrollParent[0].scrollTop = o = n.scrollParent[0].scrollTop - i.scrollSpeed)), 
   i.axis && "y" == i.axis || (n.overflowOffset.left + n.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? n.scrollParent[0].scrollLeft = o = n.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - n.overflowOffset.left < i.scrollSensitivity && (n.scrollParent[0].scrollLeft = o = n.scrollParent[0].scrollLeft - i.scrollSpeed))) : (i.axis && "x" == i.axis || (t.pageY - e(document).scrollTop() < i.scrollSensitivity ? o = e(document).scrollTop(e(document).scrollTop() - i.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < i.scrollSensitivity && (o = e(document).scrollTop(e(document).scrollTop() + i.scrollSpeed))), 
   i.axis && "y" == i.axis || (t.pageX - e(document).scrollLeft() < i.scrollSensitivity ? o = e(document).scrollLeft(e(document).scrollLeft() - i.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < i.scrollSensitivity && (o = e(document).scrollLeft(e(document).scrollLeft() + i.scrollSpeed)))), 
   o !== !1 && e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(n, t);
  }
 }), e.ui.plugin.add("draggable", "snap", {
  start: function() {
   var t = e(this).data("draggable"), n = t.options;
   t.snapElements = [], e(n.snap.constructor != String ? n.snap.items || ":data(draggable)" : n.snap).each(function() {
    var n = e(this), i = n.offset();
    this != t.element[0] && t.snapElements.push({
     item: this,
     width: n.outerWidth(),
     height: n.outerHeight(),
     top: i.top,
     left: i.left
    });
   });
  },
  drag: function(t, n) {
   for (var i = e(this).data("draggable"), o = i.options, r = o.snapTolerance, s = n.offset.left, a = s + i.helperProportions.width, l = n.offset.top, c = l + i.helperProportions.height, u = i.snapElements.length - 1; u >= 0; u--) {
    var d = i.snapElements[u].left, p = d + i.snapElements[u].width, f = i.snapElements[u].top, h = f + i.snapElements[u].height;
    if (s > d - r && p + r > s && l > f - r && h + r > l || s > d - r && p + r > s && c > f - r && h + r > c || a > d - r && p + r > a && l > f - r && h + r > l || a > d - r && p + r > a && c > f - r && h + r > c) {
     if ("inner" != o.snapMode) {
      var g = r >= Math.abs(f - c), m = r >= Math.abs(h - l), v = r >= Math.abs(d - a), y = r >= Math.abs(p - s);
      g && (n.position.top = i._convertPositionTo("relative", {
       top: f - i.helperProportions.height,
       left: 0
      }).top - i.margins.top), m && (n.position.top = i._convertPositionTo("relative", {
       top: h,
       left: 0
      }).top - i.margins.top), v && (n.position.left = i._convertPositionTo("relative", {
       top: 0,
       left: d - i.helperProportions.width
      }).left - i.margins.left), y && (n.position.left = i._convertPositionTo("relative", {
       top: 0,
       left: p
      }).left - i.margins.left);
     }
     var b = g || m || v || y;
     if ("outer" != o.snapMode) {
      var g = r >= Math.abs(f - l), m = r >= Math.abs(h - c), v = r >= Math.abs(d - s), y = r >= Math.abs(p - a);
      g && (n.position.top = i._convertPositionTo("relative", {
       top: f,
       left: 0
      }).top - i.margins.top), m && (n.position.top = i._convertPositionTo("relative", {
       top: h - i.helperProportions.height,
       left: 0
      }).top - i.margins.top), v && (n.position.left = i._convertPositionTo("relative", {
       top: 0,
       left: d
      }).left - i.margins.left), y && (n.position.left = i._convertPositionTo("relative", {
       top: 0,
       left: p - i.helperProportions.width
      }).left - i.margins.left);
     }
     !i.snapElements[u].snapping && (g || m || v || y || b) && i.options.snap.snap && i.options.snap.snap.call(i.element, t, e.extend(i._uiHash(), {
      snapItem: i.snapElements[u].item
     })), i.snapElements[u].snapping = g || m || v || y || b;
    } else i.snapElements[u].snapping && i.options.snap.release && i.options.snap.release.call(i.element, t, e.extend(i._uiHash(), {
     snapItem: i.snapElements[u].item
    })), i.snapElements[u].snapping = !1;
   }
  }
 }), e.ui.plugin.add("draggable", "stack", {
  start: function() {
   var t = e(this).data("draggable").options, n = e.makeArray(e(t.stack)).sort(function(t, n) {
    return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0);
   });
   if (n.length) {
    var i = parseInt(n[0].style.zIndex) || 0;
    e(n).each(function(e) {
     this.style.zIndex = i + e;
    }), this[0].style.zIndex = i + n.length;
   }
  }
 }), e.ui.plugin.add("draggable", "zIndex", {
  start: function(t, n) {
   var i = e(n.helper), o = e(this).data("draggable").options;
   i.css("zIndex") && (o._zIndex = i.css("zIndex")), i.css("zIndex", o.zIndex);
  },
  stop: function(t, n) {
   var i = e(this).data("draggable").options;
   i._zIndex && e(n.helper).css("zIndex", i._zIndex);
  }
 });
}(jQuery), jQuery.effects || function(e, t) {
 var n = e.uiBackCompat !== !1, i = "ui-effects-";
 e.effects = {
  effect: {}
 }, function(t, n) {
  function i(e, t, n) {
   var i = p[t.type] || {};
   return null == e ? n || !t.def ? null : t.def : (e = i.floor ? ~~e : parseFloat(e), 
   isNaN(e) ? t.def : i.mod ? (e + i.mod) % i.mod : 0 > e ? 0 : e > i.max ? i.max : e);
  }
  function o(e) {
   var i = u(), o = i._rgba = [];
   return e = e.toLowerCase(), g(c, function(t, r) {
    var s, a = r.re.exec(e), l = a && r.parse(a), c = r.space || "rgba";
    return l ? (s = i[c](l), i[d[c].cache] = s[d[c].cache], o = i._rgba = s._rgba, !1) : n;
   }), o.length ? ("0,0,0,0" === o.join() && t.extend(o, s.transparent), i) : s[e];
  }
  function r(e, t, n) {
   return n = (n + 1) % 1, 1 > 6 * n ? e + 6 * (t - e) * n : 1 > 2 * n ? t : 2 > 3 * n ? e + 6 * (t - e) * (2 / 3 - n) : e;
  }
  var s, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "), l = /^([\-+])=\s*(\d+\.?\d*)/, c = [ {
   re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
   parse: function(e) {
    return [ e[1], e[2], e[3], e[4] ];
   }
  }, {
   re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
   parse: function(e) {
    return [ 2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4] ];
   }
  }, {
   re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
   parse: function(e) {
    return [ parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16) ];
   }
  }, {
   re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
   parse: function(e) {
    return [ parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16) ];
   }
  }, {
   re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
   space: "hsla",
   parse: function(e) {
    return [ e[1], e[2] / 100, e[3] / 100, e[4] ];
   }
  } ], u = t.Color = function(e, n, i, o) {
   return new t.Color.fn.parse(e, n, i, o);
  }, d = {
   rgba: {
    props: {
     red: {
      idx: 0,
      type: "byte"
     },
     green: {
      idx: 1,
      type: "byte"
     },
     blue: {
      idx: 2,
      type: "byte"
     }
    }
   },
   hsla: {
    props: {
     hue: {
      idx: 0,
      type: "degrees"
     },
     saturation: {
      idx: 1,
      type: "percent"
     },
     lightness: {
      idx: 2,
      type: "percent"
     }
    }
   }
  }, p = {
   "byte": {
    floor: !0,
    max: 255
   },
   percent: {
    max: 1
   },
   degrees: {
    mod: 360,
    floor: !0
   }
  }, f = u.support = {}, h = t("<p>")[0], g = t.each;
  h.style.cssText = "background-color:rgba(1,1,1,.5)", f.rgba = h.style.backgroundColor.indexOf("rgba") > -1, 
  g(d, function(e, t) {
   t.cache = "_" + e, t.props.alpha = {
    idx: 3,
    type: "percent",
    def: 1
   };
  }), u.fn = t.extend(u.prototype, {
   parse: function(r, a, l, c) {
    if (r === n) return this._rgba = [ null, null, null, null ], this;
    (r.jquery || r.nodeType) && (r = t(r).css(a), a = n);
    var p = this, f = t.type(r), h = this._rgba = [];
    return a !== n && (r = [ r, a, l, c ], f = "array"), "string" === f ? this.parse(o(r) || s._default) : "array" === f ? (g(d.rgba.props, function(e, t) {
     h[t.idx] = i(r[t.idx], t);
    }), this) : "object" === f ? (r instanceof u ? g(d, function(e, t) {
     r[t.cache] && (p[t.cache] = r[t.cache].slice());
    }) : g(d, function(t, n) {
     var o = n.cache;
     g(n.props, function(e, t) {
      if (!p[o] && n.to) {
       if ("alpha" === e || null == r[e]) return;
       p[o] = n.to(p._rgba);
      }
      p[o][t.idx] = i(r[e], t, !0);
     }), p[o] && 0 > e.inArray(null, p[o].slice(0, 3)) && (p[o][3] = 1, n.from && (p._rgba = n.from(p[o])));
    }), this) : n;
   },
   is: function(e) {
    var t = u(e), i = !0, o = this;
    return g(d, function(e, r) {
     var s, a = t[r.cache];
     return a && (s = o[r.cache] || r.to && r.to(o._rgba) || [], g(r.props, function(e, t) {
      return null != a[t.idx] ? i = a[t.idx] === s[t.idx] : n;
     })), i;
    }), i;
   },
   _space: function() {
    var e = [], t = this;
    return g(d, function(n, i) {
     t[i.cache] && e.push(n);
    }), e.pop();
   },
   transition: function(e, t) {
    var n = u(e), o = n._space(), r = d[o], s = 0 === this.alpha() ? u("transparent") : this, a = s[r.cache] || r.to(s._rgba), l = a.slice();
    return n = n[r.cache], g(r.props, function(e, o) {
     var r = o.idx, s = a[r], c = n[r], u = p[o.type] || {};
     null !== c && (null === s ? l[r] = c : (u.mod && (c - s > u.mod / 2 ? s += u.mod : s - c > u.mod / 2 && (s -= u.mod)), 
     l[r] = i((c - s) * t + s, o)));
    }), this[o](l);
   },
   blend: function(e) {
    if (1 === this._rgba[3]) return this;
    var n = this._rgba.slice(), i = n.pop(), o = u(e)._rgba;
    return u(t.map(n, function(e, t) {
     return (1 - i) * o[t] + i * e;
    }));
   },
   toRgbaString: function() {
    var e = "rgba(", n = t.map(this._rgba, function(e, t) {
     return null == e ? t > 2 ? 1 : 0 : e;
    });
    return 1 === n[3] && (n.pop(), e = "rgb("), e + n.join() + ")";
   },
   toHslaString: function() {
    var e = "hsla(", n = t.map(this.hsla(), function(e, t) {
     return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), 
     e;
    });
    return 1 === n[3] && (n.pop(), e = "hsl("), e + n.join() + ")";
   },
   toHexString: function(e) {
    var n = this._rgba.slice(), i = n.pop();
    return e && n.push(~~(255 * i)), "#" + t.map(n, function(e) {
     return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e;
    }).join("");
   },
   toString: function() {
    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
   }
  }), u.fn.parse.prototype = u.fn, d.hsla.to = function(e) {
   if (null == e[0] || null == e[1] || null == e[2]) return [ null, null, null, e[3] ];
   var t, n, i = e[0] / 255, o = e[1] / 255, r = e[2] / 255, s = e[3], a = Math.max(i, o, r), l = Math.min(i, o, r), c = a - l, u = a + l, d = .5 * u;
   return t = l === a ? 0 : i === a ? 60 * (o - r) / c + 360 : o === a ? 60 * (r - i) / c + 120 : 60 * (i - o) / c + 240, 
   n = 0 === d || 1 === d ? d : .5 >= d ? c / u : c / (2 - u), [ Math.round(t) % 360, n, d, null == s ? 1 : s ];
  }, d.hsla.from = function(e) {
   if (null == e[0] || null == e[1] || null == e[2]) return [ null, null, null, e[3] ];
   var t = e[0] / 360, n = e[1], i = e[2], o = e[3], s = .5 >= i ? i * (1 + n) : i + n - i * n, a = 2 * i - s;
   return [ Math.round(255 * r(a, s, t + 1 / 3)), Math.round(255 * r(a, s, t)), Math.round(255 * r(a, s, t - 1 / 3)), o ];
  }, g(d, function(e, o) {
   var r = o.props, s = o.cache, a = o.to, c = o.from;
   u.fn[e] = function(e) {
    if (a && !this[s] && (this[s] = a(this._rgba)), e === n) return this[s].slice();
    var o, l = t.type(e), d = "array" === l || "object" === l ? e : arguments, p = this[s].slice();
    return g(r, function(e, t) {
     var n = d["object" === l ? e : t.idx];
     null == n && (n = p[t.idx]), p[t.idx] = i(n, t);
    }), c ? (o = u(c(p)), o[s] = p, o) : u(p);
   }, g(r, function(n, i) {
    u.fn[n] || (u.fn[n] = function(o) {
     var r, s = t.type(o), a = "alpha" === n ? this._hsla ? "hsla" : "rgba" : e, c = this[a](), u = c[i.idx];
     return "undefined" === s ? u : ("function" === s && (o = o.call(this, u), s = t.type(o)), 
     null == o && i.empty ? this : ("string" === s && (r = l.exec(o), r && (o = u + parseFloat(r[2]) * ("+" === r[1] ? 1 : -1))), 
     c[i.idx] = o, this[a](c)));
    });
   });
  }), g(a, function(e, n) {
   t.cssHooks[n] = {
    set: function(e, i) {
     var r, s, a = "";
     if ("string" !== t.type(i) || (r = o(i))) {
      if (i = u(r || i), !f.rgba && 1 !== i._rgba[3]) {
       for (s = "backgroundColor" === n ? e.parentNode : e; ("" === a || "transparent" === a) && s && s.style; ) try {
        a = t.css(s, "backgroundColor"), s = s.parentNode;
       } catch (l) {}
       i = i.blend(a && "transparent" !== a ? a : "_default");
      }
      i = i.toRgbaString();
     }
     try {
      e.style[n] = i;
     } catch (c) {}
    }
   }, t.fx.step[n] = function(e) {
    e.colorInit || (e.start = u(e.elem, n), e.end = u(e.end), e.colorInit = !0), t.cssHooks[n].set(e.elem, e.start.transition(e.end, e.pos));
   };
  }), t.cssHooks.borderColor = {
   expand: function(e) {
    var t = {};
    return g([ "Top", "Right", "Bottom", "Left" ], function(n, i) {
     t["border" + i + "Color"] = e;
    }), t;
   }
  }, s = t.Color.names = {
   aqua: "#00ffff",
   black: "#000000",
   blue: "#0000ff",
   fuchsia: "#ff00ff",
   gray: "#808080",
   green: "#008000",
   lime: "#00ff00",
   maroon: "#800000",
   navy: "#000080",
   olive: "#808000",
   purple: "#800080",
   red: "#ff0000",
   silver: "#c0c0c0",
   teal: "#008080",
   white: "#ffffff",
   yellow: "#ffff00",
   transparent: [ null, null, null, 0 ],
   _default: "#ffffff"
  };
 }(jQuery), function() {
  function n() {
   var t, n, i = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle, o = {};
   if (i && i.length && i[0] && i[i[0]]) for (n = i.length; n--; ) t = i[n], "string" == typeof i[t] && (o[e.camelCase(t)] = i[t]); else for (t in i) "string" == typeof i[t] && (o[t] = i[t]);
   return o;
  }
  function i(t, n) {
   var i, o, s = {};
   for (i in n) o = n[i], t[i] !== o && (r[i] || (e.fx.step[i] || !isNaN(parseFloat(o))) && (s[i] = o));
   return s;
  }
  var o = [ "add", "remove", "toggle" ], r = {
   border: 1,
   borderBottom: 1,
   borderColor: 1,
   borderLeft: 1,
   borderRight: 1,
   borderTop: 1,
   borderWidth: 1,
   margin: 1,
   padding: 1
  };
  e.each([ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ], function(t, n) {
   e.fx.step[n] = function(e) {
    ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (jQuery.style(e.elem, n, e.end), 
    e.setAttr = !0);
   };
  }), e.effects.animateClass = function(t, r, s, a) {
   var l = e.speed(r, s, a);
   return this.queue(function() {
    var r, s = e(this), a = s.attr("class") || "", c = l.children ? s.find("*").andSelf() : s;
    c = c.map(function() {
     var t = e(this);
     return {
      el: t,
      start: n.call(this)
     };
    }), r = function() {
     e.each(o, function(e, n) {
      t[n] && s[n + "Class"](t[n]);
     });
    }, r(), c = c.map(function() {
     return this.end = n.call(this.el[0]), this.diff = i(this.start, this.end), this;
    }), s.attr("class", a), c = c.map(function() {
     var t = this, n = e.Deferred(), i = jQuery.extend({}, l, {
      queue: !1,
      complete: function() {
       n.resolve(t);
      }
     });
     return this.el.animate(this.diff, i), n.promise();
    }), e.when.apply(e, c.get()).done(function() {
     r(), e.each(arguments, function() {
      var t = this.el;
      e.each(this.diff, function(e) {
       t.css(e, "");
      });
     }), l.complete.call(s[0]);
    });
   });
  }, e.fn.extend({
   _addClass: e.fn.addClass,
   addClass: function(t, n, i, o) {
    return n ? e.effects.animateClass.call(this, {
     add: t
    }, n, i, o) : this._addClass(t);
   },
   _removeClass: e.fn.removeClass,
   removeClass: function(t, n, i, o) {
    return n ? e.effects.animateClass.call(this, {
     remove: t
    }, n, i, o) : this._removeClass(t);
   },
   _toggleClass: e.fn.toggleClass,
   toggleClass: function(n, i, o, r, s) {
    return "boolean" == typeof i || i === t ? o ? e.effects.animateClass.call(this, i ? {
     add: n
    } : {
     remove: n
    }, o, r, s) : this._toggleClass(n, i) : e.effects.animateClass.call(this, {
     toggle: n
    }, i, o, r);
   },
   switchClass: function(t, n, i, o, r) {
    return e.effects.animateClass.call(this, {
     add: n,
     remove: t
    }, i, o, r);
   }
  });
 }(), function() {
  function o(t, n, i, o) {
   return e.isPlainObject(t) && (n = t, t = t.effect), t = {
    effect: t
   }, null == n && (n = {}), e.isFunction(n) && (o = n, i = null, n = {}), ("number" == typeof n || e.fx.speeds[n]) && (o = i, 
   i = n, n = {}), e.isFunction(i) && (o = i, i = null), n && e.extend(t, n), i = i || n.duration, 
   t.duration = e.fx.off ? 0 : "number" == typeof i ? i : i in e.fx.speeds ? e.fx.speeds[i] : e.fx.speeds._default, 
   t.complete = o || n.complete, t;
  }
  function r(t) {
   return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? !1 : n && e.effects[t] ? !1 : !0;
  }
  e.extend(e.effects, {
   version: "1.9.2",
   save: function(e, t) {
    for (var n = 0; t.length > n; n++) null !== t[n] && e.data(i + t[n], e[0].style[t[n]]);
   },
   restore: function(e, n) {
    var o, r;
    for (r = 0; n.length > r; r++) null !== n[r] && (o = e.data(i + n[r]), o === t && (o = ""), 
    e.css(n[r], o));
   },
   setMode: function(e, t) {
    return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t;
   },
   getBaseline: function(e, t) {
    var n, i;
    switch (e[0]) {
    case "top":
     n = 0;
     break;

    case "middle":
     n = .5;
     break;

    case "bottom":
     n = 1;
     break;

    default:
     n = e[0] / t.height;
    }
    switch (e[1]) {
    case "left":
     i = 0;
     break;

    case "center":
     i = .5;
     break;

    case "right":
     i = 1;
     break;

    default:
     i = e[1] / t.width;
    }
    return {
     x: i,
     y: n
    };
   },
   createWrapper: function(t) {
    if (t.parent().is(".ui-effects-wrapper")) return t.parent();
    var n = {
     width: t.outerWidth(!0),
     height: t.outerHeight(!0),
     "float": t.css("float")
    }, i = e("<div></div>").addClass("ui-effects-wrapper").css({
     fontSize: "100%",
     background: "transparent",
     border: "none",
     margin: 0,
     padding: 0
    }), o = {
     width: t.width(),
     height: t.height()
    }, r = document.activeElement;
    try {
     r.id;
    } catch (s) {
     r = document.body;
    }
    return t.wrap(i), (t[0] === r || e.contains(t[0], r)) && e(r).focus(), i = t.parent(), 
    "static" === t.css("position") ? (i.css({
     position: "relative"
    }), t.css({
     position: "relative"
    })) : (e.extend(n, {
     position: t.css("position"),
     zIndex: t.css("z-index")
    }), e.each([ "top", "left", "bottom", "right" ], function(e, i) {
     n[i] = t.css(i), isNaN(parseInt(n[i], 10)) && (n[i] = "auto");
    }), t.css({
     position: "relative",
     top: 0,
     left: 0,
     right: "auto",
     bottom: "auto"
    })), t.css(o), i.css(n).show();
   },
   removeWrapper: function(t) {
    var n = document.activeElement;
    return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === n || e.contains(t[0], n)) && e(n).focus()), 
    t;
   },
   setTransition: function(t, n, i, o) {
    return o = o || {}, e.each(n, function(e, n) {
     var r = t.cssUnit(n);
     r[0] > 0 && (o[n] = r[0] * i + r[1]);
    }), o;
   }
  }), e.fn.extend({
   effect: function() {
    function t(t) {
     function n() {
      e.isFunction(r) && r.call(o[0]), e.isFunction(t) && t();
     }
     var o = e(this), r = i.complete, s = i.mode;
     (o.is(":hidden") ? "hide" === s : "show" === s) ? n() : a.call(o[0], i, n);
    }
    var i = o.apply(this, arguments), r = i.mode, s = i.queue, a = e.effects.effect[i.effect], l = !a && n && e.effects[i.effect];
    return e.fx.off || !a && !l ? r ? this[r](i.duration, i.complete) : this.each(function() {
     i.complete && i.complete.call(this);
    }) : a ? s === !1 ? this.each(t) : this.queue(s || "fx", t) : l.call(this, {
     options: i,
     duration: i.duration,
     callback: i.complete,
     mode: i.mode
    });
   },
   _show: e.fn.show,
   show: function(e) {
    if (r(e)) return this._show.apply(this, arguments);
    var t = o.apply(this, arguments);
    return t.mode = "show", this.effect.call(this, t);
   },
   _hide: e.fn.hide,
   hide: function(e) {
    if (r(e)) return this._hide.apply(this, arguments);
    var t = o.apply(this, arguments);
    return t.mode = "hide", this.effect.call(this, t);
   },
   __toggle: e.fn.toggle,
   toggle: function(t) {
    if (r(t) || "boolean" == typeof t || e.isFunction(t)) return this.__toggle.apply(this, arguments);
    var n = o.apply(this, arguments);
    return n.mode = "toggle", this.effect.call(this, n);
   },
   cssUnit: function(t) {
    var n = this.css(t), i = [];
    return e.each([ "em", "px", "%", "pt" ], function(e, t) {
     n.indexOf(t) > 0 && (i = [ parseFloat(n), t ]);
    }), i;
   }
  });
 }(), function() {
  var t = {};
  e.each([ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function(e, n) {
   t[n] = function(t) {
    return Math.pow(t, e + 2);
   };
  }), e.extend(t, {
   Sine: function(e) {
    return 1 - Math.cos(e * Math.PI / 2);
   },
   Circ: function(e) {
    return 1 - Math.sqrt(1 - e * e);
   },
   Elastic: function(e) {
    return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15);
   },
   Back: function(e) {
    return e * e * (3 * e - 2);
   },
   Bounce: function(e) {
    for (var t, n = 4; ((t = Math.pow(2, --n)) - 1) / 11 > e; ) ;
    return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2);
   }
  }), e.each(t, function(t, n) {
   e.easing["easeIn" + t] = n, e.easing["easeOut" + t] = function(e) {
    return 1 - n(1 - e);
   }, e.easing["easeInOut" + t] = function(e) {
    return .5 > e ? n(2 * e) / 2 : 1 - n(-2 * e + 2) / 2;
   };
  });
 }();
}(jQuery), function(e) {
 e.effects.effect.slide = function(t, n) {
  var i, o = e(this), r = [ "position", "top", "bottom", "left", "right", "width", "height" ], s = e.effects.setMode(o, t.mode || "show"), a = "show" === s, l = t.direction || "left", c = "up" === l || "down" === l ? "top" : "left", u = "up" === l || "left" === l, d = {};
  e.effects.save(o, r), o.show(), i = t.distance || o["top" === c ? "outerHeight" : "outerWidth"](!0), 
  e.effects.createWrapper(o).css({
   overflow: "hidden"
  }), a && o.css(c, u ? isNaN(i) ? "-" + i : -i : i), d[c] = (a ? u ? "+=" : "-=" : u ? "-=" : "+=") + i, 
  o.animate(d, {
   queue: !1,
   duration: t.duration,
   easing: t.easing,
   complete: function() {
    "hide" === s && o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), n();
   }
  });
 };
}(jQuery), define("libs/jquery-ui", function() {}), function($) {
 var min = Math.min, max = Math.max, round = Math.floor, isStr = function(e) {
  return "string" === $.type(e);
 }, runPluginCallbacks = function(Instance, a_fn) {
  function g(e) {
   return e;
  }
  if ($.isArray(a_fn)) for (var i = 0, c = a_fn.length; c > i; i++) {
   var fn = a_fn[i];
   try {
    isStr(fn) && (fn = eval(fn)), $.isFunction(fn) && g(fn)(Instance);
   } catch (ex) {}
  }
 };
 $.layout = {
  version: "1.3.rc30.79",
  revision: .033007,
  browser: {},
  effects: {
   slide: {
    all: {
     duration: "fast"
    },
    north: {
     direction: "up"
    },
    south: {
     direction: "down"
    },
    east: {
     direction: "right"
    },
    west: {
     direction: "left"
    }
   },
   drop: {
    all: {
     duration: "slow"
    },
    north: {
     direction: "up"
    },
    south: {
     direction: "down"
    },
    east: {
     direction: "right"
    },
    west: {
     direction: "left"
    }
   },
   scale: {
    all: {
     duration: "fast"
    }
   },
   blind: {},
   clip: {},
   explode: {},
   fade: {},
   fold: {},
   puff: {},
   size: {
    all: {
     easing: "swing"
    }
   }
  },
  config: {
   optionRootKeys: "effects,panes,north,south,west,east,center".split(","),
   allPanes: "north,south,west,east,center".split(","),
   borderPanes: "north,south,west,east".split(","),
   oppositeEdge: {
    north: "south",
    south: "north",
    east: "west",
    west: "east"
   },
   offscreenCSS: {
    left: "-99999px",
    right: "auto"
   },
   offscreenReset: "offscreenReset",
   hidden: {
    visibility: "hidden"
   },
   visible: {
    visibility: "visible"
   },
   resizers: {
    cssReq: {
     position: "absolute",
     padding: 0,
     margin: 0,
     fontSize: "1px",
     textAlign: "left",
     overflow: "hidden"
    },
    cssDemo: {
     background: "#DDD",
     border: "none"
    }
   },
   togglers: {
    cssReq: {
     position: "absolute",
     display: "block",
     padding: 0,
     margin: 0,
     overflow: "hidden",
     textAlign: "center",
     fontSize: "1px",
     cursor: "pointer",
     zIndex: 1
    },
    cssDemo: {
     background: "#AAA"
    }
   },
   content: {
    cssReq: {
     position: "relative"
    },
    cssDemo: {
     overflow: "auto",
     padding: "10px"
    },
    cssDemoPane: {
     overflow: "hidden",
     padding: 0
    }
   },
   panes: {
    cssReq: {
     position: "absolute",
     margin: 0
    },
    cssDemo: {
     padding: "10px",
     background: "#FFF",
     border: "1px solid #BBB",
     overflow: "auto"
    }
   },
   north: {
    side: "top",
    sizeType: "Height",
    dir: "horz",
    cssReq: {
     top: 0,
     bottom: "auto",
     left: 0,
     right: 0,
     width: "auto"
    }
   },
   south: {
    side: "bottom",
    sizeType: "Height",
    dir: "horz",
    cssReq: {
     top: "auto",
     bottom: 0,
     left: 0,
     right: 0,
     width: "auto"
    }
   },
   east: {
    side: "right",
    sizeType: "Width",
    dir: "vert",
    cssReq: {
     left: "auto",
     right: 0,
     top: "auto",
     bottom: "auto",
     height: "auto"
    }
   },
   west: {
    side: "left",
    sizeType: "Width",
    dir: "vert",
    cssReq: {
     left: 0,
     right: "auto",
     top: "auto",
     bottom: "auto",
     height: "auto"
    }
   },
   center: {
    dir: "center",
    cssReq: {
     left: "auto",
     right: "auto",
     top: "auto",
     bottom: "auto",
     height: "auto",
     width: "auto"
    }
   }
  },
  callbacks: {},
  getParentPaneElem: function(e) {
   var t = $(e), n = t.data("layout") || t.data("parentLayout");
   if (n) {
    var i = n.container;
    if (i.data("layoutPane")) return i;
    var o = i.closest("." + $.layout.defaults.panes.paneClass);
    if (o.data("layoutPane")) return o;
   }
   return null;
  },
  getParentPaneInstance: function(e) {
   var t = $.layout.getParentPaneElem(e);
   return t ? t.data("layoutPane") : null;
  },
  getParentLayoutInstance: function(e) {
   var t = $.layout.getParentPaneElem(e);
   return t ? t.data("parentLayout") : null;
  },
  getEventObject: function(e) {
   return "object" == typeof e && e.stopPropagation ? e : null;
  },
  parsePaneName: function(e) {
   var t = $.layout.getEventObject(e), n = e;
   return t && (t.stopPropagation(), n = $(this).data("layoutEdge")), n && !/^(west|east|north|south|center)$/.test(n) && ($.layout.msg('LAYOUT ERROR - Invalid pane-name: "' + n + '"'), 
   n = "error"), n;
  },
  plugins: {
   draggable: !!$.fn.draggable,
   effects: {
    core: !!$.effects,
    slide: $.effects && ($.effects.slide || $.effects.effect && $.effects.effect.slide)
   }
  },
  onCreate: [],
  onLoad: [],
  onReady: [],
  onDestroy: [],
  onUnload: [],
  afterOpen: [],
  afterClose: [],
  scrollbarWidth: function() {
   return window.scrollbarWidth || $.layout.getScrollbarSize("width");
  },
  scrollbarHeight: function() {
   return window.scrollbarHeight || $.layout.getScrollbarSize("height");
  },
  getScrollbarSize: function(e) {
   var t = $('<div style="position: absolute; top: -10000px; left: -10000px; width: 100px; height: 100px; overflow: scroll;"></div>').appendTo("body"), n = {
    width: t.css("width") - t[0].clientWidth,
    height: t.height() - t[0].clientHeight
   };
   return t.remove(), window.scrollbarWidth = n.width, window.scrollbarHeight = n.height, 
   e.match(/^(width|height)$/) ? n[e] : n;
  },
  showInvisibly: function(e, t) {
   if (e && e.length && (t || "none" === e.css("display"))) {
    var n = e[0].style, i = {
     display: n.display || "",
     visibility: n.visibility || ""
    };
    return e.css({
     display: "block",
     visibility: "hidden"
    }), i;
   }
   return {};
  },
  getElementDimensions: function(e, t) {
   var n, i, o, r = {
    css: {},
    inset: {}
   }, s = r.css, a = {
    bottom: 0
   }, l = $.layout.cssNum, c = e.offset();
   return r.offsetLeft = c.left, r.offsetTop = c.top, t || (t = {}), $.each("Left,Right,Top,Bottom".split(","), function(l, c) {
    n = s["border" + c] = $.layout.borderWidth(e, c), i = s["padding" + c] = $.layout.cssNum(e, "padding" + c), 
    o = c.toLowerCase(), r.inset[o] = t[o] >= 0 ? t[o] : i, a[o] = r.inset[o] + n;
   }), s.width = e.width(), s.height = e.height(), s.top = l(e, "top", !0), s.bottom = l(e, "bottom", !0), 
   s.left = l(e, "left", !0), s.right = l(e, "right", !0), r.outerWidth = e.outerWidth(), 
   r.outerHeight = e.outerHeight(), r.innerWidth = max(0, r.outerWidth - a.left - a.right), 
   r.innerHeight = max(0, r.outerHeight - a.top - a.bottom), r.layoutWidth = e.innerWidth(), 
   r.layoutHeight = e.innerHeight(), r;
  },
  getElementStyles: function(e, t) {
   var n, i, o, r, s, a, l = {}, c = e[0].style, u = t.split(","), d = "Top,Bottom,Left,Right".split(","), p = "Color,Style,Width".split(",");
   for (r = 0; u.length > r; r++) if (n = u[r], n.match(/(border|padding|margin)$/)) for (s = 0; 4 > s; s++) if (i = d[s], 
   "border" === n) for (a = 0; 3 > a; a++) o = p[a], l[n + i + o] = c[n + i + o]; else l[n + i] = c[n + i]; else l[n] = c[n];
   return l;
  },
  cssWidth: function(e, t) {
   if (0 >= t) return 0;
   var n = $.layout.browser.boxModel ? $.support.boxSizing ? e.css("boxSizing") : "content-box" : "border-box", i = $.layout.borderWidth, o = $.layout.cssNum, r = t;
   return "border-box" !== n && (r -= i(e, "Left") + i(e, "Right")), "content-box" === n && (r -= o(e, "paddingLeft") + o(e, "paddingRight")), 
   max(0, r);
  },
  cssHeight: function(e, t) {
   if (0 >= t) return 0;
   var n = $.layout.browser.boxModel ? $.support.boxSizing ? e.css("boxSizing") : "content-box" : "border-box", i = $.layout.borderWidth, o = $.layout.cssNum, r = t;
   return "border-box" !== n && (r -= i(e, "Top") + i(e, "Bottom")), "content-box" === n && (r -= o(e, "paddingTop") + o(e, "paddingBottom")), 
   max(0, r);
  },
  cssNum: function(e, t, n) {
   e.jquery || (e = $(e));
   var i = $.layout.showInvisibly(e), o = $.css(e[0], t, !0), r = n && "auto" == o ? o : Math.round(parseFloat(o) || 0);
   return e.css(i), r;
  },
  borderWidth: function(e, t) {
   e.jquery && (e = e[0]);
   var n = "border" + t.substr(0, 1).toUpperCase() + t.substr(1);
   return "none" === $.css(e, n + "Style", !0) ? 0 : Math.round(parseFloat($.css(e, n + "Width", !0)) || 0);
  },
  isMouseOverElem: function(e, t) {
   var n = $(t || this), i = n.offset(), o = i.top, r = i.left, s = r + n.outerWidth(), a = o + n.outerHeight(), l = e.pageX, c = e.pageY;
   return $.layout.browser.msie && 0 > l && 0 > c || l >= r && s >= l && c >= o && a >= c;
  },
  msg: function(e, t, n, i) {
   function o() {
    var e = $.support.fixedPosition ? "fixed" : "absolute", t = $('<div id="layoutLogger" style="position: ' + e + '; top: 5px; z-index: 999999; max-width: 25%; overflow: hidden; border: 1px solid #000; border-radius: 5px; background: #FBFBFB; box-shadow: 0 2px 10px rgba(0,0,0,0.3);">' + '<div style="font-size: 13px; font-weight: bold; padding: 5px 10px; background: #F6F6F6; border-radius: 5px 5px 0 0; cursor: move;">' + '<span style="float: right; padding-left: 7px; cursor: pointer;" title="Remove Console" onclick="$(this).closest(\'#layoutLogger\').remove()">X</span>Layout console.log</div>' + '<ul style="font-size: 13px; font-weight: none; list-style: none; margin: 0; padding: 0 0 2px;"></ul>' + "</div>").appendTo("body");
    return t.css("left", $(window).width() - t.outerWidth() - 5), $.ui.draggable && t.draggable({
     handle: ":first-child"
    }), t;
   }
   if ($.isPlainObject(e) && window.debugData) {
    "string" == typeof t ? (i = n, n = t) : "object" == typeof n && (i = n, n = null);
    var r = n || "log( <object> )", s = $.extend({
     sort: !1,
     returnHTML: !1,
     display: !1
    }, i);
    t === !0 || s.display ? debugData(e, r, s) : window.console && console.log(debugData(e, r, s));
   } else if (t) alert(e); else if (window.console) console.log(e); else {
    var a = "#layoutLogger", l = $(a);
    l.length || (l = o()), l.children("ul").append('<li style="padding: 4px 10px; margin: 0; border-top: 1px solid #CCC;">' + e.replace(/\</g, "&lt;").replace(/\>/g, "&gt;") + "</li>");
   }
  }
 };
 var u = navigator.userAgent.toLowerCase(), m = /(chrome)[ \/]([\w.]+)/.exec(u) || /(webkit)[ \/]([\w.]+)/.exec(u) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(u) || /(msie) ([\w.]+)/.exec(u) || 0 > u.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(u) || [], b = m[1] || "", v = m[2] || 0, ie = "msie" === b;
 $.layout.browser = {
  version: v,
  safari: "webkit" === b,
  webkit: "chrome" === b,
  msie: ie,
  isIE6: ie && 6 == v,
  boxModel: !ie || $.support.boxModel !== !1
 }, b && ($.layout.browser[b] = !0), ie && $(function() {
  $.layout.browser.boxModel = $.support.boxModel;
 }), $.layout.defaults = {
  name: "",
  containerClass: "ui-layout-container",
  inset: null,
  scrollToBookmarkOnLoad: !0,
  resizeWithWindow: !0,
  resizeWithWindowDelay: 200,
  resizeWithWindowMaxDelay: 0,
  maskPanesEarly: !1,
  onresizeall_start: null,
  onresizeall_end: null,
  onload_start: null,
  onload_end: null,
  onunload_start: null,
  onunload_end: null,
  initPanes: !0,
  showErrorMessages: !0,
  showDebugMessages: !1,
  zIndex: null,
  zIndexes: {
   pane_normal: 0,
   content_mask: 1,
   resizer_normal: 2,
   pane_sliding: 100,
   pane_animate: 1e3,
   resizer_drag: 1e4
  },
  errors: {
   pane: "pane",
   selector: "selector",
   addButtonError: "Error Adding Button\nInvalid ",
   containerMissing: "UI Layout Initialization Error\nThe specified layout-container does not exist.",
   centerPaneMissing: "UI Layout Initialization Error\nThe center-pane element does not exist.\nThe center-pane is a required element.",
   noContainerHeight: "UI Layout Initialization Warning\nThe layout-container \"CONTAINER\" has no height.\nTherefore the layout is 0-height and hence 'invisible'!",
   callbackError: "UI Layout Callback Error\nThe EVENT callback is not a valid function."
  },
  panes: {
   applyDemoStyles: !1,
   closable: !0,
   resizable: !0,
   slidable: !0,
   initClosed: !1,
   initHidden: !1,
   contentSelector: ".ui-layout-content",
   contentIgnoreSelector: ".ui-layout-ignore",
   findNestedContent: !1,
   paneClass: "ui-layout-pane",
   resizerClass: "ui-layout-resizer",
   togglerClass: "ui-layout-toggler",
   buttonClass: "ui-layout-button",
   minSize: 0,
   maxSize: 0,
   spacing_open: 6,
   spacing_closed: 6,
   togglerLength_open: 50,
   togglerLength_closed: 50,
   togglerAlign_open: "center",
   togglerAlign_closed: "center",
   togglerContent_open: "",
   togglerContent_closed: "",
   resizerDblClickToggle: !0,
   autoResize: !0,
   autoReopen: !0,
   resizerDragOpacity: 1,
   maskContents: !1,
   maskObjects: !1,
   maskZindex: null,
   resizingGrid: !1,
   livePaneResizing: !1,
   liveContentResizing: !1,
   liveResizingTolerance: 1,
   sliderCursor: "pointer",
   slideTrigger_open: "click",
   slideTrigger_close: "mouseleave",
   slideDelay_open: 300,
   slideDelay_close: 300,
   hideTogglerOnSlide: !1,
   preventQuickSlideClose: $.layout.browser.webkit,
   preventPrematureSlideClose: !1,
   tips: {
    Open: "Open",
    Close: "Close",
    Resize: "Resize",
    Slide: "Slide Open",
    Pin: "Pin",
    Unpin: "Un-Pin",
    noRoomToOpen: "Not enough room to show this panel.",
    minSizeWarning: "Panel has reached its minimum size",
    maxSizeWarning: "Panel has reached its maximum size"
   },
   showOverflowOnHover: !1,
   enableCursorHotkey: !0,
   customHotkeyModifier: "SHIFT",
   fxName: "slide",
   fxSpeed: null,
   fxSettings: {},
   fxOpacityFix: !0,
   animatePaneSizing: !1,
   children: null,
   containerSelector: "",
   initChildren: !0,
   destroyChildren: !0,
   resizeChildren: !0,
   triggerEventsOnLoad: !1,
   triggerEventsDuringLiveResize: !0,
   onshow_start: null,
   onshow_end: null,
   onhide_start: null,
   onhide_end: null,
   onopen_start: null,
   onopen_end: null,
   onclose_start: null,
   onclose_end: null,
   onresize_start: null,
   onresize_end: null,
   onsizecontent_start: null,
   onsizecontent_end: null,
   onswap_start: null,
   onswap_end: null,
   ondrag_start: null,
   ondrag_end: null
  },
  north: {
   paneSelector: ".ui-layout-north",
   size: "auto",
   resizerCursor: "n-resize",
   customHotkey: ""
  },
  south: {
   paneSelector: ".ui-layout-south",
   size: "auto",
   resizerCursor: "s-resize",
   customHotkey: ""
  },
  east: {
   paneSelector: ".ui-layout-east",
   size: 200,
   resizerCursor: "e-resize",
   customHotkey: ""
  },
  west: {
   paneSelector: ".ui-layout-west",
   size: 200,
   resizerCursor: "w-resize",
   customHotkey: ""
  },
  center: {
   paneSelector: ".ui-layout-center",
   minWidth: 0,
   minHeight: 0
  }
 }, $.layout.optionsMap = {
  layout: "name,instanceKey,stateManagement,effects,inset,zIndexes,errors,zIndex,scrollToBookmarkOnLoad,showErrorMessages,maskPanesEarly,outset,resizeWithWindow,resizeWithWindowDelay,resizeWithWindowMaxDelay,onresizeall,onresizeall_start,onresizeall_end,onload,onload_start,onload_end,onunload,onunload_start,onunload_end".split(","),
  center: "paneClass,contentSelector,contentIgnoreSelector,findNestedContent,applyDemoStyles,triggerEventsOnLoad,showOverflowOnHover,maskContents,maskObjects,liveContentResizing,containerSelector,children,initChildren,resizeChildren,destroyChildren,onresize,onresize_start,onresize_end,onsizecontent,onsizecontent_start,onsizecontent_end".split(","),
  noDefault: "paneSelector,resizerCursor,customHotkey".split(",")
 }, $.layout.transformData = function(e, t) {
  var n, i, o, r, s, a, l, c = t ? {
   panes: {},
   center: {}
  } : {};
  if ("object" != typeof e) return c;
  for (i in e) for (n = c, s = e[i], o = i.split("__"), l = o.length - 1, a = 0; l >= a; a++) r = o[a], 
  a === l ? n[r] = $.isPlainObject(s) ? $.layout.transformData(s) : s : (n[r] || (n[r] = {}), 
  n = n[r]);
  return c;
 }, $.layout.backwardCompatibility = {
  map: {
   applyDefaultStyles: "applyDemoStyles",
   childOptions: "children",
   initChildLayout: "initChildren",
   destroyChildLayout: "destroyChildren",
   resizeChildLayout: "resizeChildren",
   resizeNestedLayout: "resizeChildren",
   resizeWhileDragging: "livePaneResizing",
   resizeContentWhileDragging: "liveContentResizing",
   triggerEventsWhileDragging: "triggerEventsDuringLiveResize",
   maskIframesOnResize: "maskContents",
   useStateCookie: "stateManagement.enabled",
   "cookie.autoLoad": "stateManagement.autoLoad",
   "cookie.autoSave": "stateManagement.autoSave",
   "cookie.keys": "stateManagement.stateKeys",
   "cookie.name": "stateManagement.cookie.name",
   "cookie.domain": "stateManagement.cookie.domain",
   "cookie.path": "stateManagement.cookie.path",
   "cookie.expires": "stateManagement.cookie.expires",
   "cookie.secure": "stateManagement.cookie.secure",
   noRoomToOpenTip: "tips.noRoomToOpen",
   togglerTip_open: "tips.Close",
   togglerTip_closed: "tips.Open",
   resizerTip: "tips.Resize",
   sliderTip: "tips.Slide"
  },
  renameOptions: function(e) {
   function t(t, n) {
    for (var i, o = t.split("."), r = o.length - 1, s = {
     branch: e,
     key: o[r]
    }, a = 0; r > a; a++) i = o[a], s.branch = void 0 == s.branch[i] ? n ? s.branch[i] = {} : {} : s.branch[i];
    return s;
   }
   var n, i, o, r = $.layout.backwardCompatibility.map;
   for (var s in r) n = t(s), o = n.branch[n.key], void 0 !== o && (i = t(r[s], !0), 
   i.branch[i.key] = o, delete n.branch[n.key]);
  },
  renameAllOptions: function(e) {
   var t = $.layout.backwardCompatibility.renameOptions;
   return t(e), e.defaults && ("object" != typeof e.panes && (e.panes = {}), $.extend(!0, e.panes, e.defaults), 
   delete e.defaults), e.panes && t(e.panes), $.each($.layout.config.allPanes, function(n, i) {
    e[i] && t(e[i]);
   }), e;
  }
 }, $.fn.layout = function(opts) {
  function keyDown(e) {
   if (!e) return !0;
   var t = e.keyCode;
   if (33 > t) return !0;
   var n, i, o, r, s = {
    38: "north",
    40: "south",
    37: "west",
    39: "east"
   }, a = (e.altKey, e.shiftKey), l = e.ctrlKey, c = l && t >= 37 && 40 >= t;
   return c && options[s[t]].enableCursorHotkey ? r = s[t] : (l || a) && $.each(_c.borderPanes, function(e, s) {
    return n = options[s], i = n.customHotkey, o = n.customHotkeyModifier, (a && "SHIFT" == o || l && "CTRL" == o || l && a) && i && t === (isNaN(i) || 9 >= i ? i.toUpperCase().charCodeAt(0) : i) ? (r = s, 
    !1) : void 0;
   }), r && $Ps[r] && options[r].closable && !state[r].isHidden ? (toggle(r), e.stopPropagation(), 
   e.returnValue = !1, !1) : !0;
  }
  function allowOverflow(e) {
   if (isInitialized()) {
    this && this.tagName && (e = this);
    var t;
    if (isStr(e) ? t = $Ps[e] : $(e).data("layoutRole") ? t = $(e) : $(e).parents().each(function() {
     return $(this).data("layoutRole") ? (t = $(this), !1) : void 0;
    }), t && t.length) {
     var n = t.data("layoutEdge"), i = state[n];
     if (i.cssSaved && resetOverflow(n), i.isSliding || i.isResizing || i.isClosed) return i.cssSaved = !1, 
     void 0;
     var o = {
      zIndex: options.zIndexes.resizer_normal + 1
     }, r = {}, s = t.css("overflow"), a = t.css("overflowX"), l = t.css("overflowY");
     "visible" != s && (r.overflow = s, o.overflow = "visible"), a && !a.match(/(visible|auto)/) && (r.overflowX = a, 
     o.overflowX = "visible"), l && !l.match(/(visible|auto)/) && (r.overflowY = a, o.overflowY = "visible"), 
     i.cssSaved = r, t.css(o), $.each(_c.allPanes, function(e, t) {
      t != n && resetOverflow(t);
     });
    }
   }
  }
  function resetOverflow(e) {
   if (isInitialized()) {
    this && this.tagName && (e = this);
    var t;
    if (isStr(e) ? t = $Ps[e] : $(e).data("layoutRole") ? t = $(e) : $(e).parents().each(function() {
     return $(this).data("layoutRole") ? (t = $(this), !1) : void 0;
    }), t && t.length) {
     var n = t.data("layoutEdge"), i = state[n], o = i.cssSaved || {};
     i.isSliding || i.isResizing || t.css("zIndex", options.zIndexes.pane_normal), t.css(o), 
     i.cssSaved = !1;
    }
   }
  }
  var browser = $.layout.browser, _c = $.layout.config, cssW = $.layout.cssWidth, cssH = $.layout.cssHeight, elDims = $.layout.getElementDimensions, styles = $.layout.getElementStyles, evtObj = $.layout.getEventObject, evtPane = $.layout.parsePaneName, options = $.extend(!0, {}, $.layout.defaults), effects = options.effects = $.extend(!0, {}, $.layout.effects), state = {
   id: "layout" + $.now(),
   initialized: !1,
   paneResizing: !1,
   panesSliding: {},
   container: {
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0,
    layoutWidth: 0,
    layoutHeight: 0
   },
   north: {
    childIdx: 0
   },
   south: {
    childIdx: 0
   },
   east: {
    childIdx: 0
   },
   west: {
    childIdx: 0
   },
   center: {
    childIdx: 0
   }
  }, children = {
   north: null,
   south: null,
   east: null,
   west: null,
   center: null
  }, timer = {
   data: {},
   set: function(e, t, n) {
    timer.clear(e), timer.data[e] = setTimeout(t, n);
   },
   clear: function(e) {
    var t = timer.data;
    t[e] && (clearTimeout(t[e]), delete t[e]);
   }
  }, _log = function(e, t, n) {
   var i = options;
   return (i.showErrorMessages && !n || n && i.showDebugMessages) && $.layout.msg(i.name + " / " + e, t !== !1), 
   !1;
  }, _runCallbacks = function(evtName, pane, skipBoundEvents) {
   function g(e) {
    return e;
   }
   var hasPane = pane && isStr(pane), s = hasPane ? state[pane] : state, o = hasPane ? options[pane] : options, lName = options.name, lng = evtName + (evtName.match(/_/) ? "" : "_end"), shrt = lng.match(/_end$/) ? lng.substr(0, lng.length - 4) : "", fn = o[lng] || o[shrt], retVal = "NC", args = [], $P;
   if (hasPane || "boolean" !== $.type(pane) || (skipBoundEvents = pane, pane = ""), 
   fn) try {
    isStr(fn) && (fn.match(/,/) ? (args = fn.split(","), fn = eval(args[0])) : fn = eval(fn)), 
    $.isFunction(fn) && (retVal = args.length ? g(fn)(args[1]) : hasPane ? g(fn)(pane, $Ps[pane], s, o, lName) : g(fn)(Instance, s, o, lName));
   } catch (ex) {
    _log(options.errors.callbackError.replace(/EVENT/, $.trim((pane || "") + " " + lng)), !1), 
    "string" === $.type(ex) && string.length && _log("Exception:  " + ex, !1);
   }
   return skipBoundEvents || retVal === !1 || (hasPane ? ($P = $Ps[pane], o = options[pane], 
   s = state[pane], $P.triggerHandler("layoutpane" + lng, [ pane, $P, s, o, lName ]), 
   shrt && $P.triggerHandler("layoutpane" + shrt, [ pane, $P, s, o, lName ])) : ($N.triggerHandler("layout" + lng, [ Instance, s, o, lName ]), 
   shrt && $N.triggerHandler("layout" + shrt, [ Instance, s, o, lName ]))), hasPane && "onresize_end" === evtName && resizeChildren(pane + "", !0), 
   retVal;
  }, _fixIframe = function(e) {
   if (!browser.mozilla) {
    var t = $Ps[e];
    "IFRAME" === state[e].tagName ? t.css(_c.hidden).css(_c.visible) : t.find("IFRAME").css(_c.hidden).css(_c.visible);
   }
  }, cssSize = function(e, t) {
   var n = "horz" == _c[e].dir ? cssH : cssW;
   return n($Ps[e], t);
  }, cssMinDims = function(e) {
   var t = $Ps[e], n = _c[e].dir, i = {
    minWidth: 1001 - cssW(t, 1e3),
    minHeight: 1001 - cssH(t, 1e3)
   };
   return "horz" === n && (i.minSize = i.minHeight), "vert" === n && (i.minSize = i.minWidth), 
   i;
  }, setOuterWidth = function(e, t, n) {
   var i, o = e;
   isStr(e) ? o = $Ps[e] : e.jquery || (o = $(e)), i = cssW(o, t), o.css({
    width: i
   }), i > 0 ? n && o.data("autoHidden") && o.innerHeight() > 0 && (o.show().data("autoHidden", !1), 
   browser.mozilla || o.css(_c.hidden).css(_c.visible)) : n && !o.data("autoHidden") && o.hide().data("autoHidden", !0);
  }, setOuterHeight = function(e, t, n) {
   var i, o = e;
   isStr(e) ? o = $Ps[e] : e.jquery || (o = $(e)), i = cssH(o, t), o.css({
    height: i,
    visibility: "visible"
   }), i > 0 && o.innerWidth() > 0 ? n && o.data("autoHidden") && (o.show().data("autoHidden", !1), 
   browser.mozilla || o.css(_c.hidden).css(_c.visible)) : n && !o.data("autoHidden") && o.hide().data("autoHidden", !0);
  }, _parseSize = function(e, t, n) {
   if (n || (n = _c[e].dir), isStr(t) && t.match(/%/) && (t = "100%" === t ? -1 : parseInt(t, 10) / 100), 
   0 === t) return 0;
   if (t >= 1) return parseInt(t, 10);
   var i = options, o = 0;
   if ("horz" == n ? o = sC.innerHeight - ($Ps.north ? i.north.spacing_open : 0) - ($Ps.south ? i.south.spacing_open : 0) : "vert" == n && (o = sC.innerWidth - ($Ps.west ? i.west.spacing_open : 0) - ($Ps.east ? i.east.spacing_open : 0)), 
   -1 === t) return o;
   if (t > 0) return round(o * t);
   if ("center" == e) return 0;
   var r = "horz" === n ? "height" : "width", s = $Ps[e], a = "height" === r ? $Cs[e] : !1, l = $.layout.showInvisibly(s), c = s.css(r), u = a ? a.css(r) : 0;
   return s.css(r, "auto"), a && a.css(r, "auto"), t = "height" === r ? s.outerHeight() : s.outerWidth(), 
   s.css(r, c).css(l), a && a.css(r, u), t;
  }, getPaneSize = function(e, t) {
   var n = $Ps[e], i = options[e], o = state[e], r = t ? i.spacing_open : 0, s = t ? i.spacing_closed : 0;
   return !n || o.isHidden ? 0 : o.isClosed || o.isSliding && t ? s : "horz" === _c[e].dir ? n.outerHeight() + r : n.outerWidth() + r;
  }, setSizeLimits = function(e, t) {
   if (isInitialized()) {
    var n = options[e], i = state[e], o = _c[e], r = o.dir, s = (o.sizeType.toLowerCase(), 
    void 0 != t ? t : i.isSliding), a = ($Ps[e], n.spacing_open), l = _c.oppositeEdge[e], c = state[l], u = $Ps[l], d = !u || c.isVisible === !1 || c.isSliding ? 0 : "horz" == r ? u.outerHeight() : u.outerWidth(), p = (!u || c.isHidden ? 0 : options[l][c.isClosed !== !1 ? "spacing_closed" : "spacing_open"]) || 0, f = "horz" == r ? sC.innerHeight : sC.innerWidth, h = cssMinDims("center"), g = "horz" == r ? max(options.center.minHeight, h.minHeight) : max(options.center.minWidth, h.minWidth), m = f - a - (s ? 0 : _parseSize("center", g, r) + d + p), v = i.minSize = max(_parseSize(e, n.minSize), cssMinDims(e).minSize), y = i.maxSize = min(n.maxSize ? _parseSize(e, n.maxSize) : 1e5, m), b = i.resizerPosition = {}, w = sC.inset.top, x = sC.inset.left, C = sC.innerWidth, k = sC.innerHeight, S = n.spacing_open;
    switch (e) {
    case "north":
     b.min = w + v, b.max = w + y;
     break;

    case "west":
     b.min = x + v, b.max = x + y;
     break;

    case "south":
     b.min = w + k - y - S, b.max = w + k - v - S;
     break;

    case "east":
     b.min = x + C - y - S, b.max = x + C - v - S;
    }
   }
  }, calcNewCenterPaneDims = function() {
   var e = {
    top: getPaneSize("north", !0),
    bottom: getPaneSize("south", !0),
    left: getPaneSize("west", !0),
    right: getPaneSize("east", !0),
    width: 0,
    height: 0
   };
   return e.width = sC.innerWidth - e.left - e.right, e.height = sC.innerHeight - e.bottom - e.top, 
   e.top += sC.inset.top, e.bottom += sC.inset.bottom, e.left += sC.inset.left, e.right += sC.inset.right, 
   e;
  }, getHoverClasses = function(e, t) {
   var n = $(e), i = n.data("layoutRole"), o = n.data("layoutEdge"), r = options[o], s = r[i + "Class"], a = "-" + o, l = "-open", c = "-closed", u = "-sliding", d = "-hover ", p = n.hasClass(s + c) ? c : l, f = p === c ? l : c, h = s + d + (s + a + d) + (s + p + d) + (s + a + p + d);
   return t && (h += s + f + d + (s + a + f + d)), "resizer" == i && n.hasClass(s + u) && (h += s + u + d + (s + a + u + d)), 
   $.trim(h);
  }, addHover = function(e, t) {
   var n = $(t || this);
   e && "toggler" === n.data("layoutRole") && e.stopPropagation(), n.addClass(getHoverClasses(n));
  }, removeHover = function(e, t) {
   var n = $(t || this);
   n.removeClass(getHoverClasses(n, !0));
  }, onResizerEnter = function() {
   var e = $(this).data("layoutEdge"), t = state[e];
   t.isClosed || t.isResizing || state.paneResizing || ($.fn.disableSelection && $("body").disableSelection(), 
   options.maskPanesEarly && showMasks(e, {
    resizing: !0
   }));
  }, onResizerLeave = function(e, t) {
   var n = t || this, i = $(n).data("layoutEdge"), o = i + "ResizerLeave";
   timer.clear(i + "_openSlider"), timer.clear(o), t ? state.paneResizing || ($.fn.enableSelection && $("body").enableSelection(), 
   options.maskPanesEarly && hideMasks()) : timer.set(o, function() {
    onResizerLeave(e, n);
   }, 200);
  }, _create = function() {
   initOptions();
   var e = options, t = state;
   return t.creatingLayout = !0, runPluginCallbacks(Instance, $.layout.onCreate), !1 === _runCallbacks("onload_start") ? "cancel" : (_initContainer(), 
   initHotkeys(), $(window).bind("unload." + sID, unload), runPluginCallbacks(Instance, $.layout.onLoad), 
   e.initPanes && _initLayoutElements(), delete t.creatingLayout, state.initialized);
  }, isInitialized = function() {
   return state.initialized || state.creatingLayout ? !0 : _initLayoutElements();
  }, _initLayoutElements = function(e) {
   var t = options;
   if (!$N.is(":visible")) return !e && browser.webkit && "BODY" === $N[0].tagName && setTimeout(function() {
    _initLayoutElements(!0);
   }, 50), !1;
   if (!getPane("center").length) return _log(t.errors.centerPaneMissing);
   if (state.creatingLayout = !0, $.extend(sC, elDims($N, t.inset)), initPanes(), t.scrollToBookmarkOnLoad) {
    var n = self.location;
    n.hash && n.replace(n.hash);
   }
   return Instance.hasParentLayout ? t.resizeWithWindow = !1 : t.resizeWithWindow && $(window).bind("resize." + sID, windowResize), 
   delete state.creatingLayout, state.initialized = !0, runPluginCallbacks(Instance, $.layout.onReady), 
   _runCallbacks("onload_end"), !0;
  }, createChildren = function(e, t) {
   var n = evtPane.call(this, e), i = $Ps[n];
   if (i) {
    var o = $Cs[n], r = state[n], s = options[n], a = options.stateManagement || {}, l = t ? s.children = t : s.children;
    if ($.isPlainObject(l)) l = [ l ]; else if (!l || !$.isArray(l)) return;
    $.each(l, function(e, t) {
     if ($.isPlainObject(t)) {
      var s = t.containerSelector ? i.find(t.containerSelector) : o || i;
      s.each(function() {
       var e = $(this), i = e.data("layout");
       if (!i) {
        if (setInstanceKey({
         container: e,
         options: t
        }, r), a.includeChildren && state.stateData[n]) {
         var o = state.stateData[n].children || {}, s = o[t.instanceKey], l = t.stateManagement || (t.stateManagement = {
          autoLoad: !0
         });
         l.autoLoad === !0 && s && (l.autoSave = !1, l.includeChildren = !0, l.autoLoad = $.extend(!0, {}, s));
        }
        i = e.layout(t), i && refreshChildren(n, i);
       }
      });
     }
    });
   }
  }, setInstanceKey = function(e, t) {
   var n = e.container, i = e.options, o = i.stateManagement, r = i.instanceKey || n.data("layoutInstanceKey");
   return r || (r = (o && o.cookie ? o.cookie.name : "") || i.name), r = r ? r.replace(/[^\w-]/gi, "_").replace(/_{2,}/g, "_") : "layout" + ++t.childIdx, 
   i.instanceKey = r, n.data("layoutInstanceKey", r), r;
  }, refreshChildren = function(e, t) {
   var n, i = $Ps[e], o = children[e], r = state[e];
   $.isPlainObject(o) && ($.each(o, function(e, t) {
    t.destroyed && delete o[e];
   }), $.isEmptyObject(o) && (o = children[e] = null)), t || o || (t = i.data("layout")), 
   t && (t.hasParentLayout = !0, n = t.options, setInstanceKey(t, r), o || (o = children[e] = {}), 
   o[n.instanceKey] = t.container.data("layout")), Instance[e].children = children[e], 
   t || createChildren(e);
  }, windowResize = function() {
   var e = options, t = Number(e.resizeWithWindowDelay);
   10 > t && (t = 100), timer.clear("winResize"), timer.set("winResize", function() {
    timer.clear("winResize"), timer.clear("winResizeRepeater");
    var t = elDims($N, e.inset);
    (t.innerWidth !== sC.innerWidth || t.innerHeight !== sC.innerHeight) && resizeAll();
   }, t), timer.data.winResizeRepeater || setWindowResizeRepeater();
  }, setWindowResizeRepeater = function() {
   var e = Number(options.resizeWithWindowMaxDelay);
   e > 0 && timer.set("winResizeRepeater", function() {
    setWindowResizeRepeater(), resizeAll();
   }, e);
  }, unload = function() {
   _runCallbacks("onunload_start"), runPluginCallbacks(Instance, $.layout.onUnload), 
   _runCallbacks("onunload_end");
  }, _initContainer = function() {
   var e, t, n = $N[0], i = $("html"), o = sC.tagName = n.tagName, r = sC.id = n.id, s = sC.className = n.className, a = options, l = a.name, c = "position,margin,padding,border", u = "layoutCSS", d = {}, p = "hidden", f = $N.data("parentLayout"), h = $N.data("layoutEdge"), g = f && h, m = $.layout.cssNum;
   sC.selector = $N.selector.split(".slice")[0], sC.ref = (a.name ? a.name + " layout / " : "") + o + (r ? "#" + r : s ? ".[" + s + "]" : ""), 
   sC.isBody = "BODY" === o, g || sC.isBody || (e = $N.closest("." + $.layout.defaults.panes.paneClass), 
   f = e.data("parentLayout"), h = e.data("layoutEdge"), g = f && h), $N.data({
    layout: Instance,
    layoutContainer: sID
   }).addClass(a.containerClass);
   var v = {
    destroy: "",
    initPanes: "",
    resizeAll: "resizeAll",
    resize: "resizeAll"
   };
   for (l in v) $N.bind("layout" + l.toLowerCase() + "." + sID, Instance[v[l] || l]);
   g && (Instance.hasParentLayout = !0, f.refreshChildren(h, Instance)), $N.data(u) || (sC.isBody ? ($N.data(u, $.extend(styles($N, c), {
    height: $N.css("height"),
    overflow: $N.css("overflow"),
    overflowX: $N.css("overflowX"),
    overflowY: $N.css("overflowY")
   })), i.data(u, $.extend(styles(i, "padding"), {
    height: "auto",
    overflow: i.css("overflow"),
    overflowX: i.css("overflowX"),
    overflowY: i.css("overflowY")
   }))) : $N.data(u, styles($N, c + ",top,bottom,left,right,width,height,overflow,overflowX,overflowY")));
   try {
    if (d = {
     overflow: p,
     overflowX: p,
     overflowY: p
    }, $N.css(d), a.inset && !$.isPlainObject(a.inset) && (t = parseInt(a.inset, 10) || 0, 
    a.inset = {
     top: t,
     bottom: t,
     left: t,
     right: t
    }), sC.isBody) a.outset ? $.isPlainObject(a.outset) || (t = parseInt(a.outset, 10) || 0, 
    a.outset = {
     top: t,
     bottom: t,
     left: t,
     right: t
    }) : a.outset = {
     top: m(i, "paddingTop"),
     bottom: m(i, "paddingBottom"),
     left: m(i, "paddingLeft"),
     right: m(i, "paddingRight")
    }, i.css(d).css({
     height: "100%",
     border: "none",
     padding: 0,
     margin: 0
    }), browser.isIE6 ? ($N.css({
     width: "100%",
     height: "100%",
     border: "none",
     padding: 0,
     margin: 0,
     position: "relative"
    }), a.inset || (a.inset = elDims($N).inset)) : ($N.css({
     width: "auto",
     height: "auto",
     margin: 0,
     position: "absolute"
    }), $N.css(a.outset)), $.extend(sC, elDims($N, a.inset)); else {
     var y = $N.css("position");
     y && y.match(/(fixed|absolute|relative)/) || $N.css("position", "relative"), $N.is(":visible") && ($.extend(sC, elDims($N, a.inset)), 
     1 > sC.innerHeight && _log(a.errors.noContainerHeight.replace(/CONTAINER/, sC.ref)));
    }
    m($N, "minWidth") && $N.parent().css("overflowX", "auto"), m($N, "minHeight") && $N.parent().css("overflowY", "auto");
   } catch (b) {}
  }, initHotkeys = function(e) {
   e = e ? e.split(",") : _c.borderPanes, $.each(e, function(e, t) {
    var n = options[t];
    return n.enableCursorHotkey || n.customHotkey ? ($(document).bind("keydown." + sID, keyDown), 
    !1) : void 0;
   });
  }, initOptions = function() {
   function e(e) {
    var t = options[e], n = options.panes;
    t.fxSettings || (t.fxSettings = {}), n.fxSettings || (n.fxSettings = {}), $.each([ "_open", "_close", "_size" ], function(i, o) {
     var r = "fxName" + o, s = "fxSpeed" + o, a = "fxSettings" + o, l = t[r] = t[r] || n[r] || t.fxName || n.fxName || "none", c = $.effects && ($.effects[l] || $.effects.effect && $.effects.effect[l]);
     "none" !== l && options.effects[l] && c || (l = t[r] = "none");
     var u = options.effects[l] || {}, d = u.all || null, p = u[e] || null;
     t[s] = t[s] || n[s] || t.fxSpeed || n.fxSpeed || null, t[a] = $.extend(!0, {}, d, p, n.fxSettings, t.fxSettings, n[a], t[a]);
    }), delete t.fxName, delete t.fxSpeed, delete t.fxSettings;
   }
   var t, n, i, o, r, s, a;
   if (opts = $.layout.transformData(opts, !0), opts = $.layout.backwardCompatibility.renameAllOptions(opts), 
   !$.isEmptyObject(opts.panes)) {
    for (t = $.layout.optionsMap.noDefault, r = 0, s = t.length; s > r; r++) i = t[r], 
    delete opts.panes[i];
    for (t = $.layout.optionsMap.layout, r = 0, s = t.length; s > r; r++) i = t[r], 
    delete opts.panes[i];
   }
   t = $.layout.optionsMap.layout;
   var l = $.layout.config.optionRootKeys;
   for (i in opts) o = opts[i], 0 > $.inArray(i, l) && 0 > $.inArray(i, t) && (opts.panes[i] || (opts.panes[i] = $.isPlainObject(o) ? $.extend(!0, {}, o) : o), 
   delete opts[i]);
   $.extend(!0, options, opts), $.each(_c.allPanes, function(o, r) {
    if (_c[r] = $.extend(!0, {}, _c.panes, _c[r]), n = options.panes, a = options[r], 
    "center" === r) for (t = $.layout.optionsMap.center, o = 0, s = t.length; s > o; o++) i = t[o], 
    opts.center[i] || !opts.panes[i] && a[i] || (a[i] = n[i]); else a = options[r] = $.extend(!0, {}, n, a), 
    e(r), a.resizerClass || (a.resizerClass = "ui-layout-resizer"), a.togglerClass || (a.togglerClass = "ui-layout-toggler");
    a.paneClass || (a.paneClass = "ui-layout-pane");
   });
   var c = opts.zIndex, u = options.zIndexes;
   c > 0 && (u.pane_normal = c, u.content_mask = max(c + 1, u.content_mask), u.resizer_normal = max(c + 2, u.resizer_normal)), 
   delete options.panes;
  }, getPane = function(e) {
   var t = options[e].paneSelector;
   if ("#" === t.substr(0, 1)) return $N.find(t).eq(0);
   var n = $N.children(t).eq(0);
   return n.length ? n : $N.children("form:first").children(t).eq(0);
  }, initPanes = function(e) {
   evtPane(e), $.each(_c.allPanes, function(e, t) {
    addPane(t, !0);
   }), initHandles(), $.each(_c.borderPanes, function(e, t) {
    $Ps[t] && state[t].isVisible && (setSizeLimits(t), makePaneFit(t));
   }), sizeMidPanes("center"), $.each(_c.allPanes, function(e, t) {
    afterInitPane(t);
   });
  }, addPane = function(e, t) {
   if (t || isInitialized()) {
    var n, i, o, r = options[e], s = state[e], a = _c[e], l = a.dir, c = (s.fx, r.spacing_open || 0, 
    "center" === e), u = {}, d = $Ps[e];
    if (d ? removePane(e, !1, !0, !1) : $Cs[e] = !1, d = $Ps[e] = getPane(e), !d.length) return $Ps[e] = !1, 
    void 0;
    if (!d.data("layoutCSS")) {
     var p = "position,top,left,bottom,right,width,height,overflow,zIndex,display,backgroundColor,padding,margin,border";
     d.data("layoutCSS", styles(d, p));
    }
    Instance[e] = {
     name: e,
     pane: $Ps[e],
     content: $Cs[e],
     options: options[e],
     state: state[e],
     children: children[e]
    }, d.data({
     parentLayout: Instance,
     layoutPane: Instance[e],
     layoutEdge: e,
     layoutRole: "pane"
    }).css(a.cssReq).css("zIndex", options.zIndexes.pane_normal).css(r.applyDemoStyles ? a.cssDemo : {}).addClass(r.paneClass + " " + r.paneClass + "-" + e).bind("mouseenter." + sID, addHover).bind("mouseleave." + sID, removeHover);
    var f, h = {
     hide: "",
     show: "",
     toggle: "",
     close: "",
     open: "",
     slideOpen: "",
     slideClose: "",
     slideToggle: "",
     size: "sizePane",
     sizePane: "sizePane",
     sizeContent: "",
     sizeHandles: "",
     enableClosable: "",
     disableClosable: "",
     enableSlideable: "",
     disableSlideable: "",
     enableResizable: "",
     disableResizable: "",
     swapPanes: "swapPanes",
     swap: "swapPanes",
     move: "swapPanes",
     removePane: "removePane",
     remove: "removePane",
     createChildren: "",
     resizeChildren: "",
     resizeAll: "resizeAll",
     resizeLayout: "resizeAll"
    };
    for (f in h) d.bind("layoutpane" + f.toLowerCase() + "." + sID, Instance[h[f] || f]);
    initContent(e, !1), c || (n = s.size = _parseSize(e, r.size), i = _parseSize(e, r.minSize) || 1, 
    o = _parseSize(e, r.maxSize) || 1e5, n > 0 && (n = max(min(n, o), i)), s.autoResize = r.autoResize, 
    s.isClosed = !1, s.isSliding = !1, s.isResizing = !1, s.isHidden = !1, s.pins || (s.pins = [])), 
    s.tagName = d[0].tagName, s.edge = e, s.noRoom = !1, s.isVisible = !0, setPanePosition(e), 
    "horz" === l ? u.height = cssH(d, n) : "vert" === l && (u.width = cssW(d, n)), d.css(u), 
    "horz" != l && sizeMidPanes(e, !0), state.initialized && (initHandles(e), initHotkeys(e)), 
    r.initClosed && r.closable && !r.initHidden ? close(e, !0, !0) : r.initHidden || r.initClosed ? hide(e) : s.noRoom || d.css("display", "block"), 
    d.css("visibility", "visible"), r.showOverflowOnHover && d.hover(allowOverflow, resetOverflow), 
    state.initialized && afterInitPane(e);
   }
  }, afterInitPane = function(e) {
   var t = $Ps[e], n = state[e], i = options[e];
   t && (t.data("layout") && refreshChildren(e, t.data("layout")), n.isVisible && (state.initialized ? resizeAll() : sizeContent(e), 
   i.triggerEventsOnLoad ? _runCallbacks("onresize_end", e) : resizeChildren(e, !0)), 
   i.initChildren && i.children && createChildren(e));
  }, setPanePosition = function(e) {
   e = e ? e.split(",") : _c.borderPanes, $.each(e, function(e, t) {
    var n = $Ps[t], i = $Rs[t], o = (options[t], state[t]), r = _c[t].side, s = {};
    if (n) {
     switch (t) {
     case "north":
      s.top = sC.inset.top, s.left = sC.inset.left, s.right = sC.inset.right;
      break;

     case "south":
      s.bottom = sC.inset.bottom, s.left = sC.inset.left, s.right = sC.inset.right;
      break;

     case "west":
      s.left = sC.inset.left;
      break;

     case "east":
      s.right = sC.inset.right;
      break;

     case "center":     }
     n.css(s), i && o.isClosed ? i.css(r, sC.inset[r]) : i && !o.isHidden && i.css(r, sC.inset[r] + getPaneSize(t));
    }
   });
  }, initHandles = function(e) {
   e = e ? e.split(",") : _c.borderPanes, $.each(e, function(e, t) {
    var n = $Ps[t];
    if ($Rs[t] = !1, $Ts[t] = !1, n) {
     var i = options[t], o = state[t], r = (_c[t], "#" === i.paneSelector.substr(0, 1) ? i.paneSelector.substr(1) : ""), s = i.resizerClass, a = i.togglerClass, l = (o.isVisible ? i.spacing_open : i.spacing_closed, 
     "-" + t), c = (o.isVisible ? "-open" : "-closed", Instance[t]), u = c.resizer = $Rs[t] = $("<div></div>"), d = c.toggler = i.closable ? $Ts[t] = $("<div></div>") : !1;
     !o.isVisible && i.slidable && u.attr("title", i.tips.Slide).css("cursor", i.sliderCursor), 
     u.attr("id", r ? r + "-resizer" : "").data({
      parentLayout: Instance,
      layoutPane: Instance[t],
      layoutEdge: t,
      layoutRole: "resizer"
     }).css(_c.resizers.cssReq).css("zIndex", options.zIndexes.resizer_normal).css(i.applyDemoStyles ? _c.resizers.cssDemo : {}).addClass(s + " " + s + l).hover(addHover, removeHover).hover(onResizerEnter, onResizerLeave).appendTo($N), 
     i.resizerDblClickToggle && u.bind("dblclick." + sID, toggle), d && (d.attr("id", r ? r + "-toggler" : "").data({
      parentLayout: Instance,
      layoutPane: Instance[t],
      layoutEdge: t,
      layoutRole: "toggler"
     }).css(_c.togglers.cssReq).css(i.applyDemoStyles ? _c.togglers.cssDemo : {}).addClass(a + " " + a + l).hover(addHover, removeHover).bind("mouseenter", onResizerEnter).appendTo(u), 
     i.togglerContent_open && $("<span>" + i.togglerContent_open + "</span>").data({
      layoutEdge: t,
      layoutRole: "togglerContent"
     }).data("layoutRole", "togglerContent").data("layoutEdge", t).addClass("content content-open").css("display", "none").appendTo(d), 
     i.togglerContent_closed && $("<span>" + i.togglerContent_closed + "</span>").data({
      layoutEdge: t,
      layoutRole: "togglerContent"
     }).addClass("content content-closed").css("display", "none").appendTo(d), enableClosable(t)), 
     initResizable(t), o.isVisible ? setAsOpen(t) : (setAsClosed(t), bindStartSlidingEvents(t, !0));
    }
   }), sizeHandles();
  }, initContent = function(e, t) {
   if (isInitialized()) {
    var n, i = options[e], o = i.contentSelector, r = Instance[e], s = $Ps[e];
    o && (n = r.content = $Cs[e] = i.findNestedContent ? s.find(o).eq(0) : s.children(o).eq(0)), 
    n && n.length ? (n.data("layoutRole", "content"), n.data("layoutCSS") || n.data("layoutCSS", styles(n, "height")), 
    n.css(_c.content.cssReq), i.applyDemoStyles && (n.css(_c.content.cssDemo), s.css(_c.content.cssDemoPane)), 
    s.css("overflowX").match(/(scroll|auto)/) && s.css("overflow", "hidden"), state[e].content = {}, 
    t !== !1 && sizeContent(e)) : r.content = $Cs[e] = !1;
   }
  }, initResizable = function(e) {
   var t = $.layout.plugins.draggable;
   e = e ? e.split(",") : _c.borderPanes, $.each(e, function(e, i) {
    var o = options[i];
    if (!t || !$Ps[i] || !o.resizable) return o.resizable = !1, !0;
    var r, s, a = state[i], l = options.zIndexes, c = _c[i], u = "horz" == c.dir ? "top" : "left", d = ($Ps[i], 
    $Rs[i]), p = o.resizerClass, f = 0, h = p + "-drag", g = p + "-" + i + "-drag", m = p + "-dragging", v = p + "-" + i + "-dragging", y = p + "-dragging-limit", b = p + "-" + i + "-dragging-limit", w = !1;
    a.isClosed || d.attr("title", o.tips.Resize).css("cursor", o.resizerCursor), d.draggable({
     containment: $N[0],
     axis: "horz" == c.dir ? "y" : "x",
     delay: 0,
     distance: 1,
     grid: o.resizingGrid,
     helper: "clone",
     opacity: o.resizerDragOpacity,
     addClasses: !1,
     zIndex: l.resizer_drag,
     start: function(e, t) {
      return o = options[i], a = state[i], s = o.livePaneResizing, !1 === _runCallbacks("ondrag_start", i) ? !1 : (a.isResizing = !0, 
      state.paneResizing = i, timer.clear(i + "_closeSlider"), setSizeLimits(i), r = a.resizerPosition, 
      f = t.position[u], d.addClass(h + " " + g), w = !1, $("body").disableSelection(), 
      showMasks(i, {
       resizing: !0
      }), void 0);
     },
     drag: function(e, t) {
      w || (t.helper.addClass(m + " " + v).css({
       right: "auto",
       bottom: "auto"
      }).children().css("visibility", "hidden"), w = !0, a.isSliding && $Ps[i].css("zIndex", l.pane_sliding));
      var c = 0;
      t.position[u] < r.min ? (t.position[u] = r.min, c = -1) : t.position[u] > r.max && (t.position[u] = r.max, 
      c = 1), c ? (t.helper.addClass(y + " " + b), window.defaultStatus = c > 0 && i.match(/(north|west)/) || 0 > c && i.match(/(south|east)/) ? o.tips.maxSizeWarning : o.tips.minSizeWarning) : (t.helper.removeClass(y + " " + b), 
      window.defaultStatus = ""), s && Math.abs(t.position[u] - f) >= o.liveResizingTolerance && (f = t.position[u], 
      n(e, t, i));
     },
     stop: function(e, t) {
      $("body").enableSelection(), window.defaultStatus = "", d.removeClass(h + " " + g), 
      a.isResizing = !1, state.paneResizing = !1, n(e, t, i, !0);
     }
    });
   });
   var n = function(e, t, n, i) {
    var o, r = t.position, s = _c[n], a = options[n], l = state[n];
    switch (n) {
    case "north":
     o = r.top;
     break;

    case "west":
     o = r.left;
     break;

    case "south":
     o = sC.layoutHeight - r.top - a.spacing_open;
     break;

    case "east":
     o = sC.layoutWidth - r.left - a.spacing_open;
    }
    var c = o - sC.inset[s.side];
    if (i) !1 !== _runCallbacks("ondrag_end", n) && manualSizePane(n, c, !1, !0), hideMasks(!0), 
    l.isSliding && showMasks(n, {
     resizing: !0
    }); else {
     if (Math.abs(c - l.size) < a.liveResizingTolerance) return;
     manualSizePane(n, c, !1, !0), sizeMasks();
    }
   };
  }, sizeMask = function() {
   var e = $(this), t = e.data("layoutMask"), n = state[t];
   "IFRAME" == n.tagName && n.isVisible && e.css({
    top: n.offsetTop,
    left: n.offsetLeft,
    width: n.outerWidth,
    height: n.outerHeight
   });
  }, sizeMasks = function() {
   $Ms.each(sizeMask);
  }, showMasks = function(e, t) {
   var n, i, o = _c[e], r = [ "center" ], s = options.zIndexes, a = $.extend({
    objectsOnly: !1,
    animation: !1,
    resizing: !0,
    sliding: state[e].isSliding
   }, t);
   a.resizing && r.push(e), a.sliding && r.push(_c.oppositeEdge[e]), "horz" === o.dir && (r.push("west"), 
   r.push("east")), $.each(r, function(e, t) {
    i = state[t], n = options[t], i.isVisible && (n.maskObjects || !a.objectsOnly && n.maskContents) && getMasks(t).each(function() {
     sizeMask.call(this), this.style.zIndex = i.isSliding ? s.pane_sliding + 1 : s.pane_normal + 1, 
     this.style.display = "block";
    });
   });
  }, hideMasks = function(e) {
   if (e || !state.paneResizing) $Ms.hide(); else if (!e && !$.isEmptyObject(state.panesSliding)) for (var t, n, i = $Ms.length - 1; i >= 0; i--) n = $Ms.eq(i), 
   t = n.data("layoutMask"), options[t].maskObjects || n.hide();
  }, getMasks = function(e) {
   for (var t, n = $([]), i = 0, o = $Ms.length; o > i; i++) t = $Ms.eq(i), t.data("layoutMask") === e && (n = n.add(t));
   return n.length ? n : createMasks(e);
  }, createMasks = function(e) {
   var t, n, i, o, r, s = $Ps[e], a = state[e], l = options[e], c = options.zIndexes, u = $([]);
   if (!l.maskContents && !l.maskObjects) return u;
   for (r = 0; (l.maskObjects ? 2 : 1) > r; r++) t = l.maskObjects && 0 == r, n = document.createElement(t ? "iframe" : "div"), 
   i = $(n).data("layoutMask", e), n.className = "ui-layout-mask ui-layout-mask-" + e, 
   o = n.style, o.display = "block", o.position = "absolute", o.background = "#FFF", 
   t && (n.frameborder = 0, n.src = "about:blank", o.opacity = 0, o.filter = "Alpha(Opacity='0')", 
   o.border = 0), "IFRAME" == a.tagName ? (o.zIndex = c.pane_normal + 1, $N.append(n)) : (i.addClass("ui-layout-mask-inside-pane"), 
   o.zIndex = l.maskZindex || c.content_mask, o.top = 0, o.left = 0, o.width = "100%", 
   o.height = "100%", s.append(n)), u = u.add(n), $Ms = $Ms.add(n);
   return u;
  }, destroy = function(e, t) {
   $(window).unbind("." + sID), $(document).unbind("." + sID), "object" == typeof e ? evtPane(e) : t = e, 
   $N.clearQueue().removeData("layout").removeData("layoutContainer").removeClass(options.containerClass).unbind("." + sID), 
   $Ms.remove(), $.each(_c.allPanes, function(e, n) {
    removePane(n, !1, !0, t);
   });
   var n = "layoutCSS";
   $N.data(n) && !$N.data("layoutRole") && $N.css($N.data(n)).removeData(n), "BODY" === sC.tagName && ($N = $("html")).data(n) && $N.css($N.data(n)).removeData(n), 
   runPluginCallbacks(Instance, $.layout.onDestroy), unload();
   for (var i in Instance) i.match(/^(container|options)$/) || delete Instance[i];
   return Instance.destroyed = !0, Instance;
  }, removePane = function(e, t, n, i) {
   if (isInitialized()) {
    var o = evtPane.call(this, e), r = $Ps[o], s = $Cs[o], a = $Rs[o], l = $Ts[o];
    r && $.isEmptyObject(r.data()) && (r = !1), s && $.isEmptyObject(s.data()) && (s = !1), 
    a && $.isEmptyObject(a.data()) && (a = !1), l && $.isEmptyObject(l.data()) && (l = !1), 
    r && r.stop(!0, !0);
    var c = options[o], u = state[o], d = "layout", p = "layoutCSS", f = children[o], h = $.isPlainObject(f) && !$.isEmptyObject(f), g = void 0 !== i ? i : c.destroyChildren;
    if (h && g && ($.each(f, function(e, t) {
     t.destroyed || t.destroy(!0), t.destroyed && delete f[e];
    }), $.isEmptyObject(f) && (f = children[o] = null, h = !1)), r && t && !h) r.remove(); else if (r && r[0]) {
     var m = c.paneClass, v = m + "-" + o, y = "-open", b = "-sliding", w = "-closed", x = [ m, m + y, m + w, m + b, v, v + y, v + w, v + b ];
     $.merge(x, getHoverClasses(r, !0)), r.removeClass(x.join(" ")).removeData("parentLayout").removeData("layoutPane").removeData("layoutRole").removeData("layoutEdge").removeData("autoHidden").unbind("." + sID), 
     h && s ? (s.width(s.width()), $.each(f, function(e, t) {
      t.resizeAll();
     })) : s && s.css(s.data(p)).removeData(p).removeData("layoutRole"), r.data(d) || r.css(r.data(p)).removeData(p);
    }
    l && l.remove(), a && a.remove(), Instance[o] = $Ps[o] = $Cs[o] = $Rs[o] = $Ts[o] = !1, 
    u = {
     removed: !0
    }, n || resizeAll();
   }
  }, _hidePane = function(e) {
   var t = $Ps[e], n = options[e], i = t[0].style;
   n.useOffscreenClose ? (t.data(_c.offscreenReset) || t.data(_c.offscreenReset, {
    left: i.left,
    right: i.right
   }), t.css(_c.offscreenCSS)) : t.hide().removeData(_c.offscreenReset);
  }, _showPane = function(e) {
   var t = $Ps[e], n = options[e], i = _c.offscreenCSS, o = t.data(_c.offscreenReset), r = t[0].style;
   t.show().removeData(_c.offscreenReset), n.useOffscreenClose && o && (r.left == i.left && (r.left = o.left), 
   r.right == i.right && (r.right = o.right));
  }, hide = function(e, t) {
   if (isInitialized()) {
    var n = evtPane.call(this, e), i = options[n], o = state[n], r = $Ps[n], s = $Rs[n];
    r && !o.isHidden && (state.initialized && !1 === _runCallbacks("onhide_start", n) || (o.isSliding = !1, 
    delete state.panesSliding[n], s && s.hide(), !state.initialized || o.isClosed ? (o.isClosed = !0, 
    o.isHidden = !0, o.isVisible = !1, state.initialized || _hidePane(n), sizeMidPanes("horz" === _c[n].dir ? "" : "center"), 
    (state.initialized || i.triggerEventsOnLoad) && _runCallbacks("onhide_end", n)) : (o.isHiding = !0, 
    close(n, !1, t))));
   }
  }, show = function(e, t, n, i) {
   if (isInitialized()) {
    var o = evtPane.call(this, e), r = (options[o], state[o]), s = $Ps[o];
    $Rs[o], s && r.isHidden && !1 !== _runCallbacks("onshow_start", o) && (r.isShowing = !0, 
    r.isSliding = !1, delete state.panesSliding[o], t === !1 ? close(o, !0) : open(o, !1, n, i));
   }
  }, toggle = function(e, t) {
   if (isInitialized()) {
    var n = evtObj(e), i = evtPane.call(this, e), o = state[i];
    n && n.stopImmediatePropagation(), o.isHidden ? show(i) : o.isClosed ? open(i, !!t) : close(i);
   }
  }, _closePane = function(e, t) {
   var n = ($Ps[e], state[e]);
   _hidePane(e), n.isClosed = !0, n.isVisible = !1, t && setAsClosed(e);
  }, close = function(e, t, n, i) {
   function o() {
    p.isMoving = !1, bindStartSlidingEvents(r, !0);
    var e = _c.oppositeEdge[r];
    state[e].noRoom && (setSizeLimits(e), makePaneFit(e)), i || !state.initialized && !d.triggerEventsOnLoad || (a || _runCallbacks("onclose_end", r), 
    a && _runCallbacks("onshow_end", r), l && _runCallbacks("onhide_end", r));
   }
   var r = evtPane.call(this, e);
   if (!state.initialized && $Ps[r]) return _closePane(r, !0), void 0;
   if (isInitialized()) {
    var s, a, l, c, u = $Ps[r], d = ($Rs[r], $Ts[r], options[r]), p = state[r];
    _c[r], $N.queue(function(e) {
     if (!u || !d.closable && !p.isShowing && !p.isHiding || !t && p.isClosed && !p.isShowing) return e();
     var i = !p.isShowing && !1 === _runCallbacks("onclose_start", r);
     return a = p.isShowing, l = p.isHiding, c = p.isSliding, delete p.isShowing, delete p.isHiding, 
     i ? e() : (s = !n && !p.isClosed && "none" != d.fxName_close, p.isMoving = !0, p.isClosed = !0, 
     p.isVisible = !1, l ? p.isHidden = !0 : a && (p.isHidden = !1), p.isSliding ? bindStopSlidingEvents(r, !1) : sizeMidPanes("horz" === _c[r].dir ? "" : "center", !1), 
     setAsClosed(r), s ? (lockPaneForFX(r, !0), u.hide(d.fxName_close, d.fxSettings_close, d.fxSpeed_close, function() {
      lockPaneForFX(r, !1), p.isClosed && o(), e();
     })) : (_hidePane(r), o(), e()), void 0);
    });
   }
  }, setAsClosed = function(e) {
   if ($Rs[e]) {
    var t = ($Ps[e], $Rs[e]), n = $Ts[e], i = options[e], o = (state[e], _c[e].side), r = i.resizerClass, s = i.togglerClass, a = "-" + e, l = "-open", c = "-sliding", u = "-closed";
    t.css(o, sC.inset[o]).removeClass(r + l + " " + r + a + l).removeClass(r + c + " " + r + a + c).addClass(r + u + " " + r + a + u), 
    i.resizable && $.layout.plugins.draggable && t.draggable("disable").removeClass("ui-state-disabled").css("cursor", "default").attr("title", ""), 
    n && (n.removeClass(s + l + " " + s + a + l).addClass(s + u + " " + s + a + u).attr("title", i.tips.Open), 
    n.children(".content-open").hide(), n.children(".content-closed").css("display", "block")), 
    syncPinBtns(e, !1), state.initialized && sizeHandles();
   }
  }, open = function(e, t, n, i) {
   function o() {
    u.isMoving = !1, _fixIframe(a), u.isSliding || sizeMidPanes("vert" == _c[a].dir ? "center" : "", !1), 
    setAsOpen(a);
   }
   if (isInitialized()) {
    var r, s, a = evtPane.call(this, e), l = $Ps[a], c = ($Rs[a], $Ts[a], options[a]), u = state[a];
    _c[a], $N.queue(function(e) {
     if (!l || !c.resizable && !c.closable && !u.isShowing || u.isVisible && !u.isSliding) return e();
     if (u.isHidden && !u.isShowing) return e(), show(a, !0), void 0;
     u.autoResize && u.size != c.size ? sizePane(a, c.size, !0, !0, !0) : setSizeLimits(a, t);
     var d = _runCallbacks("onopen_start", a);
     return "abort" === d ? e() : ("NC" !== d && setSizeLimits(a, t), u.minSize > u.maxSize ? (syncPinBtns(a, !1), 
     !i && c.tips.noRoomToOpen && alert(c.tips.noRoomToOpen), e()) : (t ? bindStopSlidingEvents(a, !0) : u.isSliding ? bindStopSlidingEvents(a, !1) : c.slidable && bindStartSlidingEvents(a, !1), 
     u.noRoom = !1, makePaneFit(a), s = u.isShowing, delete u.isShowing, r = !n && u.isClosed && "none" != c.fxName_open, 
     u.isMoving = !0, u.isVisible = !0, u.isClosed = !1, s && (u.isHidden = !1), r ? (lockPaneForFX(a, !0), 
     l.show(c.fxName_open, c.fxSettings_open, c.fxSpeed_open, function() {
      lockPaneForFX(a, !1), u.isVisible && o(), e();
     })) : (_showPane(a), o(), e()), void 0));
    });
   }
  }, setAsOpen = function(e, t) {
   var n = $Ps[e], i = $Rs[e], o = $Ts[e], r = options[e], s = state[e], a = _c[e].side, l = r.resizerClass, c = r.togglerClass, u = "-" + e, d = "-open", p = "-closed", f = "-sliding";
   i.css(a, sC.inset[a] + getPaneSize(e)).removeClass(l + p + " " + l + u + p).addClass(l + d + " " + l + u + d), 
   s.isSliding ? i.addClass(l + f + " " + l + u + f) : i.removeClass(l + f + " " + l + u + f), 
   removeHover(0, i), r.resizable && $.layout.plugins.draggable ? i.draggable("enable").css("cursor", r.resizerCursor).attr("title", r.tips.Resize) : s.isSliding || i.css("cursor", "default"), 
   o && (o.removeClass(c + p + " " + c + u + p).addClass(c + d + " " + c + u + d).attr("title", r.tips.Close), 
   removeHover(0, o), o.children(".content-closed").hide(), o.children(".content-open").css("display", "block")), 
   syncPinBtns(e, !s.isSliding), $.extend(s, elDims(n)), state.initialized && (sizeHandles(), 
   sizeContent(e, !0)), !t && (state.initialized || r.triggerEventsOnLoad) && n.is(":visible") && (_runCallbacks("onopen_end", e), 
   s.isShowing && _runCallbacks("onshow_end", e), state.initialized && _runCallbacks("onresize_end", e));
  }, slideOpen = function(e) {
   function t() {
    o.isClosed ? o.isMoving || open(i, !0) : bindStopSlidingEvents(i, !0);
   }
   if (isInitialized()) {
    var n = evtObj(e), i = evtPane.call(this, e), o = state[i], r = options[i].slideDelay_open;
    n && n.stopImmediatePropagation(), o.isClosed && n && "mouseenter" === n.type && r > 0 ? timer.set(i + "_openSlider", t, r) : t();
   }
  }, slideClose = function(e) {
   function t() {
    r.isClosed ? bindStopSlidingEvents(i, !1) : r.isMoving || close(i);
   }
   if (isInitialized()) {
    var n = evtObj(e), i = evtPane.call(this, e), o = options[i], r = state[i], s = r.isMoving ? 1e3 : 300;
    if (!r.isClosed && !r.isResizing) if ("click" === o.slideTrigger_close) t(); else {
     if (o.preventQuickSlideClose && r.isMoving) return;
     if (o.preventPrematureSlideClose && n && $.layout.isMouseOverElem(n, $Ps[i])) return;
     n ? timer.set(i + "_closeSlider", t, max(o.slideDelay_close, s)) : t();
    }
   }
  }, slideToggle = function(e) {
   var t = evtPane.call(this, e);
   toggle(t, !0);
  }, lockPaneForFX = function(e, t) {
   var n = $Ps[e], i = state[e], o = options[e], r = options.zIndexes;
   t ? (showMasks(e, {
    animation: !0,
    objectsOnly: !0
   }), n.css({
    zIndex: r.pane_animate
   }), "south" == e ? n.css({
    top: sC.inset.top + sC.innerHeight - n.outerHeight()
   }) : "east" == e && n.css({
    left: sC.inset.left + sC.innerWidth - n.outerWidth()
   })) : (hideMasks(), n.css({
    zIndex: i.isSliding ? r.pane_sliding : r.pane_normal
   }), "south" == e ? n.css({
    top: "auto"
   }) : "east" != e || n.css("left").match(/\-99999/) || n.css({
    left: "auto"
   }), browser.msie && o.fxOpacityFix && "slide" != o.fxName_open && n.css("filter") && 1 == n.css("opacity") && n[0].style.removeAttribute("filter"));
  }, bindStartSlidingEvents = function(e, t) {
   var n = options[e], i = ($Ps[e], $Rs[e]), o = n.slideTrigger_open.toLowerCase();
   !i || t && !n.slidable || (o.match(/mouseover/) ? o = n.slideTrigger_open = "mouseenter" : o.match(/(click|dblclick|mouseenter)/) || (o = n.slideTrigger_open = "click"), 
   n.resizerDblClickToggle && o.match(/click/) && i[t ? "unbind" : "bind"]("dblclick." + sID, toggle), 
   i[t ? "bind" : "unbind"](o + "." + sID, slideOpen).css("cursor", t ? n.sliderCursor : "default").attr("title", t ? n.tips.Slide : ""));
  }, bindStopSlidingEvents = function(e, t) {
   function n(t) {
    timer.clear(e + "_closeSlider"), t.stopPropagation();
   }
   var i = options[e], o = state[e], r = (_c[e], options.zIndexes), s = i.slideTrigger_close.toLowerCase(), a = t ? "bind" : "unbind", l = $Ps[e], c = $Rs[e];
   timer.clear(e + "_closeSlider"), t ? (o.isSliding = !0, state.panesSliding[e] = !0, 
   bindStartSlidingEvents(e, !1)) : (o.isSliding = !1, delete state.panesSliding[e]), 
   l.css("zIndex", t ? r.pane_sliding : r.pane_normal), c.css("zIndex", t ? r.pane_sliding + 2 : r.resizer_normal), 
   s.match(/(click|mouseleave)/) || (s = i.slideTrigger_close = "mouseleave"), c[a](s, slideClose), 
   "mouseleave" === s && (l[a]("mouseleave." + sID, slideClose), c[a]("mouseenter." + sID, n), 
   l[a]("mouseenter." + sID, n)), t ? "click" !== s || i.resizable || (c.css("cursor", t ? i.sliderCursor : "default"), 
   c.attr("title", t ? i.tips.Close : "")) : timer.clear(e + "_closeSlider");
  }, makePaneFit = function(e, t, n, i) {
   var o = options[e], r = state[e], s = _c[e], a = $Ps[e], l = $Rs[e], c = "vert" === s.dir, u = !1;
   if (("center" === e || c && r.noVerticalRoom) && (u = r.maxHeight >= 0, u && r.noRoom ? (_showPane(e), 
   l && l.show(), r.isVisible = !0, r.noRoom = !1, c && (r.noVerticalRoom = !1), _fixIframe(e)) : u || r.noRoom || (_hidePane(e), 
   l && l.hide(), r.isVisible = !1, r.noRoom = !0)), "center" === e) ; else if (r.minSize <= r.maxSize) {
    if (u = !0, r.size > r.maxSize) sizePane(e, r.maxSize, n, !0, i); else if (r.size < r.minSize) sizePane(e, r.minSize, n, !0, i); else if (l && r.isVisible && a.is(":visible")) {
     var d = r.size + sC.inset[s.side];
     $.layout.cssNum(l, s.side) != d && l.css(s.side, d);
    }
    r.noRoom && (r.wasOpen && o.closable ? o.autoReopen ? open(e, !1, !0, !0) : r.noRoom = !1 : show(e, r.wasOpen, !0, !0));
   } else r.noRoom || (r.noRoom = !0, r.wasOpen = !r.isClosed && !r.isSliding, r.isClosed || (o.closable ? close(e, !0, !0) : hide(e, !0)));
  }, manualSizePane = function(e, t, n, i, o) {
   if (isInitialized()) {
    var r = evtPane.call(this, e), s = options[r], a = state[r], l = o || s.livePaneResizing && !a.isResizing;
    a.autoResize = !1, sizePane(r, t, n, i, l);
   }
  }, sizePane = function(e, t, n, i, o) {
   function r() {
    for (var e = "width" === h ? d.outerWidth() : d.outerHeight(), i = [ {
     pane: l,
     count: 1,
     target: t,
     actual: e,
     correct: t === e,
     attempt: t,
     cssSize: a
    } ], r = i[0], c = {}, m = "Inaccurate size after resizing the " + l + "-pane."; !(r.correct || (c = {
     pane: l,
     count: r.count + 1,
     target: t
    }, c.attempt = r.actual > t ? max(0, r.attempt - (r.actual - t)) : max(0, r.attempt + (t - r.actual)), 
    c.cssSize = cssSize(l, c.attempt), d.css(h, c.cssSize), c.actual = "width" == h ? d.outerWidth() : d.outerHeight(), 
    c.correct = t === c.actual, 1 === i.length && (_log(m, !1, !0), _log(r, !1, !0)), 
    _log(c, !1, !0), i.length > 3)); ) i.push(c), r = i[i.length - 1];
    u.size = t, $.extend(u, elDims(d)), u.isVisible && d.is(":visible") && (p && p.css(f, t + sC.inset[f]), 
    sizeContent(l)), !n && !g && state.initialized && u.isVisible && _runCallbacks("onresize_end", l), 
    n || (u.isSliding || sizeMidPanes("horz" == _c[l].dir ? "" : "center", g, o), sizeHandles());
    var v = _c.oppositeEdge[l];
    s > t && state[v].noRoom && (setSizeLimits(v), makePaneFit(v, !1, n)), i.length > 1 && _log(m + "\nSee the Error Console for details.", !0, !0);
   }
   if (isInitialized()) {
    var s, a, l = evtPane.call(this, e), c = options[l], u = state[l], d = $Ps[l], p = $Rs[l], f = _c[l].side, h = _c[l].sizeType.toLowerCase(), g = u.isResizing && !c.triggerEventsDuringLiveResize, m = i !== !0 && c.animatePaneSizing;
    $N.queue(function(e) {
     if (setSizeLimits(l), s = u.size, t = _parseSize(l, t), t = max(t, _parseSize(l, c.minSize)), 
     t = min(t, u.maxSize), u.minSize > t) return e(), makePaneFit(l, !1, n), void 0;
     if (!o && t === s) return e();
     if (u.newSize = t, !n && state.initialized && u.isVisible && _runCallbacks("onresize_start", l), 
     a = cssSize(l, t), m && d.is(":visible")) {
      var i = $.layout.effects.size[l] || $.layout.effects.size.all, p = c.fxSettings_size.easing || i.easing, f = options.zIndexes, g = {};
      g[h] = a + "px", u.isMoving = !0, d.css({
       zIndex: f.pane_animate
      }).show().animate(g, c.fxSpeed_size, p, function() {
       d.css({
        zIndex: u.isSliding ? f.pane_sliding : f.pane_normal
       }), u.isMoving = !1, delete u.newSize, r(), e();
      });
     } else d.css(h, a), delete u.newSize, d.is(":visible") ? r() : (u.size = t, $.extend(u, elDims(d))), 
     e();
    });
   }
  }, sizeMidPanes = function(e, t, n) {
   e = (e ? e : "east,west,center").split(","), $.each(e, function(e, i) {
    if ($Ps[i]) {
     var o = options[i], r = state[i], s = $Ps[i], a = ($Rs[i], !0), l = {}, c = $.layout.showInvisibly(s), u = calcNewCenterPaneDims();
     if ($.extend(r, elDims(s)), "center" === i) {
      if (!n && r.isVisible && u.width === r.outerWidth && u.height === r.outerHeight) return s.css(c), 
      !0;
      if ($.extend(r, cssMinDims(i), {
       maxWidth: u.width,
       maxHeight: u.height
      }), l = u, r.newWidth = l.width, r.newHeight = l.height, l.width = cssW(s, l.width), 
      l.height = cssH(s, l.height), a = l.width >= 0 && l.height >= 0, !state.initialized && o.minWidth > u.width) {
       var d = o.minWidth - r.outerWidth, p = options.east.minSize || 0, f = options.west.minSize || 0, h = state.east.size, g = state.west.size, m = h, v = g;
       if (d > 0 && state.east.isVisible && h > p && (m = max(h - p, h - d), d -= h - m), 
       d > 0 && state.west.isVisible && g > f && (v = max(g - f, g - d), d -= g - v), 0 === d) return h && h != p && sizePane("east", m, !0, !0, n), 
       g && g != f && sizePane("west", v, !0, !0, n), sizeMidPanes("center", t, n), s.css(c), 
       void 0;
      }
     } else {
      if (r.isVisible && !r.noVerticalRoom && $.extend(r, elDims(s), cssMinDims(i)), !n && !r.noVerticalRoom && u.height === r.outerHeight) return s.css(c), 
      !0;
      l.top = u.top, l.bottom = u.bottom, r.newSize = u.height, l.height = cssH(s, u.height), 
      r.maxHeight = l.height, a = r.maxHeight >= 0, a || (r.noVerticalRoom = !0);
     }
     if (a ? (!t && state.initialized && _runCallbacks("onresize_start", i), s.css(l), 
     "center" !== i && sizeHandles(i), !r.noRoom || r.isClosed || r.isHidden || makePaneFit(i), 
     r.isVisible && ($.extend(r, elDims(s)), state.initialized && sizeContent(i))) : !r.noRoom && r.isVisible && makePaneFit(i), 
     s.css(c), delete r.newSize, delete r.newWidth, delete r.newHeight, !r.isVisible) return !0;
     if ("center" === i) {
      var y = browser.isIE6 || !browser.boxModel;
      $Ps.north && (y || "IFRAME" == state.north.tagName) && $Ps.north.css("width", cssW($Ps.north, sC.innerWidth)), 
      $Ps.south && (y || "IFRAME" == state.south.tagName) && $Ps.south.css("width", cssW($Ps.south, sC.innerWidth));
     }
     !t && state.initialized && _runCallbacks("onresize_end", i);
    }
   });
  }, resizeAll = function(e) {
   var t = sC.innerWidth, n = sC.innerHeight;
   if (evtPane(e), $N.is(":visible")) {
    if (!state.initialized) return _initLayoutElements(), void 0;
    if (e === !0 && $.isPlainObject(options.outset) && $N.css(options.outset), $.extend(sC, elDims($N, options.inset)), 
    sC.outerHeight) {
     if (e === !0 && setPanePosition(), !1 === _runCallbacks("onresizeall_start")) return !1;
     var i, o, r;
     n > sC.innerHeight, t > sC.innerWidth, $.each([ "south", "north", "east", "west" ], function(e, t) {
      $Ps[t] && (o = options[t], r = state[t], r.autoResize && r.size != o.size ? sizePane(t, o.size, !0, !0, !0) : (setSizeLimits(t), 
      makePaneFit(t, !1, !0, !0)));
     }), sizeMidPanes("", !0, !0), sizeHandles(), $.each(_c.allPanes, function(e, t) {
      i = $Ps[t], i && state[t].isVisible && _runCallbacks("onresize_end", t);
     }), _runCallbacks("onresizeall_end");
    }
   }
  }, resizeChildren = function(e, t) {
   var n = evtPane.call(this, e);
   if (options[n].resizeChildren) {
    t || refreshChildren(n);
    var i = children[n];
    $.isPlainObject(i) && $.each(i, function(e, t) {
     t.destroyed || t.resizeAll();
    });
   }
  }, sizeContent = function(e, t) {
   if (isInitialized()) {
    var n = evtPane.call(this, e);
    n = n ? n.split(",") : _c.allPanes, $.each(n, function(e, n) {
     function i(e) {
      return max(l.css.paddingBottom, parseInt(e.css("marginBottom"), 10) || 0);
     }
     function o() {
      var e = options[n].contentIgnoreSelector, t = s.nextAll().not(".ui-layout-mask").not(e || ":lt(0)"), o = t.filter(":visible"), r = o.filter(":last");
      c = {
       top: s[0].offsetTop,
       height: s.outerHeight(),
       numFooters: t.length,
       hiddenFooters: t.length - o.length,
       spaceBelow: 0
      }, c.spaceAbove = c.top, c.bottom = c.top + c.height, c.spaceBelow = r.length ? r[0].offsetTop + r.outerHeight() - c.bottom + i(r) : i(s);
     }
     var r = $Ps[n], s = $Cs[n], a = options[n], l = state[n], c = l.content;
     if (!r || !s || !r.is(":visible")) return !0;
     if ((s.length || (initContent(n, !1), s)) && !1 !== _runCallbacks("onsizecontent_start", n)) {
      (!l.isMoving && !l.isResizing || a.liveContentResizing || t || void 0 == c.top) && (o(), 
      c.hiddenFooters > 0 && "hidden" === r.css("overflow") && (r.css("overflow", "visible"), 
      o(), r.css("overflow", "hidden")));
      var u = l.innerHeight - (c.spaceAbove - l.css.paddingTop) - (c.spaceBelow - l.css.paddingBottom);
      s.is(":visible") && c.height == u || (setOuterHeight(s, u, !0), c.height = u), state.initialized && _runCallbacks("onsizecontent_end", n);
     }
    });
   }
  }, sizeHandles = function(e) {
   var t = evtPane.call(this, e);
   t = t ? t.split(",") : _c.borderPanes, $.each(t, function(e, t) {
    var n, i = options[t], o = state[t], r = $Ps[t], s = $Rs[t], a = $Ts[t];
    if (r && s) {
     var l, c, u, d = _c[t].dir, p = o.isClosed ? "_closed" : "_open", f = i["spacing" + p], h = i["togglerAlign" + p], g = i["togglerLength" + p];
     if (0 === f) return s.hide(), void 0;
     if (o.noRoom || o.isHidden || s.show(), "horz" === d ? (l = sC.innerWidth, o.resizerLength = l, 
     c = $.layout.cssNum(r, "left"), s.css({
      width: cssW(s, l),
      height: cssH(s, f),
      left: c > -9999 ? c : sC.inset.left
     })) : (l = r.outerHeight(), o.resizerLength = l, s.css({
      height: cssH(s, l),
      width: cssW(s, f),
      top: sC.inset.top + getPaneSize("north", !0)
     })), removeHover(i, s), a) {
      if (0 === g || o.isSliding && i.hideTogglerOnSlide) return a.hide(), void 0;
      if (a.show(), !(g > 0) || "100%" === g || g > l) g = l, u = 0; else if (isStr(h)) switch (h) {
      case "top":
      case "left":
       u = 0;
       break;

      case "bottom":
      case "right":
       u = l - g;
       break;

      case "middle":
      case "center":
      default:
       u = round((l - g) / 2);
      } else {
       var m = parseInt(h, 10);
       u = h >= 0 ? m : l - g + m;
      }
      if ("horz" === d) {
       var v = cssW(a, g);
       a.css({
        width: v,
        height: cssH(a, f),
        left: u,
        top: 0
       }), a.children(".content").each(function() {
        n = $(this), n.css("marginLeft", round((v - n.outerWidth()) / 2));
       });
      } else {
       var y = cssH(a, g);
       a.css({
        height: y,
        width: cssW(a, f),
        top: u,
        left: 0
       }), a.children(".content").each(function() {
        n = $(this), n.css("marginTop", round((y - n.outerHeight()) / 2));
       });
      }
      removeHover(0, a);
     }
     state.initialized || !i.initHidden && !o.isHidden || (s.hide(), a && a.hide());
    }
   });
  }, enableClosable = function(e) {
   if (isInitialized()) {
    var t = evtPane.call(this, e), n = $Ts[t], i = options[t];
    n && (i.closable = !0, n.bind("click." + sID, function(e) {
     e.stopPropagation(), toggle(t);
    }).css("visibility", "visible").css("cursor", "pointer").attr("title", state[t].isClosed ? i.tips.Open : i.tips.Close).show());
   }
  }, disableClosable = function(e, t) {
   if (isInitialized()) {
    var n = evtPane.call(this, e), i = $Ts[n];
    i && (options[n].closable = !1, state[n].isClosed && open(n, !1, !0), i.unbind("." + sID).css("visibility", t ? "hidden" : "visible").css("cursor", "default").attr("title", ""));
   }
  }, enableSlidable = function(e) {
   if (isInitialized()) {
    var t = evtPane.call(this, e), n = $Rs[t];
    n && n.data("draggable") && (options[t].slidable = !0, state[t].isClosed && bindStartSlidingEvents(t, !0));
   }
  }, disableSlidable = function(e) {
   if (isInitialized()) {
    var t = evtPane.call(this, e), n = $Rs[t];
    n && (options[t].slidable = !1, state[t].isSliding ? close(t, !1, !0) : (bindStartSlidingEvents(t, !1), 
    n.css("cursor", "default").attr("title", ""), removeHover(null, n[0])));
   }
  }, enableResizable = function(e) {
   if (isInitialized()) {
    var t = evtPane.call(this, e), n = $Rs[t], i = options[t];
    n && n.data("draggable") && (i.resizable = !0, n.draggable("enable"), state[t].isClosed || n.css("cursor", i.resizerCursor).attr("title", i.tips.Resize));
   }
  }, disableResizable = function(e) {
   if (isInitialized()) {
    var t = evtPane.call(this, e), n = $Rs[t];
    n && n.data("draggable") && (options[t].resizable = !1, n.draggable("disable").css("cursor", "default").attr("title", ""), 
    removeHover(null, n[0]));
   }
  }, swapPanes = function(e, t) {
   function n(e) {
    var t = $Ps[e], n = $Cs[e];
    return t ? {
     pane: e,
     P: t ? t[0] : !1,
     C: n ? n[0] : !1,
     state: $.extend(!0, {}, state[e]),
     options: $.extend(!0, {}, options[e])
    } : !1;
   }
   function i(e, t) {
    if (e) {
     var n, i, o = e.P, r = e.C, s = e.pane, l = _c[t], c = $.extend(!0, {}, state[t]), u = options[t], d = {
      resizerCursor: u.resizerCursor
     };
     $.each("fxName,fxSpeed,fxSettings".split(","), function(e, t) {
      d[t + "_open"] = u[t + "_open"], d[t + "_close"] = u[t + "_close"], d[t + "_size"] = u[t + "_size"];
     }), $Ps[t] = $(o).data({
      layoutPane: Instance[t],
      layoutEdge: t
     }).css(_c.hidden).css(l.cssReq), $Cs[t] = r ? $(r) : !1, options[t] = $.extend(!0, {}, e.options, d), 
     state[t] = $.extend(!0, {}, e.state), n = RegExp(u.paneClass + "-" + s, "g"), o.className = o.className.replace(n, u.paneClass + "-" + t), 
     initHandles(t), l.dir != _c[s].dir ? (i = a[t] || 0, setSizeLimits(t), i = max(i, state[t].minSize), 
     manualSizePane(t, i, !0, !0)) : $Rs[t].css(l.side, sC.inset[l.side] + (state[t].isVisible ? getPaneSize(t) : 0)), 
     e.state.isVisible && !c.isVisible ? setAsOpen(t, !0) : (setAsClosed(t), bindStartSlidingEvents(t, !0)), 
     e = null;
    }
   }
   if (isInitialized()) {
    var o = evtPane.call(this, e);
    if (state[o].edge = t, state[t].edge = o, !1 === _runCallbacks("onswap_start", o) || !1 === _runCallbacks("onswap_start", t)) return state[o].edge = o, 
    state[t].edge = t, void 0;
    var r = n(o), s = n(t), a = {};
    a[o] = r ? r.state.size : 0, a[t] = s ? s.state.size : 0, $Ps[o] = !1, $Ps[t] = !1, 
    state[o] = {}, state[t] = {}, $Ts[o] && $Ts[o].remove(), $Ts[t] && $Ts[t].remove(), 
    $Rs[o] && $Rs[o].remove(), $Rs[t] && $Rs[t].remove(), $Rs[o] = $Rs[t] = $Ts[o] = $Ts[t] = !1, 
    i(r, t), i(s, o), r = s = a = null, $Ps[o] && $Ps[o].css(_c.visible), $Ps[t] && $Ps[t].css(_c.visible), 
    resizeAll(), _runCallbacks("onswap_end", o), _runCallbacks("onswap_end", t);
   }
  }, syncPinBtns = function(e, t) {
   $.layout.plugins.buttons && $.each(state[e].pins, function(n, i) {
    $.layout.buttons.setPinState(Instance, $(i), e, t);
   });
  }, $N = $(this).eq(0);
  if (!$N.length) return _log(options.errors.containerMissing);
  if ($N.data("layoutContainer") && $N.data("layout")) return $N.data("layout");
  var $Ps = {}, $Cs = {}, $Rs = {}, $Ts = {}, $Ms = $([]), sC = state.container, sID = state.id, Instance = {
   options: options,
   state: state,
   container: $N,
   panes: $Ps,
   contents: $Cs,
   resizers: $Rs,
   togglers: $Ts,
   hide: hide,
   show: show,
   toggle: toggle,
   open: open,
   close: close,
   slideOpen: slideOpen,
   slideClose: slideClose,
   slideToggle: slideToggle,
   setSizeLimits: setSizeLimits,
   _sizePane: sizePane,
   sizePane: manualSizePane,
   sizeContent: sizeContent,
   swapPanes: swapPanes,
   showMasks: showMasks,
   hideMasks: hideMasks,
   initContent: initContent,
   addPane: addPane,
   removePane: removePane,
   createChildren: createChildren,
   refreshChildren: refreshChildren,
   enableClosable: enableClosable,
   disableClosable: disableClosable,
   enableSlidable: enableSlidable,
   disableSlidable: disableSlidable,
   enableResizable: enableResizable,
   disableResizable: disableResizable,
   allowOverflow: allowOverflow,
   resetOverflow: resetOverflow,
   destroy: destroy,
   initPanes: isInitialized,
   resizeAll: resizeAll,
   runCallbacks: _runCallbacks,
   hasParentLayout: !1,
   children: children,
   north: !1,
   south: !1,
   west: !1,
   east: !1,
   center: !1
  };
  return "cancel" === _create() ? null : Instance;
 };
}(jQuery), function(e) {
 e.ui || (e.ui = {}), e.ui.cookie = {
  acceptsCookies: !!navigator.cookieEnabled,
  read: function(t) {
   for (var n, i = document.cookie, o = i ? i.split(";") : [], r = 0, s = o.length; s > r; r++) if (n = e.trim(o[r]).split("="), 
   n[0] == t) return decodeURIComponent(n[1]);
   return null;
  },
  write: function(t, n, i) {
   var o = "", r = "", s = !1, a = i || {}, l = a.expires || null, c = e.type(l);
   "date" === c ? r = l : "string" === c && l > 0 && (l = parseInt(l, 10), c = "number"), 
   "number" === c && (r = new Date(), l > 0 ? r.setDate(r.getDate() + l) : (r.setFullYear(1970), 
   s = !0)), r && (o += ";expires=" + r.toUTCString()), a.path && (o += ";path=" + a.path), 
   a.domain && (o += ";domain=" + a.domain), a.secure && (o += ";secure"), document.cookie = t + "=" + (s ? "" : encodeURIComponent(n)) + o;
  },
  clear: function(t) {
   e.ui.cookie.write(t, "", {
    expires: -1
   });
  }
 }, e.cookie || (e.cookie = function(t, n, i) {
  var o = e.ui.cookie;
  if (null === n) o.clear(t); else {
   if (void 0 === n) return o.read(t);
   o.write(t, n, i);
  }
 }), e.layout.plugins.stateManagement = !0, e.layout.config.optionRootKeys.push("stateManagement"), 
 e.layout.defaults.stateManagement = {
  enabled: !1,
  autoSave: !0,
  autoLoad: !0,
  animateLoad: !0,
  includeChildren: !0,
  stateKeys: "north.size,south.size,east.size,west.size,north.isClosed,south.isClosed,east.isClosed,west.isClosed,north.isHidden,south.isHidden,east.isHidden,west.isHidden",
  cookie: {
   name: "",
   domain: "",
   path: "",
   expires: "",
   secure: !1
  }
 }, e.layout.optionsMap.layout.push("stateManagement"), e.layout.state = {
  saveCookie: function(t, n, i) {
   var o = t.options, r = o.stateManagement, s = e.extend(!0, {}, r.cookie, i || null), a = t.state.stateData = t.readState(n || r.stateKeys);
   return e.ui.cookie.write(s.name || o.name || "Layout", e.layout.state.encodeJSON(a), s), 
   e.extend(!0, {}, a);
  },
  deleteCookie: function(t) {
   var n = t.options;
   e.ui.cookie.clear(n.stateManagement.cookie.name || n.name || "Layout");
  },
  readCookie: function(t) {
   var n = t.options, i = e.ui.cookie.read(n.stateManagement.cookie.name || n.name || "Layout");
   return i ? e.layout.state.decodeJSON(i) : {};
  },
  loadCookie: function(t) {
   var n = e.layout.state.readCookie(t);
   return n && (t.state.stateData = e.extend(!0, {}, n), t.loadState(n)), n;
  },
  loadState: function(t, n, i) {
   if (e.isPlainObject(n) && !e.isEmptyObject(n)) {
    n = t.state.stateData = e.layout.transformData(n);
    var o = t.options.stateManagement;
    if (i = e.extend({
     animateLoad: !1,
     includeChildren: o.includeChildren
    }, i), t.state.initialized) {
     var r, a, l, c, u, d = !i.animateLoad;
     if (e.each(e.layout.config.borderPanes, function(i, o) {
      r = n[o], e.isPlainObject(r) && (s = r.size, a = r.initClosed, l = r.initHidden, 
      ar = r.autoResize, c = t.state[o], u = c.isVisible, ar && (c.autoResize = ar), u || t._sizePane(o, s, !1, !1, !1), 
      l === !0 ? t.hide(o, d) : a === !0 ? t.close(o, !1, d) : a === !1 ? t.open(o, !1, d) : l === !1 && t.show(o, !1, d), 
      u && t._sizePane(o, s, !1, !1, d));
     }), i.includeChildren) {
      var p, f;
      e.each(t.children, function(t, i) {
       p = n[t] ? n[t].children : 0, p && i && e.each(i, function(e, t) {
        f = p[e], t && f && t.loadState(f);
       });
      });
     }
    } else {
     var r = e.extend(!0, {}, n);
     e.each(e.layout.config.allPanes, function(e, t) {
      r[t] && delete r[t].children;
     }), e.extend(!0, t.options, r);
    }
   }
  },
  readState: function(t, n) {
   "string" === e.type(n) && (n = {
    keys: n
   }), n || (n = {});
   var i, o, r, s, a, l, c, u = t.options.stateManagement, d = n.includeChildren, p = void 0 !== d ? d : u.includeChildren, f = n.stateKeys || u.stateKeys, h = {
    isClosed: "initClosed",
    isHidden: "initHidden"
   }, g = t.state, m = e.layout.config.allPanes, v = {};
   e.isArray(f) && (f = f.join(",")), f = f.replace(/__/g, ".").split(",");
   for (var y = 0, b = f.length; b > y; y++) i = f[y].split("."), o = i[0], r = i[1], 
   0 > e.inArray(o, m) || (s = g[o][r], void 0 != s && ("isClosed" == r && g[o].isSliding && (s = !0), 
   (v[o] || (v[o] = {}))[h[r] ? h[r] : r] = s));
   return p && e.each(m, function(n, i) {
    l = t.children[i], a = g.stateData[i], e.isPlainObject(l) && !e.isEmptyObject(l) && (c = v[i] || (v[i] = {}), 
    c.children || (c.children = {}), e.each(l, function(t, n) {
     n.state.initialized ? c.children[t] = e.layout.state.readState(n) : a && a.children && a.children[t] && (c.children[t] = e.extend(!0, {}, a.children[t]));
    }));
   }), v;
  },
  encodeJSON: function(t) {
   function n(t) {
    var i, o, r, s = [], a = 0, l = e.isArray(t);
    for (i in t) o = t[i], r = typeof o, "string" == r ? o = '"' + o + '"' : "object" == r && (o = n(o)), 
    s[a++] = (l ? "" : '"' + i + '":') + o;
    return (l ? "[" : "{") + s.join(",") + (l ? "]" : "}");
   }
   return n(t);
  },
  decodeJSON: function(t) {
   try {
    return e.parseJSON ? e.parseJSON(t) : window.eval("(" + t + ")") || {};
   } catch (n) {
    return {};
   }
  },
  _create: function(t) {
   var n = e.layout.state, i = t.options, o = i.stateManagement;
   if (e.extend(t, {
    readCookie: function() {
     return n.readCookie(t);
    },
    deleteCookie: function() {
     n.deleteCookie(t);
    },
    saveCookie: function(e, i) {
     return n.saveCookie(t, e, i);
    },
    loadCookie: function() {
     return n.loadCookie(t);
    },
    loadState: function(e, i) {
     n.loadState(t, e, i);
    },
    readState: function(e) {
     return n.readState(t, e);
    },
    encodeJSON: n.encodeJSON,
    decodeJSON: n.decodeJSON
   }), t.state.stateData = {}, o.autoLoad) if (e.isPlainObject(o.autoLoad)) e.isEmptyObject(o.autoLoad) || t.loadState(o.autoLoad); else if (o.enabled) if (e.isFunction(o.autoLoad)) {
    var r = {};
    try {
     r = o.autoLoad(t, t.state, t.options, t.options.name || "");
    } catch (s) {}
    r && e.isPlainObject(r) && !e.isEmptyObject(r) && t.loadState(r);
   } else t.loadCookie();
  },
  _unload: function(t) {
   var n = t.options.stateManagement;
   if (n.enabled && n.autoSave) if (e.isFunction(n.autoSave)) try {
    n.autoSave(t, t.state, t.options, t.options.name || "");
   } catch (i) {} else t.saveCookie();
  }
 }, e.layout.onCreate.push(e.layout.state._create), e.layout.onUnload.push(e.layout.state._unload), 
 e.layout.plugins.buttons = !0, e.layout.defaults.autoBindCustomButtons = !1, e.layout.optionsMap.layout.push("autoBindCustomButtons"), 
 e.layout.buttons = {
  init: function(t) {
   var n, i = "ui-layout-button-", o = t.options.name || "";
   e.each("toggle,open,close,pin,toggle-slide,open-slide".split(","), function(r, s) {
    e.each(e.layout.config.borderPanes, function(r, a) {
     e("." + i + s + "-" + a).each(function() {
      n = e(this).data("layoutName") || e(this).attr("layoutName"), (void 0 == n || n === o) && t.bindButton(this, s, a);
     });
    });
   });
  },
  get: function(t, n, i, o) {
   var r = e(n), s = t.options, a = s.errors.addButtonError;
   if (r.length) if (0 > e.inArray(i, e.layout.config.borderPanes)) e.layout.msg(a + " " + s.errors.pane + ": " + i, !0), 
   r = e(""); else {
    var l = s[i].buttonClass + "-" + o;
    r.addClass(l + " " + l + "-" + i).data("layoutName", s.name);
   } else e.layout.msg(a + " " + s.errors.selector + ": " + n, !0);
   return r;
  },
  bind: function(t, n, i, o) {
   var r = e.layout.buttons;
   switch (i.toLowerCase()) {
   case "toggle":
    r.addToggle(t, n, o);
    break;

   case "open":
    r.addOpen(t, n, o);
    break;

   case "close":
    r.addClose(t, n, o);
    break;

   case "pin":
    r.addPin(t, n, o);
    break;

   case "toggle-slide":
    r.addToggle(t, n, o, !0);
    break;

   case "open-slide":
    r.addOpen(t, n, o, !0);
   }
   return t;
  },
  addToggle: function(t, n, i, o) {
   return e.layout.buttons.get(t, n, i, "toggle").click(function(e) {
    t.toggle(i, !!o), e.stopPropagation();
   }), t;
  },
  addOpen: function(t, n, i, o) {
   return e.layout.buttons.get(t, n, i, "open").attr("title", t.options[i].tips.Open).click(function(e) {
    t.open(i, !!o), e.stopPropagation();
   }), t;
  },
  addClose: function(t, n, i) {
   return e.layout.buttons.get(t, n, i, "close").attr("title", t.options[i].tips.Close).click(function(e) {
    t.close(i), e.stopPropagation();
   }), t;
  },
  addPin: function(t, n, i) {
   var o = e.layout.buttons, r = o.get(t, n, i, "pin");
   if (r.length) {
    var s = t.state[i];
    r.click(function(n) {
     o.setPinState(t, e(this), i, s.isSliding || s.isClosed), s.isSliding || s.isClosed ? t.open(i) : t.close(i), 
     n.stopPropagation();
    }), o.setPinState(t, r, i, !s.isClosed && !s.isSliding), s.pins.push(n);
   }
   return t;
  },
  setPinState: function(e, t, n, i) {
   var o = t.attr("pin");
   if (!o || i !== ("down" == o)) {
    var r = e.options[n], s = r.buttonClass + "-pin", a = s + "-" + n, l = s + "-up " + a + "-up", c = s + "-down " + a + "-down";
    t.attr("pin", i ? "down" : "up").attr("title", i ? r.tips.Unpin : r.tips.Pin).removeClass(i ? l : c).addClass(i ? c : l);
   }
  },
  syncPinBtns: function(t, n, i) {
   e.each(t.state[n].pins, function(o, r) {
    e.layout.buttons.setPinState(t, e(r), n, i);
   });
  },
  _load: function(t) {
   var n = e.layout.buttons;
   e.extend(t, {
    bindButton: function(e, i, o) {
     return n.bind(t, e, i, o);
    },
    addToggleBtn: function(e, i, o) {
     return n.addToggle(t, e, i, o);
    },
    addOpenBtn: function(e, i, o) {
     return n.addOpen(t, e, i, o);
    },
    addCloseBtn: function(e, i) {
     return n.addClose(t, e, i);
    },
    addPinBtn: function(e, i) {
     return n.addPin(t, e, i);
    }
   });
   for (var i = 0; 4 > i; i++) {
    var o = e.layout.config.borderPanes[i];
    t.state[o].pins = [];
   }
   t.options.autoBindCustomButtons && n.init(t);
  },
  _unload: function() {}
 }, e.layout.onLoad.push(e.layout.buttons._load), e.layout.plugins.browserZoom = !0, 
 e.layout.defaults.browserZoomCheckInterval = 1e3, e.layout.optionsMap.layout.push("browserZoomCheckInterval"), 
 e.layout.browserZoom = {
  _init: function(t) {
   e.layout.browserZoom.ratio() !== !1 && e.layout.browserZoom._setTimer(t);
  },
  _setTimer: function(t) {
   if (!t.destroyed) {
    var n = t.options, i = t.state, o = t.hasParentLayout ? 5e3 : Math.max(n.browserZoomCheckInterval, 100);
    setTimeout(function() {
     if (!t.destroyed && n.resizeWithWindow) {
      var o = e.layout.browserZoom.ratio();
      o !== i.browserZoom && (i.browserZoom = o, t.resizeAll()), e.layout.browserZoom._setTimer(t);
     }
    }, o);
   }
  },
  ratio: function() {
   function t(e, t) {
    return (100 * (parseInt(e, 10) / parseInt(t, 10))).toFixed();
   }
   var n, i, o, r = window, s = screen, a = document, l = a.documentElement || a.body, c = e.layout.browser, u = c.version;
   return c.msie && u > 8 || !c.msie ? !1 : s.deviceXDPI && s.systemXDPI ? t(s.deviceXDPI, s.systemXDPI) : c.webkit && (n = a.body.getBoundingClientRect) ? t(n.left - n.right, a.body.offsetWidth) : c.webkit && (i = r.outerWidth) ? t(i, r.innerWidth) : (i = s.width) && (o = l.clientWidth) ? t(i, o) : !1;
  }
 }, e.layout.onReady.push(e.layout.browserZoom._init);
}(jQuery), define("libs/layout", function() {}), function() {
 function e() {}
 function t(e) {
  this.buttonBar = d.getElementById("wmd-button-bar" + e), this.preview = d.getElementById("wmd-preview" + e), 
  this.input = d.getElementById("wmd-input" + e);
 }
 function n(e, t) {
  var n, o, r, s = this, a = [], c = 0, u = "none", d = function(e, t) {
   u != e && (u = e, t || f()), g.isIE && "moving" == u ? r = null : o = setTimeout(p, 1);
  }, p = function(e) {
   r = new i(t, e), o = void 0;
  };
  this.setCommandMode = function() {
   u = "command", f(), o = setTimeout(p, 0);
  }, this.canUndo = function() {
   return c > 1;
  }, this.canRedo = function() {
   return a[c + 1] ? !0 : !1;
  }, this.undo = function() {
   s.canUndo() && (n ? (n.restore(), n = null) : (a[c] = new i(t), a[--c].restore(), 
   e && e())), u = "none", t.input.focus(), p();
  }, this.redo = function() {
   s.canRedo() && (a[++c].restore(), e && e()), u = "none", t.input.focus(), p();
  };
  var f = function() {
   var o = r || new i(t);
   return o ? "moving" == u ? (n || (n = o), void 0) : (n && (a[c - 1].text != n.text && (a[c++] = n), 
   n = null), a[c++] = o, a[c + 1] = null, e && e(), void 0) : !1;
  }, h = function(e) {
   var t = !1;
   if ((e.ctrlKey || e.metaKey) && !e.altKey) {
    var n = e.charCode || e.keyCode, i = String.fromCharCode(n);
    switch (i.toLowerCase()) {
    case "y":
     s.redo(), t = !0;
     break;

    case "z":
     e.shiftKey ? s.redo() : s.undo(), t = !0;
    }
   }
   return t ? (e.preventDefault && e.preventDefault(), window.event && (window.event.returnValue = !1), 
   void 0) : void 0;
  }, m = function(e) {
   if (!e.ctrlKey && !e.metaKey) {
    var t = e.keyCode;
    t >= 33 && 40 >= t || t >= 63232 && 63235 >= t ? d("moving") : 8 == t || 46 == t || 127 == t ? d("deleting") : 13 == t ? d("newlines") : 27 == t ? d("escape") : (16 > t || t > 20) && 91 != t && d("typing");
   }
  }, v = function() {
   l.addEvent(t.input, "keypress", function(e) {
    !e.ctrlKey && !e.metaKey || e.altKey || 89 != e.keyCode && 90 != e.keyCode || e.preventDefault();
   });
   var e = function() {
    (g.isIE || r && r.text != t.input.value) && void 0 == o && (u = "paste", f(), p());
   };
   l.addEvent(t.input, "keydown", h), l.addEvent(t.input, "keydown", m), l.addEvent(t.input, "mousedown", function() {
    d("moving");
   }), t.input.onpaste = e, t.input.ondrop = e;
  }, y = function() {
   v(), p(!0);
  };
  this.reinit = function(e, t, i, s) {
   a = [], c = 0, u = "none", n = void 0, o = void 0, p(), r.text = e, r.start = t, 
   r.end = i, r.scrollTop = s, r.setInputAreaSelection(), f();
  }, y();
 }
 function i(t, n) {
  var i = this, o = t.input;
  this.init = function() {
   l.isVisible(o) && (n || !d.activeElement || d.activeElement === o) && (this.setInputAreaSelectionStartEnd(), 
   this.scrollTop = o.scrollTop, (!this.text && o.selectionStart || 0 === o.selectionStart) && (this.text = o.value));
  }, this.setInputAreaSelection = function() {
   if (l.isVisible(o)) if (void 0 === o.selectionStart || g.isOpera) {
    if (d.selection) {
     if (d.activeElement && d.activeElement !== o) return;
     o.focus();
     var e = o.createTextRange();
     e.moveStart("character", -o.value.length), e.moveEnd("character", -o.value.length), 
     e.moveEnd("character", i.end), e.moveStart("character", i.start), e.select();
    }
   } else o.focus(), o.selectionStart = i.start, o.selectionEnd = i.end, o.scrollTop = i.scrollTop;
  }, this.setInputAreaSelectionStartEnd = function() {
   if (t.ieCachedRange || !o.selectionStart && 0 !== o.selectionStart) {
    if (d.selection) {
     i.text = l.fixEolChars(o.value);
     var e = t.ieCachedRange || d.selection.createRange(), n = l.fixEolChars(e.text), r = "", s = r + n + r;
     e.text = s;
     var a = l.fixEolChars(o.value);
     e.moveStart("character", -s.length), e.text = n, i.start = a.indexOf(r), i.end = a.lastIndexOf(r) - r.length;
     var c = i.text.length - l.fixEolChars(o.value).length;
     if (c) {
      for (e.moveStart("character", -n.length); c--; ) n += "\n", i.end += 1;
      e.text = n;
     }
     t.ieCachedRange && (i.scrollTop = t.ieCachedScrollTop), t.ieCachedRange = null, 
     this.setInputAreaSelection();
    }
   } else i.start = o.selectionStart, i.end = o.selectionEnd;
  }, this.restore = function() {
   void 0 != i.text && i.text != o.value && (o.value = i.text), this.setInputAreaSelection(), 
   o.scrollTop = i.scrollTop;
  }, this.getChunks = function() {
   var t = new e();
   return t.before = l.fixEolChars(i.text.substring(0, i.start)), t.startTag = "", 
   t.selection = l.fixEolChars(i.text.substring(i.start, i.end)), t.endTag = "", t.after = l.fixEolChars(i.text.substring(i.end)), 
   t.scrollTop = i.scrollTop, t;
  }, this.setChunks = function(e) {
   e.before = e.before + e.startTag, e.after = e.endTag + e.after, this.start = e.before.length, 
   this.end = e.before.length + e.selection.length, this.text = e.before + e.selection + e.after, 
   this.scrollTop = e.scrollTop;
  }, this.init();
 }
 function o(e, t, n, i) {
  var o, r, s, a = 3e3, u = "delayed", p = function(e, t) {
   l.addEvent(e, "input", t), e.onpaste = t, e.ondrop = t, l.addEvent(e, "keypress", t), 
   l.addEvent(e, "keydown", t);
  }, f = function() {
   var e = 0;
   return window.innerHeight ? e = window.pageYOffset : d.documentElement && d.documentElement.scrollTop ? e = d.documentElement.scrollTop : d.body && (e = d.body.scrollTop), 
   e;
  }, h = function() {
   if (t.preview) {
    var n = t.input.value;
    if (!n || n != s) {
     s = n;
     var i = new Date().getTime();
     n = e.makeHtml(n);
     var o = new Date().getTime();
     r = o - i, S(n);
    }
   }
  };
  void 0 !== i && (h = i(h));
  var m = function() {
   if (o && (clearTimeout(o), o = void 0), "manual" !== u) {
    var e = 0;
    "delayed" === u && (e = r), e > a && (e = a), o = setTimeout(h, e);
   }
  }, v = function(e) {
   return e.scrollHeight <= e.clientHeight ? 1 : e.scrollTop / (e.scrollHeight - e.clientHeight);
  }, y = function() {
   t.preview && (t.preview.scrollTop = (t.preview.scrollHeight - t.preview.clientHeight) * v(t.preview));
  };
  this.refresh = function(e) {
   e ? (s = "", h()) : m();
  }, this.processingTime = function() {
   return r;
  };
  var b, w = !0, x = function(e) {
   var n = t.preview, i = n.parentNode, o = n.nextSibling;
   i.removeChild(n), n.innerHTML = e, o ? i.insertBefore(n, o) : i.appendChild(n);
  }, C = function(e) {
   t.preview.innerHTML = e;
  }, k = function(e) {
   if (b) return b(e);
   try {
    C(e), b = C;
   } catch (t) {
    b = x, b(e);
   }
  }, S = function(e) {
   var i = c.getTop(t.input) - f();
   if (t.preview && (k(e), n()), y(), w) return w = !1, void 0;
   var o = c.getTop(t.input) - f();
   g.isIE ? setTimeout(function() {
    window.scrollBy(0, o - i);
   }, 0) : window.scrollBy(0, o - i);
  }, T = function() {
   p(t.input, m), t.preview && (t.preview.scrollTop = 0);
  };
  T();
 }
 function r(e, t, n, o, r, s, a) {
  function c(e) {
   if (v.focus(), e.textOp) {
    n && n.setCommandMode();
    var r = new i(t);
    if (!r) return;
    var s = r.getChunks(), a = function() {
     v.focus(), s && r.setChunks(s), r.restore(), o.refresh();
    }, l = e.textOp(s, a);
    l || a();
   }
   e.execute && e.execute(n);
  }
  function u(e, n) {
   var i = "0px", o = "-20px", r = "-40px", s = e.getElementsByTagName("span")[0];
   n ? (s.style.backgroundPosition = e.XShift + " " + i, e.onmouseover = function() {
    s.style.backgroundPosition = this.XShift + " " + r;
   }, e.onmouseout = function() {
    s.style.backgroundPosition = this.XShift + " " + i;
   }, g.isIE && (e.onmousedown = function() {
    d.activeElement && d.activeElement !== t.input || (t.ieCachedRange = document.selection.createRange(), 
    t.ieCachedScrollTop = t.input.scrollTop);
   }), e.isHelp || (e.onclick = function() {
    return this.onmouseout && this.onmouseout(), c(this), !1;
   }), e.className = e.className.replace(/ disabled/g, "")) : (s.style.backgroundPosition = e.XShift + " " + o, 
   e.onmouseover = e.onmouseout = e.onclick = function() {}, e.className += " disabled");
  }
  function p(e) {
   return "string" == typeof e && (e = r[e]), function() {
    e.apply(r, arguments);
   };
  }
  function h() {
   var n = t.buttonBar, i = document.createElement("ul");
   i.id = "wmd-button-row" + e, i.className = "wmd-button-row", i = n.appendChild(i);
   var o = 0, r = function(t, n, r, s) {
    var a = document.createElement("li");
    a.className = "wmd-button", a.style.left = o + "px", o += 25;
    var l = document.createElement("span");
    return a.id = t + e, a.appendChild(l), a.title = n, a.XShift = r, s && (a.textOp = s), 
    u(a, !0), i.appendChild(a), a;
   }, l = function(t) {
    var n = document.createElement("li");
    n.className = "wmd-spacer wmd-spacer" + t, n.id = "wmd-spacer" + t + e, i.appendChild(n), 
    o += 25;
   };
   y.bold = r("wmd-bold-button", a("bold"), "0px", p("doBold")), y.italic = r("wmd-italic-button", a("italic"), "-20px", p("doItalic")), 
   l(1), y.link = r("wmd-link-button", a("link"), "-40px", p(function(e, t) {
    return this.doLinkOrImage(e, t, !1);
   })), y.quote = r("wmd-quote-button", a("quote"), "-60px", p("doBlockquote")), y.code = r("wmd-code-button", a("code"), "-80px", p("doCode")), 
   y.image = r("wmd-image-button", a("image"), "-100px", p(function(e, t) {
    return this.doLinkOrImage(e, t, !0);
   })), l(2), y.olist = r("wmd-olist-button", a("olist"), "-120px", p(function(e, t) {
    this.doList(e, t, !0);
   })), y.ulist = r("wmd-ulist-button", a("ulist"), "-140px", p(function(e, t) {
    this.doList(e, t, !1);
   })), y.heading = r("wmd-heading-button", a("heading"), "-160px", p("doHeading")), 
   y.hr = r("wmd-hr-button", a("hr"), "-180px", p("doHorizontalRule")), l(3), y.undo = r("wmd-undo-button", a("undo"), "-200px", null), 
   y.undo.execute = function(e) {
    e && e.undo();
   };
   var c = /win/.test(f.platform.toLowerCase()) ? a("redo") : a("redomac");
   if (y.redo = r("wmd-redo-button", c, "-220px", null), y.redo.execute = function(e) {
    e && e.redo();
   }, s) {
    var d = document.createElement("li"), h = document.createElement("span");
    d.appendChild(h), d.className = "wmd-button wmd-help-button", d.id = "wmd-help-button" + e, 
    d.XShift = "-240px", d.isHelp = !0, d.style.right = "0px", d.title = a("help"), 
    d.onclick = s.handler, u(d, !0), i.appendChild(d), y.help = d;
   }
   m();
  }
  function m() {
   n && (u(y.undo, n.canUndo()), u(y.redo, n.canRedo()));
  }
  var v = t.input, y = {};
  h();
  var b = "keydown";
  g.isOpera && (b = "keypress"), l.addEvent(v, b, function(e) {
   if ((e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey) {
    var t = e.charCode || e.keyCode, n = String.fromCharCode(t).toLowerCase();
    switch (n) {
    case "b":
     c(y.bold);
     break;

    case "i":
     c(y.italic);
     break;

    case "l":
     c(y.link);
     break;

    case "q":
     c(y.quote);
     break;

    case "k":
     c(y.code);
     break;

    case "g":
     c(y.image);
     break;

    case "o":
     c(y.olist);
     break;

    case "u":
     c(y.ulist);
     break;

    case "h":
     c(y.heading);
     break;

    case "r":
     c(y.hr);
     break;

    case "y":
     c(y.redo);
     break;

    case "z":
     e.shiftKey ? c(y.redo) : c(y.undo);
     break;

    default:
     return;
    }
    e.preventDefault && e.preventDefault(), window.event && (window.event.returnValue = !1);
   }
  }), l.addEvent(v, "keyup", function(e) {
   if (e.shiftKey && !e.ctrlKey && !e.metaKey) {
    var t = e.charCode || e.keyCode;
    if (13 === t) {
     var n = {};
     n.textOp = p("doAutoindent"), c(n);
    }
   }
  }), g.isIE && l.addEvent(v, "keydown", function(e) {
   var t = e.keyCode;
   return 27 === t ? !1 : void 0;
  }), this.setUndoRedoButtonStates = m;
 }
 function s(e, t) {
  this.hooks = e, this.getString = t;
 }
 function a(e) {
  return e.replace(/^\s*(.*?)(?:\s+"(.+)")?\s*$/, function(e, t, n) {
   return t = t.replace(/\?.*$/, function(e) {
    return e.replace(/\+/g, " ");
   }), t = decodeURIComponent(t), t = encodeURI(t).replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29"), 
   t = t.replace(/\?.*$/, function(e) {
    return e.replace(/\+/g, "%2b");
   }), n && (n = n.trim ? n.trim() : n.replace(/^\s*/, "").replace(/\s*$/, ""), n = n.replace(/"/g, "quot;").replace(/\(/g, "&#40;").replace(/\)/g, "&#41;").replace(/</g, "&lt;").replace(/>/g, "&gt;")), 
   n ? t + ' "' + n + '"' : t;
  });
 }
 var l = {}, c = {}, u = {}, d = window.document, p = window.RegExp, f = window.navigator, h = {
  lineLength: 72
 }, g = {
  isIE: /msie/.test(f.userAgent.toLowerCase()),
  isIE_5or6: /msie 6/.test(f.userAgent.toLowerCase()) || /msie 5/.test(f.userAgent.toLowerCase()),
  isOpera: /opera/.test(f.userAgent.toLowerCase())
 }, m = {
  bold: "Strong <strong> Ctrl+B",
  boldexample: "strong text",
  italic: "Emphasis <em> Ctrl+I",
  italicexample: "emphasized text",
  link: "Hyperlink <a> Ctrl+L",
  linkdescription: "enter link description here",
  linkdialog: '<p><b>Insert Hyperlink</b></p><p>http://example.com/ "optional title"</p>',
  quote: "Blockquote <blockquote> Ctrl+Q",
  quoteexample: "Blockquote",
  code: "Code Sample <pre><code> Ctrl+K",
  codeexample: "enter code here",
  image: "Image <img> Ctrl+G",
  imagedescription: "enter image description here",
  imagedialog: "<p><b>Insert Image</b></p><p>http://example.com/images/diagram.jpg \"optional title\"<br><br>Need <a href='http://www.google.com/search?q=free+image+hosting' target='_blank'>free image hosting?</a></p>",
  olist: "Numbered List <ol> Ctrl+O",
  ulist: "Bulleted List <ul> Ctrl+U",
  litem: "List item",
  heading: "Heading <h1>/<h2> Ctrl+H",
  headingexample: "Heading",
  hr: "Horizontal Rule <hr> Ctrl+R",
  undo: "Undo - Ctrl+Z",
  redo: "Redo - Ctrl+Y",
  redomac: "Redo - Ctrl+Shift+Z",
  help: "Markdown Editing Help"
 }, v = "http://", y = "http://";
 Markdown.Editor = function(e, i, a) {
  a = a || {}, "function" == typeof a.handler && (a = {
   helpButton: a
  }), a.strings = a.strings || {}, a.helpButton && (a.strings.help = a.strings.help || a.helpButton.title);
  var l = function(e) {
   return a.strings[e] || m[e];
  };
  i = i || "";
  var c = this.hooks = new Markdown.HookCollection();
  c.addNoop("onPreviewRefresh"), c.addNoop("postBlockquoteCreation"), c.addFalse("insertImageDialog"), 
  c.addFalse("insertLinkDialog"), this.getConverter = function() {
   return e;
  };
  var u, p, f = this;
  this.run = function(h) {
   if (!u) {
    u = new t(i);
    var g, m = new s(c, l), v = new o(e, u, function() {
     c.onPreviewRefresh();
    }, h);
    return /\?noundo/.test(d.location.href) || (p = new n(function() {
     v.refresh(), g && g.setUndoRedoButtonStates();
    }, u), this.textOperation = function(e) {
     p.setCommandMode(), e(), f.refreshPreview();
    }), g = new r(i, u, p, v, m, a.helpButton, l), g.setUndoRedoButtonStates(), f.refreshPreview = function() {
     v.refresh(!0);
    }, p;
   }
  };
 }, e.prototype.findTags = function(e, t) {
  var n, i = this;
  e && (n = l.extendRegExp(e, "", "$"), this.before = this.before.replace(n, function(e) {
   return i.startTag = i.startTag + e, "";
  }), n = l.extendRegExp(e, "^", ""), this.selection = this.selection.replace(n, function(e) {
   return i.startTag = i.startTag + e, "";
  })), t && (n = l.extendRegExp(t, "", "$"), this.selection = this.selection.replace(n, function(e) {
   return i.endTag = e + i.endTag, "";
  }), n = l.extendRegExp(t, "^", ""), this.after = this.after.replace(n, function(e) {
   return i.endTag = e + i.endTag, "";
  }));
 }, e.prototype.trimWhitespace = function(e) {
  var t, n, i = this;
  e ? t = n = "" : (t = function(e) {
   return i.before += e, "";
  }, n = function(e) {
   return i.after = e + i.after, "";
  }), this.selection = this.selection.replace(/^(\s*)/, t).replace(/(\s*)$/, n);
 }, e.prototype.skipLines = function(e, t, n) {
  void 0 === e && (e = 1), void 0 === t && (t = 1), e++, t++;
  var i, o;
  if (navigator.userAgent.match(/Chrome/) && "X".match(/()./), this.selection = this.selection.replace(/(^\n*)/, ""), 
  this.startTag = this.startTag + p.$1, this.selection = this.selection.replace(/(\n*$)/, ""), 
  this.endTag = this.endTag + p.$1, this.startTag = this.startTag.replace(/(^\n*)/, ""), 
  this.before = this.before + p.$1, this.endTag = this.endTag.replace(/(\n*$)/, ""), 
  this.after = this.after + p.$1, this.before) {
   for (i = o = ""; e--; ) i += "\\n?", o += "\n";
   n && (i = "\\n*"), this.before = this.before.replace(new p(i + "$", ""), o);
  }
  if (this.after) {
   for (i = o = ""; t--; ) i += "\\n?", o += "\n";
   n && (i = "\\n*"), this.after = this.after.replace(new p(i, ""), o);
  }
 }, l.isVisible = function(e) {
  return window.getComputedStyle ? "none" !== window.getComputedStyle(e, null).getPropertyValue("display") : e.currentStyle ? "none" !== e.currentStyle.display : void 0;
 }, l.addEvent = function(e, t, n) {
  e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener(t, n, !1);
 }, l.removeEvent = function(e, t, n) {
  e.detachEvent ? e.detachEvent("on" + t, n) : e.removeEventListener(t, n, !1);
 }, l.fixEolChars = function(e) {
  return e = e.replace(/\r\n/g, "\n"), e = e.replace(/\r/g, "\n");
 }, l.extendRegExp = function(e, t, n) {
  (null === t || void 0 === t) && (t = ""), (null === n || void 0 === n) && (n = "");
  var i, o = "" + e;
  return o = o.replace(/\/([gim]*)$/, function(e, t) {
   return i = t, "";
  }), o = o.replace(/(^\/|\/$)/g, ""), o = t + o + n, new p(o, i);
 }, c.getTop = function(e, t) {
  var n = e.offsetTop;
  if (!t) for (;e = e.offsetParent; ) n += e.offsetTop;
  return n;
 }, c.getHeight = function(e) {
  return e.offsetHeight || e.scrollHeight;
 }, c.getWidth = function(e) {
  return e.offsetWidth || e.scrollWidth;
 }, c.getPageSize = function() {
  var e, t, n, i;
  self.innerHeight && self.scrollMaxY ? (e = d.body.scrollWidth, t = self.innerHeight + self.scrollMaxY) : d.body.scrollHeight > d.body.offsetHeight ? (e = d.body.scrollWidth, 
  t = d.body.scrollHeight) : (e = d.body.offsetWidth, t = d.body.offsetHeight), self.innerHeight ? (n = self.innerWidth, 
  i = self.innerHeight) : d.documentElement && d.documentElement.clientHeight ? (n = d.documentElement.clientWidth, 
  i = d.documentElement.clientHeight) : d.body && (n = d.body.clientWidth, i = d.body.clientHeight);
  var o = Math.max(e, n), r = Math.max(t, i);
  return [ o, r, n, i ];
 }, u.createBackground = function() {
  var e = d.createElement("div"), t = e.style;
  e.className = "wmd-prompt-background", t.position = "absolute", t.top = "0", t.zIndex = "1000", 
  g.isIE ? t.filter = "alpha(opacity=50)" : t.opacity = "0.5";
  var n = c.getPageSize();
  return t.height = n[1] + "px", g.isIE ? (t.left = d.documentElement.scrollLeft, 
  t.width = d.documentElement.clientWidth) : (t.left = "0", t.width = "100%"), d.body.appendChild(e), 
  e;
 }, u.prompt = function(e, t, n) {
  var i, o;
  void 0 === t && (t = "");
  var r = function(e) {
   var t = e.charCode || e.keyCode;
   27 === t && s(!0);
  }, s = function(e) {
   l.removeEvent(d.body, "keydown", r);
   var t = o.value;
   return e ? t = null : (t = t.replace(/^http:\/\/(https?|ftp):\/\//, "$1://"), /^(?:https?|ftp):\/\//.test(t) || (t = "http://" + t)), 
   i.parentNode.removeChild(i), n(t), !1;
  }, a = function() {
   i = d.createElement("div"), i.className = "wmd-prompt-dialog", i.style.padding = "10px;", 
   i.style.position = "fixed", i.style.width = "400px", i.style.zIndex = "1001";
   var n = d.createElement("div");
   n.innerHTML = e, n.style.padding = "5px", i.appendChild(n);
   var a = d.createElement("form"), u = a.style;
   a.onsubmit = function() {
    return s(!1);
   }, u.padding = "0", u.margin = "0", u.cssFloat = "left", u.width = "100%", u.textAlign = "center", 
   u.position = "relative", i.appendChild(a), o = d.createElement("input"), o.type = "text", 
   o.value = t, u = o.style, u.display = "block", u.width = "80%", u.marginLeft = u.marginRight = "auto", 
   a.appendChild(o);
   var p = d.createElement("input");
   p.type = "button", p.onclick = function() {
    return s(!1);
   }, p.value = "OK", u = p.style, u.margin = "10px", u.display = "inline", u.width = "7em";
   var f = d.createElement("input");
   f.type = "button", f.onclick = function() {
    return s(!0);
   }, f.value = "Cancel", u = f.style, u.margin = "10px", u.display = "inline", u.width = "7em", 
   a.appendChild(p), a.appendChild(f), l.addEvent(d.body, "keydown", r), i.style.top = "50%", 
   i.style.left = "50%", i.style.display = "block", g.isIE_5or6 && (i.style.position = "absolute", 
   i.style.top = d.documentElement.scrollTop + 200 + "px", i.style.left = "50%"), d.body.appendChild(i), 
   i.style.marginTop = -(c.getHeight(i) / 2) + "px", i.style.marginLeft = -(c.getWidth(i) / 2) + "px";
  };
  setTimeout(function() {
   a();
   var e = t.length;
   if (void 0 !== o.selectionStart) o.selectionStart = 0, o.selectionEnd = e; else if (o.createTextRange) {
    var n = o.createTextRange();
    n.collapse(!1), n.moveStart("character", -e), n.moveEnd("character", e), n.select();
   }
   o.focus();
  }, 0);
 };
 var b = s.prototype;
 b.prefixes = "(?:\\s{4,}|\\s*>|\\s*-\\s+|\\s*\\d+\\.|=|\\+|-|_|\\*|#|\\s*\\[[^\n]]+\\]:)", 
 b.unwrap = function(e) {
  var t = new p("([^\\n])\\n(?!(\\n|" + this.prefixes + "))", "g");
  e.selection = e.selection.replace(t, "$1 $2");
 }, b.wrap = function(e, t) {
  this.unwrap(e);
  var n = new p("(.{1," + t + "})( +|$\\n?)", "gm"), i = this;
  e.selection = e.selection.replace(n, function(e, t) {
   return new p("^" + i.prefixes, "").test(e) ? e : t + "\n";
  }), e.selection = e.selection.replace(/\s+$/, "");
 }, b.doBold = function(e, t) {
  return this.doBorI(e, t, 2, this.getString("boldexample"));
 }, b.doItalic = function(e, t) {
  return this.doBorI(e, t, 1, this.getString("italicexample"));
 }, b.doBorI = function(e, t, n, i) {
  e.trimWhitespace(), e.selection = e.selection.replace(/\n{2,}/g, "\n");
  var o = /(\**$)/.exec(e.before)[0], r = /(^\**)/.exec(e.after)[0], s = Math.min(o.length, r.length);
  if (s >= n && (2 != s || 1 != n)) e.before = e.before.replace(p("[*]{" + n + "}$", ""), ""), 
  e.after = e.after.replace(p("^[*]{" + n + "}", ""), ""); else if (!e.selection && r) {
   e.after = e.after.replace(/^([*_]*)/, ""), e.before = e.before.replace(/(\s?)$/, "");
   var a = p.$1;
   e.before = e.before + r + a;
  } else {
   e.selection || r || (e.selection = i);
   var l = 1 >= n ? "*" : "**";
   e.before = e.before + l, e.after = l + e.after;
  }
 }, b.stripLinkDefs = function(e, t) {
  return e = e.replace(/^[ ]{0,3}\[(\d+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|$)/gm, function(e, n, i, o, r) {
   return t[n] = e.replace(/\s*$/, ""), o ? (t[n] = e.replace(/["(](.+?)[")]$/, ""), 
   o + r) : "";
  });
 }, b.addLinkDef = function(e, t) {
  var n = 0, i = {};
  e.before = this.stripLinkDefs(e.before, i), e.selection = this.stripLinkDefs(e.selection, i), 
  e.after = this.stripLinkDefs(e.after, i);
  var o = "", r = /(\[)((?:\[[^\]]*\]|[^\[\]])*)(\][ ]?(?:\n[ ]*)?\[)(\d+)(\])/g, s = function(e) {
   n++, e = e.replace(/^[ ]{0,3}\[(\d+)\]:/, "  [" + n + "]:"), o += "\n" + e;
  }, a = function(e, t, o, l, c, u) {
   return o = o.replace(r, a), i[c] ? (s(i[c]), t + o + l + n + u) : e;
  };
  e.before = e.before.replace(r, a), t ? s(t) : e.selection = e.selection.replace(r, a);
  var l = n;
  return e.after = e.after.replace(r, a), e.after && (e.after = e.after.replace(/\n*$/, "")), 
  e.after || (e.selection = e.selection.replace(/\n*$/, "")), e.after += "\n\n" + o, 
  l;
 }, b.doLinkOrImage = function(e, t, n) {
  e.trimWhitespace(), e.findTags(/\s*!?\[/, /\][ ]?(?:\n[ ]*)?(\[.*?\])?/);
  var i;
  if (!(e.endTag.length > 1 && e.startTag.length > 0)) {
   if (e.selection = e.startTag + e.selection + e.endTag, e.startTag = e.endTag = "", 
   /\n\n/.test(e.selection)) return this.addLinkDef(e, null), void 0;
   var o = this, r = function(r) {
    if (i.parentNode.removeChild(i), null !== r) {
     e.selection = (" " + e.selection).replace(/([^\\](?:\\\\)*)(?=[[\]])/g, "$1\\").substr(1);
     var s = " [999]: " + a(r), l = o.addLinkDef(e, s);
     e.startTag = n ? "![" : "[", e.endTag = "][" + l + "]", e.selection || (e.selection = n ? o.getString("imagedescription") : o.getString("linkdescription"));
    }
    t();
   };
   return i = u.createBackground(), n ? this.hooks.insertImageDialog(r) || u.prompt(this.getString("imagedialog"), v, r) : this.hooks.insertLinkDialog(r) || u.prompt(this.getString("linkdialog"), y, r), 
   !0;
  }
  e.startTag = e.startTag.replace(/!?\[/, ""), e.endTag = "", this.addLinkDef(e, null);
 }, b.doAutoindent = function(e) {
  var t = this, n = !1;
  e.before = e.before.replace(/(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]*\n$/, "\n\n"), e.before = e.before.replace(/(\n|^)[ ]{0,3}>[ \t]*\n$/, "\n\n"), 
  e.before = e.before.replace(/(\n|^)[ \t]+\n$/, "\n\n"), e.selection || /^[ \t]*(?:\n|$)/.test(e.after) || (e.after = e.after.replace(/^[^\n]*/, function(t) {
   return e.selection = t, "";
  }), n = !0), /(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]+.*\n$/.test(e.before) && t.doList && t.doList(e), 
  /(\n|^)[ ]{0,3}>[ \t]+.*\n$/.test(e.before) && t.doBlockquote && t.doBlockquote(e), 
  /(\n|^)(\t|[ ]{4,}).*\n$/.test(e.before) && t.doCode && t.doCode(e), n && (e.after = e.selection + e.after, 
  e.selection = "");
 }, b.doBlockquote = function(e) {
  e.selection = e.selection.replace(/^(\n*)([^\r]+?)(\n*)$/, function(t, n, i, o) {
   return e.before += n, e.after = o + e.after, i;
  }), e.before = e.before.replace(/(>[ \t]*)$/, function(t, n) {
   return e.selection = n + e.selection, "";
  }), e.selection = e.selection.replace(/^(\s|>)+$/, ""), e.selection = e.selection || this.getString("quoteexample");
  var t, n = "", i = "";
  if (e.before) {
   for (var o = e.before.replace(/\n$/, "").split("\n"), r = !1, s = 0; o.length > s; s++) {
    var a = !1;
    t = o[s], r = r && t.length > 0, /^>/.test(t) ? (a = !0, !r && t.length > 1 && (r = !0)) : a = /^[ \t]*$/.test(t) ? !0 : r, 
    a ? n += t + "\n" : (i += n + t, n = "\n");
   }
   /(^|\n)>/.test(n) || (i += n, n = "");
  }
  e.startTag = n, e.before = i, e.after && (e.after = e.after.replace(/^\n?/, "\n")), 
  e.after = e.after.replace(/^(((\n|^)(\n[ \t]*)*>(.+\n)*.*)+(\n[ \t]*)*)/, function(t) {
   return e.endTag = t, "";
  });
  var l = function(t) {
   var n = t ? "> " : "";
   e.startTag && (e.startTag = e.startTag.replace(/\n((>|\s)*)\n$/, function(e, t) {
    return "\n" + t.replace(/^[ ]{0,3}>?[ \t]*$/gm, n) + "\n";
   })), e.endTag && (e.endTag = e.endTag.replace(/^\n((>|\s)*)\n/, function(e, t) {
    return "\n" + t.replace(/^[ ]{0,3}>?[ \t]*$/gm, n) + "\n";
   }));
  };
  /^(?![ ]{0,3}>)/m.test(e.selection) ? (this.wrap(e, h.lineLength - 2), e.selection = e.selection.replace(/^/gm, "> "), 
  l(!0), e.skipLines()) : (e.selection = e.selection.replace(/^[ ]{0,3}> ?/gm, ""), 
  this.unwrap(e), l(!1), !/^(\n|^)[ ]{0,3}>/.test(e.selection) && e.startTag && (e.startTag = e.startTag.replace(/\n{0,2}$/, "\n\n")), 
  !/(\n|^)[ ]{0,3}>.*$/.test(e.selection) && e.endTag && (e.endTag = e.endTag.replace(/^\n{0,2}/, "\n\n"))), 
  e.selection = this.hooks.postBlockquoteCreation(e.selection), /\n/.test(e.selection) || (e.selection = e.selection.replace(/^(> *)/, function(t, n) {
   return e.startTag += n, "";
  }));
 }, b.doCode = function(e) {
  var t = /\S[ ]*$/.test(e.before), n = /^[ ]*\S/.test(e.after);
  if (!n && !t || /\n/.test(e.selection)) {
   e.before = e.before.replace(/[ ]{4}$/, function(t) {
    return e.selection = t + e.selection, "";
   });
   var i = 1, o = 1;
   /(\n|^)(\t|[ ]{4,}).*\n$/.test(e.before) && (i = 0), /^\n(\t|[ ]{4,})/.test(e.after) && (o = 0), 
   e.skipLines(i, o), e.selection ? /^[ ]{0,3}\S/m.test(e.selection) ? /\n/.test(e.selection) ? e.selection = e.selection.replace(/^/gm, "    ") : e.before += "    " : e.selection = e.selection.replace(/^(?:[ ]{4}|[ ]{0,3}\t)/gm, "") : (e.startTag = "    ", 
   e.selection = this.getString("codeexample"));
  } else e.trimWhitespace(), e.findTags(/`/, /`/), e.startTag || e.endTag ? e.endTag && !e.startTag ? (e.before += e.endTag, 
  e.endTag = "") : e.startTag = e.endTag = "" : (e.startTag = e.endTag = "`", e.selection || (e.selection = this.getString("codeexample")));
 }, b.doList = function(e, t, n) {
  var i = /(\n|^)(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*$/, o = /^\n*(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*/, r = "-", s = 1, a = function() {
   var e;
   return n ? (e = " " + s + ". ", s++) : e = " " + r + " ", e;
  }, l = function(e) {
   return void 0 === n && (n = /^\s*\d/.test(e)), e = e.replace(/^[ ]{0,3}([*+-]|\d+[.])\s/gm, function() {
    return a();
   });
  };
  if (e.findTags(/(\n|^)*[ ]{0,3}([*+-]|\d+[.])\s+/, null), !e.before || /\n$/.test(e.before) || /^\n/.test(e.startTag) || (e.before += e.startTag, 
  e.startTag = ""), e.startTag) {
   var c = /\d+[.]/.test(e.startTag);
   if (e.startTag = "", e.selection = e.selection.replace(/\n[ ]{4}/g, "\n"), this.unwrap(e), 
   e.skipLines(), c && (e.after = e.after.replace(o, l)), n == c) return;
  }
  var u = 1;
  e.before = e.before.replace(i, function(e) {
   return /^\s*([*+-])/.test(e) && (r = p.$1), u = /[^\n]\n\n[^\n]/.test(e) ? 1 : 0, 
   l(e);
  }), e.selection || (e.selection = this.getString("litem"));
  var d = a(), f = 1;
  e.after = e.after.replace(o, function(e) {
   return f = /[^\n]\n\n[^\n]/.test(e) ? 1 : 0, l(e);
  }), e.trimWhitespace(!0), e.skipLines(u, f, !0), e.startTag = d;
  var g = d.replace(/./g, " ");
  this.wrap(e, h.lineLength - g.length), e.selection = e.selection.replace(/\n/g, "\n" + g);
 }, b.doHeading = function(e) {
  if (e.selection = e.selection.replace(/\s+/g, " "), e.selection = e.selection.replace(/(^\s+|\s+$)/g, ""), 
  !e.selection) return e.startTag = "## ", e.selection = this.getString("headingexample"), 
  e.endTag = " ##", void 0;
  var t = 0;
  e.findTags(/#+[ ]*/, /[ ]*#+/), /#+/.test(e.startTag) && (t = p.lastMatch.length), 
  e.startTag = e.endTag = "", e.findTags(null, /\s?(-+|=+)/), /=+/.test(e.endTag) && (t = 1), 
  /-+/.test(e.endTag) && (t = 2), e.startTag = e.endTag = "", e.skipLines(1, 1);
  var n = 0 == t ? 2 : t - 1;
  if (n > 0) {
   var i = n >= 2 ? "-" : "=", o = e.selection.length;
   for (o > h.lineLength && (o = h.lineLength), e.endTag = "\n"; o--; ) e.endTag += i;
  }
 }, b.doHorizontalRule = function(e) {
  e.startTag = "----------\n", e.selection = "", e.skipLines(2, 1, !0);
 };
}(), define("libs/Markdown.Editor", function() {}), define("core", [ "jquery", "underscore", "utils", "settings", "extensionMgr", "mousetrap", "text!html/settingsTemplateTooltip.html", "storage", "config", "libs/bootstrap", "libs/layout", "libs/Markdown.Editor" ], function(e, t, n, i, o, r, s) {
 function a() {
  y = !0, b = !0, x = n.currentTime;
 }
 function l() {
  return b === !0 && n.currentTime - x > USER_IDLE_THRESHOLD && (b = !1), b && w;
 }
 function c() {
  if (y !== !1 && w !== !1) {
   void 0 === C && (C = n.randomString(), localStorage.frontWindowId = C);
   var t = localStorage.frontWindowId;
   t != C && (w = !1, void 0 !== m && clearInterval(m), e(".modal").modal("hide"), 
   e("#modal-non-unique").modal({
    backdrop: "static",
    keyboard: !1
   }));
  }
 }
 function u() {
  g.isOffline === !0 && (g.isOffline = !1, o.onOfflineChanged(!1));
 }
 function d() {
  g.isOffline === !0 && navigator.onLine === !0 && n.currentTime > k + CHECK_ONLINE_PERIOD && (k = n.currentTime, 
  e.ajax({
   url: "//www.google.com/jsapi",
   timeout: AJAX_TIMEOUT,
   dataType: "script"
  }).done(function() {
   u();
  }));
 }
 function p() {
  n.setInputRadio("radio-layout-orientation", i.layoutOrientation), n.setInputValue("#input-settings-theme", localStorage.theme), 
  n.setInputChecked("#input-settings-lazy-rendering", i.lazyRendering), n.setInputValue("#input-settings-editor-font-size", i.editorFontSize), 
  n.setInputValue("#textarea-settings-default-content", i.defaultContent), n.setInputValue("#input-settings-publish-commit-msg", i.commitMsg), 
  n.setInputValue("#textarea-settings-publish-template", i.template), n.setInputValue("#input-settings-ssh-proxy", i.sshProxy), 
  o.onLoadSettings();
 }
 function f(t) {
  var r = {};
  r.layoutOrientation = n.getInputRadio("radio-layout-orientation");
  var s = n.getInputValue("#input-settings-theme");
  r.lazyRendering = n.getInputChecked("#input-settings-lazy-rendering"), r.editorFontSize = n.getInputIntValue("#input-settings-editor-font-size", t, 1, 99), 
  r.defaultContent = n.getInputValue("#textarea-settings-default-content"), r.commitMsg = n.getInputTextValue("#input-settings-publish-commit-msg", t), 
  r.template = n.getInputTextValue("#textarea-settings-publish-template", t), r.sshProxy = n.checkUrl(n.getInputTextValue("#input-settings-ssh-proxy", t), !0), 
  r.extensionSettings = {}, o.onSaveSettings(r.extensionSettings, t), t.isPropagationStopped() || (e.extend(i, r), 
  localStorage.settings = JSON.stringify(i), localStorage.theme = s);
 }
 function h() {
  $ === !0 && (t.each(I, function(e) {
   e();
  }), I = []);
 }
 var g = {}, m = void 0, v = [ o.onPeriodicRun ];
 g.addPeriodicCallback = function(e) {
  v.push(e);
 };
 var y = !1, b = !1, w = !0, x = 0, C = void 0;
 g.isOffline = !1;
 var k = n.currentTime;
 g.setOffline = function() {
  k = n.currentTime, g.isOffline === !1 && (g.isOffline = !0, o.onOfflineChanged(!0));
 };
 var S = void 0;
 g.createLayout = function() {
  if (viewerMode !== !0) {
   var t = {
    closable: !0,
    resizable: !1,
    slidable: !1,
    livePaneResizing: !0,
    enableCursorHotkey: !1,
    spacing_open: 15,
    spacing_closed: 15,
    togglerLength_open: 90,
    togglerLength_closed: 90,
    stateManagement__enabled: !1,
    center__minWidth: 200,
    center__minHeight: 200
   };
   o.onLayoutConfigure(t), "horizontal" == i.layoutOrientation ? (e(".ui-layout-south").remove(), 
   e(".preview-container").html('<div id="wmd-preview"></div>'), S = e("body").layout(e.extend(t, {
    east__resizable: !0,
    east__size: .5,
    east__minSize: 200
   }))) : "vertical" == i.layoutOrientation && (e(".ui-layout-east").remove(), e(".preview-container").html('<div id="wmd-preview"></div>'), 
   S = e("body").layout(e.extend(t, {
    south__resizable: !0,
    south__size: .5,
    south__minSize: 200
   }))), e(".ui-layout-toggler-north").addClass("btn").append(e("<b>").addClass("caret")), 
   e(".ui-layout-toggler-south").addClass("btn").append(e("<b>").addClass("caret")), 
   e(".ui-layout-toggler-east").addClass("btn").append(e("<b>").addClass("caret")), 
   e("#navbar").click(function() {
    S.allowOverflow("north");
   }), o.onLayoutCreated(S);
  }
 };
 var T = void 0, _ = void 0, E = void 0, P = void 0;
 g.createEditor = function(r) {
  function s() {
   var e = l.val();
   void 0 !== E && E != e && (_.content = e), E = e;
  }
  _ = r, E = void 0;
  var a = _.content, l = e("#wmd-input");
  if (l.val(a), void 0 !== T) return P.reinit(a, _.editorStart, _.editorEnd, _.editorScrollTop), 
  T.refreshPreview(), void 0;
  var c = e(".preview-container");
  l.scroll(function() {
   void 0 !== E && (_.editorScrollTop = e(this).scrollTop());
  }), l.bind("keyup mouseup", function() {
   void 0 !== E && (_.editorStart = this.selectionStart, _.editorEnd = this.selectionEnd);
  }), c.scroll(function() {
   void 0 !== E && (_.previewScrollTop = e(this).scrollTop());
  });
  var u = new Markdown.Converter();
  T = new Markdown.Editor(u), T.hooks.set("insertLinkDialog", function(t) {
   return g.insertLinkCallback = t, n.resetModalInputs(), e("#modal-insert-link").modal(), 
   !0;
  }), T.hooks.set("insertImageDialog", function(t) {
   return g.insertLinkCallback = t, n.resetModalInputs(), e("#modal-insert-image").modal(), 
   !0;
  });
  var d;
  d = i.lazyRendering === !0 ? function(e) {
   var n = t.debounce(e, 500);
   return function() {
    void 0 === E ? (e(), l.scrollTop(_.editorScrollTop), c.scrollTop(_.previewScrollTop)) : n(), 
    s();
   };
  } : function(e) {
   return function() {
    e(), void 0 === E && c.scrollTop(_.previewScrollTop), s();
   };
  }, o.onEditorConfigure(T), T.hooks.chain("onPreviewRefresh", o.onAsyncPreview), 
  P = T.run(d), P.reinit(a, _.editorStart, _.editorEnd, _.editorScrollTop), e(".wmd-button-row").addClass("btn-group").find("li:not(.wmd-spacer)").addClass("btn").css("left", 0).find("span").hide(), 
  e("#wmd-bold-button").append(e("<i>").addClass("icon-bold")), e("#wmd-italic-button").append(e("<i>").addClass("icon-italic")), 
  e("#wmd-link-button").append(e("<i>").addClass("icon-globe")), e("#wmd-quote-button").append(e("<i>").addClass("icon-indent-left")), 
  e("#wmd-code-button").append(e("<i>").addClass("icon-code")), e("#wmd-image-button").append(e("<i>").addClass("icon-picture")), 
  e("#wmd-olist-button").append(e("<i>").addClass("icon-numbered-list")), e("#wmd-ulist-button").append(e("<i>").addClass("icon-list")), 
  e("#wmd-heading-button").append(e("<i>").addClass("icon-text-height")), e("#wmd-hr-button").append(e("<i>").addClass("icon-hr")), 
  e("#wmd-undo-button").append(e("<i>").addClass("icon-undo")), e("#wmd-redo-button").append(e("<i>").addClass("icon-share-alt"));
 };
 var I = [];
 g.onReady = function(e) {
  I.push(e), h();
 };
 var $ = !1;
 return g.setReady = function() {
  $ = !0, h();
 }, g.onReady(o.onReady), g.onReady(function() {
  t.each(THEME_LIST, function(t, n) {
   e("#input-settings-theme").append(e('<option value="' + n + '">' + t + "</option>"));
  }), e(window).on("offline", g.setOffline), e(window).on("online", u), navigator.onLine === !1 && g.setOffline(), 
  e(document).mousemove(a).keypress(a), e(".dropdown-submenu > a").click(function(e) {
   e.stopPropagation();
  });
  var o = void 0;
  e(".modal").on("shown", function() {
   var n = e(this).attr("id");
   o != n && (o = n, t.defer(function(e) {
    e.find("input:enabled:visible:first").focus();
   }, e(this)));
  }).on("hidden", function() {
   var t = e(this).attr("id");
   o == t && e(this).is(":hidden") && (o = void 0, e("#wmd-input").focus());
  }).keyup(function(t) {
   13 != t.which || e(t.target).is("textarea") || e(this).find(".modal-footer a:last").click();
  }), r.stopCallback = function(t, n) {
   return o || e(n).is("input, select, textarea:not(#wmd-input)");
  }, e(".action-insert-link").click(function(t) {
   var i = n.getInputTextValue(e("#input-insert-link"), t);
   void 0 !== i && (g.insertLinkCallback(i), g.insertLinkCallback = void 0);
  }), e(".action-insert-image").click(function(t) {
   var i = n.getInputTextValue(e("#input-insert-image"), t);
   void 0 !== i && (g.insertLinkCallback(i), g.insertLinkCallback = void 0);
  }), e("#modal-insert-link, #modal-insert-image").on("hidden", function() {
   void 0 !== g.insertLinkCallback && (g.insertLinkCallback(null), g.insertLinkCallback = void 0);
  }), e(".action-load-settings").click(function() {
   p();
  }), e(".action-apply-settings").click(function(e) {
   f(e), e.isPropagationStopped() || window.location.reload();
  }), e(".action-default-settings").click(function() {
   localStorage.removeItem("settings"), localStorage.removeItem("theme"), window.location.reload();
  }), e(".action-app-reset").click(function() {
   localStorage.clear(), window.location.reload();
  }), e("#menu-bar, .ui-layout-center, .ui-layout-east, .ui-layout-south").removeClass("hide"), 
  g.createLayout(), e("#wmd-input, #md-section-helper").css({
   "font-size": i.editorFontSize + "px",
   "line-height": Math.round(i.editorFontSize * (20 / 14)) + "px"
  }), e("#wmd-input").keydown(function(t) {
   if (9 === t.keyCode) {
    var n = e(this).val(), i = this.selectionStart, o = this.selectionEnd;
    if (void 0 === i || void 0 === o) return;
    e(this).val(n.substring(0, i) + "	" + n.substring(o)), this.selectionStart = this.selectionEnd = i + 1, 
    t.preventDefault();
   }
  }), e(".tooltip-lazy-rendering").tooltip({
   container: "#modal-settings",
   placement: "right",
   trigger: "hover",
   title: "Disable preview rendering while typing in order to offload CPU. Refresh preview after 500 ms of inactivity."
  }), e(".tooltip-default-content").tooltip({
   html: !0,
   container: "#modal-settings",
   placement: "right",
   trigger: "hover",
   title: "Thanks for supporting StackEdit by adding a backlink in your documents!"
  }), e(".tooltip-template").tooltip({
   html: !0,
   container: "#modal-settings",
   placement: "right",
   trigger: "manual",
   title: s
  }).click(function(t) {
   e(this).tooltip("show"), e(document).on("click.tooltip-template", function() {
    e(".tooltip-template").tooltip("hide"), e(document).off("click.tooltip-template");
   }), t.stopPropagation();
  }), e(".action-reset-input").click(function() {
   n.resetModalInputs();
  }), m = window.setInterval(function() {
   n.updateCurrentTime(), c(), (l() === !0 || viewerMode === !0) && (t.each(v, function(e) {
    e();
   }), d());
  }, 1e3);
 }), g;
}), define("text!../WELCOME.md", [], function() {
 return '\r\nWelcome to StackEdit!	{#welcome}\r\n=====================\r\n\r\n\r\nHello, I am your first Markdown document within **StackEdit**. Don\'t delete me, I can be helpful. I can be recovered anyway in the `Utils` tab of the <i class="icon-cog"></i> `Settings` dialog.\r\n\r\n----------\r\n\r\n\r\nDocuments\r\n---------\r\n\r\n**StackEdit** stores your documents in the browser local storage, which means all your documents are automatically saved locally and are accessible offline.\r\n\r\n#### <i class="icon-file"></i> Create a document\r\n\r\nYou can create a new document by clicking the <i class="icon-file"></i> button in the navigation bar. This will switch from the current document to the new one.\r\n\r\n#### <i class="icon-folder-open"></i> Switch to another document\r\n\r\nYou can list all your local documents and switch from one to another by clicking the <i class="icon-folder-open"></i> button in the navigation bar.\r\n\r\n#### <i class="icon-pencil"></i> Rename a document\r\n\r\nYou can rename the current document by clicking the document title in the navigation bar.\r\n\r\n#### <i class="icon-trash"></i> Delete a document\r\n\r\nYou can delete the current document by clicking the <i class="icon-trash"></i> button in the navigation bar.\r\n\r\n----------\r\n\r\n\r\nSynchronization\r\n---------------\r\n\r\n**StackEdit** can be combined with **Google Drive** and **Dropbox** to have your documents centralized in the *Cloud*. The synchronization mechanism will take care of uploading your modifications or downloading the latest version of your documents.\r\n\r\n#### <i class="icon-download"></i> Import a document\r\n\r\nYou can import a document from the *Cloud* by going to the <i class="icon-gdrive"></i> `Google Drive` or the <i class="icon-dropbox"></i> `Dropbox` sub-menu and by clicking `Import from...`. Once imported, your document will be automatically synchronized with the **Google Drive** / **Dropbox** file.\r\n\r\n#### <i class="icon-upload"></i> Export a document\r\n\r\nYou can export any document by going to the <i class="icon-gdrive"></i> `Google Drive` or the <i class="icon-dropbox"></i> `Dropbox` sub-menu and by clicking `Export to...`. Even if your document is already synchronized with **Google Drive** or **Dropbox**, you can export it to a another location. **StackEdit** can synchronize one document with multiple locations.\r\n\r\n#### <i class="icon-refresh"></i> Synchronize a document\r\n\r\nOnce your document is linked to a **Google Drive** or a **Dropbox** file, **StackEdit** will periodically (every 3 minutes) synchronize it by downloading/uploading any modification. Any conflict will be detected, and a local copy of your document will be created as a backup if necessary.\r\n\r\nIf you just have modified your document and you want to force the synchronization, click the <i class="icon-refresh"></i> button in the navigation bar.\r\n\r\n> **NOTE:** The <i class="icon-refresh"></i> button is disabled when:\r\n> \r\n> - you are offline,\r\n> - or the document is not synchronized with any location,\r\n> - or the document has not been modified since the last synchronization.\r\n\r\n#### <i class="icon-refresh"></i> Manage document synchronization\r\n\r\nSince one document can be synchronized with multiple locations, you can list and manage synchronized locations by clicking <i class="icon-refresh"></i> `Manage synchronization` in the <i class="icon-stackedit"></i> menu. This will open a dialog box allowing you to add or remove synchronization links that are associated to your document.\r\n\r\n> **NOTE:** If you delete the file from **Google Drive** or from **Dropbox**, the document will no longer be synchronized with that location.\r\n\r\n----------\r\n\r\n\r\nPublication\r\n-----------\r\n\r\nOnce you are happy with your document, you can publish it on different websites directly from **StackEdit**. As for now, **StackEdit** can publish on **Blogger**, **Dropbox**, **Gist**, **GitHub**, **Google Drive**, **Tumblr**, **WordPress** and on any SSH server.\r\n\r\n#### <i class="icon-share"></i> Publish a document\r\n\r\nYou can publish your document by going to the <i class="icon-share"></i> `Publish on` sub-menu and by choosing a website. In the dialog box, you can choose the publication format:\r\n\r\n- Markdown, to publish the Markdown text on a website that can interpret it (**GitHub** for instance),\r\n- HTML, to publish the document converted into HTML (on a blog for instance),\r\n- Template, to have a full control of the output.\r\n\r\n> **NOTE:** The default template is a simple webpage that wraps your document in HTML format. You can customize it in the `Publish` tab of the <i class="icon-cog"></i> `Settings` dialog.\r\n\r\n#### <i class="icon-share"></i> Update a publication\r\n\r\nAfter publishing, **StackEdit** will keep your document linked to that publish location so that you can update it easily. Once you have modified your document and you want to update your publication, click on the <i class="icon-share"></i> button in the navigation bar.\r\n\r\n> **NOTE:** The <i class="icon-share"></i> button is disabled when:\r\n> \r\n> - you are offline,\r\n> - or the document has not been published anywhere.\r\n\r\n#### <i class="icon-share"></i> Manage document publication\r\n\r\nSince one document can be published on multiple locations, you can list and manage publish locations by clicking <i class="icon-share"></i> `Manage publication` in the <i class="icon-stackedit"></i> menu. This will open a dialog box allowing you to remove publication links that are associated to your document.\r\n\r\n> **NOTE:** In some cases, if you remove the file from the website or the post from the blog, the document will no longer be published on that location.\r\n\r\n----------\r\n\r\n\r\nMarkdown Extra\r\n--------------\r\n\r\n**StackEdit** supports **Markdown Extra**, which extends **Markdown** syntax with some nice features.\r\n\r\n\r\n### Tables\r\n\r\n**Markdown Extra** has a special syntax for tables:\r\n\r\nItem      | Value\r\n--------- | -----\r\nComputer  | \\$1600\r\nPhone     | \\$12\r\nPipe      | \\$1\r\n\r\nYou can specify column alignment with one or two colons:\r\n\r\n| Item      |  Value | Qty  |\r\n| :-------- | ------:| :--: |\r\n| Computer  | \\$1600 |  5   |\r\n| Phone     |   \\$12 |  12  |\r\n| Pipe      |    \\$1 | 234  |\r\n\r\n\r\n### Definition Lists\r\n\r\n**Markdown Extra** has a special syntax for definition lists too:\r\n\r\nTerm 1\r\nTerm 2\r\n:   Definition A\r\n:   Definition B\r\n\r\nTerm 3\r\n\r\n:   Definition C\r\n\r\n:   Definition D\r\n\r\n	> part of definition D\r\n\r\n\r\n### Fenced code blocks\r\n\r\n**GitHub**\'s fenced code blocks are also supported with **Prettify** syntax highlighting:\r\n\r\n```\r\n// Foo\r\nvar bar = 0;\r\n```\r\n\r\n\r\n### Special Attributes\r\n\r\nWith **Markdown Extra**, you can specify `class` and `id` attributes on headers and fenced code blocks just like this:\r\n\r\n##### Header example {#my-header}\r\n\r\n``` {#my-id .my-class}\r\nvar foo = bar;\r\n```\r\n\r\nThen you can create cross-references like this: [beginning of the document](#welcome).\r\n\r\n\r\n### Table of content\r\n\r\nYou can insert a table of content using the marker `[TOC]`:\r\n\r\n[TOC]\r\n\r\n\r\n### MathJax\r\n \r\nYou can include **LaTex** expressions to render mathematical formulas using **MathJax**, as on [math.stackexchange.com][1]:\r\n\r\nThe *Gamma function* satisfying $\\Gamma(n) = (n-1)!\\quad\\forall\r\nn\\in\\mathbb N$ is via through the Euler integral\r\n\r\n$$\r\n\\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}dt\\,.\r\n$$\r\n\r\n\r\n> **NOTE:** You can find more information:\r\n>\r\n> - about **Markdown** syntax [here][2],\r\n> - about **Markdown Extra** extension [here][3],\r\n> - about **Prettify** syntax highlighting [here][4],\r\n> - about **Latex** mathematical expressions [here][5].\r\n\r\n----------\r\n\r\n\r\n  [1]: http://math.stackexchange.com/\r\n  [2]: http://daringfireball.net/projects/markdown/syntax "Markdown"\r\n  [3]: http://michelf.ca/projects/php-markdown/extra/ "Markdown Extra"\r\n  [4]: https://code.google.com/p/google-code-prettify/\r\n  [5]: http://en.wikibooks.org/wiki/LaTeX/Mathematics';
}), define("fileMgr", [ "jquery", "underscore", "core", "utils", "settings", "extensionMgr", "fileSystem", "text!../WELCOME.md" ], function(e, t, n, i, o, r, s, a) {
 function l(e, t, n, i) {
  this.fileIndex = e, this._title = t, this._editorScrollTop = parseInt(localStorage[e + ".editorScrollTop"]) || 0, 
  this._editorStart = parseInt(localStorage[e + ".editorStart"]) || 0, this._editorEnd = parseInt(localStorage[e + ".editorEnd"]) || 0, 
  this._previewScrollTop = parseInt(localStorage[e + ".previewScrollTop"]) || 0, this._selectTime = parseInt(localStorage[e + ".selectTime"]) || 0, 
  this.syncLocations = n || {}, this.publishLocations = i || {}, Object.defineProperty(this, "title", {
   get: function() {
    return this._title;
   },
   set: function(e) {
    this._title = e, localStorage[this.fileIndex + ".title"] = e, r.onTitleChanged(this);
   }
  }), Object.defineProperty(this, "content", {
   get: function() {
    return localStorage[this.fileIndex + ".content"];
   },
   set: function(e) {
    localStorage[this.fileIndex + ".content"] = e, r.onContentChanged(this);
   }
  }), Object.defineProperty(this, "editorScrollTop", {
   get: function() {
    return this._editorScrollTop;
   },
   set: function(e) {
    this._editorScrollTop = e, localStorage[this.fileIndex + ".editorScrollTop"] = e;
   }
  }), Object.defineProperty(this, "editorStart", {
   get: function() {
    return this._editorStart;
   },
   set: function(e) {
    this._editorStart = e, localStorage[this.fileIndex + ".editorStart"] = e;
   }
  }), Object.defineProperty(this, "editorEnd", {
   get: function() {
    return this._editorEnd;
   },
   set: function(e) {
    this._editorEnd = e, localStorage[this.fileIndex + ".editorEnd"] = e;
   }
  }), Object.defineProperty(this, "previewScrollTop", {
   get: function() {
    return this._previewScrollTop;
   },
   set: function(e) {
    this._previewScrollTop = e, localStorage[this.fileIndex + ".previewScrollTop"] = e;
   }
  }), Object.defineProperty(this, "selectTime", {
   get: function() {
    return this._selectTime;
   },
   set: function(e) {
    this._selectTime = e, localStorage[this.fileIndex + ".selectTime"] = e;
   }
  });
 }
 var c = {};
 t.each(i.retrieveIndexArray("file.list"), function(e) {
  s[e] = new l(e, localStorage[e + ".title"]);
 });
 var u = void 0;
 return c.getCurrentFile = function() {
  return u;
 }, c.isCurrentFile = function(e) {
  return e === u;
 }, c.setCurrentFile = function(e) {
  u = e, void 0 === e ? localStorage.removeItem("file.current") : e.fileIndex != TEMPORARY_FILE_INDEX && (localStorage["file.current"] = e.fileIndex);
 }, c.selectFile = function(i) {
  if (i = i || c.getCurrentFile(), void 0 === i) {
   var o = t.size(s);
   if (0 === o) i = c.createFile(WELCOME_DOCUMENT_TITLE, a); else {
    var l = localStorage["file.current"];
    void 0 === l && (l = t.keys(s)[o - 1]), i = s[l];
   }
  }
  c.isCurrentFile(i) === !1 && (c.setCurrentFile(i), i.selectTime = new Date().getTime(), 
  r.onFileSelected(i), i.fileIndex == TEMPORARY_FILE_INDEX ? e(".action-edit-document").removeClass("hide") : e(".action-edit-document").addClass("hide")), 
  n.createEditor(i);
 }, c.createFile = function(e, n, a, c) {
  if (n = void 0 !== n ? n : o.defaultContent, !e) {
   e = DEFAULT_FILE_TITLE;
   for (var u = 2; t.some(s, function(t) {
    return t.title == e;
   }); ) e = DEFAULT_FILE_TITLE + u++;
  }
  var d = TEMPORARY_FILE_INDEX;
  if (!c) do d = "file." + i.randomString(); while (t.has(s, d));
  a = a || {};
  var p = t.reduce(a, function(e, t, n) {
   return e + n + ";";
  }, ";");
  localStorage[d + ".title"] = e, localStorage[d + ".content"] = n, localStorage[d + ".sync"] = p, 
  localStorage[d + ".publish"] = ";";
  var f = new l(d, e, a);
  return c || (i.appendIndexToArray("file.list", d), s[d] = f, r.onFileCreated(f)), 
  f;
 }, c.deleteFile = function(e) {
  e = e || c.getCurrentFile(), i.removeIndexFromArray("file.list", e.fileIndex), delete s[e.fileIndex], 
  c.isCurrentFile(e) === !0 && (c.setCurrentFile(), c.selectFile()), t.each(e.syncLocations, function(e) {
   c.removeSync(e);
  }), t.each(e.publishLocations, function(e) {
   c.removePublish(e);
  }), localStorage.removeItem(e.fileIndex + ".title"), localStorage.removeItem(e.fileIndex + ".content"), 
  localStorage.removeItem(e.fileIndex + ".sync"), localStorage.removeItem(e.fileIndex + ".publish"), 
  r.onFileDeleted(e);
 }, c.addSync = function(e, t) {
  i.appendIndexToArray(e.fileIndex + ".sync", t.syncIndex), e.syncLocations[t.syncIndex] = t, 
  r.onSyncExportSuccess(e, t);
 }, c.removeSync = function(e) {
  var t = c.getFileFromSyncIndex(e.syncIndex);
  void 0 !== t && (i.removeIndexFromArray(t.fileIndex + ".sync", e.syncIndex), delete t.syncLocations[e.syncIndex], 
  r.onSyncRemoved(t, e)), localStorage.removeItem(e.syncIndex);
 }, c.getFileFromSyncIndex = function(e) {
  return t.find(s, function(n) {
   return t.has(n.syncLocations, e);
  });
 }, c.getSyncAttributes = function(e) {
  var t = c.getFileFromSyncIndex(e);
  return t && t.syncLocations[e];
 }, c.hasSync = function(e) {
  return t.some(s, function(n) {
   return t.some(n.syncLocations, function(t) {
    return t.provider === e;
   });
  });
 }, c.addPublish = function(e, t) {
  i.appendIndexToArray(e.fileIndex + ".publish", t.publishIndex), e.publishLocations[t.publishIndex] = t, 
  r.onNewPublishSuccess(e, t);
 }, c.removePublish = function(e) {
  var t = c.getFileFromPublishIndex(e.publishIndex);
  void 0 !== t && (i.removeIndexFromArray(t.fileIndex + ".publish", e.publishIndex), 
  delete t.publishLocations[e.publishIndex], r.onPublishRemoved(t, e)), localStorage.removeItem(e.publishIndex);
 }, c.getFileFromPublishIndex = function(e) {
  return t.find(s, function(n) {
   return t.has(n.publishLocations, e);
  });
 }, n.onReady(function() {
  function n(t) {
   t.hide(), e("#file-title").show();
   var n = e.trim(t.val()), i = c.getCurrentFile();
   n && n != i.title && (i.title = n), t.val(i.title), e("#wmd-input").focus();
  }
  c.selectFile(), e(".action-create-file").click(function() {
   var t = c.createFile();
   c.selectFile(t);
   var n = e("#wmd-input").focus().get(0);
   n.setSelectionRange && n.setSelectionRange(0, 0), e("#file-title").click();
  }), e(".action-remove-file").click(function() {
   c.deleteFile();
  }), e("#file-title").click(function() {
   if (viewerMode !== !0) {
    e(this).hide();
    var n = e("#file-title-input").show();
    t.defer(function() {
     n.focus().get(0).select();
    });
   }
  }), e("#file-title-input").blur(function() {
   n(e(this));
  }).keyup(function(t) {
   13 == t.keyCode && n(e(this)), 27 == t.keyCode && (e(this).val(""), n(e(this)));
  }), e(".action-open-stackedit").click(function() {
   window.location.href = ".";
  }), e(".action-edit-document").click(function() {
   var t = e("#wmd-input").val(), n = c.getCurrentFile().title, i = c.createFile(n, t);
   c.selectFile(i), window.location.href = ".";
  }), e(".action-welcome-file").click(function() {
   var e = c.createFile(WELCOME_DOCUMENT_TITLE, a);
   c.selectFile(e);
  });
 }), r.onFileMgrCreated(c), c;
}), "undefined" != typeof module && module.exports && (module.exports = printStackTrace), 
printStackTrace.implementation = function() {}, printStackTrace.implementation.prototype = {
 run: function(e, t) {
  return e = e || this.createException(), t = t || this.mode(e), "other" === t ? this.other(arguments.callee) : this[t](e);
 },
 createException: function() {
  try {
   this.undef();
  } catch (e) {
   return e;
  }
 },
 mode: function(e) {
  return e.arguments && e.stack ? "chrome" : e.stack && e.sourceURL ? "safari" : e.stack && e.number ? "ie" : "string" == typeof e.message && "undefined" != typeof window && window.opera ? e.stacktrace ? e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? "opera9" : e.stack ? 0 > e.stacktrace.indexOf("called from line") ? "opera10b" : "opera11" : "opera10a" : "opera9" : e.stack ? "firefox" : "other";
 },
 instrumentFunction: function(e, t, n) {
  e = e || window;
  var i = e[t];
  e[t] = function() {
   return n.call(this, printStackTrace().slice(4)), e[t]._instrumented.apply(this, arguments);
  }, e[t]._instrumented = i;
 },
 deinstrumentFunction: function(e, t) {
  e[t].constructor === Function && e[t]._instrumented && e[t]._instrumented.constructor === Function && (e[t] = e[t]._instrumented);
 },
 chrome: function(e) {
  var t = (e.stack + "\n").replace(/^\S[^\(]+?[\n$]/gm, "").replace(/^\s+(at eval )?at\s+/gm, "").replace(/^([^\(]+?)([\n$])/gm, "{anonymous}()@$1$2").replace(/^Object.<anonymous>\s*\(([^\)]+)\)/gm, "{anonymous}()@$1").split("\n");
  return t.pop(), t;
 },
 safari: function(e) {
  return e.stack.replace(/\[native code\]\n/m, "").replace(/^(?=\w+Error\:).*$\n/m, "").replace(/^@/gm, "{anonymous}()@").split("\n");
 },
 ie: function(e) {
  var t = /^.*at (\w+) \(([^\)]+)\)$/gm;
  return e.stack.replace(/at Anonymous function /gm, "{anonymous}()@").replace(/^(?=\w+Error\:).*$\n/m, "").replace(t, "$1@$2").split("\n");
 },
 firefox: function(e) {
  return e.stack.replace(/(?:\n@:0)?\s+$/m, "").replace(/^[\(@]/gm, "{anonymous}()@").split("\n");
 },
 opera11: function(e) {
  for (var t = "{anonymous}", n = /^.*line (\d+), column (\d+)(?: in (.+))? in (\S+):$/, i = e.stacktrace.split("\n"), o = [], r = 0, s = i.length; s > r; r += 2) {
   var a = n.exec(i[r]);
   if (a) {
    var l = a[4] + ":" + a[1] + ":" + a[2], c = a[3] || "global code";
    c = c.replace(/<anonymous function: (\S+)>/, "$1").replace(/<anonymous function>/, t), 
    o.push(c + "@" + l + " -- " + i[r + 1].replace(/^\s+/, ""));
   }
  }
  return o;
 },
 opera10b: function(e) {
  for (var t = /^(.*)@(.+):(\d+)$/, n = e.stacktrace.split("\n"), i = [], o = 0, r = n.length; r > o; o++) {
   var s = t.exec(n[o]);
   if (s) {
    var a = s[1] ? s[1] + "()" : "global code";
    i.push(a + "@" + s[2] + ":" + s[3]);
   }
  }
  return i;
 },
 opera10a: function(e) {
  for (var t = "{anonymous}", n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, i = e.stacktrace.split("\n"), o = [], r = 0, s = i.length; s > r; r += 2) {
   var a = n.exec(i[r]);
   if (a) {
    var l = a[3] || t;
    o.push(l + "()@" + a[2] + ":" + a[1] + " -- " + i[r + 1].replace(/^\s+/, ""));
   }
  }
  return o;
 },
 opera9: function(e) {
  for (var t = "{anonymous}", n = /Line (\d+).*script (?:in )?(\S+)/i, i = e.message.split("\n"), o = [], r = 2, s = i.length; s > r; r += 2) {
   var a = n.exec(i[r]);
   a && o.push(t + "()@" + a[2] + ":" + a[1] + " -- " + i[r + 1].replace(/^\s+/, ""));
  }
  return o;
 },
 other: function(e) {
  for (var t, n, i = "{anonymous}", o = /function\s*([\w\-$]+)?\s*\(/i, r = [], s = 10; e && e.arguments && s > r.length; ) t = o.test("" + e) ? RegExp.$1 || i : i, 
  n = Array.prototype.slice.call(e.arguments || []), r[r.length] = t + "(" + this.stringifyArguments(n) + ")", 
  e = e.caller;
  return r;
 },
 stringifyArguments: function(e) {
  for (var t = [], n = Array.prototype.slice, i = 0; e.length > i; ++i) {
   var o = e[i];
   void 0 === o ? t[i] = "undefined" : null === o ? t[i] = "null" : o.constructor && (o.constructor === Array ? t[i] = 3 > o.length ? "[" + this.stringifyArguments(o) + "]" : "[" + this.stringifyArguments(n.call(o, 0, 1)) + "..." + this.stringifyArguments(n.call(o, -1)) + "]" : o.constructor === Object ? t[i] = "#object" : o.constructor === Function ? t[i] = "#function" : o.constructor === String ? t[i] = '"' + o + '"' : o.constructor === Number && (t[i] = o));
  }
  return t.join(",");
 },
 sourceCache: {},
 ajax: function(e) {
  var t = this.createXMLHTTPObject();
  if (t) try {
   return t.open("GET", e, !1), t.send(null), t.responseText;
  } catch (n) {}
  return "";
 },
 createXMLHTTPObject: function() {
  for (var e, t = [ function() {
   return new XMLHttpRequest();
  }, function() {
   return new ActiveXObject("Msxml2.XMLHTTP");
  }, function() {
   return new ActiveXObject("Msxml3.XMLHTTP");
  }, function() {
   return new ActiveXObject("Microsoft.XMLHTTP");
  } ], n = 0; t.length > n; n++) try {
   return e = t[n](), this.createXMLHTTPObject = t[n], e;
  } catch (i) {}
 },
 isSameDomain: function(e) {
  return "undefined" != typeof location && -1 !== e.indexOf(location.hostname);
 },
 getSource: function(e) {
  return e in this.sourceCache || (this.sourceCache[e] = this.ajax(e).split("\n")), 
  this.sourceCache[e];
 },
 guessAnonymousFunctions: function(e) {
  for (var t = 0; e.length > t; ++t) {
   var n = /\{anonymous\}\(.*\)@(.*)/, i = /^(.*?)(?::(\d+))(?::(\d+))?(?: -- .+)?$/, o = e[t], r = n.exec(o);
   if (r) {
    var s = i.exec(r[1]);
    if (s) {
     var a = s[1], l = s[2], c = s[3] || 0;
     if (a && this.isSameDomain(a) && l) {
      var u = this.guessAnonymousFunction(a, l, c);
      e[t] = o.replace("{anonymous}", u);
     }
    }
   }
  }
  return e;
 },
 guessAnonymousFunction: function(e, t) {
  var n;
  try {
   n = this.findFunctionName(this.getSource(e), t);
  } catch (i) {
   n = "getSource failed with url: " + e + ", exception: " + ("" + i);
  }
  return n;
 },
 findFunctionName: function(e, t) {
  for (var n, i, o, r = /function\s+([^(]*?)\s*\(([^)]*)\)/, s = /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*function\b/, a = /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*(?:eval|new Function)\b/, l = "", c = Math.min(t, 20), u = 0; c > u; ++u) if (n = e[t - u - 1], 
  o = n.indexOf("//"), o >= 0 && (n = n.substr(0, o)), n) {
   if (l = n + l, i = s.exec(l), i && i[1]) return i[1];
   if (i = r.exec(l), i && i[1]) return i[1];
   if (i = a.exec(l), i && i[1]) return i[1];
  }
  return "(?)";
 }
}, define("libs/stacktrace", function() {}), define("asyncRunner", [ "underscore", "core", "utils", "extensionMgr", "libs/stacktrace" ], function(e, t, n, i) {
 function o(t, n, o) {
  try {
   e.each(n, function(e) {
    e(o);
   });
  } finally {
   t.finished = !0, l === t && (l = void 0, c = !1), 0 === s.length ? (a = !1, i.onAsyncRunning(!1)) : r.runTask();
  }
 }
 var r = {}, s = [], a = !1, l = void 0, c = !1, u = 0;
 return r.createTask = function() {
  var e = {};
  return e.finished = !1, e.timeout = ASYNC_TASK_DEFAULT_TIMEOUT, e.retryCounter = 0, 
  e.callPath = [], e.runCallbacks = [], e.onRun = function(t) {
   e.runCallbacks.push(t);
  }, e.successCallbacks = [], e.onSuccess = function(t) {
   e.successCallbacks.push(t);
  }, e.errorCallbacks = [], e.onError = function(t) {
   e.errorCallbacks.push(t);
  }, e.chain = function(t) {
   if (e.callPath.unshift(printStackTrace()[5]), e.finished !== !0) {
    if (void 0 === e.queue && (e.queue = e.runCallbacks.slice()), void 0 !== t) return t(), 
    void 0;
    if (0 === e.queue.length) return o(e, e.successCallbacks), void 0;
    var n = e.queue.shift();
    n();
   }
  }, e.error = function(t) {
   if (e.callPath.unshift(printStackTrace()[5]), e.finished !== !0) throw t = t || Error("Unknown error|\n" + e.callPath.join("\n")), 
   t.message && i.onError(t), o(e, e.errorCallbacks, t), t;
  }, e.retry = function(t, i) {
   if (e.finished !== !0) {
    if (i = i || 5, e.queue = void 0, e.retryCounter >= i) return e.error(t), void 0;
    var o = 1e3 * Math.pow(2, e.retryCounter++);
    u = n.currentTime + o, c = !1, e.callPath = [], r.runTask();
   }
  }, e;
 }, r.runTask = function() {
  e.defer(function() {
   if (c === !0) return u + l.timeout < n.currentTime && l.error(Error("A timeout occurred.|\n" + l.callPath.join("\n"))), 
   void 0;
   if (void 0 === l) {
    if (0 === s.length) return;
    l = s.shift(), u = n.currentTime, a === !1 && (a = !0, i.onAsyncRunning(!0));
   }
   n.currentTime >= u && (c = !0, l.chain());
  });
 }, t.addPeriodicCallback(r.runTask), r.addTask = function(e) {
  s.push(e), r.runTask();
 }, r.setCurrentTaskTimeout = function(e) {
  void 0 !== l && (l.timeout = e);
 }, r;
}), define("helpers/dropboxHelper", [ "jquery", "underscore", "core", "extensionMgr", "asyncRunner" ], function(e, t, n, i, o) {
 function r(t) {
  t.onRun(function() {
   return n.isOffline === !0 ? (c = void 0, t.error(Error("Operation not available in offline mode.|stopPublish")), 
   void 0) : void 0 !== c ? (t.chain(), void 0) : (e.ajax({
    url: "lib/dropbox.min.js",
    dataType: "script",
    timeout: AJAX_TIMEOUT
   }).done(function() {
    c = new Dropbox.Client({
     key: DROPBOX_APP_KEY,
     secret: DROPBOX_APP_SECRET
    }), c.authDriver(new Dropbox.Drivers.Popup({
     receiverUrl: BASE_URL + "dropbox-oauth-receiver.html",
     rememberUser: !0
    })), t.chain();
   }).fail(function(e) {
    var n = {
     status: e.status,
     responseText: e.statusText
    };
    a(n, t);
   }), void 0);
  });
 }
 function s(e) {
  e.onRun(function() {
   function t() {
    n === !1 && (i.onMessage("Please make sure the Dropbox authorization popup is not blocked by your browser."), 
    e.timeout = ASYNC_TASK_LONG_TIMEOUT), c.reset(), c.authenticate({
     interactive: !n
    }, function(i, o) {
     return o.authState === Dropbox.Client.DONE ? (u = !0, e.chain(), void 0) : n === !0 ? (n = !1, 
     e.chain(t), void 0) : (e.error(Error("Access to Dropbox account is not authorized.")), 
     void 0);
    });
   }
   if (u === !0) return e.chain(), void 0;
   var n = !0;
   e.chain(t);
  });
 }
 function a(e, i) {
  var o = !0;
  if (e) if (logger.error(e), "string" == typeof e) o = e; else {
   if (o = "Dropbox error (" + e.status + ": " + e.responseText + ").", 401 === e.status || 403 === e.status) return u = !1, 
   o = "Access to Dropbox account is not authorized.", i.retry(Error(o), 1), void 0;
   if (400 === e.status && -1 !== e.responseText.indexOf("oauth_nonce")) return t.each(t.keys(localStorage), function(e) {
    0 === e.indexOf("dropbox-auth") && localStorage.removeItem(e);
   }), u = !1, i.retry(Error(o), 1), void 0;
   0 >= e.status && (c = void 0, u = !1, n.setOffline(), o = "|stopPublish");
  }
  i.error(Error(o));
 }
 function l(t) {
  t.onRun(function() {
   return p === !0 ? (t.chain(), void 0) : (e.ajax({
    url: "https://www.dropbox.com/static/api/1/dropbox.js",
    dataType: "script",
    timeout: AJAX_TIMEOUT
   }).done(function() {
    p = !0, t.chain();
   }).fail(function(e) {
    var n = {
     status: e.status,
     responseText: e.statusText
    };
    a(n, t);
   }), void 0);
  });
 }
 var c = void 0, u = !1, d = {};
 d.upload = function(e, t, n) {
  var i = void 0, l = o.createTask();
  r(l), s(l), l.onRun(function() {
   c.writeFile(e, t, function(t, n) {
    return t ? (400 === t.status && (t = 'Could not upload document into path "' + e + '".'), 
    a(t, l), void 0) : (i = n, l.chain(), void 0);
   });
  }), l.onSuccess(function() {
   n(void 0, i);
  }), l.onError(function(e) {
   n(e);
  }), o.addTask(l);
 }, d.checkChanges = function(e, t) {
  var n = [], i = e || 0, l = o.createTask();
  r(l), s(l), l.onRun(function() {
   function e() {
    c.pullChanges(i, function(t, o) {
     return t ? (a(t, l), void 0) : (i = o.cursor(), void 0 !== o.changes && (n = n.concat(o.changes)), 
     o.shouldPullAgain ? l.chain(e) : l.chain(), void 0);
    });
   }
   l.chain(e);
  }), l.onSuccess(function() {
   t(void 0, n, i);
  }), l.onError(function(e) {
   t(e);
  }), o.addTask(l);
 }, d.downloadMetadata = function(e, t) {
  var n = [], i = o.createTask();
  r(i), s(i), i.onRun(function() {
   function t() {
    if (0 === e.length) return i.chain(), void 0;
    var o = e[0];
    c.stat(o, function(o, r) {
     return r ? (n.push(r), e.shift(), i.chain(t), void 0) : (a(o, i), void 0);
    });
   }
   i.chain(t);
  }), i.onSuccess(function() {
   t(void 0, n);
  }), i.onError(function(e) {
   t(e);
  }), o.addTask(i);
 }, d.downloadContent = function(e, t) {
  var n = [], i = o.createTask();
  r(i), s(i), i.onRun(function() {
   function t() {
    if (0 === e.length) return i.chain(), void 0;
    var o = e[0];
    n.push(o);
    var r = void 0;
    return o.isFile === !0 ? r = o : void 0 !== o.wasRemoved && (r = o.stat), r ? (c.readFile(r.path, function(n, o) {
     return o ? (r.content = o, e.shift(), i.chain(t), void 0) : (a(n, i), void 0);
    }), void 0) : (e.shift(), i.chain(t), void 0);
   }
   i.chain(t);
  }), i.onSuccess(function() {
   t(void 0, n);
  }), i.onError(function(e) {
   t(e);
  }), o.addTask(i);
 };
 var p = !1;
 return d.picker = function(e) {
  var t = [], n = o.createTask();
  n.timeout = ASYNC_TASK_LONG_TIMEOUT, r(n), l(n), n.onRun(function() {
   var e = {};
   e.multiselect = !0, e.linkType = "direct", e.success = function(e) {
    for (var i = 0; e.length > i; i++) {
     var o = e[i].link;
     o = o.replace(/.*\/view\/[^\/]*/, ""), t.push(decodeURI(o));
    }
    n.chain();
   }, e.cancel = function() {
    n.chain();
   }, Dropbox.choose(e), i.onMessage("Please make sure the Dropbox chooser popup is not blocked by your browser.");
  }), n.onSuccess(function() {
   e(void 0, t);
  }), n.onError(function(t) {
   e(t);
  }), o.addTask(n);
 }, d;
}), define("providers/dropboxProvider", [ "underscore", "utils", "extensionMgr", "fileMgr", "helpers/dropboxHelper" ], function(e, t, n, i, o) {
 function r(e) {
  return void 0 === e ? void 0 : e.match(/^[^\\<>:"\|?\*]+$/) ? 0 !== e.indexOf("/") ? "/" + e : e : (n.onError('"' + e + '" contains invalid characters.'), 
  void 0);
 }
 function s(e) {
  return "sync." + u + "." + encodeURIComponent(e.toLowerCase());
 }
 function a(e, n, i) {
  var o = {};
  return o.provider = d, o.path = e, o.version = n, o.contentCRC = t.crc32(i), o.syncIndex = s(e), 
  t.storeAttributes(o), o;
 }
 function l(t) {
  o.downloadMetadata(t, function(t, r) {
   t || o.downloadContent(r, function(t, o) {
    if (!t) {
     var r = [];
     e.each(o, function(e) {
      var t = a(e.path, e.versionTag, e.content), n = {};
      n[t.syncIndex] = t;
      var o = i.createFile(e.name, e.content, n);
      i.selectFile(o), r.push(o);
     }), 0 !== r.length && n.onSyncImportSuccess(r, d);
    }
   });
  });
 }
 function c(e, t, l, c) {
  if (e = r(e), void 0 === e) return c(!0), void 0;
  var u = s(e), d = i.getFileFromSyncIndex(u);
  if (void 0 !== d) {
   var p = d.title;
   return n.onError('File path is already synchronized with "' + p + '".'), c(!0), 
   void 0;
  }
  o.upload(e, l, function(e, t) {
   if (e) return c(e), void 0;
   var n = a(t.path, t.versionTag, l);
   c(void 0, n);
  });
 }
 var u = "dropbox", d = {
  providerId: u,
  providerName: "Dropbox",
  defaultPublishFormat: "template"
 };
 return d.importFiles = function() {
  o.picker(function(t, o) {
   if (!t && 0 !== o.length) {
    var r = [];
    e.each(o, function(e) {
     var t = s(e), o = i.getFileFromSyncIndex(t);
     return void 0 !== o ? (n.onError('"' + o.title + '" was already imported.'), void 0) : (r.push(e), 
     void 0);
    }), l(r);
   }
  });
 }, d.exportFile = function(e, n, i, o) {
  var r = t.getInputTextValue("#input-sync-export-dropbox-path", e);
  c(r, n, i, o);
 }, d.exportManual = function(e, n, i, o) {
  var r = t.getInputTextValue("#input-sync-manual-dropbox-path", e);
  c(r, n, i, o);
 }, d.syncUp = function(e, t, n, i, r, s) {
  var a = r.contentCRC;
  return t == a ? (s(void 0, !1), void 0) : (o.upload(r.path, e, function(e, n) {
   return e ? (s(e, !0), void 0) : (r.version = n.versionTag, r.contentCRC = t, s(void 0, !0), 
   void 0);
  }), void 0);
 }, d.syncDown = function(r) {
  var a = localStorage[u + ".lastChangeId"];
  o.checkChanges(a, function(a, l, c) {
   if (a) return r(a), void 0;
   var d = [];
   e.each(l, function(e) {
    var t = s(e.path), n = i.getSyncAttributes(t);
    return void 0 !== n ? (e.syncAttributes = n, e.wasRemoved === !0 ? (d.push(e), void 0) : (n.version != e.stat.versionTag && d.push(e), 
    void 0)) : void 0;
   }), o.downloadContent(d, function(o, s) {
    return o ? (r(o), void 0) : (e.each(s, function(e) {
     var o = e.syncAttributes, r = o.syncIndex, s = i.getFileFromSyncIndex(r);
     if (void 0 !== s) {
      var a = s.title;
      if (e.wasRemoved === !0) return n.onError('"' + a + '" has been removed from Dropbox.'), 
      i.removeSync(o), void 0;
      var l = s.content, c = o.contentCRC != t.crc32(l), u = e.stat, d = t.crc32(u.content), p = o.contentCRC != d, f = l != u.content;
      f === !0 && c === !0 && p === !0 && (i.createFile(a + " (backup)", l), n.onMessage('Conflict detected on "' + a + '". A backup has been created locally.')), 
      f && p === !0 && (s.content = u.content, n.onMessage('"' + a + '" has been updated from Dropbox.'), 
      i.isCurrentFile(s) && i.selectFile()), o.version = u.versionTag, o.contentCRC = d, 
      t.storeAttributes(o);
     }
    }), localStorage[u + ".lastChangeId"] = c, r(), void 0);
   });
  });
 }, d.publish = function(e, t, n, i) {
  var s = r(e.path);
  return void 0 === s ? (i(!0), void 0) : (o.upload(s, n, i), void 0);
 }, d.newPublishAttributes = function(e) {
  var n = {};
  return n.path = t.getInputTextValue("#input-publish-dropbox-path", e), e.isPropagationStopped() ? void 0 : n;
 }, d;
}), define("helpers/googleHelper", [ "jquery", "core", "utils", "extensionMgr", "asyncRunner" ], function(e, t, n, i, o) {
 function r(n) {
  n.onRun(function() {
   return t.isOffline === !0 ? (c = !1, n.error(Error("Operation not available in offline mode.|stopPublish")), 
   void 0) : c === !0 ? (n.chain(), void 0) : (delayedFunction = function() {
    c = !0, n.chain();
   }, e.ajax({
    url: "https://apis.google.com/js/client.js?onload=runDelayedFunction",
    dataType: "script",
    timeout: AJAX_TIMEOUT
   }).fail(function(e) {
    var t = {
     code: e.status,
     message: e.statusText
    };
    a(t, n);
   }), void 0);
  });
 }
 function s(e) {
  e.onRun(function() {
   function t() {
    n === !1 && (i.onMessage("Please make sure the Google authorization popup is not blocked by your browser."), 
    e.timeout = ASYNC_TASK_LONG_TIMEOUT), gapi.auth.authorize({
     client_id: GOOGLE_CLIENT_ID,
     scope: GOOGLE_SCOPES,
     immediate: n
    }, function(i) {
     gapi.client.load("drive", "v2", function() {
      return !i || i.error ? c === !0 && n === !0 ? (n = !1, e.chain(t), void 0) : (e.error(Error("Access to Google account is not authorized.")), 
      void 0) : (u = !0, e.chain(), void 0);
     });
    });
   }
   if (u === !0) return e.chain(), void 0;
   var n = !0;
   e.chain(t);
  });
 }
 function a(e, n) {
  var i = void 0;
  if (e) if (logger.error(e), "string" == typeof e) i = e; else {
   if (i = "Google error (" + e.code + ": " + e.message + ").", e.code >= 500 && 600 > e.code) return n.retry(Error(i)), 
   void 0;
   if (401 === e.code || 403 === e.code) return u = !1, i = "Access to Google account is not authorized.", 
   n.retry(Error(i), 1), void 0;
   (0 === e.code || -1 === e.code) && (c = !1, u = !1, t.setOffline(), i = "|stopPublish");
  }
  n.error(Error(i));
 }
 function l(t) {
  t.onRun(function() {
   return p === !0 ? (t.chain(), void 0) : (e.ajax({
    url: "//www.google.com/jsapi",
    data: {
     key: GOOGLE_API_KEY
    },
    dataType: "script",
    timeout: AJAX_TIMEOUT
   }).done(function() {
    google.load("picker", "1", {
     callback: t.chain
    }), p = !0;
   }).fail(function(e) {
    var n = {
     code: e.status,
     message: e.statusText
    };
    a(n, t);
   }), void 0);
  });
 }
 var c = !1, u = !1, d = {};
 d.upload = function(e, t, i, l, c, u) {
  var d = void 0, p = o.createTask();
  r(p), s(p), p.onRun(function() {
   var o = "-------314159265358979323846", r = "\r\n--" + o + "\r\n", s = "\r\n--" + o + "--", c = "text/x-markdown", u = {
    title: i,
    mimeType: c
   };
   void 0 !== t && (u.parents = [ {
    kind: "drive#fileLink",
    id: t
   } ]);
   var f = "/upload/drive/v2/files", h = "POST";
   void 0 !== e && (f += "/" + e, h = "PUT");
   var g = {
    "Content-Type": 'multipart/mixed; boundary="' + o + '"'
   }, m = n.encodeBase64(l), v = r + "Content-Type: application/json\r\n\r\n" + JSON.stringify(u) + r + "Content-Type: " + c + "\r\n" + "Content-Transfer-Encoding: base64\r\n" + "\r\n" + m + s, y = gapi.client.request({
    path: f,
    method: h,
    params: {
     uploadType: "multipart"
    },
    headers: g,
    body: v
   });
   y.execute(function(t) {
    if (t && t.id) return d = t, d.content = l, p.chain(), void 0;
    var n = t.error;
    void 0 !== n && void 0 !== e && (404 === n.code ? n = 'File ID "' + e + '" not found on Google Drive.|removePublish' : 412 === n.code && (localStorage.removeItem("gdrive.lastChangeId"), 
    n = 'Conflict on file ID "' + e + '". Please restart the synchronization.')), a(n, p);
   });
  }), p.onSuccess(function() {
   u(void 0, d);
  }), p.onError(function(e) {
   u(e);
  }), o.addTask(p);
 }, d.checkChanges = function(e, t) {
  var n = [], i = e || 0, l = o.createTask();
  r(l), s(l), l.onRun(function() {
   function e() {
    var o = void 0;
    o = void 0 === t ? gapi.client.drive.changes.list({
     startChangeId: i + 1
    }) : gapi.client.drive.changes.list({
     pageToken: t
    }), o.execute(function(o) {
     return o && o.largestChangeId ? (i = o.largestChangeId, t = o.nextPageToken, void 0 !== o.items && (n = n.concat(o.items)), 
     void 0 !== t ? l.chain(e) : l.chain(), void 0) : (a(o.error, l), void 0);
    });
   }
   var t = void 0;
   l.chain(e);
  }), l.onSuccess(function() {
   t(void 0, n, i);
  }), l.onError(function(e) {
   t(e);
  }), o.addTask(l);
 }, d.downloadMetadata = function(t, n, i) {
  var l = [], c = o.createTask();
  r(c), i || s(c), c.onRun(function() {
   function n() {
    if (0 === t.length) return c.chain(), void 0;
    var i = t[0], o = {}, r = gapi.auth.getToken();
    r && (o.Authorization = "Bearer " + r.access_token), e.ajax({
     url: "https://www.googleapis.com/drive/v2/files/" + i,
     headers: o,
     data: {
      key: GOOGLE_API_KEY
     },
     dataType: "json",
     timeout: AJAX_TIMEOUT
    }).done(function(e) {
     l.push(e), t.shift(), c.chain(n);
    }).fail(function(e) {
     var t = {
      code: e.status,
      message: e.statusText
     };
     404 === t.code && (t = 'File ID "' + i + '" not found on Google Drive.'), a(t, c);
    });
   }
   c.chain(n);
  }), c.onSuccess(function() {
   n(void 0, l);
  }), c.onError(function(e) {
   n(e);
  }), o.addTask(c);
 }, d.downloadContent = function(t, n, i) {
  var l = [], c = o.createTask();
  c.timeout = ASYNC_TASK_LONG_TIMEOUT, r(c), i || s(c), c.onRun(function() {
   function n() {
    if (0 === t.length) return c.chain(), void 0;
    var i = t[0];
    l.push(i);
    var o = void 0;
    if ("drive#file" == i.kind ? o = i : "drive#change" == i.kind && (o = i.file), !o) return t.shift(), 
    c.chain(n), void 0;
    var r = {}, s = gapi.auth.getToken();
    s && (r.Authorization = "Bearer " + s.access_token), e.ajax({
     url: o.downloadUrl,
     headers: r,
     data: {
      key: GOOGLE_API_KEY
     },
     dataType: "text",
     timeout: AJAX_TIMEOUT
    }).done(function(e) {
     o.content = e, t.shift(), c.chain(n);
    }).fail(function(e) {
     var t = {
      code: e.status,
      message: e.statusText
     };
     a(t, c);
    });
   }
   c.chain(n);
  }), c.onSuccess(function() {
   n(void 0, l);
  }), c.onError(function(e) {
   n(e);
  }), o.addTask(c);
 };
 var p = !1;
 return d.picker = function(t, n) {
  function i() {
   void 0 !== a && (a.setVisible(!1), e(".modal-backdrop, .picker").remove());
  }
  var s = [], a = void 0, c = o.createTask();
  r(c), l(c), c.onRun(function() {
   var t = new google.picker.PickerBuilder();
   if (t.setAppId(GOOGLE_DRIVE_APP_ID), n) t.addView(google.picker.ViewId.PHOTOS), 
   t.addView(google.picker.ViewId.PHOTO_UPLOAD); else {
    var o = new google.picker.View(google.picker.ViewId.DOCS);
    o.setMimeTypes("text/x-markdown,text/plain,application/octet-stream"), t.enableFeature(google.picker.Feature.NAV_HIDDEN), 
    t.enableFeature(google.picker.Feature.MULTISELECT_ENABLED), t.addView(o);
   }
   t.setCallback(function(e) {
    (e.action == google.picker.Action.PICKED || e.action == google.picker.Action.CANCEL) && (e.action == google.picker.Action.PICKED && (s = e.docs), 
    i(), c.chain());
   }), a = t.build(), e("body").append(e("<div>").addClass("modal-backdrop").click(function() {
    i(), c.chain();
   })), a.setVisible(!0);
  }), c.onSuccess(function() {
   t(void 0, s);
  }), c.onError(function(e) {
   i(), t(e);
  }), o.addTask(c);
 }, d.uploadBlogger = function(t, n, i, l, c, u, d) {
  var p = o.createTask();
  r(p), s(p), p.onRun(function() {
   function o() {
    var t = "https://www.googleapis.com/blogger/v3/blogs/" + n + "/posts/", o = {
     kind: "blogger#post",
     blog: {
      id: n
     },
     labels: l,
     title: c,
     content: u
    }, r = "POST";
    void 0 !== i && (t += i, o.id = i, r = "PUT"), e.ajax({
     url: t,
     data: JSON.stringify(o),
     headers: s,
     type: r,
     contentType: "application/json",
     dataType: "json",
     timeout: AJAX_TIMEOUT
    }).done(function(e) {
     i = e.id, p.chain();
    }).fail(function(e) {
     var t = {
      code: e.status,
      message: e.statusText
     };
     404 === t.code && void 0 !== i && (t = "Post " + i + " not found on Blogger.|removePublish"), 
     a(t, p);
    });
   }
   function r() {
    return void 0 !== n ? (p.chain(o), void 0) : (e.ajax({
     url: "https://www.googleapis.com/blogger/v3/blogs/byurl",
     data: {
      url: t
     },
     headers: s,
     dataType: "json",
     timeout: AJAX_TIMEOUT
    }).done(function(e) {
     n = e.id, p.chain(o);
    }).fail(function(e) {
     var n = {
      code: e.status,
      message: e.statusText
     };
     404 === n.code && (n = 'Blog "' + t + '" not found on Blogger.|removePublish'), 
     a(n, p);
    }), void 0);
   }
   var s = {}, d = gapi.auth.getToken();
   d && (s.Authorization = "Bearer " + d.access_token), p.chain(r);
  }), p.onSuccess(function() {
   d(void 0, n, i);
  }), p.onError(function(e) {
   d(e);
  }), o.addTask(p);
 }, d;
}), define("providers/gdriveProvider", [ "underscore", "core", "utils", "settings", "extensionMgr", "fileMgr", "helpers/googleHelper" ], function(e, t, n, i, o, r, s) {
 function a(e) {
  return "sync." + u + "." + e;
 }
 function l(e, t, i, o) {
  var r = {};
  return r.provider = d, r.id = e, r.etag = t, r.contentCRC = n.crc32(i), r.titleCRC = n.crc32(o), 
  r.syncIndex = a(e), n.storeAttributes(r), r;
 }
 function c(t) {
  s.downloadMetadata(t, function(t, n) {
   t || s.downloadContent(n, function(t, n) {
    if (!t) {
     var i = [];
     e.each(n, function(e) {
      var t = l(e.id, e.etag, e.content, e.title), n = {};
      n[t.syncIndex] = t;
      var o = r.createFile(e.title, e.content, n);
      r.selectFile(o), i.push(o);
     }), 0 !== i.length && o.onSyncImportSuccess(i, d);
    }
   });
  });
 }
 var u = "gdrive", d = {
  providerId: u,
  providerName: "Google Drive",
  defaultPublishFormat: "template",
  exportPreferencesInputIds: [ "gdrive-parentid" ]
 };
 return d.importFiles = function() {
  s.picker(function(t, n) {
   if (!t && 0 !== n.length) {
    var i = [];
    e.each(n, function(e) {
     var t = a(e.id), n = r.getFileFromSyncIndex(t);
     return void 0 !== n ? (o.onError('"' + n.title + '" was already imported.'), void 0) : (i.push(e.id), 
     void 0);
    }), c(i);
   }
  });
 }, d.exportFile = function(e, t, i, o) {
  var r = n.getInputTextValue("#input-sync-export-gdrive-parentid");
  s.upload(void 0, r, t, i, void 0, function(e, n) {
   if (e) return o(e), void 0;
   var r = l(n.id, n.etag, i, t);
   o(void 0, r);
  });
 }, d.exportManual = function(e, t, i, c) {
  var u = n.getInputTextValue("#input-sync-manual-gdrive-id", e);
  if (u) {
   var d = a(u), p = r.getFileFromSyncIndex(d);
   return void 0 !== p ? (o.onError('File ID is already synchronized with "' + p.title + '".'), 
   c(!0), void 0) : (s.upload(u, void 0, t, i, void 0, function(e, n) {
    if (e) return c(e), void 0;
    var o = l(n.id, n.etag, i, t);
    c(void 0, o);
   }), void 0);
  }
 }, d.syncUp = function(e, t, n, i, o, r) {
  var a = o.contentCRC, l = o.titleCRC;
  return t == a && i == l ? (r(void 0, !1), void 0) : (s.upload(o.id, void 0, n, e, o.etag, function(e, n) {
   return e ? (r(e, !0), void 0) : (o.etag = n.etag, o.contentCRC = t, o.titleCRC = i, 
   r(void 0, !0), void 0);
  }), void 0);
 }, d.syncDown = function(t) {
  var i = parseInt(localStorage[u + ".lastChangeId"]);
  s.checkChanges(i, function(i, l, c) {
   if (i) return t(i), void 0;
   var d = [];
   e.each(l, function(e) {
    var t = a(e.fileId), n = r.getSyncAttributes(t);
    return void 0 !== n ? (e.syncAttributes = n, e.deleted === !0 ? (d.push(e), void 0) : (n.etag != e.file.etag && d.push(e), 
    void 0)) : void 0;
   }), s.downloadContent(d, function(i, s) {
    return i ? (t(i), void 0) : (e.each(s, function(e) {
     var t = e.syncAttributes, i = t.syncIndex, s = r.getFileFromSyncIndex(i);
     if (void 0 !== s) {
      var a = s.title;
      if (e.deleted === !0) return o.onError('"' + a + '" has been removed from Google Drive.'), 
      r.removeSync(t), void 0;
      var l = t.titleCRC != n.crc32(a), c = s.content, u = t.contentCRC != n.crc32(c), d = e.file, p = n.crc32(d.title), f = t.titleCRC != p, h = a != d.title, g = n.crc32(d.content), m = t.contentCRC != g, v = c != d.content;
      (h === !0 && l === !0 && f === !0 || v === !0 && u === !0 && m === !0) && (r.createFile(a + " (backup)", c), 
      o.onMessage('Conflict detected on "' + a + '". A backup has been created locally.')), 
      h && f === !0 && (s.title = d.title, o.onMessage('"' + a + '" has been renamed to "' + d.title + '" on Google Drive.')), 
      v && m === !0 && (s.content = d.content, o.onMessage('"' + d.title + '" has been updated from Google Drive.'), 
      r.isCurrentFile(s) && r.selectFile()), t.etag = d.etag, t.contentCRC = g, t.titleCRC = p, 
      n.storeAttributes(t);
     }
    }), localStorage[u + ".lastChangeId"] = c, t(), void 0);
   });
  });
 }, d.publish = function(e, t, n, i) {
  s.upload(e.id, void 0, e.fileName || t, n, void 0, function(t, n) {
   return t ? (i(t), void 0) : (e.id = n.id, i(), void 0);
  });
 }, d.newPublishAttributes = function(e) {
  var t = {};
  return t.id = n.getInputTextValue("#input-publish-gdrive-fileid"), t.fileName = n.getInputTextValue("#input-publish-gdrive-filename"), 
  e.isPropagationStopped() ? void 0 : t;
 }, t.onReady(function() {
  var t = n.retrieveIgnoreError(u + ".state");
  if (void 0 !== t) if (localStorage.removeItem(u + ".state"), "create" == t.action) s.upload(void 0, t.folderId, GDRIVE_DEFAULT_FILE_TITLE, i.defaultContent, void 0, function(e, t) {
   if (!e) {
    var n = l(t.id, t.etag, t.content, t.title), i = {};
    i[n.syncIndex] = n;
    var s = r.createFile(t.title, t.content, n);
    r.selectFile(s), o.onMessage('"' + t.title + '" created successfully on Google Drive.');
   }
  }); else if ("open" == t.action) {
   var d = [];
   e.each(t.ids, function(e) {
    var t = a(e), n = r.getFileFromSyncIndex(t);
    void 0 !== n ? r.selectFile(n) : d.push(e);
   }), c(d);
  }
 }), d;
}), define("synchronizer", [ "jquery", "underscore", "core", "utils", "extensionMgr", "fileSystem", "fileMgr", "providers/dropboxProvider", "providers/gdriveProvider" ], function(e, t, n, i, o, r, s) {
 function a(e) {
  if (0 === g.length) return l(e), void 0;
  var t = g.pop();
  t.provider.syncUp(m, v, y, b, t, function(n, o) {
   return o === !0 && (x = !0), n ? (e(n), void 0) : (o && i.storeAttributes(t), a(e), 
   void 0);
  });
 }
 function l(e) {
  if (0 === w.length) return c(e), void 0;
  var n = w.pop();
  return g = t.values(n.syncLocations), 0 === g.length ? (l(e), void 0) : (m = n.content, 
  v = i.crc32(m), y = n.title, b = i.crc32(y), a(e), void 0);
 }
 function c(e) {
  x === !0 ? (x = !1, w = t.values(r), l(e)) : e();
 }
 function u(e) {
  if (0 === C.length) return e(), void 0;
  var t = C.pop();
  return s.hasSync(t) ? (t.syncDown(function(t) {
   return t ? (e(t), void 0) : (u(e), void 0);
  }), void 0) : (u(e), void 0);
 }
 function d(e) {
  C = t.values(h), u(e);
 }
 function p(n) {
  i.resetModalInputs();
  var o = i.retrieveIgnoreError(n.providerId + ".exportPreferences");
  o && t.each(n.exportPreferencesInputIds, function(e) {
   i.setInputValue("#input-sync-export-" + e, o[e]);
  }), e("#modal-upload-" + n.providerId).modal();
 }
 var f = {}, h = t.chain(arguments).map(function(e) {
  return e && e.providerId && [ e.providerId, e ];
 }).compact().object().value();
 t.each(r, function(e) {
  t.each(i.retrieveIndexArray(e.fileIndex + ".sync"), function(t) {
   try {
    var n = JSON.parse(localStorage[t]);
    n.syncIndex = t, n.provider = h[n.provider], e.syncLocations[t] = n;
   } catch (r) {
    o.onError(r), i.removeIndexFromArray(e.fileIndex + ".sync", t), localStorage.removeItem(t);
   }
  });
 });
 var g = [], m = void 0, v = void 0, y = void 0, b = void 0, w = [], x = !1, C = [], k = !1;
 return f.sync = function() {
  function e(e) {
   return void 0 !== e ? (k = !1, o.onSyncRunning(!1), !0) : !1;
  }
  return k || n.isOffline ? !1 : (k = !0, o.onSyncRunning(!0), x = !0, d(function(t) {
   e(t) || c(function(t) {
    e(t) || (k = !1, o.onSyncRunning(!1), o.onSyncSuccess());
   });
  }), !0);
 }, n.onReady(function() {
  t.each(h, function(n) {
   e(".action-sync-import-" + n.providerId).click(function(e) {
    n.importFiles(e);
   }), e(".action-sync-export-dialog-" + n.providerId).click(function() {
    p(n);
   }), e(".action-sync-export-" + n.providerId).click(function(i) {
    var o = s.getCurrentFile();
    n.exportFile(i, o.title, o.content, function(e, t) {
     e || s.addSync(o, t);
    });
    var r = {};
    t.each(n.exportPreferencesInputIds, function(t) {
     r[t] = e("#input-sync-export-" + t).val();
    }), localStorage[n.providerId + ".exportPreferences"] = JSON.stringify(r);
   }), e(".action-sync-manual-" + n.providerId).click(function(e) {
    var t = s.getCurrentFile();
    n.exportManual(e, t.title, t.content, function(e, n) {
     e || s.addSync(t, n);
    });
   });
  });
 }), o.onSynchronizerCreated(f), f;
}), define("providers/downloadProvider", [ "jquery", "core", "asyncRunner" ], function(e, t, n) {
 var i = "download", o = {
  providerId: i,
  sharingAttributes: [ "url" ]
 };
 return o.importPublic = function(t, i) {
  var o = n.createTask(), r = void 0, s = void 0;
  o.onRun(function() {
   var n = t.url, i = n.lastIndexOf("/");
   return -1 === i ? (o.error(Error("Invalid URL parameter.")), void 0) : (r = n.substring(i + 1), 
   e.ajax({
    url: DOWNLOAD_PROXY_URL + "download?url=" + n,
    type: "GET",
    dataType: "text",
    timeout: AJAX_TIMEOUT
   }).done(function(e) {
    s = e, o.chain();
   }).fail(function() {
    o.error(Error("Unable to access URL " + n));
   }), void 0);
  }), o.onSuccess(function() {
   i(void 0, r, s);
  }), o.onError(function(e) {
   i(e);
  }), n.addTask(o);
 }, o;
}), define("helpers/githubHelper", [ "jquery", "core", "utils", "extensionMgr", "asyncRunner" ], function(e, t, n, i, o) {
 function r(n) {
  n.onRun(function() {
   return t.isOffline === !0 ? (l = !1, n.error(Error("Operation not available in offline mode.|stopPublish")), 
   void 0) : l === !0 ? (n.chain(), void 0) : (e.ajax({
    url: "lib/github.js",
    dataType: "script",
    timeout: AJAX_TIMEOUT
   }).done(function() {
    l = !0, n.chain();
   }).fail(function(e) {
    var t = {
     error: e.status,
     message: e.statusText
    };
    a(t, n);
   }), void 0);
  });
 }
 function s(t) {
  var o = void 0, r = void 0;
  t.onRun(function() {
   function s() {
    localStorage.removeItem("githubCode"), o = n.popupWindow("github-oauth-client.html?client_id=" + GITHUB_CLIENT_ID, "stackedit-github-oauth", 960, 600), 
    o.focus(), r = setInterval(function() {
     if (o.closed === !0) {
      if (clearInterval(r), o = void 0, r = void 0, d = localStorage.githubCode, void 0 === d) return t.error(Error(u)), 
      void 0;
      localStorage.removeItem("githubCode"), t.chain(a);
     }
    }, 500);
   }
   function a() {
    e.getJSON(GATEKEEPER_URL + "authenticate/" + d, function(e) {
     void 0 !== e.token ? (l = e.token, localStorage.githubToken = l, c = new Github({
      token: l,
      auth: "oauth"
     }), t.chain()) : t.error(Error(u));
    });
   }
   if (void 0 !== c) return t.chain(), void 0;
   var l = localStorage.githubToken;
   if (void 0 !== l) return c = new Github({
    token: l,
    auth: "oauth"
   }), t.chain(), void 0;
   i.onMessage("Please make sure the Github authorization popup is not blocked by your browser.");
   var u = "Failed to retrieve a token from GitHub.";
   t.timeout = ASYNC_TASK_LONG_TIMEOUT;
   var d = void 0;
   t.chain(s);
  }), t.onError(function() {
   void 0 !== r && clearInterval(r), void 0 !== o && o.close();
  });
 }
 function a(e, n) {
  var i = void 0;
  if (e) if (logger.error(e), "string" == typeof e) i = e; else {
   if (i = "Could not publish on GitHub.", 401 === e.error || 403 === e.error) return c = void 0, 
   localStorage.removeItem("githubToken"), i = "Access to GitHub account is not authorized.", 
   n.retry(Error(i), 1), void 0;
   0 >= e.error && (l = !1, c = void 0, t.setOffline(), i = "|stopPublish");
  }
  n.error(Error(i));
 }
 var l = void 0, c = void 0, u = {};
 return u.upload = function(e, t, n, i, l, u) {
  var d = o.createTask();
  r(d), s(d), d.onRun(function() {
   function o() {
    var e = c.getUser();
    e.show(void 0, function(e, t) {
     return e ? (a(e, d), void 0) : (s = t.login, d.chain(r), void 0);
    });
   }
   function r() {
    var o = c.getRepo(s, e);
    o.write(t, n, i, l, function(e) {
     return e ? (a(e, d), void 0) : (d.chain(), void 0);
    });
   }
   var s = void 0;
   d.chain(o);
  }), d.onSuccess(function() {
   u();
  }), d.onError(function(e) {
   u(e);
  }), o.addTask(d);
 }, u.uploadGist = function(e, t, n, i, l, u) {
  var d = o.createTask();
  r(d), s(d), d.onRun(function() {
   var o = c.getGist(e), r = {};
   r[t] = {
    content: l
   }, githubFunction = o.update, void 0 === e && (githubFunction = o.create), githubFunction({
    description: i,
    "public": n,
    files: r
   }, function(t, n) {
    return t ? (404 === t.error && void 0 !== e && (t = "Gist " + e + " not found on GitHub.|removePublish"), 
    a(t, d), void 0) : (e = n.id, d.chain(), void 0);
   });
  }), d.onSuccess(function() {
   u(void 0, e);
  }), d.onError(function(e) {
   u(e);
  }), o.addTask(d);
 }, u.downloadGist = function(e, t, n) {
  var i = o.createTask();
  r(i);
  var s = void 0, a = void 0;
  i.onRun(function() {
   var n = new Github({}), o = n.getGist(e);
   o.read(function(n, o) {
    if (n) return i.error(Error("Error trying to access Gist " + e + ".")), void 0;
    s = o.description;
    var r = o.files[t];
    return void 0 === r ? (i.error(Error("Gist " + e + ' does not contain "' + t + '".')), 
    void 0) : (a = r.content, i.chain(), void 0);
   });
  }), i.onSuccess(function() {
   n(void 0, s, a);
  }), i.onError(function(e) {
   n(e);
  }), o.addTask(i);
 }, u;
}), define("providers/gistProvider", [ "utils", "helpers/githubHelper" ], function(e, t) {
 var n = "gist", i = {
  providerId: n,
  providerName: "Gist",
  sharingAttributes: [ "gistId", "filename" ]
 };
 return i.publish = function(e, n, i, o) {
  t.uploadGist(e.gistId, e.filename, e.isPublic, n, i, function(t, n) {
   return t ? (o(t), void 0) : (e.gistId = n, o(), void 0);
  });
 }, i.newPublishAttributes = function(t) {
  var n = {};
  return n.gistId = e.getInputTextValue("#input-publish-gist-id"), n.filename = e.getInputTextValue("#input-publish-filename", t), 
  n.isPublic = e.getInputChecked("#input-publish-gist-public"), t.isPropagationStopped() ? void 0 : n;
 }, i.importPublic = function(e, n) {
  t.downloadGist(e.gistId, e.filename, n);
 }, i;
}), define("sharing", [ "jquery", "underscore", "core", "utils", "extensionMgr", "fileMgr", "asyncRunner", "providers/downloadProvider", "providers/gistProvider" ], function(e, t, n, i, o, r, s) {
 var a = {}, l = t.chain(arguments).map(function(e) {
  return e && e.providerId && [ e.providerId, e ];
 }).compact().object().value();
 return a.createLink = function(i, r) {
  function a() {
   r();
  }
  var c = l[i.provider.providerId];
  if (void 0 !== i.sharingLink || void 0 === c || "markdown" != i.format) return r(), 
  void 0;
  var u = s.createTask(), d = void 0;
  u.onRun(function() {
   if (n.isOffline === !0) return u.chain(), void 0;
   var r = [ MAIN_URL, "viewer.html?provider=", c.providerId ];
   t.each(c.sharingAttributes, function(e) {
    r.push("&"), r.push(e), r.push("="), r.push(encodeURIComponent(i[e]));
   }), r = r.join(""), e.getJSON("https://api-ssl.bitly.com/v3/shorten", {
    access_token: BITLY_ACCESS_TOKEN,
    longUrl: r
   }, function(e) {
    e.data ? (d = e.data.url, i.sharingLink = d) : (o.onError("An error occured while creating sharing link."), 
    i.sharingLink = r), u.chain();
   });
  }), u.onSuccess(a), u.onError(a), s.addTask(u);
 }, n.onReady(function() {
  if (viewerMode !== !1) {
   var n = i.getURLParameter("provider");
   void 0 === n && (n = "download");
   var o = l[n];
   if (void 0 !== o) {
    var s = {};
    t.each(o.sharingAttributes, function(e) {
     var t = i.getURLParameter(e);
     return t ? (s[e] = t, void 0) : (s = void 0, void 0);
    }), void 0 !== s && (e("#wmd-preview, #file-title").hide(), o.importPublic(s, function(t, n, i) {
     if (e("#wmd-preview, #file-title").show(), !t) {
      var o = r.createFile(n, i, void 0, !0);
      r.selectFile(o);
     }
    }));
   }
  }
 }), a;
}), define("providers/bloggerProvider", [ "underscore", "utils", "helpers/googleHelper" ], function(e, t, n) {
 var i = "blogger", o = {
  providerId: i,
  providerName: "Blogger",
  defaultPublishFormat: "html",
  publishPreferencesInputIds: [ "blogger-url" ]
 };
 return o.publish = function(e, t, i, o) {
  n.uploadBlogger(e.blogUrl, e.blogId, e.postId, e.labelList, t, i, function(t, n, i) {
   return t ? (o(t), void 0) : (e.blogId = n, e.postId = i, o(), void 0);
  });
 }, o.newPublishAttributes = function(n) {
  var i = {}, o = t.getInputTextValue("#input-publish-blogger-url", n);
  void 0 !== o && (i.blogUrl = t.checkUrl(o)), i.postId = t.getInputTextValue("#input-publish-postid"), 
  i.labelList = [];
  var r = t.getInputTextValue("#input-publish-labels");
  return void 0 !== r && (i.labelList = e.chain(r.split(",")).map(function(e) {
   return t.trim(e);
  }).compact().value()), n.isPropagationStopped() ? void 0 : i;
 }, o;
}), define("providers/githubProvider", [ "utils", "settings", "helpers/githubHelper" ], function(e, t, n) {
 var i = "github", o = {
  providerId: i,
  providerName: "GitHub",
  publishPreferencesInputIds: [ "github-reponame", "github-branch" ]
 };
 return o.publish = function(e, i, o, r) {
  var s = t.commitMsg;
  n.upload(e.repository, e.branch, e.path, o, s, r);
 }, o.newPublishAttributes = function(t) {
  var n = {};
  return n.repository = e.getInputTextValue("#input-publish-github-reponame", t), 
  n.branch = e.getInputTextValue("#input-publish-github-branch", t), n.path = e.getInputTextValue("#input-publish-file-path", t), 
  t.isPropagationStopped() ? void 0 : n;
 }, o;
}), define("helpers/sshHelper", [ "jquery", "core", "asyncRunner" ], function(e, t, n) {
 function i(e) {
  e.onRun(function() {
   return t.isOffline === !0 ? (e.error(Error("Operation not available in offline mode.|stopPublish")), 
   void 0) : (e.chain(), void 0);
  });
 }
 function o(e, n) {
  var i = void 0;
  e && (logger.error(e), "string" == typeof e ? i = "SSH error: " + e + "." : (i = "Could not publish on SSH server.", 
  0 >= e.code && (t.setOffline(), i = "|stopPublish"))), n.error(Error(i));
 }
 var r = {};
 return r.upload = function(t, r, s, a, l, c, u, d) {
  var p = n.createTask();
  i(p), p.onRun(function() {
   var n = SSH_PROXY_URL + "upload", i = {
    host: t,
    port: r,
    username: s,
    password: a,
    path: l,
    title: c,
    content: u
   };
   e.ajax({
    url: n,
    data: i,
    type: "POST",
    dataType: "json",
    timeout: AJAX_TIMEOUT
   }).done(function(e) {
    return void 0 === e.error ? (p.chain(), void 0) : (o(e.error, p), void 0);
   }).fail(function(e) {
    var t = {
     code: e.status,
     message: e.statusText
    };
    o(t, p);
   });
  }), p.onSuccess(function() {
   d();
  }), p.onError(function(e) {
   d(e);
  }), n.addTask(p);
 }, r;
}), define("providers/sshProvider", [ "utils", "helpers/sshHelper" ], function(e, t) {
 var n = "ssh", i = {
  providerId: n,
  providerName: "SSH server",
  publishPreferencesInputIds: [ "ssh-host", "ssh-port", "ssh-username", "ssh-password" ]
 };
 return i.publish = function(e, n, i, o) {
  t.upload(e.host, e.port, e.username, e.password, e.path, n, i, o);
 }, i.newPublishAttributes = function(t) {
  var n = {};
  return n.host = e.getInputTextValue("#input-publish-ssh-host", t, /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/), 
  n.port = e.getInputIntValue("#input-publish-ssh-port", void 0, 0), n.username = e.getInputTextValue("#input-publish-ssh-username", t), 
  n.password = e.getInputTextValue("#input-publish-ssh-password", t), n.path = e.getInputTextValue("#input-publish-file-path", t), 
  t.isPropagationStopped() ? void 0 : n;
 }, i;
}), define("helpers/tumblrHelper", [ "jquery", "core", "utils", "extensionMgr", "asyncRunner" ], function(e, t, n, i, o) {
 function r(e) {
  e.onRun(function() {
   return t.isOffline === !0 ? (e.error(Error("Operation not available in offline mode.|stopPublish")), 
   void 0) : (e.chain(), void 0);
  });
 }
 function s(t) {
  var o = void 0, r = void 0;
  t.onRun(function() {
   function s() {
    e.getJSON(TUMBLR_PROXY_URL + "request_token", function(e) {
     void 0 !== e.oauth_token ? (p = e, t.chain(a)) : t.error(Error(d));
    });
   }
   function a() {
    localStorage.removeItem("tumblrVerifier"), o = n.popupWindow("tumblr-oauth-client.html?oauth_token=" + p.oauth_token, "stackedit-tumblr-oauth", 800, 600), 
    o.focus(), r = setInterval(function() {
     if (o.closed === !0) {
      if (clearInterval(r), o = void 0, r = void 0, p.oauth_verifier = localStorage.tumblrVerifier, 
      void 0 === p.oauth_verifier) return t.error(Error(d)), void 0;
      localStorage.removeItem("tumblrVerifier"), t.chain(c);
     }
    }, 500);
   }
   function c() {
    e.getJSON(TUMBLR_PROXY_URL + "access_token", p, function(e) {
     void 0 !== e.access_token && void 0 !== e.access_token_secret ? (localStorage.tumblrOauthParams = JSON.stringify(e), 
     l = e, t.chain()) : t.error(Error(d));
    });
   }
   if (void 0 !== l) return t.chain(), void 0;
   var u = localStorage.tumblrOauthParams;
   if (void 0 !== u) return l = JSON.parse(u), t.chain(), void 0;
   i.onMessage("Please make sure the Tumblr authorization popup is not blocked by your browser.");
   var d = "Failed to retrieve a token from Tumblr.";
   t.timeout = ASYNC_TASK_LONG_TIMEOUT;
   var p = void 0;
   t.chain(s);
  }), t.onError(function() {
   void 0 !== r && clearInterval(r), void 0 !== o && o.close();
  });
 }
 function a(e, n) {
  var i = void 0;
  if (e) if (logger.error(e), "string" == typeof e) i = e; else {
   if (i = "Could not publish on Tumblr.", 401 === e.code || 403 === e.code) return l = void 0, 
   localStorage.removeItem("tumblrOauthParams"), i = "Access to Tumblr account is not authorized.", 
   n.retry(Error(i), 1), void 0;
   0 >= e.code && (t.setOffline(), i = "|stopPublish");
  }
  n.error(Error(i));
 }
 var l = void 0, c = {};
 return c.upload = function(t, n, i, c, u, d, p) {
  var f = o.createTask();
  r(f), s(f), f.onRun(function() {
   var o = e.extend({
    blog_hostname: t,
    post_id: n,
    tags: i,
    format: c,
    title: u,
    content: d
   }, l);
   e.ajax({
    url: TUMBLR_PROXY_URL + "post",
    data: o,
    type: "POST",
    dataType: "json",
    timeout: AJAX_TIMEOUT
   }).done(function(e) {
    n = e.id, f.chain();
   }).fail(function(e) {
    var t = {
     code: e.status,
     message: e.statusText
    };
    404 === t.code && void 0 !== n && (t = "Post " + n + " not found on Tumblr.|removePublish"), 
    a(t, f);
   });
  }), f.onSuccess(function() {
   p(void 0, n);
  }), f.onError(function(e) {
   p(e);
  }), o.addTask(f);
 }, c;
}), define("providers/tumblrProvider", [ "utils", "helpers/tumblrHelper" ], function(e, t) {
 var n = "tumblr", i = {
  providerId: n,
  providerName: "Tumblr",
  publishPreferencesInputIds: [ "tumblr-hostname" ]
 };
 return i.publish = function(e, n, i, o) {
  t.upload(e.blogHostname, e.postId, e.tags, "markdown" == e.format ? "markdown" : "html", n, i, function(t, n) {
   return t ? (o(t), void 0) : (e.postId = n, o(), void 0);
  });
 }, i.newPublishAttributes = function(t) {
  var n = {};
  return n.blogHostname = e.getInputTextValue("#input-publish-tumblr-hostname", t, /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/), 
  n.postId = e.getInputTextValue("#input-publish-postid"), n.tags = e.getInputTextValue("#input-publish-tags"), 
  t.isPropagationStopped() ? void 0 : n;
 }, i;
}), define("helpers/wordpressHelper", [ "jquery", "core", "utils", "extensionMgr", "asyncRunner" ], function(e, t, n, i, o) {
 function r(e) {
  e.onRun(function() {
   return t.isOffline === !0 ? (e.error(Error("Operation not available in offline mode.|stopPublish")), 
   void 0) : (e.chain(), void 0);
  });
 }
 function s(t) {
  var o = void 0, r = void 0;
  t.onRun(function() {
   function s() {
    localStorage.removeItem("wordpressCode"), o = n.popupWindow("wordpress-oauth-client.html?client_id=" + WORDPRESS_CLIENT_ID, "stackedit-wordpress-oauth", 960, 600), 
    o.focus(), r = setInterval(function() {
     if (o.closed === !0) {
      if (clearInterval(r), o = void 0, r = void 0, u = localStorage.wordpressCode, void 0 === u) return t.error(Error(c)), 
      void 0;
      localStorage.removeItem("wordpressCode"), t.chain(a);
     }
    }, 500);
   }
   function a() {
    e.getJSON(WORDPRESS_PROXY_URL + "authenticate/" + u, function(e) {
     void 0 !== e.token ? (l = e.token, localStorage.wordpressToken = l, t.chain()) : t.error(Error(c));
    });
   }
   if (l = localStorage.wordpressToken, void 0 !== l) return t.chain(), void 0;
   i.onMessage("Please make sure the Wordpress authorization popup is not blocked by your browser.");
   var c = "Failed to retrieve a token from Wordpress.";
   t.timeout = ASYNC_TASK_LONG_TIMEOUT;
   var u = void 0;
   t.chain(s);
  }), t.onError(function() {
   void 0 !== r && clearInterval(r), void 0 !== o && o.close();
  });
 }
 function a(e, n) {
  var i = void 0;
  if (e) if (logger.error(e), "string" == typeof e) i = e; else {
   if (i = "Could not publish on WordPress.", 400 === e.code && "invalid_token" == e.message || 401 === e.code || 403 === e.code) return localStorage.removeItem("wordpressToken"), 
   i = "Access to WordPress account is not authorized.", n.retry(Error(i), 1), void 0;
   0 >= e.code && (t.setOffline(), i = "|stopPublish");
  }
  n.error(Error(i));
 }
 var l = void 0, c = {};
 return c.upload = function(t, n, i, c, u, d) {
  var p = o.createTask();
  r(p), s(p), p.onRun(function() {
   var o = WORDPRESS_PROXY_URL + "post", r = {
    token: l,
    site: t,
    postId: n,
    tags: i,
    title: c,
    content: u
   };
   e.ajax({
    url: o,
    data: r,
    type: "POST",
    dataType: "json",
    timeout: AJAX_TIMEOUT
   }).done(function(e) {
    if (e.body.ID) return n = e.body.ID, p.chain(), void 0;
    var i = {
     code: e.code,
     message: e.body.error
    };
    404 === i.code && ("unknown_blog" == i.message ? i = 'Site "' + t + '" not found on WordPress.|removePublish' : "unknown_post" == i.message && (i = "Post " + n + " not found on WordPress.|removePublish")), 
    a(i, p);
   }).fail(function(e) {
    var t = {
     code: e.status,
     message: e.statusText
    };
    a(t, p);
   });
  }), p.onSuccess(function() {
   d(void 0, n);
  }), p.onError(function(e) {
   d(e);
  }), o.addTask(p);
 }, c;
}), define("providers/wordpressProvider", [ "utils", "helpers/wordpressHelper" ], function(e, t) {
 var n = "wordpress", i = {
  providerId: n,
  providerName: "WordPress",
  defaultPublishFormat: "html",
  publishPreferencesInputIds: [ "wordpress-site" ]
 };
 return i.publish = function(e, n, i, o) {
  t.upload(e.site, e.postId, e.tags, n, i, function(t, n) {
   return t ? (o(t), void 0) : (e.postId = n, o(), void 0);
  });
 }, i.newPublishAttributes = function(t) {
  var n = {};
  return n.site = e.getInputTextValue("#input-publish-wordpress-site", t, /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/), 
  n.postId = e.getInputTextValue("#input-publish-postid"), n.tags = e.getInputTextValue("#input-publish-tags"), 
  t.isPropagationStopped() ? void 0 : n;
 }, i;
}), define("publisher", [ "jquery", "underscore", "core", "utils", "settings", "extensionMgr", "fileSystem", "fileMgr", "sharing", "providers/bloggerProvider", "providers/dropboxProvider", "providers/gistProvider", "providers/githubProvider", "providers/gdriveProvider", "providers/sshProvider", "providers/tumblrProvider", "providers/wordpressProvider" ], function(e, t, n, i, o, r, s, a, l) {
 function c(t) {
  return void 0 === t.format && (t.format = e("input:radio[name=radio-publish-format]:checked").prop("value")), 
  "markdown" == t.format ? e("#wmd-input").val() : "html" == t.format ? e("#wmd-preview").html() : h.applyTemplate(t);
 }
 function u(e, t) {
  if (0 === m.length) return e(t), void 0;
  var n = m.pop(), i = c(n);
  n.provider.publish(n, v, i, function(i) {
   if (void 0 !== i) {
    var o = "" + i;
    if (-1 !== o.indexOf("|removePublish") && a.removePublish(n), -1 !== o.indexOf("|stopPublish")) return e(i), 
    void 0;
   }
   u(e, t || i);
  });
 }
 function d(e, n) {
  var o = void 0;
  do o = "publish." + i.randomString(); while (t.has(localStorage, o));
  n.publishIndex = o, i.storeAttributes(n), a.addPublish(e, n);
 }
 function p(n) {
  var o = n.defaultPublishFormat || "markdown";
  b = n, e(".publish-provider-name").text(n.providerName), e('div[class*=" modal-publish-"]').hide().filter(".modal-publish-" + n.providerId).show(), 
  i.resetModalInputs(), e("input:radio[name=radio-publish-format][value=" + o + "]").prop("checked", !0);
  var r = i.retrieveIgnoreError(n.providerId + ".publishPreferences");
  r && (t.each(n.publishPreferencesInputIds, function(e) {
   i.setInputValue("#input-publish-" + e, r[e]);
  }), i.setInputRadio("radio-publish-format", r.format)), e("#modal-publish").modal();
 }
 function f(n) {
  var i = b, o = i.newPublishAttributes(n);
  if (void 0 !== o) {
   var r = a.getCurrentFile(), s = r.title, u = c(o);
   i.publish(o, s, u, function(e) {
    void 0 === e && (o.provider = i, l.createLink(o, function() {
     d(r, o);
    }));
   });
   var p = {};
   t.each(i.publishPreferencesInputIds, function(t) {
    p[t] = e("#input-publish-" + t).val();
   }), p.format = o.format, localStorage[i.providerId + ".publishPreferences"] = JSON.stringify(p);
  }
 }
 var h = {}, g = t.chain(arguments).map(function(e) {
  return e && e.providerId && [ e.providerId, e ];
 }).compact().object().value();
 t.each(s, function(e) {
  t.each(i.retrieveIndexArray(e.fileIndex + ".publish"), function(t) {
   try {
    var n = JSON.parse(localStorage[t]);
    n.publishIndex = t, n.provider = g[n.provider], e.publishLocations[t] = n;
   } catch (o) {
    r.onError(o), i.removeIndexFromArray(e.fileIndex + ".publish", t), localStorage.removeItem(t);
   }
  });
 }), h.applyTemplate = function(n) {
  var i = a.getCurrentFile();
  try {
   return t.template(o.template, {
    documentTitle: i.title,
    documentMarkdown: e("#wmd-input").val(),
    documentHTML: e("#wmd-preview").html(),
    publishAttributes: n
   });
  } catch (s) {
   throw r.onError(s), s;
  }
 };
 var m = [], v = void 0, y = !1;
 h.publish = function() {
  if (y !== !0 && !n.isOffline) {
   y = !0, r.onPublishRunning(!0);
   var e = a.getCurrentFile();
   v = e.title, m = t.values(e.publishLocations), u(function(t) {
    y = !1, r.onPublishRunning(!1), void 0 === t && r.onPublishSuccess(e);
   });
  }
 };
 var b = void 0;
 return n.onReady(function() {
  var n = e("#publish-menu");
  t.each(g, function(t) {
   n.append(e("<li>").append(e('<a href="#"><i class="icon-' + t.providerId + '"></i> ' + t.providerName + "</a>").click(function() {
    p(t);
   }))), e(".action-publish-" + t.providerId).click(function() {
    p(t);
   });
  }), e(".action-process-publish").click(f), e(".action-download-md").click(function() {
   var t = e("#wmd-input").val(), n = a.getCurrentFile().title;
   i.saveAs(t, n + ".md");
  }), e(".action-download-html").click(function() {
   var t = e("#wmd-preview").html(), n = a.getCurrentFile().title;
   i.saveAs(t, n + ".html");
  }), e(".action-download-template").click(function() {
   var e = h.applyTemplate(), t = a.getCurrentFile().title;
   i.saveAs(e, t + ".txt");
  });
 }), r.onPublisherCreated(h), h;
}), define("providers/gplusProvider", [ "underscore", "core", "utils", "extensionMgr", "helpers/googleHelper" ], function(e, t, n, i, o) {
 function r(t, n) {
  var i = void 0;
  return e.find(t.thumbnails, function(e) {
   var t = !1;
   return e.url.replace(/(.*\/s)\d.*?(\/[^\/]+)/, function(e, o, r) {
    i = o + n + r, t = !0;
   }), t;
  }), i;
 }
 var s = "gplus", a = {
  providerId: s,
  providerName: "Google+"
 }, l = void 0, c = void 0, u = n.retrieveIgnoreError(s + ".importImagePreferences");
 return a.importImage = function(e) {
  l = e, o.picker(function(t, o) {
   return t || 0 === o.length ? (e(t), void 0) : (c = o[0], c.thumbnails ? (n.resetModalInputs(), 
   $("#modal-import-image img").prop("src", r(c, 128)), n.setInputValue("#input-import-image-title", c.name), 
   u && n.setInputValue("#input-import-image-size", u.size), $("#modal-import-image").modal(), 
   void 0) : (i.onError("Image " + c.title + " is not accessible."), e(!0), void 0));
  }, !0);
 }, t.onReady(function() {
  $(".action-import-image").click(function() {
   var e = n.getInputIntValue("#input-import-image-size", void 0, 0) || 0, t = n.getInputTextValue("#input-import-image-title"), i = r(c, e);
   t && (i += ' "' + t + '"'), l(void 0, i), u = {}, e && (u.size = e), localStorage[s + ".importImagePreferences"] = JSON.stringify(u);
  });
 }), a;
}), define("mediaImporter", [ "jquery", "underscore", "core", "providers/gplusProvider" ], function(e, t, n) {
 var i = {}, o = t.chain(arguments).map(function(e) {
  return e && e.providerId && [ e.providerId, e ];
 }).compact().object().value();
 return n.onReady(function() {
  t.each(o, function(t) {
   e(".action-import-image-" + t.providerId).click(function() {
    var e = n.insertLinkCallback;
    n.insertLinkCallback = void 0, t.importImage(function(t, n) {
     return t ? (e(null), void 0) : (e(n || null), void 0);
    });
   });
  });
 }), i;
}), requirejs.config({
 waitSeconds: 0,
 paths: {
  jquery: "libs/jquery",
  underscore: "libs/underscore",
  jgrowl: "libs/jgrowl",
  mousetrap: "libs/mousetrap",
  text: "libs/text",
  "libs/MathJax": "../lib/MathJax/MathJax.js?config=TeX-AMS_HTML"
 },
 shim: {
  underscore: {
   exports: "_"
  },
  jgrowl: {
   deps: [ "jquery" ],
   exports: "jQuery.jGrowl"
  },
  mousetrap: {
   exports: "Mousetrap"
  },
  "libs/jquery-ui": [ "jquery" ],
  "libs/bootstrap": [ "jquery" ],
  "libs/jquery.waitforimages": [ "jquery" ],
  "libs/jquery.mousewheel": [ "jquery" ],
  "libs/layout": [ "libs/jquery-ui" ],
  "libs/Markdown.Extra": [ "libs/Markdown.Converter", "libs/prettify" ],
  "libs/Markdown.Editor": [ "libs/Markdown.Converter" ]
 }
});

var logger = {
 log: function() {},
 info: function() {},
 warn: function() {},
 error: function() {}
};

location.search.match(/(\?|&)console/) && (logger = console), require([ "jquery", "core", "synchronizer", "publisher", "mediaImporter" ], function(e, t) {
 e(function() {
  window.applicationCache && window.applicationCache.addEventListener("updateready", function() {
   window.applicationCache.status === window.applicationCache.UPDATEREADY && (window.applicationCache.swapCache(), 
   window.location.reload());
  }, !1), t.setReady();
 });
}), define("main", function() {});