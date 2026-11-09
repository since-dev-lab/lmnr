type EffortLevel = "low" | "medium" | "high" | "max";

interface AnthropicBudgetConfig {
  type: "budget";
  min: number;
}

interface AnthropicEffortConfig {
  type: "effort";
  levels: EffortLevel[];
}

export type AnthropicThinkingConfig = AnthropicBudgetConfig | AnthropicEffortConfig;

export const anthropicThinkingModels = [
  "claude-haiku-4-5-20251001",
  "claude-sonnet-4-6",
  "claude-opus-4-6",
  "claude-opus-4-7",
  "claude-opus-4-8",
  "claude-fable-5",
  "claude-sonnet-5",
  "claude-sonnet-5-5",
] as const;

export const anthropicProviderOptionsSettings: Record<
  (typeof anthropicThinkingModels)[number],
  { thinking: AnthropicThinkingConfig }
> = {
  "claude-haiku-4-5-20251001": {
    thinking: { type: "budget", min: 1024 },
  },
  "claude-sonnet-4-6": {
    thinking: { type: "effort", levels: ["low", "medium", "high"] },
  },
  "claude-opus-4-6": {
    thinking: { type: "effort", levels: ["low", "medium", "high", "max"] },
  },
  "claude-opus-4-7": {
    thinking: { type: "effort", levels: ["low", "medium", "high", "max"] },
  },
  "claude-opus-4-8": {
    thinking: { type: "effort", levels: ["low", "medium", "high", "max"] },
  },
  "claude-fable-5": {
    thinking: { type: "effort", levels: ["low", "medium", "high", "max"] },
  },
  "claude-sonnet-5": {
    thinking: { type: "effort", levels: ["low", "medium", "high", "max"] },
  },
  "claude-sonnet-5-5": {
    thinking: { type: "effort", levels: ["low", "medium", "high", "max"] },
  },
};
