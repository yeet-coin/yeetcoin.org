// 3D background effect with particles
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const numberOfParticles = 200;

for (let i = 0; i < numberOfParticles; i++) {
  particlesArray.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3 + 1,
    speedX: Math.random() * 1 - 0.5,
    speedY: Math.random() * 1 - 0.5
  });
}

function animate() {
  ctx.fillStyle = "#0d0d0d";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00ffe1";
  particlesArray.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    p.x += p.speedX;
    p.y += p.speedY;
    if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
      p.x = Math.random() * canvas.width;
      p.y = Math.random() * canvas.height;
    }
  });
  requestAnimationFrame(animate);
}

animate();

// Resize canvas when window resizes
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Live Price Updater every 10 seconds
async function fetchCryptoPrices() {
  try {
    const proxyUrl = "https://corsproxy.io/?";
    const apiUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,binancecoin,ethereum&vs_currencies=usd";
    const response = await fetch(proxyUrl + encodeURIComponent(apiUrl ));
    const data = await response.json();
    document.getElementById("btc-price").textContent = data.bitcoin.usd;
    document.getElementById("bnb-price").textContent = data.binancecoin.usd;
    document.getElementById("eth-price").textContent = data.ethereum.usd;
  } catch (error) {
    console.error("Error fetching crypto prices:", error);
  }
}

fetchCryptoPrices();
setInterval(fetchCryptoPrices, 10000);

