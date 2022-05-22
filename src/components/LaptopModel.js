/* eslint-disable no-unused-vars */
import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import '../css/laptop.css'

function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/cyberpunk_laptop/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_4.geometry} material={materials['Material.017']} />
          <mesh geometry={nodes.Object_5.geometry} material={materials['Material.025']} />
          <mesh geometry={nodes.Object_6.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Object_7.geometry} material={materials['Material.028']} />
          <mesh geometry={nodes.Object_8.geometry} material={materials['Material.027']} />
          <mesh geometry={nodes.Object_9.geometry} material={materials['Material.029']} />
          <mesh geometry={nodes.Object_10.geometry} material={materials['Material.031']} />
          <mesh geometry={nodes.Object_11.geometry} material={materials['Material.008']} />
          <mesh geometry={nodes.Object_12.geometry} material={materials['Material.009']} />
          <mesh geometry={nodes.Object_13.geometry} material={materials['Material.013']} />
          <mesh geometry={nodes.Object_14.geometry} material={materials['Material.038']} />
          <mesh geometry={nodes.Object_15.geometry} material={materials['Material.036']} />
          <mesh geometry={nodes.Object_16.geometry} material={materials['Material.039']} />
          <mesh geometry={nodes.Object_17.geometry} material={materials['Material.040']} />
          <group position={[0, 0.1, -0.73]} rotation={[-1.74, 0, 0]}>
            <mesh geometry={nodes.Object_19.geometry} material={materials['Material.012']} />
            <mesh geometry={nodes.Object_20.geometry} material={materials['Material.008']} />
            <mesh geometry={nodes.Object_21.geometry} material={materials['Material.009']} />
            <mesh geometry={nodes.Object_22.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Object_23.geometry} material={materials['Material.018']} />
            <mesh geometry={nodes.Object_24.geometry} material={materials['Material.019']} />
            <mesh geometry={nodes.Object_25.geometry} material={materials['Material.020']} />
            <mesh geometry={nodes.Object_26.geometry} material={materials['Material.014']} />
            <mesh geometry={nodes.Object_27.geometry} material={materials['Material.015']} />
            <mesh geometry={nodes.Object_28.geometry} material={materials['Material.021']} />
            <mesh geometry={nodes.Object_29.geometry} material={materials['Material.022']} />
            <mesh geometry={nodes.Object_30.geometry} material={materials['Material.023']} />
            <mesh geometry={nodes.Object_31.geometry} material={materials['Material.028']} />
            <mesh geometry={nodes.Object_32.geometry} material={materials['Material.030']} />
            <mesh geometry={nodes.Object_33.geometry} material={materials['Material.034']} />
            <mesh geometry={nodes.Object_34.geometry} material={materials['Material.032']} />
            <mesh geometry={nodes.Object_35.geometry} material={materials['Material.033']} />
            <mesh geometry={nodes.Object_36.geometry} material={materials['Material.035']} />
            <mesh geometry={nodes.Object_37.geometry} material={materials['Material.004']} />
            <mesh geometry={nodes.Object_38.geometry} material={materials['Material.007']} />
            <mesh geometry={nodes.Object_39.geometry} material={materials['Material.006']} />
            <mesh geometry={nodes.Object_40.geometry} material={materials['Material.005']} />
            <mesh geometry={nodes.Object_41.geometry} material={materials['Material.013']} />
          </group>
        </group>
      </group>
    </group>
  )
}

const Render = () => {
    const [hover, sethover] = useState(false);
    const meshref = useRef(null);
    useFrame(() => (
        meshref.current.rotation.y = hover ? meshref.current.rotation.y : meshref.current.rotation.y += 0.01
    ));
    return(
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 10, 5]} intensity={1}  />            
            <mesh 
                ref={meshref} 
                position={[0, -0.5, 0]} 
                onPointerOver={(event) => sethover(true)}
                onPointerOut={(event) => sethover(false)} 
            >
            <Model />
            </mesh>
        </>
    )
}

const LaptopModel = () => {
    return (
      <div className='LaptopModel'>
        <Canvas
            className='LaptopModelCanvas'
            colorManagement
            camera = {{position:[0, 5, 10], fov:18}}
        >
            <Suspense fallback={null}>
                <Render />
            </Suspense>
            <OrbitControls
              enableZoom={false}
              mouseButtons={{
                LEFT: THREE.MOUSE.ROTATE,
                RIGHT: THREE.MOUSE.ROTATE
              }}
            />
        </Canvas>
      </div>
    )
}

export default LaptopModel