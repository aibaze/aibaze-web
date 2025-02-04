import Features from "@/components/features-horizontal";
import Section from "@/components/section";
import { BarChart3, Brain, FileText, LineChart } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Alex - The AI Operations Manager",
    content: "Manages tasks automation and team cordination.",
    image: "https://i.ibb.co/MDD6jnJk/Mike.png",

    icon: <BarChart3 className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "Bella - The AI Business Analyst",
    content: "Turns data into strategic insights, generates real-time reports, identifies trends and revenue opportunities.",
    image: "https://i.ibb.co/Zzd27CsG/Bella.png",

    icon: <Brain className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: "Charlie - The AI Customer assistant",
    content: "Automates support, sales and client interactions with human-like intelligence and commuitcation via Chat or Voice customer queries 24/7.",
    image: "https://i.ibb.co/wHxW0NV/Liam.png",
    icon: <LineChart className="h-6 w-6 text-primary" />,
  },
  {
    id: 4,
    title: "Dakota - The AI Customization Architect ",
    content: "Is the product of the automation of your busines specific needs and solution.",
    icon: <FileText className="h-6 w-6 text-primary" />,
    image: "https://i.ibb.co/RTRqsMnt/Jessie.png",

  },
];

export default function Component() {
  return (
    <Section title="Features" subtitle="AI Agents that work like a team">
      <Features collapseDelay={10000} linePosition="bottom" data={data.reverse()} />
    </Section>
  );
}
