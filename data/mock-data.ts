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
  { label: "健康指数", value: "72 / 100", tone: "text-emerald-300" },
  { label: "睡眠状态", value: "70", tone: "text-cyan-300" },
  { label: "压力指数", value: "72", tone: "text-fuchsia-300" },
  { label: "今日提醒", value: "补水优先", tone: "text-white" },
];

export const novaGreeting = {
  title: "你好，我是 Nova",
  description: "你的 AI健康生活管家。",
  status: "Nova 已为你准备好今日健康建议",
};

export const heroHighlights = [
  "围绕健康、提醒、预防与生活管理构建 AI 管家体验",
  "适合 40+ 会员型平台、健康产品平台与高信任场景演示",
  "全部使用本地 mock 数据，无需真实登录、支付或医疗系统",
];

export const heroSuggestions = [
  "优先补足今日饮水",
  "晚餐减少高糖饮品",
  "安排 20 分钟轻度散步",
];

export const lifeIndex = [
  { label: "睡眠", value: 70, accent: "from-cyan-400 to-sky-300" },
  { label: "压力", value: 75, accent: "from-fuchsia-400 to-violet-300" },
  { label: "血糖风险", value: 65, accent: "from-amber-400 to-orange-300" },
  { label: "心血管", value: 72, accent: "from-emerald-400 to-green-300" },
];

export const osStatus = [
  { label: "系统角色", value: "Nova AI健康管家" },
  { label: "模式", value: "AI Personal Health Butler" },
  { label: "同步状态", value: "Mock 健康追踪中" },
];

export const osTabs = ["睡眠", "压力", "血糖", "心血管"];

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
  "我们不是做一个 AI聊天机器人，而是打造一个 AI生活管家，帮助用户管理收益、健康与生活习惯。";

export const upgradedStatement =
  "AI管家不仅解读数据，还会主动提醒、观察风险、生成健康任务，并为用户提供更稳妥的生活管理建议。";

export const butlerReminder = {
  tokenGain: "+2.1 Token",
  balance: "56 Token",
  healthScore: "72",
  action: "当前更适合优先做健康恢复，而不是额外消耗精力",
  quote:
    "根据你最近的睡眠、补水与压力状态，今天更适合做恢复型安排，先把健康状态稳住，再考虑其他消费动作。",
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

export const healthRiskItems = [
  { label: "血糖风险", value: "中等", tone: "text-amber-600" },
  { label: "胆固醇风险", value: "轻度偏高", tone: "text-orange-600" },
  { label: "压力指数", value: "偏高", tone: "text-fuchsia-600" },
];

export const healthRiskSummary =
  "根据你的饮食习惯、睡眠状态与健康评分，AI判断你存在轻度压力与血糖波动风险。";

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
  "本系统为第三方 AI健康生活管家演示层，适用于会员平台、健康产品平台与高信任服务场景。通过 Nova，平台可为用户提供收益说明、健康提醒、生活建议、健康方案推荐与持续陪伴。";
