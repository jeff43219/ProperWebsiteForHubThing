import React from 'react'

export default function ProgressRing({ progress, total, colour, size = 40, stroke = 3 }) {
  const radius = (size - stroke) / 2
  const circumference = radius * 2 * Math.PI
  const percentage = total > 0 ? (progress / total) * 100 : 0
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="rotate-[-90deg]">
        {/* Background circle */}
        <circle
          stroke="currentColor"
          strokeWidth={stroke}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          className="text-white/5"
        />
        {/* Progress circle */}
        <circle
          stroke={colour}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          style={{ strokeDashoffset: offset }}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          className="transition-all duration-500 ease-out"
        />
      </svg>
      <span className="absolute text-[10px] font-bold tabular-nums" style={{ color: colour }}>
        {progress}
      </span>
    </div>
  )
}
