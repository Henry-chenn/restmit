import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema(
    {
        users: defineTable({
            clerkId: v.string(),
            phoneNumber: v.string(),
            points: v.optional(v.number()),
            name: v.string(),
            isAdmin: v.optional(v.boolean())
        }),

        events: defineTable({
            eventName: v.string(),
            points: v.number(),
            prompt: v.string(),
            imageURL: v.string()
        })
    }
)