
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Bugatti(props) {
  const { nodes, materials } = useGLTF('../../../assets/bugatti/bugatti.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.alights014_Plane051.geometry} material={materials['Studio_Lights.005']} />
      <mesh geometry={nodes.alights000_Plane049.geometry} material={materials['Studio_Lights.005']} />
      <mesh geometry={nodes.alights015_Plane050.geometry} material={materials['Studio_Lights.005']} />
      <mesh geometry={nodes.Plane047_Plane042.geometry} material={materials.sun} />
      <mesh geometry={nodes.Plane036_Plane040.geometry} material={materials.sun} />
      <mesh geometry={nodes.Cube028_Cube030.geometry} material={materials['silver_door_strip.004']} />
      <lineSegments geometry={nodes.NurbsPath006.geometry} material={materials['silver_door_strip.004']} />
      <mesh geometry={nodes.Cube029_Cube031.geometry} material={materials.breaks_} />
      <mesh geometry={nodes.Icosphere001.geometry} material={materials.red_glass} />
      <mesh geometry={nodes.Cube027_Cube025.geometry} material={materials['silver_door_strip.004']} />
      <mesh geometry={nodes.Plane013_Plane014.geometry} material={materials.None} />
      <lineSegments geometry={nodes.NurbsPath011_NurbsPath012.geometry} material={materials.None} />
      <mesh geometry={nodes.Icosphere.geometry} material={materials.breaks_} />
      <lineSegments geometry={nodes.NurbsPath010_NurbsPath011.geometry} material={materials.breaks_} />
      <lineSegments geometry={nodes.BezierCircle_BezierCircle002.geometry} material={materials.breaks_} />
      <mesh geometry={nodes.Text001_Text002.geometry} material={materials['WHITE.002']} />
      <mesh geometry={nodes.Plane024.geometry} material={materials['Studio_Lights.004']} />
      <lineSegments geometry={nodes.NurbsPath008.geometry} material={materials['Studio_Lights.004']} />
      <lineSegments geometry={nodes.NurbsPath009.geometry} material={materials['Studio_Lights.004']} />
      <mesh geometry={nodes.Cylinder027_Cylinder026.geometry} material={materials['back_drop.004']} />
      <mesh geometry={nodes.Cube038.geometry} material={materials.None} />
      <mesh geometry={nodes.BezierCurve.geometry} material={materials.black_cable} />
      <mesh geometry={nodes.Cube026_Cube020.geometry} material={materials.ENGINE} />
      <mesh geometry={nodes.Text002_Text001.geometry} material={materials['WHITE.002']} />
      <mesh geometry={nodes.Cylinder034_Cylinder131.geometry} material={materials.NAVY} />
      <mesh geometry={nodes.Plane026.geometry} material={materials['silver_door_strip.004']} />
      <mesh geometry={nodes.Cube044.geometry} material={materials['GRILL.004']} />
      <mesh geometry={nodes.Cube048_Cube080_1.geometry} material={materials['tyre.004']} />
      <mesh geometry={nodes.Cube048_Cube080_2.geometry} material={materials['rim_silver.004']} />
      <mesh geometry={nodes.Cube048_Cube080_3.geometry} material={materials['rim_blue.004']} />
      <mesh geometry={nodes.Cube048_Cube080_4.geometry} material={materials['Nut.004']} />
      <mesh geometry={nodes.Cube048_Cube080_5.geometry} material={materials['brake_disk.004']} />
      <mesh geometry={nodes.Cube048_Cube080_6.geometry} material={materials['wheel_joint.004']} />
      <mesh geometry={nodes.Cube048_Cube080_7.geometry} material={materials['cALLIPERS.004']} />
      <mesh geometry={nodes.Cube048_Cube080_8.geometry} material={materials['silver_door_strip.004']} />
      <mesh geometry={nodes.Cube046_Cube063_1.geometry} material={materials['tyre.004']} />
      <mesh geometry={nodes.Cube046_Cube063_2.geometry} material={materials['rim_silver.004']} />
      <mesh geometry={nodes.Cube046_Cube063_3.geometry} material={materials['rim_blue.004']} />
      <mesh geometry={nodes.Cube046_Cube063_4.geometry} material={materials['Nut.004']} />
      <mesh geometry={nodes.Cube046_Cube063_5.geometry} material={materials['brake_disk.004']} />
      <mesh geometry={nodes.Cube046_Cube063_6.geometry} material={materials['wheel_joint.004']} />
      <mesh geometry={nodes.Cube046_Cube063_7.geometry} material={materials['cALLIPERS.004']} />
      <mesh geometry={nodes.Cube046_Cube063_8.geometry} material={materials['silver_door_strip.004']} />
      <mesh geometry={nodes.Cylinder026_Cylinder025_1.geometry} material={materials['red.002']} />
      <mesh geometry={nodes.Cylinder026_Cylinder025_2.geometry} material={materials['silver_door_strip.004']} />
      <lineSegments geometry={nodes.Cube036_1.geometry} material={materials['GRILL.004']} />
      <mesh geometry={nodes.Cube036_2.geometry} material={materials['GRILL.004']} />
      <mesh geometry={nodes.Plane014_Plane020_1.geometry} material={materials.red_glass} />
      <mesh geometry={nodes.Plane014_Plane020_2.geometry} material={materials.silver_trim} />
      <lineSegments geometry={nodes.Cube043_Cube081_1.geometry} material={materials['GRILL.004']} />
      <mesh geometry={nodes.Cube043_Cube081_2.geometry} material={materials['GRILL.004']} />
      <mesh geometry={nodes.Cylinder033_Cylinder126_1.geometry} material={materials.aluminiumm} />
      <mesh geometry={nodes.Cylinder033_Cylinder126_2.geometry} material={materials.glossy} />
      <mesh geometry={nodes.Cylinder033_Cylinder126_3.geometry} material={materials.white_holders} />
      <mesh geometry={nodes.Cube039_1.geometry} material={materials['tyre.004']} />
      <mesh geometry={nodes.Cube039_2.geometry} material={materials['rim_silver.004']} />
      <mesh geometry={nodes.Cube039_3.geometry} material={materials['rim_blue.004']} />
      <mesh geometry={nodes.Cube039_4.geometry} material={materials['Nut.004']} />
      <mesh geometry={nodes.Cube039_5.geometry} material={materials['brake_disk.004']} />
      <mesh geometry={nodes.Cube039_6.geometry} material={materials['wheel_joint.004']} />
      <mesh geometry={nodes.Cube039_7.geometry} material={materials['cALLIPERS.004']} />
      <mesh geometry={nodes.Cube039_8.geometry} material={materials['silver_door_strip.004']} />
      <mesh geometry={nodes.Cube042_1.geometry} material={materials['headlight_glass.004']} />
      <mesh geometry={nodes.Cube042_2.geometry} material={materials['headlight_square.004']} />
      <mesh geometry={nodes.Plane027_1.geometry} material={materials['reflective_coat.004']} />
      <mesh geometry={nodes.Plane027_2.geometry} material={materials['glass_front.004']} />
      <mesh geometry={nodes.Plane027_3.geometry} material={materials['Trim.004']} />
      <mesh geometry={nodes.Plane028_1.geometry} material={materials['BLUE.002']} />
      <mesh geometry={nodes.Plane028_2.geometry} material={materials['silver_door_strip.004']} />
      <mesh geometry={nodes.Plane028_3.geometry} material={materials.NAVY} />
      <mesh geometry={nodes.Plane028_4.geometry} material={materials['front_window.004']} />
      <mesh geometry={nodes.Plane028_5.geometry} material={materials['black_fuel_tank.004']} />
      <mesh geometry={nodes.Plane028_6.geometry} material={materials['black_strip.004']} />
      <mesh geometry={nodes.Plane028_7.geometry} material={materials['WHEEL_CURB.004']} />
      <mesh geometry={nodes.Plane028_8.geometry} material={materials['black_vent.004']} />
      <mesh geometry={nodes.Plane028_9.geometry} material={materials.black_side_vent} />
      <mesh geometry={nodes.Plane028_10.geometry} material={materials.Mirrors} />
      <mesh geometry={nodes.Plane028_11.geometry} material={materials.exhaust} />
      <lineSegments geometry={nodes.Plane028_12.geometry} material={materials.black} />
      <mesh geometry={nodes.Plane028_13.geometry} material={materials.black} />
    </group>
  )
}

// useGLTF.preload('src/assets/bugatti/bugatti.gltf')
useGLTF.preload("../../../assets/bugatti/bugatti.gltf")

export default Bugatti;