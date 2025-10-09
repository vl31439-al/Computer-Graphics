import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x202020);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 30;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const axes = new THREE.AxesHelper(10);
scene.add(axes);

const group = new THREE.Group();
scene.add(group);

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(5, 32, 32),
  new THREE.MeshStandardMaterial({ color: 0x00ff00 })
);
sphere.position.x = -12;
group.add(sphere);

const torus = new THREE.Mesh(
  new THREE.TorusGeometry(5, 1.5, 16, 100),
  new THREE.MeshStandardMaterial({ color: 0xffa500 })
);
torus.position.x = 0;
group.add(torus);

const tetrahedron = new THREE.Mesh(
  new THREE.TetrahedronGeometry(5),
  new THREE.MeshStandardMaterial({ color: 0x800080 })
);
tetrahedron.position.x = 12;
group.add(tetrahedron);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 15);
scene.add(light);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
