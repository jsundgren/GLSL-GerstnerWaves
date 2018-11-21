
var radius = THREE.Math.randFloat( 3, 5 );
var irregularity = 0.5;
var geometry = new THREE.IcosahedronGeometry( radius, 4 );

var material = new THREE.ShaderMaterial( {
  vertexShader: document.getElementById( 'vertexShader' ).textContent,
  fragmentShader: document.getElementById( 'fragmentShader' ).textContent
} );

var model = new THREE.Mesh( geometry, material );

scene.add( model );
