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
  { label: "会员资产", value: "56 Token", tone: "text-[#F6E6A8]" },
  { label: "今日收益", value: "+2.1 Token", tone: "text-[#D4AF37]" },
  { label: "健康指数", value: "72 / 100", tone: "text-[#F6E6A8]" },
  { label: "会员等级", value: "Level 3", tone: "text-[#D4AF37]" },
];

export const novaGreeting = {
  title: "你好，我是 Nova",
  description: "尊龙汇 AI生活管家",
  status: "Nova 已为你准备好今日生活建议",
};

export const heroHighlights = [
  "尊龙汇会员先通过矿机与理财积累 Token，再进入健康、服务与娱乐消费场景",
  "Nova 同时管理资产配置、收益节奏与生活提醒，形成完整体验闭环",
  "全部使用本地 mock 数据，无需真实登录、支付、钱包或医疗系统",
];

export const heroSuggestions = [
  "优先关注新矿机与稳健理财方案",
  "保留健康管理预算，再做后续消费安排",
  "今天建议完成轻量健康恢复",
];

export const lifeIndex = [
  { label: "财富", value: 76, accent: "from-cyan-400 to-sky-300" },
  { label: "健康", value: 72, accent: "from-emerald-400 to-green-300" },
  { label: "生活", value: 68, accent: "from-amber-400 to-orange-300" },
  { label: "活跃", value: 74, accent: "from-fuchsia-400 to-violet-300" },
];

export const osStatus = [
  { label: "系统角色", value: "ZLH Nova" },
  { label: "模式", value: "尊龙汇 AI Life OS" },
  { label: "同步状态", value: "Mock 实时追踪中" },
];

export const osTabs = ["财富", "健康", "生活", "活跃"];

export const osModules = [
  {
    id: "sleep",
    title: "睡眠监测",
    metric: "70",
    accent: "bg-cyan-500",
    summary: "最近 7 天睡眠波动较明显，恢复质量仍有提升空间。",
    action: "建议固定睡前节奏，减少晚间刺激性饮品",
  },
  {
    id: "stress",
    title: "压力管理",
    metric: "72",
    accent: "bg-fuchsia-500",
    summary: "压力指数偏高，容易影响睡眠与白天精神稳定度。",
    action: "建议今天降低高强度活动，优先恢复",
  },
  {
    id: "glucose",
    title: "血糖观察",
    metric: "65",
    accent: "bg-amber-500",
    summary: "存在轻度血糖波动风险，需要注意饮食节奏。",
    action: "建议减少含糖饮料，晚餐控制油脂与甜食",
  },
  {
    id: "cardio",
    title: "心血管关注",
    metric: "72",
    accent: "bg-emerald-500",
    summary: "整体状态稳定，但久坐与压力可能带来额外负担。",
    action: "建议增加轻度步行与日间补水",
  },
];

export const coreStatement =
  "我们不是做一个 AI聊天机器人，而是打造一个 AI管家系统，帮助会员先做好资产配置，再基于 Token 收益管理健康、服务与生活习惯。";

export const upgradedStatement =
  "AI管家不仅解读数据，还会主动推荐矿机与理财方案、预测收益节奏，并进一步引导健康、服务与娱乐消费。";

export const butlerReminder = {
  tokenGain: "+2.1 Token",
  balance: "56 Token",
  healthScore: "72",
  action: "当前更适合优先扩大稳定产出能力，再安排健康与服务消费",
  quote:
    "根据你当前的收益节奏，Nova 建议优先扩大稳定产出能力，再将部分 Token 用于健康、服务与娱乐体验，以提高整体平台参与度。",
};

export const predictiveInsights = [
  {
    label: "AI收益预测",
    title: "当前余额",
    highlight: "56 Token",
    description: "按照当前矿机收益速度计算",
  },
  {
    label: "AI收益预测",
    title: "预计 3 天后达到",
    highlight: "62 Token",
    description: "若维持当前收益速度",
  },
  {
    label: "AI收益预测",
    title: "预计 7 天后达到",
    highlight: "70 Token",
    description: "收益持续累积后的预计节点",
  },
];

