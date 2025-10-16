import Image from "next/image";
import { notFound } from "next/navigation";

const blogPosts = {
  "understanding-agentic-ai": {
    title: "Understanding Agentic AI",
    content: `
Agentic AI gives systems the ability to act purposefully, plan, and use tools.
It connects LLMs, APIs, and decision logic to perform real actions.

Key Concepts:
- Autonomy: Systems can make their own choices.
- Tools & APIs: Used by agents to complete real-world tasks.
- Context & Memory: Keep track of goals and history.

Example: OpenAI Agents SDK lets you build such intelligent, goal-oriented agents.
    `,
    image: "/image/agenticai.png",
  },
  "building-tools-openai-sdk": {
    title: "Building Tools with OpenAI SDK",
    content: `
Learn how to create tools using OpenAI's SDK:

- Define tools with @tool
- Use RunContextWrapper to pass shared data
- Handle tool responses properly
- Perform handoffs between agents

These steps help you simulate workflows for intelligent applications.
    `,
    image: "/image/sdkimage.webp",
  },
  "how-i-built-my-first-agent": {
    title: "How I Built My First Agent",
    content: `
I created my first custom agent using the OpenAI SDK.

Steps:
1. Made custom tool functions
2. Used @tool and @agent
3. Implemented context
4. Simulated tool calls

Result: a working AI that responds, plans, and switches between agents.
    `,
    image: "/image/plannigagent.webp",
  },
};

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];


  if (!post) return notFound();

  return (
    <div
      className="min-h-screen w-full py-20 px-4 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/agenticbg.jpg')" }}
    >
      <div className="bg-[#0f172abf] w-full max-w-5xl mx-auto p-10 rounded-2xl shadow-xl">
        <h1 className="text-5xl font-extrabold text-teal-400 mb-8 text-center">
          {post.title}
        </h1>

        <div className="flex justify-center">
          <Image
            src={post.image}
            alt={post.title}
            width={900}
            height={450}
            className="rounded-xl mb-8 shadow-lg"
          />
        </div>

        <p className="text-gray-300 whitespace-pre-line leading-relaxed text-lg tracking-wide">
          {post.content}
        </p>
      </div>
    </div>
  );
}

