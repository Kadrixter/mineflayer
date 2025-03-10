# Mass Bot Script

Skrypt w Node.js wykorzystujący [mineflayer](https://www.npmjs.com/package/mineflayer) oraz [mineflayer-pathfinder](https://www.npmjs.com/package/mineflayer-pathfinder) do automatycznego tworzenia botów na serwerze Minecraft.

## Funkcje

- Automatyczny spawn botów z losowymi nazwami.
- Boty śledzą gracza `Kadrixxter`, usuwając przeszkody na drodze.
- Komendy:
  - **`!`** – boty spamują klawisz Tab i kucają przez 120 sekund.
  - **`!!`** – boty kopią bloki w pobliżu (z ulepszonym mechanizmem, np. podejście do bloku, kopanie dirtu przy braku narzędzi).
- Automatyczny respawn po rozłączeniu.

## Instalacja i użycie

1. Sklonuj repozytorium i przejdź do katalogu:
   ```bash
   git clone <URL_REPO>
   cd mass-bot-script
2. Zainstaluj zależnosci
```bash
npm install
```
3. Uruchom skrypt
```bash
node mass.js <ip_serwera> [delay_seconds] [prefix]
```