export const assetRecommendations = [
  {
    id: "miner",
    title: "新矿机推荐",
    rate: "预估演示收益率 12%",
    note: "适合希望提高长期产出的会员",
    strategy: "建议优先关注新推出矿机，提高稳定产币能力",
  },
  {
    id: "wealth",
    title: "稳健理财产品",
    rate: "预估演示收益率 8.5%",
    note: "适合优先保守配置、稳定累积 Token 的会员",
    strategy: "可作为矿机之外的辅助理财方案，降低波动感",
  },
  {
    id: "allocation",
    title: "当前最优策略",
    rate: "70% 资产累积 / 20% 健康服务 / 10% 娱乐体验",
    note: "先保证产出，再保留体验型消费预算",
    strategy: "这会让平台体验更完整，也更容易解释 Token 去向",
  },
];

export const assetRecommendationSummary =
  "以下收益率与产品均为演示数据。Nova 会根据会员的矿机收益节奏、Token 累积速度与使用偏好，推荐更适合的资产配置方案。";

export const featuredLaunch = {
  badge: "新品上线",
  title: "新一代矿机方案开放体验",
  subtitle: "预估演示收益率可达 12%",
  description:
    "适合希望提升长期 Token 产出能力的会员。Nova 建议把它作为当前阶段的优先关注项。",
};

export const featuredWealthProduct = {
  badge: "稳健理财",
  title: "Token 增益理财方案",
  subtitle: "预估演示收益率 8.5%",
  description:
    "更适合偏稳健的会员，用来平衡矿机产出与长期 Token 累积节奏。",
};

export const spendingFlow = [
  {
    id: "health",
    title: "健康方案兑换",
    allocation: "建议分配：20%",
    description: "用于睡眠修护、血糖管理、日常保养等健康方案。",
    note: "适合提升长期价值感和用户信任度",
  },
  {
    id: "service",
    title: "服务体验兑换",
    allocation: "建议分配：10%",
    description: "用于会员服务、生活服务或顾问型服务兑换。",
    note: "适合增强平台服务感和复购逻辑",
  },
  {
    id: "game",
    title: "轻量娱乐体验",
    allocation: "建议分配：10%",
    description: "用于游戏、抽奖或互动体验，控制在小额范围内。",
    note: "适合作为活跃补充，不建议占用主要预算",
  },
];

export const spendingFlowSummary =
  "Nova 建议会员先保证资产累积，再把部分 Token 分配到健康方案、服务体验和轻量娱乐。这样既能维持长期产出，也能让平台的消费闭环更完整。";

export const shareCards = [
  {
    id: "earnings",
    badge: "收益见证",
    title: "我的本周收益进展",
    headline: "预计 7 天后达到 70 Token",
    description: "适合分享给朋友或社群，展示矿机收益与 AI 预测带来的长期期待。",
    footer: "Nova 已生成你的收益进展卡",
  },
  {
    id: "health",
    badge: "健康见证",
    title: "我的健康成长趋势",
    headline: "过去 7 天睡眠改善明显",
    description: "适合做健康打卡或成长见证，让用户觉得平台不只是消费，而是在陪伴。",
    footer: "Nova 已生成你的健康趋势卡",
  },
  {
    id: "recommendation",
    badge: "好康推荐",
    title: "Nova 推荐给我的方案",
    headline: "当前最适合：睡眠修护方案",
    description: "适合分享推荐逻辑和产品好康，帮助形成种草与见证传播。",
    footer: "Nova 已生成你的推荐分享卡",
  },
];

export const healthRiskItems = [
  { label: "血糖风险", value: "中等", tone: "text-amber-600" },
  { label: "胆固醇风险", value: "轻度偏高", tone: "text-orange-600" },
  { label: "压力指数", value: "偏高", tone: "text-fuchsia-600" },
];

export const healthRiskSummary =
  "根据你的饮食习惯、睡眠状态与健康评分，AI判断你存在轻度压力与血糖波动风险。";

export const riskExplanation =
  "Nova 通过生活习惯数据与健康评分进行风险提示，该信息仅用于健康管理参考。";

export const emotionInsight = {
  score: 74,
  status: "轻度疲劳",
  explanation:
    "根据你的睡眠评分、活跃频率与互动行为，AI判断你当前处于轻度疲劳状态。",
  suggestions: ["减少高强度活动", "优先进行健康恢复", "增加饮水"],
  product: "能量恢复组合",
};

