/*!
 * Griday Mate - v0.1.0
 * https://github.com/ryancdotnet/griday-mate
 * 
 * Developed by Ryan C (RyanC.net)
 * Copyright 2020. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/*
    TODO: Lots...
    - There are many assumptions made about the usage.
    - Assumes sizer is percentage-size widths and pixel-sized heights.
    - Assumes sizer is located inside the grid.
    - There are lots of features intended to be developed.
*/
var GridayMate = GridayMate || function (options) {
    var self = this;
    var options = options || {};
    var deferSetup = options.deferSetup || false;
    var gridSizingElementClassName = options.sizingElementClassName || null; //TODO: Make required
    var baseWidthPercent = null;
    var baseHeightPixels = null;

    self.setup = setup;
    function setup() {
        //Capture sizes
        var sizer = document.getElementsByClassName(gridSizingElementClassName)[0];

        //Calculate the percentage width - RIGHT NOW
        baseWidthPercent = (sizer.offsetWidth / sizer.parentElement.offsetWidth) * 100;
        baseHeightPixels = sizer.offsetHeight;
    }

    self.place = place;
    function place(elementId, x, y) {
        if (!baseWidthPercent) {
            throwError("You must run .setup() first!");
        }
        var elem = document.getElementById(elementId);

        elem.style.position = "absolute"; //Force absolute
        elem.style.top = (y * baseHeightPixels).toString() + "px";
        elem.style.left = (x * baseWidthPercent).toString() + "%";
    }

    self.dispose = dispose;
    function dispose() {
        //Nothing todo yet.
    }

    function throwError(message) {
        throw "GridayMate: " + message;
    }

    if (!deferSetup) {
        setup();
    }
};