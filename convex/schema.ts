import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema(
    {
        users: defineTable({
            clerkId: v.string(),
            phoneNumber: v.string(),
            name: v.string(),
            isAdmin: (v.boolean())
        }),

        images: defineTable({
            eventName: v.string(),
            imageURL: v.optional(v.string())
        })
    }
)