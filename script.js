/**
 * HUOKAING THARA ISP - PHASE MANAGEMENT ENGINE
 * VER: 2026.08_MASTER
 */

// Comprehensive Deployment Phase Data
const phaseData = {
    1: {
        title: "PHASE 01: CORE NETWORK INFRASTRUCTURE",
        timeline: "TIMELINE: Q1 - Q2 2026",
        progress: 20,
        description: "Establishing primary data center presence, acquiring core IP ranges, and configuring BGP routing engines.",
        milestones: [
            "Data Center Colocation Setup & Tier-3 Interconnects",
            "BGP Autonomous System (ASN) Registration & IP Pool Allocation",
            "Deployment of Main Core Routers & Edge Firewall Systems",
            "Initial Upstream Transit Contracts Negotiation (Tier-1 Providers)"
        ]
    },
    2: {
        title: "PHASE 02: METRO FIBER DISTRIBUTION (FTTH/GPON)",
        timeline: "TIMELINE: Q2 - Q3 2026",
        progress: 40,
        description: "Laying primary optical fiber rings across key urban sectors and installing Optical Line Terminals (OLTs).",
        milestones: [
            "Metro Fiber Ring Cable Deployment (Phnom Penh Central)",
            "Installation of High-Density GPON & XG-PON OLT Units",
            "Optical Distribution Network (ODN) Splitting Cabinet Setup",
            "Fiber-to-the-Home (FTTH) Residential Pilot Testing"
        ]
    },
    3: {
        title: "PHASE 03: WIRELESS & HIGH-CAPACITY BACKHAUL",
        timeline: "TIMELINE: Q3 - Q4 2026",
        progress: 60,
        description: "Expanding coverage via high-speed 6G point-to-point wireless relays and rural satellite gateways.",
        milestones: [
            "E-Band Microwave Backhaul Relay Node Installation",
            "Satellite Earth Station Interconnect Protocol Configuration",
            "Deploying High-Throughput Wireless Access Points for Suburban Sectors",
            "Redundant Link Failover Integration (Fiber + Wireless Auto-Switch)"
        ]
    },
    4: {
        title: "PHASE 04: ENTERPRISE & DATA CENTER INTERCONNECT (DCI)",
        timeline: "TIMELINE: Q4 2026 - Q1 2027",
        progress: 80,
        description: "Launching dedicated enterprise lines, Dark Fiber leases, and cross-border IPLC/DPLC circuits.",
        milestones: [
            "Subsea Cable Gateway Interconnect Integration",
            "Private Leased Line (DPLC / IPLC) Architecture Launch",
            "Data Center Interconnect (DCI) 100G Fiber Ring Activation",
            "Automated DDoS Mitigation & Cyber Security Shield Layer Deployment"
        ]
    },
    5: {
        title: "PHASE 05: COMMERCIAL LAUNCH & EMPIRE EXPANSION",
        timeline: "TIMELINE: Q1 2027 ONWARD",
        progress: 100,
        description: "Full commercial operation, opening customer portals, and nationwide scale rollout.",
        milestones: [
            "Public Customer Billing & Self-Service Portal Launch",
            "Nationwide Marketing & Sales Channel Activation",
            "24/7 Network Operations Center (NOC) Full-Scale Operation",
            "Next-Gen 6G & Neural Link Research & Development Expansion"
        ]
    }
};

// 20-Package Grid Setup
const basePackages = [
    { name: "FTTH Basic Starter", type: "Residential", speed: "100 Mbps", price: "$29/mo", target: "Phnom Penh Hub" },
    { name: "FTTH Home Pro", type: "Residential", speed: "300 Mbps", price: "$49/mo", target: "Phnom Penh Hub" },
    { name: "PPPoE Gamer Route", type: "Residential", speed: "500 Mbps", price: "$69/mo", target: "Kandal Core" },
    { name: "GPON Gigabit Core", type: "Fiber Edge", speed: "1000 Mbps", price: "$89/mo", target: "Siem Reap Node" },
    { name: "XG-PON Corporate", type: "SME Local", speed: "2.5 Gbps", price: "$149/mo", target: "Sihanoukville Hub" },
    { name: "DPLC Dedicated Ring", type: "Enterprise", speed: "5 Gbps", price: "$299/mo", target: "National Ring" },
    { name: "IPLC Border Crossing", type: "International", speed: "10 Gbps", price: "$799/mo", target: "Poipet Gateway" },
    { name: "DCI Interconnect Link", type: "Data Center", speed: "40 Gbps", price: "Custom Quote", target: "BKK-PP Core" },
    { name: "Dark Fiber Backbone", type: "Unlit Infrastructure", speed: "100 Gbps Core", price: "Contract", target: "Cambodia Transit" },
    { name: "6G Telemetry Array", type: "Satellite Uplink", speed: "1 Gbps Direct", price: "$120/mo", target: "Phnom Kulen Station" }
];

