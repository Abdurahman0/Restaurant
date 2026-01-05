import { defaultLocale, locales } from './../i18n/config'
import { cookies, headers } from 'next/headers'

type Locale = (typeof locales)[number]

export async function getUserLocale(): Promise<Locale> {
	// 1. Check cookie
	const cookieStore = await cookies()
	const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value

	if (cookieLocale && locales.includes(cookieLocale as Locale)) {
		return cookieLocale as Locale
	}

	// 2. Check browser language
	const headerStore = await headers()
	const acceptLanguage = headerStore.get('accept-language')

	if (acceptLanguage) {
		const browserLocale = acceptLanguage.split(',')[0].split('-')[0] as Locale

		if (locales.includes(browserLocale)) {
			return browserLocale
		}
	}

	// 3. Fallback
	return defaultLocale
}