// Countdown Timer
function initCountdown() {
  // Set countdown to 10 days from now
  const countdownDate = new Date().getTime() + (10 * 24 * 60 * 60 * 1000);
  
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    
    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      document.getElementById("days").textContent = days.toString().padStart(2, '0');
      document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
      document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
      document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
    } else {
      // Countdown finished
      document.querySelector('.countdown-section').style.display = 'none';
    }
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Language translations
const translations = {
  en: {
    launch_countdown: "🚀 Launch Countdown",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    overview: "Overview",
    wallets: "Wallets",
    features: "Features",
    tokenomics: "Tokenomics",
    trade_now: "Trade Now",
    hero_title: "The Future of <span class=\"highlight\">Meme</span> Finance",
    hero_description: "YeetCoin combines the power of community with cutting-edge blockchain technology to create a truly decentralized and engaging financial experience.",
    buy_pancakeswap: "Buy on PancakeSwap",
    view_bscscan: "View on BSCScan",
    learn_more: "Learn More",
    current_price: "Current Price",
    market_cap: "Market Cap",
    total_holders: "Total Holders",
    global_reach: "Global Reach",
    growing_community: "Growing Community",
    supported_wallets: "Supported <span class=\"highlight\">Wallets</span>",
    metamask_subtitle: "Most Popular Web3 Wallet",
    metamask_description: "Connect your MetaMask wallet to trade YeetCoin seamlessly. MetaMask provides secure access to decentralized applications and makes crypto transactions simple and safe.",
    trust_subtitle: "Mobile-First Crypto Wallet",
    trust_description: "Trade YeetCoin on the go with Trust Wallet. This mobile-first wallet supports thousands of cryptocurrencies and provides a seamless trading experience.",
    bitget_subtitle: "World's Leading Exchange Wallet",
    bitget_description: "Access YeetCoin through Bitget Wallet with the backing of a leading cryptocurrency exchange. Enjoy low fees and high liquidity.",
    okx_subtitle: "Advanced Trading Features",
    okx_description: "Experience advanced trading features with OKX Wallet. Perfect for professional traders who want to maximize their YeetCoin trading potential.",
    secure: "Secure",
    easy_to_use: "Easy to Use",
    web3_ready: "Web3 Ready",
    mobile_optimized: "Mobile Optimized",
    multi_chain: "Multi-Chain",
    user_friendly: "User Friendly",
    low_fees: "Low Fees",
    high_liquidity: "High Liquidity",
    trusted: "Trusted",
    advanced_trading: "Advanced Trading",
    professional: "Professional",
    feature_rich: "Feature Rich",
    open_wallet: "Open",
    why_choose: "Why Choose <span class=\"highlight\">YeetCoin</span>?",
    blazing_fast: "Blazing Fast",
    blazing_fast_desc: "Experience lightning-fast transactions and minimal fees, powered by a highly optimized blockchain.",
    ironclad_security: "Ironclad Security",
    ironclad_security_desc: "Your assets are protected by audited smart contracts and state-of-the-art security protocols.",
    vibrant_community: "Vibrant Community",
    vibrant_community_desc: "Join a passionate and rapidly growing community of YeetCoin enthusiasts from around the globe.",
    crypto_prices: "Live Crypto Prices",
    tokenomics_title: "YeetCoin <span class=\"highlight\">Tokenomics</span>",
    total_supply: "Total Supply",
    liquidity_pool: "Liquidity Pool",
    liquidity_pool_desc: "50% - Locked for stability",
    community_rewards: "Community Rewards",
    community_rewards_desc: "30% - Airdrops, contests, and staking",
    development_marketing: "Development & Marketing",
    development_marketing_desc: "20% - Future growth and global adoption",
    cta_title: "Ready to Join the <span class=\"highlight\">YEET</span> Revolution?",
    cta_description: "Don't miss out on the next big thing in meme finance. Get your YEET today and be part of something extraordinary!",
    get_started: "Get Started with YeetCoin",
    all_rights_reserved: "All rights reserved.",
    privacy_policy: "Privacy Policy",
    terms_service: "Terms of Service",
    contact_us: "Contact Us"
  },
  fr: {
    launch_countdown: "🚀 Compte à rebours du lancement",
    days: "Jours",
    hours: "Heures",
    minutes: "Minutes",
    seconds: "Secondes",
    overview: "Aperçu",
    wallets: "Portefeuilles",
    features: "Fonctionnalités",
    tokenomics: "Tokenomics",
    trade_now: "Trader maintenant",
    hero_title: "L'avenir de la finance <span class=\"highlight\">Meme</span>",
    hero_description: "YeetCoin combine la puissance de la communauté avec une technologie blockchain de pointe pour créer une expérience financière vraiment décentralisée et engageante.",
    buy_pancakeswap: "Acheter sur PancakeSwap",
    view_bscscan: "Voir sur BSCScan",
    learn_more: "En savoir plus",
    current_price: "Prix actuel",
    market_cap: "Capitalisation boursière",
    total_holders: "Total des détenteurs",
    global_reach: "Portée mondiale",
    growing_community: "Communauté croissante",
    supported_wallets: "<span class=\"highlight\">Portefeuilles</span> pris en charge",
    metamask_subtitle: "Portefeuille Web3 le plus populaire",
    metamask_description: "Connectez votre portefeuille MetaMask pour échanger YeetCoin en toute transparence. MetaMask fournit un accès sécurisé aux applications décentralisées et rend les transactions crypto simples et sûres.",
    trust_subtitle: "Portefeuille crypto mobile d'abord",
    trust_description: "Échangez YeetCoin en déplacement avec Trust Wallet. Ce portefeuille mobile prend en charge des milliers de cryptomonnaies et offre une expérience de trading transparente.",
    bitget_subtitle: "Portefeuille d'échange leader mondial",
    bitget_description: "Accédez à YeetCoin via Bitget Wallet avec le soutien d'un échange de cryptomonnaies leader. Profitez de frais bas et d'une liquidité élevée.",
    okx_subtitle: "Fonctionnalités de trading avancées",
    okx_description: "Découvrez les fonctionnalités de trading avancées avec OKX Wallet. Parfait pour les traders professionnels qui veulent maximiser leur potentiel de trading YeetCoin.",
    secure: "Sécurisé",
    easy_to_use: "Facile à utiliser",
    web3_ready: "Prêt pour Web3",
    mobile_optimized: "Optimisé mobile",
    multi_chain: "Multi-chaîne",
    user_friendly: "Convivial",
    low_fees: "Frais bas",
    high_liquidity: "Liquidité élevée",
    trusted: "De confiance",
    advanced_trading: "Trading avancé",
    professional: "Professionnel",
    feature_rich: "Riche en fonctionnalités",
    open_wallet: "Ouvrir",
    why_choose: "Pourquoi choisir <span class=\"highlight\">YeetCoin</span>?",
    blazing_fast: "Ultra rapide",
    blazing_fast_desc: "Découvrez des transactions ultra-rapides et des frais minimes, alimentées par une blockchain hautement optimisée.",
    ironclad_security: "Sécurité à toute épreuve",
    ironclad_security_desc: "Vos actifs sont protégés par des contrats intelligents audités et des protocoles de sécurité de pointe.",
    vibrant_community: "Communauté dynamique",
    vibrant_community_desc: "Rejoignez une communauté passionnée et en croissance rapide d'enthousiastes YeetCoin du monde entier.",
    crypto_prices: "Prix crypto en direct",
    tokenomics_title: "<span class=\"highlight\">Tokenomics</span> YeetCoin",
    total_supply: "Offre totale",
    liquidity_pool: "Pool de liquidité",
    liquidity_pool_desc: "50% - Verrouillé pour la stabilité",
    community_rewards: "Récompenses communautaires",
    community_rewards_desc: "30% - Airdrops, concours et staking",
    development_marketing: "Développement et marketing",
    development_marketing_desc: "20% - Croissance future et adoption mondiale",
    cta_title: "Prêt à rejoindre la révolution <span class=\"highlight\">YEET</span>?",
    cta_description: "Ne manquez pas la prochaine grande chose dans la finance meme. Obtenez votre YEET aujourd'hui et faites partie de quelque chose d'extraordinaire!",
    get_started: "Commencer avec YeetCoin",
    all_rights_reserved: "Tous droits réservés.",
    privacy_policy: "Politique de confidentialité",
    terms_service: "Conditions de service",
    contact_us: "Nous contacter"
  },
  it: {
    launch_countdown: "🚀 Conto alla rovescia del lancio",
    days: "Giorni",
    hours: "Ore",
    minutes: "Minuti",
    seconds: "Secondi",
    overview: "Panoramica",
    wallets: "Portafogli",
    features: "Caratteristiche",
    tokenomics: "Tokenomics",
    trade_now: "Fai trading ora",
    hero_title: "Il futuro della finanza <span class=\"highlight\">Meme</span>",
    hero_description: "YeetCoin combina la potenza della comunità con la tecnologia blockchain all'avanguardia per creare un'esperienza finanziaria veramente decentralizzata e coinvolgente.",
    buy_pancakeswap: "Acquista su PancakeSwap",
    view_bscscan: "Visualizza su BSCScan",
    learn_more: "Scopri di più",
    current_price: "Prezzo attuale",
    market_cap: "Capitalizzazione di mercato",
    total_holders: "Totale possessori",
    global_reach: "Portata globale",
    growing_community: "Comunità in crescita",
    supported_wallets: "<span class=\"highlight\">Portafogli</span> supportati",
    metamask_subtitle: "Portafoglio Web3 più popolare",
    metamask_description: "Connetti il tuo portafoglio MetaMask per scambiare YeetCoin senza problemi. MetaMask fornisce accesso sicuro alle applicazioni decentralizzate e rende le transazioni crypto semplici e sicure.",
    trust_subtitle: "Portafoglio crypto mobile-first",
    trust_description: "Scambia YeetCoin in movimento con Trust Wallet. Questo portafoglio mobile supporta migliaia di criptovalute e fornisce un'esperienza di trading senza soluzione di continuità.",
    bitget_subtitle: "Portafoglio di exchange leader mondiale",
    bitget_description: "Accedi a YeetCoin tramite Bitget Wallet con il supporto di un exchange di criptovalute leader. Goditi commissioni basse e alta liquidità.",
    okx_subtitle: "Funzionalità di trading avanzate",
    okx_description: "Sperimenta funzionalità di trading avanzate con OKX Wallet. Perfetto per trader professionali che vogliono massimizzare il loro potenziale di trading YeetCoin.",
    secure: "Sicuro",
    easy_to_use: "Facile da usare",
    web3_ready: "Pronto per Web3",
    mobile_optimized: "Ottimizzato mobile",
    multi_chain: "Multi-catena",
    user_friendly: "User-friendly",
    low_fees: "Commissioni basse",
    high_liquidity: "Alta liquidità",
    trusted: "Affidabile",
    advanced_trading: "Trading avanzato",
    professional: "Professionale",
    feature_rich: "Ricco di funzionalità",
    open_wallet: "Apri",
    why_choose: "Perché scegliere <span class=\"highlight\">YeetCoin</span>?",
    blazing_fast: "Velocissimo",
    blazing_fast_desc: "Sperimenta transazioni fulminee e commissioni minime, alimentate da una blockchain altamente ottimizzata.",
    ironclad_security: "Sicurezza ferrea",
    ironclad_security_desc: "I tuoi asset sono protetti da contratti intelligenti verificati e protocolli di sicurezza all'avanguardia.",
    vibrant_community: "Comunità vibrante",
    vibrant_community_desc: "Unisciti a una comunità appassionata e in rapida crescita di appassionati YeetCoin da tutto il mondo.",
    crypto_prices: "Prezzi crypto in tempo reale",
    tokenomics_title: "<span class=\"highlight\">Tokenomics</span> YeetCoin",
    total_supply: "Fornitura totale",
    liquidity_pool: "Pool di liquidità",
    liquidity_pool_desc: "50% - Bloccato per stabilità",
    community_rewards: "Ricompense della comunità",
    community_rewards_desc: "30% - Airdrop, concorsi e staking",
    development_marketing: "Sviluppo e marketing",
    development_marketing_desc: "20% - Crescita futura e adozione globale",
    cta_title: "Pronto a unirti alla rivoluzione <span class=\"highlight\">YEET</span>?",
    cta_description: "Non perdere la prossima grande cosa nella finanza meme. Ottieni il tuo YEET oggi e fai parte di qualcosa di straordinario!",
    get_started: "Inizia con YeetCoin",
    all_rights_reserved: "Tutti i diritti riservati.",
    privacy_policy: "Informativa sulla privacy",
    terms_service: "Termini di servizio",
    contact_us: "Contattaci"
  },
  es: {
    launch_countdown: "🚀 Cuenta regresiva del lanzamiento",
    days: "Días",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
    overview: "Resumen",
    wallets: "Billeteras",
    features: "Características",
    tokenomics: "Tokenomics",
    trade_now: "Operar ahora",
    hero_title: "El futuro de las finanzas <span class=\"highlight\">Meme</span>",
    hero_description: "YeetCoin combina el poder de la comunidad con tecnología blockchain de vanguardia para crear una experiencia financiera verdaderamente descentralizada y atractiva.",
    buy_pancakeswap: "Comprar en PancakeSwap",
    view_bscscan: "Ver en BSCScan",
    learn_more: "Saber más",
    current_price: "Precio actual",
    market_cap: "Capitalización de mercado",
    total_holders: "Total de poseedores",
    global_reach: "Alcance global",
    growing_community: "Comunidad creciente",
    supported_wallets: "<span class=\"highlight\">Billeteras</span> compatibles",
    metamask_subtitle: "Billetera Web3 más popular",
    metamask_description: "Conecta tu billetera MetaMask para intercambiar YeetCoin sin problemas. MetaMask proporciona acceso seguro a aplicaciones descentralizadas y hace que las transacciones crypto sean simples y seguras.",
    trust_subtitle: "Billetera crypto móvil primero",
    trust_description: "Intercambia YeetCoin sobre la marcha con Trust Wallet. Esta billetera móvil soporta miles de criptomonedas y proporciona una experiencia de trading sin problemas.",
    bitget_subtitle: "Billetera de intercambio líder mundial",
    bitget_description: "Accede a YeetCoin a través de Bitget Wallet con el respaldo de un intercambio de criptomonedas líder. Disfruta de tarifas bajas y alta liquidez.",
    okx_subtitle: "Características de trading avanzadas",
    okx_description: "Experimenta características de trading avanzadas con OKX Wallet. Perfecto para traders profesionales que quieren maximizar su potencial de trading YeetCoin.",
    secure: "Seguro",
    easy_to_use: "Fácil de usar",
    web3_ready: "Listo para Web3",
    mobile_optimized: "Optimizado móvil",
    multi_chain: "Multi-cadena",
    user_friendly: "Amigable al usuario",
    low_fees: "Tarifas bajas",
    high_liquidity: "Alta liquidez",
    trusted: "Confiable",
    advanced_trading: "Trading avanzado",
    professional: "Profesional",
    feature_rich: "Rico en características",
    open_wallet: "Abrir",
    why_choose: "¿Por qué elegir <span class=\"highlight\">YeetCoin</span>?",
    blazing_fast: "Súper rápido",
    blazing_fast_desc: "Experimenta transacciones súper rápidas y tarifas mínimas, impulsadas por una blockchain altamente optimizada.",
    ironclad_security: "Seguridad férrea",
    ironclad_security_desc: "Tus activos están protegidos por contratos inteligentes auditados y protocolos de seguridad de vanguardia.",
    vibrant_community: "Comunidad vibrante",
    vibrant_community_desc: "Únete a una comunidad apasionada y de rápido crecimiento de entusiastas de YeetCoin de todo el mundo.",
    crypto_prices: "Precios crypto en vivo",
    tokenomics_title: "<span class=\"highlight\">Tokenomics</span> YeetCoin",
    total_supply: "Suministro total",
    liquidity_pool: "Pool de liquidez",
    liquidity_pool_desc: "50% - Bloqueado para estabilidad",
    community_rewards: "Recompensas de la comunidad",
    community_rewards_desc: "30% - Airdrops, concursos y staking",
    development_marketing: "Desarrollo y marketing",
    development_marketing_desc: "20% - Crecimiento futuro y adopción global",
    cta_title: "¿Listo para unirte a la revolución <span class=\"highlight\">YEET</span>?",
    cta_description: "¡No te pierdas lo próximo grande en finanzas meme. Obtén tu YEET hoy y sé parte de algo extraordinario!",
    get_started: "Comenzar con YeetCoin",
    all_rights_reserved: "Todos los derechos reservados.",
    privacy_policy: "Política de privacidad",
    terms_service: "Términos de servicio",
    contact_us: "Contáctanos"
  },
  de: {
    launch_countdown: "🚀 Launch-Countdown",
    days: "Tage",
    hours: "Stunden",
    minutes: "Minuten",
    seconds: "Sekunden",
    overview: "Überblick",
    wallets: "Wallets",
    features: "Features",
    tokenomics: "Tokenomics",
    trade_now: "Jetzt handeln",
    hero_title: "Die Zukunft der <span class=\"highlight\">Meme</span>-Finanzen",
    hero_description: "YeetCoin kombiniert die Kraft der Gemeinschaft mit modernster Blockchain-Technologie, um ein wirklich dezentrales und ansprechendes Finanzerlebnis zu schaffen.",
    buy_pancakeswap: "Auf PancakeSwap kaufen",
    view_bscscan: "Auf BSCScan anzeigen",
    learn_more: "Mehr erfahren",
    current_price: "Aktueller Preis",
    market_cap: "Marktkapitalisierung",
    total_holders: "Gesamte Inhaber",
    global_reach: "Globale Reichweite",
    growing_community: "Wachsende Gemeinschaft",
    supported_wallets: "Unterstützte <span class=\"highlight\">Wallets</span>",
    metamask_subtitle: "Beliebteste Web3-Wallet",
    metamask_description: "Verbinde deine MetaMask-Wallet, um YeetCoin nahtlos zu handeln. MetaMask bietet sicheren Zugang zu dezentralen Anwendungen und macht Krypto-Transaktionen einfach und sicher.",
    trust_subtitle: "Mobile-First Krypto-Wallet",
    trust_description: "Handle YeetCoin unterwegs mit Trust Wallet. Diese mobile Wallet unterstützt Tausende von Kryptowährungen und bietet ein nahtloses Handelserlebnis.",
    bitget_subtitle: "Weltweit führende Exchange-Wallet",
    bitget_description: "Greife auf YeetCoin über Bitget Wallet zu mit der Unterstützung einer führenden Kryptowährungs-Börse. Genieße niedrige Gebühren und hohe Liquidität.",
    okx_subtitle: "Erweiterte Handelsfunktionen",
    okx_description: "Erlebe erweiterte Handelsfunktionen mit OKX Wallet. Perfekt für professionelle Trader, die ihr YeetCoin-Handelspotenzial maximieren möchten.",
    secure: "Sicher",
    easy_to_use: "Einfach zu verwenden",
    web3_ready: "Web3-bereit",
    mobile_optimized: "Mobil optimiert",
    multi_chain: "Multi-Chain",
    user_friendly: "Benutzerfreundlich",
    low_fees: "Niedrige Gebühren",
    high_liquidity: "Hohe Liquidität",
    trusted: "Vertrauenswürdig",
    advanced_trading: "Erweiterte Handelsoptionen",
    professional: "Professionell",
    feature_rich: "Funktionsreich",
    open_wallet: "Öffnen",
    why_choose: "Warum <span class=\"highlight\">YeetCoin</span> wählen?",
    blazing_fast: "Blitzschnell",
    blazing_fast_desc: "Erlebe blitzschnelle Transaktionen und minimale Gebühren, angetrieben von einer hochoptimierten Blockchain.",
    ironclad_security: "Eiserne Sicherheit",
    ironclad_security_desc: "Deine Assets sind durch geprüfte Smart Contracts und modernste Sicherheitsprotokolle geschützt.",
    vibrant_community: "Lebendige Gemeinschaft",
    vibrant_community_desc: "Tritt einer leidenschaftlichen und schnell wachsenden Gemeinschaft von YeetCoin-Enthusiasten aus der ganzen Welt bei.",
    crypto_prices: "Live-Krypto-Preise",
    tokenomics_title: "YeetCoin <span class=\"highlight\">Tokenomics</span>",
    total_supply: "Gesamtangebot",
    liquidity_pool: "Liquiditätspool",
    liquidity_pool_desc: "50% - Für Stabilität gesperrt",
    community_rewards: "Gemeinschaftsbelohnungen",
    community_rewards_desc: "30% - Airdrops, Wettbewerbe und Staking",
    development_marketing: "Entwicklung & Marketing",
    development_marketing_desc: "20% - Zukünftiges Wachstum und globale Adoption",
    cta_title: "Bereit, der <span class=\"highlight\">YEET</span>-Revolution beizutreten?",
    cta_description: "Verpasse nicht das nächste große Ding in der Meme-Finanzwelt. Hol dir heute dein YEET und sei Teil von etwas Außergewöhnlichem!",
    get_started: "Mit YeetCoin beginnen",
    all_rights_reserved: "Alle Rechte vorbehalten.",
    privacy_policy: "Datenschutzrichtlinie",
    terms_service: "Nutzungsbedingungen",
    contact_us: "Kontaktiere uns"
  }
};

