import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x202020);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const floorGeometry = new THREE.PlaneGeometry(20, 20);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x444444, roughness: 0.8 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -1.5;
floor.receiveShadow = true;
scene.add(floor);

const boxGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
const boxMaterial = new THREE.MeshLambertMaterial({ color: 0x3366ff }); // blue
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.x = -3;
scene.add(box);

const icosahedronGeometry = new THREE.IcosahedronGeometry(1);
const icosahedronMaterial = new THREE.MeshStandardMaterial({ 
  color: 0xffd700, // gold
  metalness: 0.7,
  roughness: 0.2,
  wireframe: true
});
const icosahedron = new THREE.Mesh(icosahedronGeometry, icosahedronMaterial);
icosahedron.position.x = 0;
scene.add(icosahedron);

const coneGeometry = new THREE.ConeGeometry(1, 2, 32);
const coneMaterial = new THREE.MeshPhongMaterial({
  color: 0x008080, // teal
  specular: 0xffffff,
  shininess: 50,
});
const cone = new THREE.Mesh(coneGeometry, coneMaterial);
cone.position.x = 3;
scene.add(cone);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
directionalLight.position.set(5, 5, 5);
directionalLight.castShadow = true;
scene.add(directionalLight);

const lightHelper = new THREE.DirectionalLightHelper(directionalLight, 0.5);
scene.add(lightHelper);

function animate() {
  requestAnimationFrame(animate);

  box.rotation.x += 0.01;
  box.rotation.y += 0.01;

  icosahedron.rotation.y += 0.01;
  cone.rotation.x += 0.01;

  renderer.render(scene, camera);
}

animate();
