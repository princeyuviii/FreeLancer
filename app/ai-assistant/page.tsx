"use client";

import { useChat } from "ai/react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import ReactMarkdown from "react-markdown";
import { Bot, User, Send, Sparkles, Lightbulb, BrainCircuit } from "lucide-react";
import { useEffect, useState } from "react";

export default function AIAssistant() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const [selectedPrompt, setSelectedPrompt] = useState("");
  const [summary, setSummary] = useState("Waiting for your query...");
  const [bugs, setBugs] = useState<string[]>([]);
  const [mentors, setMentors] = useState<string[]>(["Loading suggestions..."]);

  const quickPrompts = [
    "Explain this code snippet",
    "Find bug in my code",
    "Suggest optimizations",
    "Time complexity of this code?",
  ];

  useEffect(() => {
    const latestMessage = messages[messages.length - 1];
    if (latestMessage?.role === "user") {
      setSummary(`Working on: "${latestMessage.content.slice(0, 60)}..."`);
      if (latestMessage.content.toLowerCase().includes("error") || latestMessage.content.toLowerCase().includes("bug")) {
        setBugs(["SyntaxError in line 7", "TypeError in function `processData()`"]);
        setMentors(["Ankush Tiwari (Java)", "Simran Bansal (Python)", "Ayush Mishra (DSA)"]);
      } else {
        setBugs([]);
        setMentors(["Riya Gupta (Frontend)", "Raj Patel (AI/ML)", "Ishaan Malhotra (System Design)"]);
      }
    }
  }, [messages]);

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-12 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-8">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-white via-gray-200 to-white text-transparent bg-clip-text">
            <Sparkles className="inline-block mr-3 text-yellow-400" /> Pappu GPT
          </h1>
          <p className="text-gray-400 text-lg">Your professional AI pair programmer — Ask anything, anytime.</p>
        </div>

        <div className="flex flex-col xl:flex-row gap-6">
          {/* Chat area */}
          <div className="flex-1 bg-[#1a1a1a] rounded-2xl p-6 border border-gray-700">
            <ScrollArea className="h-[600px] pr-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-4 mb-4 ${
                    message.role === "assistant" ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`p-4 max-w-[75%] rounded-xl text-sm leading-relaxed ${
                      message.role === "assistant"
                        ? "bg-[#2a2a2a] text-white"
                        : "bg-[#e5e5e5] text-black"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1 font-semibold text-xs text-gray-400">
                      {message.role === "assistant" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                      {message.role === "assistant" ? "Pappu" : "You"}
                    </div>
                    <ReactMarkdown className="prose prose-invert text-sm">{message.content}</ReactMarkdown>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="text-gray-500 text-sm pl-2 animate-pulse">Pappu is typing...</div>
              )}
            </ScrollArea>

            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask your question..."
                  className="flex-1 bg-[#111] text-white border border-gray-700 rounded-lg"
                />
                <Button type="submit" className="bg-gradient-to-r from-gray-100 to-white text-black hover:from-white hover:to-gray-200">
                  <Send className="h-4 w-4 mr-1" />
                  Ask
                </Button>
              </div>

              <div className="flex flex-col md:flex-row gap-3 justify-between items-start md:items-center border-t border-gray-700 pt-4">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto"
                  onClick={() => alert("VS Code connection coming soon...")}
                >
                  💻 Connect to VS Code
                </Button>

                <div className="text-sm text-gray-300 w-full md:w-auto">
                  <label htmlFor="file-upload" className="block mb-1 font-medium">📤 Upload File</label>
                  <input
                    type="file"
                    id="file-upload"
                    className="w-full rounded-lg text-sm bg-[#111] border border-gray-700 text-white px-2 py-1"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        alert(`Uploaded: ${file.name}`);
                      }
                    }}
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Sidebar Panel */}
          <div className="hidden xl:flex xl:flex-col gap-6 w-[320px]">
            <Card className="p-5 bg-[#1b1b1b] border border-gray-700 rounded-xl">
              <h2 className="font-semibold text-lg mb-3">Quick Prompts</h2>
              <div className="flex flex-col gap-3">
                {quickPrompts.map((prompt, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    onClick={() => {
                      setSelectedPrompt(prompt);
                      handleInputChange({ target: { value: prompt } } as React.ChangeEvent<HTMLInputElement>);
                    }}
                    className="text-sm bg-[#111] text-white border-gray-700 hover:bg-white hover:text-black transition rounded-lg"
                  >
                    {prompt}
                  </Button>
                ))}
              </div>
            </Card>

            <Card className="p-5 bg-[#1b1b1b] border border-gray-700 rounded-xl">
              <h2 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Lightbulb className="h-4 w-4" /> Tips
              </h2>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>Start with clear, concise questions.</li>
                <li>Use code blocks (` ```language `) for better formatting.</li>
                <li>Combine quick prompts with your own input for best results.</li>
              </ul>
            </Card>

            <Card className="p-5 bg-[#141414] border border-gray-700 rounded-xl">
              <h2 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <BrainCircuit className="h-4 w-4 text-green-400" /> AI Assistant Panel
              </h2>
              <div className="text-sm text-gray-300 space-y-3">
                <div>
                  <span className="font-semibold text-white">Current Task:</span>
                  <p className="text-gray-400 mt-1">{summary}</p>
                </div>
                <div>
                  <span className="font-semibold text-white">Detected Bugs:</span>
                  <ul className="list-disc ml-5 text-gray-400">
                    {bugs.length ? bugs.map((b, i) => <li key={i}>{b}</li>) : <li>None detected</li>}
                  </ul>
                </div>
                <div>
                  <span className="font-semibold text-white">Suggested Mentors:</span>
                  <ul className="list-disc ml-5 text-gray-400">
                    {mentors.map((m, i) => <li key={i}>{m}</li>)}
                  </ul>
                </div>
                <div>
                  <span className="font-semibold text-white">Learning Status:</span>
                  <p className="text-green-500">🔄 Learning from interaction...</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}