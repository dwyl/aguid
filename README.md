# aguid

A **G**lobally **U**nique **ID**entifier (GUID) generator in JS.

[![Node.js Version][node-version-image]][node-version-url]
[![NPM Version][npm-image]][npm-url]
[![Build Status](https://travis-ci.org/ideaq/aguid.svg)](https://travis-ci.org/ideaq/aguid)
[![Code Climate](https://codeclimate.com/github/ideaq/aguid/badges/gpa.svg)](https://codeclimate.com/github/ideaq/aguid)
[![Test Coverage](https://codeclimate.com/github/ideaq/aguid/badges/coverage.svg)](https://codeclimate.com/github/ideaq/aguid)
[![Dependency Status](https://david-dm.org/ideaq/aguid.svg)](https://david-dm.org/ideaq/aguid)


## Research

### Background

+ Wikipedia UUID (*gentler* intro):
http://en.wikipedia.org/wiki/Universally_unique_identifier
+ Universally Unique IDentifier (UUID) Specification:
http://tools.ietf.org/html/rfc4122
+ V.4 *Random* UUID:
http://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_.28random.29

### Implementation

+ Hex to Base64 and back:
http://stackoverflow.com/questions/23190056/hex-to-base64-converter-for-javascript
+ Snowflake approach:
http://blog.tompawlak.org/generate-unique-identifier-nodejs-javascript
+ GUIDs using Math.random() https://gist.github.com/jed/982883

### Dependency

Instead of trying to re-invent this, I invested the time to read,
download and play with the source-code
for **node-uuid** (the most popular & *performant* module for creating GUIDs):
https://github.com/broofa/node-uuid
See: [#3](https://github.com/ideaq/aguid/issues/3)

[node-version-image]: https://img.shields.io/node/v/aguid.svg?style=flat
[node-version-url]: http://nodejs.org/download/
[npm-image]: https://img.shields.io/npm/v/aguid.svg?style=flat
[npm-url]: https://npmjs.org/package/aguid
