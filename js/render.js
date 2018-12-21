var start = Date.now();
model.rotation.x = -1.56;

function animate() {
    material.uniforms[ 'time' ].value = 0.0025 * ( Date.now() - start);
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    model.material.uniforms.X_w1.value = text.X_w1;
    model.material.uniforms.Y_w1.value = text.Y_w1;
    model.material.uniforms.Steepness_w1.value = text.Steepness_w1;
    model.material.uniforms.Wave_length_w1.value = text.Wave_length_w1;
    model.material.uniforms.X_w2.value = text.X_w2;
    model.material.uniforms.Y_w2.value = text.Y_w2;
    model.material.uniforms.Steepness_w2.value = text.Steepness_w2;
    model.material.uniforms.Wave_length_w2.value = text.Wave_length_w2;
    model.material.uniforms.X_w3.value = text.X_w3;
    model.material.uniforms.Y_w3.value = text.Y_w3;
    model.material.uniforms.Steepness_w3.value = text.Steepness_w3;
    model.material.uniforms.Wave_length_w3.value = text.Wave_length_w3;
    controls.update();
}

animate();
