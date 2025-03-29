#define random(x) fract(sin(x) * 43758.5453)
varying vec2 vUv;
uniform float uTime;

void main() {
  vec2 uv = vUv;
  float glitch = step(0.95, fract(sin(uv.y * 100.0 + uTime * 10.0) * 43758.5453));
  float r = glitch * random(uv.y + uTime);
  float g = glitch * random(uv.y + uTime + 10.0);
  float b = glitch * random(uv.y + uTime + 20.0);
  gl_FragColor = vec4(r, g, b, 1.0);
}