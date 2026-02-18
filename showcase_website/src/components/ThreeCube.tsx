
import { useEffect } from "react";
import * as THREE from "three";

import "../styles/components/threeCube.css";

export default function ThreeCube() {
    useEffect(() => {

        const canvas = document.getElementById('three-canvas');
        if (!canvas)
            return ;

        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const size = width > height ? height : width;
        console.log("width:", width, " height:", height, " size:", size)

        // scene
        
        const scene = new THREE.Scene();
        scene.background = null;

        // camera
        
        const camera = new THREE.PerspectiveCamera( 60, 1, 0.01, 10 );
        camera.position.z = 1;

        // light
        
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(0, 0, 1);
        scene.add(pointLight);

        // mesh
        
        const cubeGeometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
        const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0x454B5A });
        const cubeMesh = new THREE.Mesh( cubeGeometry, cubeMaterial );
        scene.add( cubeMesh );

        // renderer

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true
        });
        renderer.setSize( size, size, false );

        // resize

        const handleResize = () => {
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const size = width > height ? height : width;

            camera.updateProjectionMatrix();
            renderer.setSize(size, size, false);
        };

        window.addEventListener("resize", handleResize);

        // animation
    
        const animate = (time: number) => {
            cubeMesh.rotation.x = time / 2000;
            cubeMesh.rotation.y = time / 1000;

            renderer.render(scene, camera);
        };

        renderer.setAnimationLoop(animate);

        // cleanup
        return () => {
            renderer.setAnimationLoop(null);
            window.removeEventListener("resize", handleResize);

            cubeGeometry.dispose();
            cubeMaterial.dispose();
            renderer.dispose();
            scene.clear();
        };

    }, []);

    return <canvas id="three-canvas"/>;
}
