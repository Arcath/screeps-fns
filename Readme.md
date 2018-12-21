# Screeps-fns

[![Build Status](https://travis-ci.org/Arcath/screeps-fns.svg?branch=master)](https://travis-ci.org/Arcath/screeps-fns) [![Coverage Status](https://coveralls.io/repos/github/Arcath/screeps-fns/badge.svg?branch=master)](https://coveralls.io/github/Arcath/screeps-fns?branch=master)

Screeps-fns is designed to be a `date-fns` like library for screeps.

Some of its functions are very basic, for example `isRoomVisible` is a one liner. The idea is to make your code more readable AND prevent future issues from API changes.

## Install

> npm install --save screeps-fns

## Usage

To keep your bundle size down you can require functions directly. For example

```js
const ivm = require('screeps-fns/lib/ivm')
```

or you can import from the module like so:

```ts
import {ivm} from 'screeps-fns'
```

both methods work fine but importing may add more code than needed.

## Functions

For a list of functions and documentation head to [screep-fns](https://screeps-fns.arcath.net/)
