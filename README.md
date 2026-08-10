

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

-  Visar en lista med Futurama-karaktärer.
-  Hämtar och visar information om en specifik karaktär med hjälp av ID.
-  Användaren kan bestämma hur många karaktärer som visas genom `limit` i URL:en.
-  Hämtar karaktärsdata från ett externt REST API.

## Technologies
- Next.js
- TypeScript
- React
- REST API

  ## How It Works

Applikationen hämtar data om Futurama-karaktärer från ett externt REST API.

1. Data hämtas med `fetch()`.
2. Svaret kontrolleras med `response.ok`.
3. Karaktärerna visas på sidan.
4. Användaren kan bestämma hur många karaktärer som visas med `limit`.
5. En specifik karaktär kan hämtas med hjälp av dess `id`.

## API

Projektet använder Futurama API för att hämta information om karaktärer.

API:et används för att:

- Hämta en lista med Futurama-karaktärer.
- Begränsa hur många karaktärer som visas.
- Hämta en specifik karaktär med hjälp av dess `id`.
- 
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


``` 

## Author

**Perjin Shavani**

- GitHub: [@perjinshavani](https://github.com/perjinshavani)
- LinkedIn: [Perjin Shavani](https://www.linkedin.com/in/perjin-shavani-43602238)





  


  



