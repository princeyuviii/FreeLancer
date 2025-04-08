// components/BarChartComponent.tsx
'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const dummyStats = [
  { name: 'Jan', tasks: 30 },
  { name: 'Feb', tasks: 45 },
  { name: 'Mar', tasks: 60 },
  { name: 'Apr', tasks: 50 },
  { name: 'May', tasks: 70 },
]

export default function BarChartComponent() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={dummyStats}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="tasks" fill="#6366f1" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}