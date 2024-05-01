import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const {progress} = useProgress();
  return(
    <Html>
      <span className="canvas-load"></span>
      <p style={{
        color: "#f1f1f1",
        fontWeight: 800,
        fontSize: 14,
        margimTop: 40
      }}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
};

export default CanvasLoader;
