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
        const proxyUrl = "https://api.allorigins.win/raw?url=";
        const apiUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,binancecoin,ethereum,solana,ripple&vs_currencies=usd";
        const response = await fetch(proxyUrl + encodeURIComponent(apiUrl));
        const data = await response.json();

        document.getElementById("btc-price").textContent = data.bitcoin ? `$${data.bitcoin.usd.toLocaleString()}` : "N/A";
        document.getElementById("bnb-price").textContent = data.binancecoin ? `$${data.binancecoin.usd.toLocaleString()}` : "N/A";
        document.getElementById("eth-price").textContent = data.ethereum ? `$${data.ethereum.usd.toLocaleString()}` : "N/A";
        document.getElementById("sol-price").textContent = data.solana ? `$${data.solana.usd.toLocaleString()}` : "N/A";
        document.getElementById("xrp-price").textContent = data.ripple ? `$${data.ripple.usd.toLocaleString()}` : "N/A";

    } catch (error) {
        console.error("Error fetching crypto prices:", error);
        document.getElementById("btc-price").textContent = "N/A";
        document.getElementById("bnb-price").textContent = "N/A";
        document.getElementById("eth-price").textContent = "N/A";
        document.getElementById("sol-price").textContent = "N/A";
        document.getElementById("xrp-price").textContent = "N/A";
    }
}

fetchCryptoPrices();
setInterval(fetchCryptoPrices, 10000);