// Language change function
function changeLanguage() {
  const selectedLang = document.getElementById('language-select').value;
  const elements = document.querySelectorAll('[data-translate]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[selectedLang] && translations[selectedLang][key]) {
      element.innerHTML = translations[selectedLang][key];
    }
  });
}

// Update YEET stats
function updateYeetStats() {
  // Simulate real-time data updates
  const price = (Math.random() * 0.00005 + 0.00001).toFixed(8);
  const marketCap = (Math.random() * 5 + 10).toFixed(2);
  const holders = Math.floor(Math.random() * 10 + 1);
  
  document.getElementById('yeet-price').textContent = `$${price}`;
  document.getElementById('market-cap').textContent = `$${marketCap}M`;
  document.getElementById('holders').textContent = holders;
}

// Create logo dynamically
function createLogo() {
  const canvas = document.createElement('canvas');
  canvas.width = 100;
  canvas.height = 100;
  const ctx = canvas.getContext('2d');
  
  // Create gradient
  const gradient = ctx.createRadialGradient(50, 50, 0, 50, 50, 50);
  gradient.addColorStop(0, '#FFD700');
  gradient.addColorStop(0.7, '#DAA520');
  gradient.addColorStop(1, '#B8860B');
  
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(50, 50, 45, 0, Math.PI * 2);
  ctx.fill();
  
  // Add border
  ctx.strokeStyle = "#8B7355";
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Draw Y letter
  ctx.fillStyle = "#000000";
  ctx.font = "bold 40px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Y", 50, 50);
  
  return canvas.toDataURL();
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}

// Initialize everything when page loads
window.addEventListener("load", function() {
  // Set logo images
  const logoData = createLogo();
  const logoElements = ['nav-logo', 'hero-logo', 'tokenomics-logo'];
  logoElements.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.src = logoData;
    }
  });
  
  // Initialize functions
  initCountdown();
  updateYeetStats();
  initSmoothScrolling();
  changeLanguage(); // Set initial language
});
