"use client"
import React, { useState } from 'react';

const Chart = () => {
  // Sample data for the bar chart
  const data = [
    { label: 'Item 1', value: 10, color: 'bg-green-500' },
    { label: 'Item 2', value: 15, color: 'bg-green-500' },
    { label: 'Item 3', value: 5, color: 'bg-green-500' },
    { label: 'Item 4', value: 20, color: 'bg-green-500' },
  ];

  // Find the maximum value in the data for scaling purposes
  const maxValue = Math.max(...data.map(item => item.value));

  // State to track tooltip visibility and position
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, value: 0 });

  // Function to handle mouse enter event
  const handleMouseEnter = (value, e) => {
    setTooltip({ visible: true, x: e.clientX, y: e.clientY, value });
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <div className="relative w-[95%] max-w-lg mx-auto">
      <div className="m-auto">
        <h1 className='text-3xl'>A Chart Title</h1>
      </div>
      {/* Grid */}
      <div className="absolute grid w-full h-full grid-cols-3 gap-4 border-l">
        <div className="flex items-center justify-start w-full col-span-3 pl-2 border-t border-gray-400">20</div>
        <div className="flex items-center justify-start w-full col-span-3 pl-2 border-t border-gray-400">15</div>
        <div className="flex items-center justify-start w-full col-span-3 pl-2 border-t border-gray-400">10</div>
        <div className="flex items-center justify-start w-full col-span-3 pl-2 border-t border-gray-400">5</div> 
      </div>

      {/* Bar chart */}
      <div className="flex items-end h-64">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex-1 mx-1 ${item.color}`}
            style={{ height: `${(item.value / maxValue) * 100}%` }}
            onMouseEnter={(e) => handleMouseEnter(item.value, e)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Tooltip */}
            {tooltip.visible && tooltip.value === item.value && (
              <div className="absolute p-2 bg-white border border-gray-300 rounded-md shadow-lg bottom-full" style={{ left: tooltip.x, top: tooltip.y }}>
                {item.value}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chart;
