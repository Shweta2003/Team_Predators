import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import { Car } from '../Car'


const CarModel = () => {
    return (
        <Canvas shadows={true} >
            <Suspense fallback={null}>
                {/* <perspectiveCamera makeDefault position={[0, 0, 10]} fov={710} /> */}
                <OrbitControls maxPolarAngle={1.5} minPolarAngle={1} />
                {/* <OrbitControls /> */}
                <ambientLight intensity={5} />
                <spotLight
                    castShadow={true}
                    position={[0, 10, 0]}
                    // distance={200}
                    // rotation={[0, 0, Math.PI / 4]}
                    penumbra={.8}
                    decay={1}
                    angle={0.52}
                    intensity={100}
                    color={"#fff"}
                />
                <spotLight position={[3, 1, 0]} rotation={[0, 0, Math.PI / 2]} intensity={1} />
                <Car />
                {/* <mesh position={[0, 2, 0]} castShadow={true}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="#fff" />
                </mesh> */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow={true}>
                    <planeGeometry args={[20, 20]} />
                    <meshStandardMaterial color="#222831" />
                </mesh>
                <mesh position={[-10, 10, 0]} rotation={[0, Math.PI / 2, 0]}>
                    <planeGeometry args={[20, 20]} />
                    <meshStandardMaterial color="#222831" />
                </mesh>
                <mesh position={[0, 10, -10]}>
                    <planeGeometry args={[20, 20]} />
                    <meshStandardMaterial color="#222831" />
                </mesh>
                <mesh position={[10, 10, 0]} rotation={[0, -Math.PI / 2, 0]}>
                    <planeGeometry args={[20, 20]} />
                    <meshStandardMaterial color="#222831" />
                </mesh>
                <mesh position={[0, 10, 10]} rotation={[0, -Math.PI, 0]}>
                    <planeGeometry args={[20, 20]} />
                    <meshStandardMaterial color="#222831" />
                </mesh>
            </Suspense>
        </Canvas>
    )
}

export default CarModel