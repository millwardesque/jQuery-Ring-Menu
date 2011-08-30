# jQuery Ring Menu: A plugin for jQuery that creates an expanding & collapsing ring menu out of a set of HTML elements

By Chris Millward <cmillward@millwardesque.com>, August, 2011.  See LICENSE.txt file for license details.

# Overview

This plugin was designed to provide a animated ring menu that can replace a standard list-based menu.
All click events or link targets in the ring menu items themselves are triggered by clicking not just on the item itself,
but also by clicking anywhere in the "wedge" of the ring assigned to that item.  This provides larger click targets for
mobile users, and less distance to travel for regular mouse users.
 
# Compatibility

At the time of writing, this plugin has been tested with jQuery 1.6.1.  It probably works with others, but they have yet to be tested.

# Installation & Usage

1. Include in your HTML after jQuery itself.
2. Initialize the ring-menu for a particular container of items by calling:

$("#example-container").ringmenu();

after the document is ready.

You may provide a set of options as the lone parameter to the ringmenu() function to change the behaviour of the plugin.  See the "Configuration Parameters" section below for details

You may also manually trigger the menu to open, close, or toggle after the initial call to ringmenu() by calling the ringmenu() function on the same element and passing one of the following strings instead of the Options array
1. toggle.  Open the menu if it's closed, and close the menu if it's open.
2. open.  Open the menu if it's closed.  If the menu is already open, do nothing.
3. close.  Close the menu if it's open.  If the menu is already closed, do nothing.

e.g.
$("#example-container").ringmenu();  // Initialize the ring menu
$("#my-trigger").click(function() {  // Toggle the ring menu when someone clicks on the #my-trigger element
  $("#example-container").ringmenu('toggle');
});

Refer to the example/ folder for a working demo and details of the implementation

# Configuration Parameters

radian_offset: Default = Math.PI / 2.0. Provide a number of radians to rotate all of the items from their default position in the ring.
  Useful for positioning the first element of the list at the top of the ring (90 degrees) rather than the far right (0 degrees) .
      
item_type: Default = 'li'.  Selector string used to identify all of the items in the list that will be used in the menu

radius: Default = 100. Radius of the ring in pixels.

duration: Deafult = 350.  Duration of the ring expand and close animations

use_anchor_hrefs: Default = true. If true, the plugin will generate click events for each menu item which contains an anchor with an href attribute.
  This 'fixes' the manually generated "click" event's behaviour of not actually directing the user to the destination specified in an anchor.

show_selected_when_closed = true. If true, show the selected menu item when the menu is closed.  This will also show the first tem on load.  If false, the selected item is hidden on close, and the first item is hidden on load.