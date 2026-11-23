/**
 * Cyber Law, Risk and Compliance (Paper 1) - Interactive Syllabus Web App
 * M.Sc. / B.Sc. Forensic Science, Semester 5, Specialization in Cybersecurity
 * National Forensic Sciences University (NFSU)
 */

// Application State
const state = {
  currentUser: JSON.parse(localStorage.getItem('nfsu_cyber_user') || sessionStorage.getItem('nfsu_cyber_user') || 'null'),
  loginRole: 'student', // 'student' or 'auditor'
  selectedAvatar: '🐰',
  currentUnit: 'overview', // 'overview', 'unit1', 'unit2', 'unit3', 'unit4', 'tools', 'quiz'
  activeCategory: 'all',
  searchQuery: '',
  selectedTopic: null,
  activeModalTab: 'concepts',
  theme: localStorage.getItem('theme') || 'light',
  quizCurrentIndex: 0,
  quizScore: 0,
  quizAnswers: {},
};

// Curriculum Database
const curriculumData = {
  unit1: {
    id: 'unit1',
    number: 'UNIT - I',
    title: 'IT Security Assessment, Auditing & Compliance',
    hours: '15 Hours',
    badgeClass: 'cyan',
    description: 'Foundations of IT security assessments, formal audit lifecycles, regulatory compliance frameworks, governance principles, non-compliance liabilities, and Computer Assisted Audit Techniques (CAATs).',
    topics: [
      {
        id: 'u1_t1',
        code: 'SEC-101',
        title: 'IT Security Assessment Fundamentals',
        category: 'Assessment',
        tagColor: 'cyan',
        icon: '🔍',
        summary: [
          'Diagnostic evaluation designed to identify security vulnerabilities, misconfigurations, and weaknesses across IT assets.',
          'Consultative and advisory nature; focuses on assessing organizational security posture without issuing formal pass/fail grades.',
          'Utilizes threat modeling, vulnerability scans, configuration reviews, and gap analyses to calculate relative risk levels.',
          'Provides actionable remediation roadmaps to proactively bolster cyber defenses before formal audits occur.'
        ],
        takeaway: 'Core Goal: Uncover gaps and prioritize security fixes collaboratively before threats exploit them.',
        detailContent: {
          concepts: `
            <h4>1. What is an IT Security Assessment?</h4>
            <p>An IT security assessment is an ongoing diagnostic and consultative process aimed at determining how effectively an organization's security controls protect its data and infrastructure against potential cyber threats. It evaluates the current security posture against industry standards, identifies technical and procedural vulnerabilities, and calculates threat exposure levels.</p>
            
            <h4>2. Key Assessment Methodologies</h4>
            <ul>
              <li><strong>Vulnerability Assessment (VA):</strong> Automated scanning of networks, hosts, and applications using tools (e.g., Nessus, OpenVAS, Qualys) to identify unpatched flaws.</li>
              <li><strong>Threat Modeling:</strong> Proactively dissecting software and network architecture to anticipate threat vectors (e.g., STRIDE framework: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege).</li>
              <li><strong>Security Architecture Review:</strong> Evaluating network topologies, DMZ setups, defense-in-depth layers, and trust zones.</li>
              <li><strong>Gap Analysis:</strong> Measuring current state controls against standard target baselines (e.g., CIS Controls, NIST CSF).</li>
            </ul>

            <h4>3. Assessment Deliverables</h4>
            <p>The primary outcome is a comprehensive <em>Security Assessment Report (SAR)</em> detailing discovered vulnerabilities ranked by Common Vulnerability Scoring System (CVSS) scores, estimated likelihood of exploitation, and prioritized risk mitigation steps.</p>
          `,
          legal: `
            <h4>Regulatory Relevance in Cybersecurity</h4>
            <p>Under India's <strong>IT Act 2000 (Section 43A)</strong> and the <em>Reasonable Security Practices and Procedures (SPDI Rules 2011)</em>, organizations holding sensitive personal data are legally obligated to maintain proactive security controls. Routine security assessments provide documented evidence of due diligence and reasonable care.</p>
          `,
          checklist: `
            <h4>Forensic & Audit Assessment Checklist</h4>
            <ul>
              <li>[ ] Comprehensive asset inventory completed and verified against Active Directory/CMDB.</li>
              <li>[ ] Vulnerability scans scheduled and executed on production and development subnets.</li>
              <li>[ ] Threat modeling performed for all externally facing web endpoints and APIs.</li>
              <li>[ ] Identified CVSS > 7.0 vulnerabilities assigned to remediation owners with SLAs.</li>
            </ul>
          `
        }
      },
      {
        id: 'u1_t2',
        code: 'AUD-102',
        title: 'IT Security Audit Principles',
        category: 'Audit',
        tagColor: 'blue',
        icon: '📋',
        summary: [
          'Formal, structured, and independent evaluation of IT infrastructure, policies, and operational controls against established standards.',
          'Evidence-based and evaluative: requires documented artifacts, logs, screenshots, and interviews to substantiate claims.',
          'Conducted by independent internal or external certified auditors (e.g., CISA, CISSP, ISO 27001 Lead Auditors).',
          'Results in formal attestation, compliance certification, or detailed non-conformity findings.'
        ],
        takeaway: 'Core Goal: Provide independent verification and formal assurance of compliance to management and regulators.',
        detailContent: {
          concepts: `
            <h4>1. What is an IT Security Audit?</h4>
            <p>An IT security audit is a formal, independent, and evidence-driven examination of an entity's information systems and controls. Unlike an assessment, an audit strictly measures conformity against explicit benchmarks (such as ISO/IEC 27001, COBIT, PCI-DSS, or regulatory guidelines like RBI/CERT-In mandates).</p>
            
            <h4>2. Fundamental Audit Tenets</h4>
            <ul>
              <li><strong>Independence & Objectivity:</strong> The auditor must be free from organizational bias and have no operational responsibility over the audited systems.</li>
              <li><strong>Evidence-Based Substantiation:</strong> Every finding must be supported by corroborating evidence (system logs, configuration files, ticket traces, policy approvals).</li>
              <li><strong>Materiality:</strong> Focusing on discrepancies that could significantly impact organizational operations, financial integrity, or statutory compliance.</li>
              <li><strong>Professional Skepticism:</strong> Maintaining a questioning mindset regarding evidence and management assertions.</li>
            </ul>
          `,
          legal: `
            <h4>Statutory Mandates for IT Audits</h4>
            <p>In India, regulatory bodies including the <strong>Reserve Bank of India (RBI)</strong>, <strong>SEBI</strong>, and <strong>IRDAI</strong> mandate annual independent Cyber Security Audits for regulated financial institutions and payment aggregators. Section 70B of the IT Act empowers <strong>CERT-In</strong> to call for audit reports during major incidents.</p>
          `,
          checklist: `
            <h4>Pre-Audit Readiness Checklist</h4>
            <ul>
              <li>[ ] Approved Information Security Management Policy signed off by executive leadership.</li>
              <li>[ ] Role-based access control (RBAC) logs retained for a minimum of 180 days (or 365 per CERT-In).</li>
              <li>[ ] Change management logs reflecting documented approvals for all network changes.</li>
              <li>[ ] Third-party vendor contracts incorporating Right to Audit clauses.</li>
            </ul>
          `
        }
      },
      {
        id: 'u1_t3',
        code: 'CMP-103',
        title: 'Compliance & IT Governance Architecture',
        category: 'Governance',
        tagColor: 'emerald',
        icon: '⚖️',
        summary: [
          'Compliance is strict adherence to laws, regulations, standards, and contractual terms governing data security.',
          'IT Governance ensures IT investments align with business objectives, manage enterprise cyber risks, and maintain accountability.',
          'Governance frameworks (e.g., COBIT, ITIL) establish executive steering committees, risk appetite levels, and policy hierarchies.',
          'Crucial for mitigating enterprise legal liabilities, preserving reputation, and maintaining operational licenses.'
        ],
        takeaway: 'Core Goal: Bridge board-level strategy with technical cybersecurity controls.',
        detailContent: {
          concepts: `
            <h4>1. Defining Compliance & Governance</h4>
            <p><strong>IT Governance</strong> provides the executive framework that directs and controls IT endeavors, ensuring they generate business value while keeping risks at an acceptable level. <strong>Compliance</strong> refers to the mandatory state of conforming with external statutory laws, regulatory directives, and internal enterprise policies.</p>
            
            <h4>2. Why are Governance and Compliance Important?</h4>
            <ul>
              <li><strong>Fiduciary Responsibility:</strong> Boards of directors have legal obligations to protect corporate assets and shareholder value from cyber destruction.</li>
              <li><strong>Standardized Operations:</strong> Eliminates ad-hoc security practices by instituting repeatable, monitored, and optimized policies.</li>
              <li><strong>Competitive Advantage:</strong> Certifications such as SOC 2 Type II or ISO 27001 build customer trust and unlock global enterprise contracts.</li>
            </ul>
          `,
          legal: `
            <h4>Corporate Governance & Indian Company Law</h4>
            <p>Under <strong>Section 134(5) of the Companies Act, 2013</strong>, directors must state that internal financial controls have been laid down and are operating effectively, which directly incorporates IT General Controls (ITGC) and access security.</p>
          `,
          checklist: `
            <h4>Governance Alignment Verification</h4>
            <ul>
              <li>[ ] Board-level IT Risk & Cyber Steering Committee meeting minutes documented quarterly.</li>
              <li>[ ] Enterprise Security Policies reviewed and re-approved annually.</li>
              <li>[ ] Key Risk Indicators (KRIs) tracked and presented to executive management.</li>
            </ul>
          `
        }
      },
      {
        id: 'u1_t4',
        code: 'CMP-104',
        title: 'Audit vs Assessment: Comparative Analysis',
        category: 'Comparison',
        tagColor: 'purple',
        icon: '🔄',
        summary: [
          'Assessment is diagnostic, flexible, and cooperative; Audit is formal, standard-bound, and strictly objective.',
          'Assessments produce recommendations and gap analyses; Audits produce pass/fail attestations, opinions, and non-conformities.',
          'Assessments are conducted periodically by internal teams or consultants; Audits are performed by accredited, independent certifiers.',
          'Assessments foster risk-awareness; Audits verify compliance for external regulators, partners, and the board.'
        ],
        takeaway: 'Comparison Key: Assessment asks "Where are our vulnerabilities?"; Audit asks "Are we complying with specific rules and evidence?"',
        detailContent: {
          concepts: `
            <h4>Comprehensive Head-to-Head Comparison</h4>
            <div class="table-wrapper">
              <table class="content-table">
                <thead>
                  <tr>
                    <th>Dimension</th>
                    <th>IT Security Assessment</th>
                    <th>IT Security Audit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Core Purpose</strong></td>
                    <td>Identify vulnerabilities, gaps, and recommend technical security enhancements.</td>
                    <td>Verify adherence to mandated criteria, regulations, or standards using verifiable evidence.</td>
                  </tr>
                  <tr>
                    <td><strong>Nature</strong></td>
                    <td>Consultative, educational, collaborative, flexible.</td>
                    <td>Formal, evaluative, authoritative, standardized.</td>
                  </tr>
                  <tr>
                    <td><strong>Auditor Independence</strong></td>
                    <td>Can be performed by internal sysadmins, security analysts, or third-party testers.</td>
                    <td>Requires strict independence (no conflict of interest or operational involvement).</td>
                  </tr>
                  <tr>
                    <td><strong>Output Deliverable</strong></td>
                    <td>Security posture score, risk register updates, actionable remediation roadmap.</td>
                    <td>Formal Audit Opinion, Certification, Non-Conformity Reports (NCR), Attestation.</td>
                  </tr>
                  <tr>
                    <td><strong>Execution Criteria</strong></td>
                    <td>Best-effort technical depth, threat modeling, CVSS scores.</td>
                    <td>Checklists, control matrices (e.g., ISO Annex A, COBIT, PCI DSS, SOC 2).</td>
                  </tr>
                  <tr>
                    <td><strong>Outcome Impact</strong></td>
                    <td>Internal prioritization of engineering backlog.</td>
                    <td>Statutory reporting, regulatory fines, certification grant/revocation.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `,
          legal: `
            <h4>Forensic Context</h4>
            <p>During forensic investigations following a data breach, court judges and law enforcement examine both <em>Assessments</em> (to evaluate if the organization knew of flaws in advance) and <em>Audits</em> (to evaluate whether the firm adhered to mandated compliance baselines).</p>
          `,
          checklist: `
            <h4>Engagement Strategy</h4>
            <ul>
              <li>Conduct quarterly Security Assessments to prepare infrastructure.</li>
              <li>Conduct annual formal Audits to fulfill regulatory and client obligations.</li>
            </ul>
          `
        }
      },
      {
        id: 'u1_t5',
        code: 'LAW-105',
        title: 'Consequences of Non-Compliance & Legal Penalties',
        category: 'Legal',
        tagColor: 'rose',
        icon: '⚠️',
        summary: [
          'Severe financial penalties under global and national data protection statutes (DPDP Act 2023, GDPR, HIPAA, IT Act).',
          'Criminal liability, imprisonment, and personal prosecution of company directors and CISOs for gross negligence.',
          'Operational impacts: Revocation of banking/operating licenses, suspension of merchant processing, CERT-In blacklisting.',
          'Reputational destruction, loss of client trust, drop in market capitalization, and shareholder derivative lawsuits.'
        ],
        takeaway: 'Compliance is not an expense—non-compliance is an existential organizational threat.',
        detailContent: {
          concepts: `
            <h4>1. The Spectrum of Non-Compliance Liabilities</h4>
            <p>When an organization fails to adhere to statutory compliance laws, the repercussions manifest across four distinct domains: Legal, Financial, Operational, and Reputational.</p>
            
            <h4>2. Statutory Breakdown of Penalties</h4>
            <ul>
              <li><strong>India DPDP Act 2023:</strong> Penalties up to <strong>₹250 Crores</strong> per violation for failure to observe data security safeguards, and up to ₹200 Crores for failing to notify the Data Protection Board and users of breaches.</li>
              <li><strong>IT Act 2000 (Section 43A):</strong> Obligation to pay unlimited compensation for failure to protect Sensitive Personal Data or Information (SPDI).</li>
              <li><strong>EU GDPR (Articles 83 & 84):</strong> Tier-2 fines reaching up to <strong>€20 Million or 4% of total worldwide annual turnover</strong>, whichever is higher.</li>
              <li><strong>US HIPAA Violations:</strong> Up to $2,000,000+ annually with criminal penalties up to 10 years imprisonment for willful neglect.</li>
            </ul>

            <h4>3. Executive & C-Suite Personal Liability</h4>
            <p>Under <strong>Section 85 of the Indian IT Act</strong>, where a contravention is committed by a company, every person in charge of business conduct (directors, compliance officers) is deemed guilty unless they prove the contravention took place without their knowledge or that they exercised all due diligence.</p>
          `,
          legal: `
            <h4>Key Sections of the IT Act Regarding Failure to Comply</h4>
            <ul>
              <li><strong>Section 70B(7):</strong> Failure to report cyber security incidents to CERT-In or comply with their directions carries imprisonment up to 1 year and/or fines.</li>
              <li><strong>Section 69 & 69A:</strong> Failure to assist government agencies with authorized interception or blocking of content results in up to 7 years imprisonment.</li>
            </ul>
          `,
          checklist: `
            <h4>Compliance Risk Shield Checklist</h4>
            <ul>
              <li>[ ] CISO and Data Protection Officer (DPO) formally appointed and empowered.</li>
              <li>[ ] Cyber insurance policy active with adequate limits covering regulatory defense and fines.</li>
              <li>[ ] Breach notification procedures documented with strict 6-hour CERT-In compliance.</li>
            </ul>
          `
        }
      },
      {
        id: 'u1_t6',
        code: 'AUD-106',
        title: 'Scope of IT Compliance Audit & Scoping Methodology',
        category: 'Audit',
        tagColor: 'blue',
        icon: '📐',
        summary: [
          'Audit scope defines the exact boundaries, systems, networks, physical locations, and business processes under evaluation.',
          'Scoping methodology involves identifying regulatory drivers, mapping data flows (e.g., Cardholder Data Environment), and asset inventories.',
          'Exclusions must be strictly justified and documented; failing to include shadow IT or third-party cloud creates audit blindspots.',
          'Clear scoping prevents "scope creep", controls costs, and ensures alignment with auditor expectations.'
        ],
        takeaway: 'Core Rule: If data touches it, stores it, or transmits it, it is within the audit boundary.',
        detailContent: {
          concepts: `
            <h4>1. Defining the Scope for Audit</h4>
            <p>An IT compliance audit must operate within an agreed, legally binding boundary. Defining the scope requires systematically mapping all IT infrastructure elements that process, store, or transmit regulated information.</p>
            
            <h4>2. The 5 Scoping Dimensions</h4>
            <ul>
              <li><strong>Physical Boundaries:</strong> Corporate headquarters, remote branch offices, co-located data centers, disaster recovery sites.</li>
              <li><strong>Logical Boundaries:</strong> Subnets, VLANs, VPCs, firewall DMZs, cloud tenants (AWS, Azure, GCP).</li>
              <li><strong>Data Flow Boundaries:</strong> The complete lifecycle of protected information from ingestion and transit to storage and disposal.</li>
              <li><strong>System Components:</strong> Servers, endpoints, database instances, network switches, IoT devices, hypervisors.</li>
              <li><strong>People & Processes:</strong> System administrators, third-party contractors, software developers, and IT support desks.</li>
            </ul>

            <h4>3. Identifying Critical Requirements</h4>
            <p>Auditors identify critical requirements through the <em>Regulatory Applicability Matrix</em>, pinpointing mandatory controls based on industry sectors (e.g., healthcare -> HIPAA, banking -> RBI Cyber Security Framework, payments -> PCI-DSS).</p>
          `,
          legal: `
            <h4>Legal Scoping Considerations</h4>
            <p>Under cross-border privacy laws (GDPR, DPDP Act), cross-border transfers and international data repositories must be explicitly scoped. Incomplete scoping invalidates compliance attestations in court proceedings.</p>
          `,
          checklist: `
            <h4>Audit Scoping Verification Checklist</h4>
            <ul>
              <li>[ ] Network diagrams current, signed off by network architects, showing all perimeter firewalls.</li>
              <li>[ ] Regulated data flow diagrams documented and verified against database schemas.</li>
              <li>[ ] List of out-of-scope systems with technical isolation evidence (air gaps, firewall drop rules).</li>
            </ul>
          `
        }
      },
      {
        id: 'u1_t7',
        code: 'AUD-107',
        title: 'Audit Plan, Process Lifecycle & Audit Types',
        category: 'Audit',
        tagColor: 'blue',
        icon: '🗓️',
        summary: [
          '5-Phase Audit Process: 1) Planning & Scoping, 2) Fieldwork & Evidence Gathering, 3) Testing & Analysis, 4) Reporting, 5) Remediation Follow-up.',
          'Audit Plan details objectives, methodology, resource allocation, schedule, sampling criteria, and risk-based priorities.',
          'Key Types of IT Audits: Security, Compliance, Operational IT, Financial IT (ITGC/SOX), Forensic IT, and Application Audits.',
          'Forensic IT audits focus on evidentiary chain of custody, incident reconstruction, and expert witness testimony.'
        ],
        takeaway: 'A structured audit plan ensures reproducibility, defensibility, and thoroughness.',
        detailContent: {
          concepts: `
            <h4>1. The 5-Phase IT Audit Lifecycle</h4>
            <ol>
              <li><strong>Phase 1: Planning & Preliminary Review:</strong> Developing the Audit Charter, establishing scope, reviewing prior audit findings, and formulating the detailed audit program.</li>
              <li><strong>Phase 2: Fieldwork & Evidence Gathering:</strong> Conducting staff interviews, reviewing configurations, extracting transaction logs, observing operational workflows, and obtaining cryptographic hashes of evidentiary logs.</li>
              <li><strong>Phase 3: Testing & Control Evaluation:</strong> Performing compliance testing (did the control operate?) and substantive testing (are the underlying records accurate?).</li>
              <li><strong>Phase 4: Reporting & Recommendations:</strong> Compiling the draft report, conducting the exit conference with management, obtaining management remediation responses, and issuing the final report.</li>
              <li><strong>Phase 5: Follow-Up & Remediation Review:</strong> Re-testing non-conformities after the agreed remediation timeline (typically 30-90 days).</li>
            </ol>

            <h4>2. Classification of IT Audits</h4>
            <div class="table-wrapper">
              <table class="content-table">
                <thead>
                  <tr>
                    <th>Audit Type</th>
                    <th>Primary Focus</th>
                    <th>Key Standard / Framework</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>IT Security Audit</strong></td>
                    <td>Technical defenses, firewalls, identity management, encryption, patch state.</td>
                    <td>ISO 27001, CIS Benchmarks, NIST SP 800-53</td>
                  </tr>
                  <tr>
                    <td><strong>Compliance Audit</strong></td>
                    <td>Conformity with statutory laws, regulations, and industry mandates.</td>
                    <td>DPDP Act, HIPAA, PCI DSS, RBI Guidelines</td>
                  </tr>
                  <tr>
                    <td><strong>Operational IT Audit</strong></td>
                    <td>Efficiency, service level agreements (SLAs), capacity planning, change management.</td>
                    <td>ITIL, COBIT</td>
                  </tr>
                  <tr>
                    <td><strong>Financial IT Audit</strong></td>
                    <td>IT General Controls (ITGC) underpinning financial reporting accuracy.</td>
                    <td>SOX Section 404, ISA 315</td>
                  </tr>
                  <tr>
                    <td><strong>Forensic IT Audit</strong></td>
                    <td>Post-breach investigations, evidentiary integrity, fraud detection, root-cause.</td>
                    <td>ISO/IEC 27037, Indian Evidence Act Sec 65B</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `,
          legal: `
            <h4>Section 65B of Indian Evidence Act</h4>
            <p>During forensic and legal IT audits, all electronic evidence (computer logs, database records) must be extracted and preserved according to strict forensic protocols to satisfy the requirements of <strong>Section 65B</strong> for admissibility in Indian judicial courts.</p>
          `,
          checklist: `
            <h4>Audit Execution Checklist</h4>
            <ul>
              <li>[ ] Written and signed Audit Charter establishing authority.</li>
              <li>[ ] Audit timetable and resource plan agreed upon by stakeholders.</li>
              <li>[ ] Evidence tracking repository secured with role-based access and hashing.</li>
            </ul>
          `
        }
      },
      {
        id: 'u1_t8',
        code: 'CAT-108',
        title: 'Computer Assisted Audit Techniques (CAATs)',
        category: 'CAATs',
        tagColor: 'amber',
        icon: '💻',
        summary: [
          'CAATs are automated software tools (e.g., ACL, IDEA, Python scripts, SQL queries) that analyze 100% of transaction data.',
          'CAATs for Sampling: Enables statistically sound, unbiased random and stratified sampling from millions of records.',
          'CAATs for Application Reviews: Interrogates business logic, automated validation checks, and segregation of duties (SoD).',
          'CAATs for Application Controls: Uses Test Data, Integrated Test Facilities (ITF), and Parallel Simulation to audit core processing.'
        ],
        takeaway: 'CAATs revolutionize auditing by replacing small manual sample checks with comprehensive data analytics.',
        detailContent: {
          concepts: `
            <h4>1. What are CAATs?</h4>
            <p>Computer Assisted Audit Techniques (CAATs) comprise specialized software tools and analytical scripts utilized by IT and financial auditors to extract, transform, manipulate, and analyze massive volumes of electronic records. In modern enterprise environments with billions of database transactions, manual sampling is statistically inadequate; CAATs allow comprehensive 100% data population testing.</p>

            <h4>2. CAATs for Sampling</h4>
            <ul>
              <li><strong>Statistical Sampling:</strong> Generates mathematically defensible samples with specified confidence intervals (e.g., 95% confidence level with 5% margin of error).</li>
              <li><strong>Stratified Sampling:</strong> Divides transaction populations into sub-strata (e.g., transactions < ₹50k, ₹50k-₹5L, and > ₹5L), auditing 100% of high-risk transactions.</li>
              <li><strong>Monetary Unit Sampling (MUS):</strong> Biases sample selection towards higher monetary value items without ignoring smaller records.</li>
            </ul>

            <h4>3. CAATs for Application Reviews & Control Auditing</h4>
            <ul>
              <li><strong>Test Data Method:</strong> The auditor injects simulated input data (containing both valid and intentionally invalid test cases) into the client's live or staging application to verify if input controls reject unauthorized inputs.</li>
              <li><strong>Integrated Test Facility (ITF):</strong> Establishing a dummy test entity (e.g., a dummy branch or vendor account) inside the live production system to audit processing without disrupting actual financial ledgers.</li>
              <li><strong>Parallel Simulation:</strong> The auditor writes an independent program to duplicate the processing logic of the target system, runs the identical production dataset through both systems, and compares the outputs to uncover unauthorized logic or skimming.</li>
              <li><strong>Embedded Audit Modules (EAM):</strong> Continuous auditing hooks written directly into production code that trigger alerts whenever anomalous transactions occur (e.g., transactions exceeding approval limits after hours).</li>
            </ul>
          `,
          legal: `
            <h4>Defensibility in Fraud Trials</h4>
            <p>CAATs analyses, when accompanied by clear script documentation and verified cryptographic checksums (SHA-256), serve as powerful forensic evidence in fraud prosecutions under <strong>IPC Section 420</strong> and <strong>IT Act Section 66</strong>.</p>
          `,
          checklist: `
            <h4>CAATs Implementation Checklist</h4>
            <ul>
              <li>[ ] Read-only database access secured for audit extract jobs.</li>
              <li>[ ] Source and target record counts matched to verify data completeness.</li>
              <li>[ ] Cryptographic hashes verified before and after data transformation.</li>
            </ul>
          `
        }
      }
    ]
  },

  unit2: {
    id: 'unit2',
    number: 'UNIT - II',
    title: 'IT Infrastructure Domains, Baselines & Compliance',
    hours: '15 Hours',
    badgeClass: 'blue',
    description: 'Establishing security baselines and Acceptable Level of Risk (ALR), the 7 Domains of typical IT infrastructure, compliance requirements per domain, writing audit reports, and maximizing CIA.',
    topics: [
      {
        id: 'u2_t1',
        code: 'DOM-201',
        title: 'Acceptable Level of Risk (ALR) & Security Baselines',
        category: 'Baselines',
        tagColor: 'cyan',
        icon: '🛡️',
        summary: [
          'Acceptable Level of Risk (ALR) represents the residual risk threshold leadership willingly absorbs after deploying controls.',
          'Security Baselines are standardized minimum configuration profiles (e.g., CIS Benchmarks, NIST SP 800-70, DISA STIGs).',
          'Enforcing baselines eliminates configuration drift, closes default vendor vulnerabilities, and disables unneeded services.',
          'Baseline Lifecycle: Benchmark Selection -> Hardening -> GPO/Ansible Deployment -> Continuous Verification.'
        ],
        takeaway: 'Zero risk is impossible; baselines establish the defensible minimum standard of care.',
        detailContent: {
          concepts: `
            <h4>1. Minimum Acceptable Level of Risk (ALR)</h4>
            <p>No organization can achieve 100% security without halting all operations. The <em>Acceptable Level of Risk (ALR)</em>—closely tied to executive risk appetite—defines the boundary where the cost of further security controls exceeds the expected loss from potential security incidents. Auditing measures whether actual residual risk stays below this threshold.</p>

            <h4>2. Security Baselines Defined</h4>
            <p>A security baseline is an approved, formalized specification for configuring hardware, operating systems, and applications to a known, secure minimum standard. Leading baseline standards include:</p>
            <ul>
              <li><strong>CIS Benchmarks (Center for Internet Security):</strong> Globally recognized, consensus-based configuration guidelines covering Windows, Linux, AWS, Docker, and Cisco IOS.</li>
              <li><strong>DISA STIGs (Defense Information Systems Agency):</strong> Highly rigorous configuration standards mandated for military and defense systems.</li>
              <li><strong>Microsoft Security Baselines:</strong> Group Policy Objects (GPOs) and Intune profiles designed specifically for enterprise Windows environments.</li>
            </ul>

            <h4>3. Enforcing Baselines at Scale</h4>
            <p>Modern cybersecurity engineering enforces baselines through automation: Group Policy Objects (GPO), Microsoft Intune, Infrastructure-as-Code (Terraform), and configuration management tools (Ansible, Puppet). Automated scanners (e.g., OpenSCAP, Tenable) audit compliance daily.</p>
          `,
          legal: `
            <h4>Legal Due Care & Baseline Compliance</h4>
            <p>In cybersecurity litigation, baseline adherence is the benchmark for "reasonable security practices" under <strong>IT Act Section 43A</strong>. Failing to apply known baselines (like disabling default admin accounts) is classified in court as gross negligence.</p>
          `,
          checklist: `
            <h4>Baseline Audit Checklist</h4>
            <ul>
              <li>[ ] Approved CIS Level 1 baseline profiles selected for all OS builds.</li>
              <li>[ ] Automated drift detection tools alerting on unauthorized configuration modifications.</li>
              <li>[ ] Baseline deviation approval process with formal CISO sign-off and expiration dates.</li>
            </ul>
          `
        }
      },
      {
        id: 'u2_t2',
        code: 'DOM-202',
        title: 'The Seven Domains of IT Infrastructure',
        category: 'Domains',
        tagColor: 'blue',
        icon: '🌐',
        summary: [
          'A holistic cybersecurity architectural framework categorizing enterprise systems into 7 distinct security perimeters.',
          '1) User Domain, 2) Workstation Domain, 3) LAN Domain, 4) LAN-to-WAN Domain, 5) WAN Domain, 6) Remote Access Domain, 7) System/Application Domain.',
          'Enforces defense-in-depth: A failure in one domain must be contained by controls in adjacent domains.',
          'Auditors assess risks, drivers, components, and compliance mandates specifically for each individual domain.'
        ],
        takeaway: 'Every data packet and human action travels through these 7 domains—each requires distinct controls.',
        detailContent: {
          concepts: `
            <h4>The 7 Infrastructure Domains Breakdown</h4>
            <div class="table-wrapper">
              <table class="content-table">
                <thead>
                  <tr>
                    <th>Domain</th>
                    <th>Core Components</th>
                    <th>Primary Vulnerabilities</th>
                    <th>Primary Controls</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1. User Domain</strong></td>
                    <td>Employees, contractors, admins, guests.</td>
                    <td>Phishing, credential theft, social engineering, insider threat.</td>
                    <td>Security awareness, MFA, Acceptable Use Policy (AUP).</td>
                  </tr>
                  <tr>
                    <td><strong>2. Workstation Domain</strong></td>
                    <td>Laptops, desktop PCs, thin clients, tablets.</td>
                    <td>Malware, unpatched OS, lost/stolen hardware, USB exploits.</td>
                    <td>EDR, full disk encryption (BitLocker), USB blocking, AppLocker.</td>
                  </tr>
                  <tr>
                    <td><strong>3. LAN Domain</strong></td>
                    <td>Internal switches, local routers, Wi-Fi APs, Ethernet cables.</td>
                    <td>ARP poisoning, unauthorized packet sniffing, rogue access points.</td>
                    <td>802.1X NAC, VLAN segmentation, port security, WPA3-Enterprise.</td>
                  </tr>
                  <tr>
                    <td><strong>4. LAN-to-WAN Domain</strong></td>
                    <td>Perimeter firewalls, DMZ, IDS/IPS, proxy servers.</td>
                    <td>External port scans, DDoS, unauthorized egress, web exploits.</td>
                    <td>Next-Gen Firewalls, egress filtering, TLS inspection, DMZ isolation.</td>
                  </tr>
                  <tr>
                    <td><strong>5. WAN Domain</strong></td>
                    <td>Border routers, leased lines, MPLS, SD-WAN, ISP links.</td>
                    <td>Eavesdropping on transit, BGP hijacking, link denial of service.</td>
                    <td>IPsec/MACsec encryption, redundant ISP carriers, BGP-SEC.</td>
                  </tr>
                  <tr>
                    <td><strong>6. Remote Access Domain</strong></td>
                    <td>VPN gateways, Zero Trust Network Access (ZTNA), remote users.</td>
                    <td>Brute force VPN attacks, compromised home networks, session hijacking.</td>
                    <td>MFA enforcement, device posture checks, conditional access, ZTNA.</td>
                  </tr>
                  <tr>
                    <td><strong>7. System/App Domain</strong></td>
                    <td>Web servers, database servers, ERP, cloud storage.</td>
                    <td>SQL injection, unpatched CVEs, privilege escalation, data leakage.</td>
                    <td>WAF, least privilege DB access, DAST/SAST, automated patch cycles.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `,
          legal: `
            <h4>Forensic Domain Mapping</h4>
            <p>During breach root-cause analysis, forensic analysts map the attacker's path through these 7 domains—from initial entry (User/Workstation) to lateral movement (LAN/WAN) and eventual data exfiltration (System/Application).</p>
          `,
          checklist: `
            <h4>Domain Perimeter Checklist</h4>
            <ul>
              <li>[ ] Logical boundaries between all 7 domains enforced by firewalls or ACLs.</li>
              <li>[ ] Independent monitoring and log ingestion enabled for each domain into SIEM.</li>
            </ul>
          `
        }
      },
      {
        id: 'u2_t3',
        code: 'REP-203',
        title: 'Writing the IT Infrastructure Audit Report',
        category: 'Audit',
        tagColor: 'emerald',
        icon: '📝',
        summary: [
          'The definitive formal deliverable communicating technical findings, business risks, and remediation priorities.',
          'Key Sections: Executive Summary, Scope & Methodology, Findings Matrix, Risk Ratings, Recommendations, Management Responses.',
          'Findings Matrix format: Condition (what is), Criteria (what should be), Cause (why), Consequence (impact), Corrective Action.',
          'Must be objective, evidence-backed, and understandable by both technical engineers and C-level board members.'
        ],
        takeaway: 'An audit is only as valuable as the report it generates—clarity drives remediation action.',
        detailContent: {
          concepts: `
            <h4>1. Structure of a High-Impact Audit Report</h4>
            <ul>
              <li><strong>Executive Summary:</strong> High-level overview intended for the Board of Directors and C-suite, highlighting overall security posture, critical risk indicators, and strategic priorities.</li>
              <li><strong>Audit Charter, Scope & Limitations:</strong> Detailed statement of authorized systems, testing dates, excluded components, and sampling methodologies.</li>
              <li><strong>Methodology:</strong> Standardized frameworks applied (e.g., ISO 27001 Annex A, NIST CSF).</li>
              <li><strong>Detailed Findings & Observations:</strong> Technical write-ups of every discovered gap.</li>
              <li><strong>Management Response & Action Plan:</strong> Accountable owners, planned remediation steps, and committed deadlines.</li>
            </ul>

            <h4>2. The 5 Cs of Audit Finding Formulation</h4>
            <p>Every finding in an infrastructure audit report must answer the <strong>5 Cs</strong>:</p>
            <ol>
              <li><strong>Condition:</strong> What was observed during testing? (e.g., "30% of workstations lack BitLocker encryption.")</li>
              <li><strong>Criteria:</strong> What standard, law, or policy was violated? (e.g., "Policy POL-SEC-04 requires full disk encryption on all mobile assets.")</li>
              <li><strong>Cause:</strong> Why did this gap occur? (e.g., "The automated SCCM deployment task sequence failed on recent hardware revisions.")</li>
              <li><strong>Consequence / Impact:</strong> What is the business and legal exposure? (e.g., "A stolen laptop results in direct breach of sensitive customer data and potential ₹250 Cr DPDP penalty.")</li>
              <li><strong>Corrective Action / Recommendation:</strong> How should management fix it? (e.g., "Deploy BitLocker enforcement via Microsoft Intune and restrict domain logon until encrypted.")</li>
            </ol>
          `,
          legal: `
            <h4>Report Confidentiality & Legal Privilege</h4>
            <p>Infrastructure audit reports contain detailed maps of an organization's vulnerabilities. If leaked, attackers can use them as blueprints. Therefore, reports are marked <strong>Strictly Confidential / Attorney-Client Privileged</strong> to protect them from public discovery in lawsuits.</p>
          `,
          checklist: `
            <h4>Report Review Checklist</h4>
            <ul>
              <li>[ ] All findings corroborated by dated evidence (hashes, screenshots).</li>
              <li>[ ] Risk severity assigned using consistent scoring (CVSS or Qualitative Matrix).</li>
              <li>[ ] Management responses include specific remediation dates and named owners.</li>
            </ul>
          `
        }
      },
      {
        id: 'u2_t4',
        code: 'DOM-204',
        title: 'Compliance in User & Workstation Domains (Maximizing CIA)',
        category: 'Domains',
        tagColor: 'cyan',
        icon: '💻',
        summary: [
          'User Domain drivers: Acceptable Use Policy (AUP), continuous phishing simulations, least privilege access, offboarding SLAs.',
          'Workstation Domain drivers: Centralized endpoint management, host-based firewalls, USB restrictions, automated patching.',
          'Maximizing Confidentiality: Hardware TPM 2.0 full-disk encryption (BitLocker/FileVault), screen privacy filters, screen timeouts.',
          'Maximizing Integrity & Availability: Application whitelisting (AppLocker/WDAC), EDR agents, automated endpoint backups.'
        ],
        takeaway: 'Endpoints and users represent over 80% of initial breach vectors—hardening them is paramount.',
        detailContent: {
          concepts: `
            <h4>1. Compliance within the User Domain</h4>
            <p>The User Domain encompasses all humans interacting with the IT infrastructure. Humans are inherently vulnerable to social engineering, credential stuffing, and unintentional error.</p>
            <ul>
              <li><strong>Business Drivers:</strong> Regulatory compliance (DPDP, ISO 27001 Clause 7.2), mitigating insider fraud, safeguarding intellectual property.</li>
              <li><strong>Key Components:</strong> Employees, contractors, remote consultants, HR records, privileged admin accounts.</li>
              <li><strong>Auditing Controls:</strong> Background screening records, signed AUP agreements, phishing simulation failure rates, timely account de-provisioning upon employee termination (within 24 hours).</li>
            </ul>

            <h4>2. Compliance within the Workstation Domain</h4>
            <p>Workstations represent the physical gateway into corporate systems. They must be treated as untrusted endpoints until verified.</p>
            <ul>
              <li><strong>Maximizing Confidentiality (C):</strong> Full Disk Encryption (FDE) using AES-256 (BitLocker/FileVault) with keys stored in cloud AD; disabling USB mass storage to prevent data leakage.</li>
              <li><strong>Maximizing Integrity (I):</strong> Software Execution Control (AppLocker or Windows Defender Application Control) allowing only cryptographically signed enterprise software; Endpoint Detection & Response (EDR) to detect tampering.</li>
              <li><strong>Maximizing Availability (A):</strong> Standardized system images, automated endpoint configuration backups, hardware maintenance SLAs with 4-hour replacement.</li>
            </ul>
          `,
          legal: `
            <h4>Legal Requirements for Lost Workstations</h4>
            <p>Under global data privacy laws, if an unencrypted laptop containing personal data is stolen, it constitutes an immediate reportable data breach. However, if the device was verified to have <strong>full-disk encryption active</strong>, many privacy regulations provide a "Safe Harbor" exemption from public breach disclosure.</p>
          `,
          checklist: `
            <h4>Workstation Compliance Checklist</h4>
            <ul>
              <li>[ ] BitLocker 256-bit encryption active on 100% of portable laptops.</li>
              <li>[ ] USB storage devices blocked by default via Group Policy / EDR.</li>
              <li>[ ] Standard user accounts lack local administrator privileges.</li>
            </ul>
          `
        }
      },
      {
        id: 'u2_t5',
        code: 'DOM-205',
        title: 'Compliance in LAN & WAN Domains (Penetration Testing)',
        category: 'Domains',
        tagColor: 'blue',
        icon: '🖧',
        summary: [
          'LAN Compliance: 802.1X port authentication, micro-segmentation, VLAN isolation, DHCP snooping, and ARP inspection.',
          'WAN Compliance: Encrypted inter-site tunnels (IPsec), redundant border routers, BGP security, anti-DDoS mitigation.',
          'Penetration Testing: Validating technical controls through ethical simulated cyberattacks (Black, Grey, White box).',
          'Validating Configurations: Comparing live switch/router running-configs against hardening baselines (e.g., CIS Cisco Benchmark).'
        ],
        takeaway: 'Network segmentation prevents a compromised workstation from infecting the entire enterprise.',
        detailContent: {
          concepts: `
            <h4>1. Compliance within the LAN Domain</h4>
            <p>The Local Area Network (LAN) provides internal high-speed communication. A flat, unsegmented LAN allows an attacker who compromises a single PC to freely pivot to database servers and domain controllers.</p>
            <ul>
              <li><strong>Network Access Control (802.1X):</strong> Requires certificates or credentials before an Ethernet switch port or Wi-Fi AP grants network connectivity.</li>
              <li><strong>VLAN Segmentation:</strong> Separates corporate workstations, servers, VoIP phones, guest Wi-Fi, and IoT devices into distinct broadcast domains.</li>
              <li><strong>Layer 2 Hardening:</strong> Enabling DHCP Snooping, Dynamic ARP Inspection (DAI), and BPDU Guard to defeat MITM attacks.</li>
            </ul>

            <h4>2. Compliance within the WAN Domain</h4>
            <p>The Wide Area Network (WAN) connects geographically dispersed corporate sites across untrusted public carriers.</p>
            <ul>
              <li><strong>Encryption in Transit:</strong> Mandating IPsec VPNs with AES-GCM-256 for all cross-site traffic.</li>
              <li><strong>Penetration Testing & Configuration Validation:</strong> Regular external penetration testing (at least annually and after major architecture changes) to identify open ports, misconfigured firewalls, and exposed administrative interfaces.</li>
              <li><strong>Configuration Auditing:</strong> Comparing running configurations against CIS Benchmarks (e.g., disabling Telnet/HTTP, enforcing SSHv2, restricting SNMP to SNMPv3 with encryption).</li>
            </ul>
          `,
          legal: `
            <h4>Regulatory Pen-Testing Mandates</h4>
            <p><strong>PCI-DSS Requirement 11.3</strong> and <strong>RBI Cybersecurity Guidelines</strong> mandate external and internal penetration testing at least annually and after every significant network change by certified CREST/OSCP testers.</p>
          `,
          checklist: `
            <h4>Network Domain Audit Checklist</h4>
            <ul>
              <li>[ ] Zero flat networks: Critical servers isolated in dedicated VLANs with stateful firewall inspection.</li>
              <li>[ ] Default SNMP community strings ("public"/"private") changed or SNMPv3 enforced.</li>
              <li>[ ] Annual external penetration testing report with verified remediation of critical findings.</li>
            </ul>
          `
        }
      },
      {
        id: 'u2_t6',
        code: 'DOM-206',
        title: 'Remote Access & Application Domain (Patch & Vuln Mgmt)',
        category: 'Domains',
        tagColor: 'purple',
        icon: '☁️',
        summary: [
          'Remote Access: Zero Trust Network Access (ZTNA), Multi-Factor Authentication (MFA), context-aware conditional access.',
          'Application Domain: Web servers, API gateways, database engines, Web Application Firewalls (WAF).',
          'Vulnerability Management: Automated SAST/DAST testing against OWASP Top 10 vulnerabilities (SQLi, XSS, Broken Auth).',
          'Patch Management Lifecycle: Vulnerability Announcement -> Risk Triage -> Staging Test -> Production Rollout -> Validation.'
        ],
        takeaway: 'Unpatched applications are the #1 entry point for automated ransomware and exploitation campaigns.',
        detailContent: {
          concepts: `
            <h4>1. Remote Access Compliance & Modern Zero Trust</h4>
            <p>Traditional perimeter VPNs granted broad internal network access once authenticated. Modern compliance demands <strong>Zero Trust Network Access (ZTNA)</strong>, which assumes the internal network is hostile and enforces "never trust, always verify":</p>
            <ul>
              <li><strong>Multi-Factor Authentication (MFA):</strong> Enforcing hardware FIDO2 security keys or authenticator apps (eliminating SMS-based OTPs).</li>
              <li><strong>Device Posture Validation:</strong> Verifying endpoint health (antivirus running, OS up to date, disk encrypted) before granting access.</li>
              <li><strong>Least Privilege Application Access:</strong> Users connect solely to specific approved web applications, never to the underlying subnet.</li>
            </ul>

            <h4>2. Application Server Vulnerability Management</h4>
            <p>Securing enterprise applications requires embedding security into the Software Development Lifecycle (DevSecOps):</p>
            <ul>
              <li><strong>Static Application Security Testing (SAST):</strong> Analyzing source code in CI/CD pipelines to catch vulnerabilities before compilation.</li>
              <li><strong>Dynamic Application Security Testing (DAST):</strong> Black-box automated testing of running web applications to identify runtime vulnerabilities (e.g., OWASP Top 10 flaws like SQL Injection, SSRF, IDOR).</li>
              <li><strong>Web Application Firewall (WAF):</strong> Inspecting incoming HTTP/HTTPS traffic to filter malicious payloads in real time.</li>
            </ul>

            <h4>3. Application Patch Management Lifecycle</h4>
            <ol>
              <li><strong>Identification:</strong> Monitoring CVE feeds, NVD, and vendor security advisories.</li>
              <li><strong>Prioritization:</strong> Scoring urgency using the Common Vulnerability Scoring System (CVSS) and Known Exploited Vulnerabilities (KEV) catalog.</li>
              <li><strong>Testing:</strong> Deploying patches to an isolated staging environment to verify stability and eliminate software regression.</li>
              <li><strong>Deployment:</strong> Rolling out updates across production within mandated SLAs (e.g., Critical CVSS > 9 within 7 days).</li>
              <li><strong>Verification:</strong> Re-scanning systems to confirm patch installation.</li>
            </ol>
          `,
          legal: `
            <h4>The Equifax Case Precedent</h4>
            <p>The historic 2017 Equifax breach occurred because an Apache Struts vulnerability (CVE-2017-5638) remained unpatched for over 60 days after a patch was released. The FTC settlement cost Equifax over <strong>$700 Million</strong>, legally cementing timely patch management as a mandatory fiduciary duty.</p>
          `,
          checklist: `
            <h4>Patch & App Security Checklist</h4>
            <ul>
              <li>[ ] Emergency patching SLA defined: Critical CVEs patched within 7 days.</li>
              <li>[ ] MFA enforced on 100% of external remote access portals and administrative consoles.</li>
              <li>[ ] Automated WAF deployed in blocking mode in front of all internet-facing web apps.</li>
            </ul>
          `
        }
      }
    ]
  },

  unit3: {
    id: 'unit3',
    number: 'UNIT - III',
    title: 'Risk Analysis & Business Continuity Planning (BCP)',
    hours: '15 Hours',
    badgeClass: 'amber',
    description: 'Quantitative and qualitative risk analysis, threat and vulnerability identification, risk response strategies, BCP lifecycle, Business Impact Analysis (BIA), and recovery metrics (RTO, RPO, MTD).',
    topics: [
      {
        id: 'u3_t1',
        code: 'RSK-301',
        title: 'Introduction to Risk Analysis & Mathematical Models',
        category: 'Risk Analysis',
        tagColor: 'amber',
        icon: '📊',
        summary: [
          'Risk is the probability of a threat actor exploiting a vulnerability, causing financial or operational impact to an asset.',
          'Fundamental Risk Formula: Risk = Threat × Vulnerability × Asset Value (Impact).',
          'Quantitative Risk Analysis: Uses concrete financial data (Single Loss Expectancy [SLE], Annualized Loss Expectancy [ALE]).',
          'Qualitative Risk Analysis: Uses subjective matrices (Likelihood × Impact) categorized into High, Medium, and Low risk bands.'
        ],
        takeaway: 'Risk analysis translates technical cyber threats into financial language understood by executive boards.',
        detailContent: {
          concepts: `
            <h4>1. What is Risk Analysis?</h4>
            <p>Risk analysis is the systematic process of identifying, evaluating, and estimating the cyber risks faced by an organization. It forms the intellectual cornerstone of all cybersecurity governance and compliance decisions, ensuring security budgets are spent where potential financial losses are greatest.</p>

            <h4>2. Quantitative Risk Analysis Equations</h4>
            <p>Quantitative analysis assigns monetary values to all risk components:</p>
            <ul>
              <li><strong>Asset Value (AV):</strong> Total cost to replace, restore, or rebuild the asset, plus business value.</li>
              <li><strong>Exposure Factor (EF):</strong> Percentage of asset value lost if a specific threat is realized (0.0 to 1.0).</li>
              <li><strong>Single Loss Expectancy (SLE):</strong> Financial loss expected each time an incident occurs:<br>
                <code>SLE = Asset Value (AV) × Exposure Factor (EF)</code></li>
              <li><strong>Annualized Rate of Occurrence (ARO):</strong> Estimated frequency of the incident occurring per calendar year.</li>
              <li><strong>Annualized Loss Expectancy (ALE):</strong> Total expected annual monetary loss from the threat:<br>
                <code>ALE = SLE × ARO</code></li>
              <li><strong>Cost-Benefit Analysis of Controls:</strong><br>
                <code>Control Value = (ALE_before - ALE_after) - Annual Cost of Control</code></li>
            </ul>

            <h4>3. Qualitative Risk Analysis</h4>
            <p>When precise monetary data is unavailable, qualitative analysis rates risks using expert judgment and a $5 \times 5$ Likelihood vs Impact rating matrix, prioritizing risks into colored heatmaps (Critical, High, Medium, Low).</p>
          `,
          legal: `
            <h4>Statutory Requirements for Risk Analysis</h4>
            <p>ISO/IEC 27001 (Clause 6.1.2) and the US NIST Risk Management Framework (SP 800-37) mandate formal risk assessments before deploying any major information system. Demonstrating a documented risk assessment is crucial to rebutting charges of negligence.</p>
          `,
          checklist: `
            <h4>Risk Analysis Formula Checklist</h4>
            <ul>
              <li>Calculate SLE: AV × EF.</li>
              <li>Calculate ALE: SLE × ARO.</li>
              <li>Ensure annual cost of security control does not exceed ALE savings.</li>
            </ul>
          `
        }
      },
      {
        id: 'u3_t2',
        code: 'RSK-302',
        title: 'Risk Identification & Assessment Methodologies',
        category: 'Risk Analysis',
        tagColor: 'amber',
        icon: '🎯',
        summary: [
          'Risk Identification systematically inventories assets, threat agents (nation-state, criminal, insider), and vulnerabilities.',
          'Assesses likelihood of occurrence and severity of business consequence across operational, financial, and legal pillars.',
          'Prominent frameworks: NIST SP 800-30, ISO/IEC 27005, OCTAVE (Allegheny), and FAIR (Factor Analysis of Information Risk).',
          'Maintains an enterprise Risk Register as a living artifact detailing vulnerabilities, owners, and risk scores.'
        ],
        takeaway: 'You cannot manage or mitigate a risk that has not been formally identified and documented.',
        detailContent: {
          concepts: `
            <h4>1. Risk Identification Process</h4>
            <p>Risk identification involves finding, recognizing, and describing the risks that could prevent an organization from achieving its operational objectives.</p>
            <ul>
              <li><strong>Asset Valuation:</strong> Cataloging critical hardware, proprietary databases, customer PII, intellectual property, and public brand reputation.</li>
              <li><strong>Threat Modeling:</strong> Identifying threat actors (cybercriminals, hacktivists, hostile nation-states, disgruntled insiders) and their motivations and capabilities.</li>
              <li><strong>Vulnerability Assessment:</strong> Pinpointing technical flaws, process oversights, or lack of physical security controls.</li>
            </ul>

            <h4>2. Leading Risk Assessment Frameworks</h4>
            <ul>
              <li><strong>NIST SP 800-30:</strong> The US federal gold standard guide for conducting risk assessments across federal and enterprise systems.</li>
              <li><strong>ISO/IEC 27005:</strong> International standard providing comprehensive guidelines for information security risk management within an ISMS.</li>
              <li><strong>OCTAVE (Operationally Critical Threat, Asset, and Vulnerability Evaluation):</strong> Developed by Carnegie Mellon SEI; a business-centric risk assessment methodology.</li>
              <li><strong>FAIR (Factor Analysis of Information Risk):</strong> The premier international framework for quantitative modeling of operational cyber risks.</li>
            </ul>
          `,
          legal: `
            <h4>Forensic Evidentiary Value of Risk Registers</h4>
            <p>During breach regulatory enforcement actions, regulators subpoena the organization's historic <em>Risk Register</em>. If a critical vulnerability was identified months before the breach but ignored without management mitigation, regulators treat it as gross negligence.</p>
          `,
          checklist: `
            <h4>Risk Identification Checklist</h4>
            <ul>
              <li>[ ] All organizational IT and information assets cataloged and assigned an asset owner.</li>
              <li>[ ] External and internal threat scenarios mapped against threat intelligence feeds.</li>
              <li>[ ] Risk Register updated at least semi-annually and presented to the audit committee.</li>
            </ul>
          `
        }
      },
      {
        id: 'u3_t3',
        code: 'RSK-303',
        title: 'Risk Response, Mitigation Strategies & Residual Risk',
        category: 'Mitigation',
        tagColor: 'emerald',
        icon: '🛡️',
        summary: [
          'The 4 Primary Risk Treatment Strategies: 1) Avoidance, 2) Mitigation/Reduction, 3) Transference, 4) Acceptance.',
          'Risk Avoidance: Terminating the risky activity or retiring the vulnerable system altogether.',
          'Risk Mitigation: Deploying administrative, technical, and physical safeguards to lower likelihood or impact.',
          'Risk Transference: Purchasing Cyber Liability Insurance or outsourcing operations to SLA-backed third parties.',
          'Residual Risk: The remaining risk after controls are applied (Residual Risk = Inherent Risk - Impact of Controls).'
        ],
        takeaway: 'Residual risk must always sit below the organization’s Acceptable Level of Risk (ALR).',
        detailContent: {
          concepts: `
            <h4>1. The Four Pillars of Risk Treatment</h4>
            <ul>
              <li><strong>1. Risk Avoidance:</strong> Completely eliminating the risk exposure by ceasing the business activity. Example: Deciding not to store credit card data locally to avoid PCI-DSS scope, using tokenized payment gateways instead.</li>
              <li><strong>2. Risk Mitigation (Reduction):</strong> Implementing security controls and countermeasures to reduce vulnerability or impact. Example: Deploying multi-factor authentication (MFA) and endpoint encryption to diminish credential theft risk.</li>
              <li><strong>3. Risk Transference (Sharing):</strong> Shifting financial and operational risk burden to a third party. Example: Purchasing comprehensive Cyber Insurance policies covering ransomware extortion and forensic investigations, or utilizing cloud providers under strict SLAs.</li>
              <li><strong>4. Risk Acceptance:</strong> Formally acknowledging and retaining the risk without additional controls because the cost of countermeasures outweighs potential loss. Must be formally signed off by executive leadership.</li>
            </ul>

            <h4>2. Inherent Risk vs Residual Risk</h4>
            <div class="callout-box">
              <p><strong>Inherent (Gross) Risk:</strong> The raw level of risk present in a system before any security controls or safeguards are applied.</p>
              <p><strong>Residual (Net) Risk:</strong> The risk remaining after security countermeasures, policies, and safeguards are deployed. Mathematically: <code>Residual Risk = Inherent Risk - Countermeasures</code>.</p>
            </div>
            <p>If Residual Risk > Acceptable Level of Risk (ALR), management must apply further controls or revise operational strategy.</p>
          `,
          legal: `
            <h4>Cyber Insurance Warranty Clauses</h4>
            <p>Modern cyber insurance underwriters enforce strict warranty conditions. If an insured organization claims it mitigates risk via MFA and offline backups on its application, but a ransomware audit discovers MFA was disabled on remote portals, the insurer can legally deny multi-million dollar payouts.</p>
          `,
          checklist: `
            <h4>Risk Treatment Sign-Off Checklist</h4>
            <ul>
              <li>[ ] Every accepted risk has written justification and C-level executive signature.</li>
              <li>[ ] Controls mapped to specific vulnerabilities to verify reduction in residual risk.</li>
              <li>[ ] Cyber insurance policy terms reviewed to ensure compliance with policy warranties.</li>
            </ul>
          `
        }
      },
      {
        id: 'u3_t4',
        code: 'RSK-304',
        title: 'Risk Reporting, Governance & Heatmaps',
        category: 'Governance',
        tagColor: 'blue',
        icon: '📈',
        summary: [
          'Effective communication of cyber risk posture to executive management, the Board, and regulatory stakeholders.',
          'Risk Heatmaps: Visual matrix graphing likelihood against severity, clearly categorizing risks into color-coded tiers.',
          'Key Risk Indicators (KRIs): Forward-looking metrics predicting emerging cyber risks (e.g., number of unpatched CVEs > 30 days).',
          'Key Performance Indicators (KPIs): Backward-looking metrics measuring control effectiveness (e.g., Mean Time to Detect [MTTD]).'
        ],
        takeaway: 'Good risk reporting empowers non-technical board directors to make informed cybersecurity budget decisions.',
        detailContent: {
          concepts: `
            <h4>1. Purpose of Risk Reporting</h4>
            <p>Technical security teams often generate detailed technical scan outputs that overwhelm senior executives. Risk reporting transforms raw vulnerability and incident data into strategic business intelligence, highlighting how cyber risks threaten corporate objectives, revenue streams, and legal compliance.</p>

            <h4>2. Constructing the Risk Heatmap</h4>
            <p>A standard enterprise Risk Heatmap plots identified risks along two axes:</p>
            <ul>
              <li><strong>X-Axis (Likelihood):</strong> 1 (Rare), 2 (Unlikely), 3 (Possible), 4 (Likely), 5 (Almost Certain).</li>
              <li><strong>Y-Axis (Impact):</strong> 1 (Insignificant), 2 (Minor), 3 (Moderate), 4 (Major), 5 (Catastrophic).</li>
              <li><strong>Risk Score:</strong> <code>Score = Likelihood × Impact (Scale 1 to 25)</code>.
                <ul>
                  <li>Score 1-6: Low Risk (Green) -> Acceptable.</li>
                  <li>Score 8-12: Medium Risk (Yellow) -> Requires monitoring.</li>
                  <li>Score 15-25: High / Critical Risk (Red) -> Requires immediate executive intervention and mandatory remediation.</li>
                </ul>
              </li>
            </ul>

            <h4>3. KRIs vs KPIs in Governance</h4>
            <p><strong>KRIs (Key Risk Indicators)</strong> are predictive early-warning indicators (e.g., employee turnover rate in IT security team, increase in outbound encrypted data volume). <strong>KPIs</strong> measure historical performance (e.g., percentage of systems patched within SLA).</p>
          `,
          legal: `
            <h4>SEC & SEBI Disclosure Requirements</h4>
            <p>Global securities regulators (US SEC, SEBI in India) now mandate periodic corporate filings detailing cybersecurity governance, board oversight mechanisms, and material cyber risks directly to investors.</p>
          `,
          checklist: `
            <h4>Board Reporting Checklist</h4>
            <ul>
              <li>[ ] Top 10 Enterprise Cyber Risks presented in quarterly board packages.</li>
              <li>[ ] KRI thresholds defined with automatic notification to the CISO when breached.</li>
              <li>[ ] Technical jargon replaced with financial loss metrics in executive summaries.</li>
            </ul>
          `
        }
      },
      {
        id: 'u3_t5',
        code: 'BCP-305',
        title: 'Business Continuity Planning (BCP) & BCP Lifecycle',
        category: 'BCP',
        tagColor: 'purple',
        icon: '🔄',
        summary: [
          'BCP is a proactive strategic framework ensuring critical business functions continue operating during and after disruptions.',
          'BCP covers people, facilities, supply chains, customer communications, and IT systems (broader than IT Disaster Recovery).',
          '6-Phase BCP Lifecycle: 1) Project Initiation, 2) Business Impact Analysis, 3) Strategy Formulation, 4) Plan Development, 5) Testing, 6) Maintenance.',
          'Ensures operational resilience, preserves customer trust, and fulfills statutory continuous operation mandates.'
        ],
        takeaway: 'BCP is about business survival; Disaster Recovery (DR) is the technical IT subset that restores systems.',
        detailContent: {
          concepts: `
            <h4>1. What is Business Continuity Planning (BCP)?</h4>
            <p>Business Continuity Planning (BCP) is an enterprise-wide, proactive strategic management framework designed to identify potential operational threats and build organizational resilience. Its overarching goal is ensuring that an organization can maintain minimum acceptable levels of critical business functions during and immediately after an unexpected disruption (such as pandemics, power grid failures, cyberattacks, or natural disasters).</p>

            <h4>2. The 6-Phase BCP Lifecycle</h4>
            <ol>
              <li><strong>Phase 1: Project Initiation & Governance:</strong> Securing executive charter, establishing the BCP steering committee, defining scope, and allocating budgetary resources.</li>
              <li><strong>Phase 2: Business Impact Analysis (BIA):</strong> Identifying Critical Business Functions (CBFs), evaluating qualitative and quantitative losses over outage periods, and establishing recovery targets (RTO, RPO, MTD).</li>
              <li><strong>Phase 3: Continuity Strategy Formulation:</strong> Evaluating cost-effective continuity options (e.g., alternate facilities, remote work models, cloud redundancy, vendor agreements).</li>
              <li><strong>Phase 4: Plan Development & Documentation:</strong> Writing standard operating procedures (SOPs), emergency incident command hierarchies, call trees, and operational manuals.</li>
              <li><strong>Phase 5: Testing, Training & Exercises:</strong> Validating plan effectiveness via drills (tabletop exercises, simulations, full failover interruptions) and educating personnel.</li>
              <li><strong>Phase 6: Maintenance & Continuous Review:</strong> Updating the plan at least annually or whenever significant organizational or infrastructural changes occur.</li>
            </ol>
          `,
          legal: `
            <h4>Regulatory BCP Mandates</h4>
            <p>Under <strong>RBI Guidelines on Business Continuity Planning</strong> and <strong>IRDAI mandates</strong>, financial institutions that fail to maintain tested, operational BCPs face immediate supervisory action, monetary penalties, and board sanctions.</p>
          `,
          checklist: `
            <h4>BCP Lifecycle Verification Checklist</h4>
            <ul>
              <li>[ ] BCP Steering Committee designated with senior operational leaders.</li>
              <li>[ ] Comprehensive BIA conducted and refreshed within the last 12 months.</li>
              <li>[ ] Emergency call cascade tested with documented verification of contact details.</li>
            </ul>
          `
        }
      },
      {
        id: 'u3_t6',
        code: 'BCP-306',
        title: 'Core BCP Metrics: RTO, RPO, MTD & Strategies',
        category: 'BCP',
        tagColor: 'purple',
        icon: '⏱️',
        summary: [
          'MTD (Maximum Tolerable Downtime): The absolute maximum duration a business process can be offline before fatal damage.',
          'RTO (Recovery Time Objective): The target time within which systems must be restored after outage (RTO < MTD).',
          'RPO (Recovery Point Objective): The maximum acceptable data loss measured in time (e.g., max 15 minutes of transactions).',
          'WRT (Work Recovery Time): The time needed after technical restoration to verify data integrity and resume normal business.',
          'Continuity Strategies: Split operations, remote workforce activation, warm/hot secondary sites, redundant suppliers.'
        ],
        takeaway: 'Formula for Survival: RTO + WRT must always be less than or equal to MTD.',
        detailContent: {
          concepts: `
            <h4>1. Critical BCP Time Metrics</h4>
            <p>The Business Impact Analysis (BIA) calculates four interdependent metrics that drive all continuity investments:</p>
            <ul>
              <li><strong>Maximum Tolerable Downtime (MTD):</strong> The maximum duration of operational downtime an enterprise process can endure before experiencing catastrophic, irreversible damage (bankruptcy, irreparable brand loss, regulatory license revocation).</li>
              <li><strong>Recovery Time Objective (RTO):</strong> The targeted timeframe following an incident within which technical systems and infrastructure must be restored. Mathematically, <code>RTO &le; MTD</code>.</li>
              <li><strong>Recovery Point Objective (RPO):</strong> The maximum tolerable amount of data loss resulting from an incident, measured backward in time from the moment of disruption. For financial core databases, RPO is often near-zero; for general file servers, RPO might be 24 hours.</li>
              <li><strong>Work Recovery Time (WRT):</strong> The time required after systems are technically online to inspect databases, catch up manual paperwork backlogs, verify integrity, and transition to normal business.</li>
              <li><strong>Golden Rule of Resilience:</strong><br>
                <code>RTO + WRT &le; MTD</code>
              </li>
            </ul>

            <h4>2. Business Continuity Strategies</h4>
            <ul>
              <li><strong>Workforce Redundancy:</strong> Distributed operations across multiple geographical branches; cross-training staff on critical roles.</li>
              <li><strong>Remote Work Readiness:</strong> Pre-provisioned secure virtual desktop infrastructure (VDI/ZTNA) allowing staff to work seamlessly from home.</li>
              <li><strong>Supply Chain Diversity:</strong> Dual-sourcing essential components and hardware vendors to withstand third-party failures.</li>
            </ul>
          `,
          legal: `
            <h4>SLA Commitments & Liquidated Damages</h4>
            <p>Commercial customer contracts incorporate RTO and RPO into Service Level Agreements (SLAs). Violating committed RTO during an outage can trigger severe financial penalties and breach of contract lawsuits.</p>
          `,
          checklist: `
            <h4>Metric Validation Checklist</h4>
            <ul>
              <li>[ ] Critical business processes categorized by MTD tier (Tier 0: < 1 hr, Tier 1: < 4 hrs, Tier 2: < 24 hrs).</li>
              <li>[ ] Database backup frequencies aligned with committed RPO targets.</li>
              <li>[ ] Recovery plans demonstrate that RTO + WRT does not exceed MTD.</li>
            </ul>
          `
        }
      }
    ]
  },

  unit4: {
    id: 'unit4',
    number: 'UNIT - IV',
    title: 'Disaster Recovery, Cyber Law, Regulations & Standards',
    hours: '15 Hours',
    badgeClass: 'rose',
    description: 'Disaster Recovery planning, recovery site tiers, classification of cybercrime, the Indian IT Act 2000 (and 2008 amendments), CSAM laws, DPDP Act 2023, ISO 27001, COBIT, SOC, HIPAA, and landmark case studies.',
    topics: [
      {
        id: 'u4_t1',
        code: 'DRP-401',
        title: 'Disaster Recovery Planning & Recovery Site Architectures',
        category: 'Disaster Recovery',
        tagColor: 'amber',
        icon: '🏗️',
        summary: [
          'Disaster Recovery (DR) is the technical, IT-focused component of BCP dedicated to restoring data, servers, and networks.',
          'Identification of Disaster Status: Declared when disruptive events exceed local site response capabilities (floods, ransomware, blackouts).',
          'Backup Strategies: Full, Differential, and Incremental backups; the 3-2-1 backup rule (3 copies, 2 media, 1 offsite/immutable).',
          'Recovery Site Architectures: Hot Site (instantaneous sync), Warm Site (hours), Cold Site (days/weeks), Cloud DRaaS.'
        ],
        takeaway: 'A backup is worthless unless the restore procedure has been tested and verified.',
        detailContent: {
          concepts: `
            <h4>1. Disaster Recovery (DR) vs Business Continuity (BCP)</h4>
            <p>While BCP addresses overall business resilience (people, offices, brand, supply chains), Disaster Recovery (DR) focuses specifically on the technology and data components—restoring mission-critical servers, databases, telecommunications, and network infrastructure following a disaster.</p>

            <h4>2. Backup Architectures & Comparison</h4>
            <div class="table-wrapper">
              <table class="content-table">
                <thead>
                  <tr>
                    <th>Backup Type</th>
                    <th>What It Captures</th>
                    <th>Backup Speed</th>
                    <th>Restore Speed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Full Backup</strong></td>
                    <td>100% of all selected files and data blocks.</td>
                    <td>Slowest</td>
                    <td>Fastest (Single step restore)</td>
                  </tr>
                  <tr>
                    <td><strong>Differential Backup</strong></td>
                    <td>All files modified since the last <em>Full</em> backup.</td>
                    <td>Moderate</td>
                    <td>Fast (Requires Full + Latest Differential)</td>
                  </tr>
                  <tr>
                    <td><strong>Incremental Backup</strong></td>
                    <td>Only files modified since the last backup of <em>any type</em>.</td>
                    <td>Fastest</td>
                    <td>Slowest (Requires Full + all consecutive Incrementals)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4>3. Recovery Site Options</h4>
            <ul>
              <li><strong>Hot Site:</strong> Fully duplicate data center equipped with identical hardware, real-time data replication, and live networking. Near-zero RTO; highest operational cost.</li>
              <li><strong>Warm Site:</strong> Pre-installed server hardware, power, and connectivity, but requires restoring recent backups before resuming operations. RTO of hours to days; moderate cost.</li>
              <li><strong>Cold Site:</strong> Physical facility space with power, cooling, and raised flooring, but no pre-installed computing hardware. Longest RTO (weeks); lowest cost.</li>
              <li><strong>Cloud DRaaS (Disaster Recovery as a Service):</strong> Elastic on-demand infrastructure spinning up virtualized environments in AWS/Azure during declared emergencies. Highly cost-effective.</li>
            </ul>
          `,
          legal: `
            <h4>Ransomware & Immutable Backups</h4>
            <p>Modern ransomware actively targets and deletes online backup repositories. To satisfy legal due diligence and cyber insurance requirements, organizations must enforce <strong>immutable, write-once-read-many (WORM)</strong> offline or air-gapped backups.</p>
          `,
          checklist: `
            <h4>DR Readiness Checklist</h4>
            <ul>
              <li>[ ] 3-2-1-1 Backup rule enforced (1 immutable/air-gapped copy).</li>
              <li>[ ] Annual full-scale failover drill executed to alternate DR site.</li>
              <li>[ ] Formal criteria and designated individuals defined for "Declaring a Disaster".</li>
            </ul>
          `
        }
      },
      {
        id: 'u4_t2',
        code: 'LAW-402',
        title: 'Categories of Cybercrime & Threat Landscapes',
        category: 'Cybercrime',
        tagColor: 'rose',
        icon: '🦹',
        summary: [
          'Classification by Target: 1) Crimes against Individuals, 2) Crimes against Property, 3) Crimes against Government & Society.',
          'Against Individuals: Cyberstalking, harassment, identity theft, defamation, unauthorized access, revenge porn.',
          'Against Property: Ransomware extortion, credit card fraud, IP theft, unauthorized funds transfers, digital piracy.',
          'Against Government/Society: Cyberterrorism, critical information infrastructure (CII) sabotage, cyber warfare, cyber espionage.'
        ],
        takeaway: 'Cybercrime has transitioned from isolated thrill-seeking into multi-billion dollar organized criminal enterprises.',
        detailContent: {
          concepts: `
            <h4>1. Systematic Categorization of Cybercrimes</h4>
            <p>In forensic science and cyber jurisprudence, cybercrimes are classified based on the nature of the target victim:</p>
            <ul>
              <li><strong>1. Cybercrimes Against Individuals:</strong> Targeted malicious acts directed at personal privacy, psychological well-being, or human safety. Examples include cyberstalking, cyberbullying, doxxing, identity theft, unauthorized surveillance, and distribution of non-consensual sexually explicit content.</li>
              <li><strong>2. Cybercrimes Against Property:</strong> Crimes intended to destroy, steal, or compromise commercial and financial assets. Examples include ransomware, industrial espionage, software counterfeiting, banking trojans, cryptocurrency theft, and DDoS attacks causing commercial losses.</li>
              <li><strong>3. Cybercrimes Against Government & Critical Infrastructure:</strong> Offenses threatening national security, public health, or sovereignty. Examples include cyberterrorism (disrupting power grids or air traffic control), state-sponsored espionage, tampering with voter registries, and defacement of official government portals.</li>
            </ul>
          `,
          legal: `
            <h4>Critical Information Infrastructure (CII) in India</h4>
            <p>Under <strong>Section 70 of the IT Act</strong>, the government designates certain computer systems as Critical Information Infrastructure (power, telecom, banking, defense). Any unauthorized access to a designated protected system is punishable with up to <strong>10 years rigorous imprisonment</strong> without bail.</p>
          `,
          checklist: `
            <h4>Forensic Incident Response Checklist</h4>
            <ul>
              <li>[ ] Volatile RAM dump extracted before powering down compromised machines.</li>
              <li>[ ] Evidentiary hard drive cloned bit-by-bit using hardware write-blockers.</li>
              <li>[ ] Chain of custody forms maintained with cryptographic SHA-256 hashes.</li>
            </ul>
          `
        }
      },
      {
        id: 'u4_t3',
        code: 'LAW-403',
        title: 'The Indian Information Technology Act, 2000 & Amendments',
        category: 'Cyber Law',
        tagColor: 'rose',
        icon: '📜',
        summary: [
          'The foundational cyber legislation of India, enacted 17th Oct 2000, heavily amended by the IT Amendment Act 2008.',
          'Section 43: Civil penalty/compensation for unauthorized access, data theft, virus infection, and denial of service.',
          'Section 65: Tampering with computer source documents (up to 3 years imprisonment or ₹2 lakh fine).',
          'Section 66: Hacking and computer-related offenses; 66B (stolen data), 66C (identity theft), 66D (cheating by personation), 66E (privacy violation), 66F (Cyber Terrorism - life imprisonment).',
          'Section 67, 67A, 67B: Obscenity, explicit material, and stringent penalties for CSAM.'
        ],
        takeaway: 'The IT Act provides the legal teeth for prosecuting cybercrimes and asserting civil damages in India.',
        detailContent: {
          concepts: `
            <h4>Comprehensive Guide to Landmark IT Act Sections</h4>
            <div class="table-wrapper">
              <table class="content-table">
                <thead>
                  <tr>
                    <th>Section</th>
                    <th>Offense / Legal Provision</th>
                    <th>Punishment / Penalties</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Sec 43</strong></td>
                    <td>Unauthorized access, downloading data, introducing viruses, damaging computer systems, denying access.</td>
                    <td>Civil damages and compensation to the affected victim.</td>
                  </tr>
                  <tr>
                    <td><strong>Sec 43A</strong></td>
                    <td>Failure by a corporate body to protect Sensitive Personal Data or Information (SPDI) due to negligence.</td>
                    <td>Unlimited compensatory damages to affected victims.</td>
                  </tr>
                  <tr>
                    <td><strong>Sec 65</strong></td>
                    <td>Tampering with computer source code documents required to be maintained by law.</td>
                    <td>Imprisonment up to 3 years and/or fine up to ₹2 Lakhs.</td>
                  </tr>
                  <tr>
                    <td><strong>Sec 66</strong></td>
                    <td>Any act referred to in Sec 43 committed dishonestly or fraudulently (Hacking).</td>
                    <td>Imprisonment up to 3 years and/or fine up to ₹5 Lakhs.</td>
                  </tr>
                  <tr>
                    <td><strong>Sec 66C</strong></td>
                    <td>Identity Theft: Fraudulent use of electronic signature, password, or unique identification feature.</td>
                    <td>Imprisonment up to 3 years and fine up to ₹1 Lakh.</td>
                  </tr>
                  <tr>
                    <td><strong>Sec 66D</strong></td>
                    <td>Cheating by Personation using computer resources (Phishing, impersonation scams).</td>
                    <td>Imprisonment up to 3 years and fine up to ₹1 Lakh.</td>
                  </tr>
                  <tr>
                    <td><strong>Sec 66E</strong></td>
                    <td>Violation of bodily privacy: Capturing, publishing, or transmitting images of private areas without consent.</td>
                    <td>Imprisonment up to 3 years and/or fine up to ₹2 Lakhs.</td>
                  </tr>
                  <tr>
                    <td><strong>Sec 66F</strong></td>
                    <td><strong>Cyber Terrorism:</strong> Threatening the unity, integrity, security, or sovereignty of India via cyber means.</td>
                    <td><strong>Imprisonment for LIFE</strong> (Non-bailable).</td>
                  </tr>
                  <tr>
                    <td><strong>Sec 67</strong></td>
                    <td>Publishing or transmitting obscene material in electronic form.</td>
                    <td>1st conviction: Up to 3 yrs & ₹5L fine; 2nd: Up to 5 yrs & ₹10L.</td>
                  </tr>
                  <tr>
                    <td><strong>Sec 67A</strong></td>
                    <td>Publishing or transmitting sexually explicit acts in electronic form.</td>
                    <td>1st conviction: Up to 5 yrs & ₹10L fine; 2nd: Up to 7 yrs.</td>
                  </tr>
                  <tr>
                    <td><strong>Sec 67B</strong></td>
                    <td><strong>Child Sexual Abuse Material (CSAM):</strong> Publishing, browsing, downloading, or transmitting child pornography.</td>
                    <td>1st conviction: Up to 5 yrs & ₹10L fine; 2nd: Up to 7 yrs (Strict liability).</td>
                  </tr>
                  <tr>
                    <td><strong>Sec 69 / 69A</strong></td>
                    <td>Government power to intercept, monitor, decrypt, or block public access to electronic content.</td>
                    <td>Failure to comply: Imprisonment up to 7 years.</td>
                  </tr>
                  <tr>
                    <td><strong>Sec 72 / 72A</strong></td>
                    <td>Breach of confidentiality & privacy by persons with authorized access; disclosure in breach of lawful contract.</td>
                    <td>Imprisonment up to 2-3 years and/or fine up to ₹1-5 Lakhs.</td>
                  </tr>
                  <tr>
                    <td><strong>Sec 79</strong></td>
                    <td>Intermediary Safe Harbor: Exemption from liability for third-party content if due diligence is observed.</td>
                    <td>Safe harbor revoked if intermediary fails to remove unlawful content after government notice.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `,
          legal: `
            <h4>Landmark Supreme Court Rulings</h4>
            <p>In <strong>Shreya Singhal v. Union of India (2015)</strong>, the Supreme Court struck down <strong>Section 66A</strong> of the IT Act (punishment for sending offensive messages) as unconstitutional, citing violations of Article 19(1)(a) freedom of speech. However, other provisions (66C, 66D, 66F) remain fully enforceable.</p>
          `,
          checklist: `
            <h4>Statutory Section Reference Checklist</h4>
            <ul>
              <li>Identify cyber crime element (unauthorized access, impersonation, obscenity).</li>
              <li>Check mens rea (dishonest, fraudulent intent for Sec 66).</li>
              <li>Corroborate digital forensic logs under Section 65B Indian Evidence Act.</li>
            </ul>
          `
        }
      },
      {
        id: 'u4_t4',
        code: 'ETH-404',
        title: 'Child Sexual Abuse Material (CSAM) & International Laws',
        category: 'Cyber Law',
        tagColor: 'rose',
        icon: '⚖️',
        summary: [
          'CSAM is strictly criminalized under Section 67B of the IT Act and Section 15 of the POCSO Act 2012.',
          'Strict liability: Mere browsing, caching, downloading, creating, or distributing CSAM carries mandatory imprisonment.',
          'Mandatory intermediary obligations: Intermediaries must deploy hash matching (PhotoDNA) and report within 24 hours to NCRP/CERT-In.',
          'International Laws: Council of Europe Budapest Convention on Cybercrime, US Computer Fraud and Abuse Act (CFAA), EU NIS 2.',
          'Cyber Ethics: Responsible vulnerability disclosure, forensic integrity, and ethical hacking code of conduct.'
        ],
        takeaway: 'Zero tolerance: CSAM offenses trigger automatic international law enforcement coordination via Interpol & NCMEC.',
        detailContent: {
          concepts: `
            <h4>1. Stringent Legal Regime Against CSAM</h4>
            <p>Child Sexual Abuse Material (CSAM) represents the most heinous category of cybercrime. The Indian legal framework enforces a zero-tolerance, strict-liability regime across multiple statutes:</p>
            <ul>
              <li><strong>Section 67B of IT Act 2000:</strong> Penalizes anyone who publishes, transmits, browses, downloads, advertises, or facilitates CSAM in electronic form. First conviction carries up to 5 years imprisonment and ₹10 Lakhs fine; repeat offenses carry up to 7 years.</li>
              <li><strong>POCSO Act 2012 (Section 15):</strong> Criminalizes the storage of child pornography for commercial purposes or failure to delete/report CSAM material.</li>
              <li><strong>Mandatory Reporting Infrastructure:</strong> Integration between the National Cyber Crime Reporting Portal (cybercrime.gov.in), CERT-In, and the US National Center for Missing & Exploited Children (NCMEC) for automated tip-line investigations.</li>
            </ul>

            <h4>2. International Cyber Law Landscape</h4>
            <ul>
              <li><strong>Budapest Convention on Cybercrime (2001):</strong> The first international treaty addressing internet crimes by harmonizing national laws, improving investigative techniques, and increasing international police cooperation.</li>
              <li><strong>US Computer Fraud and Abuse Act (CFAA - 18 U.S.C. § 1030):</strong> The primary US federal statute prosecuting unauthorized access to "protected computers".</li>
              <li><strong>EU NIS 2 Directive (2023):</strong> Strict cybersecurity baseline mandates across essential EU entities, imposing executive management liability for cyber failures.</li>
            </ul>

            <h4>3. Cyber Ethics & Responsible Disclosure</h4>
            <p>Ethical hackers and forensic analysts must adhere to professional codes of conduct (e.g., (ISC)² Code of Ethics, EC-Council Code of Ethics). Vulnerability disclosure must follow <em>Coordinated Vulnerability Disclosure (CVD)</em> guidelines, giving vendors 90 days to remediate before public announcement.</p>
          `,
          legal: `
            <h4>Supreme Court Directions on CSAM Takedown</h4>
            <p>In <strong>Re: Prajwala (2018)</strong>, the Supreme Court of India directed the central government and major tech platforms to establish automated mechanisms (such as hash databases and machine learning filters) to eradicate CSAM from Indian cyberspace.</p>
          `,
          checklist: `
            <h4>Ethics & CSAM Compliance Checklist</h4>
            <ul>
              <li>[ ] Automated hash matching (Microsoft PhotoDNA / Google Content Safety API) integrated into platforms hosting user media.</li>
              <li>[ ] Clear standard operating procedure (SOP) for immediate preservation and reporting of CSAM tips to cybercrime.gov.in.</li>
              <li>[ ] Explicit authorization (Rules of Engagement) signed prior to any penetration testing engagement.</li>
            </ul>
          `
        }
      },
      {
        id: 'u4_t5',
        code: 'REG-405',
        title: 'Social Media Regulations, Privacy & DPDP Act 2023',
        category: 'Regulations',
        tagColor: 'blue',
        icon: '📱',
        summary: [
          'IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021: Chief Compliance Officer, 24-hr non-consensual takedown.',
          'Section 79 Safe Harbor: Conditional immunity lost if intermediaries fail to exercise due diligence or comply with court orders.',
          'Digital Personal Data Protection (DPDP) Act, 2023: India’s comprehensive privacy statute establishing Data Principal rights.',
          'Data Fiduciary obligations: Purpose limitation, data minimization, consent management, and mandatory breach notification.',
          'Penalties up to ₹250 Crores for significant breaches; established the Data Protection Board of India (DPBI).'
        ],
        takeaway: 'DPDP Act 2023 transforms data protection in India from loose guidelines into heavy statutory penalties.',
        detailContent: {
          concepts: `
            <h4>1. IT Intermediary Rules, 2021</h4>
            <p>The <em>Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021</em> imposed strict operational compliance on social media intermediaries (defined as Significant Social Media Intermediaries if user base > 5 million):</p>
            <ul>
              <li><strong>Mandatory Indian Personnel:</strong> Must appoint a Chief Compliance Officer (resident in India), a Nodal Contact Person (available 24/7 for law enforcement), and a Resident Grievance Officer.</li>
              <li><strong>Rapid Takedown Mandates:</strong> Obligation to remove or disable access to content exposing private areas, nudity, or morphed sexual imagery within <strong>24 hours</strong> of receiving a complaint.</li>
              <li><strong>Grievance Resolution:</strong> Acknowledging user complaints within 24 hours and resolving them within 15 days.</li>
              <li><strong>Traceability of First Originator:</strong> Messaging intermediaries must enable identification of the first originator of information undermining national security.</li>
            </ul>

            <h4>2. The Digital Personal Data Protection (DPDP) Act, 2023</h4>
            <p>Enacted in August 2023, the DPDP Act provides the modern privacy framework for the world's most populous nation:</p>
            <ul>
              <li><strong>Key Roles:</strong> <em>Data Principal</em> (the individual citizen) and <em>Data Fiduciary</em> (entity determining purpose/means of data processing).</li>
              <li><strong>Consent Framework:</strong> Data processing requires clear, unconditional, informed, and affirmative consent that can be withdrawn at any time.</li>
              <li><strong>Data Protection Board of India (DPBI):</strong> Digital-by-design regulatory adjudicatory body empowered to impose financial penalties up to ₹250 Crores per violation.</li>
            </ul>
          `,
          legal: `
            <h4>Section 79 Safe Harbor Revocation</h4>
            <p>An intermediary only retains immunity under Section 79 if it serves merely as a conduit and does not initiate the transmission, select the receiver, or modify the content. Failure to expeditiously remove unlawful content upon receiving actual knowledge revokes safe harbor protection entirely.</p>
          `,
          checklist: `
            <h4>Intermediary & Privacy Checklist</h4>
            <ul>
              <li>[ ] Consent notice translated into all 22 official languages of the 8th Schedule.</li>
              <li>[ ] Automated mechanism for users to request data erasure or withdraw consent.</li>
              <li>[ ] 24-hour rapid takedown workflow documented and staffed for sexual content.</li>
            </ul>
          `
        }
      },
      {
        id: 'u4_t6',
        code: 'STD-406',
        title: 'Auditing Standards & Frameworks: ISO, COBIT, SOC, HIPAA',
        category: 'Frameworks',
        tagColor: 'emerald',
        icon: '🏛️',
        summary: [
          'ISO/IEC 27001: International ISMS standard; Plan-Do-Check-Act (PDCA); 93 Annex A controls in 4 themes (2022 revision).',
          'COBIT (ISACA): Enterprise IT governance framework aligning IT goals with business strategy across 40 governance/management objectives.',
          'SOC Compliance (AICPA): SOC 1 (Financial/SSAE 18), SOC 2 (Trust Services Criteria: Security, Availability, Integrity, Confidentiality, Privacy), SOC 3 (Public).',
          'SOC 2 Type I evaluates control design at a single point in time; SOC 2 Type II evaluates operating effectiveness over 6 to 12 months.',
          'HIPAA: US healthcare security rule mandating Administrative, Physical, and Technical safeguards for Protected Health Information (PHI).'
        ],
        takeaway: 'Frameworks provide the standardized control blueprints auditors use to evaluate enterprise security.',
        detailContent: {
          concepts: `
            <h4>1. ISO/IEC 27001 & 27002 (2022 Update)</h4>
            <p>ISO 27001 specifies requirements for establishing, implementing, maintaining, and continually improving an <strong>Information Security Management System (ISMS)</strong>. The 2022 revision consolidated controls into 93 controls organized across 4 themes:</p>
            <ul>
              <li><strong>Organizational Controls (37):</strong> Policies, asset management, cloud governance, supplier relationships.</li>
              <li><strong>People Controls (8):</strong> Screening, terms of employment, security awareness, remote working.</li>
              <li><strong>Physical Controls (14):</strong> Physical security perimeters, entry controls, clear desk/screen.</li>
              <li><strong>Technological Controls (34):</strong> Access control, cryptography, malware protection, logging, threat intelligence.</li>
            </ul>

            <h4>2. COBIT (Control Objectives for Information and Related Technologies)</h4>
            <p>Developed by ISACA, COBIT is an IT management and governance framework that separates Governance from Management. It provides 5 Governance Objectives (Evaluate, Direct, Monitor - EDM) and 35 Management Objectives (APO, BAI, DSS, MEA) ensuring alignment between technical operations and executive enterprise strategy.</p>

            <h4>3. SOC 1, SOC 2, and SOC 3 Reports (AICPA)</h4>
            <div class="table-wrapper">
              <table class="content-table">
                <thead>
                  <tr>
                    <th>Report Type</th>
                    <th>Audience</th>
                    <th>Criteria Evaluated</th>
                    <th>Report Variants</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>SOC 1</strong></td>
                    <td>Financial auditors, user CFOs.</td>
                    <td>Internal controls over financial reporting (ICFR / SSAE 18).</td>
                    <td>Type I (Point in time) & Type II (Period of time).</td>
                  </tr>
                  <tr>
                    <td><strong>SOC 2</strong></td>
                    <td>B2B clients, regulators, security teams.</td>
                    <td>Trust Services Criteria: Security (mandatory), Availability, Processing Integrity, Confidentiality, Privacy.</td>
                    <td>Type I (Design only) & Type II (Operating effectiveness 6-12 mos).</td>
                  </tr>
                  <tr>
                    <td><strong>SOC 3</strong></td>
                    <td>General public, prospective clients.</td>
                    <td>Publicly shareable executive summary of SOC 2 Trust Criteria without confidential test details.</td>
                    <td>Always general distribution.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4>4. HIPAA Security & Privacy Rules</h4>
            <p>The US Health Insurance Portability and Accountability Act protects Protected Health Information (PHI) through three security safeguard tiers: <strong>Administrative Safeguards</strong> (security management process, workforce training), <strong>Physical Safeguards</strong> (facility access, workstation security), and <strong>Technical Safeguards</strong> (access controls, audit logs, transmission encryption).</p>
          `,
          legal: `
            <h4>Third-Party Vendor Due Diligence</h4>
            <p>In modern cloud enterprise architecture, enterprise procurement teams refuse to onboard SaaS vendors without a valid <strong>SOC 2 Type II</strong> or <strong>ISO 27001</strong> certification, establishing these standards as mandatory commercial licenses to operate.</p>
          `,
          checklist: `
            <h4>Audit Framework Alignment Checklist</h4>
            <ul>
              <li>[ ] Scope of ISMS defined and certified under ISO/IEC 27001:2022.</li>
              <li>[ ] SOC 2 Type II audit window maintained annually with accredited CPA firm.</li>
              <li>[ ] Business Associate Agreements (BAAs) executed with all sub-processors handling PHI.</li>
            </ul>
          `
        }
      },
      {
        id: 'u4_t7',
        code: 'CAS-407',
        title: 'Landmark Case Studies in Cyber Risk & Compliance',
        category: 'Case Studies',
        tagColor: 'purple',
        icon: '🔍',
        summary: [
          'Target Breach (2013): 40M credit cards compromised; entry via stolen HVAC vendor credentials; lack of internal network segmentation.',
          'Colonial Pipeline (2021): Ransomware shut down major fuel line; single compromised legacy VPN password without MFA.',
          'Equifax Breach (2017): 147M records stolen; unpatched Apache Struts vulnerability left unaddressed for 60+ days.',
          'Cosmos Bank Cyber Heist (2018): ₹94 Crores stolen in Pune; malware in ATM switch proxy bypassing Core Banking System.'
        ],
        takeaway: 'Every major cyber catastrophe stems from fundamental compliance, segmentation, or patching failures.',
        detailContent: {
          concepts: `
            <h4>Deep-Dive Analysis of 4 Historic Cyber Incidents</h4>
            
            <h4>1. Target Corporation Data Breach (2013)</h4>
            <ul>
              <li><strong>Incident Summary:</strong> Attackers exfiltrated 40 million credit card records and 70 million personal records of retail shoppers during the Thanksgiving shopping rush.</li>
              <li><strong>Root Cause Failure:</strong> Attackers sent a spear-phishing email to a third-party HVAC contractor (Fazio Mechanical Services), stealing their network credentials. Target failed to segment its third-party billing network from its Point-of-Sale (POS) cardholder environment, allowing attackers to laterally move and deploy BlackPOS memory-scraping malware onto thousands of cash registers.</li>
              <li><strong>Forensic Lessons:</strong> Enforce strict network micro-segmentation, isolate third-party vendor portals, and mandate MFA on all external connections.</li>
            </ul>

            <h4>2. Colonial Pipeline Ransomware Attack (2021)</h4>
            <ul>
              <li><strong>Incident Summary:</strong> DarkSide ransomware infected IT billing systems of the largest pipeline system for refined oil products in the US, prompting management to preemptively shut down the pipeline for 6 days, causing panic buying and fuel shortages.</li>
              <li><strong>Root Cause Failure:</strong> Attackers obtained a single employee password found in a dark web credential dump. The password was for an inactive, legacy VPN account that did <em>not</em> have Multi-Factor Authentication (MFA) enabled.</li>
              <li><strong>Forensic Lessons:</strong> Inactive legacy accounts must be decommissioned; MFA must be mandatory on 100% of remote access ingress points without exception.</li>
            </ul>

            <h4>3. Equifax Data Breach (2017)</h4>
            <ul>
              <li><strong>Incident Summary:</strong> Sensitive credit histories, Social Security Numbers, and personal identities of 147.9 million individuals compromised.</li>
              <li><strong>Root Cause Failure:</strong> US-CERT issued a critical security advisory for Apache Struts (CVE-2017-5638) on March 7, 2017. Equifax failed to patch its dispute portal server for over 60 days. Attackers scanned the internet, found the unpatched portal, executed remote code, and spent months exfiltrating data because an internal network traffic inspection certificate had expired 10 months earlier.</li>
              <li><strong>Forensic Lessons:</strong> Maintain accurate software asset inventories, enforce strict 7-day critical patch SLAs, and automate SSL/TLS certificate monitoring.</li>
            </ul>

            <h4>4. Cosmos Bank Cyber Heist, India (2018)</h4>
            <ul>
              <li><strong>Incident Summary:</strong> ₹94.42 Crores siphoned from Pune-based Cosmos Co-operative Bank in a synchronized multi-country attack over 48 hours.</li>
              <li><strong>Root Cause Failure:</strong> Attackers compromised the bank's internal network via phishing, installed a malware proxy server parallel to the bank's Central Switching System (ATM Switch), and severed connections to the Core Banking System (CBS). The fake switch automatically authorized 14,000+ fraudulent ATM transactions across 28 countries using cloned debit cards, followed by ₹13.9 Crore SWIFT fraud transfers to Hong Kong.</li>
              <li><strong>Forensic Lessons:</strong> Deploy behavioral anomaly monitoring on banking switch traffic, mandate end-to-end cryptographic HSM validation for payment switches, and maintain continuous SIEM surveillance.</li>
            </ul>
          `,
          legal: `
            <h4>Regulatory Enforcement & Fines Following Breaches</h4>
            <p>Target settled for <strong>$18.5M</strong> with US state attorneys general and over <strong>$100M</strong> in bank claims. Equifax paid a <strong>$700M</strong> settlement to the FTC and CFPB. Cosmos Bank faced strict regulatory audits and remediation directives from the Reserve Bank of India.</p>
          `,
          checklist: `
            <h4>Case Study Defense Checklist</h4>
            <ul>
              <li>[ ] Third-party vendor networks strictly air-gapped from internal data networks.</li>
              <li>[ ] All legacy accounts audited and purged monthly.</li>
              <li>[ ] External vulnerability scans executed weekly with automated patch verification.</li>
            </ul>
          `
        }
      }
    ]
  }
};

