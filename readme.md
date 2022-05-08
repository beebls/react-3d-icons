# react-3d-icons

<div align="center" markdown="1">
    <img src="https://i.imgur.com/KKT0e2S.png" width="800"></img>
</div>

A simple and easy-to-use library for adding 3d icons to any React project.

## Example

![Gif Demonstration](https://i.imgur.com/P6y8rJk.gif)

The library provides thousands of icons for you to use, or you can upload any svg you want and it will do the rest.

## Installation

This library requires ThreeJS and React-Three-Fiber to already be installed in the project.

```sh
npm install three @react-three/fiber react-3d-icons
```

## How to use

Import the main Icon react element:

```javascript
import { Icon } from "react-3d-icons";
```

Import icons (see below for a list):

```javascript
import { twitter } from "react-3d-icons";
```

Create a div or container element with a width/height, the icon's canvas will fill its parent.

Add the Icon element and specify your icon, as well as any other parameters you want.

```javascript
<div style={{ height: "100px", width: "100px" }}>
  <Icon file={twitter} color={"#1DA1F2"} scale={10} />
</div>
```

Voila! Your icon is now display and can be treated as any other image or text element.  
![Above example rendered](https://i.imgur.com/NddTQ8u.png)

## Opening Link

You can pass any url into the 'link' property of the Icon element, and clicking on the icon will open that link in a new tab.

```javascript
<Icon file={npm} link='https://www.npmjs.com/package/react-3d-icons' />
```

## Icons

The npm package comes pre-configured will all of the icons from [simpleicons.org](https://simpleicons.org/)  
The names are lowercase, without spaces, and numbers (and periods) have been converted to words.  
(Ex: Twitter -> twitter, Google Maps -> googlemaps, About.me -> aboutdotme, 1Password -> onepassword)

Additionally, you can import your own SVGs, and pass references to them into the 'file' property.

React Example:

```javascript
import { mylogo } from "./icons/logo.svg";

<Icon file='mylogo' />;
```

## Customization

The Icon component comes with properties which you can customize to change how your icon looks and behaves.

| Property        | Description                                                                                                                                                                                               | Type                                                | Default Value | Required? |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ------------- | --------- |
| file            | The SVG you want to use in your icon.                                                                                                                                                                     | string                                              | _undefined_   | ✅        |
| color           | The color of your icon                                                                                                                                                                                    | string ('#ff1965') or hexadecimal number (0xff1965) | #000000       |           |
| lightColor      | The color of the light illuminating your icon                                                                                                                                                             | string ('#ff1965') or hexadecimal number (0xff1965) | #ffffff       |           |
| depth           | The depth of the extrusion of your icon                                                                                                                                                                   | number                                              | 0.5           |           |
| extrudeSettings | custom ThreeJS extrusion settings you can apply if you want more control than just depth. See [ThreeJS Docs](https://threejs.org/docs/index.html?q=extru#api/en/geometries/ExtrudeGeometry) for more info | object                                              | _undefined_   |           |
| scale           | The scale of your icon, some may initially be too small or large.                                                                                                                                         | number                                              | 1             |           |
| position        | An array of the X, Y, and Z positions of your icon in 3d space                                                                                                                                            | array                                               | [0, 0, 0]     |           |
| rotation        | An array of the X, Y, and Z rotation of your icon. Unlike ThreeJS, which uses radian rotation, this uses "normal" degree rotation (Ex: 360 degrees is a full turn)                                        | array                                               | [0, 0, 0]     |           |
| spin            | Set to true to make your icon spin in a circle, or set it to a number and increase or decrease it to change the speed of rotation                                                                         | number OR boolean                                   | 0             |           |
| link            | If specified, the link that will be opened upon clicking on the icon                                                                                                                                      | string                                              | _undefined_   |           |

## Issues

This is a very new project, so obviously it is not perfect yet. If you have issues or feature requests you can email me at logan@beebl.es and I will do my best to help you.
