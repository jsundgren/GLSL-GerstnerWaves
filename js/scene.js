var Parameters, text;

// Create a scene
var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xfaffaa );
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var controls = new THREE.OrbitControls( camera );
camera.position.set(0,1,15);
controls.update();
           
var axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

// Set up renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


Parameters = function() {
    this.steepness = 0.6;
    this.wave_length = 10.0;
};

// Dat GUI
window.onload = function() {
    text = new Parameters();
    var gui = new dat.GUI();
    gui.add(text, 'steepness', 0.1, 1.0);
    gui.add(text, 'wave_length', 8.0,15.0);

};
// Lighting
var light = new THREE.DirectionalLight();
light.position.set(0,10,8);
scene.add( light );

