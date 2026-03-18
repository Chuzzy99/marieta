"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Bot, ExternalLink } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Message {
  id: string;
  type: "bot" | "user";
  text: string;
  links?: { label: string; href: string; external?: boolean }[];
}

const QA_FLOWS = [
  {
    question: "What should I bring to my exam?",
    answer: "Please bring your current glasses/contacts, photo ID, and a list of any medications. Arrive 10 minutes early to complete paperwork.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, bank transfers, and all major credit cards including Visa, Mastercard, and American Express. Payment is required at the time of service.",
    links: [{ label: "Book Appointment", href: "/book-appointment" }],
  },
  {
    question: "How long does an eye exam take?",
    answer: "A comprehensive eye exam typically takes 45–90 minutes, depending on the tests needed.",
  },
  {
    question: "Do you treat children?",
    answer: "Yes, we specialize in Pediatric Eye Care. We provide friendly and thorough vision screenings to ensure your child's eyes are developing correctly.",
    links: [{ label: "Pediatric Eye Care", href: "/book-appointment?service=pediatric-eye-care" }],
  },
  {
    question: "Do you offer emergency eye care?",
    answer: "Yes! We offer same-day emergency appointments for eye injuries, sudden vision changes, and eye infections. Call us immediately at +234 803 306 7153.",
  },
  {
    question: "How do I book an appointment?",
    answer: "You can easily book an appointment online through our portal.",
    links: [{ label: "Book Appointment →", href: "/book-appointment" }],
  },
];

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "Hello! I'm your Marieta Eye Assistant. How can I help you today?",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-open after 5s on first visit
    const hasSeenChat = sessionStorage.getItem("hasSeenChat");
    if (!hasSeenChat) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenChat", "true");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleQuestionClick = (question: string) => {
    const flow = QA_FLOWS.find((f) => f.question === question);
    if (!flow) return;

    // Add user message
    const userMsg: Message = { id: Date.now().toString(), type: "user", text: question };
    setMessages((prev) => [...prev, userMsg]);

    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      setIsTyping(false);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: flow.answer,
        links: flow.links,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 800);
  };

  const clearChat = () => {
    setMessages([
      {
        id: "1",
        type: "bot",
        text: "Hello! I'm your Marieta Eye Assistant. How can I help you today?",
      },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[320px] sm:w-[360px] h-[500px] bg-card border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex items-center justify-between text-primary-foreground">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Marieta Eye Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] opacity-80">Always Online</span>
                  </div>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/10 h-8 w-8"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/5 scrollbar-thin">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex flex-col gap-1 max-w-[85%]",
                    msg.type === "user" ? "ml-auto items-end" : "items-start"
                  )}
                >
                  <div
                    className={cn(
                      "px-4 py-2.5 rounded-2xl text-sm leading-relaxed",
                      msg.type === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-muted border rounded-tl-none text-foreground"
                    )}
                  >
                    {msg.text}
                  </div>
                  {msg.links && (
                    <div className="flex flex-wrap gap-2 mt-1">
                      {msg.links.map((link, i) => (
                        <Link 
                          key={i}
                          href={link.href} 
                          target={link.external ? "_blank" : undefined}
                          className={cn(buttonVariants({ variant: "outline", size: "sm" }), "h-8 text-xs font-semibold bg-primary/5 border-primary/20 text-primary hover:bg-primary/10")}
                        >
                          {link.label}
                          {link.external && <ExternalLink className="ml-1 h-3 w-3" />}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex items-start gap-2">
                  <div className="bg-muted px-4 py-2.5 rounded-2xl rounded-tl-none border">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 animate-bounce" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Questions area */}
            <div className="p-4 border-t bg-background">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-3 px-1">
                Suggested Questions
              </p>
              <div className="flex flex-wrap gap-2">
                {QA_FLOWS.map((flow, i) => {
                  const isAsked = messages.some(m => m.text === flow.question);
                  if (isAsked && messages[messages.length-1].type === 'bot') return null;
                  return (
                    <button
                      key={i}
                      onClick={() => handleQuestionClick(flow.question)}
                      className="text-left py-1.5 px-3 rounded-lg border bg-muted/30 hover:bg-primary/5 hover:border-primary/50 text-xs transition-all duration-200"
                    >
                      {flow.question}
                    </button>
                  );
                })}
              </div>
              <div className="mt-4 pt-4 border-t flex flex-col gap-2">
                 <Link 
                   href="/book-appointment"
                   className={cn(buttonVariants({ variant: "secondary" }), "w-full shadow-md hover:shadow-lg transition-all")}
                 >
                   Book Appointment
                 </Link>
                 <div className="flex items-center justify-between">
                   <div className="flex-1 text-[10px] text-muted-foreground flex items-center gap-1">
                      <Bot className="w-3 h-3" />
                      AI-powered assistant (Beta)
                   </div>
                   <button 
                    onClick={clearChat}
                    className="text-[10px] font-medium text-primary hover:underline"
                   >
                     Reset Conversation
                   </button>
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative h-14 w-14 rounded-full flex items-center justify-center shadow-lg transition-colors border-4 border-background",
          isOpen ? "bg-muted text-foreground" : "bg-primary text-primary-foreground"
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
        )}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
