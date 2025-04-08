'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts'

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-8 scroll-smooth overflow-y-auto">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Welcome back, FreeLancer 👋</h1>
        <p className="text-muted-foreground">Here’s what’s happening with your freelancing dashboard today.</p>
      </header>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
        <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="jobs">My Jobs</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          
        </TabsList>

        <TabsContent value="profile">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] shadow-xl border border-[#38bdf8] rounded-2xl text-white">
              <CardHeader className="space-y-2">
                <CardTitle className="text-3xl text-[#00f2ff]">Yuvi's Developer Profile 🚀</CardTitle>
                <p className="text-sm text-gray-300">Track your journey, growth, and presence like a pro.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Personal Summary */}
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p><strong>Name:</strong> Yuvraj Singh Rathore</p>
                    <p><strong>Role:</strong> AI + Web Developer</p>
                    <p><strong>Experience:</strong> 1.5+ years</p>
                    <p><strong>Availability:</strong> 20 hrs/week</p>
                    <p><strong>Rate:</strong> ₹800/hr</p>
                  </div>
                  <div className="space-y-1">
                    <p><strong>Top Skills:</strong> React, Python, ML, Next.js</p>
                    <p><strong>Projects:</strong> 12+ completed, 2 active</p>
                    <p><strong>Mentorship:</strong> Available</p>
                    <p><strong>Location:</strong> Mandsaur, India</p>
                    <p><strong>Opportunities:</strong> Internships, Remote Jobs</p>
                  </div>
                </div>

                {/* Chart: Weekly Activity */}
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#00f2ff]">Coding Activity</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={[
                      { day: 'Mon', hrs: 2 },
                      { day: 'Tue', hrs: 4 },
                      { day: 'Wed', hrs: 3 },
                      { day: 'Thu', hrs: 5 },
                      { day: 'Fri', hrs: 4 },
                      { day: 'Sat', hrs: 6 },
                      { day: 'Sun', hrs: 1 },
                    ]}>
                      <XAxis dataKey="day" stroke="#ccc" />
                      <YAxis stroke="#ccc" />
                      <Tooltip />
                      <Line type="monotone" dataKey="hrs" stroke="#00f2ff" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Skills Radar */}
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#00f2ff]">Skill Radar</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart data={[
                      { skill: 'React', level: 9 },
                      { skill: 'Next.js', level: 8 },
                      { skill: 'Python', level: 9 },
                      { skill: 'ML', level: 8 },
                      { skill: 'Java', level: 7 },
                      { skill: 'Blockchain', level: 6 },
                    ]}>
                      <PolarGrid stroke="#888" />
                      <PolarAngleAxis dataKey="skill" stroke="#ccc" />
                      <PolarRadiusAxis angle={30} domain={[0, 10]} />
                      <Radar dataKey="level" stroke="#00f2ff" fill="#00f2ff" fillOpacity={0.6} />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>

                {/* Platforms Section */}
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { platform: 'GitHub', score: '🔥 250+ commits', link: 'https://github.com/princeyuviii' },
                    { platform: 'LeetCode', score: '👨‍💻 300+ problems', link: '#' },
                    { platform: 'Upwork', score: '💼 5 stars, 3 clients', link: '#' },
                    { platform: 'LinkedIn', score: '🌐 500+ connections', link: 'https://linkedin.com/in/princeyuvi' },
                  ].map((item, i) => (
                    <Card key={i} className="bg-[#1b1b2f] border border-[#00f2ff] p-4">
                      <CardTitle className="text-xl text-[#00f2ff]">{item.platform}</CardTitle>
                      <p className="text-sm text-gray-300">{item.score}</p>
                      <a
                        href={item.link}
                        target="_blank"
                        className="text-[#00f2ff] underline text-sm mt-1 inline-block"
                      >
                        View Profile →
                      </a>
                    </Card>
                  ))}
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#00f2ff]">🏆 Achievements</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li>Infosys CNN Internship completed</li>
                    <li>Top 50 in DevFest.AI 2024</li>
                    <li>Hacktoberfest 2024: Level 4</li>
                    <li>GSSoC 2024 Contributor</li>
                    <li>Organized MU CodeStorm Hackathon</li>
                  </ul>
                </div>

                <div className="pt-4">
                  <Button variant="outline" className="border-[#00f2ff] text-[#00f2ff] hover:bg-[#00f2ff] hover:text-black">
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="jobs">
          <section className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'UI Designer for fintech app', status: 'Pending' },
              { title: 'AI Resume Builder (ongoing)', status: 'Active' },
              { title: 'Web3 Frontend, Mentor Match', status: 'Recommended' },
              { title: 'DevOps role @ StartupX', status: 'Open' },
              { title: 'Backend Django Developer (remote)', status: 'Applied' },
              { title: 'Junior Data Analyst for EdTech', status: 'Interviewing' },
            ].map((job, i) => (
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                key={i}
              >
                <Card className="transition-transform duration-300 ease-in-out">
                  <CardHeader>
                    <CardTitle>{job.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Badge variant="secondary">{job.status}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </section>
        </TabsContent>

        <TabsContent value="messages">
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 scroll-smooth">
            <Input placeholder="Search messages..." />
            {[
              ['Shubham (Mentor)', 'Let\'s schedule your mock interview this Friday?'],
              ['Tanya (Client)', 'I reviewed your proposal. Can we connect on Google Meet?'],
              ['Chirag (Teammate)', 'Bro, I pushed the new backend APIs. Check once.'],
              ['Hema (Client)', 'Can you share your portfolio link?'],
              ['Palak (Team Lead)', 'Final call for design updates is tomorrow.'],
              ['Raj (Recruiter)', 'Are you available for 6-month remote role?'],
              ['Ashna (Friend)', 'Teach me how you made that AI model 😭'],
              ['Ravi (HR)', 'Congrats, you’re selected for round 2.'],
              ['Kavya (Dev team)', 'Add the socket events when you get time.'],
              ['Mradul (AI Team)', 'Dataset is updated on GDrive.'],
              ['Zara (Client)', 'Need a ML-based sentiment analyzer. Possible?'],
              ['Sakshi (Mentor)', 'Let’s review your progress this week.'],
              ['Tanishka (BHAI project)', 'Blockchain logic’s done, your turn!'],
              ['Chinu (Frontend Dev)', 'Hey, Figma updated. UI changes pushed.'],
              ['Ayush (Internship Co.)', 'Your certificate will be shared by Friday.'],
            ].map(([sender, msg], i) => (
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                key={i}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>From: {sender}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{msg}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <footer className="text-center text-muted-foreground text-sm py-10">
        FreeLancer © {new Date().getFullYear()} • Built with ❤️ by Yuvi
      </footer>
    </div>
  )
}