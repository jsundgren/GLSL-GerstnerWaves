var start = Date.now();
model.rotation.x = -1.56;

function animate() {
    material.uniforms[ 'time' ].value = 0.0025 * ( Date.now() - start);
    requestAnimationFrame( animate );
    renderer.render( scene, camera );

    controls.update();
}

animate();
