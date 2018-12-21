
var height = 70;
var width = 70;
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
        X_w1: {
          type: "f",
          value: 0.0
        },
        Y_w1: {
          type: "f",
          value: 0.0
        },
        Steepness_w1: {
          type: "f",
          value: 0.0
        },
        Wave_length_w1: {
          type: "f",
          value: 0.0
        },
        X_w2: {
          type: "f",
          value: 0.0
        },
        Y_w2: {
          type: "f",
          value: 0.0
        },
        Steepness_w2: {
          type: "f",
          value: 0.0
        },
        Wave_length_w2: {
          type: "f",
          value: 0.0
        },
        X_w3: {
          type: "f",
          value: 0.0
        },
        Y_w3: {
          type: "f",
          value: 0.0
        },
        Steepness_w3: {
          type: "f",
          value: 0.0
        },
        Wave_length_w3: {
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
    fragmentShader: document.getElementById( 'fragmentShader' ).textContent
}  );

material.wireframe = true;

var model = new THREE.Mesh( geometry, material );

scene.add( model );
