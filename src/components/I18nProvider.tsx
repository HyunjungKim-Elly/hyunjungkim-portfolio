'use client'

import { ReactNode, useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/libs/i18n'

interface Props {
  children: ReactNode
  locale: string
}

export default function I18nProvider({ children, locale }: Props) {
  console.log('I18nProvider', locale)
  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale)
    }
  }, [locale])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}