const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(60, 1.6, 0.1, 200)
const controls = new THREE.OrbitControls(camera)
camera.position.set(1, 0, 0);
controls.update()

const geometry = new THREE.SphereGeometry(50, 32, 32)
const textureLoader = new THREE.TextureLoader()
const path = '../assets/image/facebook.jpg';
const texture = textureLoader.load(path);
var material = new THREE.MeshBasicMaterial({
  map: texture,
  side: THREE.DoubleSide
})
var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();