// Interactive Quiz Questions
const quizQuestions = [
  {
    question: "How does an IT security audit primarily differ from an IT security assessment?",
    options: [
      "Audits are informal consultations, while assessments are legally binding tests.",
      "Audits verify adherence against formal standards using evidence; assessments identify vulnerabilities and recommend improvements.",
      "Audits only examine hardware components, while assessments examine software.",
      "Assessments always result in pass/fail certification, whereas audits never issue opinions."
    ],
    correct: 1,
    explanation: "Audits are formal, independent, and evidence-based evaluations against specified criteria/standards (e.g., ISO 27001), whereas assessments are consultative diagnostic exercises focused on identifying technical gaps and vulnerabilities."
  },
  {
    question: "Under the Indian IT Act 2000, which section specifically penalizes Cyber Terrorism with imprisonment for life?",
    options: [
      "Section 43A",
      "Section 66C",
      "Section 66F",
      "Section 67B"
    ],
    correct: 2,
    explanation: "Section 66F of the Information Technology Act, 2000 prescribes punishment for Cyber Terrorism, which carries a sentence of imprisonment for life."
  },
  {
    question: "What is the primary function of Computer Assisted Audit Techniques (CAATs) in modern IT auditing?",
    options: [
      "To replace human auditors with fully autonomous artificial intelligence.",
      "To analyze 100% of electronic transaction populations, execute statistical sampling, and test application controls.",
      "To automatically repair damaged hardware components in data centers.",
      "To encrypt network traffic across Wide Area Networks."
    ],
    correct: 1,
    explanation: "CAATs (e.g., ACL, IDEA, automated scripts) allow auditors to test 100% of electronic records rather than small manual samples, verify application controls, and perform unbiased statistical sampling."
  },
  {
    question: "In the 7 Domains of a typical IT infrastructure, which domain encompasses desktops, laptops, thin clients, and OS images?",
    options: [
      "User Domain",
      "LAN-to-WAN Domain",
      "Workstation Domain",
      "System/Application Domain"
    ],
    correct: 2,
    explanation: "The Workstation Domain consists of employee endpoints including desktop PCs, laptops, thin clients, and local operating system images."
  },
  {
    question: "In Quantitative Risk Analysis, what is the formula to calculate Annualized Loss Expectancy (ALE)?",
    options: [
      "ALE = Asset Value (AV) ÷ Exposure Factor (EF)",
      "ALE = Single Loss Expectancy (SLE) × Annualized Rate of Occurrence (ARO)",
      "ALE = Threat × Vulnerability + Safeguard Cost",
      "ALE = Recovery Time Objective (RTO) × Maximum Tolerable Downtime (MTD)"
    ],
    correct: 1,
    explanation: "Annualized Loss Expectancy (ALE) equals Single Loss Expectancy (SLE) multiplied by the Annualized Rate of Occurrence (ARO): ALE = SLE × ARO."
  },
  {
    question: "Which BCP metric represents the maximum acceptable data loss measured backwards in time from the moment of an outage?",
    options: [
      "RTO (Recovery Time Objective)",
      "MTD (Maximum Tolerable Downtime)",
      "WRT (Work Recovery Time)",
      "RPO (Recovery Point Objective)"
    ],
    correct: 3,
    explanation: "RPO (Recovery Point Objective) determines the maximum tolerable volume of data loss measured in time (e.g., transactions lost between the last backup and the disaster)."
  },
  {
    question: "Which recovery site tier is fully equipped with hardware, mirrored data replication, and offers a near-zero RTO, but has the highest cost?",
    options: [
      "Cold Site",
      "Warm Site",
      "Hot Site",
      "Mobile Trailer Site"
    ],
    correct: 2,
    explanation: "A Hot Site is a fully mirrored, redundant data center ready to take over operations immediately with near-zero RTO."
  },
  {
    question: "Under the Digital Personal Data Protection (DPDP) Act 2023 of India, what is the maximum financial penalty that can be imposed for major breaches?",
    options: [
      "₹5 Lakhs",
      "₹10 Crores",
      "₹250 Crores",
      "Unlimited compensatory damages only"
    ],
    correct: 2,
    explanation: "The DPDP Act 2023 prescribes financial penalties of up to ₹250 Crores for significant failures in observing data protection obligations."
  },
  {
    question: "What was the primary root cause failure identified in the historic 2013 Target Corporation data breach?",
    options: [
      "Physical theft of backup magnetic tapes from corporate headquarters.",
      "Stolen credentials from an HVAC vendor combined with a lack of internal network segmentation.",
      "An unpatched zero-day vulnerability in the iOS operating system.",
      "A BGP routing hijack of the primary DNS servers."
    ],
    correct: 1,
    explanation: "Target's breach occurred because attackers compromised credentials from a third-party HVAC vendor and exploited the absence of network segmentation to pivot into the internal Point-of-Sale network."
  },
  {
    question: "What is the critical distinction between a SOC 2 Type I and a SOC 2 Type II compliance report?",
    options: [
      "Type I covers privacy; Type II covers financial reporting.",
      "Type I is performed by internal staff; Type II is performed by government regulators.",
      "Type I evaluates control design at a specific point in time; Type II evaluates operating effectiveness over a testing window (typically 6-12 months).",
      "Type I is public; Type II is strictly confidential."
    ],
    correct: 2,
    explanation: "A SOC 2 Type I report evaluates the suitability of control design at a single point in time, while a Type II report evaluates whether those controls operated effectively over an extended period (typically 6 to 12 months)."
  }
];

