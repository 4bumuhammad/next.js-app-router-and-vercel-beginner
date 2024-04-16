&nbsp;

<div align="center">
    <img src="./gambar-petunjuk/nextjs-icon-dark-s250.png" alt="nextjs-icon-dark-s250" style="display: block; margin: 0 auto;">
</div> 

&nbsp; 

# &#x1F6A9; Next.JS app Router and vercel

next.js : kerangka kerja (framework) untuk mengembangkan aplikasi web React. <br />
vercel : platform cloud untuk deployment dan hosting aplikasi web, yang sering digunakan bersama dengan Next.js.<br />

&nbsp; 

**Reference:**<br />

- jsonplaceholder.typicode<br />
    <pre>https://jsonplaceholder.typicode.com/posts</pre>

<!-- - YT "Tutorial NEXT JS 13 App Router"
   <p>https://www.youtube.com/watch?v=WyTIjLegirE</p>
   last 37.11s

<br />

- YT "Mudah Untuk Deploy NextJS Project di Vercel via GIT atau CLI | Dev Insight | MauCoding"
   <p>https://www.youtube.com/watch?v=4FALuQOWqT8</p>
 -->
&nbsp;

### &#x1F530; Begin [ latihan-1 ]:<br />

Switch node version:
<pre>
    ❯ nvm use 18.17.0

        Now using node v18.17.0 (npm v9.6.7)
</pre>

&nbsp;

<pre>
   ❯ node --version
      v18.17.0

   ❯ npm --version
      9.6.7

   ❯ npx --version
      9.6.7
