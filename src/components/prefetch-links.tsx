"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function PrefetchLinks() {
  const router = useRouter()

  useEffect(() => {
    // Prefetch all main navigation pages when component mounts
    router.prefetch('/')
    router.prefetch('/resume')
    router.prefetch('/blog')
  }, [router])

  return null
}