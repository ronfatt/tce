const replyMap: Record<string, string> = {
  "我最近血糖高怎么办":
    "如果你最近担心血糖波动，建议先从日常饮食节奏开始调整，减少含糖饮料和夜间高糖摄入，并保持规律进餐。Nova 可以继续为你提供日常管理建议，但这不构成医疗诊断。",
  "我压力很大":
    "从模拟健康数据看，你最近的压力指数偏高。今天建议减少高强度活动、增加补水，并安排 20 到 30 分钟轻度散步，帮助身体先回到更稳定的状态。",
  "我晚上睡不好":
    "如果你最近晚上睡不好，建议先减少晚间咖啡和高糖饮品，固定睡前节奏，并把手机使用时间提前结束。若这种情况持续存在，建议再寻求专业意见。",
  "我容易疲劳":
    "Nova 观察到你当前更像是恢复效率偏弱，而不是短期精力不足。建议优先补足饮水、保证睡眠，并考虑恢复型健康方案作为日常辅助选择。",
};

const keywordFallbacks = [
  { keywords: ["血糖", "糖"], answer: replyMap["我最近血糖高怎么办"] },
  { keywords: ["压力", "焦虑"], answer: replyMap["我压力很大"] },
  { keywords: ["睡眠", "睡不好", "失眠"], answer: replyMap["我晚上睡不好"] },
  { keywords: ["疲劳", "累", "乏力"], answer: replyMap["我容易疲劳"] },
];

export function getMockAIReply(question: string) {
  const normalizedQuestion = question.trim();
  if (replyMap[normalizedQuestion]) return replyMap[normalizedQuestion];

  const matchedFallback = keywordFallbacks.find(({ keywords }) =>
    keywords.some((keyword) => normalizedQuestion.includes(keyword)),
  );

  if (matchedFallback) return matchedFallback.answer;

  return "这是 Demo 版本，我目前可以为你提供血糖、压力、睡眠、疲劳和日常健康管理方面的建议，但不构成医疗诊断。";
}
