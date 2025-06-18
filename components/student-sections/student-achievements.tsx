"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Trophy, Award, Medal, Star, Download, Calendar, Plus, Trash2 } from "lucide-react"
import { getAchievements } from "@/lib/student-data"

interface StudentAchievementsProps {
  registrationNumber: string
}

export default function StudentAchievements({ registrationNumber }: StudentAchievementsProps) {
  const [achievements, setAchievements] = useState(getAchievements(registrationNumber))
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newAchievement, setNewAchievement] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
  })

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Academic":
        return Award
      case "Sports":
        return Trophy
      case "Cultural":
        return Star
      case "Technical":
        return Medal
      default:
        return Trophy
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Academic":
        return "bg-blue-50 text-blue-600 border-blue-200"
      case "Sports":
        return "bg-green-50 text-green-600 border-green-200"
      case "Cultural":
        return "bg-purple-50 text-purple-600 border-purple-200"
      case "Technical":
        return "bg-orange-50 text-orange-600 border-orange-200"
      default:
        return "bg-slate-50 text-slate-600 border-slate-200"
    }
  }

  const handleAddAchievement = () => {
    if (newAchievement.title && newAchievement.description && newAchievement.category && newAchievement.date) {
      const achievement = {
        id: `ach_${Date.now()}`,
        title: newAchievement.title,
        description: newAchievement.description,
        category: newAchievement.category as "Academic" | "Sports" | "Cultural" | "Technical",
        date: newAchievement.date,
      }
      setAchievements([...achievements, achievement])
      setNewAchievement({ title: "", description: "", category: "", date: "" })
      setIsAddDialogOpen(false)
    }
  }

  const handleDeleteAchievement = (id: string) => {
    setAchievements(achievements.filter((achievement) => achievement.id !== id))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">My Achievements</h1>
            <p className="text-slate-600 mt-1">Manage your awards, certificates, and recognitions</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">{achievements.length}</div>
              <div className="text-sm text-slate-500">Total Achievements</div>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Achievement
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New Achievement</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Achievement Title</Label>
                    <Input
                      id="title"
                      value={newAchievement.title}
                      onChange={(e) => setNewAchievement({ ...newAchievement, title: e.target.value })}
                      placeholder="Enter achievement title"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={newAchievement.description}
                      onChange={(e) => setNewAchievement({ ...newAchievement, description: e.target.value })}
                      placeholder="Describe your achievement"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={newAchievement.category}
                      onValueChange={(value) => setNewAchievement({ ...newAchievement, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Academic">Academic</SelectItem>
                        <SelectItem value="Sports">Sports</SelectItem>
                        <SelectItem value="Cultural">Cultural</SelectItem>
                        <SelectItem value="Technical">Technical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={newAchievement.date}
                      onChange={(e) => setNewAchievement({ ...newAchievement, date: e.target.value })}
                    />
                  </div>
                  <Button onClick={handleAddAchievement} className="w-full">
                    Add Achievement
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {["Academic", "Sports", "Cultural", "Technical"].map((category, index) => {
          const count = achievements.filter((a) => a.category === category).length
          const Icon = getCategoryIcon(category)

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${getCategoryColor(category).split(" ")[0]} ${getCategoryColor(category).split(" ")[0]}`}
                    >
                      <Icon className={`h-5 w-5 ${getCategoryColor(category).split(" ")[1]}`} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-800">{count}</div>
                      <div className="text-sm text-slate-600">{category}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Achievements List */}
      {achievements.length > 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Your Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement, index) => {
                  const Icon = getCategoryIcon(achievement.category)
                  return (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="p-4 rounded-lg border hover:shadow-md transition-shadow group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg border ${getCategoryColor(achievement.category)}`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-slate-800 mb-1">{achievement.title}</h3>
                            <p className="text-sm text-slate-600 mb-2">{achievement.description}</p>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1 text-sm text-slate-500">
                                <Calendar className="h-4 w-4" />
                                {new Date(achievement.date).toLocaleDateString()}
                              </div>
                              <Badge variant="outline">{achievement.category}</Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Certificate
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteAchievement(achievement.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card>
            <CardContent className="p-12 text-center">
              <Trophy className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-600 mb-2">No Achievements Yet</h3>
              <p className="text-slate-500 mb-4">Start adding your achievements to showcase your accomplishments!</p>
              <Button onClick={() => setIsAddDialogOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Your First Achievement
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}
