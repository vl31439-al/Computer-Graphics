import * as THREE from 'three';

// Gabim 1: Dy herë deklaron 'scene' → fshij një
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x202020);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({ antialias: true });

// Gabim 2: ke shkruar 'render' në vend të 'renderer' dhe 'windows.innerWIdth' duhet 'window.innerWidth'
renderer.setSize(window.innerWidth, window.innerHeight);

// Gabim 3: 'appendCHild' duhet 'appendChild'
document.body.appendChild(renderer.domElement);

// Gabim 4: kur përdor konstruktorin duhet të përdorësh () dhe jo {}
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff88 });

// Gabim 5: po ashtu për Mesh
const cubeMesh = new THREE.Mesh(geometry, material);
scene.add(cubeMesh);

// Gabim 6: për krijimin e dritës duhet () dhe për shtimin e saj në scene duhet ()
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 5);
scene.add(light);

// Në fund duhet të bësh render-in e scenës
function animate() {
  requestAnimationFrame(animate);
     cubeMesh.rotation.x += 0.01;
    cubeMesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
