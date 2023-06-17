import { z } from "zod";

export const ClassificationValidator = z.union([z.literal("אנשים"), z.literal("מקומות"), z.literal("כללי"), z.literal("")]);

export type Classification = z.infer<typeof ClassificationValidator>;

export type Language = "he" | "en";

export type Term = {
    text: string,
    classification: Classification,
    hints: string[],
    hasNext: boolean,
    hasPrev: boolean,
    row: number
};