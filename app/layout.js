import './globals.css'

export const metadata = {
  title: 'Control de Fumigaciones - San Isidro',
  description: 'Sistema de seguimiento de fumigaciones por sección catastral',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
