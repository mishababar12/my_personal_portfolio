import Image from "next/image";
import { notFound } from "next/navigation";
import agenticai from "@/public/image/agenticai.png";
import sdkimage from "@/public/image/sdkimage.webp";
import planningagent from "@/public/image/plannigagent.webp";

type BlogPost = { title: string; content: string; image?: any };
const blogPosts: Record<string, BlogPost> = {
  "understanding-agentic-ai": {
    title: "Understanding Agentic AI",
    content: `
Agentic AI is about giving AI the ability to act with purpose, using tools and memory.
It can plan, decide, and use tools like an agent. It works with LLMs and APIs to take real action.

Key Concepts:
- **Autonomy**: Agentic systems can make decisions based on goals.
- **Tools & APIs**: Used by agents to perform real-world tasks.
- **Context & Memory**: Helps AI stay aware across interactions.

Example: OpenAI Agents SDK lets you build these types of intelligent agents with tools, context, handoff, etc.

Real-world applications include:
- Personalized AI assistants
- Automated customer support agents
- Health & fitness digital coaches
    `,
    image: agenticai,
  },
  "building-tools-openai-sdk": {
    title: "Building Tools with OpenAI SDK",
    content: `
This blog explains how to build tools using OpenAI's SDK. You'll learn how to:

- **Define tools using @tool**: Create functions that the LLM can call.
- **Use RunContextWrapper**: Pass shared memory or variables between steps.
- **Handle tool responses**: Return string/text or full response objects.
- **Perform handoffs**: Use @agent to switch to another agent when needed.

These patterns allow you to simulate complex workflows, even without an actual API key.
Example use case: A fitness agent that calls a meal planner tool, then hands off to a workout agent.
    `,
    image: sdkimage,
  },
  "how-i-built-my-first-agent": {
    title: "How I Built My First Agent",
    content: `
I built my first agent using the OpenAI SDK. It could respond, call tools, and switch to another agent.

Steps I followed:
1. Created custom tool functions like fetch_user_info.
2. Used @tool and @agent decorators.
3. Implemented context with RunContextWrapper.
4. Simulated tool behavior without an actual backend.

What I learned:
- Agents are modular.
- Tools must be async-friendly.
- Context is essential for carrying info across steps.

This approach is perfect for health, productivity, or education bots.
    `,
    image: planningagent,
  },
};

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) return notFound();

  return (
       <div
      className="min-h-screen w-full py-20 px-4 text-white bg-cover bg-center"
      style={{ backgroundImage: `url('/agenticbg.jpg')` }}
    >
      <div className=" bg-opacity-80 w-full max-w-5xl mx-auto p-10 rounded-2xl shadow-xl">
        <h1 className="text-5xl font-extrabold text-teal-400 mb-8 text-center">
          {post.title}
        </h1>
        {post.image && (
          <div className="flex justify-center">
            <Image
              src={post.image}
              alt={post.title}
              width={900}
              height={450}
              className="rounded-xl mb-8 shadow-lg"
            />
          </div>
        )}
        <p className="text-gray-300 whitespace-pre-line leading-relaxed text-lg tracking-wide">
          {post.content}
        </p>
      </div>
    </div>
  );
}
