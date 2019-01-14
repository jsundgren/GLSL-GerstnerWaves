var start = Date.now();
model.rotation.x = -1.56;
var active = false;
function animate() {
    material.uniforms[ 'time' ].value = 0.0025 * ( Date.now() - start);
    requestAnimationFrame( animate );
    renderer.render( scene, camera );

    controls.update();
}

animate();

// Wireframe
window.onkeyup = function(e){
    var key = e.keyCode ? e.keyCode : e.which;
    if(key == "W".charCodeAt(0)){
        active = !active;
        material.wireframe = active;
    }
};