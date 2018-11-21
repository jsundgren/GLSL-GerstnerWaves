var start = Date.now();

function animate() {
    material.uniforms[ 'time' ].value = 0.0025 * ( Date.now() - start);
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    //model.rotation.x += 0.005;
    //model.rotation.y += 0.005;
}

animate();