const replyMap: Record<string, string> = {
  "我今天赚了多少 Token？":
    "你今天的虚拟矿机已产出 2.1 Token，当前总余额为 56 Token。按照目前的累积速度，你再持续 3 天，可兑换更高价值的健康组合。",
  "我今天赚多少 Token":
    "你今天的虚拟矿机已产出 2.1 Token，当前总余额为 56 Token。按照目前的累积速度，你再持续 3 天，可兑换更高价值的健康组合。",
  "有什么产品适合我？":
    "根据你的健康状态与使用记录，目前更适合你的产品是【能量恢复组合】。我注意到你最近更常查看健康类建议，如果你想进一步提升体力，这个组合会比直接消耗在游戏中更有实际价值。",
  "有什么产品适合我":
    "根据你的健康状态与使用记录，目前更适合你的产品是【能量恢复组合】。我注意到你最近更常查看健康类建议，如果你想进一步提升体力，这个组合会比直接消耗在游戏中更有实际价值。",
  "我最近有点疲劳":
    "从模拟健康数据来看，你近期可能存在睡眠不足与饮水量偏低的情况。建议你优先调整作息、增加水分补充，同时可考虑能量恢复类产品作为辅助选择。此建议仅用于日常健康管理，不构成医疗建议。",
  "今天适合参与游戏吗？":
    "可以小额体验。根据当前模拟策略，你今天更适合将大部分 Token 保留用于产品兑换；若想参与游戏，建议控制在 10 Token 以内，作为娱乐体验。",
  "今天适合玩游戏吗":
    "可以小额体验。根据当前模拟策略，你今天更适合将大部分 Token 保留用于产品兑换；若想参与游戏，建议控制在 10 Token 以内，作为娱乐体验。",
};

const keywordFallbacks = [
  {
    keywords: ["收益", "token", "余额", "矿机"],
    answer: replyMap["我今天赚了多少 Token？"],
  },
  {
    keywords: ["产品", "推荐", "兑换", "组合"],
    answer: replyMap["有什么产品适合我？"],
  },
  {
    keywords: ["疲劳", "累", "睡眠", "健康"],
    answer: replyMap["我最近有点疲劳"],
  },
  {
    keywords: ["游戏", "参与", "预算", "娱乐"],
    answer: replyMap["今天适合参与游戏吗？"],
  },
];

export function getMockAIReply(question: string) {
  const normalizedQuestion = question.trim();

  if (replyMap[normalizedQuestion]) {
    return replyMap[normalizedQuestion];
  }

  const matchedFallback = keywordFallbacks.find(({ keywords }) =>
    keywords.some((keyword) =>
      normalizedQuestion.toLowerCase().includes(keyword.toLowerCase()),
    ),
  );

  if (matchedFallback) {
    return matchedFallback.answer;
  }

  return "这是 Demo 版本，我目前可以为你提供收益说明、健康建议、产品推荐、消费建议，以及带一点记忆感的 AI 管家回复。";
}
