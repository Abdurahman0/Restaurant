import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n/config'

type Locale = (typeof locales)[number]

function isLocale(value: string): value is Locale {
	return locales.includes(value as Locale)
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: { locale: string } | Promise<{ locale: string }>
}) {
	const { locale } = await params

	if (!isLocale(locale)) notFound()

	const messages = (await import(`@/messages/${locale}.json`)).default

	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			{children}
		</NextIntlClientProvider>
	)
}
