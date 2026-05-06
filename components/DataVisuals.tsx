"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import SectionTitle from "./SectionTitle";
import {
  projectTypeData,
  skillRadarData,
  toolUsageData,
  workflowData,
} from "@/data/visualData";

const chartColors = ["#38bdf8", "#a78bfa", "#22c55e", "#f59e0b", "#fb7185"];

export default function DataVisuals() {
  return (
    <section id="data-visuals" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Data Visuals"
          title="Portfolio shown like a data product"
          description="A data scientist portfolio should contain visuals. These charts summarise my technical strengths, project coverage and workflow."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-card rounded-3xl p-6">
            <h3 className="mb-5 text-xl font-bold text-white">
              Skill Strength Radar
            </h3>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={skillRadarData}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="skill" tick={{ fill: "#cbd5e1" }} />
                  <Radar
                    name="Strength"
                    dataKey="value"
                    stroke="#38bdf8"
                    fill="#38bdf8"
                    fillOpacity={0.35}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <h3 className="mb-5 text-xl font-bold text-white">
              Project Coverage
            </h3>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={projectTypeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="name" tick={{ fill: "#cbd5e1" }} />
                  <YAxis tick={{ fill: "#cbd5e1" }} />
                  <Tooltip />
                  <Bar dataKey="projects" fill="#a78bfa" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <h3 className="mb-5 text-xl font-bold text-white">
              Tool Usage Breakdown
            </h3>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={toolUsageData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={110}
                    label
                  >
                    {toolUsageData.map((entry, index) => (
                      <Cell
                        key={entry.name}
                        fill={chartColors[index % chartColors.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <h3 className="mb-5 text-xl font-bold text-white">
              ML Delivery Workflow
            </h3>

            <div className="space-y-4">
              {workflowData.map((item, index) => (
                <div
                  key={item.stage}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300 font-bold text-slate-950">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-white">{item.stage}</h4>
                      <p className="text-sm leading-6 text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm text-slate-400">
              This shows the complete flow from raw data to deployed insight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}