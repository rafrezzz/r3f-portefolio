import React, { useRef } from 'react'
import { extend, useFrame } from '@react-three/fiber'
import { GlitchMaterial } from './GlitchMaterial'

extend({ GlitchMaterial })

export function GlitchScreen({ position = [0, 0.007, 0.095], size = [0.195, 0.1705] }) {
  const materialRef = useRef()

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.getElapsedTime()
    }
  })

  return (
    <mesh position={position}>
      <planeGeometry args={size} />
      <glitchMaterial ref={materialRef} />
    </mesh>
  )
}