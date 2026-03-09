export type Product = {
  id: string;
  name: string;
  fitFor: string;
  includes: string;
  tokenCost: number;
  rating: string;
  summary: string;
  aiReason: string;
};

export const dashboardMetrics = [
  { label: "今日产出", value: "2.1 Token", tone: "text-cyan-300" },
  { label: "当前余额", value: "56 Token", tone: "text-white" },
  { label: "健康评分", value: "72", tone: "text-emerald-300" },
  { label: "推荐产品", value: "能量恢复组合", tone: "text-fuchsia-300" },
];

export const heroHighlights = [
  "本地 mock 数据，无需区块链或真实支付即可演示",
  "AI 管家 + AI 健康顾问双引擎，突出用户价值转化",
  "适合 Token / 矿机 / 商城 / 游戏平台快速叠加 AI 体验层",
];

export const butlerReminder = {
  tokenGain: "+2.1 Token",
  balance: "56 Token",
  streak: "7 天",
  action: "兑换健康组合，比用于游戏更高价值",
  quote:
    "根据你最近 3 天的使用情况，你当前更适合优先兑换健康产品，而不是直接参与游戏。这样可获得更高的实际使用价值。",
};

export const healthSnapshot = [
  { label: "睡眠评分", value: "72 / 100" },
  { label: "饮水完成度", value: "60%" },
  { label: "压力状态", value: "中等" },
  { label: "本周运动", value: "2 次" },
];

export const healthAdvice =
  "你最近 7 天睡眠波动较明显，建议减少晚间高糖饮品摄取，并增加白天饮水量。若近期容易疲劳，可优先考虑能量恢复类产品。";

export const spendingChoices = [
  {
    id: "redeem",
    title: "兑换产品",
    suggestion: "建议消耗：30 Token",
    meta: "推荐：能量恢复组合",
    badge: "价值评级：高",
  },
  {
    id: "game",
    title: "参与游戏",
    suggestion: "建议预算：10 Token",
    meta: "风险等级：中",
    badge: "建议：小额体验",
  },
];

export const spendingSummary =
  "根据当前平台模拟数据，兑换健康产品的平均使用价值高于短期游戏消耗，更适合当前阶段的你。";

export const productList: Product[] = [
  {
    id: "energy",
    name: "能量恢复组合",
    fitFor: "容易疲劳、作息不稳定",
    includes: "维生素B、草本能量饮品",
    tokenCost: 30,
    rating: "高价值",
    summary: "快速帮助用户理解 Token 如何转化为可感知的日常价值。",
    aiReason:
      "根据当前模拟健康数据，你存在精力波动、饮水偏少和睡眠质量一般的问题。这类组合更适合作为高频演示推荐，既容易理解，也能直接体现平台从收益到消费的闭环价值。",
  },
  {
    id: "sleep",
    name: "睡眠修护组合",
    fitFor: "睡眠浅、夜间易醒",
    includes: "草本饮品、舒缓配方",
    tokenCost: 42,
    rating: "修护型",
    summary: "突出平台对用户长期状态的洞察，不只是做即时推荐。",
    aiReason:
      "如果用户的核心困扰是晚间恢复效率偏低，这个组合比泛化推荐更有说服力。它适合作为中高价值方案，展示 AI 如何结合睡眠趋势做更精细的引导。",
  },
  {
    id: "balance",
    name: "日常平衡组合",
    fitFor: "想维持日常状态",
    includes: "基础营养补充品",
    tokenCost: 25,
    rating: "入门友好",
    summary: "适合首次体验产品兑换的用户，降低使用门槛。",
    aiReason:
      "当用户暂时没有明确疲劳或睡眠问题时，平台可先推荐更轻量的平衡型组合，帮助用户完成第一次价值感知与兑换动作，提升复购与留存的可解释性。",
  },
];

export const quickQuestions = [
  "我今天赚了多少 Token？",
  "有什么产品适合我？",
  "我最近有点疲劳",
  "今天适合参与游戏吗？",
];

export const demoFooterCopy =
  "本系统为第三方 AI 用户体验层，适用于已具备 Token、矿机、商城或游戏模块的平台。通过 AI 管家与 AI 健康顾问，平台可为用户提供更智能的收益解读、健康互动、产品推荐与消费引导。";