// Countdown Timer
function initCountdown() {
    const countdownDate = new Date().getTime() + (10 * 24 * 60 * 60 * 1000); // 10 days from now
    
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
        total_supply_desc: "1,000,000 YEET",
        liquidity_pool: "Liquidity Pool",
        liquidity_pool_desc: "10% of Total Supply - Pending Lock",
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
    ar: {
        launch_countdown: "🚀 عداد الإطلاق",
        days: "أيام",
        hours: "ساعات",
        minutes: "دقائق",
        seconds: "ثواني",
        overview: "نظرة عامة",
        wallets: "المحافظ",
        features: "المميزات",
        tokenomics: "التقسيم الاقتصادي",
        trade_now: "تداول الآن",
        hero_title: "مستقبل التمويل <span class=\"highlight\">الميمي</span>",
        hero_description: "تجمع YeetCoin بين قوة المجتمع وتقنيات البلوكشين المتطورة لخلق تجربة مالية لا مركزية وجذابة حقًا.",
        buy_pancakeswap: "شراء على PancakeSwap",
        view_bscscan: "عرض على BSCScan",
        learn_more: "تعلم المزيد",
        current_price: "السعر الحالي",
        market_cap: "القيمة السوقية",
        total_holders: "إجمالي الحائزين",
        global_reach: "وصول عالمي",
        growing_community: "مجتمع متنامي",
        supported_wallets: "المحافظ <span class=\"highlight\">المدعومة</span>",
        metamask_subtitle: "محفظة Web3 الأكثر شعبية",
        metamask_description: "اربط محفظة MetaMask الخاصة بك لتداول YeetCoin بسلاسة. توفر MetaMask وصولاً آمنًا للتطبيقات اللامركزية وتجعل معاملات العملات المشفرة بسيطة وآمنة.",
        trust_subtitle: "محفظة العملات المشفرة المحمولة أولاً",
        trust_description: "تداول YeetCoin أثناء التنقل باستخدام Trust Wallet. تدعم هذه المحفظة المحمولة آلاف العملات المشفرة وتوفر تجربة تداول سلسة.",
        bitget_subtitle: "محفظة التداول الرائدة عالمياً",
        bitget_description: "الوصول إلى YeetCoin عبر Bitget Wallet بدعم من بورصة عملات مشفرة رائدة. استمتع برسوم منخفضة وسيولة عالية.",
        okx_subtitle: "ميزات التداول المتقدمة",
        okx_description: "جرب ميزات التداول المتقدمة مع محفظة OKX. مثالية للمتداولين المحترفين الذين يرغبون في زيادة إمكاناتهم في تداول YeetCoin.",
        secure: "آمن",
        easy_to_use: "سهل الاستخدام",
        web3_ready: "جاهز لـ Web3",
        mobile_optimized: "محسّن للجوال",
        multi_chain: "متعدد السلاسل",
        user_friendly: "سهل الاستخدام",
        low_fees: "رسوم منخفضة",
        high_liquidity: "سيولة عالية",
        trusted: "موثوق",
        advanced_trading: "تداول متقدم",
        professional: "احترافي",
        feature_rich: "غني بالميزات",
        open_wallet: "فتح",
        why_choose: "لماذا تختار <span class=\"highlight\">YeetCoin</span>؟",
        blazing_fast: "سريع للغاية",
        blazing_fast_desc: "جرب معاملات سريعة للغاية ورسومًا قليلة، مدعومة ببلوكشين محسّن للغاية.",
        ironclad_security: "أمان لا يتزعزع",
        ironclad_security_desc: "أصولك محمية بعقود ذكية مدققة وبروتوكولات أمان متطورة.",
        vibrant_community: "مجتمع نابض بالحياة",
        vibrant_community_desc: "انضم إلى مجتمع متحمس وسريع النمو من عشاق YeetCoin من جميع أنحاء العالم.",
        crypto_prices: "أسعار العملات المشفرة المباشرة",
        tokenomics_title: "التقسيم الاقتصادي لـ <span class=\"highlight\">YeetCoin</span>",
        total_supply: "إجمالي العرض",
        total_supply_desc: "1,000,000 YEET",
        liquidity_pool: "مجمع السيولة",
        liquidity_pool_desc: "10% من العرض الكلي - بانتظار القفل",
        community_rewards: "مكافآت المجتمع",
        community_rewards_desc: "30% - Airdrops، مسابقات، وتخزين",
        development_marketing: "التطوير والتسويق",
        development_marketing_desc: "20% - للنمو المستقبلي والتبني العالمي",
        cta_title: "هل أنت مستعد للانضمام إلى ثورة <span class=\"highlight\">YEET</span>؟",
        cta_description: "لا تفوت الفرصة الكبيرة التالية في تمويل الميم. احصل على عملة YEET اليوم وكن جزءًا من شيء استثنائي!",
        get_started: "ابدأ مع YeetCoin",
        all_rights_reserved: "جميع الحقوق محفوظة.",
        privacy_policy: "سياسة الخصوصية",
        terms_service: "شروط الخدمة",
        contact_us: "اتصل بنا"
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
        multi_chain: "Multi-Chaîne",
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
        total_supply_desc: "1,000,000 YEET",
        liquidity_pool: "Pool de liquidité",
        liquidity_pool_desc: "10% de l'offre totale - en attente de verrouillage",
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
        metamask_description: "Connetti il tuo portafoglio MetaMask per scambiare YeetCoin senza problemi. MetaMask fornisce accesso sicuro alle applicazioni decentralizzate و rende le transazioni crypto semplici e sicure.",
        trust_subtitle: "Portafoglio crypto mobile-first",
        trust_description: "Scambia YeetCoin in movimento con Trust Wallet. Questo portafoglio mobile supporta migliaيا di criptovalute و fornisce un'esperienza di trading senza soluzione di continuità.",
        bitget_subtitle: "Portafoglio di exchange leader mondiale",
        bitget_description: "Accedi a YeetCoin tramite Bitget Wallet con il supporto di un exchange di criptovalute leader. Goditi commissioni basse و alta liquidità.",
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
        blazing_fast_desc: "Sperimenta transazioni fulmineيه و commissioni minime, alimentate da una blockchain altamente ottimizzata.",
        ironclad_security: "Sicurezza ferrea",
        ironclad_security_desc: "I tuoi asset sono protetti da contratti intelligenti verificati و protocolli di sicurezza all'avanguardia.",
        vibrant_community: "Comunità vibrante",
        vibrant_community_desc: "Unisciti a una comunità appassionata و in rapida crescita di appassionati YeetCoin da tutto il mondo.",
        crypto_prices: "Prezzi crypto in tempo reale",
        tokenomics_title: "<span class=\"highlight\">Tokenomics</span> YeetCoin",
        total_supply: "Fornitura totale",
        total_supply_desc: "1,000,000 YEET",
        liquidity_pool: "Pool di liquidità",
        liquidity_pool_desc: "10% dell'offerta totale - in sospeso di blocco",
        community_rewards: "Ricompense della comunità",
        community_rewards_desc: "30% - Airdrop, concorsi و staking",
        development_marketing: "Sviluppo و marketing",
        development_marketing_desc: "20% - Crescita futura و adozione globale",
        cta_title: "Pronto a unirti alla rivoluzione <span class=\"highlight\">YEET</span>?",
        cta_description: "Non perdere la prossima grande cosa nella finanza meme. Ottieni il tuo YEET oggi و fai parte di qualcosa di straordinario!",
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
        hero_description: "YeetCoin combina el poder de la comunidad con tecnología blockchain de vanguardia para crear una experiencia financiera verdaderamente descentralizada و atractiva.",
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
        metamask_description: "Conecta tu billetera MetaMask para intercambiar YeetCoin sin problemas. MetaMask proporciona acceso seguro a aplicaciones descentralizadas و hace que las transacciones crypto sean simples و seguras.",
        trust_subtitle: "Billetera crypto móvil primero",
        trust_description: "Intercambia YeetCoin sobre la marcha con Trust Wallet. Esta billetera móvil soporta miles de criptomonedas و proporciona una experiencia de trading sin problemas.",
        bitget_subtitle: "Billetera de intercambio líder mundial",
        bitget_description: "Accede a YeetCoin a través de Bitget Wallet con el respaldo de un intercambio de criptomonedas líder. Disfruta de tarifas bajas و alta liquidez.",
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
        blazing_fast_desc: "Experimenta transacciones súper rápidas و tarifas mínimas, impulsadas por una blockchain altamente optimizada.",
        ironclad_security: "Seguridad férrea",
        ironclad_security_desc: "Tus activos están protegidos por contratos inteligentes auditados و protocolos de seguridad de vanguardia.",
        vibrant_community: "Comunidad vibrante",
        vibrant_community_desc: "Únete a una comunidad apasionada و de rápido crecimiento de entusiastas de YeetCoin de todo el mundo.",
        crypto_prices: "Precios crypto en vivo",
        tokenomics_title: "<span class=\"highlight\">Tokenomics</span> YeetCoin",
        total_supply: "Suministro total",
        total_supply_desc: "1,000,000 YEET",
        liquidity_pool: "Pool de liquidez",
        liquidity_pool_desc: "10% del suministro total - Pendiente de bloqueo",
        community_rewards: "Recompensas de la comunidad",
        community_rewards_desc: "30% - Airdrops, concursos و staking",
        development_marketing: "Desarrollo و marketing",
        development_marketing_desc: "20% - Crecimiento futuro و adopción global",
        cta_title: "¿Listo para unirte a la revolución <span class=\"highlight\">YEET</span>?",
        cta_description: "¡No te pierdas lo próximo grande en finanzas meme. Obtén tu YEET hoy و sé parte de algo extraordinario!",
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
        hero_description: "YeetCoin kombiniert die Kraft der Gemeinschaft mit modernster Blockchain-Technologie, um ein wirklich dezentrales و ansprechendes Finanzerlebnis zu schaffen.",
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
        metamask_description: "Verbinde deine MetaMask-Wallet, um YeetCoin nahtlos zu handeln. MetaMask bietet sicheren Zugang zu dezentralen Anwendungen و macht Krypto-Transaktionen einfach و sicher.",
        trust_subtitle: "Mobile-First Krypto-Wallet",
        trust_description: "Handle YeetCoin unterwegs mit Trust Wallet. Diese mobile Wallet unterstützt Tausende von Kryptowährungen و bietet ein nahtloses Handelserlebnis.",
        bitget_subtitle: "Weltweit führende Exchange-Wallet",
        bitget_description: "Greife auf YeetCoin über Bitget Wallet zu mit der Unterstützung einer führenden Kryptowährungs-Börse. Genieße niedrige Gebühren و hohe Liquidität.",
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
        blazing_fast_desc: "Erlebe blitzschnelle Transaktionen و minimale Gebühren, angetrieben von einer hochoptimierten Blockchain.",
        ironclad_security: "Eiserne Sicherheit",
        ironclad_security_desc: "Deine Assets sind durch geprüfte Smart Contracts و modernste Sicherheitssicherheitsprotokolle geschützt.",
        vibrant_community: "Lebendige Gemeinschaft",
        vibrant_community_desc: "Tritt einer leidenschaftlichen و schnell wachsenden Gemeinschaft von YeetCoin-Enthusiasten aus der ganzen Welt bei.",
        crypto_prices: "Live-Krypto-Preise",
        tokenomics_title: "YeetCoin <span class=\"highlight\">Tokenomics</span>",
        total_supply: "Gesamtangebot",
        total_supply_desc: "1,000,000 YEET",
        liquidity_pool: "Liquiditätspool",
        liquidity_pool_desc: "10% des Gesamtangebots - ausstehende Sperre",
        community_rewards: "Gemeinschaftsbelohnungen",
        community_rewards_desc: "30% - Airdrops, Wettbewerbe و Staking",
        development_marketing: "Entwicklung & Marketing",
        development_marketing_desc: "20% - Zukünftiges Wachstum و globale Adoption",
        cta_title: "Bereit, der <span class=\"highlight\">YEET</span>-Revolution beizutreten?",
        cta_description: "Verpasse nicht das nächste große Ding in der Meme-Finanzwelt. Hol dir heute dein YEET و sei Teil von etwas Außergewöhnlichem!",
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

// Create logo dynamically (remains unchanged as per request)
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

// Chatbot functionality
function initChatbot() {
    const chatbotButton = document.getElementById('chatbot-button');
    const chatbotWindow = document.getElementById('chatbot-window');
    const closeChatbot = document.getElementById('close-chatbot');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInputField = document.getElementById('chatbot-input-field');
    const chatbotSendButton = document.getElementById('chatbot-send-button');

    // Toggle chatbot window visibility
    chatbotButton.addEventListener('click', () => {
        chatbotWindow.classList.toggle('open');
        if (chatbotWindow.classList.contains('open')) {
            chatbotInputField.focus(); // Focus input when opened
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Scroll to bottom
        }
    });

    closeChatbot.addEventListener('click', () => {
        chatbotWindow.classList.remove('open');
    });

    // Handle sending messages
    chatbotSendButton.addEventListener('click', sendMessage);
    chatbotInputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const userText = chatbotInputField.value.trim();
        if (userText === "") return;

        // Display user message
        appendMessage(userText, 'user-message');
        chatbotInputField.value = ''; // Clear input

        // Get bot response
        setTimeout(() => {
            const botResponse = getBotResponse(userText);
            appendMessage(botResponse, 'bot-message');
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Scroll to bottom
        }, 500); // Simulate typing delay
    }

    function appendMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', type);
        messageDiv.innerHTML = text; // Use innerHTML to allow for HTML in bot responses if needed
        chatbotMessages.appendChild(messageDiv);
    }

    // Comprehensive Q&A bot logic
    function getBotResponse(message) {
        const lowerCaseMessage = message.toLowerCase();

        // General Greetings and Thanks
        if (lowerCaseMessage.includes("مرحبا") || lowerCaseMessage.includes("سلام") || lowerCaseMessage.includes("كيف حالك")) {
            return "أهلاً بك! كيف يمكنني مساعدتك اليوم؟";
        } else if (lowerCaseMessage.includes("شكرا") || lowerCaseMessage.includes("شكراً") || lowerCaseMessage.includes("بارك الله فيك")) {
            return "على الرحب والسعة! هل من أسئلة أخرى؟";
        }

        // About YeetCoin (Overview/Hero Section)
        if (lowerCaseMessage.includes("yeetcoin") || lowerCaseMessage.includes("ما هي عملة yeetcoin") || lowerCaseMessage.includes("عن العملة") || lowerCaseMessage.includes("ما هذا الموقع")) {
            return "YeetCoin هي عملة ميم تعتمد على تقنية البلوكشين، تجمع بين قوة المجتمع والتكنولوجيا اللامركزية لتجربة مالية فريدة.";
        }
        if (lowerCaseMessage.includes("مستقبل") || lowerCaseMessage.includes("future of meme finance")) {
            return "YeetCoin هي مستقبل التمويل الميمي، تجمع بين قوة المجتمع وتقنيات البلوكشين المتطورة.";
        }

        // Buy Options & Contract
        if (lowerCaseMessage.includes("شراء") || lowerCaseMessage.includes("كيف أشتري") || lowerCaseMessage.includes("طريقة الشراء") || lowerCaseMessage.includes("pancakeswap")) {
            return "يمكنك شراء YeetCoin من خلال PancakeSwap. يرجى زيارة قسم 'Buy' في موقعنا للمزيد من التفاصيل.";
        }
        if (lowerCaseMessage.includes("bscscan") || lowerCaseMessage.includes("عرض على bscscan") || lowerCaseMessage.includes("العقد") || lowerCaseMessage.includes("contract address")) {
            return "يمكنك عرض معلومات YeetCoin على BSCScan من خلال هذا الرابط: https://bscscan.com/token/0x23090Dcb93710E2C8039DdC214E13997Bd15cC25";
        }
        if (lowerCaseMessage.includes("تعلم المزيد") || lowerCaseMessage.includes("learn more")) {
            return "لمعرفة المزيد حول YeetCoin ومميزاتها، يرجى النقر على زر 'تعلم المزيد' الذي يوجهك لقسم المميزات.";
        }

        // Live Stats Cards
        if (lowerCaseMessage.includes("السعر الحالي") || lowerCaseMessage.includes("كم سعر yeetcoin")) {
            const price = document.getElementById('yeet-price').textContent;
            return `السعر الحالي لـ YeetCoin هو ${price}.`;
        }
        if (lowerCaseMessage.includes("القيمة السوقية") || lowerCaseMessage.includes("market cap")) {
            const marketCap = document.getElementById('market-cap').textContent;
            return `القيمة السوقية لـ YeetCoin هي ${marketCap}.`;
        }
        if (lowerCaseMessage.includes("الحائزين") || lowerCaseMessage.includes("عدد الملاك") || lowerCaseMessage.includes("holders")) {
            const holders = document.getElementById('holders').textContent;
            return `إجمالي حائزي YeetCoin هو ${holders}.`;
        }
        if (lowerCaseMessage.includes("وصول عالمي") || lowerCaseMessage.includes("global reach")) {
            return "تهدف YeetCoin إلى الوصول العالمي وبناء مجتمع دولي كبير.";
        }
        if (lowerCaseMessage.includes("مجتمع متنامي") || lowerCaseMessage.includes("growing community")) {
            return "YeetCoin لديها مجتمع متنامي باستمرار من عشاق العملات المشفرة.";
        }

        // Wallets Section
        if (lowerCaseMessage.includes("المحافظ المدعومة") || lowerCaseMessage.includes("محفظة")) {
            return "تدعم YeetCoin محافظ شهيرة مثل MetaMask و Trust Wallet و Bitget Wallet و OKX Wallet.";
        }
        if (lowerCaseMessage.includes("metamask")) {
            return "MetaMask هي المحفظة الأكثر شعبية لـ Web3 وتوفر وصولاً آمنًا للتطبيقات اللامركزية.";
        }
        if (lowerCaseMessage.includes("trust wallet")) {
            return "Trust Wallet هي محفظة محمولة أولاً تدعم آلاف العملات المشفرة لتجربة تداول سلسة.";
        }
        if (lowerCaseMessage.includes("bitget wallet")) {
            return "Bitget Wallet يوفر وصولاً لـ YeetCoin بدعم من بورصة رائدة، مع رسوم منخفضة وسيولة عالية.";
        }
        if (lowerCaseMessage.includes("okx wallet")) {
            return "OKX Wallet تقدم ميزات تداول متقدمة، مثالية للمتداولين المحترفين.";
        }

        // Features Section
        if (lowerCaseMessage.includes("مميزات") || lowerCaseMessage.includes("لماذا اختار yeetcoin") || lowerCaseMessage.includes("ما يميز yeetcoin")) {
            return "تتميز YeetCoin بسرعة المعاملات الفائقة، والأمان القوي، والمجتمع النابض بالحياة.";
        }
        if (lowerCaseMessage.includes("سريع") || lowerCaseMessage.includes("سرعة المعاملات") || lowerCaseMessage.includes("blazing fast")) {
            return "تتمتع YeetCoin بمعاملات سريعة للغاية ورسوم قليلة، مدعومة ببلوكشين محسن للغاية.";
        }
        if (lowerCaseMessage.includes("امان") || lowerCaseMessage.includes("security") || lowerCaseMessage.includes("ironclad security")) {
            return "أصولك محمية بعقود ذكية مدققة وبروتوكولات أمان متطورة.";
        }
        if (lowerCaseMessage.includes("مجتمع") || lowerCaseMessage.includes("vibrant community")) {
            return "انضم إلى مجتمعنا المتحمس والمتنامي من عشاق YeetCoin من جميع أنحاء العالم.";
        }

        // Tokenomics Section
        if (lowerCaseMessage.includes("tokenomics") || lowerCaseMessage.includes("تقسيم اقتصادي") || lowerCaseMessage.includes("توزيع العملة")) {
            return "العرض الكلي لـ YeetCoin هو 1,000,000 YEET. 10% للسيولة (بانتظار القفل)، 30% لمكافآت المجتمع، و 20% للتطوير والتسويق.";
        }
        if (lowerCaseMessage.includes("إجمالي العرض") || lowerCaseMessage.includes("total supply")) {
            return "إجمالي العرض من YeetCoin هو 1,000,000 YEET.";
        }
        if (lowerCaseMessage.includes("مجمع السيولة") || lowerCaseMessage.includes("liquidity pool") || lowerCaseMessage.includes("سيولة")) {
            return "10% من العرض الكلي لـ YeetCoin مخصصة لمجمع السيولة وهي بانتظار القفل.";
        }
        if (lowerCaseMessage.includes("مكافآت المجتمع") || lowerCaseMessage.includes("community rewards") || lowerCaseMessage.includes("airdrops")) {
            return "30% من العرض مخصص لمكافآت المجتمع، مثل Airdrops، المسابقات، والتخزين (Staking).";
        }
        if (lowerCaseMessage.includes("تطوير وتسويق") || lowerCaseMessage.includes("development & marketing")) {
            return "20% من العرض مخصص للتطوير المستقبلي والتبني العالمي لـ YeetCoin.";
        }

        // CTA Section
        if (lowerCaseMessage.includes("ثورة yeet") || lowerCaseMessage.includes("yeet revolution")) {
            return "لا تفوت الفرصة الكبيرة التالية في تمويل الميم. احصل على عملة YEET اليوم وكن جزءًا من شيء استثنائي!";
        }
        if (lowerCaseMessage.includes("ابدأ") || lowerCaseMessage.includes("get started")) {
            return "للبدء مع YeetCoin، يمكنك النقر على زر 'ابدأ مع YeetCoin' لشراء العملة.";
        }

        // Footer Section
        if (lowerCaseMessage.includes("سياسة الخصوصية") || lowerCaseMessage.includes("privacy policy")) {
            return "يمكنك مراجعة سياسة الخصوصية الخاصة بنا من خلال الرابط في تذييل الموقع.";
        }
        if (lowerCaseMessage.includes("شروط الخدمة") || lowerCaseMessage.includes("terms of service")) {
            return "يمكنك مراجعة شروط الخدمة الخاصة بنا من خلال الرابط في تذييل الموقع.";
        }
        if (lowerCaseMessage.includes("اتصل بنا") || lowerCaseMessage.includes("contact us") || lowerCaseMessage.includes("ايميل") || lowerCaseMessage.includes("بريد الكتروني")) {
            return "للتواصل معنا، يرجى إرسال بريد إلكتروني على yeet.coin@outlook.com.";
        }
        if (lowerCaseMessage.includes("حقوق النشر") || lowerCaseMessage.includes("copyright")) {
            return "© 2025 YeetCoin. جميع الحقوق محفوظة.";
        }

        // Live Crypto Prices (specific coins)
        if (lowerCaseMessage.includes("سعر بيتكوين") || lowerCaseMessage.includes("btc price")) {
            const btcPrice = document.getElementById('btc-price').textContent;
            return `سعر البيتكوين (BTC) الحالي هو ${btcPrice}.`;
        }
        if (lowerCaseMessage.includes("سعر ايثيريوم") || lowerCaseMessage.includes("eth price")) {
            const ethPrice = document.getElementById('eth-price').textContent;
            return `سعر الإيثيريوم (ETH) الحالي هو ${ethPrice}.`;
        }
        if (lowerCaseMessage.includes("سعر باينانس") || lowerCaseMessage.includes("bnb price")) {
            const bnbPrice = document.getElementById('bnb-price').textContent;
            return `سعر باينانس كوين (BNB) الحالي هو ${bnbPrice}.`;
        }
        if (lowerCaseMessage.includes("سعر سولانا") || lowerCaseMessage.includes("sol price")) {
            const solPrice = document.getElementById('sol-price').textContent;
            return `سعر سولانا (SOL) الحالي هو ${solPrice}.`;
        }
        if (lowerCaseMessage.includes("سعر xrp") || lowerCaseMessage.includes("ريبل price")) {
            const xrpPrice = document.getElementById('xrp-price').textContent;
            return `سعر XRP الحالي هو ${xrpPrice}.`;
        }

        // Countdown
        if (lowerCaseMessage.includes("متى الإطلاق") || lowerCaseMessage.includes("تاريخ الإطلاق") || lowerCaseMessage.includes("عداد الإطلاق")) {
            const days = document.getElementById('days').textContent;
            const hours = document.getElementById('hours').textContent;
            const minutes = document.getElementById('minutes').textContent;
            const seconds = document.getElementById('seconds').textContent;
            if (document.querySelector('.countdown-section').style.display === 'none') {
                return "لقد تم إطلاق العملة بالفعل! يمكنك الآن التداول.";
            }
            return `المتبقي للإطلاق: ${days} يوم، ${hours} ساعة، ${minutes} دقيقة، ${seconds} ثانية.`;
        }

        // Fallback / Default response
        return "عذراً، لم أفهم سؤالك. يرجى طرح سؤال آخر أو زيارة أقسام الموقع للحصول على معلومات.";
    }
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
    fetchCryptoPrices(); // Initial crypto prices fetch

    // Initialize Chatbot
    initChatbot();
});
