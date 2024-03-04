"use client"

import { AnimatePresence, motion } from "framer-motion"
import { FC, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface PageContainerProps {
  className?: string
  children: ReactNode
}

const PageContainer: FC<PageContainerProps> = ({ children, className }) => (
  <AnimatePresence>
    <motion.main
      className={twMerge(
        "flex w-full max-w-6xl flex-1 flex-col justify-start",
        className,
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.main>
  </AnimatePresence>
)

export default PageContainer
