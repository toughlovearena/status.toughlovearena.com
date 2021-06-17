import React, { useEffect, useRef, useState } from 'react';
import { ChartRef } from '../chart';
import { QUEUE_TIMES } from '../queueTimes';
import { DataSection, SectionTitle } from './shared';

export function RankedQueueTimes() {
  const canvasRef = useRef(null as HTMLCanvasElement | null);
  const [average, setAverage] = useState(undefined as number | undefined);

  useEffect(() => {
    if (canvasRef.current) {
      const chart = new ChartRef({
        canvasElm: canvasRef.current,
        label: 'Ranked Queue Time',
        colorRGB: { r: 162, g: 100, b: 235, },
      });
      QUEUE_TIMES.registerRanked({ chart, setAverage });
    }
  }, [canvasRef, setAverage]);

  return (
    <DataSection>
      <SectionTitle>
        Ranked Queue Time: {average ?? '???'} seconds
      </SectionTitle>
      <canvas ref={canvasRef} />
    </DataSection>
  );
}
