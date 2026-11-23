# Cyber Law, Risk and Compliance (Paper 1) - Web Application

**Course:** M.Sc. / B.Sc. Forensic Science (Semester 5)  
**Specialization:** Cybersecurity  
**Institution:** National Forensic Sciences University (NFSU), School of Forensic Science  
**Assessment:** TA2 Project  
**Deployment Mode:** Localhost Web Application (`http://localhost:8000`)

---

## 📌 Project Overview & Objectives

This web application has been developed specifically to fulfill the requirements of the **TA2 Project Assessment** for **Paper 1: Cyber Law, Risk and Compliance**. It provides an interactive, structured, and visually engaging dashboard covering the complete 60-hour university syllabus across all four units:

1. **Unit-I (15 Hours):** IT Security Assessment, Auditing, Governance, Compliance & Computer Assisted Audit Techniques (CAATs).
2. **Unit-II (15 Hours):** Seven Domains of IT Infrastructure, Acceptable Level of Risk (ALR), Security Baselines, CIA Triad, and Infrastructure Audit Reporting.
3. **Unit-III (15 Hours):** Enterprise Risk Analysis (Quantitative ALE & Qualitative Matrices), Risk Response, BCP Lifecycle, and Recovery Metrics (RTO, RPO, MTD, WRT).
4. **Unit-IV (15 Hours):** Disaster Recovery (DR) Strategies, Recovery Sites, Cybercrime Categories, The Indian IT Act 2000 & Amendments, CSAM Regulations, DPDP Act 2023, Auditing Standards (ISO 27001, COBIT, SOC, HIPAA), and Case Studies.

---

## 🚀 How to Run Locally on Your Machine

The application is completely self-contained and requires **zero external third-party dependencies or installations**. It runs directly on Python 3 (standard library).

### Option 1: Quick 1-Click Launch (Recommended for Windows)
1. Navigate to the project directory:  
   `C:\Users\LENOVO\.gemini\antigravity\scratch\cyber_law_compliance_app\`
2. Double-click **`start_app.bat`**.
3. The script will automatically start the local server on `http://localhost:8000` and open the application in your default web browser.

### Option 2: Running via Terminal / Command Prompt
1. Open PowerShell or Command Prompt in the project folder:
   ```powershell
   cd C:\Users\LENOVO\.gemini\antigravity\scratch\cyber_law_compliance_app
   python server.py
   ```
2. The server will start and output:
   ```text
   [+] Server running locally at: http://localhost:8000
   [+] Opening web application in your default browser...
   ```
3. Open your browser and navigate to `http://localhost:8000` (or `http://127.0.0.1:8000`).

### Option 3: Direct Browser Launch (Offline Standalone)
- You can also directly double-click **`index.html`** to open the entire application in Google Chrome, Microsoft Edge, Mozilla Firefox, or Brave without running any terminal commands.

---

## 🌟 Core Components & Features

### 1. Forensic Authentication & User Database Gateway 🌸✨
- **Individual Account Creation (Registration):**
  - Allows individual students, faculty, and examiners to create their own accounts.
  - Fields: Full Name, Institutional Email, Roll Number / ID, Academic Specialization, Role, and Passcode.
  - **Cute Forensic Avatar Choice:** Choose from 6 cute avatars during sign up (🐰 Bunny, 🐱 Kitty, 🦊 Fox, 🐼 Panda, 🦄 Unicorn, 🐻 Bear).
  - **Real Database Persistence:** Newly created accounts are added to `users_database.json` (on localhost) and synchronized with browser storage for live online hosting.
  - **Database Inspector Modal:** A live table allowing evaluators to view all registered users in the database (`USR-1001`, `USR-1002`, and newly registered accounts) with timestamps and active status.
- **Dual-Role Sign In Tabs:** 
  - **🎓 Forensic Student:** Profile pre-configured with Semester 5 credentials (`FS-2024-501`).
  - **🛡️ Lead Assessor / Faculty:** Profile for auditing and grading review (`AUD-NFSU-09`).
