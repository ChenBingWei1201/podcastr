import { action } from "./_generated/server";
import { v } from "convex/values";

export const generateAudioAction = action({
  args: { input: v.string(), voice: v.string() },
  handler: (_, args) => {

    return "success";
  },
});
