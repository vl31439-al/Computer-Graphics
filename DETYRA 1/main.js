import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x5eb8ff); // qielli blu

// Camera
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(80, 90, 100);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Drita
const dritaHemisphere = new THREE.HemisphereLight(0x77aadd, 0x223322, 0.5);
dritaHemisphere.position.set(0, 200, 0);
scene.add(dritaHemisphere);

const dritaDirekt = new THREE.DirectionalLight(0xffffff, 1.2);
dritaDirekt.position.set(-50, 50, 50);
dritaDirekt.castShadow = true;
scene.add(dritaDirekt);

const helperDrite = new THREE.DirectionalLightHelper(dritaDirekt, 5, 0xff5555);
scene.add(helperDrite);

//Bari
const materialiBari = new THREE.MeshLambertMaterial({ color: 0x2ebf63 });
const bari = new THREE.Mesh(new THREE.PlaneGeometry(200, 150), materialiBari);
bari.rotation.x = -Math.PI / 2;
bari.receiveShadow = true;
scene.add(bari);

// Rrugët
const materialiRruge = new THREE.MeshStandardMaterial({ color: 0x5a5a5a, roughness: 0.85 });

const rrugeMain = new THREE.Mesh(new THREE.BoxGeometry(18, 1, 150), materialiRruge);
rrugeMain.position.set(-30, 0.5, 0);
rrugeMain.receiveShadow = true;
scene.add(rrugeMain);

const rrugeKryesoreGeo = new THREE.BoxGeometry(140, 1, 18);
rrugeKryesoreGeo.translate(42, 0.5, 0);
const rrugeKryesore = new THREE.Mesh(rrugeKryesoreGeo, materialiRruge);
rrugeKryesore.receiveShadow = true;
rrugeKryesore.position.set(-10, 0, -12);
rrugeKryesore.rotation.y = -Math.PI / 6;
scene.add(rrugeKryesore);

const rruge1 = new THREE.Mesh(new THREE.BoxGeometry(20, 1, 10), materialiRruge);
rruge1.position.set(-12, 0.5, 60);
scene.add(rruge1);

const rruge2 = new THREE.Mesh(new THREE.BoxGeometry(18, 1, 150), materialiRruge);
rruge2.position.set(83, 0.5, 0);
rruge2.receiveShadow = true;
scene.add(rruge2);

const rruge3 = new THREE.Mesh(new THREE.BoxGeometry(20, 1, 10), materialiRruge);
rruge3.position.set(-45, 0.5, 5);
scene.add(rruge3);

const rruge4 = new THREE.Mesh(new THREE.BoxGeometry(132, 1, 10), materialiRruge);
rruge4.receiveShadow = true;
rruge4.position.set(30, 0, -30);
rruge4.rotation.y = -Math.PI / 6;
scene.add(rruge4);

// Biblioteka
const materialiNdBl = new THREE.MeshPhongMaterial({ color: 0x1c56d0, shininess: 80 });
const ndertesaMain = new THREE.Mesh(new THREE.BoxGeometry(25, 15, 50), materialiNdBl);
ndertesaMain.position.set(-60, 8, -10);
ndertesaMain.castShadow = true;
scene.add(ndertesaMain);

const materialiNdBl2 = new THREE.MeshPhongMaterial({ color: 0x3366e6, shininess: 75 });
const ndertesaShtese = new THREE.Mesh(new THREE.BoxGeometry(15, 15, 60), materialiNdBl2);
ndertesaShtese.position.set(-85, 8, -10);
ndertesaShtese.castShadow = true;
scene.add(ndertesaShtese);

//Konviktet
const materialiVerdh = new THREE.MeshStandardMaterial({ color: 0xffdb4d, roughness: 0.38 });
const ndertesaVerdh1 = new THREE.Mesh(new THREE.BoxGeometry(45, 20, 15), materialiVerdh);
ndertesaVerdh1.position.set(8, 10, -27);
ndertesaVerdh1.rotation.y = -Math.PI / 6;
ndertesaVerdh1.castShadow = true;
scene.add(ndertesaVerdh1);

const ndertesaVerdh2 = new THREE.Mesh(new THREE.BoxGeometry(45, 20, 15), materialiVerdh);
ndertesaVerdh2.position.set(50, 10, -3);
ndertesaVerdh2.rotation.y = -Math.PI / 6;
ndertesaVerdh2.castShadow = true;
scene.add(ndertesaVerdh2);

// 816
const materialiBluLehte = new THREE.MeshPhongMaterial({ color: 0x66d5f0, shininess: 85 });
const ndertesaBluLehte = new THREE.Mesh(new THREE.BoxGeometry(20, 15, 50), materialiBluLehte);
ndertesaBluLehte.position.set(0, 9, 45);
ndertesaBluLehte.castShadow = true;
scene.add(ndertesaBluLehte);


// Dritat
const materialiStolpi = new THREE.MeshStandardMaterial({ color: 0x444444, metalness: 0.6, roughness: 0.35 });
const materialiLlamba = new THREE.MeshStandardMaterial({ color: 0xfff9b0, emissive: 0xfff9b0, emissiveIntensity: 1.4 });

// Llamba 1
const stolpi1 = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 12, 12), materialiStolpi);
stolpi1.position.set(-43, 6, -35);
stolpi1.castShadow = true;
scene.add(stolpi1);

const llamba1 = new THREE.Mesh(new THREE.SphereGeometry(0.6, 16, 16), materialiLlamba);
llamba1.position.set(-43, 12, -35);
scene.add(llamba1);

const driteLlamba1 = new THREE.PointLight(0xfff9b0, 100, 30);
driteLlamba1.position.set(-43, 12, -35);
scene.add(driteLlamba1);

// Pemt
const materialiTrungu = new THREE.MeshStandardMaterial({ color: 0x8b4723 });
const materialiGjethet = new THREE.MeshStandardMaterial({ color: 0x33b845 });

const trungu1 = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 10), materialiTrungu);
trungu1.position.set(-15, 5, 0);
scene.add(trungu1);
const gjethet1 = new THREE.Mesh(new THREE.ConeGeometry(4, 12, 8), materialiGjethet);
gjethet1.position.set(-15, 11, 0);
scene.add(gjethet1);

const trungu2 = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 10), materialiTrungu);
trungu2.position.set(0, 5, 10);
scene.add(trungu2);
const gjethet2 = new THREE.Mesh(new THREE.ConeGeometry(4, 12, 8), materialiGjethet);
gjethet2.position.set(0, 11, 10);
scene.add(gjethet2);

const trungu3 = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 15), materialiTrungu);
trungu3.position.set(-50, 7, 43);
scene.add(trungu3);
const gjethet3 = new THREE.Mesh(new THREE.SphereGeometry(5, 12, 8), materialiGjethet);
gjethet3.position.set(-50, 11, 43);
scene.add(gjethet3);

const trungu4 = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 15), materialiTrungu);
trungu4.position.set(-50, 7, 55);
scene.add(trungu4);
const gjethet4 = new THREE.Mesh(new THREE.SphereGeometry(5, 12, 8), materialiGjethet);
gjethet4.position.set(-50, 11, 55);
scene.add(gjethet4);

const trungu5 = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 15), materialiTrungu);
trungu5.position.set(72, 7, -55);
scene.add(trungu5);
const gjethet5 = new THREE.Mesh(new THREE.SphereGeometry(8, 12, 8), materialiGjethet);
gjethet5.position.set(72, 14, -55);
scene.add(gjethet5);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();


window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});