// IT Act Section Quick Reference Data
const itActSections = [
  { sec: "Sec 43", title: "Damage to Computer, Computer System, etc.", type: "Civil", penalty: "Compensation to the affected person" },
  { sec: "Sec 43A", title: "Failure to Protect Sensitive Personal Data (SPDI)", type: "Civil", penalty: "Unlimited compensation for negligence" },
  { sec: "Sec 65", title: "Tampering with Computer Source Documents", type: "Criminal", penalty: "Up to 3 yrs imprisonment and/or ₹2L fine" },
  { sec: "Sec 66", title: "Computer Related Offenses (Hacking with intent)", type: "Criminal", penalty: "Up to 3 yrs imprisonment and/or ₹5L fine" },
  { sec: "Sec 66B", title: "Receiving Stolen Computer Resource or Data", type: "Criminal", penalty: "Up to 3 yrs imprisonment and/or ₹1L fine" },
  { sec: "Sec 66C", title: "Identity Theft (Passwords, Digital Signatures)", type: "Criminal", penalty: "Up to 3 yrs imprisonment and/or ₹1L fine" },
  { sec: "Sec 66D", title: "Cheating by Personation using Computer Resource", type: "Criminal", penalty: "Up to 3 yrs imprisonment and/or ₹1L fine" },
  { sec: "Sec 66E", title: "Violation of Bodily Privacy", type: "Criminal", penalty: "Up to 3 yrs imprisonment and/or ₹2L fine" },
  { sec: "Sec 66F", title: "Cyber Terrorism (National Security threat)", type: "Criminal", penalty: "Life Imprisonment (Non-bailable)" },
  { sec: "Sec 67", title: "Publishing / Transmitting Obscene Material", type: "Criminal", penalty: "Up to 3 yrs (1st) / 5 yrs (2nd) & fine" },
  { sec: "Sec 67A", title: "Sexually Explicit Material Transmission", type: "Criminal", penalty: "Up to 5 yrs (1st) / 7 yrs (2nd) & fine" },
  { sec: "Sec 67B", title: "Child Sexual Abuse Material (CSAM)", type: "Criminal", penalty: "Up to 5 yrs (1st) / 7 yrs (2nd) & ₹10L fine" },
  { sec: "Sec 69", title: "Directions for Interception / Decryption of Info", type: "Regulatory", penalty: "Non-compliance: Up to 7 yrs imprisonment" },
  { sec: "Sec 69A", title: "Directions to Block Public Access of Websites", type: "Regulatory", penalty: "Non-compliance: Up to 7 yrs imprisonment" },
  { sec: "Sec 70", title: "Critical Information Infrastructure Protection", type: "Criminal", penalty: "Unauthorized access: Up to 10 yrs imprisonment" },
  { sec: "Sec 72", title: "Breach of Confidentiality and Privacy", type: "Criminal", penalty: "Up to 2 yrs imprisonment and/or ₹1L fine" },
  { sec: "Sec 72A", title: "Disclosure in Breach of Lawful Contract", type: "Criminal", penalty: "Up to 3 yrs imprisonment and/or ₹5L fine" },
  { sec: "Sec 79", title: "Intermediary Safe Harbor & Due Diligence", type: "Regulatory", penalty: "Loss of legal immunity if order ignored" }
];

