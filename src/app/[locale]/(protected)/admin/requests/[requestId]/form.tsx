"use client"

import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Save } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { useAction } from "next-safe-action/hooks"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { useRouter } from "@/lib/i18n-navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { updateClientRequest } from "@/server/actions/request-action"
import {
  clientRequestUpdateSchema,
  type zClientRequestUpdate,
} from "@/types/request.schema"

type Props = {
  request: zClientRequestUpdate
  className?: string
}

export default function UpdateRequestForm({ request, className }: Props) {
  const locale = useLocale()
  const t = useTranslations("Components.FormRequest")
  const router = useRouter()
  const form = useForm<zClientRequestUpdate>({
    resolver: zodResolver(clientRequestUpdateSchema),
    defaultValues: request,
  })

  const { execute, isExecuting } = useAction(updateClientRequest, {
    onSuccess: ({ data }) => {
      if (data?.error) {
        toast.error(data.error)
      }
      if (data?.success) {
        toast.success(data.success)
        router.push("/admin/requests")
      }
    },
  })

  function onSubmit(data: zClientRequestUpdate) {
    execute(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
        <Card>
          <CardHeader className="space-y-3.5">
            <CardTitle>{t("form-title-update")}</CardTitle>
            <CardDescription className="line-clamp-3">
              {t("form-description-update")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {/* Статус */}
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("status")}</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger
                        className={cn(
                          "w-[175px]",
                          field.value === "READ" && "text-green-600",
                          field.value === "UNREAD" && "text-red-600",
                        )}
                      >
                        <SelectValue placeholder="Select request status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="READ" className="text-green-600">
                        {t("read")}
                      </SelectItem>
                      <SelectItem value="UNREAD" className="text-red-600">
                        {t("unread")}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            {/* Full Name */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("customer-name")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("name-placeholder")} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="xl:col-span-2">
                  <FormLabel>{t("phone")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("placeholder-phone")}
                      {...field}
                      value={(field.value as string) || ""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("label-email")}</FormLabel>
                  <FormControl>
                    <Input placeholder="azamatov@gmail.com" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">
                    {t("label-message")}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t("placeholder-message")}
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex-wrap gap-5 border-t px-6 py-4">
            <Button type="submit" size="sm" disabled={isExecuting}>
              <Save className="mr-2 size-5" />
              {t("button-save")}
            </Button>
            <Button
              onClick={() => router.push("/admin/requests")}
              type="button"
              variant="secondary"
              size="sm"
            >
              {t("button-cancel")}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}
