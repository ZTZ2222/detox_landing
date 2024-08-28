import { z } from "zod"

export const clientRequestCreateSchema = z.object({
  fullName: z.string().min(3),
  phone: z.string(),
  email: z.string().email({ message: "Некорректная почта" }),
  message: z.string().min(3),
})

export const clientRequestUpdateSchema = clientRequestCreateSchema.extend({
  uid: z.number(),
  status: z.enum(["READ", "UNREAD"]),
  createdAt: z.date(),
})

export const clientRequestReadSchema = clientRequestUpdateSchema

export type zClientRequestСreate = z.infer<typeof clientRequestCreateSchema>
export type zClientRequestUpdate = z.infer<typeof clientRequestUpdateSchema>
export type zClientRequestRead = z.infer<typeof clientRequestReadSchema>
