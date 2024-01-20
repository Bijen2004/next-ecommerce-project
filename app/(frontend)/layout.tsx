

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <main className="flex-grow container mx-auto px-4 lg:max-w-[85%]">{children}</main>
  }
  