// Interactive 7 Domains Data
const domainDetails = {
  1: {
    name: "1. User Domain",
    role: "The human element interacting with corporate systems.",
    devices: "End users, privileged admins, contractors, executives, HR onboarding/offboarding systems.",
    drivers: "Acceptable Use Policy (AUP), social engineering defenses, password hygiene, insider threat mitigation.",
    auditPoints: "Verify signed AUP for 100% of staff; audit termination accounts deactivated within 24 hours; review phishing test failure rates."
  },
  2: {
    name: "2. Workstation Domain",
    role: "End-user compute hardware and local client environments.",
    devices: "Desktops, laptops, thin clients, tablets, local OS images (Windows/Linux/macOS), local storage.",
    drivers: "BitLocker full-disk encryption, least privilege local rights, USB device control, EDR telemetry.",
    auditPoints: "Verify TPM 2.0 full-disk encryption active; confirm local admin rights removed; inspect USB mass storage blocking via GPO."
  },
  3: {
    name: "3. LAN Domain",
    role: "Internal physical and local wireless communications network.",
    devices: "Managed L2/L3 switches, wireless access points (WAPs), Cat6/Fiber cables, VLAN controllers.",
    drivers: "802.1X port authentication, network segmentation, DHCP snooping, dynamic ARP inspection.",
    auditPoints: "Verify zero flat networks; ensure servers reside in dedicated VLANs; confirm rogue AP detection active."
  },
  4: {
    name: "4. LAN-to-WAN Domain",
    role: "The boundary defense separating the internal network from untrusted outer networks.",
    devices: "Next-Gen Firewalls, DMZ, IDS/IPS appliances, reverse proxies, content inspection gateways.",
    drivers: "Stateful egress filtering, inbound traffic inspection, TLS decryption, DMZ isolation.",
    auditPoints: "Inspect firewall rulebase for 'any-any' permit rules; verify external DNS/mail servers isolated in DMZ."
  },
  5: {
    name: "5. WAN Domain",
    role: "Wide area connectivity interconnecting geographically dispersed locations.",
    devices: "Border routers, leased lines, MPLS circuits, SD-WAN controllers, ISP fiber drops.",
    drivers: "Encrypted cross-site IPsec tunnels, BGP route security, carrier diversity, DDoS scrubbing.",
    auditPoints: "Confirm all inter-branch WAN traffic is encrypted via AES-256 IPsec; verify dual redundant ISP failover."
  },
  6: {
    name: "6. Remote Access Domain",
    role: "Enables secure external connectivity for teleworkers and traveling personnel.",
    devices: "VPN concentrators, Zero Trust Network Access (ZTNA) gateways, MFA authentication servers.",
    drivers: "Mandatory MFA, conditional access policies, endpoint posture verification, session timeouts.",
    auditPoints: "Audit 100% MFA enforcement on remote logins; verify split-tunneling policies; test session timeout after 15 mins inactivity."
  },
  7: {
    name: "7. System / Application Domain",
    role: "Mission-critical enterprise software, application servers, databases, and business data.",
    devices: "Web servers (IIS, Apache, Nginx), database servers (SQL, Oracle), ERP backends, API gateways.",
    drivers: "OWASP Top 10 mitigation, WAF, continuous patch management, least-privilege DB access, DAST/SAST.",
    auditPoints: "Verify critical CVEs patched within 7 days; confirm WAF deployed in blocking mode; audit database query logging."
  }
};