- **Instant 1-Click Quick Fill:** Pre-configured demo buttons for fast evaluator login:
  - *Student Demo:* `student@nfsu.ac.in` / Passcode: `cyber2026`
  - *Auditor Demo:* `auditor@nfsu.ac.in` / Passcode: `audit2026`
- **Statutory Warning Banner:** Prominent legal compliance notice under the **Indian IT Act 2000 (Sections 43, 66, and 70)**.
- **Cute Aesthetic Layout:** Soft pastel aesthetic with lavender, strawberry rose, and candy cyan accents, bubbly rounded cards, and smooth hover micro-interactions.
- **Session Management:** Session persistence toggle (stores in `localStorage` or `sessionStorage`), with a one-click **Sign Out** button in the header.
- **Active User Profile:** Live profile badge in both the top navigation header and the sidebar showing the logged-in student/auditor avatar, name, and roll/identifier.

### 2. Interactive Sidebar
- **Course Branding:** NFSU School of Forensic Science and Semester 5 Cybersecurity identifiers.
- **Unit Navigation:** Clickable sections for **Unit-I**, **Unit-II**, **Unit-III**, and **Unit-IV**, with teaching hour badges (15h each).
- **Executive Dashboard:** Overall statistics, topic count, and curriculum summary.
- **Interactive Tools & Quiz:** Dedicated links to the computational Risk Matrix tool and exam self-assessment quiz.

### 2. Dashboard with Splash Cards
- **Splash Cards Grid:** Summarizes key concepts for each topic into concise, high-yield revision bullet points.
- **Color-Coded Badges & Icons:** Categorized into Assessment, Governance, Baselines, Network Domains, Risk Analysis, BCP, and Cyber Law.
- **Key Forensic Takeaway Box:** Highlighted callouts distilling the most critical takeaway for forensic investigators.
- **In-Depth Study Modal:** Clicking any card opens a detailed study modal containing comprehensive academic notes, comparison tables, statutory sections, and audit checklists.

### 3. Interactive Tools & Utilities
- **Risk Matrix & ALE Calculator:**
  - Interactive sliders for Likelihood (1-5) and Impact (1-5) to compute qualitative Risk Scores and priority heatmaps.
  - Quantitative calculator for Single Loss Expectancy (SLE) and Annualized Loss Expectancy (ALE = AV × EF × ARO).
- **7 Domains of IT Infrastructure Explorer:** Interactive selector displaying common devices, compliance drivers, and audit checkpoints for each domain.
- **Indian IT Act 2000 Quick Finder:** Instant live search table for Sections 43, 43A, 65, 66, 66B-F, 67, 67A, 67B, 69, 70, 72, and 79.
- **Self-Assessment Quiz:** 10-question practice exam with instant feedback, scoring, and detailed forensic explanations.

### 4. Technical Architecture & Design
- **Theme Support:** Clean Cyber Dark Mode (default) and Light Mode toggle.
- **Zero-Dependency Guarantee:** Pure HTML5, CSS3, and ES6 JavaScript. No external CDN calls required, ensuring 100% offline functionality.
- **Responsive Layout:** Optimized for desktops, laptops, tablets, and mobile devices.

---

## 📂 Project Directory Structure

```text
cyber_law_compliance_app/
│
├── index.html          # Semantic HTML5 Single Page Application
├── styles.css          # Modern cybersecurity-themed responsive stylesheet
├── app.js              # Complete syllabus data, dynamic views, search & calculators
├── server.py           # Production-grade Python standard library local server
├── start_app.bat       # 1-Click Windows launch script
└── README.md           # Project documentation and submission guide
```

---

## 🎓 Academic Integrity & Course Alignment

This project has been engineered specifically to reflect the official syllabus of the **School of Forensic Science, National Forensic Sciences University (NFSU)**. All concepts, legal statutes, definitions, and frameworks strictly align with Paper 1 learning outcomes.
