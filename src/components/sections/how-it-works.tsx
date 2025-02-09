import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { Sparkles, Upload, Zap } from "lucide-react";
import { HeroCTA } from "./hero";

const data = [
  {
    id: 1,
    title: "1. Free Business AI Assessment",
    content:
      "Dive deep into your operation and procesess and inefficiencies to deliver a FREE mapping on where AI can have the biggest impact.",
    image: "/dashboard.png",
    icon: <Upload className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. Custom AI Agent development ",
    content:
      "We build, test and seamlessly integrate AI agents into your workflows, zero disruption, maximum efficiency.",
    image: "/dashboard.png",
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. Continuous Optimization",
    content:
      "We provide ongoing refinements, monitoring, and scaling strategies so your AI evolves with your business.",
    image: "/dashboard.png",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="How it works" subtitle="Unlock AI-Driven Efficiency in 3 Simple Steps">
      <Features data={data} />
            <HeroCTA hideText={true} />
      
    </Section>
  );
}
