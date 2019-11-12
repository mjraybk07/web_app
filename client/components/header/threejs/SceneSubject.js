import * as THREE from 'three';


export default scene => {
  const group = new THREE.Group();

  const material = new THREE.LineBasicMaterial( { color: "#EEF0F0" } );

  const lineCount = 250;
  const lineSegments = 40;
  let lines = [];

  for ( let i = 0; i < lineCount; i++ ) {
    const lineGeometry = new THREE.Geometry();
    const x = -84 + i;

    for ( let j = 0; j < lineSegments; j++ ) {
      const y = -24 + j;
      lineGeometry.vertices.push(new THREE.Vector3( x, y, Math.random() * (y / 2) ) )
    }
    lines.push(new THREE.Line( lineGeometry, material ) )
  }

  lines.forEach( line => {  
    group.add(line) 
  })


  scene.add(group);

  function update(time) {
    // TODO
  }

  return {
    update
  }
}