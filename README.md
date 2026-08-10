

# Futurama API

Det här projektet är byggt med Next.js och använder ett REST API för att hämta data om Futurama-karaktärer.

## Purpose
Syftet med projektet är att lära mig:
- API-anrop med `fetch()`
- Dynamiska routes med `params`
- `searchParams` för att skicka parametrar i URL:en
- Felhantering med `response.ok`
- Visa data från ett API i en Next.js-applikation

## Features
- Visar en lista med karaktärer.
- Hämtar en specifik karaktär med hjälp av id.
- Användaren kan bestämma hur många karaktärer som ska visas genom `limit` i URL:en.

## Technologies
- Next.js
- TypeScript
- React
- REST API
## Screenshot


Futurama-webbapplikationen hämtar och visar karaktärsdata dynamiskt från ett externt REST API

![Min Futurama-sida](./app/images/Futurama.png)

## Installation

1. Klona repositoryt:

```bash
git clone https://github.com/perjinshavani/NEXTJS-INTRO.git
```

2. Gå till projektmappen:

```bash
cd NEXTJS-INTRO
```

3. Installera dependencies:

```bash
npm install
```

4. Starta utvecklingsservern:

```bash
npm run dev
```

5. Öppna sedan applikationen i webbläsaren:

```text
http://localhost:3000
```

## Usage

Starta applikationen och öppna den i webbläsaren. 
Navigera till Futurama-sidan för att se karaktärer och information som hämtas från ett externt API.

## Project Structure

Projektet är organiserat med Next.js App Router:

```text
NEXTJS-INTRO/
├── app/
│   ├── about/
│   ├── character/
│   │   └── [id]/
│   │       ├── images/
│   │       │   └── Futurama.png
│   │       ├── not-found.tsx
│   │       └── page.tsx
│   ├── contact/
│   ├── fonts/
│   ├── futurama/
│   └── images/
├── README.md
├── package.json
└── next.config.ts

## Author

- [Perjin Shavani](https://github.com/perjinshavani)

  


  



