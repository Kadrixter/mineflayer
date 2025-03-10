const mineflayer = require('mineflayer');

// Konfiguracja serwera - zmodyfikuj wg swoich potrzeb
const serverHost = 'localhost'; // adres serwera
const serverPort = 25565;       // port serwera
const botInterval = 4500;       // odstęp między tworzeniem botów (w milisekundach)

// Funkcja generująca losowy ciąg o podanej długości (litery i cyfry)
function generateRandomString(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Tablica przechowująca boty (opcjonalnie, jeśli chcesz mieć do nich dostęp)
const bots = [];

// Ustawiamy interwał, który co 4.5 sekundy tworzy nowego bota
const intervalId = setInterval(() => {
  // Generujemy losowy nick w formacie "Emu-XXXX"
  const nickname = 'Emu-' + generateRandomString(4);
  console.log(`Tworzenie bota: ${nickname}`);

  // Tworzymy nowego bota
  const bot = mineflayer.createBot({
    host: serverHost,
    port: serverPort,
    username: nickname
  });

  bot.on('login', () => {
    console.log(`${nickname} zalogowany`);
    bots.push(bot);
  });

  // Obsługa błędów – jeśli błąd sugeruje, że serwer jest pełny, przerywamy tworzenie botów
  bot.on('error', (err) => {
    console.error(`${nickname} błąd: ${err}`);
    if (err.toString().toLowerCase().includes("full") || err.toString().toLowerCase().includes("brak wolnych slotow")) {
      console.log("Brak wolnych slotów. Zatrzymywanie dodawania botów.");
      clearInterval(intervalId);
    }
  });

  bot.on('end', () => {
    console.log(`${nickname} rozłączony`);
  });

}, botInterval);
