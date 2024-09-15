import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const syncFunct = mutation({
    args:{
        clerkId: v.string(),
        name: v.string(),
        phoneNumber: v.string(),
        isAdmin: v.boolean()
    },

    handler: async (ctx,args) => {
        const id = await ctx.db.insert("users", {clerkId: args.clerkId, name: args.name, phoneNumber: args.phoneNumber, isAdmin: args.isAdmin})
    }
})

export const fetchAllUsers = query({
    handler: async (ctx) => {
        const users = await ctx.db
        .query("users").order("desc").collect()
        return{
            users: users
        }
    }
})

export const updateImageURL = mutation({
    args: { imageURL: v.string() },
    handler: async (ctx, args) => {
      await ctx.db.insert("images", {
            eventName: "",
            imageURL: args.imageURL
        })
    }
  });