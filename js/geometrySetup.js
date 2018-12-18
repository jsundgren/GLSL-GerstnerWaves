
var height = 20;
var width = 10;
var segments = 60;
var irregularity = 0.5;
var geometry = new THREE.PlaneGeometry( height, width, segments, segments );
var cameraPos = camera.position;
var lightPos = light.position;
var material = new THREE.ShaderMaterial( {
    uniforms: {
        time: {
          type: "f",
          value: 0.0
        },
        steepness: {
          type: "f",
          value: 1.0
        },
        wave_length: {
          type: "f",
          value: 1.0
        },
        light: {
            type: "vec3",
            value: lightPos
        },
        camera: {
            type: "vec3",
            value: cameraPos
        }
    },
    vertexShader: document.getElementById( 'vertexShader' ).textContent,
    fragmentShader: document.getElementById( 'fragmentShader' ).textContent
}  );

material.wireframe = false;

var model = new THREE.Mesh( geometry, material );

scene.add( model );
