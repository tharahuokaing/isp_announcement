/**
 * HUOKAING THARA ISP - AI METAVOICE & COST PLANNING ENGINE
 * VER: 2026.10_PROD
 */

// Multilingual NLP Briefing Database
const speechTranscripts = {
    "km-KH": "សូមស្វាគមន៍មកកាន់ការធ្វើបទបង្ហាញស្តីពីការគ្រោងបើកដំណើរការ HUOKAING THARA ISP។ ការវិនិយោគសរុបមានចំនួន ៣០ ម៉ឺនដុល្លារអាមេរិក ដែលចែកចេញជា ៥ ដំណាក់កាល៖ ដំណាក់កាលទី១ បង្កើតមជ្ឈមណ្ឌលទិន្នន័យ NOC, ដំណាក់កាលទី២ រៀបចំបណ្តាញ കേប្លិ៍អុបទិក Fiber Backbone, ដំណាក់កាលទី៣ តភ្ជាប់បណ្តាញ FTTH ជូនអតិថិជន, ដំណាក់កាលទី៤ ដាក់ឱ្យប្រើប្រាស់ប្រព័ន្ធគ្រប់គ្រង AI និងស្វ័យប្រវត្តិកម្ម, និងដំណាក់កាលទី៥ រៀបចំប្រព័ន្ធរណប Backup បម្រុងទុក។",
    
    "en-US": "Welcome to the HUOKAING THARA ISP executive rollout briefing. The total estimated investment is 300,000 USD structured into 5 strategic phases. Phase 1 deploys the Core Data Center and NOC. Phase 2 builds the Metropolitan Fiber Backbone. Phase 3 installs Last-Mile FTTH access. Phase 4 integrates the AI Operations and Automated Billing system. Phase 5 secures Redundancy and Satellite Backup links.",
    
    "zh-CN": "欢迎参加 HUOKAING THARA 网络服务提供商的执行规划简报。总投资预计为 30 万美元，分为 5 个阶段。第一阶段部署核心数据中心与 NOC；第二阶段建设骨干光纤网络；第三阶段覆盖最后一公里 FTTH；第四阶段集成 AI 运营与自动计费系统；第五阶段配置冗余与卫星备用链路。",
    
    "vi-VN": "Chào mừng bạn đến với buổi báo cáo kế hoạch triển khai nhà mạng HUOKAING THARA ISP. Tổng vốn đầu tư ước tính là 300.000 USD được chia thành 5 giai đoạn: Giai đoạn 1 triển khai Trung tâm Dữ liệu Core và NOC; Giai đoạn 2 xây dựng Tuyến Cáp quang Trục; Giai đoạn 3 lắp đặt Mạng Kết nối FTTH; Giai đoạn 4 tích hợp Hệ thống Vận hành AI; và Giai đoạn 5 thiết lập Đường truyền Dự phòng Vệ tinh.",
    
    "th-TH": "ยินดีต้อนรับสู่การบรีฟแผนการดำเนินงานของ HUOKAING THARA ISP เงินลงทุนประเมินรวมคือ 300,000 ดอลลาร์สหรัฐ แบ่งออกเป็น 5 ระยะ ได้แก่ ระยะที่ 1 การติดตั้งศูนย์ข้อมูล Core Data Center และ NOC, ระยะที่ 2 การวางเครือข่ายเคเบิลใยแก้วนำแสง, ระยะที่ 3 การเชื่อมต่อโครงข่าย FTTH, ระยะที่ 4 การติดตั้งระบบบริหารจัดการ AI, และระยะที่ 5 การจัดทำระบบสำรองข้อมูลผ่านดาวเทียม"
};

let synth = window.speechSynthesis;
let currentUtterance = null;

window.onload = () => {
    initHologramBackground();
    runClock();
    logTelemetry("System online. Multi-lingual Speech Engine initialized.");
};

// 1. Voice Briefing Engine (Web Speech API / Metavoice Simulator)
function startVoiceBriefing() {
    stopVoiceBriefing(); // Reset active audio

    const selectedLang = document.getElementById('language-select').value;
    const textToSpeak = speechTranscripts[selectedLang];
    
    // Update UI Transcript Box
    const transcriptBox = document.getElementById('transcript-display');
    transcriptBox.innerText = `> [METAVOICE ACTIVE - ${selectedLang}]:\n` + textToSpeak;

    if ('speechSynthesis' in window) {
        currentUtterance = new SpeechSynthesisUtterance(textToSpeak);
        currentUtterance.lang = selectedLang;
        currentUtterance.rate = 0.95; // Speech speed

        // Visualizer Activation Events
        currentUtterance.onstart = () => {
            document.querySelector('.visualizer-box').classList.add('speaking');
            logTelemetry(`AI Voice Output Started: ${selectedLang}`);
        };

        currentUtterance.onend = () => {
            document.querySelector('.visualizer-box').classList.remove('speaking');
            logTelemetry("AI Voice Output Completed.");
        };

        currentUtterance.onerror = (e) => {
            document.querySelector('.visualizer-box').classList.remove('speaking');
            logTelemetry(`Voice Synthesis Error: ${e.error}`);
        };

        synth.speak(currentUtterance);
    } else {
        transcriptBox.innerText = "Speech Synthesis API not supported in this browser environment.";
        logTelemetry("API Unsupported error.");
    }
}

function stopVoiceBriefing() {
    if (synth.speaking) {
        synth.cancel();
    }
    document.querySelector('.visualizer-box').classList.remove('speaking');
    logTelemetry("Voice output manually terminated.");
}

function updateLanguage() {
    const selectedLang = document.getElementById('language-select').value;
    document.getElementById('transcript-display').innerText = `[LANGUAGE CHANGED]: ${selectedLang}. Ready to output AI Briefing.`;
    stopVoiceBriefing();
}

// 2. Interactive Phase Highlight Logic
function selectPhase(phaseIndex) {
    const cards = document.querySelectorAll('.phase-card');
    cards.forEach((card, idx) => {
        if (idx + 1 === phaseIndex) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
    logTelemetry(`Phase ${phaseIndex} selected for technical review.`);
}

// 3. Hologram Canvas Animation
function initHologramBackground() {
    const canvas = document.getElementById('hologram-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const colCount = Math.floor(canvas.width / 24);
    const rainDrops = new Array(colCount).fill(1);

    function drawMatrix() {
        ctx.fillStyle = 'rgba(3, 3, 3, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00f2ff';
        ctx.font = '14px monospace';

        rainDrops.forEach((yPos, index) => {
            const rawChar = String.fromCharCode(0x30A0 + Math.random() * 95);
            ctx.fillText(rawChar, index * 24, yPos * 24);
            
            if (yPos * 24 > canvas.height && Math.random() > 0.98) {
                rainDrops[index] = 0;
            }
            rainDrops[index]++;
        });
        requestAnimationFrame(drawMatrix);
    }
    drawMatrix();
}

// 4. System Clock & Telemetry Logger
function runClock() {
    setInterval(() => {
        const d = new Date();
        document.getElementById('epoch-stabilizer').innerText = `SYSTEM_TIME_UTC: ${d.toISOString()}`;
    }, 1000);
}

function logTelemetry(msg) {
    const display = document.getElementById('ip-display');
    const line = document.createElement('div');
    line.innerText = `> ${msg}`;
    display.appendChild(line);
    display.scrollTop = display.scrollHeight;
}
