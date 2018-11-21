
var radius = 5;
var detail  = 4;
var irregularity = 0.5;
var geometry = new THREE.IcosahedronGeometry( radius, detail );

var material = new THREE.ShaderMaterial( {
    uniforms: {
        time: {
          type: "f",
          value: 0.0
        }
    },
    vertexShader: document.getElementById( 'vertexShader' ).textContent,
    fragmentShader: document.getElementById( 'fragmentShader' ).textContent
} );

var model = new THREE.Mesh( geometry, material );

scene.add( model );
