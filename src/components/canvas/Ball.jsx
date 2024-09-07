import { Suspense } from "react";
import {Canvas} from "@react-three/fiber";
import {useTexture, Decal, OrbitControls, Float, Preload} from "@react-three/drei"; 
import CanvasLoader from "../Loader";


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} floatIntensity={2} rotationIntensity={1}>
      <ambientLight intensity={0.25}/>
      <directionalLight color="fff" position={[0, 0, 3.5]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry arg={[1.1]}/>
        <meshStandardMaterial polygonOffset polygonOffsetFactor={-5} flatShading color="#fff8eb"/>
        <Decal map={decal} position={[0, 0, 1]} rotation={[2 *Math.PI, 0, 6.25]}/>
      </mesh>
    </Float>
  )
}

const BallCanvas= ({icon}) => {
  return(
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
    >
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls enableZoom={false}/>
          <Ball imgUrl={icon} />
        </Suspense>
      <Preload all />
    </Canvas>

  )
}


export default BallCanvas;