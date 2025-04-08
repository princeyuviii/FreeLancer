import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { Job } from '@/models/job'

export async function POST(req: Request) {
  await connectDB()
  const body = await req.json()
  const job = await Job.create(body)
  return NextResponse.json(job)
}

export async function GET() {
  await connectDB()
  const jobs = await Job.find()
  return NextResponse.json(jobs)
}