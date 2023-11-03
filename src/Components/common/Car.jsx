/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 scene.gltf --shadows 
Author: Lexyc16 (https://sketchfab.com/Lexyc16)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/rossa-c5a45faa55174b3ea9b7ac37d6412c6c
Title: Rossa
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Car(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials['Material.003']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials['Material.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials['Material.004']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials.Material} />
        <mesh castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials['Material.007']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_7.geometry} material={materials['Material.006']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_8.geometry} material={materials['Material.009']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_9.geometry} material={materials['Material.016']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_10.geometry} material={materials['Material.005']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_11.geometry} material={materials['Material.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_12.geometry} material={materials['Material.010']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_13.geometry} material={materials['Material.011']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_14.geometry} material={materials['Material.012']} />
        <mesh castShadow receiveShadow geometry={nodes.Object_15.geometry} material={materials.brake_disc} />
        <mesh castShadow receiveShadow geometry={nodes.Object_16.geometry} material={materials['Material.029']} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')