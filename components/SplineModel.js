import React from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineModel() {
  return (
    <main style={{ height: '100vh' }}> {/* Ensure the container has a height set */}
      <Spline
        scene="https://prod.spline.design/oAsFWS6SP5c9y1xT/scene.splinecode"
      />
    </main>
  );
}