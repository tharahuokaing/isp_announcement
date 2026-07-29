/**
 * HUOKAING THARA ISP - 5-PHASE DEPLOYMENT & AI MULTILINGUAL VOICE ENGINE
 */

// 5-Phase Multilingual Data Model
const phaseData = {
    "km-KH": {
        intro: "សូមស្វាគមន៍មកកាន់ការប្រជុំបង្ហាញអំពីផែនការចំណាយ និងដំណាក់កាលទាំង៥ នៃការបង្កើត HUOKAING THARA ISP។",
        phases: [
            { num: "PHASE 01", title: "អាជ្ញាប័ណ្ណ និងហេដ្ឋារចនាសម្ព័ន្ធផ្លូវច្បាប់", cost: "$20,000", desc: "ការស្នើសុំអាជ្ញាប័ណ្ណ ISP ពីក្រសួង MPTC និង MOC ចុះបញ្ជីក្រុមហ៊ុន រៀបចំការិយាល័យ និងប្រព័ន្ធច្បាប់។" },
            { num: "PHASE 02", title: "បណ្តាញ Core Network & OLT Datacenter", cost: "$80,000", desc: "ទិញម៉ាស៊ីន OLT, Core Routers, BGP Gateways, ម៉ាស៊ីនភ្លើងជំនួយ និងការតភ្ជាប់ Upstream Transit (DCI)។" },
            { num: "PHASE 03", title: "ការទាញខ្សែអុបទិក Fiber Optic Cable (FOC)", cost: "$120,000", desc: "រៀបចំបណ្តាញខ្សែអុបទិកមេកាត់តាមក្រុង, ប្រអប់ splitter (FAT/FDB), និងបង្គោលអគ្គិសនីក្នុងតំបន់ដំបូង។" },
            { num: "PHASE 04", title: "ប្រព័ន្ធគ្រប់គ្រង ISP Billing & Billing Software", cost: "$30,000", desc: "ដំឡើងប្រព័ន្ធសូហ្វវែរគ្រប់គ្រងអតិថិជន, ម៉ាស៊ីនរ៉ោតទ័រ Radius Server, CRM, និងអាសយដ្ឋាន IPv4/IPv6។" },
            { num: "PHASE 05", title: "ប្រតិបត្តិការ និងការគាំទ្រអតិថិជន (CPE/ONU)", cost: "$80,000", desc: "ទិញឧបករណ៍ចុងក្រោយ CPE/Modem ជូនអតិថិជន, យានយន្តបច្ចេកទេស, ការទីផ្សារ និងថវិកាបម្រុង ៦ខែ។" }
        ]
    },
    "en-US": {
        intro: "Welcome to the HUOKAING THARA ISP 5-Phase Rollout and Cost Analysis briefing.",
        phases: [
            { num: "PHASE 01", title: "Licensing & Legal Framework", cost: "$20,000", desc: "MPTC ISP license acquisition, business registration, legal compliance, and central office setup." },
            { num: "PHASE 02", title: "Core Network & Datacenter", cost: "$80,000", desc: "Deployment of primary OLTs, BGP Core Routers, power backup units, and Upstream DCI Transit links." },
            { num: "PHASE 03", title: "Fiber Optic Cable (FOC) Backbone", cost: "$120,000", desc: "Laying main trunk optical fiber cables, installing FAT/FDB splitter boxes, and pole attachment access." },
            { num: "PHASE 04", title: "ISP Billing & Radius Management", cost: "$30,000", desc: "Integration of Automated Billing Software, Radius Authentication Servers, CRM, and IP Block allocation." },
            { num: "PHASE 05", title: "Customer CPE & Operations", cost: "$80,000", desc: "Stocking Optical Network Units (ONU/Modems), field technician vehicles, marketing, and 6-month OPEX reserve." }
        ]
    },
    "zh-CN": {
        intro: "欢迎参加 HUOKAING THARA ISP 5阶段部署与成本预算 AI 简报会。",
        phases: [
            { num: "PHASE 01", title: "许可与法律框架", cost: "$20,000", desc: "获取 MPTC ISP 运营牌照、公司注册、法律合规及总部办公室建立。" },
            { num: "PHASE 02", title: "核心网络与数据中心", cost: "$80,000", desc: "采购主 OLT、BGP 核心路由器、后备电源及上游 DCI 骨干带宽连接。" },
            { num: "PHASE 03", title: "光纤主干网铺设 (FOC)", cost: "$120,000", desc: "铺设城市主干光缆、安装 FAT/FDB 分光盒及电线杆挂线许可。" },
            { num: "PHASE 04", title: "计费与 Radius 管理系统", cost: "$30,000", desc: "部署自动化计费软件、Radius 认证服务器、CRM 客户管理及 IP 地址块。" },
            { num: "PHASE 05", title: "终端设备与运营", cost: "$80,000", desc: "采购客户 ONU 光猫、工程技术车辆、市场推广及 6 个月运营储备金。" }
        ]
    },
    "fr-FR": {
        intro: "Bienvenue à la réunion d'information sur le déploiement en 5 phases du FAI HUOKAING THARA.",
        phases: [
            { num: "PHASE 01", title: "Licence et Cadre Légal", cost: "$20,000", desc: "Obtention de la licence FAI MPTC, enregistrement de l'entreprise et aménagement du siège." },
            { num: "PHASE 02", title: "Réseau Central et Datacenter", cost: "$80,000", desc: "Installation des OLT principaux, routeurs BGP, alimentations de secours et transit DCI." },
            { num: "PHASE 03", title: "Câblage en Fibre Optique", cost: "$120,000", desc: "Déploiement des câbles optiques principaux, boîtiers de séparation FAT/FDB et accès aux poteaux." },
            { num: "PHASE 04", title: "Facturation et Gestion Radius", cost: "$30,000", desc: "Mise en place du logiciel de facturation automatique, serveur Radius, CRM et blocs d'adresses IP." },
            { num: "PHASE 05", title: "Équipements Clients et Opérations", cost: "$80,000", desc: "Achat de modems ONU, véhicules de service, marketing et réserve opérationnelle de 6 mois." }
        ]
    },
    "ja-JP": {
        intro: "HUOKAING THARA ISP の 5 段階導入計画とコスト見積もりの AI ブリーフィングへようこそ。",
        phases: [
            { num: "PHASE 01", title: "ライセンスと法的枠組み", cost: "$20,000", desc: "MPTC ISP ライセンス取得、会社登録、法規遵守、および本社オフィスの開設。" },
            { num: "PHASE 02", title: "コアネットワークとデータセンター", cost: "$80,000", desc: "メイン OLT、BGP コアルーター、予備電源、上流 DCI トランジットの導入。" },
            { num: "PHASE 03", title: "光ファイバー網の敷設", cost: "$120,000", desc: "幹線光ファイバーの敷設、FAT/FDB スプリッターボックスの設置、電柱アクセス許可。" },
            { num: "PHASE 04", title: "課金および Radius 管理システム", cost: "$30,000", desc: "自動課金ソフトウェア、Radius 認証サーバー、CRM、IP アドレスの割り当て。" },
            { num: "PHASE 05", title: "顧客端末および運用", cost: "$80,000", desc: "顧客用 ONU モデムの確保、技術用車両、マーケティング、および 6 か月の運転資金。" }
        ]
    }
};

