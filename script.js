/**
 * HUOKAING THARA ISP - PHASE 5 REGULATORY & METAVOICE ENGINE
 * VER: 2026.12_RELEASE
 */

// Speech & Transcript Database
const speechTranscripts = {
    "km-KH-phase5": "ក្រុមហ៊ុន HUOKAING THARA ISP សូមប្រកាសយ៉ាងឱឡារិកអំពីការឈានចូលដល់ ដំណាក់កាលទី ៥ IDX-REG-05 ដែលជាជំហានយុទ្ធសាស្ត្រក្នុងការអនុវត្តអនុលោមភាពវិសាលគមរលកធាតុអាកាសសកល និងអាជ្ញាប័ណ្ណទូរគមនាគមន៍។ នៅក្នុងដំណាក់កាលនេះ ក្រុមហ៊ុនយើងខ្ញុំសហការយ៉ាងជិតស្និទ្ធជាមួយរាជរដ្ឋាភិបាលកម្ពុជា តាមរយៈក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍ MPTC, អាជ្ញាធរទូរគមនាគមន៍កម្ពុជា TRC និងដៃគូអន្តរជាតិ សហភាពទូរគមនាគមន៍អន្តរជាតិ ITU ដើម្បីធានាសុវត្ថិភាពបណ្តាញ បទដ្ឋានច្បាប់ និងការបែងចែកប្រេកង់វិសាលគមប្រកបដោយប្រសិទ្ធភាព។",

    "km-KH": "សូមស្វាគមន៍មកកាន់ការធ្វើបទបង្ហាញស្តីពីការគ្រោងបើកដំណើរការ HUOKAING THARA ISP។ ការវិនិយោគសរុបមានចំនួន ៣០ ម៉ឺនដុល្លារអាមេរិក ដែលចែកចេញជា ៥ ដំណាក់កាល៖ ដំណាក់កាលទី១ បង្កើតមជ្ឈមណ្ឌលទិន្នន័យ NOC, ដំណាក់កាលទី២ រៀបចំបណ្តាញ കേប្លិ៍អុបទិក Fiber Backbone, ដំណាក់កាលទី៣ តភ្ជាប់បណ្តាញ FTTH, ដំណាក់កាលទី៤ ដាក់ឱ្យប្រើប្រាស់ប្រព័ន្ធ AI, និងដំណាក់កាលទី៥ អនុវត្តអនុលោមភាពច្បាប់ និងវិសាលគមរលកធាតុអាកាស។",
    
    "en-US": "Welcome to the HUOKAING THARA ISP rollout briefing. Phase 5, titled IDX-REG-05, focuses on Global Spectrum Compliance and Telecom Licensing Regulations in direct cooperation with national authorities MPTC, TRC, and international body ITU.",
    
    "zh-CN": "欢迎参加 HUOKAING THARA 网络服务提供商的执行规划简报。第五阶段 IDX-REG-05 旨在与国家邮电部 MPTC、柬埔寨电信管理局 TRC 及国际电信联盟 ITU 密切合作，确保全球频谱合规与电信许可授权。",
    
    "vi-VN": "Chào mừng bạn đến với buổi báo cáo kế hoạch triển khai nhà mạng HUOKAING THARA ISP. Giai đoạn 5 (IDX-REG-05) tập trung vào Tuân thủ Tần số Toàn cầu và Cấp phép Viễn thông thông qua hợp tác với MPTC, TRC và ITU.",
    
    "th-TH": "ยินดีต้อนรับสู่การบรีฟแผนการดำเนินงานของ HUOKAING THARA ISP ระยะที่ 5 IDX-REG-05 มุ่งเน้นการปฏิบัติตามข้อกำหนดคลื่นความถี่สากลและการรับใบอนุญาตโทรคมนาคม โดยความร่วมมือกับ MPTC, TRC และ ITU"
};

let synth = window.speechSynthesis;
let currentUtterance = null;

window.onload = () => {
    initHologramBackground();
    runClock();
    logTelemetry("System online. Regulatory Phase 5 Engine Initialized.");
};

