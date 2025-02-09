import Features from "@/components/features-horizontal";
import Section from "@/components/section";
import { BarChart3, Brain, FileText, LineChart } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Mike",
    subtitle: "The AI Operations Manager",
    content: "Automates tasks and coordinates teams.",
    image: "https://i.ibb.co/MDD6jnJk/Mike.png",
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "Bella",
    subtitle: "Voice Appointment setter & Customer Support Expert",
    content: "Automates support, sales, and client interactions with human-like AI via chat or voice 24/7.",
    image: "https://i.ibb.co/Zzd27CsG/Bella.png",
    icon: <Brain className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: "Liam",
    subtitle: "AI Business Analyst",
    content: "Transforms data into insights, generates reports, and spots trends & opportunities.",
    image: "https://i.ibb.co/wHxW0NV/Liam.png",
    icon: <LineChart className="h-6 w-6 text-primary" />,
  },
  {
    id: 4,
    title: "Jessie",
    subtitle: "AI Community Manager",
    content: "Tailored to your business's unique needs.",
    image: "https://i.ibb.co/RTRqsMnt/Jessie.png",
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
];


export default function Component() {
  return (
    <Section title="Features" subtitle="AI Agents that work like a team">
      <Features collapseDelay={10000} linePosition="bottom" data={data.reverse()} />
    </Section>
  );
}
