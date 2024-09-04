"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { signOut } from "next-auth/react"
import { useTranslations } from "next-intl"
import { useAction } from "next-safe-action/hooks"
import { toast } from "sonner"
import { useRouter } from "@/lib/i18n-navigation"
import { cn } from "@/lib/utils"
import { useSidebar } from "@/components/ui/sidebar"
import { logoutUser } from "@/server/actions/login-action"

type Props = {
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function LogoutButton({ className, ...props }: Props) {
  const t = useTranslations("Components.Button")
  const router = useRouter()
  const { open, animate } = useSidebar()
  const { execute, isExecuting } = useAction(logoutUser, {
    onSuccess: ({ data }) => {
      if (data?.error) {
        toast.error(data.error)
      }
      if (data?.success) {
        toast.success(data.success)
        router.push("/login")
      }
    },
  })
  return (
    <button
      className={cn(
        "group/sidebar flex items-center justify-start gap-3 py-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      onClick={() => execute()}
      disabled={isExecuting}
      {...props}
    >
      <ArrowLeft className="size-6 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
          transition: { duration: 0.3, delay: 0.1 },
        }}
        className="!m-0 inline-block whitespace-pre !p-0 text-sm text-neutral-700 transition duration-150 group-hover/sidebar:translate-x-1 dark:text-neutral-200"
      >
        {t("logout")}
      </motion.span>
    </button>
  )
}
