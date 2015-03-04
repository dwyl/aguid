# aguid

A Globally Unique IDentifier (GUID) generator in JS.


## Research

### Background

+ Wikipedia UUID (*gentler* intro):
http://en.wikipedia.org/wiki/Universally_unique_identifier
+ Universally Unique IDentifier (UUID) Specification:
http://tools.ietf.org/html/rfc4122

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
