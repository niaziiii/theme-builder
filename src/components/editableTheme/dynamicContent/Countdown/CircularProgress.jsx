"use client"

// CircularProgress.js
import React, { useEffect, useRef } from 'react';

const CircularProgress = ({ progress, size = 175, strokeWidth = 5, color = '#00FF00' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const radius = (size / 2) - strokeWidth;
    const centerX = size / 2;
    const centerY = size / 2;
    const startAngle = -Math.PI / 2; // Start at 12 o'clock
    const endAngle = startAngle + (2 * Math.PI * (progress / 100));

    context.clearRect(0, 0, size, size);

    // Background circle
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    context.strokeStyle = '#EEEEEE'; // Background color
    context.lineWidth = strokeWidth;
    context.stroke();

    // Progress circle
    context.beginPath();
    context.arc(centerX, centerY, radius, startAngle, endAngle);
    context.strokeStyle = color; // Progress color
    context.lineWidth = strokeWidth;
    context.stroke();
  }, [progress, size, strokeWidth, color]);

  return <canvas ref={canvasRef} width={size} height={size} />;
};

export default CircularProgress;