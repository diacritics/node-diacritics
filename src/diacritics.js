/*!***************************************************
 * node-diacritics-transliterator core & cache
 * Diacritic transliteration tools using diacritics.io
 * API from http://diacritics.io/
 * Copyright (c) 2016–2017 The Diacritics Authors
 * Released under the MIT license https://git.io/v1EBe
 *****************************************************/
"use strict";

/**
 * Core diacritics module
 */
class Diacritics {
    constructor() {
        /**
         * Current version of the diacritics API
         * @type {string}
         * @access protected
         */
        this._version = "v1";
        /**
         * The URL to the diacritics API
         * @type {string}
         * @access public
         */
        this.databaseURL = "http://api.diacritics.io/";
        /**
         * All valid filter properties of the diacritics API for validation
         * purposes
         * @type {string[]}
         * @access public
         */
        this.validFilters = [
            "alphabet",
            "continent",
            "country",
            "language",
            "variant",
            "base",
            "decompose",
            "diacritic"
        ];
    }

    /**
     * Get currently set API version
     * @return {string} - Major version formatted as "v#" where "#" is the
     * version number
     * @example
     * require("diacritics-transliterator").version;
     * @access public
     */
    get version() {
        return this._version;
    }

    /**
     * Set API version
     * @param  {(string|number)} version - All non-digits & decimal values will
     * be ignored
     * @return {string} - Version formatted as "v#" where "#" is the version
     * number
     * @example
     * require("diacritics-transliterator").version = "v1";
     * @access public
     */
    set version(newVersion) {
        const newV = this.convertVersionToInt(newVersion),
            oldV = this.convertVersionToInt(this._version);
        if (newV > 0 && newV <= oldV) {
            this._version = newVersion;
        }
        return this._version;
    }

    /**
     * Converts a string version, e.g. "v1" to a number, e.g. "1"
     * @param version - The version to convert
     * @returns {number}
     * @access public
     */
    convertVersionToInt(version) {
        return parseInt((version || "").toString().replace(/[^\d.]/g, ""), 10);
    }
}

let singleton = new Diacritics();
module.exports = singleton;
