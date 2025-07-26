import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    console.log('middleware@@@@@@@', pathname)
    // 루트일 때만 리다이렉트
    if (pathname === '/') {
        const acceptLang = request.headers.get('accept-language')
        const preferredLang = acceptLang?.startsWith('ko') ? 'ko' : 'en'

        return NextResponse.redirect(new URL(`/${preferredLang}`, request.url))
    }

    return NextResponse.next()
}