/* ==========================================================================
   DOM MANIPULATION, AUTHENTICATION & VIEW RENDERING
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupNavigation();
  setupSearch();
  setupModalEvents();
  setupMobileDrawer();
  applyAuthState();
});

/* ==========================================================================
   USER DATABASE & PERSISTENCE ENGINE (LOCAL & ONLINE)
   ========================================================================== */

const UserDB = {
  defaultUsers: [
    {
      id: "USR-1001",
      name: "Forensic Student",
      email: "student@nfsu.ac.in",
      rollNo: "FS-2024-501",
      role: "Forensic Student (Sem 5)",
      specialization: "Cybersecurity",
      avatar: "🐰",
      password: "cyber2026",
      createdAt: "2026-11-20T10:00:00.000Z",
      status: "Active"
    },
    {
      id: "USR-1002",
      name: "Dr. V. K. Raman",
      email: "auditor@nfsu.ac.in",
      rollNo: "AUD-NFSU-09",
      role: "Lead Assessor / Faculty",
      specialization: "Digital Forensics & Cyber Law",
      avatar: "🦊",
      password: "audit2026",
      createdAt: "2026-11-20T10:15:00.000Z",
      status: "Active"
    }
  ],

  getUsers: function() {
    try {
      const stored = localStorage.getItem('nfsu_cyber_user_db');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn("Could not read local DB:", e);
    }
    // Seed with initial records
    this.saveUsers(this.defaultUsers);
    return this.defaultUsers;
  },

  saveUsers: function(users) {
    try {
      localStorage.setItem('nfsu_cyber_user_db', JSON.stringify(users));
      this.updateDBCounter();
    } catch (e) {
      console.warn("Could not write to local DB:", e);
    }
  },

  register: async function(userData) {
    const users = this.getUsers();
    const cleanEmail = userData.email.trim().toLowerCase();

    // Check for duplicate account
    const existing = users.find(u => u.email.toLowerCase() === cleanEmail || (userData.rollNo && u.rollNo.toLowerCase() === userData.rollNo.trim().toLowerCase()));
    if (existing) {
      return { success: false, error: "An account with this email address or roll number already exists in the database!" };
    }

    const newUser = {
      id: "USR-" + (1000 + users.length + 1),
      name: userData.name.trim(),
      email: cleanEmail,
      rollNo: userData.rollNo.trim() || 'FS-2024-' + Math.floor(100 + Math.random() * 900),
      role: userData.role || 'Forensic Student (Sem 5)',
      specialization: userData.specialization || 'Cybersecurity',
      avatar: userData.avatar || '🐰',
      password: userData.password,
      createdAt: new Date().toISOString(),
      status: "Active"
    };

    users.push(newUser);
    this.saveUsers(users);

    // Also attempt background sync with Python local server if active
    try {
      fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      }).catch(() => {});
    } catch (_) {}

    return { success: true, user: newUser };
  },

  login: function(identifier, password) {
    const users = this.getUsers();
    const cleanId = identifier.trim().toLowerCase();
    const user = users.find(u => 
      (u.email.toLowerCase() === cleanId || u.rollNo.toLowerCase() === cleanId) &&
      u.password === password
    );
    return user || null;
  },

  updateDBCounter: function() {
    const users = this.getUsers();
    const countBadge = document.getElementById('badge-db-count');
    const modalCount = document.getElementById('db-modal-total-count');
    if (countBadge) countBadge.textContent = users.length + ' Users';
    if (modalCount) modalCount.textContent = users.length + ' Accounts';
  }
};

