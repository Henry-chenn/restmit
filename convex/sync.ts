import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const syncFunct = mutation({
    args:{
        clerkId: v.string(),
        name: v.string()
    },

    handler: async (ctx,args) => {
        const id = await ctx.db.insert("users", {clerkId: args.clerkId, name: args.name})
    }
})