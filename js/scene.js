var Parameters, text;

// Create a scene
var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xfaffaa );
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var controls = new THREE.OrbitControls( camera );
camera.position.set(0,40,50);
controls.update();
           
var axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

// Set up renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


Parameters = function() {
    this.Wave_1 = '';
    this.X_w1 = 1.0;
    this.Y_w1 = 0.0;
    this.Steepness_w1 = 0.25;
    this.Wave_length_w1 = 60.0;
    this.Wave_2 = '';
    this.X_w2 = 1.0;
    this.Y_w2 = 0.6;
    this.Steepness_w2 = 0.25;
    this.Wave_length_w2 = 31.0;
    this.Wave_3 = '';
    this.X_w3 = 1.0;
    this.Y_w3 = 1.3;
    this.Steepness_w3 = 0.25;
    this.Wave_length_w3 = 18.0;
};

// Dat GUI
window.onload = function() {
    text = new Parameters();
    var gui = new dat.GUI();
    gui.add(text, 'Wave_1')
    gui.add(text, 'X_w1', 0.1, 2.0);
    gui.add(text, 'Y_w1', 0.1, 2.0);
    gui.add(text, 'Steepness_w1', 0.1, 0.3);
    gui.add(text, 'Wave_length_w1', 8.0, 100.0);
    gui.add(text, 'Wave_2')
    gui.add(text, 'X_w2', 0.1, 2.0);
    gui.add(text, 'Y_w2', 0.1, 2.0);
    gui.add(text, 'Steepness_w2', 0.1, 0.3);
    gui.add(text, 'Wave_length_w2', 8.0, 100.0);
    gui.add(text, 'Wave_3')
    gui.add(text, 'X_w3', 0.1, 2.0);
    gui.add(text, 'Y_w3', 0.1, 2.0);
    gui.add(text, 'Steepness_w3', 0.1, 0.3);
    gui.add(text, 'Wave_length_w3', 8.0, 100.0);

};
// Lighting
var light = new THREE.DirectionalLight();
light.position.set(0,32,0);
scene.add( light );

