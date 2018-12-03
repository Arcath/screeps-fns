# Screeps-fns

Screeps-fns is designed to be a `date-fns` like library for screeps.

Some of its functions are very basic, for example `isRoomVisible` is a one liner. The idea is to make your code more readable AND prevent future issues from API changes.

## Install

> npm install --save screeps-fns

## Usage

To keep your bundle size down you can require functions directly. For example

```js
const ivm = require('screeps-fns/ivm')
```