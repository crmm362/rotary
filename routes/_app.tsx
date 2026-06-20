import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en" data-theme="rotary">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Rotary Club of Perinthalmanna — Service Above Self since 1988"
        />
        <title>Rotary Club of Perinthalmanna</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body class="min-h-screen bg-base-100 text-base-content antialiased">
        <Component />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
  if(!('IntersectionObserver' in window))return;
  function init(){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in-view');io.unobserve(e.target);}});
    },{threshold:0.12,rootMargin:'0px 0px -8% 0px'});
    document.querySelectorAll('section').forEach(function(s){
      if(s.getBoundingClientRect().top < window.innerHeight*0.88)return;
      s.classList.add('reveal');io.observe(s);
    });
  }
  if(document.readyState!=='loading')init();else document.addEventListener('DOMContentLoaded',init);
})();`,
          }}
        />
      </body>
    </html>
  );
}
