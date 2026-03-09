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
  { label: "资产状态", value: "Token余额：56", tone: "text-white" },
  { label: "今日收益", value: "+2.1 Token", tone: "text-cyan-300" },
  { label: "健康评分", value: "72 / 100", tone: "text-emerald-300" },
  { label: "活跃指数", value: "High", tone: "text-fuchsia-300" },
];

export const novaGreeting = {
  title: "你好，我是 AI管家 Nova",
  description: "我会帮助你管理收益、健康和消费。",
  status: "Nova 已为你准备好今日建议",
};

export const heroHighlights = [
  "AI管家负责资产管理、健康管理、消费策略与平台导航",
  "所有模块由本地 mock 数据驱动，无需真实支付、钱包或登录",
  "适合 Token / 矿机 / 商城 / 游戏平台快速加上 AI 用户体验层",
];

export const butlerReminder = {
  tokenGain: "+2.1 Token",
  balance: "56 Token",
  healthScore: "72",
  action: "当前更适合兑换健康产品，而不是直接参与游戏",
  quote:
    "根据你近期的消费记录，当前更适合兑换健康产品，而不是直接参与游戏。",
};

export const heroSuggestions = [
  "优先兑换健康产品",
  "今日适合小额娱乐游戏",
  "建议增加饮水",
];

export const predictiveInsights = [
  {
    label: "AI Predictive Insight",
    title: "按照当前收益速度",
    highlight: "你将在 4 天后",
    description: "达到 70 Token",
  },
  {
    label: "AI Predictive Insight",
    title: "你的健康评分",
    highlight: "预计 7 天可提升至 80",
    description: "前提是保持饮水和基础运动",
  },
];

export const lifeIndex = [
  { label: "财富指数", value: 65, accent: "from-cyan-400 to-cyan-300" },
  { label: "健康指数", value: 72, accent: "from-emerald-400 to-emerald-300" },
  { label: "平台活跃", value: 88, accent: "from-fuchsia-400 to-violet-300" },
  { label: "消费效率", value: 74, accent: "from-sky-400 to-indigo-300" },
];

export const coreStatement =
  "AI管家是平台的核心智能系统，通过数据分析与个性化建议，帮助用户管理收益、健康与消费。";

export const healthSnapshot = [
  { label: "睡眠评分", value: "70" },
  { label: "饮水完成度", value: "60%" },
  { label: "压力指数", value: "中等" },
  { label: "运动次数", value: "2" },
];

export const healthAdvice =
  "你最近7天睡眠波动较大，建议减少晚间咖啡摄入，并增加白天饮水量。";

export const spendingChoices = [
  {
    id: "redeem",
    title: "30 Token",
    suggestion: "兑换健康组合",
    meta: "优先完成高价值产品兑换",
    badge: "最佳策略",
  },
  {
    id: "game",
    title: "10 Token",
    suggestion: "娱乐体验",
    meta: "适合小额试玩，避免过度消耗",
    badge: "策略分配",
  },
  {
    id: "reserve",
    title: "剩余 Token",
    suggestion: "持续累积",
    meta: "保留灵活额度，为下一次兑换做准备",
    badge: "长期视角",
  },
];

export const spendingSummary =
  "根据平台模拟数据，兑换健康产品的实际价值更高。";

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
  "我今天赚多少 Token",
  "有什么产品适合我",
  "我最近有点疲劳",
  "今天适合玩游戏吗",
];

export const dailyTasks = [
  "领取今日收益",
  "增加饮水",
  "查看AI推荐产品",
  "保留10 Token娱乐",
];

export const butlerModeTasks = [
  "领取收益",
  "完成健康打卡",
  "兑换健康产品",
];

export const aiMemoryNotes = [
  "我注意到你最近更常查看健康类建议。",
  "你上一次更关注能量恢复组合，而不是娱乐消耗。",
];

export const businessValues = [
  "提高用户活跃",
  "提升消费转化",
  "增强复购率",
  "拉高平台粘性",
];

export const osTabs = ["财富", "健康", "娱乐", "消费"];

export const osModules = [
  {
    id: "wealth",
    title: "财富引擎",
    metric: "65",
    accent: "bg-cyan-500",
    summary: "自动追踪收益速度、余额变化与可兑换节点。",
    action: "4 天后预计达到 70 Token",
  },
  {
    id: "health",
    title: "健康引擎",
    metric: "72",
    accent: "bg-emerald-500",
    summary: "持续跟踪睡眠、饮水、压力和恢复趋势。",
    action: "7 天后健康评分预计提升至 80",
  },
  {
    id: "play",
    title: "娱乐引擎",
    metric: "High",
    accent: "bg-fuchsia-500",
    summary: "根据当前状态建议小额娱乐，控制消耗节奏。",
    action: "建议保留 10 Token 作为轻量体验预算",
  },
  {
    id: "spend",
    title: "消费引擎",
    metric: "74",
    accent: "bg-indigo-500",
    summary: "优先推动高价值产品兑换，提升真实感知价值。",
    action: "能量恢复组合是当前最优先方案",
  },
];

export const osStatus = [
  { label: "系统角色", value: "AI管家 Nova" },
  { label: "模式", value: "AI Companion OS" },
  { label: "同步状态", value: "Mock 实时同步" },
];

export const demoFooterCopy =
  "本系统为第三方 AI Companion OS 演示层，适用于已具备 Token、矿机、商城或游戏模块的平台。通过 AI管家 Nova，平台可为用户提供更智能的收益解读、健康互动、产品推荐与消费引导。";