let synth = window.speechSynthesis;
let currentUtterance = null;

window.onload = () => {
    updatePhaseLanguage();
    initHologramBackground();
    runClock();

    setTimeout(() => {
        document.getElementById('captcha-overlay').style.display = 'flex';
    }, 3000);
};

// Update UI Text based on language dropdown
function updatePhaseLanguage() {
    stopAIVoice();
    const lang = document.getElementById('lang-select').value;
    const data = phaseData[lang];

    document.getElementById('speech-text').innerText = data.intro;
    
    const container = document.getElementById('phases-container');
    container.innerHTML = '';

    data.phases.forEach(phase => {
        const card = document.createElement('div');
        card.className = 'phase-card';
        card.innerHTML = `
            <div class="phase-num">${phase.num}</div>
            <h3>${phase.title}</h3>
            <div class="cost-badge">BUDGET: ${phase.cost}</div>
            <p>${phase.desc}</p>
        `;
        container.appendChild(card);
    });

    logTerminal(`Switched active meeting context language to: [${lang}]`);
}

// AI Speech Engine Logic
function toggleAIVoice() {
    if (synth.speaking) {
        stopAIVoice();
        return;
    }

    const lang = document.getElementById('lang-select').value;
    const data = phaseData[lang];

    // Compile entire presentation script
    let fullScript = data.intro + " ";
    data.phases.forEach(p => {
        fullScript += `${p.num}: ${p.title}. ${p.desc} Estimated budget: ${p.cost}. `;
    });

    currentUtterance = new SpeechSynthesisUtterance(fullScript);
    currentUtterance.lang = lang;
    currentUtterance.rate = 0.95; // Clear reading tempo

    // Match best native voice for requested language
    const voices = synth.getVoices();
    const selectedVoice = voices.find(v => v.lang.includes(lang) || v.lang.startsWith(lang.split('-')[0]));
    if (selectedVoice) {
        currentUtterance.voice = selectedVoice;
    }

    currentUtterance.onstart = () => {
        document.getElementById('btn-speak').disabled = true;
        document.getElementById('btn-stop').disabled = false;
        document.getElementById('speaker-label').innerText = `AI PRESENTER: SPEAKING (${lang})`;
        logTerminal(`AI Audio Stream Started [${lang}]`);
    };

    currentUtterance.onend = () => {
        stopAIVoice();
        logTerminal("AI Audio Stream Completed Successfully.");
    };

    currentUtterance.onerror = (e) => {
        stopAIVoice();
        logTerminal(`AI Speech Error: ${e.error}`);
    };

    synth.speak(currentUtterance);
}

function stopAIVoice() {
    if (synth.speaking) {
        synth.cancel();
    }
    document.getElementById('btn-speak').disabled = false;
    document.getElementById('btn-stop').disabled = true;
    document.getElementById('speaker-label').innerText = 'AI PRESENTER: STANDBY';
}

// Matrix Background Effect
function initHologramBackground() {
    const canvas = document.getElementById('hologram-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cols = Math.floor(canvas.width / 22);
    const drops = new Array(cols).fill(1);

    function draw() {
        ctx.fillStyle = 'rgba(3, 3, 3, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00f2ff';
        ctx.font = '14px monospace';

        drops.forEach((y, i) => {
            const text = String.fromCharCode(0x30A0 + Math.random() * 95);
            ctx.fillText(text, i * 22, y * 22);
            if (y * 22 > canvas.height && Math.random() > 0.98) drops[i] = 0;
            drops[i]++;
        });
        requestAnimationFrame(draw);
    }
    draw();
}

function unlockSystem() {
    document.getElementById('captcha-overlay').style.display = 'none';
    logTerminal("Neural identity verified. Full financial access granted.");
}

function runClock() {
    setInterval(() => {
        document.getElementById('epoch-stabilizer').innerText = `SYSTEM_TIME_UTC: ${new Date().toISOString()}`;
    }, 1000);
}

function logTerminal(msg) {
    const term = document.getElementById('terminal-display');
    const line = document.createElement('div');
    line.innerText = `> ${msg}`;
    term.appendChild(line);
    term.scrollTop = term.scrollHeight;
}
