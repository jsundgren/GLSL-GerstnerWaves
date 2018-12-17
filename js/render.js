var start = Date.now();
model.rotation.x = -1;

function animate() {
    material.uniforms[ 'time' ].value = 0.0025 * ( Date.now() - start);
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    model.material.uniforms.A.value = text.amplitude;
    model.material.uniforms.W.value = text.wavenumber;
    model.material.uniforms.dir.value = text.direction;
    model.material.uniforms.L.value = text.wavelength;
    model.material.uniforms.S.value = text.speed;
}

animate();