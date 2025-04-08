import mongoose from 'mongoose'

const JobSchema = new mongoose.Schema({
  title: String,
  description: String,
  postedBy: String,
})

export const Job = mongoose.models.Job || mongoose.model('Job', JobSchema)