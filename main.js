

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );



const points = [];
for ( let i = 0; i < 5; i ++ ) {
	points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
}
const latheGeometry = new THREE.LatheGeometry( points );
const latheMaterial = new THREE.MeshBasicMaterial( { color: 0x738a00 } );
const lathe = new THREE.Mesh( latheGeometry, latheMaterial );
scene.add( lathe );

const ringGeometry = new THREE.RingGeometry( 1, 3, 12 );
const ringMaterial = new THREE.MeshBasicMaterial( { color: 0x09732c, side: THREE.DoubleSide } );
const mesh = new THREE.Mesh( ringGeometry, ringMaterial );
scene.add( mesh );

mesh.position.x = -5;
mesh.position.y = 5;

const torusGeometry = new THREE.TorusGeometry( 17, 2, 6, 38 );
const torusMaterial = new THREE.MeshBasicMaterial( { color: 0x230030 } );
const torus = new THREE.Mesh( torusGeometry, torusMaterial );
scene.add( torus );

const icoGeometry = new THREE.IcosahedronGeometry(3);
const icoMaterial = new THREE.MeshBasicMaterial( { color: 0xf9faf5 } );
const icosahedron = new THREE.Mesh( icoGeometry, icoMaterial );
scene.add( icosahedron );

icosahedron.position.x = 5;
icosahedron.position.y = 5;

const geometry = new THREE.SphereGeometry( 1, 12, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0x61000d } );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

 
camera.position.z = 30;



function animate() {

  lathe.rotation.y += 0.01;
  
  sphere.position.z += 0.1;
  sphere.position.x += 0.01;
  
  icosahedron.rotation.x += 0.01;

  

  renderer.render( scene, camera );

}



