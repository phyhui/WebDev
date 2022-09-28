import React, {useRef} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import { Box } from '@react-three/drei';



const Scene = () => {
    const scene = useRef<any>();
    useFrame(() => {
        scene.current.rotation.y += 0.05;
        scene.current.rotation.x += 0.05;
        scene.current.rotation.z += 0.001;
    });

    return (
        <group ref={scene}>
            <Box>
                <meshLambertMaterial attach="material" color="white"/>
            </Box>
        </group>
    );
};

export default function App(){
    return(
        <Canvas>
            <directionalLight intensity={0.5}/>
            <Scene />
        </Canvas>
    );
}