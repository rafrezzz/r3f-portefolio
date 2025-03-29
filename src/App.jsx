import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { TVObject } from './components/TVObject'
import { GlitchScreen } from './components/GlitchScreen'

function App() {
  return (
    <div className="bg-[#f4f4f4] w-screen h-screen">
      <Canvas camera={{ position: [0, 0, 0.5], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} />
        <TVObject scale={0.5} position={[0, 0, 0]} />
        <GlitchScreen />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App