/**
* @author       Richard Davey <rich@photonstorm.com>
* @author       Chad Engler <chad@pantherdev.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* Creates a Ellipse object. A curve on a plane surrounding two focal points.
*
* @class Phaser.Ellipse
* @constructor
* @param {number} [x=0] - The X coordinate of the upper-left corner of the framing rectangle of this ellipse.
* @param {number} [y=0] - The Y coordinate of the upper-left corner of the framing rectangle of this ellipse.
* @param {number} [width=0] - The overall width of this ellipse.
* @param {number} [height=0] - The overall height of this ellipse.
*/
Phaser.Ellipse = function (x, y, width, height) {

    x = x || 0;
    y = y || 0;
    width = width || 0;
    height = height || 0;

    /**
    * @property {number} x - The X coordinate of the upper-left corner of the framing rectangle of this ellipse.
    */
    this.x = x;

    /**
    * @property {number} y - The Y coordinate of the upper-left corner of the framing rectangle of this ellipse.
    */
    this.y = y;

    /**
    * @property {number} width - The overall width of this ellipse.
    */
    this.width = width;

    /**
    * @property {number} height - The overall height of this ellipse.
    */
    this.height = height;

    /**
    * @property {number} type - The const type of this object.
    * @readonly
    */
    this.type = Phaser.ELLIPSE;

};

Phaser.Ellipse.prototype = {

    /**
    * Sets the members of the Ellipse to the specified values.
    * @method Phaser.Ellipse#setTo
    * @param {number} x - The X coordinate of the upper-left corner of the framing rectangle of this ellipse.
    * @param {number} y - The Y coordinate of the upper-left corner of the framing rectangle of this ellipse.
    * @param {number} width - The overall width of this ellipse.
    * @param {number} height - The overall height of this ellipse.
    * @return {Phaser.Ellipse} This Ellipse object.
    */
    setTo: function (x, y, width, height) {

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        return this;

    },

    /**
    * Returns the framing rectangle of the ellipse as a Phaser.Rectangle object.
    *
    * @method Phaser.Ellipse#getBounds
    * @return {Phaser.Rectangle} The bounds of the Ellipse.
    */
    getBounds: function () {

        return new Phaser.Rectangle(this.x - this.width, this.y - this.height, this.width, this.height);

    },

    /**
    * Copies the x, y, width and height properties from any given object to this Ellipse.
    *
    * @method Phaser.Ellipse#copyFrom
    * @param {any} source - The object to copy from.
    * @return {Phaser.Ellipse} This Ellipse object.
    */
    copyFrom: function (source) {

        return this.setTo(source.x, source.y, source.width, source.height);

    },

    /**
    * Copies the x, y, width and height properties from this Ellipse to any given object.
    * @method Phaser.Ellipse#copyTo
    * @param {any} dest - The object to copy to.
    * @return {object} This dest object.
    */
    copyTo: function(dest) {

        dest.x = this.x;
        dest.y = this.y;
        dest.width = this.width;
        dest.height = this.height;

        return dest;

    },

    /**
    * Returns a new Ellipse object with the same values for the x, y, width, and height properties as this Ellipse object.
    * @method Phaser.Ellipse#clone
    * @param {Phaser.Ellipse} [output] - Optional Ellipse object. If given the values will be set into the object, otherwise a brand new Ellipse object will be created and returned.
    * @return {Phaser.Ellipse} The cloned Ellipse object.
    */
    clone: function(output) {

        if (output === undefined || output === null)
        {
            output = new Phaser.Ellipse(this.x, this.y, this.width, this.height);
        }
        else
        {
            output.setTo(this.x, this.y, this.width, this.height);
        }

        return output;

    },

    /**
    * Return true if the given x/y coordinates are within this Ellipse object.
    *
    * @method Phaser.Ellipse#contains
    * @param {number} x - The X value of the coordinate to test.
    * @param {number} y - The Y value of the coordinate to test.
    * @return {boolean} True if the coordinates are within this ellipse, otherwise false.
    */
    contains: function (x, y) {

        return Phaser.Ellipse.contains(this, x, y);

    },

    /**
    * Returns a uniformly distributed random point from anywhere within this Ellipse.
    *
    * @method Phaser.Ellipse#random
    * @param {Phaser.Point|object} [out] - A Phaser.Point, or any object with public x/y properties, that the values will be set in.
    *     If no object is provided a new Phaser.Point object will be created. In high performance areas avoid this by re-using an existing object.
    * @return {Phaser.Point} An object containing the random point in its `x` and `y` properties.
    */
    random: function (out) {

        if (out === undefined) { out = new Phaser.Point(); }

        var p = Math.random() * Math.PI * 2;
        var r = Math.random();

        out.x = Math.sqrt(r) * Math.cos(p);
        out.y = Math.sqrt(r) * Math.sin(p);

        out.x = this.x + (out.x * this.width / 2.0);
        out.y = this.y + (out.y * this.height / 2.0);

        return out;

    },

    /**
    * Returns a string representation of this object.
    * @method Phaser.Ellipse#toString
    * @return {string} A string representation of the instance.
    */
    toString: function () {
        return "[{Phaser.Ellipse (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")}]";
    }

};

Phaser.Ellipse.prototype.constructor = Phaser.Ellipse;

