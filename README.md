# aguid

A **G**lobally **U**nique **ID**entifier (GUID) generator in JS.

[![Node.js Version][node-version-image]][node-version-url]
[![NPM Version][npm-image]][npm-url]
[![Build Status](https://travis-ci.org/ideaq/aguid.svg)](https://travis-ci.org/ideaq/aguid)
[![Code Climate](https://codeclimate.com/github/ideaq/aguid/badges/gpa.svg)](https://codeclimate.com/github/ideaq/aguid)
[![Test Coverage](https://codeclimate.com/github/ideaq/aguid/badges/coverage.svg)](https://codeclimate.com/github/ideaq/aguid)
[![Dependency Status](https://david-dm.org/ideaq/aguid.svg)](https://david-dm.org/ideaq/aguid)

## Why?

There are already *great* **node** module(s) for generating *random* UUIDs:
https://www.npmjs.com/search?q=uuid

What we need is a way to return the *same* UUID/GUID for a *given* input string;
i.e. [***Deterministic***](http://en.wikipedia.org/wiki/Deterministic_system) !

### Use Case

The **use-case** is very specific: generate a **key** for a record in a **database**.

Imagine you want to store a person's *personal* details in a record
but don't want use a *username* or *email* as the ***key*** for the record.
We solved this by creating a UUID (string) from the username or email address
and using that instead. (see usage below)

## Usage

### Install

```sh
npm install aguid --save
```

### Generate a Consisten GUID given an input

```javascript
var aguid = require('aguid');

var email = "hello@world.io";
var guid  = aguid(email); // d828ed52-32ed-4908-86df-df934d3c315d (ALWAYS)
// use the guid as the key for our record in Redis, ElasticSearch, Postgres, etc.

```

### Generate a *Random* GUID when invoked without argument

```javascript
var aguid = require('aguid');
var guid  = aguid(); // 525be54a-1101-46bf-97d7-2e9c89dd1b16 (*Random*)
// use for what ever you need a *random* guid

```


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
