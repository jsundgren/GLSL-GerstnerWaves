var Parameters, text;

// Create a scene
var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xfaffaa );
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0,1,12);
           
// Set up renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


Parameters = function() {
    this.amplitude = 0.3;
    this.wavenumber = 1.0;
    this.direction = 1.0;
    this.speed = 1.0;
    this.wavelength = 1.0;
};

// Dat GUI
window.onload = function() {
    text = new Parameters();
    var gui = new dat.GUI();
    gui.add(text, 'amplitude', 0.1, 0.5);
    gui.add(text, 'wavenumber', 1.0,10.0);
    gui.add(text, 'direction', 0.5, 1.0);
    gui.add(text, 'speed', 0.5, 2.0);
    gui.add(text, 'wavelength', 0.9, 1.5);
};
// Lighting
var light = new THREE.DirectionalLight();
light.position.set(0,10,5);
scene.add( light );

