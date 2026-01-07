"use client";

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export interface ChartData {
  id: string;
  title: string;
  type: "bar" | "line";
  data: any[];
}

interface ChartPanelProps {
  charts: ChartData[];
  description?: string;
}

export default function ChartPanel({ charts, description }: ChartPanelProps) {
  return (
    <div className="space-y-8">
      {description && (
        <p className="text-gray-700">{description}</p>
      )}

      {charts.map((chart) => (
        <div key={chart.id} className="card p-6">
          <h3 className="text-xl font-serif font-semibold mb-4">
            {chart.title}
          </h3>
          <div className="h-[300px] md:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              {chart.type === "bar" ? (
                <BarChart data={chart.data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey={Object.keys(chart.data[0] || {})[0]} 
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis style={{ fontSize: '12px' }} />
                  <Tooltip />
                  <Legend />
                  <Bar 
                    dataKey={Object.keys(chart.data[0] || {})[1]} 
                    fill="#003057" 
                  />
                </BarChart>
              ) : (
                <LineChart data={chart.data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey={Object.keys(chart.data[0] || {})[0]}
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis style={{ fontSize: '12px' }} />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey={Object.keys(chart.data[0] || {})[1]} 
                    stroke="#EAAA00" 
                    strokeWidth={2}
                  />
                </LineChart>
              )}
            </ResponsiveContainer>
          </div>
        </div>
      ))}
    </div>
  );
}

