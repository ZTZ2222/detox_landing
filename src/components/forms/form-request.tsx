"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { useAction } from "next-safe-action/hooks"
import { useForm } from "react-hook-form"
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { createClientRequest } from "@/server/actions/request-action"
import {
  clientRequestCreateSchema,
  type zClientRequestСreate,
} from "@/types/request.schema"

type Props = {
  btnText: string | undefined | null
  privacyText: string | undefined | null
  className?: string
}

export default function FormRequest({
  btnText,
  privacyText,
  className,
}: Props) {
  const t = useTranslations("Components.FormRequest")
  const form = useForm<zClientRequestСreate>({
    resolver: zodResolver(clientRequestCreateSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      message: "",
    },
  })

  const { execute, isExecuting } = useAction(createClientRequest, {
    onSuccess: ({ data }) => {
      if (data?.error) {
        toast.error(data.error)
      }
      if (data?.success) {
        toast.success(data.success)
        form.reset()
      }
    },
  })

  function onSubmit(values: zClientRequestСreate) {
    execute(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-5", className)}
      >
        <div className="space-y-3">
          {/* Full Name */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={t("placeholder-name")}
                    className="h-auto px-4 py-3 text-base leading-6 placeholder:text-text-secondary"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PhoneInput
                    defaultCountry="KG"
                    international
                    countryCallingCodeEditable={false}
                    placeholder={t("placeholder-phone")}
                    className="h-auto space-x-2 rounded-md border px-4 py-3 text-base leading-6 placeholder:text-text-secondary"
                    {...field}
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
                <FormControl>
                  <Input
                    placeholder={t("placeholder-email")}
                    className="h-auto px-4 py-3 text-base leading-6 placeholder:text-text-secondary"
                    {...field}
                  />
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
                <FormControl>
                  <Textarea
                    placeholder={t("placeholder-message")}
                    className="resize-none text-base leading-6 placeholder:text-text-secondary"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Privacy Policy */}
          <p className="text-sm text-text-secondary">{privacyText}</p>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          variant="core"
          size="lg"
          className="w-full p-3 font-semibold leading-6 text-text-primary lg:text-base lg:leading-6"
          disabled={isExecuting}
        >
          {btnText || t("button-send-request")}
        </Button>
      </form>
    </Form>
  )
}
