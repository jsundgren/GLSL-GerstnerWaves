function animate() {
   requestAnimationFrame( animate );
   renderer.render( scene, camera );
   model.rotation.x += 0.005;
   model.rotation.y += 0.005;
}

animate();