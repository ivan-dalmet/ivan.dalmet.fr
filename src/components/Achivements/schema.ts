import { allAchievements } from "@/components/Achivements/allAchievements";
import { keys } from "remeda";
import { z } from "zod";

export type AchievementStatusSchema = z.infer<typeof AchievementStatusSchema>;
const AchievementStatusSchema = z.enum(["display", "viewed"]);

export type AchievementNameSchema = z.infer<typeof AchievementNameSchema>;
export const AchievementNameSchema = z.enum([
  keys(allAchievements)[0],
  ...keys(allAchievements).slice(1),
]);
export type AchievementSchema = z.infer<typeof AchievementSchema>;
export const AchievementSchema = z
  .object({
    status: AchievementStatusSchema.catch("viewed"),
  })
  .optional()
  .catch(undefined);

export type AchievementsSchema = z.infer<typeof AchievementsSchema>;
export const AchievementsSchema = z
  .record(AchievementNameSchema, AchievementSchema)
  .catch({});
