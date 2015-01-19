[![Stories in Ready](https://badge.waffle.io/strap/strapkit_pebble.png?label=ready&title=Ready)](https://waffle.io/strap/strapkit_pebble)
strapkit_pebble
===============

StrapKit Pebble is the library that generates the Pebble code for a StrapKit-based project. StrapKit uses this library behind the scenes as part of the `strapkit create` command, but you can also use it ad-hoc to generate vanilla Pebble projects.

## Checking Dependencies

Strap Kit requires git, python, node, and npm at a minimum, and platform specific SDK's like Pebble and Android Wear to build for those platforms. To check your dependencies, you can run the command below (requires curl and bash). For a full run down of how to install the dependencies, go to the <a href="https://docs.straphq.com" target="_blank">full developer docs</a>.

```bash
$> curl http://check-config.straphq.com | bash
```

## Installation

```bash
$> sudo npm install strapkit -g
```

## Using the CLI

* Create your Strapkit project.
```bash
$> strapkit create TestProject
```
OR
```bash
$> strapkit create ./TestProject com.testproject TestProject
```

```strapkit create``` generates a starter app.js in ./TestProject/js. This is where you write your app using the API documentation below.

* Choose Pebble deployment platforms.
```bash
strapkit platform add pebble
```

* Compile for all platforms.
```bash
$> strapkit build
```
OR, to compile for Pebble only, you may specify just Pebble.
```bash
$> strapkit build pebble
```
If you wish to forego using Strap kit to install your app, the compiled binary of your app is available in a "build" folder after running the Strap kit build command.

* Install to device.
```bash
$> strapkit install Phones.IP.Goes.Here
```
Publish 'n' Profit!
