
# &#x1F6A9; Next.JS app Router and vercel


&nbsp;


**Reference:**<br />
- YT "Tutorial NEXT JS 13 App Router"
   <p>https://www.youtube.com/watch?v=WyTIjLegirE</p>
   last 24.59s

- YT "Mudah Untuk Deploy NextJS Project di Vercel via GIT atau CLI | Dev Insight | MauCoding"
   <p>https://www.youtube.com/watch?v=4FALuQOWqT8</p>

&nbsp;

### &#x1F530; Begin:<br />

<p>
   ❯ node --version
      v18.17.0

   ❯ npm --version
      9.6.7

   ❯ npx --version
      9.6.7
</p>
<p>
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
</p>

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