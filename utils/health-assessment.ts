export type AssessmentAnswers = {
  sleep: "很好" | "一般" | "不好";
  water: "足够" | "偏少" | "很少";
  stress: "低" | "中" | "高";
  exercise: "0" | "1-2" | "3次以上";
  goal: "精力" | "睡眠" | "体重" | "日常平衡";
};

export type AssessmentResult = {
  score: number;
  recommendation: string;
  productName: string;
};

const scoreMap = {
  sleep: { 很好: 22, 一般: 14, 不好: 8 },
  water: { 足够: 20, 偏少: 13, 很少: 7 },
  stress: { 低: 20, 中: 14, 高: 8 },
  exercise: { "0": 8, "1-2": 15, "3次以上": 20 },
  goal: { 精力: 10, 睡眠: 10, 体重: 10, 日常平衡: 12 },
} as const;

export function generateAssessmentResult(
  answers: AssessmentAnswers,
): AssessmentResult {
  const rawScore =
    scoreMap.sleep[answers.sleep] +
    scoreMap.water[answers.water] +
    scoreMap.stress[answers.stress] +
    scoreMap.exercise[answers.exercise] +
    scoreMap.goal[answers.goal];

  const score = Math.max(58, Math.min(95, rawScore));

  const needsEnergy =
    answers.goal === "精力" ||
    answers.sleep === "不好" ||
    answers.water === "很少";
  const needsSleep = answers.goal === "睡眠" || answers.stress === "高";
  const needsBalance = answers.goal === "日常平衡" || answers.exercise === "3次以上";

  if (needsEnergy) {
    return {
      score,
      productName: "能量恢复组合",
      recommendation:
        "你的结果显示近期恢复效率偏弱，主要体现在睡眠质量和补水稳定度上。建议优先补足日间饮水、减少熬夜，同时从能量恢复型产品切入，更容易让用户感知到平台推荐的实际价值。",
    };
  }

  if (needsSleep) {
    return {
      score,
      productName: "睡眠修护组合",
      recommendation:
        "你的压力与晚间恢复信号值得关注。建议减少晚间刺激性饮品，固定睡前节奏，并优先考虑睡眠修护型组合，让推荐更贴近当前状态而不是泛化消费。",
    };
  }

  if (needsBalance) {
    return {
      score,
      productName: "日常平衡组合",
      recommendation:
        "你当前整体状态相对稳定，适合用更轻量的平衡型方案维持日常节奏。平台可以借此展示 AI 不只会推动高消耗，还能做更合理、更长期的消费引导。",
    };
  }

  return {
    score,
    productName: "能量恢复组合",
    recommendation:
      "从综合评分看，你的状态处于可改善区间。建议先做基础作息和饮水优化，再结合能量恢复类产品进行轻量体验，方便在 Demo 中展示收益到产品转化的路径。",
  };
}
