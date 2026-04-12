import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en" data-theme="rotary">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Rotary Club of Perinthalmanna — Service Above Self since 1967"
        />
        <title>Rotary Club of Perinthalmanna</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body class="min-h-screen bg-base-100 text-base-content antialiased">
        <Component />
      </body>
    </html>
  );
}
