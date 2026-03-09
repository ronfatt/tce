"use client";

import { useState } from "react";
import { Bot, MessageCircle, SendHorizonal, UserRound } from "lucide-react";
import { aiMemoryNotes, quickQuestions } from "@/data/mock-data";
import { getMockAIReply } from "@/utils/chat";
import { SectionShell } from "@/components/section-shell";

type Message = {
  id: string;
  role: "assistant" | "user";
  content: string;
};

const welcomeMessage: Message = {
  id: "welcome",
  role: "assistant",
  content: "你好，我是 Nova，你的 AI健康生活管家。我可以帮你管理健康提醒、生活习惯和日常保养建议。",
};

export function AIChatSection() {
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [input, setInput] = useState("");

  function handleSend(question: string) {
    const cleanQuestion = question.trim();
    if (!cleanQuestion) return;

    setMessages((current) => [
      ...current,
      { id: `${Date.now()}-user`, role: "user", content: cleanQuestion },
      { id: `${Date.now()}-assistant`, role: "assistant", content: getMockAIReply(cleanQuestion) },
    ]);
    setInput("");
  }

  return (
    <SectionShell id="ai-chat" className="overflow-hidden">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[30px] bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-6 text-white">
          <div className="pill border-white/10 bg-white/10 text-cyan-100">AI健康对话助手</div>
          <h2 className="mt-4 text-3xl font-semibold">AI聊天助手</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
            用户可以直接询问血糖、压力、睡眠和疲劳问题。Nova 只提供日常管理建议，不做医疗诊断。
          </p>

          <div className="mt-6 rounded-[28px] border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">AI记忆</p>
            <div className="mt-4 space-y-3">
              {aiMemoryNotes.map((note) => (
                <div key={note} className="rounded-2xl bg-white/5 p-4 text-sm text-slate-200">
                  {note}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-3">
            {quickQuestions.map((question) => (
              <button key={question} type="button" onClick={() => handleSend(question)} className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left text-sm transition hover:bg-white/10">
                <span>{question}</span>
                <MessageCircle className="h-4 w-4 text-cyan-300" />
              </button>
            ))}
          </div>
        </div>

        <div className="panel flex min-h-[620px] flex-col overflow-hidden p-0">
          <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-slate-950 p-3 text-white">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500">AI健康生活管家</p>
                <p className="text-lg font-semibold text-slate-950">Nova</p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
              健康建议模式
            </span>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50/80 px-4 py-5 md:px-6">
            {messages.map((message) => {
              const isAssistant = message.role === "assistant";
              return (
                <div key={message.id} className={`flex items-start gap-3 ${isAssistant ? "" : "justify-end"}`}>
                  {isAssistant ? (
                    <div className="rounded-2xl bg-slate-950 p-3 text-white">
                      <Bot className="h-4 w-4" />
                    </div>
                  ) : null}
                  <div className={`max-w-[88%] rounded-[26px] px-5 py-4 text-sm leading-7 shadow-sm ${isAssistant ? "bg-white text-slate-700" : "bg-cyan-600 text-white"}`}>
                    {message.content}
                  </div>
                  {!isAssistant ? (
                    <div className="rounded-2xl bg-cyan-100 p-3 text-cyan-700">
                      <UserRound className="h-4 w-4" />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSend(input);
            }}
            className="border-t border-slate-100 bg-white px-4 py-4 md:px-6"
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="输入问题，例如：我最近血糖高怎么办？"
                className="h-14 flex-1 rounded-full border border-slate-200 bg-slate-50 px-5 text-sm text-slate-700 outline-none transition focus:border-cyan-300 focus:bg-white"
              />
              <button type="submit" className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-semibold text-white">
                发送
                <SendHorizonal className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-3 text-xs leading-6 text-slate-400">
              说明：此对话仅提供日常健康管理建议，不构成医疗诊断。
            </p>
          </form>
        </div>
      </div>
    </SectionShell>
  );
}
