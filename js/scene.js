// Create a scene
var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xfaffaa );
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var controls = new THREE.OrbitControls( camera );
camera.position.set(0,40,50);
controls.update();
           
//var axesHelper = new THREE.AxesHelper( 5 );
//scene.add( axesHelper );

// Set up renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Lighting
var light = new THREE.DirectionalLight();
light.position.set(0,50,-10);
scene.add( light );



