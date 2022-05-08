# react-3d-icons

<div align="center" markdown="1">
    <img src="https://i.imgur.com/KKT0e2S.png" width="800"></img>
</div>

A simple and easy-to-use library for adding 3d icons into any React project.

## Example

![Gif Demonstration](https://i.imgur.com/P6y8rJk.gif)

The library provides thousands of icons ready to go, and can be extended with any SVG you want.

## Installation

ThreeJS and React Three Fiber are expected to already be installed in the project.

```sh
npm install three @react-three/fiber

npm install react-3d-icons
```

## How to use

Import the Icon element:

```javascript
import { Icon } from "react-3d-icons";
```

Import icon(s) you would like to use (full list below):

```javascript
import { twitter, github } from "react-3d-icons";
```

Add the Icon element and specify your icon as well as any other parameters.  
If size is unspecified, the icon's canvas will fill the size of its parent.

```javascript
<Icon file={twitter} color={"#1DA1F2"} scale={10} style={{ height: "100px", width: "100px" }} />

<div style={{ height: "150px", width: "150px" }}>
  <Icon file={github} color={'#1c1c1c'} scale={10}/>
</div>

```

Voila! Your icon is now display and can be treated as any other image or text element.

![Above example rendered](https://i.imgur.com/mNWWn2P.png)

## Opening Links

You can pass any url into the 'link' property of the Icon element, and clicking on the icon will open that link in a new tab.

```javascript
<Icon file={npm} link='https://www.npmjs.com/package/react-3d-icons' />
```

## Icons

The npm package comes pre-configured with the entire [simpleicons.org](https://simpleicons.org/) catalogue.  
The import names are lowercase, without spaces, and numbers & periods have been converted to words.  
(Ex: Twitter -> twitter, Google Maps -> googlemaps, About.me -> aboutdotme, 1Password -> onepassword)

```javascript
import { twitter } from "react-3d-icons";

<Icon file='mylogo' />;
```

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
| style           | The CSS styles that will applied to the container of the element.                                                                                                                                         | object                                              | {}            |           |
| className       | The CSS classes that will be applied to the container of the element.                                                                                                                                     | string                                              | ''            |           |
| color           | The color of your icon.                                                                                                                                                                                   | string ('#ff1965') or hexadecimal number (0xff1965) | #000000       |           |
| lightColor      | The color of the light illuminating your icon.                                                                                                                                                            | string ('#ff1965') or hexadecimal number (0xff1965) | #ffffff       |           |
| depth           | The depth of the extrusion of your icon.                                                                                                                                                                  | number                                              | 0.5           |           |
| extrudeSettings | Custom ThreeJS extrusion settings you can apply if you want more control than just depth. See [ThreeJS Docs](https://threejs.org/docs/index.html?q=extru#api/en/geometries/ExtrudeGeometry) for more info | object                                              | _undefined_   |           |
| scale           | The scale of your icon, some may initially be too small or large.                                                                                                                                         | number                                              | 1             |           |
| position        | An array of the X, Y, and Z positions of your icon in 3d space.                                                                                                                                           | array                                               | [0, 0, 0]     |           |
| rotation        | An array of the X, Y, and Z rotation of your icon. Unlike ThreeJS, which uses radian rotation, this uses "normal" degree rotation (Ex: 360 degrees is a full turn)                                        | array                                               | [0, 0, 0]     |           |
| spin            | Set to true to make your icon spin in a circle, or set it to a number and increase or decrease it to change the speed of rotation.                                                                        | number OR boolean                                   | 0             |           |
| link            | If specified, the link that will be opened upon clicking on the icon.                                                                                                                                     | string                                              | _undefined_   |           |

## Issues

This is a very new project, so obviously it is not perfect yet. If you have issues or feature requests you can email me at logan@beebl.es and I will do my best to help you.