// 1. Dedicated Phase 5 Regulatory Speech Trigger
function announcePhase5() {
    stopVoiceBriefing();

    const textToSpeak = speechTranscripts["km-KH-phase5"];
    
    // Update Dropdown Selection & UI Text
    document.getElementById('language-select').value = "km-KH-phase5";
    const transcriptBox = document.getElementById('transcript-display');
    transcriptBox.innerText = `> [PHASE 5 REGULATORY ANNOUNCEMENT - km-KH]:\n` + textToSpeak;

    // Highlight Phase 5 visually
    selectPhase(5);

    if ('speechSynthesis' in window) {
        currentUtterance = new SpeechSynthesisUtterance(textToSpeak);
        currentUtterance.lang = "km-KH";
        currentUtterance.rate = 0.9; // Formal pace for government announcements

        const visBox = document.querySelector('.visualizer-box');

        currentUtterance.onstart = () => {
            visBox.classList.add('speaking', 'gold-mode');
            logTelemetry("Executing Phase 5 Government Cooperation Announcement (Khmer)...");
        };

        currentUtterance.onend = () => {
            visBox.classList.remove('speaking', 'gold-mode');
            logTelemetry("Phase 5 Announcement successfully completed.");
        };

        currentUtterance.onerror = (e) => {
            visBox.classList.remove('speaking', 'gold-mode');
            logTelemetry(`Speech Synthesis Error: ${e.error}`);
        };

        synth.speak(currentUtterance);
    } else {
        transcriptBox.innerText = "Speech Synthesis API is not supported in this browser.";
        logTelemetry("API Unavailable.");
    }
}

// 2. General Voice Briefing Trigger
function startVoiceBriefing() {
    stopVoiceBriefing();

    const selectedKey = document.getElementById('language-select').value;
    const textToSpeak = speechTranscripts[selectedKey];
    
    const transcriptBox = document.getElementById('transcript-display');
    transcriptBox.innerText = `> [METAVOICE BRIEFING - ${selectedKey}]:\n` + textToSpeak;

    if ('speechSynthesis' in window) {
        // Map transcript key to standard locale string
        let targetLocale = selectedKey.includes("phase5") ? "km-KH" : selectedKey;

        currentUtterance = new SpeechSynthesisUtterance(textToSpeak);
        currentUtterance.lang = targetLocale;
        currentUtterance.rate = 0.95;

        const visBox = document.querySelector('.visualizer-box');

        currentUtterance.onstart = () => {
            visBox.classList.add('speaking');
            if (selectedKey.includes("phase5")) visBox.classList.add('gold-mode');
            logTelemetry(`Voice output playing: ${selectedKey}`);
        };

        currentUtterance.onend = () => {
            visBox.classList.remove('speaking', 'gold-mode');
            logTelemetry("Voice output finished.");
        };

        currentUtterance.onerror = (e) => {
            visBox.classList.remove('speaking', 'gold-mode');
            logTelemetry(`Voice error: ${e.error}`);
        };

        synth.speak(currentUtterance);
    }
}

function stopVoiceBriefing() {
    if (synth && synth.speaking) {
        synth.cancel();
    }
    const visBox = document.querySelector('.visualizer-box');
    visBox.classList.remove('speaking', 'gold-mode');
    logTelemetry("Voice playback terminated.");
}

function updateLanguage() {
    const selectedKey = document.getElementById('language-select').value;
    if (selectedKey === "km-KH-phase5") {
        announcePhase5();
    } else {
        stopVoiceBriefing();
        document.getElementById('transcript-display').innerText = `[MODE CHANGED]: ${selectedKey}. Press START GENERAL BRIEFING.`;
    }
}

// 3. Phase Selection Visual Handler
function selectPhase(phaseIndex) {
    for (let i = 1; i <= 5; i++) {
        const card = document.getElementById(`phase-card-${i}`);
        if (card) {
            if (i === phaseIndex) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        }
    }
    logTelemetry(`Phase ${phaseIndex} activated on visual canvas.`);
}

// 4. Matrix Canvas Engine
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

// 5. System Utilities
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
