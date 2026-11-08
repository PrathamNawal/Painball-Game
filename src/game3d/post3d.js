// One cheap full-screen pass: vignette (stronger when aiming), chromatic aberration (spikes on big moments), colour grade.
import { WebGLRenderTarget, ShaderMaterial, Mesh, PlaneGeometry, Scene, OrthographicCamera, LinearFilter, RGBAFormat, Vector3 } from 'three';

export class Post {
  constructor(renderer) {
    this.r = renderer; this.enabled = true;
    this.rt = new WebGLRenderTarget(4, 4, { minFilter: LinearFilter, magFilter: LinearFilter, format: RGBAFormat, samples: 4 });
    this.mat = new ShaderMaterial({
      uniforms: { t: { value: this.rt.texture }, ab: { value: 0 }, vig: { value: 0.25 }, sat: { value: 1.12 }, tint: { value: new Vector3(1, 1, 1) }, flash: { value: 0 } },
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
      fragmentShader: `uniform sampler2D t; uniform float ab, vig, sat, flash; uniform vec3 tint; varying vec2 vUv;
        void main(){ vec2 c = vUv - 0.5; float d = dot(c, c); vec2 o = c * (ab * 0.02 + d * 0.006);
          vec3 col = vec3(texture2D(t, vUv + o).r, texture2D(t, vUv).g, texture2D(t, vUv - o).b);
          float l = dot(col, vec3(0.299, 0.587, 0.114)); col = mix(vec3(l), col, sat) * tint;
          col *= 1.0 - vig * smoothstep(0.15, 0.85, d * 2.4); col = mix(col, vec3(1.0), flash);
          gl_FragColor = vec4(col, 1.0); 
#include <colorspace_fragment>

        }`,
      depthTest: false, depthWrite: false,
    });
    this.quad = new Mesh(new PlaneGeometry(2, 2), this.mat); this.quad.frustumCulled = false;
    this.scene = new Scene(); this.scene.add(this.quad); this.cam = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
  }
  setSize(w, h, dpr) { this.rt.setSize(Math.max(2, Math.floor(w * dpr)), Math.max(2, Math.floor(h * dpr))); }
  render(scene, camera) {
    if (!this.enabled) { this.r.setRenderTarget(null); this.r.render(scene, camera); return; }
    this.r.setRenderTarget(this.rt); this.r.render(scene, camera); this.r.setRenderTarget(null); this.r.render(this.scene, this.cam);
  }
}
