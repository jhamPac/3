
  'use strict';

  var scene, camera, renderer;
  const geoPrototype = {
    setColor: function (color) {
      this.material.color = new THREE.Color(color);
    }
  }

  // Sets up the scene.
  function init() {

    // Create the scene and set the scene size.
    scene = new THREE.Scene();
    var WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight;

    // Create a renderer and add it to the DOM.
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(WIDTH, HEIGHT);
    renderer.setClearColor(0xffffff, 1);
    document.body.appendChild(renderer.domElement);

    // Create a camera, zoom it out from the model a bit, and add it to the scene.
    camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 20000);
    camera.position.set(0, 0, 0);
    camera.position.z = 100;
    scene.add(camera);

    // Create an event listener that resizes the renderer with the browser window.
    window.addEventListener('resize', function() {
      var WIDTH = window.innerWidth,
          HEIGHT = window.innerHeight;
      renderer.setSize(WIDTH, HEIGHT);
      camera.aspect = WIDTH / HEIGHT;
      camera.updateProjectionMatrix();
    });

    // var geom = new THREE.Geometry();
    // var v1 = new THREE.Vector3(0, 0, 0);
    // var v2 = new THREE.Vector3(30, 0, 0);
    // var v3 = new THREE.Vector3(30, 30, 0);
    //
    // var triangle = new THREE.Triangle( v1, v2, v3 );
    // var normal = triangle.normal();
    //
    // geom.vertices.push(triangle.a);
    // geom.vertices.push(triangle.b);
    // geom.vertices.push(triangle.c);
    //
    // geom.faces.push( new THREE.Face3( 0, 1, 2, normal ) );
    //
    // var mesh = new THREE.Mesh( geom, new THREE.MeshBasicMaterial() );
    //
    // var newMesh = Object.assign(mesh, geoPrototype);
    //
    // newMesh.position.set(-10, -10, 0);
    // newMesh.setColor('red');
    //
    // scene.add(newMesh);

    var cube = new THREE.Mesh(
      new THREE.SphereGeometry(3, 32, 32),
      new THREE.MeshLambertMaterial({color: 0xffffff}));
      scene.add(cube);

      var light = new THREE.SpotLight();
      light.position.set( -10, 20, 16 );
      scene.add(light);
    }


  // Renders the scene and updates the render as needed.
  function animate() {

    requestAnimationFrame(animate);

    var t = new Date().getTime();

    camera.position.x = Math.sin(t/500)*10;
    camera.position.y = 0;
    camera.position.z = Math.cos(t/500)*10;
    // point the camera at the origin
    camera.lookAt(scene.position);

    renderer.render(scene, camera);

  }

  //////////////////////////////////////////////////////

  init();
  animate();
