"use client"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Suspense } from "react"

export default function RotatingCube() {
  return (
    <div className="h-[500px] w-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} />
        <Suspense fallback={null}>
          <mesh rotation={[45, 45, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#7c3aed" />
          </mesh>
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}