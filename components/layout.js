import { Canvas, useFrame } from '@react-three/fiber'
import SimplexNoise from 'simplex-noise';
import React from 'react'
import ReactDOM from "react-dom";
import * as THREE from "three";

export default class Layout extends React.Component {
    componentDidMount() {
        let renderer, scene, camera, cameraCtrl;
        let width, height, cx, cy, wWidth, wHeight;
        var light1, light2, light3, light4;
        const TMath = THREE.Math;

        let plane;
        const simplex = new SimplexNoise();

        const mouse = new THREE.Vector2();
        const mousePlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
        const mousePosition = new THREE.Vector3();
        const raycaster = new THREE.Raycaster();

        let noiseInput = 1;
        let heightInput = 1;

        init();

        function init() {
            renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("background"), antialias: true, alpha: true });
            camera = new THREE.PerspectiveCamera(75);
            camera.position.z = 75;

            updateSize();
            window.addEventListener('resize', updateSize, false);

            document.addEventListener('mousemove', e => {
            const v = new THREE.Vector3();
            camera.getWorldDirection(v);
            v.normalize();
            mousePlane.normal = v;
            mouse.x = (e.clientX / width) * 2 - 1;
            mouse.y = - (e.clientY / height) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            raycaster.ray.intersectPlane(mousePlane, mousePosition);
            });

            initScene();
            animate();
        }

        noiseInput = 2;
        heightInput =  10 * 100 / 25;
    

        function initScene() {
            scene = new THREE.Scene();
            initLights();

            let mat = new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide });
            // let mat = new THREE.MeshPhongMaterial({ color: 0xffffff });
            // let mat = new THREE.MeshStandardMaterial({ color: 0x808080, roughness: 0.5, metalness: 0.8 });
            let geo = new THREE.PlaneBufferGeometry(wWidth, wHeight, wWidth / 2, wHeight / 2);
            plane = new THREE.Mesh(geo, mat);
            scene.add(plane);

            plane.rotation.x = -Math.PI / 2 - 0.2;
            plane.position.y = -25;
            camera.position.z = 60;
        }

        function initLights() {
            const r = 30;
            const y = 10;
            const lightDistance = 500;

            // light = new THREE.AmbientLight(conf.ambientColor);
            // scene.add(light);

            light1 = new THREE.PointLight(0x0E09DC, 0.9, lightDistance);
            light1.position.set(0, y, r);
            scene.add(light1);
            light2 = new THREE.PointLight(0x1CD1E1, 0.9, lightDistance);
            light2.position.set(0, -y, -r);
            scene.add(light2);
            light3 = new THREE.PointLight(0x18C02C, 0.9, lightDistance);
            light3.position.set(r, y, 0);
            scene.add(light3);
            light4 = new THREE.PointLight(0xee3bcf, 0.9, lightDistance);
            light4.position.set(-r, y, 0);
            scene.add(light4);
        }

        function animate() {
            requestAnimationFrame(animate);

            animatePlane();
            animateLights();

            renderer.render(scene, camera);
        };

        function animatePlane() {
            let gArray = plane.geometry.attributes.position.array;
            const time = Date.now() * 0.0002;
            for (let i = 0; i < gArray.length; i += 3) {
            gArray[i + 2] = simplex.noise4D(gArray[i] / 2, gArray[i + 1] / 2, time, mouse.x + mouse.y) * 10;
            }
            plane.geometry.attributes.position.needsUpdate = true;
            // plane.geometry.computeBoundingSphere();
        }

        function animateLights() {
            const time = Date.now() * 0.001;
            const d = 50;
            light1.position.x = Math.sin(time * 0.1) * d;
            light1.position.z = Math.cos(time * 0.2) * d;
            light2.position.x = Math.cos(time * 0.3) * d;
            light2.position.z = Math.sin(time * 0.4) * d;
            light3.position.x = Math.sin(time * 0.5) * d;
            light3.position.z = Math.sin(time * 0.6) * d;
            light4.position.x = Math.sin(time * 0.7) * d;
            light4.position.z = Math.cos(time * 0.8) * d;
        }


        function updateSize() {
            console.log(document.getElementById("section-canvas").clientWidth);
            width = document.getElementById("section-canvas").clientWidth; cx = width / 2;
            height = document.getElementById("section-canvas").clientHeight; cy = height / 2;
            console.log(document.getElementById("section-canvas").clientHeight);
            if (renderer && camera) {
                renderer.setSize(width, height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                const wsize = getRendererSize();
                wWidth = wsize[0];
                wHeight = wsize[1];
            }
        }

        function getRendererSize() {
            const cam = new THREE.PerspectiveCamera(camera.fov, camera.aspect);
            const vFOV = cam.fov * Math.PI / 180;
            const height = 2 * Math.tan(vFOV / 2) * Math.abs(200);
            const width = height * cam.aspect;
            return [width, height];
        }
    }
    render () {
        return (
            <canvas style={{width: "100%"}} id="background"></canvas>
        )
      }
  }