import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, OrthographicCamera, useCamera } from '@react-three/drei'
import { Suspense } from 'react'
import {Car} from '../Car'


const CarModel = () => {
    // const camera = new OrthographicCamera();
    // const camera = useCamera(OrthographicCamera, {
    //     left: -10,
    //     right: 10,
    //     top: 10,
    //     bottom: -10,
    //     near: 1,
    //     far: 100,
    //   });
    // const controls = new OrbitControls(camera);

    return (
        <Canvas>
            <Suspense fallback={null}>
                {/* <perspectiveCamera makeDefault position={[0, 0, 5]} fov={75} /> */}
                <OrbitControls maxPolarAngle={1.5} minPolarAngle={1} maxZoom={0} enableZoom={true} autoRotate={true}/>
                <ambientLight intensity={0.1} />
                <spotLight position={[0, 5, 0]} penumbra={.1} intensity={100} color={"white"} />
                {/* <spotLight position={[2, 1, 0]} angle={.7} penumbra={.1} intensity={50} color={"green"} /> */}
                {/* <spotLight position={[-2, 1, 0]} angle={.7} penumbra={.1} intensity={50} color={"red"} /> */}
                {/* <mesh position={[0, 10, 0]} > */}
                    {/* <rectAreaLight height={10} width={10} intensity={150} color={"white"} /> */}
                {/* </mesh> */}
                <Car />
                <mesh rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[100, 100]} />
                    <meshBasicMaterial color="#222831" />
                </mesh>
            </Suspense>
        </Canvas>
    )
}

export default CarModel