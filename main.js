import * as THREE from 'three';

const container = document.getElementById("threejs-container");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 25, 1, 0.1, 100 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( 300, 300);
renderer.setAnimationLoop( animate );
container.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );

const edges = new THREE.EdgesGeometry(geometry);

const material = new THREE.LineBasicMaterial({ color: 0xffffff });

const cube = new THREE.LineSegments(edges, material);
const cube2 = new THREE.LineSegments(edges, material);

// Slightly tilt the second cube to create an illusion
cube2.rotation.x = Math.PI / 4; // 30-degree tilt
cube2.rotation.y = Math.PI / 4;


scene.add( cube );
scene.add( cube2 );

camera.position.z = 5;

function animate() {

	cube.rotation.x += 0.03;
	cube.rotation.y += 0.03;

    cube2.rotation.x += 0.03;
	cube2.rotation.y += 0.03;


	renderer.render( scene, camera );

}

