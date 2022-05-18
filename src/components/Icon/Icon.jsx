import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { SVGLoader } from "./SVGLoader";
import { useRef } from "react";

function Icon({
  file = undefined,
  color = "#000000",
  lightColor = "#ffffff",
  extrudeSettings = undefined,
  depth = 0.5,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  spin = 0,
  link = undefined,
  style = {},
  className = "",
}) {
  // Allows using either just a depth value, or a full extrude config
  const extrude = extrudeSettings || { depth: depth };

  // Bootleg type checking
  if (file === undefined) {
    throw new Error("No file specified for Socialicon");
  }
  if (position.length !== 3) {
    throw new Error(
      "Invalid position value. Correct format is [posX, posY, posZ]"
    );
  }
  if (rotation.length !== 3) {
    throw new Error(
      "Invalid rotation value. Correct format is [rotX, rotY, rotZ]"
    );
  }
  if (typeof extrude !== "object") {
    throw new Error(
      "extrudeSettings must be an object. View the ThreeJS ExtrudeGeometry docs for more info"
    );
  }
  if (typeof link !== "string" && typeof link !== "undefined") {
    throw new Error(
      "Invalid value for link property of Icon, must be a string"
    );
  }
  if (typeof className !== "string") {
    throw new Error(
      "Invalid value for className property of Icon, must be a string"
    );
  }
  if (typeof style !== "object") {
    throw new Error(
      "Invalid value for style property of Icon, must be an object"
    );
  }

  function ExtrudedSvg() {
    //Load svg and get dimensions
    const {
      paths,
      xml: {
        viewBox: {
          baseVal: { width, height },
        },
      },
    } = useLoader(SVGLoader, file);

    //I want all icons to be by default scaled to an equivalent of a 10x10 svg viewbox
    //This initially scales the svg down to that 10x10 viewbox, then multiplies it by the scale factor the user sets
    //So if the svg is originally 24x24, a scale of 1 would be a 2.4x2.4 viewbox
    const scaleAdjusted = [(10 / width) * scale, (10 / width) * scale, 1];

    //Since svgs start from the top left corner, this does math to adjust it up and back by half of its size, so that it is cenetered in its canvas
    //It also offsets the Z axis by the thickness of the extrude, so that it is 100% centered
    const posAdjusted = [
      -((scaleAdjusted[0] / 2) * width) + position[0],
      (scaleAdjusted[1] / 2) * height + position[1],
      extrude.depth / 2 + position[2],
    ];

    //ThreeJS is based off of radian rotation, but to make it simpler I want the icons to be simple degree rotation
    //This "converts" them
    const rotAdjusted = [
      (Math.PI / 180) * rotation[0],
      (Math.PI / 180) * rotation[1],
      (Math.PI / 180) * rotation[2],
    ];

    // Each svg has multiple paths, and each path has multiple shapes.
    // The forEach loop splits the paths into their shapes
    // Then the pathToMesh function takes a shape and it's path, and returns a mesh with that info
    const shapeArr = [];
    paths.forEach((i) => {
      const shapes = SVGLoader.createShapes(i);
      shapes.forEach((j) => {
        shapeArr.push({ path: i, shape: j });
      });
    });
    function pathToMesh(i, index) {
      return (
        <mesh key={index}>
          <meshStandardMaterial color={color} />
          <extrudeGeometry args={[i.shape, extrude]} />
        </mesh>
      );
    }

    //ref is used for spin
    const svgRef = useRef();
    useFrame(() => {
      if (spin) {
        svgRef.current.rotation.y += 0.01 * spin;
      }
    });

    // By nesting everything in an extra group, the outermost group's center is the actual center, instead of being off because of the position adjustments.
    return (
      <group
        ref={svgRef}
        onClick={() => {
          if (link) window.open(link);
        }}
        rotation={rotAdjusted}>
        <group
          position={posAdjusted}
          scale={scaleAdjusted}
          rotation={[(Math.PI / 2) * 2, 0, 0]}>
          {shapeArr.map((i, index) => pathToMesh(i, index))}
        </group>
      </group>
    );
  }

  return (
    <div
      style={
        Object.keys(style).length > 0
          ? style
          : { height: "100%", width: "100%" }
      }
      className={className}>
      <Canvas camera={{ position: [0, 0, 100] }}>
        <pointLight position={[0, 0, 100]} color={lightColor} intensity={1} />
        <ambientLight color={lightColor} intensity={0.1} />
        <ExtrudedSvg />
      </Canvas>
    </div>
  );
}

export default Icon;
