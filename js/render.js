var start = Date.now();
model.rotation.x = -1;

function animate() {
    material.uniforms[ 'time' ].value = 0.0025 * ( Date.now() - start);
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    model.material.uniforms.steepness.value = text.steepness;
    model.material.uniforms.wave_length.value = text.wave_length;
}

animate();