/**
* The left coordinate of the Ellipse. The same as the X coordinate.
* @name Phaser.Ellipse#left
* @propety {number} left - Gets or sets the value of the leftmost point of the ellipse.
*/
Object.defineProperty(Phaser.Ellipse.prototype, "left", {

    get: function () {
        return this.x;
    },

    set: function (value) {

        this.x = value;

    }

});

/**
* The x coordinate of the rightmost point of the Ellipse. Changing the right property of an Ellipse object has no effect on the x property, but does adjust the width.
* @name Phaser.Ellipse#right
* @property {number} right - Gets or sets the value of the rightmost point of the ellipse.
*/
Object.defineProperty(Phaser.Ellipse.prototype, "right", {

    get: function () {
        return this.x + this.width;
    },

    set: function (value) {

        if (value < this.x)
        {
            this.width = 0;
        }
        else
        {
            this.width = value - this.x;
        }
    }

});

/**
* The top of the Ellipse. The same as its y property.
* @name Phaser.Ellipse#top
* @property {number} top - Gets or sets the top of the ellipse.
*/
Object.defineProperty(Phaser.Ellipse.prototype, "top", {

    get: function () {
        return this.y;
    },

    set: function (value) {
        this.y = value;
    }

});

/**
* The sum of the y and height properties. Changing the bottom property of an Ellipse doesn't adjust the y property, but does change the height.
* @name Phaser.Ellipse#bottom
* @property {number} bottom - Gets or sets the bottom of the ellipse.
*/
Object.defineProperty(Phaser.Ellipse.prototype, "bottom", {

    get: function () {
        return this.y + this.height;
    },

    set: function (value) {

        if (value < this.y)
        {
            this.height = 0;
        }
        else
        {
            this.height = value - this.y;
        }
    }

});

/**
* Determines whether or not this Ellipse object is empty. Will return a value of true if the Ellipse objects dimensions are less than or equal to 0; otherwise false.
* If set to true it will reset all of the Ellipse objects properties to 0. An Ellipse object is empty if its width or height is less than or equal to 0.
* @name Phaser.Ellipse#empty
* @property {boolean} empty - Gets or sets the empty state of the ellipse.
*/
Object.defineProperty(Phaser.Ellipse.prototype, "empty", {

    get: function () {
        return (this.width === 0 || this.height === 0);
    },

    set: function (value) {

        if (value === true)
        {
            this.setTo(0, 0, 0, 0);
        }

    }

});

/**
* Return true if the given x/y coordinates are within the Ellipse object.
*
* @method Phaser.Ellipse.contains
* @param {Phaser.Ellipse} a - The Ellipse to be checked.
* @param {number} x - The X value of the coordinate to test.
* @param {number} y - The Y value of the coordinate to test.
* @return {boolean} True if the coordinates are within this ellipse, otherwise false.
*/
Phaser.Ellipse.contains = function (a, x, y) {

    if (a.width <= 0 || a.height <= 0) {
        return false;
    }

    //  Normalize the coords to an ellipse with center 0,0 and a radius of 0.5
    var normx = ((x - a.x) / a.width) - 0.5;
    var normy = ((y - a.y) / a.height) - 0.5;

    normx *= normx;
    normy *= normy;

    return (normx + normy < 0.25);

};

/**
* Checks if the given Ellipse and Line objects intersect.
* @method Phaser.Ellipse.intersectsLine
* @param {Phaser.Ellipse} e - The Ellipse object to test.
* @param {Phaser.Line} l - The Line object to test.
* @param {boolean} [returnPoints] - optional Array Object, Return an array of intersection points if true, otherwise return boolean.
* @return {boolean} True if the two objects intersect, otherwise false.
*/
Phaser.Ellipse.intersectsLine = function (e, l, returnPoints) {
    var h = e.x;
    var k = e.y;
    var m = ((l.end.y - l.start.y) / (l.end.x - l.start.x));
    var n = l.end.y - (m * l.end.x);
    var a = e.width / 2;
    var b = e.height / 2;
    var del = n + m * h;

    var x0 = (h * (b * b) - m * (a * a) * (n - k) + a * b * (Math.sqrt((a * a) * (m * m) + (b * b) - (del * del) - (k * k) + (2 * del * k)))) / ((a * a) * (m * m) + (b * b));
    var x1 = (h * (b * b) - m * (a * a) * (n - k) - a * b * (Math.sqrt((a * a) * (m * m) + (b * b) - (del * del) - (k * k) + (2 * del * k)))) / ((a * a) * (m * m) + (b * b));

    var y0 = m * x0 + n;
    var y1 = m * x1 + n;
    var p0 = new Phaser.Point(x0, y0);
    var p1 = new Phaser.Point(x1, y1);
    var p0Exists = l.pointOnSegment(p0.x, p0.y, 0.01);
    var p1Exists = l.pointOnSegment(p1.x, p1.y, 0.01);

    if (p0Exists && p1Exists)
    {
        return returnPoints ? [p0, p1] : true;
    }
    else if (p0Exists)
    {
        return returnPoints ? [p0] : true;
    }
    else if (p1Exists)
    {
        return returnPoints ? [p1] : true;
    }
    else
    {
        return returnPoints ? [] : false;
    }
};


//   Because PIXI uses its own Ellipse, we'll replace it with ours to avoid duplicating code or confusion.
PIXI.Ellipse = Phaser.Ellipse;
