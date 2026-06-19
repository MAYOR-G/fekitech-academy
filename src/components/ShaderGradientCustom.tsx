// @ts-nocheck
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

interface ShaderGradientCustomProps {
  animate?: 'on' | 'off';
  opacity?: number;
  className?: string;
}

export default function ShaderGradientCustom({
  animate = 'on',
  opacity = 1,
  className = '',
}: ShaderGradientCustomProps) {
  return (
    <div className={`absolute inset-0 z-0 pointer-events-none ${className}`} style={{ opacity }}>
      <ShaderGradientCanvas
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        pixelDensity={1}
        fov={45}
        lazyLoad={false}
      >
        {/* @ts-ignore - props from ShaderGradient documentation */}
        <ShaderGradient
          animate={animate}
          axesHelper="off"
          bgColor1="#000000"
          bgColor2="#000000"
          brightness={1.5}
          cAzimuthAngle={250}
          cDistance={1.52}
          cPolarAngle={140}
          cameraZoom={12.5}
          color1="#6d9cd6"
          color2="#ff57e9"
          color3="#d454ff"
          destination="onCanvas"
          embedMode="off"
          envPreset="city"
          format="gif"
          frameRate={10}
          gizmoHelper="hide"
          grain="on"
          lightType="3d"
          positionX={0}
          positionY={0}
          positionZ={0}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.5}
          rotationX={0}
          rotationY={0}
          rotationZ={140}
          shader="defaults"
          type="sphere"
          uAmplitude={7}
          uDensity={0.8}
          uFrequency={5.5}
          uSpeed={0.3}
          uStrength={0.4}
          uTime={0}
          wireframe={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
}
