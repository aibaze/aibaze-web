import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, Zap } from "lucide-react";

const problems = [
  {
    title: "Time and Money loss",
    description:
      "Companies relying on manual processes fall behind those that automate and offer real-time client availability ",
    icon: Brain,
  },
  {
    title: "Boosted Profit ",
    description:
      "Companies that automate their processes see an average profit increase of 30%—cutting costs, optimizing conversions, and unlocking scalable efficiency.",
    icon: Zap,
  },
  {
    title: "Competitive Disadvantage",
    description:
      "Manual operations are locking your business when rapid adaptation is truly essential. Failing to automate now means missing critical opportunities to evolve and scale in a fast-paced market.",
    icon: Shield,
  }
];

export default function Component() {
  return (
    <Section
      title="Problem"
      subtitle="Why Manual Work is Costing you"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {problems.map((problem, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className="bg-background border-none shadow-none">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
