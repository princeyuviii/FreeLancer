import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MessageSquare, Calendar } from "lucide-react"

const mentors = [
  {
    id: 1,
    name: "Sarah Chen",
    expertise: "Full Stack Development",
    rating: 4.9,
    hourlyRate: 45,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&h=250&auto=format&fit=crop",
    specialties: ["React", "Node.js", "TypeScript"],
    availability: "Available next week",
    country: "Singapore"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    expertise: "Mobile Development",
    rating: 4.8,
    hourlyRate: 40,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&h=250&auto=format&fit=crop",
    specialties: ["React Native", "iOS", "Android"],
    availability: "Available today",
    country: "USA"
  },
  {
    id: 3,
    name: "Emily Thompson",
    expertise: "UI/UX Design",
    rating: 5.0,
    hourlyRate: 50,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=250&h=250&auto=format&fit=crop",
    specialties: ["Figma", "User Research", "Design Systems"],
    availability: "Available tomorrow",
    country: "Canada"
  },
  {
    id: 4,
    name: "Rajeev Mehta",
    expertise: "AI/ML Engineer",
    rating: 4.7,
    hourlyRate: 35,
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    specialties: ["Python", "TensorFlow", "NLP"],
    availability: "Available this week",
    country: "India"
  },
  {
    id: 5,
    name: "Priya Sharma",
    expertise: "Cloud DevOps",
    rating: 4.8,
    hourlyRate: 38,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    specialties: ["AWS", "Docker", "Kubernetes"],
    availability: "Available in 2 days",
    country: "India"
  },
  {
    id: 6,
    name: "Aarav Patel",
    expertise: "Cybersecurity Analyst",
    rating: 4.6,
    hourlyRate: 30,
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    specialties: ["Ethical Hacking", "SIEM", "Firewalls"],
    availability: "Available today",
    country: "India"
  },
  {
    id: 7,
    name: "Neha Bansal",
    expertise: "Data Analyst",
    rating: 4.9,
    hourlyRate: 32,
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    specialties: ["Excel", "Power BI", "SQL"],
    availability: "Available this weekend",
    country: "India"
  },
  {
    id: 8,
    name: "Karan Verma",
    expertise: "Blockchain Developer",
    rating: 4.7,
    hourlyRate: 42,
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    specialties: ["Solidity", "Ethereum", "Smart Contracts"],
    availability: "Available in 3 days",
    country: "India"
  },
  {
    id: 9,
    name: "Sneha Kapoor",
    expertise: "Product Manager",
    rating: 5.0,
    hourlyRate: 55,
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    specialties: ["Agile", "Scrum", "Product Strategy"],
    availability: "Available next week",
    country: "India"
  },
  {
    id: 10,
    name: "Rohan Desai",
    expertise: "Game Developer",
    rating: 4.5,
    hourlyRate: 36,
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    specialties: ["Unity", "C#", "Unreal Engine"],
    availability: "Available tomorrow",
    country: "India"
  }
]

export default function MentorsPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Meet Top Mentors Across Technologies</h1>
          <p className="text-xl text-muted-foreground">
            Personalized guidance from the best minds to elevate your skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <Card key={mentor.id} className="rounded-2xl shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg tracking-tight">{mentor.name}</h3>
                    <p className="text-muted-foreground text-sm">{mentor.expertise}</p>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="ml-1 text-sm">{mentor.rating}</span>
                    </div>
                    <Badge className="mt-2 text-xs bg-muted text-foreground">{mentor.country}</Badge>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {mentor.specialties.map((specialty) => (
                    <Badge variant="outline" key={specialty} className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {mentor.availability}
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold">₹{mentor.hourlyRate}</span>
                    <span className="text-muted-foreground ml-1">/ hour</span>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Button className="flex-1">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
