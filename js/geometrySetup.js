var side = 70;
var segments = 60;

// The plane
var geometry = new THREE.PlaneGeometry( side, side, segments, segments );
var cameraPos = camera.position;
var lightPos = light.position;

// Define the material and the uniforms that gets sent to the shader
var material = new THREE.ShaderMaterial( {
    uniforms: {
        time: {
          type: "f",
          value: 0.0
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
    fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
    side: THREE.DoubleSide
}  );

material.wireframe = false;

var model = new THREE.Mesh( geometry, material );

scene.add( model );
