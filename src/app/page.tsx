import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

export default async function RedirectPage() {
    const headersList = await headers()
    const acceptLang = headersList.get('accept-language')
    const defaultLocale = acceptLang?.startsWith('ko') ? 'ko' : 'en'

    redirect(`/${defaultLocale}`)
}