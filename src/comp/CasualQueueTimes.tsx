import React, { useEffect, useRef, useState } from 'react';
import { ChartRef } from '../chart';
import { QUEUE_TIMES } from '../queueTimes';
import { DataSection, SectionTitle } from './shared';

export function CasualQueueTimes() {
  const canvasRef = useRef(null as HTMLCanvasElement | null);
  const [average, setAverage] = useState(undefined as number | undefined);

  useEffect(() => {
    if (canvasRef.current) {
      const chart = new ChartRef({
        canvasElm: canvasRef.current,
        label: 'Casual Queue Time',
        colorRGB: { r: 54, g: 162, b: 235, },
      });
      QUEUE_TIMES.registerCasual({ chart, setAverage });
    }
  }, [canvasRef, setAverage]);

  return (
    <DataSection>
      <SectionTitle>
        Casual Queue Time: {average ?? '???'} seconds
      </SectionTitle>
      <canvas ref={canvasRef} />
    </DataSection>
  );
}
