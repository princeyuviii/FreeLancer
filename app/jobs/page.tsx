"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Briefcase, MapPin, IndianRupee } from "lucide-react";
import { useState } from "react";

const jobs = [
  {
    id: 1,
    title: "React Frontend Developer",
    company: "TCS (Tata Consultancy Services)",
    location: "Bangalore, India",
    type: "Full-time",
    salary: "₹25,000 - ₹40,000/month",
    posted: "2 days ago",
    description: "Join our frontend team to build scalable UIs using React and Tailwind CSS for government and private sector projects.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    level: "Entry Level",
    category: "Development"
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "Infosys",
    location: "Hyderabad, India",
    type: "Hybrid",
    salary: "₹35,000 - ₹55,000/month",
    posted: "1 day ago",
    description: "Analyze business data, build dashboards and help stakeholders take decisions using Power BI and Python.",
    skills: ["Python", "Power BI", "SQL", "Excel"],
    level: "Intermediate",
    category: "Data"
  },
  {
    id: 3,
    title: "WordPress Developer",
    company: "Freelance (Upwork)",
    location: "Remote (India)",
    type: "Project-based",
    salary: "₹8,000 - ₹15,000/project",
    posted: "3 days ago",
    description: "Looking for a WordPress expert to create and customize responsive themes for Indian small businesses.",
    skills: ["WordPress", "PHP", "JavaScript"],
    level: "Entry Level",
    category: "Development"
  },
  {
    id: 4,
    title: "Python Backend Intern",
    company: "Wipro",
    location: "Pune, India",
    type: "Internship",
    salary: "₹15,000/month",
    posted: "1 day ago",
    description: "Work with Django APIs and PostgreSQL for a scalable SaaS platform in education.",
    skills: ["Python", "Django", "PostgreSQL"],
    level: "Entry Level",
    category: "Development"
  },
  {
    id: 5,
    title: "Power BI Dashboard Freelancer",
    company: "Startup Remote",
    location: "Remote",
    type: "Freelance",
    salary: "₹5,000/project",
    posted: "4 days ago",
    description: "Build an interactive dashboard to visualize e-commerce sales data using Power BI.",
    skills: ["Power BI", "Excel", "Data Visualization"],
    level: "Beginner",
    category: "Data"
  },
  {
    id: 6,
    title: "Junior MERN Stack Developer",
    company: "Zoho Corp",
    location: "Chennai, India",
    type: "Full-time",
    salary: "₹30,000/month",
    posted: "2 days ago",
    description: "Develop and maintain modules for internal tools using the MERN stack.",
    skills: ["MongoDB", "Express.js", "React", "Node.js"],
    level: "Intermediate",
    category: "Development"
  },
  {
    id: 7,
    title: "R Programming Analyst",
    company: "Indian BioStats",
    location: "Ahmedabad, India",
    type: "Part-time",
    salary: "₹18,000/month",
    posted: "5 days ago",
    description: "Work with health datasets and automate report generation using R and RMarkdown.",
    skills: ["R", "RMarkdown", "Data Cleaning"],
    level: "Intermediate",
    category: "Data"
  },
  {
    id: 8,
    title: "Machine Learning Intern",
    company: "AI Startup - BrainGrid",
    location: "Remote",
    type: "Internship",
    salary: "₹10,000/month",
    posted: "Today",
    description: "Train ML models for user behavior predictions. Great for students with basic ML exposure.",
    skills: ["Python", "scikit-learn", "Pandas", "Jupyter"],
    level: "Entry Level",
    category: "Data"
  },
  {
    id: 9,
    title: "Shopify Website Setup",
    company: "Indian Handmade Store",
    location: "Remote",
    type: "Freelance",
    salary: "₹12,000/project",
    posted: "2 days ago",
    description: "Setup and customize a Shopify store with theme editing and plugin setup.",
    skills: ["Shopify", "HTML/CSS", "Liquid", "JavaScript"],
    level: "Beginner",
    category: "Development"
  },
  {
    id: 10,
    title: "Excel Automation Assistant",
    company: "Local Tax Consultant",
    location: "Indore, India",
    type: "Part-time",
    salary: "₹6,000/month",
    posted: "Yesterday",
    description: "Automate tax report generation using formulas and VBA macros.",
    skills: ["Excel", "VBA", "Macros"],
    level: "Beginner",
    category: "Data"
  },
  {
    id: 11,
    title: "Frontend Design to Code",
    company: "UI Freelance Client",
    location: "Remote",
    type: "Freelance",
    salary: "₹5,000/project",
    posted: "3 days ago",
    description: "Convert Figma designs into responsive HTML/CSS pages with Tailwind.",
    skills: ["HTML", "CSS", "Tailwind", "Figma"],
    level: "Entry Level",
    category: "Development"
  },
  {
    id: 12,
    title: "SQL Data Intern",
    company: "RetailChain Pvt. Ltd.",
    location: "Mumbai, India",
    type: "Internship",
    salary: "₹7,000/month",
    posted: "4 days ago",
    description: "Query customer purchase data and generate business insights using SQL.",
    skills: ["SQL", "MySQL", "Data Querying"],
    level: "Beginner",
    category: "Data"
  }
];
export default function JobsPage() {
  const [filter, setFilter] = useState("All");

  const filteredJobs = filter === "All" ? jobs : jobs.filter((job) => job.category === filter);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-3 text-gray-100">
            A Space for Students & Beginners to Find Simple Freelance Jobs, Build Skills, and Start Earning
          </h1>
          <p className="text-gray-400 text-sm">No Experience Needed!</p>
        </div>

        <div className="flex justify-center gap-4 mb-10">
          {["All", "Development", "Data"].map((cat) => (
            <Button
              key={cat}
              onClick={() => setFilter(cat)}
              variant="outline"
              className={`border-gray-600 hover:bg-white hover:text-black ${filter === cat ? "bg-white text-black" : "bg-transparent text-white"}`}
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 bg-[#1a1a1a] text-gray-200 shadow-xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-2">350+</h3>
            <p>Live Projects</p>
          </Card>
          <Card className="p-6 bg-[#1a1a1a] text-gray-200 shadow-xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-2">₹15-20k /Month</h3>
            <p>Avg Monthly Pay</p>
          </Card>
          <Card className="p-6 bg-[#1a1a1a] text-gray-200 shadow-xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-2">2hrs</h3>
            <p>Avg Response Time</p>
          </Card>
        </div>

        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="p-6 bg-[#1b1b1b] hover:bg-[#2c2c2c] border border-gray-700 transition duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{job.title}</h3>
                  <p className="text-gray-400 mb-2 font-medium">{job.company}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-sm px-2 py-1 bg-[#2c2c2c] text-white border-gray-600">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button variant="default" className="bg-white text-black hover:bg-gray-300">Apply Now</Button>
              </div>

              <p className="mb-4 text-sm text-gray-300">{job.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 mr-2" />
                  {job.type}
                </div>
                <div className="flex items-center">
                  <IndianRupee className="h-4 w-4 mr-2" />
                  {job.salary}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {job.posted}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}