import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import vertexShader from '../shaders/glitch.vert'
import fragmentShader from '../shaders/glitch.frag'

export const GlitchMaterial = shaderMaterial(
  { uTime: 0 },
  vertexShader,
  fragmentShader
)

extend({ GlitchMaterial })