/* ==========================================================================
   AUTHENTICATION & SESSION MANAGEMENT
   ========================================================================== */

function applyAuthState() {
  const authScreen = document.getElementById('auth-screen');
  const appLayout = document.getElementById('app-layout');

  UserDB.updateDBCounter();

  if (state.currentUser) {
    if (authScreen) authScreen.style.display = 'none';
    if (appLayout) authScreen ? appLayout.style.display = 'flex' : null;

    // Update Header Profile
    const headerAvatar = document.getElementById('header-user-avatar');
    const headerName = document.getElementById('header-user-name');
    const headerRole = document.getElementById('header-user-role');
    if (headerAvatar) headerAvatar.textContent = state.currentUser.avatar || '🐰';
    if (headerName) headerName.textContent = state.currentUser.name || 'Forensic Student';
    if (headerRole) headerRole.textContent = state.currentUser.role || 'Student';

    // Update Sidebar Profile
    const sidebarAvatar = document.getElementById('sidebar-user-avatar');
    const sidebarName = document.getElementById('sidebar-user-name');
    const sidebarSub = document.getElementById('sidebar-user-sub');
    if (sidebarAvatar) sidebarAvatar.textContent = state.currentUser.avatar || '🐰';
    if (sidebarName) sidebarName.textContent = state.currentUser.name || 'Forensic Student';
    if (sidebarSub) sidebarSub.textContent = state.currentUser.rollNo || state.currentUser.identifier || 'FS-2024-501';

    renderCurrentView();
  } else {
    if (authScreen) authScreen.style.display = 'flex';
    if (appLayout) appLayout.style.display = 'none';
  }
}