const systemPackages = [
    ...basePackages.map(p => ({...p, id: "A-" + p.name.replace(/\s+/g, '')})),
    ...basePackages.map(p => ({...p, name: p.name + " [Backup Route]", price: p.price !== "Custom Quote" && p.price !== "Contract" ? "$" + (parseInt(p.price.replace(/\D/g,'')) * 0.95).toFixed(0) + "/mo" : p.price, id: "B-" + p.name.replace(/\s+/g, '')}))
];

window.onload = () => {
    switchPhase(1);
    generateGrid();
    initHologramBackground();
    runEpochTracking();

    // Fire 3-Second Threat Check / Captcha
    setTimeout(() => {
        document.getElementById('captcha-overlay').style.display = 'flex';
    }, 3000);
};

// Switch Phase View
function switchPhase(phaseNum) {
    const data = phaseData[phaseNum];
    if (!data) return;

    // Update Progress Bar
    document.getElementById('phase-progress-fill').style.width = `${data.progress}%`;
    document.getElementById('current-phase-text').innerText = `CURRENT STATUS: ${data.title}`;
    document.getElementById('progress-percentage-text').innerText = `${data.progress}% COMPLETE`;

    // Update Tabs UI
    const tabs = document.querySelectorAll('.phase-tab');
    tabs.forEach((tab, index) => {
        if (index + 1 === phaseNum) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    // Render Display Card
    const card = document.getElementById('phase-display-card');
    card.innerHTML = `
        <h3>${data.title}</h3>
        <span class="timeline-tag">${data.timeline}</span>
        <p>${data.description}</p>
        <ul>
            ${data.milestones.map(m => `<li>${m}</li>`).join('')}
        </ul>
    `;

    logTelemetry(`Switched view to Phase ${phaseNum}: ${data.title}`);
}

// Generate Package Grid
function generateGrid() {
    const grid = document.getElementById('package-grid');
    grid.innerHTML = '';
    systemPackages.forEach(pkg => {
        const card = document.createElement('div');
        card.className = 'package-card';
        card.innerHTML = `
            <h3>${pkg.name}</h3>
            <p><strong>TOPOLOGY:</strong> ${pkg.type}</p>
            <p><strong>CAPACITY:</strong> ${pkg.speed}</p>
            <p><strong>ALLOCATION:</strong> ${pkg.price}</p>
            <p><strong>TARGET:</strong> ${pkg.target}</p>
            <button class="activate-btn" onclick="simulateProvisioning('${pkg.name}', '${pkg.id}')">TEST PROVISIONING</button>
        `;
        grid.appendChild(card);
    });
}

// Captcha Unlock Logic
function unlockSystem() {
    document.getElementById('captcha-overlay').style.display = 'none';
    
    const grid = document.getElementById('package-grid');
    grid.style.opacity = '1';
    grid.style.pointerEvents = 'auto';
    logTelemetry("NEURAL HANDSHAKE: SUCCESS. Master deployment plan unlocked.");
}

// Provisioning Simulator
async function simulateProvisioning(pkgName, pkgId) {
    const display = document.getElementById('ip-display');
    display.innerHTML = `<div style="color:#fff">-- SIMULATING PATH PROVISIONING FOR: ${pkgId} --</div>`;
    
    const deploymentPhases = [
        "Binding PPPoE VLAN tagged identifiers...",
        "Validating OLT optical power level budget (-18dBm target)...",
        "Pinging downstream gateway backbone routers...",
        "Link configuration mapped successfully."
    ];

    for (let phase of deploymentPhases) {
        const line = document.createElement('div');
        line.innerText = `> ${phase}`;
        display.appendChild(line);
        display.scrollTop = display.scrollHeight;
        await new Promise(res => setTimeout(res, 350));
    }
}

// Hologram Canvas Engine
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
            const rawCharacter = String.fromCharCode(0x30A0 + Math.random() * 95);
            ctx.fillText(rawCharacter, index * 24, yPos * 24);
            
            if (yPos * 24 > canvas.height && Math.random() > 0.98) {
                rainDrops[index] = 0;
            }
            rainDrops[index]++;
        });
        requestAnimationFrame(drawMatrix);
    }
    drawMatrix();
}

// Live Clock
function runEpochTracking() {
    setInterval(() => {
        const dateObj = new Date();
        document.getElementById('epoch-stabilizer').innerText = `SYSTEM_TIME_UTC: ${dateObj.toISOString()}`;
    }, 1000);
}

function logTelemetry(text) {
    const display = document.getElementById('ip-display');
    const newLine = document.createElement('div');
    newLine.innerText = `> [LOG] ${text}`;
    display.appendChild(newLine);
}
