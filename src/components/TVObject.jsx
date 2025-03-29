import React from 'react'
import { useGLTF } from '@react-three/drei'
import tv from '../assets/objects/tv.glb'

export function TVObject(props) {
  const { scene } = useGLTF(tv)
  return <primitive object={scene} {...props} />
}