// Switch between Sign In and Create Account
window.switchAuthMode = function(mode) {
  const loginContainer = document.getElementById('auth-login-container');
  const registerContainer = document.getElementById('auth-register-container');
  const tabLogin = document.getElementById('tab-login');
  const tabRegister = document.getElementById('tab-register');
  const successMsg = document.getElementById('auth-success-msg');
  const loginError = document.getElementById('login-error-msg');
  const regError = document.getElementById('reg-error-msg');

  if (loginError) loginError.style.display = 'none';
  if (regError) regError.style.display = 'none';

  if (mode === 'login') {
    if (loginContainer) loginContainer.style.display = 'block';
    if (registerContainer) registerContainer.style.display = 'none';
    if (tabLogin) tabLogin.classList.add('active');
    if (tabRegister) tabRegister.classList.remove('active');
  } else {
    if (loginContainer) loginContainer.style.display = 'none';
    if (registerContainer) registerContainer.style.display = 'block';
    if (tabLogin) tabLogin.classList.remove('active');
    if (tabRegister) tabRegister.classList.add('active');
    if (successMsg) successMsg.style.display = 'none';
  }
};

// Cute Avatar Choice Selector
window.selectAvatar = function(avatar, btn) {
  state.selectedAvatar = avatar;
  document.querySelectorAll('.avatar-choice-btn').forEach(b => b.classList.remove('selected'));
  if (btn) btn.classList.add('selected');
};

window.setLoginRole = function(role) {
  state.loginRole = role;
  const studentTab = document.getElementById('role-tab-student');
  const auditorTab = document.getElementById('role-tab-auditor');
  const loginInput = document.getElementById('login-id');
  const labelId = document.getElementById('label-login-id');
  const hintSpan = document.getElementById('pass-hint');
  const errorMsg = document.getElementById('login-error-msg');

  if (errorMsg) errorMsg.style.display = 'none';

  if (role === 'student') {
    if (studentTab) studentTab.classList.add('active');
    if (auditorTab) auditorTab.classList.remove('active');
    if (labelId) labelId.textContent = 'Student ID / Institutional Email';
    if (loginInput) loginInput.placeholder = 'student@nfsu.ac.in';
    if (hintSpan) {
      hintSpan.textContent = 'Demo: cyber2026';
      hintSpan.title = 'Default passcode: cyber2026';
    }
  } else {
    if (studentTab) studentTab.classList.remove('active');
    if (auditorTab) auditorTab.classList.add('active');
    if (labelId) labelId.textContent = 'Auditor Credential / Assessor ID';
    if (loginInput) loginInput.placeholder = 'auditor@nfsu.ac.in';
    if (hintSpan) {
      hintSpan.textContent = 'Demo: audit2026';
      hintSpan.title = 'Default passcode: audit2026';
    }
  }
};

window.fillDemo = function(role) {
  window.setLoginRole(role);
  const idInput = document.getElementById('login-id');
  const passInput = document.getElementById('login-password');
  const errorMsg = document.getElementById('login-error-msg');
  if (errorMsg) errorMsg.style.display = 'none';

  if (role === 'student') {
    if (idInput) idInput.value = 'student@nfsu.ac.in';
    if (passInput) passInput.value = 'cyber2026';
  } else {
    if (idInput) idInput.value = 'auditor@nfsu.ac.in';
    if (passInput) passInput.value = 'audit2026';
  }

  const submitBtn = document.getElementById('btn-auth-submit');
  if (submitBtn) submitBtn.focus();
};

window.togglePasswordVisibility = function(inputId, btn) {
  const passInput = document.getElementById(inputId);
  if (!passInput) return;

  if (passInput.type === 'password') {
    passInput.type = 'text';
    if (btn) btn.textContent = '🙈';
  } else {
    passInput.type = 'password';
    if (btn) btn.textContent = '👁️';
  }
};

// Create Account Handler (Saves to Database)
window.handleRegisterSubmit = async function(event) {
  event.preventDefault();
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const rollNo = document.getElementById('reg-roll').value.trim();
  const spec = document.getElementById('reg-spec').value;
  const role = document.getElementById('reg-role').value;
  const password = document.getElementById('reg-password').value;
  const confirmPassword = document.getElementById('reg-confirm-password').value;
  const regError = document.getElementById('reg-error-msg');
  const successMsg = document.getElementById('auth-success-msg');

  if (password !== confirmPassword) {
    if (regError) {
      regError.textContent = '⚠️ Passcodes do not match. Please verify your password entry.';
      regError.style.display = 'block';
    }
    return;
  }

  if (password.length < 4) {
    if (regError) {
      regError.textContent = '⚠️ Passcode must be at least 4 characters long for cyber compliance.';
      regError.style.display = 'block';
    }
    return;
  }

  const result = await UserDB.register({
    name: name,
    email: email,
    rollNo: rollNo,
    specialization: spec,
    role: role,
    avatar: state.selectedAvatar || '🐰',
    password: password
  });

  if (!result.success) {
    if (regError) {
      regError.textContent = '⚠️ ' + result.error;
      regError.style.display = 'block';
    }
    return;
  }

  // Success: user was added to database!
  if (regError) regError.style.display = 'none';
  if (successMsg) {
    successMsg.innerHTML = `✨ <strong>Account Registered!</strong> Welcome ${result.user.name} (${result.user.id}). Your account has been saved to the NFSU User Database. Sign in below! 🌸`;
    successMsg.style.display = 'block';
  }

  // Pre-fill login form
  window.switchAuthMode('login');
  const loginId = document.getElementById('login-id');
  const loginPass = document.getElementById('login-password');
  if (loginId) loginId.value = result.user.email;
  if (loginPass) loginPass.value = password;

  const submitBtn = document.getElementById('btn-auth-submit');
  if (submitBtn) submitBtn.focus();
};

// Sign In Handler (Validates with Database)
window.handleLoginSubmit = function(event) {
  event.preventDefault();
  const idInput = document.getElementById('login-id');
  const passInput = document.getElementById('login-password');
  const rememberCheck = document.getElementById('login-remember');
  const errorMsg = document.getElementById('login-error-msg');

  const idVal = idInput ? idInput.value.trim() : '';
  const passVal = passInput ? passInput.value : '';

  if (!idVal || !passVal) {
    if (errorMsg) {
      errorMsg.textContent = 'Please provide both institutional ID and passcode.';
      errorMsg.style.display = 'block';
    }
    return;
  }

  // Attempt login via UserDB
  let matchedUser = UserDB.login(idVal, passVal);

  // If not found in custom registered users, fallback to quick demo matching
  if (!matchedUser) {
    if (idVal.toLowerCase() === 'student@nfsu.ac.in' && passVal === 'cyber2026') {
      matchedUser = UserDB.getUsers()[0];
    } else if (idVal.toLowerCase() === 'auditor@nfsu.ac.in' && passVal === 'audit2026') {
      matchedUser = UserDB.getUsers()[1];
    }
  }

  if (!matchedUser) {
    if (errorMsg) {
      errorMsg.innerHTML = '❌ <strong>Authentication Failed:</strong> No user found matching these credentials. Please check your passcode or click <em>"Create Account"</em> to register your profile.';
      errorMsg.style.display = 'block';
    }
    return;
  }

  // Successful Login
  const userSession = {
    id: matchedUser.id,
    name: matchedUser.name,
    role: matchedUser.role,
    avatar: matchedUser.avatar || '🐰',
    rollNo: matchedUser.rollNo,
    email: matchedUser.email,
    specialization: matchedUser.specialization,
    loginTime: new Date().toISOString()
  };

  state.currentUser = userSession;

  if (rememberCheck && rememberCheck.checked) {
    localStorage.setItem('nfsu_cyber_user', JSON.stringify(userSession));
  } else {
    sessionStorage.setItem('nfsu_cyber_user', JSON.stringify(userSession));
  }

  applyAuthState();
};

window.handleLogout = function() {
  state.currentUser = null;
  localStorage.removeItem('nfsu_cyber_user');
  sessionStorage.removeItem('nfsu_cyber_user');
  applyAuthState();

  // Reset inputs
  const idInput = document.getElementById('login-id');
  const passInput = document.getElementById('login-password');
  const errorMsg = document.getElementById('login-error-msg');
  const successMsg = document.getElementById('auth-success-msg');
  if (idInput) idInput.value = '';
  if (passInput) passInput.value = '';
  if (errorMsg) errorMsg.style.display = 'none';
  if (successMsg) successMsg.style.display = 'none';
};

// Database Inspector Modal Logic
window.openDatabaseModal = function() {
  const modal = document.getElementById('db-modal');
  const tbody = document.getElementById('db-users-tbody');
  const totalCount = document.getElementById('db-modal-total-count');
  if (!modal || !tbody) return;

  const users = UserDB.getUsers();
  if (totalCount) totalCount.textContent = users.length + ' Registered Accounts';

  tbody.innerHTML = users.map(u => `
    <tr>
      <td><code style="color: var(--accent-lavender); font-weight: 700;">${u.id}</code></td>
      <td>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 1.2rem;">${u.avatar || '🐰'}</span>
          <div>
            <strong style="color: var(--text-primary);">${u.name}</strong>
            <div style="font-size: 0.72rem; color: var(--text-muted);">${u.email}</div>
          </div>
        </div>
      </td>
      <td><span style="font-family: var(--font-mono); font-weight: 600;">${u.rollNo}</span></td>
      <td>
        <span style="font-size: 0.72rem; font-weight: 700; padding: 2px 8px; border-radius: var(--radius-full); background: rgba(157, 78, 221, 0.15); color: var(--accent-lavender);">
          ${u.role}
        </span>
      </td>
      <td><span style="font-size: 0.8rem; color: var(--text-secondary);">${u.specialization || 'Cybersecurity'}</span></td>
      <td><span style="font-size: 0.75rem; color: var(--text-muted);">${new Date(u.createdAt).toLocaleDateString()}</span></td>
      <td>
        <span style="font-size: 0.72rem; font-weight: 800; color: var(--accent-mint); background: rgba(46, 196, 182, 0.15); padding: 2px 8px; border-radius: var(--radius-full);">
          ● ${u.status || 'Active'}
        </span>
      </td>
    </tr>
  `).join('');

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeDatabaseModal = function() {
  const modal = document.getElementById('db-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

// Theme Management
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.textContent = state.theme === 'dark' ? '☀️' : '🌙';
    themeBtn.title = state.theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    themeBtn.addEventListener('click', toggleTheme);
  }
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', state.theme);
  document.documentElement.setAttribute('data-theme', state.theme);
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.textContent = state.theme === 'dark' ? '☀️' : '🌙';
  }
}

// Navigation Handling
function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetUnit = item.getAttribute('data-target');
      if (targetUnit) {
        state.currentUnit = targetUnit;
        state.activeCategory = 'all';
        state.searchQuery = '';
        const searchInput = document.getElementById('global-search');
        if (searchInput) searchInput.value = '';

        navItems.forEach(n => n.classList.remove('active'));
        item.classList.add('active');

        // Close mobile drawer if open
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) sidebar.classList.remove('open');

        renderCurrentView();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
}

function setupMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const sidebar = document.querySelector('.sidebar');
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }
}

// Search Handling
function setupSearch() {
  const searchInput = document.getElementById('global-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      renderCurrentView();
    });
  }
}

// Main View Dispatcher
function renderCurrentView() {
  const container = document.getElementById('content-container');
  if (!container) return;

  if (state.currentUnit === 'overview') {
    renderOverview(container);
  } else if (state.currentUnit === 'tools') {
    renderToolsView(container);
  } else if (state.currentUnit === 'quiz') {
    renderQuizView(container);
  } else if (curriculumData[state.currentUnit]) {
    renderUnitView(container, curriculumData[state.currentUnit]);
  }
}

// Render Helper Functions for Modularity and Reliability
function renderUnitCard(unit) {
  const icon = unit.id === 'unit1' ? '🔍' : unit.id === 'unit2' ? '🛡️' : unit.id === 'unit3' ? '📊' : '⚖️';
  const highlights = unit.topics.slice(0, 3).map(t => t.title).join(' • ');
  return [
    '<div class="splash-card" onclick="selectUnit(\'' + unit.id + '\')">',
    '  <div class="card-top">',
    '    <div class="card-icon-wrap" style="color: var(--accent-' + unit.badgeClass + '); background: rgba(6, 182, 212, 0.1);">' + icon + '</div>',
    '    <span class="card-tag ' + unit.badgeClass + '">' + unit.hours + '</span>',
    '  </div>',
    '  <div class="card-title">' + unit.number + ': ' + unit.title + '</div>',
    '  <p style="font-size: 0.86rem; color: var(--text-secondary); margin-bottom: 16px; line-height: 1.5;">' + unit.description + '</p>',
    '  <div class="takeaway-box" style="border-left-color: var(--accent-' + unit.badgeClass + ');">',
    '    <strong style="color: var(--accent-' + unit.badgeClass + ');">Key Highlights</strong>' + highlights,
    '  </div>',
    '  <div class="card-footer">',
    '    <span class="topic-code">' + unit.topics.length + ' Study Topics</span>',
    '    <button class="btn-open-detail" style="color: var(--accent-' + unit.badgeClass + ');">Open Unit <span>→</span></button>',
    '  </div>',
    '</div>'
  ].join('\n');
}

function renderSplashCard(unitId, topic) {
  const bullets = topic.summary.map(b => '<li>' + b + '</li>').join('');
  return [
    '<div class="splash-card" onclick="openDetailModal(\'' + unitId + '\', \'' + topic.id + '\')">',
    '  <div class="card-top">',
    '    <div class="card-icon-wrap">' + topic.icon + '</div>',
    '    <span class="card-tag ' + topic.tagColor + '">' + topic.category + '</span>',
    '  </div>',
    '  <div class="card-title">' + topic.title + '</div>',
    '  <ul class="card-summary-list">' + bullets + '</ul>',
    '  <div class="takeaway-box">',
    '    <strong>Key Forensic Takeaway</strong>' + topic.takeaway,
    '  </div>',
    '  <div class="card-footer">',
    '    <span class="topic-code">' + topic.code + '</span>',
    '    <button class="btn-open-detail">Explore In-Depth <span>→</span></button>',
    '  </div>',
    '</div>'
  ].join('\n');
}

/* ==========================================================================
   OVERVIEW / HUB DASHBOARD
   ========================================================================== */
function renderOverview(container) {
  let totalTopics = 0;
  Object.values(curriculumData).forEach(u => totalTopics += u.topics.length);

  const unitCardsHtml = Object.values(curriculumData).map(renderUnitCard).join('\n');

  container.innerHTML = `
    <div class="unit-banner">
      <div class="banner-meta-row">
        <span class="badge-unit">Curriculum Dashboard</span>
        <span class="badge-spec">M.Sc. / B.Sc. Forensic Science (Cybersecurity)</span>
        <span class="badge-hours">Paper 1: 60 Total Hours</span>
      </div>
      <h1 class="banner-title">Cyber Law, Risk and Compliance</h1>
      <p class="banner-desc">
        National Forensic Sciences University (NFSU) — Semester 5 Course Portal.
        A unified interactive platform covering IT security assessments, infrastructure domain compliance, enterprise risk governance (BCP/DR), Indian cyber law (IT Act 2000 & DPDP 2023), and international audit standards.
      </p>
    </div>

    <!-- Quick Stats -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon" style="color: var(--accent-cyan); background: rgba(6, 182, 212, 0.1);">📚</div>
        <div>
          <div class="stat-num">4 Units</div>
          <div class="stat-label">Comprehensive Syllabus</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon" style="color: var(--accent-amber); background: rgba(245, 158, 11, 0.1);">⏱️</div>
        <div>
          <div class="stat-num">60 Hours</div>
          <div class="stat-label">Teaching Curriculum</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon" style="color: var(--accent-emerald); background: rgba(16, 185, 129, 0.1);">📋</div>
        <div>
          <div class="stat-num">${totalTopics} Topics</div>
          <div class="stat-label">Detailed Study Modules</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon" style="color: var(--accent-purple); background: rgba(168, 85, 247, 0.1);">⚖️</div>
        <div>
          <div class="stat-num">18+ Sections</div>
          <div class="stat-label">IT Act 2000 & DPDP 2023</div>
        </div>
      </div>
    </div>

    <!-- Syllabus Unit Cards (Executive Splash Cards) -->
    <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 18px; color: var(--text-primary); display: flex; align-items: center; gap: 8px;">
      <span>📑</span> Course Syllabus Modules
    </h3>

    <div class="splash-grid">
      ${unitCardsHtml}
    </div>

    <!-- Quick Utilities Callout Banner -->
    <div style="margin-top: 36px; padding: 24px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
      <div>
        <h4 style="font-size: 1.1rem; color: var(--text-primary); margin-bottom: 4px;">Ready to test your knowledge or calculate risk?</h4>
        <p style="font-size: 0.88rem; color: var(--text-secondary);">Access the interactive Risk Matrix Calculator, IT Act Section Explorer, 7 Domains Diagram, or the Practice Exam Quiz.</p>
      </div>
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <button class="btn-secondary" onclick="selectUnit('tools')">🛠️ Interactive Tools</button>
        <button class="btn-primary" onclick="selectUnit('quiz')">📝 Start Practice Quiz</button>
      </div>
    </div>
  `;
}

