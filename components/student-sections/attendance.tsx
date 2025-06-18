"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Clock, CheckCircle, XCircle, AlertTriangle } from "lucide-react"
import { getAttendanceRecords } from "@/lib/student-data"

interface AttendanceProps {
  registrationNumber: string
}

export default function Attendance({ registrationNumber }: AttendanceProps) {
  const attendanceRecords = getAttendanceRecords(registrationNumber)
  const overallAttendance =
    attendanceRecords.reduce((acc, record) => acc + record.percentage, 0) / attendanceRecords.length

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Good":
        return "text-green-600 bg-green-50"
      case "Average":
        return "text-yellow-600 bg-yellow-50"
      case "Poor":
        return "text-red-600 bg-red-50"
      default:
        return "text-slate-600 bg-slate-50"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Good":
        return CheckCircle
      case "Average":
        return AlertTriangle
      case "Poor":
        return XCircle
      default:
        return Clock
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Attendance</h1>
            <p className="text-slate-600 mt-1">Track your class attendance across all subjects</p>
          </div>
          <div className="text-right">
            <div className={`text-2xl font-bold ${overallAttendance >= 75 ? "text-green-600" : "text-red-600"}`}>
              {overallAttendance.toFixed(1)}%
            </div>
            <div className="text-sm text-slate-500">Overall Attendance</div>
          </div>
        </div>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-50">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-800">
                    {attendanceRecords.filter((r) => r.status === "Good").length}
                  </div>
                  <div className="text-sm text-slate-600">Good Status</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-yellow-50">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-800">
                    {attendanceRecords.filter((r) => r.status === "Average").length}
                  </div>
                  <div className="text-sm text-slate-600">Average Status</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-red-50">
                  <XCircle className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-800">
                    {attendanceRecords.filter((r) => r.status === "Poor").length}
                  </div>
                  <div className="text-sm text-slate-600">Poor Status</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-50">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-800">
                    {attendanceRecords.reduce((acc, r) => acc + r.totalClasses, 0)}
                  </div>
                  <div className="text-sm text-slate-600">Total Classes</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Attendance Records */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Subject-wise Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {attendanceRecords.map((record, index) => {
                const StatusIcon = getStatusIcon(record.status)
                return (
                  <motion.div
                    key={record.subjectCode}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="p-4 rounded-lg border hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-slate-800">{record.subject}</h3>
                        <p className="text-sm text-slate-600">{record.subjectCode}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-xl font-bold text-slate-800">
                            {record.attendedClasses}/{record.totalClasses}
                          </div>
                          <div className="text-sm text-slate-500">Classes</div>
                        </div>
                        <div className={`p-2 rounded-full ${getStatusColor(record.status)}`}>
                          <StatusIcon className="h-4 w-4" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-600">Attendance Percentage</span>
                      <Badge
                        variant={
                          record.status === "Good"
                            ? "default"
                            : record.status === "Average"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {record.percentage.toFixed(1)}%
                      </Badge>
                    </div>

                    <Progress value={record.percentage} className="h-2" />

                    {record.percentage < 75 && (
                      <div className="mt-2 p-2 bg-red-50 rounded text-sm text-red-700">
                        ⚠️ Attendance below 75% - Risk of debarment from exams
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
