import Script from 'next/script';
import React, { useRef } from 'react'

type Props = {}

export default function PageA({}: Props) {
    const grained_container = useRef();

    return (
          <div style={{
            position: "absolute",
            zIndex: 999,
            height: "100%",
            width: "100%",
            pointerEvents: "none",
            top:0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            overflow: "hidden",
          }}>
          <div 
          ref={grained_container}
          id="container" style={{
            height: "100%",
            width: "100%",
          }}/>
          { typeof window !== "undefined" ? 
          window.grained ? <></> :  
          <Script
          src="/grained.js" 
          onLoad={() => {
              var options = { 
                    animate: true, 
                    patternWidth: 300, 
                    patternHeight: 300, 
                    grainOpacity: 0.05, 
                    grainDensity: 1, 
                    grainWidth: 1, 
                    grainHeight: 1, 
                    grainChaos: 0.2,
                    grainSpeed: 10
                };
    
            grained(grained_container.current, options);
  
          }} />
          :
          <></>  
          }
          </div>
          )
}