</pre>
<pre>
   ❯ npx create-next-app@latest
      Need to install the following packages:
      create-next-app@14.1.4
      Ok to proceed? (y) 
      ? What is your project named? › latihan-1
      ? Would you like to use TypeScript? › Yes
      ? Would you like to use ESLint? Yes
      ? Would you like to use Tailwind CSS? › Yes
      ? Would you like to use `src/` directory? › No
      ? Would you like to use App Router? (recommended) › Yes
      ? Would you like to customize the default import alias (@/*)? › No


      Creating a new Next.js app in /Users/.../next-post/latihan-1.

      Using npm.

      Initializing project with template: app-tw 


      Installing dependencies:
      - react
      - react-dom
      - next

      Installing devDependencies:
      - typescript
      - @types/node
      - @types/react
      - @types/react-dom
      - autoprefixer
      - postcss
      - tailwindcss
      - eslint
      - eslint-config-next

      added 369 packages, and audited 370 packages in 10s

      136 packages are looking for funding
      run `npm fund` for details

      found 0 vulnerabilities
      Initialized a git repository.

      Success! Created latihan-1 at /Users/.../next-post/latihan-1      
</pre>

<pre>
   ❯ du -sch latihan-1
      317M    latihan-1
</pre>

Test jalankan pertama kali.
<pre>
   ❯ cd latihan-1

   ❯ npm run dev

      > latihan-1@0.1.0 dev
      > next dev

         ▲ Next.js 14.1.4
         - Local:        http://localhost:3000

      ✓ Ready in 1495ms
</pre>

---

&nbsp;

**Struktur files:**<br />
<pre>
   ❯ tree -L 3 -a -I 'README.md|.DS_Store|node_modules|.next' ./latihan-1
      ./latihan-1
      ├── .eslintrc.json
      ├── .git.tgz
      ├── .gitignore
      ├── app
      │   ├── albums
      │   │   └── page.tsx
      │   ├── favicon.ico
      │   ├── globals.css
      │   ├── layout.tsx
      │   ├── page.tsx
      │   └── posts
      │       ├── page.tsx
      │       └── postPage.module.css
      ├── next-env.d.ts
      ├── next.config.mjs
      ├── package-lock.json
      ├── package.json
      ├── postcss.config.js
      ├── public
      │   ├── next.svg
      │   └── vercel.svg
      ├── tailwind.config.ts
      └── tsconfig.json

      4 directories, 19 files
</pre>

&nbsp;

### Preview Stages latihan-1

<div align="center">
    <img src="./gambar-petunjuk/ss_nextjs_latihan-1_001_first.png" alt="ss_nextjs_latihan-1" style="display: block; margin: 0 auto;">
    <p align="center">nextjs : first.</p>
</div> 

&nbsp;

<div align="center">
    <img src="./gambar-petunjuk/ss_nextjs_latihan-1_002_hello.png" alt="ss_nextjs_latihan-1" style="display: block; margin: 0 auto;">
    <p align="center">nextjs : hello.</p>
</div> 

&nbsp;

<div align="center">
    <img src="./gambar-petunjuk/ss_nextjs_latihan-1_003_posts.png" alt="ss_nextjs_latihan-1" style="display: block; margin: 0 auto;">
    <p align="center">nextjs : page posts.</p>
</div> 

&nbsp;

<div align="center">
    <img src="./gambar-petunjuk/ss_nextjs_latihan-1_004_a_href.png" alt="ss_nextjs_latihan-1" style="display: block; margin: 0 auto;">
    <p align="center">nextjs : link a href.</p>
</div> 

&nbsp;

<div align="center">
    <img src="./gambar-petunjuk/ss_nextjs_latihan-1_005_Link_href.png" alt="ss_nextjs_latihan-1" style="display: block; margin: 0 auto;">
    <p align="center">nextjs : Link href.</p>
</div> 

&nbsp;

<div align="center">
    <img src="./gambar-petunjuk/ss_nextjs_latihan-1_006_css_global-1.png" alt="ss_nextjs_latihan-1" style="display: block; margin: 0 auto;">
    <p align="center">nextjs : css global.</p>
</div> 

&nbsp;

<div align="center">
    <img src="./gambar-petunjuk/ss_nextjs_latihan-1_007_css_global-2.png" alt="ss_nextjs_latihan-1" style="display: block; margin: 0 auto;">
    <p align="center">nextjs : css global.</p>
</div> 

&nbsp;

<div align="center">
    <img src="./gambar-petunjuk/ss_nextjs_latihan-1_008_css_private.png" alt="ss_nextjs_latihan-1" style="display: block; margin: 0 auto;">
    <p align="center">nextjs : css private.</p>
</div> 

&nbsp;

<div align="center">
    <img src="./gambar-petunjuk/ss_nextjs_latihan-1_009_tailwind.png" alt="ss_nextjs_latihan-1" style="display: block; margin: 0 auto;">
    <p align="center">nextjs : tailwind.</p>
</div> 

&nbsp;

<div align="center">
    <img src="./gambar-petunjuk/ss_nextjs_latihan-1_010_error_component.png" alt="ss_nextjs_latihan-1" style="display: block; margin: 0 auto;">
    <p align="center">nextjs : error component.</p>
</div> 

&nbsp;

<div align="center">
    <img src="./gambar-petunjuk/ss_nextjs_latihan-1_011_use_client_components.png" alt="ss_nextjs_latihan-1" style="display: block; margin: 0 auto;">
    <p align="center">nextjs - solved : use client component.</p>
</div> 

&nbsp;

<div align="center">
    <img src="./gambar-petunjuk/ss_nextjs_latihan-1_012_import_components-1.png" alt="ss_nextjs_latihan-1" style="display: block; margin: 0 auto;">
    <p align="center">nextjs : import components.</p>
</div> 

&nbsp;

<div align="center">
    <img src="./gambar-petunjuk/ss_nextjs_latihan-1_013_components_cardList-2.png" alt="ss_nextjs_latihan-1" style="display: block; margin: 0 auto;">
    <p align="center">nextjs : import components cardList.</p>
</div> 

&nbsp;

<div align="center">
    <img src="./gambar-petunjuk/ss_nextjs_latihan-1_014_components_cardList-2_classname.png" alt="ss_nextjs_latihan-1_014_components_cardList-2_classname" style="display: block; margin: 0 auto;">
    <p align="center">nextjs : import components cardList className.</p>
</div> 

&nbsp;

&nbsp;

## DATA FETCHING

&nbsp;

Data : `https://jsonplaceholder.typicode.com/posts`

<div align="center">
    <img src="./gambar-petunjuk/ss_nextjs_latihan-1_015_sample_data_json.png" alt="ss_nextjs_latihan-1_015_sample_data_json" style="display: block; margin: 0 auto;">
    <p align="center">nextjs : data.</p>
</div> 

&nbsp;

<div align="center">
    <img src="./gambar-petunjuk/ss_nextjs_latihan-1_016_fetch_data_json.png" alt="ss_nextjs_latihan-1_016_fetch_data_json" style="display: block; margin: 0 auto;">
    <p align="center">nextjs : fetch.</p>
</div> 

&nbsp;

<div align="center">
    <img src="./gambar-petunjuk/ss_nextjs_latihan-1_017_typescript_interface.png" alt="ss_nextjs_latihan-1_016_fetch_data_json" style="display: block; margin: 0 auto;">
    <p align="center">nextjs : Typescript interface.</p>
</div> 


&nbsp;

&nbsp;

&nbsp;

---

&nbsp;

<div align="center">
    <img src="./gambar-petunjuk/syukron.png" alt="syukron" style="display: block; margin: 0 auto;">
</div> 

&nbsp;

&nbsp;
