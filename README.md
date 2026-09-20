# DC Comics Showcase

Progetto front-end realizzato con React + Vite per creare una landing page ispirata al mondo DC Comics, con navigazione, hero banner, catalogo di fumetti e sezione social/follow nel footer.

## Funzionalità

- Header con logo DC e nav principale
- Hero section con immagine banner
- Sezione principale con elenco di fumetti in griglia
- Footer con call-to-action e icone social
- Styling moderno con Tailwind CSS
- Struttura modulare in componenti React

## Stack tecnologica

- React 19
- Vite
- Tailwind CSS
- ESLint

## Struttura del progetto

```bash
src/
├── App.jsx
├── index.css
├── main.jsx
├── assets/
│   ├── comics.js
│   └── img/
├── components/
│   ├── Cards.jsx
│   └── SocialButton.jsx
├── layout/
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   └── Main.jsx
└── ui/
    └── ComicsSection.jsx
```

## Prerequisiti

Assicurati di avere installato:

- Node.js
- pnpm

## Installazione

```bash
pnpm install
```

## Esecuzione in sviluppo

```bash
pnpm dev
```

Apri il browser all'URL mostrato dal terminale, di solito:

```bash
http://localhost:5173
```

## Build di produzione

```bash
pnpm build
```

## Anteprima build

```bash
pnpm preview
```

## Note

L'elenco dei fumetti è definito in `src/assets/comics.js`, mentre la UI principale è composta dai componenti presenti nella cartella `src/layout` e `src/ui`.

Questo progetto è pensato come base per una landing page da personalizzare ulteriormente con nuove sezioni, filtri, dettagli dei fumetti o interazioni utente.
