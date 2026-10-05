import * as THREE from 'three';
import './tung.css';

import { GLTFLoader } from 'three/examples/jsm/Addons.js';
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)

camera.position.z=15;
camera.position.x=13;
camera.position.y=6;

const ambientLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambientLight);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    alpha:true,
});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let tung;
const loader = new GLTFLoader();
loader.load('/assets/tung.glb',function(object){
    tung = object.scene;
    scene.add(tung);
});

function animate(){
    if(tung){
    tung.rotation.y += 0.01;
    }
   
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
}
animate();
