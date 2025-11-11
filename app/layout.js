export const metadata = {
  title: "With Yamily Since",
  description: "Contagem desde 10 de junho de 2025 às 08:29",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          background: "#000",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          fontFamily: "sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