export const healthTrend = [65, 68, 70, 72, 71, 73, 74];

export const healthTrendSummary =
  "过去 7 天你的健康状态整体呈上升趋势，睡眠改善明显。";

export const healthTrendAdvice = ["保持每日饮水", "增加轻度运动"];

export const healthSnapshot = [
  { label: "睡眠评分", value: "70" },
  { label: "饮水完成度", value: "60%" },
  { label: "压力指数", value: "中等偏高" },
  { label: "本周运动", value: "2 次" },
];

export const healthAdvice =
  "你最近 7 天睡眠波动较大，建议减少晚间咖啡摄入，并增加白天饮水量。若近期容易疲劳，可优先考虑恢复型健康方案。";

export const healthFocusOptions = [
  "血糖管理",
  "胆固醇管理",
  "心血管健康",
  "压力管理",
  "睡眠管理",
  "体重管理",
];

export const healthManagementCopy =
  "Nova 会根据你的健康关注方向，生成更适合 40+ 用户的日常生活建议与保养方案。";

export const productList: Product[] = [
  {
    id: "glucose",
    name: "血糖管理方案",
    fitFor: "饮食不规律、担心血糖波动",
    includes: "草本饮品、维生素、营养补充品",
    tokenCost: 36,
    rating: "稳健管理",
    summary: "适合需要做日常保养和轻度风险管理的用户。",
    aiReason:
      "此组合适合血糖波动用户进行日常保养。Nova 会把它作为稳健型方案推荐给需要控制饮食节奏与减少高糖摄入的用户。",
  },
  {
    id: "sleep",
    name: "睡眠修护方案",
    fitFor: "晚间易醒、恢复质量不稳定",
    includes: "草本舒缓饮品、舒缓配方",
    tokenCost: 42,
    rating: "睡眠优先",
    summary: "适合当前睡眠波动较大、白天疲劳感明显的用户。",
    aiReason:
      "如果用户最近的核心问题是睡眠波动和夜间恢复效率偏低，Nova 会优先推荐睡眠修护方案，帮助先稳定基础状态。",
  },
  {
    id: "balance",
    name: "日常平衡方案",
    fitFor: "想维持日常健康状态",
    includes: "基础营养补充品、日常保养组合",
    tokenCost: 28,
    rating: "日常保养",
    summary: "适合作为长期生活管理的基础型方案。",
    aiReason:
      "当用户没有强烈的单点风险时，Nova 会建议用更轻量的日常平衡方案帮助维持状态，降低使用门槛并增强信任感。",
  },
];

export const explainableRecommendation = {
  title: "推荐原因",
  reasons: ["你最近睡眠波动较大", "饮水量不足", "连续 2 天活跃后恢复偏慢"],
  result: "所以推荐：能量恢复组合",
  note: "Explainable AI 能让用户知道推荐逻辑来自生活状态，而不是随意推送。 ",
};

export const healthTasks = [
  "喝水 6 杯",
  "散步 20 分钟",
  "晚间避免含糖饮料",
];

export const dailyTasks = [
  "减少含糖饮料",
  "增加饮水",
  "晚餐减少油脂",
  "保持 30 分钟散步",
];

export const butlerModeTasks = ["领取收益", "完成健康打卡", "查看健康方案"];

export const growthSystem = {
  level: "Level 3",
  requirements: ["完成健康打卡", "保持活跃", "兑换健康方案"],
  suggestion: "再完成 2 次健康打卡即可升级。",
};

export const memberTiers = ["Silver", "Gold", "Platinum", "Diamond"];

export const aiMemoryNotes = [
  "我注意到你最近更常查看睡眠与恢复类建议。",
  "你上一次更关注日常保养，而不是即时消耗。",
];

export const quickQuestions = [
  "我最近血糖高怎么办",
  "我压力很大",
  "我晚上睡不好",
  "我容易疲劳",
];

export const businessValues = [
  "提高用户信任度",
  "增强长期粘性",
  "提升健康方案转化",
  "建立家庭级服务价值",
];

export const demoFooterCopy =
  "本系统为第三方 AI体验层演示方案，适用于具备矿机、Token、商城、服务或娱乐模块的会员平台。通过 Nova，平台可先引导资产配置与收益理解，再延伸到健康提醒、生活建议、方案推荐与持续陪伴。";
