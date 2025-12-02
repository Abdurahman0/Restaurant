import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Yoqimli Taomlar',
	description:
		'Yoqimli Taomlar restorani 2014-yil Toshkentda ochilgan eng birinchi restoranlardan.',
	icons: {
		icon: '/public/favicon.png',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
