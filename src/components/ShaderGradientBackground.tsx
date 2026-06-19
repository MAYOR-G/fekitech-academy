// @ts-nocheck
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

interface ShaderGradientBackgroundProps {
  animate?: 'on' | 'off';
  opacity?: number;
  className?: string;
}

export default function ShaderGradientBackground({
  animate = 'on',
  opacity = 1,
  className = '',
}: ShaderGradientBackgroundProps) {
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
          brightness={1.1}
          cAzimuthAngle={180}
          cDistance={3.6}
          cPolarAngle={90}
          cameraZoom={1}
          color1="#de26ff"
          color2="#aa7ddb"
          color3="#5fd8e1"
          destination="onCanvas"
          embedMode="off"
          envPreset="city"
          format="gif"
          frameRate={10}
          gizmoHelper="hide"
          grain="on"
          lightType="3d"
          positionX={-1.4}
          positionY={0}
          positionZ={0}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.2}
          rotationX={0}
          rotationY={10}
          rotationZ={50}
          shader="defaults"
          type="plane"
          uAmplitude={1}
          uDensity={1.3}
          uFrequency={5.5}
          uSpeed={0.3}
          uStrength={4}
          uTime={0}
          wireframe={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
}