// Function to select unit from code
window.selectUnit = function(unitId) {
  state.currentUnit = unitId;
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(n => {
    if (n.getAttribute('data-target') === unitId) {
      n.classList.add('active');
    } else {
      n.classList.remove('active');
    }
  });
  renderCurrentView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/* ==========================================================================
   UNIT SPLASH CARDS VIEW
   ========================================================================== */
function renderUnitView(container, unit) {
  // Extract categories for filtering
  const categories = ['all', ...new Set(unit.topics.map(t => t.category))];

  // Filter topics
  let filteredTopics = unit.topics.filter(t => {
    const matchesCategory = state.activeCategory === 'all' || t.category === state.activeCategory;
    const matchesSearch = !state.searchQuery || 
      t.title.toLowerCase().includes(state.searchQuery) ||
      t.code.toLowerCase().includes(state.searchQuery) ||
      t.summary.some(s => s.toLowerCase().includes(state.searchQuery));
    return matchesCategory && matchesSearch;
  });

  container.innerHTML = `
    <div class="unit-banner">
      <div class="banner-meta-row">
        <span class="badge-unit">${unit.number}</span>
        <span class="badge-hours">${unit.hours}</span>
        <span class="badge-spec">Cybersecurity Specialization</span>
      </div>
      <h1 class="banner-title">${unit.title}</h1>
      <p class="banner-desc">${unit.description}</p>
    </div>

    <!-- Filter & Search Bar -->
    <div class="filter-bar">
      <div class="filter-pills">
        ${categories.map(cat => `
          <button class="filter-btn ${state.activeCategory === cat ? 'active' : ''}" 
                  onclick="setFilter('${cat}')">
            ${cat === 'all' ? 'All Topics' : cat}
          </button>
        `).join('')}
      </div>
      <div class="topics-counter">
        Showing <strong>${filteredTopics.length}</strong> of ${unit.topics.length} topics
      </div>
    </div>

    <!-- Splash Cards Grid -->
    ${filteredTopics.length > 0 ? `
      <div class="splash-grid">
        ${filteredTopics.map(t => renderSplashCard(unit.id, t)).join('\n')}
      </div>
    ` : `
      <div style="text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-color);">
        <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 8px;">No topics match your search criteria.</p>
        <button class="btn-secondary" onclick="resetFilters()">Clear Filters & Search</button>
      </div>
    `}
  `;
}

window.setFilter = function(category) {
  state.activeCategory = category;
  renderCurrentView();
};

window.resetFilters = function() {
  state.activeCategory = 'all';
  state.searchQuery = '';
  const searchInput = document.getElementById('global-search');
  if (searchInput) searchInput.value = '';
  renderCurrentView();
};

/* ==========================================================================
   INTERACTIVE TOOLS VIEW (Risk Calculator, IT Act, 7 Domains)
   ========================================================================== */
function renderToolsView(container) {
  container.innerHTML = `
    <div class="unit-banner">
      <div class="banner-meta-row">
        <span class="badge-unit">Interactive Utilities</span>
        <span class="badge-spec">Practical Compliance & Risk Lab</span>
      </div>
      <h1 class="banner-title">Cyber Risk & Legal Reference Tools</h1>
      <p class="banner-desc">
        Interactive computational tools and rapid-lookup matrices designed for forensic cybersecurity practitioners and Semester 5 coursework.
      </p>
    </div>

    <!-- Tool 1: Qualitative & Quantitative Risk Calculator -->
    <div class="tool-card">
      <div class="tool-header">
        <div class="tool-title"><span>📊</span> Enterprise Risk Matrix & ALE Calculator</div>
        <p class="tool-desc">Calculate qualitative Risk Score (Likelihood × Impact) and quantitative Annualized Loss Expectancy (ALE = AV × EF × ARO).</p>
      </div>

      <div class="risk-calc-grid">
        <div>
          <h4 style="color: var(--text-primary); margin-bottom: 14px;">1. Qualitative Scoring</h4>
          
          <div class="slider-group">
            <div class="slider-label">
              <span>Likelihood of Occurrence:</span>
              <span id="likelihood-val" style="color: var(--accent-cyan); font-weight: 700;">3 (Possible)</span>
            </div>
            <input type="range" min="1" max="5" value="3" class="slider-input" id="input-likelihood" oninput="updateRiskCalc()">
          </div>

          <div class="slider-group">
            <div class="slider-label">
              <span>Impact Severity (Business/Legal):</span>
              <span id="impact-val" style="color: var(--accent-cyan); font-weight: 700;">3 (Moderate)</span>
            </div>
            <input type="range" min="1" max="5" value="3" class="slider-input" id="input-impact" oninput="updateRiskCalc()">
          </div>

          <h4 style="color: var(--text-primary); margin: 20px 0 14px;">2. Quantitative Loss (ALE)</h4>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
            <div>
              <label style="font-size: 0.75rem; color: var(--text-muted); display: block; margin-bottom: 4px;">Asset Value (₹):</label>
              <input type="number" id="calc-av" value="5000000" style="width: 100%; padding: 8px 12px; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); color: #fff;" oninput="updateRiskCalc()">
            </div>
            <div>
              <label style="font-size: 0.75rem; color: var(--text-muted); display: block; margin-bottom: 4px;">Exposure Factor (EF 0.1 - 1.0):</label>
              <input type="number" step="0.1" min="0" max="1" id="calc-ef" value="0.4" style="width: 100%; padding: 8px 12px; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); color: #fff;" oninput="updateRiskCalc()">
            </div>
          </div>
          <div>
            <label style="font-size: 0.75rem; color: var(--text-muted); display: block; margin-bottom: 4px;">Annual Rate of Occurrence (ARO times/year):</label>
            <input type="number" step="0.1" id="calc-aro" value="0.5" style="width: 100%; padding: 8px 12px; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); color: #fff;" oninput="updateRiskCalc()">
          </div>
        </div>

        <div class="risk-result-box" id="risk-result-container">
          <div style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em;">Risk Priority Score</div>
          <div class="risk-score" id="risk-score-display" style="color: var(--accent-amber);">9 / 25</div>
          <div class="risk-level-tag" id="risk-level-display" style="background: rgba(245, 158, 11, 0.2); color: var(--accent-amber);">Medium Risk</div>
          
          <div style="margin-top: 20px; padding-top: 16px; border-top: 1px dashed var(--border-color); width: 100%; font-size: 0.84rem; text-align: left;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <span>Single Loss Expectancy (SLE):</span>
              <strong id="display-sle" style="color: var(--text-primary);">₹20,00,000</strong>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span>Annual Loss Expectancy (ALE):</span>
              <strong id="display-ale" style="color: var(--accent-cyan);">₹10,00,000 / yr</strong>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tool 2: Interactive 7 Domains Explorer -->
    <div class="tool-card">
      <div class="tool-header">
        <div class="tool-title"><span>🛡️</span> Interactive 7 Domains of IT Infrastructure Explorer</div>
        <p class="tool-desc">Click any domain to inspect common devices, compliance business drivers, and auditor verification points.</p>
      </div>

      <div class="domains-container">
        ${Object.keys(domainDetails).map(k => `
          <div class="domain-pill-card ${k == 1 ? 'selected' : ''}" id="domain-pill-${k}" onclick="selectDomainDetail(${k})">
            <div style="font-size: 0.72rem; color: var(--accent-cyan); font-weight: 700; text-transform: uppercase;">Domain ${k}</div>
            <div style="font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 4px 0 8px;">${domainDetails[k].name.split('. ')[1]}</div>
            <div style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.4;">${domainDetails[k].role}</div>
          </div>
        `).join('')}
      </div>

      <div id="domain-detail-display" style="margin-top: 20px; padding: 20px; background: var(--bg-surface); border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan);">
        <h4 id="dom-title" style="color: var(--text-primary); margin-bottom: 8px;">${domainDetails[1].name}</h4>
        <p id="dom-devices" style="font-size: 0.88rem; margin-bottom: 8px;"><strong>Components:</strong> ${domainDetails[1].devices}</p>
        <p id="dom-drivers" style="font-size: 0.88rem; margin-bottom: 8px;"><strong>Compliance Drivers:</strong> ${domainDetails[1].drivers}</p>
        <p id="dom-audit" style="font-size: 0.88rem; color: var(--accent-cyan);"><strong>Audit Checkpoint:</strong> ${domainDetails[1].auditPoints}</p>
      </div>
    </div>

    <!-- Tool 3: IT Act 2000 Section Quick Finder -->
    <div class="tool-card">
      <div class="tool-header">
        <div class="tool-title"><span>📜</span> Indian Cyber Law (IT Act 2000) Quick Finder</div>
        <p class="tool-desc">Instant statutory lookup of civil penalties, criminal offenses, CSAM, identity theft, and cyber terrorism.</p>
      </div>

      <div style="margin-bottom: 16px;">
        <input type="text" id="it-act-search" placeholder="Filter sections by keyword (e.g., identity theft, CSAM, terrorism, 66)..." 
               style="width: 100%; padding: 10px 16px; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-md); color: #fff; font-size: 0.88rem;"
               oninput="filterItActTable()">
      </div>

      <div class="table-wrapper">
        <table class="content-table" id="it-act-table">
          <thead>
            <tr>
              <th>Section</th>
              <th>Offense / Legal Description</th>
              <th>Nature</th>
              <th>Maximum Prescribed Punishment / Fine</th>
            </tr>
          </thead>
          <tbody>
            ${itActSections.map(s => `
              <tr>
                <td><strong style="color: var(--accent-cyan); font-family: var(--font-mono);">${s.sec}</strong></td>
                <td>${s.title}</td>
                <td>
                  <span style="font-size: 0.72rem; padding: 2px 8px; border-radius: var(--radius-full); font-weight: 700; ${s.type === 'Criminal' ? 'background: rgba(244, 63, 94, 0.15); color: var(--accent-rose);' : 'background: rgba(59, 130, 246, 0.15); color: var(--accent-blue);'}">
                    ${s.type}
                  </span>
                </td>
                <td>${s.penalty}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  updateRiskCalc();
}

window.selectDomainDetail = function(id) {
  document.querySelectorAll('.domain-pill-card').forEach(c => c.classList.remove('selected'));
  const activeCard = document.getElementById(`domain-pill-${id}`);
  if (activeCard) activeCard.classList.add('selected');

  const d = domainDetails[id];
  if (!d) return;

  document.getElementById('dom-title').textContent = d.name;
  document.getElementById('dom-devices').innerHTML = `<strong>Components:</strong> ${d.devices}`;
  document.getElementById('dom-drivers').innerHTML = `<strong>Compliance Drivers:</strong> ${d.drivers}`;
  document.getElementById('dom-audit').innerHTML = `<strong>Audit Checkpoint:</strong> ${d.auditPoints}`;
};

window.updateRiskCalc = function() {
  const likelihoodInput = document.getElementById('input-likelihood');
  const impactInput = document.getElementById('input-impact');
  if (!likelihoodInput || !impactInput) return;

  const likelihood = parseInt(likelihoodInput.value);
  const impact = parseInt(impactInput.value);

  const likelihoodLabels = { 1: "1 (Rare)", 2: "2 (Unlikely)", 3: "3 (Possible)", 4: "4 (Likely)", 5: "5 (Almost Certain)" };
  const impactLabels = { 1: "1 (Insignificant)", 2: "2 (Minor)", 3: "3 (Moderate)", 4: "4 (Major)", 5: "5 (Catastrophic)" };

  document.getElementById('likelihood-val').textContent = likelihoodLabels[likelihood];
  document.getElementById('impact-val').textContent = impactLabels[impact];

  const score = likelihood * impact;
  const scoreDisplay = document.getElementById('risk-score-display');
  const levelDisplay = document.getElementById('risk-level-display');

  scoreDisplay.textContent = `${score} / 25`;

  if (score >= 15) {
    scoreDisplay.style.color = 'var(--accent-rose)';
    levelDisplay.style.background = 'rgba(244, 63, 94, 0.2)';
    levelDisplay.style.color = 'var(--accent-rose)';
    levelDisplay.textContent = 'Critical / High Risk';
  } else if (score >= 8) {
    scoreDisplay.style.color = 'var(--accent-amber)';
    levelDisplay.style.background = 'rgba(245, 158, 11, 0.2)';
    levelDisplay.style.color = 'var(--accent-amber)';
    levelDisplay.textContent = 'Medium Risk';
  } else {
    scoreDisplay.style.color = 'var(--accent-emerald)';
    levelDisplay.style.background = 'rgba(16, 185, 129, 0.2)';
    levelDisplay.style.color = 'var(--accent-emerald)';
    levelDisplay.textContent = 'Low / Acceptable Risk';
  }

  // Quantitative calculation
  const av = parseFloat(document.getElementById('calc-av').value) || 0;
  const ef = parseFloat(document.getElementById('calc-ef').value) || 0;
  const aro = parseFloat(document.getElementById('calc-aro').value) || 0;

  const sle = av * ef;
  const ale = sle * aro;

  const fmt = (num) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(num);

  document.getElementById('display-sle').textContent = fmt(sle);
  document.getElementById('display-ale').textContent = `${fmt(ale)} / yr`;
};

window.filterItActTable = function() {
  const query = document.getElementById('it-act-search').value.toLowerCase();
  const table = document.getElementById('it-act-table');
  const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

  for (let i = 0; i < rows.length; i++) {
    const text = rows[i].textContent.toLowerCase();
    rows[i].style.display = text.includes(query) ? '' : 'none';
  }
};

/* ==========================================================================
   INTERACTIVE QUIZ VIEW
   ========================================================================== */
function renderQuizView(container) {
  const q = quizQuestions[state.quizCurrentIndex];
  const isAnswered = state.quizAnswers[state.quizCurrentIndex] !== undefined;
  const userAnswer = state.quizAnswers[state.quizCurrentIndex];

  container.innerHTML = `
    <div class="unit-banner">
      <div class="banner-meta-row">
        <span class="badge-unit">Self-Assessment</span>
        <span class="badge-spec">Semester 5 Exam Practice</span>
      </div>
      <h1 class="banner-title">Cyber Law, Risk & Compliance Practice Exam</h1>
      <p class="banner-desc">
        Test your knowledge of IT security audits, infrastructure baselines, quantitative risk equations, BCP/DR metrics, and IT Act sections.
      </p>
    </div>

    <div class="quiz-box">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; font-size: 0.88rem; color: var(--text-muted);">
        <span>Question <strong>${state.quizCurrentIndex + 1}</strong> of ${quizQuestions.length}</span>
        <span>Score: <strong style="color: var(--accent-cyan);">${state.quizScore}</strong> / ${quizQuestions.length}</span>
      </div>

      <!-- Question Progress Bar -->
      <div style="height: 6px; background: var(--bg-surface); border-radius: 4px; overflow: hidden; margin-bottom: 24px;">
        <div style="height: 100%; width: ${((state.quizCurrentIndex + 1) / quizQuestions.length) * 100}%; background: linear-gradient(90deg, var(--accent-cyan), var(--accent-blue)); transition: width 0.3s ease;"></div>
      </div>

      <div class="quiz-question">${q.question}</div>

      <div class="quiz-options">
        ${q.options.map((opt, idx) => {
          let btnClass = 'quiz-option-btn';
          if (isAnswered) {
            if (idx === q.correct) btnClass += ' correct';
            else if (idx === userAnswer) btnClass += ' wrong';
          }
          return `
            <button class="${btnClass}" onclick="handleQuizAnswer(${idx})" ${isAnswered ? 'disabled' : ''}>
              <span style="width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.08); font-size: 0.8rem; font-weight: 700;">
                ${String.fromCharCode(65 + idx)}
              </span>
              <span>${opt}</span>
            </button>
          `;
        }).join('')}
      </div>

      <div class="quiz-explanation" id="quiz-explanation" style="${isAnswered ? 'display: block;' : ''}">
        <strong>Explanation:</strong> ${q.explanation}
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 24px;">
        <button class="btn-secondary" onclick="prevQuizQuestion()" ${state.quizCurrentIndex === 0 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
          ← Previous
        </button>

        ${state.quizCurrentIndex < quizQuestions.length - 1 ? `
          <button class="btn-primary" onclick="nextQuizQuestion()" ${!isAnswered ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
            Next Question →
          </button>
        ` : `
          <button class="btn-primary" onclick="resetQuiz()">
            Restart Exam 🔄
          </button>
        `}
      </div>
    </div>
  `;
}

window.handleQuizAnswer = function(selectedIndex) {
  if (state.quizAnswers[state.quizCurrentIndex] !== undefined) return;

  state.quizAnswers[state.quizCurrentIndex] = selectedIndex;
  const currentQ = quizQuestions[state.quizCurrentIndex];

  if (selectedIndex === currentQ.correct) {
    state.quizScore++;
  }

  renderCurrentView();
};

window.nextQuizQuestion = function() {
  if (state.quizCurrentIndex < quizQuestions.length - 1) {
    state.quizCurrentIndex++;
    renderCurrentView();
  }
};

window.prevQuizQuestion = function() {
  if (state.quizCurrentIndex > 0) {
    state.quizCurrentIndex--;
    renderCurrentView();
  }
};

window.resetQuiz = function() {
  state.quizCurrentIndex = 0;
  state.quizScore = 0;
  state.quizAnswers = {};
  renderCurrentView();
};

/* ==========================================================================
   IN-DEPTH MODAL HANDLERS
   ========================================================================== */
function setupModalEvents() {
  const modalOverlay = document.getElementById('detail-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && modalOverlay) {
    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  const tabBtns = document.querySelectorAll('.modal-tab');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeModalTab = btn.getAttribute('data-tab');
      renderModalTabContent();
    });
  });
}

window.openDetailModal = function(unitId, topicId) {
  const unit = curriculumData[unitId];
  if (!unit) return;
  const topic = unit.topics.find(t => t.id === topicId);
  if (!topic) return;

  state.selectedTopic = { ...topic, unitNumber: unit.number, unitTitle: unit.title };
  state.activeModalTab = 'concepts';

  const modalOverlay = document.getElementById('detail-modal');
  document.getElementById('modal-topic-code').textContent = `${unit.number} • ${topic.code} • ${topic.category}`;
  document.getElementById('modal-topic-title').textContent = topic.title;

  document.querySelectorAll('.modal-tab').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-tab') === 'concepts');
  });

  renderModalTabContent();

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

function renderModalTabContent() {
  const container = document.getElementById('modal-body-content');
  const topic = state.selectedTopic;
  if (!container || !topic || !topic.detailContent) return;

  const content = topic.detailContent[state.activeModalTab];
  container.innerHTML = content || '<p>No details available for this section.</p>';
}

function closeModal() {
  const modalOverlay = document.getElementById('detail-modal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}
