# PRODIET

Landing page istituzionale di **PRODIET**, società di consulenza che aiuta le imprese a integrare la longevity nella propria offerta, nei programmi welfare e negli eventi.

## Sviluppo locale

```bash
pnpm install
pnpm dev
```

La build statica di produzione viene generata in `dist/public`:

```bash
pnpm check
pnpm build
```

## Pubblicazione

Il workflow `.github/workflows/deploy-pages.yml` compila e pubblica automaticamente il sito su GitHub Pages a ogni push sul branch `main`.

## Dominio personalizzato

Per un dominio principale, ad esempio `prodiet.example`, configurare presso il provider DNS i quattro record `A` di GitHub Pages:

| Tipo | Nome | Valore |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

È consigliabile aggiungere anche i record IPv6:

| Tipo | Nome | Valore |
|---|---|---|
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

Per il sottodominio `www`:

| Tipo | Nome | Valore |
|---|---|---|
| CNAME | `www` | `salvinic.github.io` |

Dopo la propagazione, il dominio esatto deve essere inserito nelle impostazioni del repository: **Settings → Pages → Custom domain**. GitHub può quindi emettere gratuitamente il certificato HTTPS.
