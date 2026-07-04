"use client"

import './globals.css'

export const metadata = {
  title: 'Task App',
  description: 'Gerenciador de tarefas com importação de arquivos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}