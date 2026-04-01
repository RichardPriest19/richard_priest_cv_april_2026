/* ═══════════════════════════════════════════════════════════════════
   Richard Priest – Senior Technology Executive
   script.js  |  Data · Navigation · Pagination · QR Code · Forms
═══════════════════════════════════════════════════════════════════ */
'use strict';

/* ══════════════════════════ CONSTANTS ════════════════════════════ */
const CAREERS_PER_PAGE    = 3;
const EMPLOYERS_PER_PAGE  = 4;
const GOVERNANCE_PER_PAGE = 4;

/* ══════════════════════════ STATE ════════════════════════════════ */
let careerPage    = 1;
let employerPage  = 1;
let governancePage= 1;

/* ══════════════════════════ CAREER DATA ══════════════════════════ */
const careers = [
  {
    num: 1, title: "Head of Technology",
    company: "Armstrong Watson LLP", sector: "Accountancy & Financial Services",
    period: "October 2024 – May 2025", location: "Northern England & Scotland (19 offices)",
    desc: "Led the firm's technology strategy and digital transformation during a period of significant organisational growth, overseeing IT infrastructure, systems architecture, cyber security, and technology governance across a 19-office network. Directed the integration of newly acquired practice IT environments, managing data migration, network connectivity, and business continuity following active M&A activity.",
    achievements: [
      "Championed Microsoft 365 and cloud adoption strategy across 800+ colleagues at 19 regional offices, using an Impact-Effort Matrix to sequence the rollout phases",
      "Developed policies and controls aligned with NCSC guidelines, GDPR obligations, and FCA regulatory requirements",
      "Prioritised the Copilot agent development backlog using RICE scoring (Reach, Impact, Confidence, Effort) and ICE scoring to rank agent features by colleague value",
      "Applied User Story Mapping to define colleague journeys for the SharePoint Copilot agents, ensuring requirements were captured from the practitioner perspective before build began",
      "Used the Eisenhower Matrix to triage competing IT demands across 19 offices, distinguishing urgent-and-important security issues from important-but-not-urgent infrastructure improvements and delegating accordingly",
      "Applied Cost of Delay (CoD) analysis to the Copilot agent project to quantify the ongoing business cost of colleagues spending two weeks per document retrieval task, making the case for accelerated investment",
      "Managed IT budget planning using an Agile iterative delivery model, delivering cost efficiencies through contract renegotiation and platform consolidation"
    ],
    skills: ["IT Strategy","Digital Transformation","Agile","Cloud Computing","Microsoft 365","Xero","Cyber Security","NCSC","GDPR","FCA Compliance","Making Tax Digital","M&A IT Integration","IT Governance","Risk Management","Vendor Management","RICE Scoring","ICE Scoring","User Story Mapping","Impact-Effort Matrix","Eisenhower Matrix","Cost of Delay (CoD)"],
    regulators: ["FRC","ICAEW","ICAS","FCA","ICO","ISO 27001","NIST"],
    star: {
      title: "Microsoft Copilot Agents to Retrieve Client Documents Across 36,000 SharePoint Accounts",
      situation: "Armstrong Watson holds up to 1,500 documents per client across a SharePoint estate covering approximately 36,000 clients — a total document library running into the tens of millions of files. Colleagues needing to locate specific documents for a client engagement had to navigate manually through folder structures and apply individual searches, a process that routinely took up to two weeks per request. This was consuming significant colleague time and delaying the delivery of client services.",
      task: "As Head of Technology, I was asked to find a scalable solution that would allow colleagues to retrieve relevant client documents from SharePoint quickly and without specialist technical knowledge — reducing the time cost of document retrieval and freeing colleagues to focus on billable and client-facing work.",
      action: "I identified Microsoft Copilot's agent capability as the appropriate solution and led a project to design and deploy a set of Copilot agents integrated directly with the firm's SharePoint environment. Each agent was configured to accept structured parameters from the colleague — such as client reference, document type, date range, or subject matter — and execute a targeted search across the SharePoint library, surfacing relevant documents in a single consolidated response. I worked with the Microsoft 365 team on the technical implementation, with compliance and data governance leads to ensure the agents operated within GDPR and FCA information security boundaries, and with practice teams to refine the search parameters to reflect real-world query patterns.",
      result: "Document retrieval time was reduced from an average of approximately two weeks to under two minutes. Colleagues across the firm were able to locate and act on client documentation almost immediately, freeing up substantial capacity that had previously been absorbed by manual search activity. The Copilot agent deployment was adopted as a firm-wide productivity tool and demonstrated the practical value of AI-assisted workflows within a regulated professional services environment."
    }
  },
  {
    num: 2, title: "IT Director",
    company: "Nova Pangaea Technologies (UK) Ltd", sector: "Cleantech Manufacturing / Renewable Aviation",
    period: "September 2023 – September 2024", location: "Wilton International, Teesside",
    desc: "Served as IT Director for Nova Pangaea Technologies (NPT), developer of the proprietary REFNOVA® process — converting non-food biomass into second-generation bioethanol and biochar for sustainable aviation fuel and carbon removal. Joined during a critical scale-up phase as the business secured a $29 million funding round and progressed planning for NOVAONE, the UK's first second-generation bioethanol commercial plant within the Teesside Freeport zone.",
    achievements: [
      "Designed and implemented a scalable IT infrastructure roadmap, applying an Impact-Effort Matrix to sequence investment priorities in line with the NOVAONE plant development milestones",
      "Used MoSCoW prioritisation to define Must-have, Should-have, Could-have, and Won't-have requirements within the ICT roadmap, ensuring investor-facing deliverables were protected",
      "Applied Cost of Delay (CoD) analysis to the cyber security framework project — quantifying the financial and reputational risk of delaying investor-grade security governance beyond the funding round — to justify accelerated delivery over a ten-week window",
      "Implemented ISO 27001, Cyber Essentials Plus, and UK GDPR frameworks to satisfy institutional investor due diligence",
      "Used the Eisenhower Matrix to manage personal and team workload during the rapid scale-up phase, ensuring critical security and infrastructure tasks were completed before strategic roadmap work",
      "Established an MSP network using Agile supplier onboarding sprints, enabling rapid capacity scale-up without long procurement lead times",
      "Managed IT components of business continuity planning (BCP) and disaster recovery (DR) at Wilton International"
    ],
    skills: ["IT Strategy","Agile","MoSCoW","Impact-Effort Matrix","Eisenhower Matrix","Cost of Delay (CoD)","Cloud Computing","Microsoft 365","Google Cloud","Cyber Security","ISO 27001","Cyber Essentials Plus","UK GDPR","OT Security","IEC 62443","LIMS Integration","BCP/DR","Vendor Management"],
    regulators: ["Environment Agency","DESNZ (RTFO)","ISO 14001","ISO 50001","ISO 22301","IEC 62443","HSE"],
    star: {
      title: "Building an ICT Roadmap and MSP Network from Scratch in a High-growth Cleantech Scale-up",
      situation: "When I joined Nova Pangaea Technologies, there was no ICT roadmap in place — no documented strategy, no planned investment programme, and no structured approach to technology procurement or supplier management. The business was growing rapidly, having secured a $29 million funding round, yet the IT function lacked the governance infrastructure needed to support that growth or to satisfy the due diligence expectations of institutional investors and government grant bodies.",
      task: "As the incoming IT Director, I needed to create an ICT roadmap from a standing start that would define the technology direction for the business, prioritise investment in line with the company's scale-up trajectory, and establish a supplier framework capable of delivering the technical capacity and expertise the organisation would require as headcount and operational complexity increased.",
      action: "I began with a full assessment of the existing IT environment — infrastructure, systems, security posture, and capability gaps — and used this as the foundation for a structured ICT roadmap covering a rolling three-year horizon. The roadmap was aligned to the company's operational milestones for the NOVAONE plant development programme and presented to the C-suite for sign-off. In parallel, I designed and implemented a managed service provider (MSP) network to supplement the internal IT function: identifying, evaluating, and onboarding specialist MSPs covering infrastructure management, cyber security, and end-user support. Each MSP engagement was governed by a formal SLA and contract framework, ensuring accountability and service quality as the business scaled.",
      result: "Nova Pangaea had a formally documented and board-approved ICT roadmap within the first quarter of my tenure — the first in the company's history. The MSP network provided immediate uplift in IT support capacity and specialist expertise, removing dependency on ad hoc supplier arrangements. The combination of a clear roadmap and a structured MSP framework was cited positively during investor due diligence as evidence of operational maturity appropriate to a business at commercialisation stage."
    }
  },
  {
    num: 3, title: "IT Director",
    company: "EDF Renewables UK & Ireland", sector: "Renewable Energy (Onshore/Offshore Wind, Solar, BESS)",
    period: "March 2023 – August 2023", location: "UK & Ireland (with EDF Group liaison, Paris)",
    desc: "Led the IT function for EDF Renewables UK & Ireland — a subsidiary of the French state-owned EDF Group operating onshore/offshore wind, solar, and battery energy storage systems targeting 10 GW by 2035. Served as senior technology decision-maker reporting to the Executive Leadership Team, driving a multi-year IT strategy aligned to the company's renewable energy expansion roadmap.",
    achievements: [
      "Oversaw IT/OT convergence with specific accountability for SCADA integration and asset performance management across wind and BESS sites",
      "Spearheaded a cyber security enhancement programme aligned with NCSC Cyber Essentials Plus and NIS Regulations, introducing SOC monitoring capability",
      "Managed cloud migration from on-premise to Microsoft Azure/365 using an Agile delivery model, improving resilience for office and field-based teams",
      "Led the project tracking integration programme using MoSCoW requirements prioritisation to align Microsoft Project, Excel, and IFS stakeholder needs before solution design began",
      "Applied a Gate Process to the CMMS deployment programme, ensuring each phase passed defined quality and readiness criteria before progressing to the next stage",
      "Used Cost of Delay (CoD) modelling to demonstrate the operational cost of continuing to reconcile project data manually across three tools — the quantified delay cost directly underpinned the business case for the integration investment",
      "Championed Power BI-based reporting for real-time visibility of energy generation performance, asset health, and operational KPIs"
    ],
    skills: ["IT Strategy","Agile","MoSCoW","Gate Process","Cost of Delay (CoD)","Cloud Migration","Microsoft Azure","Microsoft 365","SAP ERP","SCADA/OT Systems","Cyber Security","NIS Regulations","ISO 27001","UK GDPR","ICS Security","Asset Performance Management","CMMS","Power BI","IT/OT Convergence"],
    regulators: ["Ofgem","CRE (France)","Environment Agency","SEPA","IEC 62443","NERC CIP","National Grid ESO","NCSC"],
    star: {
      title: "Creating a Single Source of Truth for Project Tracking Across Microsoft Project, Excel, and IFS",
      situation: "Project tracking at EDF Renewables UK & Ireland was being conducted across three separate tools simultaneously: Microsoft Project for scheduling, Microsoft Excel for cost and resource tracking, and IFS (the enterprise asset management and ERP platform) for operational and financial data. There was no integration between these systems, meaning that project managers had to maintain records in all three, reconcile discrepancies manually, and produce status reports by consolidating data from multiple sources. This created significant duplication of effort, introduced data inconsistency, and made it impossible to obtain a reliable, real-time view of project status across the portfolio.",
      task: "I was responsible for identifying and delivering a solution that would integrate the three platforms into a single source of truth — eliminating duplicate data entry, reducing reconciliation effort, and giving project managers and senior leadership a consistent, accurate view of project progress, cost, and resource utilisation in real time.",
      action: "I led a structured requirements-gathering exercise with project managers, finance, and operations to define precisely what data needed to flow between the systems and where the authoritative source for each data type should reside. I evaluated integration options and identified a solution that used automated data connectors to synchronise scheduling data from Microsoft Project, cost and resource data from Excel-based templates, and operational and financial actuals from IFS — presenting a unified project dashboard that drew live data from all three sources. I managed the technical implementation with the relevant vendors and the IFS system integrator, overseeing testing, data validation, and the change management programme to transition project teams to the new way of working.",
      result: "The integrated solution was successfully deployed and adopted across the project management function. Project managers no longer maintained three separate records; data entry was consolidated and synchronised automatically. Senior leadership gained access to a real-time project portfolio view for the first time, enabling faster and better-informed decisions on resource allocation and project prioritisation. The elimination of manual reconciliation activity freed an estimated two to three days per week of project management time across the team."
    }
  },
  {
    num: 4, title: "IT Director",
    company: "VetPartners Group Limited", sector: "Animal Health / Veterinary Healthcare",
    period: "March 2022 – September 2022", location: "York, UK (350+ clinics nationally)",
    desc: "Served as IT Director at VetPartners, the UK's fastest-growing veterinary group consolidator, operating over 350 clinics across small animal, equine, farm, mixed, and referral practices. Held executive accountability for IT strategy, digital transformation, infrastructure, cyber security, and technology governance across a large, geographically distributed multi-site estate.",
    achievements: [
      "Led rollout and optimisation of VetPartners' proprietary Practice Management System (PMS) across 50+ practices, using User Story Mapping to capture clinical workflow requirements prior to deployment",
      "Directed IT due diligence and technical integration for approximately 80 acquisitions annually, including CMA-cleared Goddard Veterinary Group",
      "Managed Microsoft Azure cloud infrastructure and enterprise-wide Microsoft 365 deployment across clinical and central office teams",
      "Managed the ITSM function via Freshservice applying ITIL service management principles, delivering responsive IT support across a nationally dispersed veterinary workforce",
      "Introduced 35+ ICT policies and procedures, using MoSCoW prioritisation to sequence policy development by risk impact and regulatory urgency, and the Eisenhower Matrix to distinguish policies requiring immediate authorship from those that could be scheduled",
      "Applied ICE scoring (Impact, Confidence, Ease) to rank hardware deployment initiatives, directly informing the Kanban workflow sequence for remote practice rollouts"
    ],
    skills: ["IT Strategy","Digital Transformation","ITIL","MoSCoW","ICE Scoring","User Story Mapping","Eisenhower Matrix","Microsoft Azure","Microsoft 365","ITSM (Freshservice)","Practice Management Systems","M&A IT Integration","Multi-site Network Management","Cyber Security","IT Governance","Healthcare Technology"],
    regulators: ["RCVS","VMD (DEFRA)","ICO","CMA","DSPT"],
    star: {
      title: "Establishing ICT Governance from the Ground Up and Accelerating Hardware Deployment via Kanban",
      situation: "On joining VetPartners, I found an ICT department that was operating without formal direction or governance — no documented policies, no standard operating procedures, and no structured framework for decision-making or service delivery. With over 350 clinics nationally and approximately 80 acquisitions per year, the absence of governance was creating inconsistency, risk, and inefficiency across the IT function. Additionally, the deployment of IT hardware to newly acquired and existing remote veterinary practices was slow and unstructured, causing delays in getting practices operational on the VetPartners platform.",
      task: "I needed to build an ICT governance framework from a standing start — creating the policies, procedures, and operational structure required to run a disciplined, scalable IT function across a nationally distributed multi-site estate — and to introduce a more efficient mechanism for managing and tracking IT hardware deployment to remote practices.",
      action: "I conducted a gap analysis of the IT function against industry best practice and immediately began building a comprehensive policy and procedure library. Over the course of my tenure I authored and introduced over 35 ICT policies and procedures, covering areas including information security, data protection, acceptable use, change management, asset management, supplier governance, incident management, and IT procurement. Each policy was reviewed with relevant stakeholders and approved through the appropriate governance channels. Separately, I identified that hardware deployment to remote practices was being managed informally, with no visibility of queue status or delivery progress. I introduced a Kanban-based workflow management solution that gave the IT team and practice managers a shared, real-time view of every hardware deployment — from order placement through configuration, dispatch, and installation sign-off — enabling rapid, transparent deployment at scale.",
      result: "The ICT department had a formally documented governance framework for the first time in the organisation's history. The 35+ policies and procedures provided a consistent, auditable basis for IT operations across all 350+ practices. The Kanban deployment solution significantly reduced the time from acquisition to a practice being fully operational on the VetPartners IT platform, improving the speed and consistency of the group's high-volume M&A programme and reducing the administrative burden on both the IT team and individual practice managers."
    }
  },
  {
    num: 5, title: "IT Director",
    company: "Bidwells LLP", sector: "Property Consultancy & Surveying",
    period: "January 2020 – March 2022", location: "Cambridge (managing £5.2bn+ property assets)",
    desc: "Led the IT function for one of the UK's largest independent property consultancies — a 500-strong firm headquartered in Cambridge managing over £5.2 billion in property assets. Reported directly to senior partnership with full accountability for IT strategy, infrastructure, cyber security, digital transformation, and a multi-disciplinary technology team.",
    achievements: [
      "Directed rapid transition to remote and hybrid working during COVID-19 using an Agile delivery model; applied Cost of Delay (CoD) thinking to frame the urgency — every hour of delayed deployment represented hundreds of thousands of pounds of in-progress property transactions at risk",
      "Applied RICE scoring to the digital transformation programme backlog, enabling the senior partnership to make transparent, data-driven prioritisation decisions across competing IT investments",
      "Used the Eisenhower Matrix to manage IT team workload during the COVID-19 crisis, separating urgent-critical remote access tasks from important-but-deferrable infrastructure projects",
      "Played a key role in the website and digital transformation programme — Bidwells won Best New Website at the Property Marketing Awards 2022",
      "Drove adoption of cloud-first architecture using an Impact-Effort Matrix to sequence infrastructure migrations by business value and delivery complexity",
      "Established ITIL-aligned service management processes and laid foundations for the firm's longer-term AI and data strategy"
    ],
    skills: ["IT Strategy","Digital Transformation","Agile","ITIL","RICE Scoring","Impact-Effort Matrix","Eisenhower Matrix","Cost of Delay (CoD)","Cloud Migration","Microsoft 365","Microsoft Azure","Power BI","Cyber Security","GDPR","ISO 27001","Business Continuity","Infrastructure Management","Enterprise CMS","Cloudflare","PropTech"],
    regulators: ["RICS","HMRC / HM Land Registry","FCA","ICO"],
    star: {
      title: "Moving 500 Staff to Remote Working in 72 Hours During the COVID-19 Lockdown",
      situation: "On 23 March 2020, the UK Government announced a national lockdown with less than 24 hours' notice. Bidwells had 500+ employees across multiple offices, the vast majority of whom had never worked remotely. The firm's IT infrastructure was predominantly on-premise, with no enterprise VPN at scale, no cloud collaboration platform, and no remote device management capability. Property transactions worth hundreds of millions of pounds were in progress and could not pause.",
      task: "As IT Director, I needed to make every Bidwells employee fully operational from home within 72 hours — maintaining access to all business-critical systems, client data, and communications — without any data security breaches or significant loss of service.",
      action: "I immediately convened the IT team and triaged requirements by role criticality. I fast-tracked the deployment of Microsoft Teams, accelerating a planned project from a six-month timeline to immediate rollout. I provisioned secure remote desktop access for users who required on-premise application access, coordinated an emergency procurement of additional hardware for staff without suitable home equipment, and personally briefed the senior partnership on the plan and its constraints. Security controls — including conditional access policies and endpoint compliance checks — were implemented simultaneously to prevent the rapid expansion creating new vulnerabilities.",
      result: "All 500+ staff were operational from home within 72 hours with no reported business continuity failures. No client transactions were disrupted. The accelerated Microsoft 365 deployment created a permanent improvement in digital working practices, and the platform became the foundation for a multi-year hybrid working model that significantly reduced Bidwells' office space requirements. The experience also directly catalysed the firm's cloud-first infrastructure programme."
    }
  },
  {
    num: 6, title: "IT Director",
    company: "Great Places Housing Association", sector: "Social Housing / Not-for-Profit",
    period: "March 2017 – December 2019", location: "Manchester (25,000+ homes across North West & Yorkshire)",
    desc: "Led the IT and Technology Services function for one of the fastest-growing housing associations in the North of England, managing over 25,000 affordable homes with a workforce of 700+ employees. Drove a comprehensive digital transformation programme with full accountability for IT strategy, infrastructure, cyber security, systems architecture, and vendor management.",
    achievements: [
      "Led the organisation's GDPR compliance programme (May 2018) delivered using a Waterfall project methodology — data mapping, policy redevelopment, staff training, PIAs, and data retention controls sequenced through formal stage gates across three group entities",
      "Spearheaded migration of core applications to an enterprise-grade managed hosting environment; used an Impact-Effort Matrix to prioritise which systems migrated first based on operational criticality and technical complexity",
      "Established ITIL-aligned IT service management processes across the Technology Services team, improving incident response, change management, and vendor accountability",
      "Oversaw modernisation of legacy housing management and ERP systems, introducing integrated platforms across asset management, repairs, and tenancy services",
      "Championed deployment of tenant-facing digital self-service capabilities, reducing cost-per-transaction and improving customer satisfaction",
      "Software licence audit and legacy account removal programme delivered an annual OpEx saving of approximately £800,000"
    ],
    skills: ["IT Strategy","Digital Transformation","Waterfall","ITIL","Impact-Effort Matrix","Cloud Migration","Microsoft Azure","ERP Systems","Housing Management Systems","GDPR","Data Governance","Cyber Security","Infrastructure Modernisation","Business Intelligence","CRM","Social Housing Technology"],
    regulators: ["RSH (Regulator of Social Housing)","Homes England","ICO","FCA / HM Treasury","NCSC / Cyber Essentials"],
    star: {
      title: "Software Licence Audit and Legacy Account Removal Delivering £800,000 Annual OpEx Saving",
      situation: "Great Places Housing Association was carrying a significant and largely invisible cost burden in the form of unused and redundant software licences — including Microsoft Office applications — and active system accounts belonging to employees who had long since left the organisation. No comprehensive licence audit had been conducted, legacy accounts had accumulated over years without a systematic removal process, and the IT budget was absorbing recurring costs for capability that was delivering no operational value.",
      task: "I initiated and led a thorough software licence audit across the group, with the objective of identifying all redundant user licences and inactive accounts, quantifying the associated cost, and implementing a programme to remove them — reducing annual operational expenditure and improving the organisation's IT security posture by eliminating dormant access credentials.",
      action: "I structured the audit across three workstreams: a full inventory of all software licences in use across the group, mapped against active users and actual utilisation data; an Active Directory and identity management review to identify accounts with no recent activity or belonging to former employees; and a vendor contract review to understand renewal terms and break clauses. The audit covered Microsoft Office licence tiers, third-party application licences, and system access accounts across all three group entities. Where redundant licences were identified, I worked with finance to validate the associated costs and with HR and line managers to confirm that access was no longer required before accounts were disabled and licences reclaimed. I implemented a repeatable process and schedule for ongoing licence management to prevent the problem recurring.",
      result: "The audit identified a substantial volume of redundant licences and legacy accounts across the group. Removing them delivered an annual operational expenditure saving of approximately £800,000. In addition to the direct financial benefit, the removal of dormant accounts materially reduced the organisation's cyber security risk surface — a point subsequently noted positively in an internal information security review. The licence management process I introduced became an embedded part of the IT governance framework, ensuring that licence costs remained aligned to actual headcount and usage going forward."
    }
  },
  {
    num: 7, title: "IT Director",
    company: "Claims Advisory Group Limited", sector: "Financial Services (PPI Claims Management)",
    period: "June 2015 – January 2017", location: "Manchester",
    desc: "Provided executive-level technology leadership at a Manchester-based financial services claims management company specialising in recovery of mis-sold Payment Protection Insurance (PPI), processing in excess of £2 million per month in client refunds. Held full ownership of IT governance, cyber security, regulatory compliance, and technology delivery, reporting directly to the board.",
    achievements: [
      "Led design, procurement, and implementation of a scalable CRM platform using a Waterfall project methodology with defined stage gates from requirements sign-off through to go-live",
      "Applied MoSCoW prioritisation during CRM requirements workshops to align compliance, operations, and IT on mandatory versus desirable features before development began",
      "Used Cost of Delay (CoD) analysis to quantify the regulatory and financial exposure of maintaining the legacy system — the CoD calculation directly accelerated board sign-off for the CRM replacement investment",
      "Ensured full FCA regulatory compliance and Data Protection Act 1998 adherence, implementing robust data governance frameworks",
      "Oversaw integration of telephony and dialler systems with CRM infrastructure to maximise contact-centre efficiency",
      "Led a cross-functional IT team, establishing ITIL-aligned service management processes to improve incident response and reduce downtime"
    ],
    skills: ["IT Strategy","Waterfall","MoSCoW","ITIL","Cost of Delay (CoD)","CRM Implementation","Cloud Infrastructure","Cyber Security","Data Protection","FCA Compliance","Financial Services IT","Claims Management Systems","Contact Centre Technology","BCP/DR","Microsoft Azure","SQL","Reporting & Analytics"],
    regulators: ["FCA","FOS","MoJ Claims Management Regulator","ICO"],
    star: {
      title: "Eliminating an FCA Compliance Risk in the Claims Management Platform",
      situation: "Shortly after joining Claims Advisory Group, I identified that the firm's legacy case management system was recording client communications inconsistently and without a reliable audit trail. The FCA was intensifying its oversight of claims management companies at this time, and the Financial Ombudsman Service had begun requiring detailed evidence of client contact histories in dispute reviews. An FCA audit or FOS referral could expose the firm to regulatory sanctions and potential loss of authorisation.",
      task: "I needed to replace the legacy system with a platform that provided a complete, immutable record of all client interactions — calls, letters, emails, and case decisions — in a format that would satisfy both FCA supervisory requests and FOS case reviews, whilst maintaining operational continuity for a team of claim negotiators processing hundreds of live cases daily.",
      action: "I led the design, procurement, and implementation of a new CRM platform with integrated telephony logging and document management. I worked with the compliance team to define the mandatory data fields required to meet FCA and FOS evidential standards, building these into the system's workflow by design rather than as an afterthought. I managed the data migration of all live cases from the legacy system, ensuring no case history was lost. I also introduced a structured call recording and retrieval capability, and trained the operational team on compliant communication practices as part of the go-live programme.",
      result: "The new CRM went live without disruption to live case processing. Within the first quarter, the firm was able to provide FOS with complete, timestamped client interaction records on every referred case — resulting in improved FOS outcomes on disputed claims. An FCA compliance review the following year found no material deficiencies in client record-keeping. Case throughput also improved by approximately 22% as the integrated workflow reduced manual double-entry between systems."
    }
  },
  {
    num: 8, title: "IT Director",
    company: "Missguided Ltd", sector: "Fast Fashion / E-commerce Retail",
    period: "March 2014 – May 2015", location: "Manchester (Stretford / Trafford Park)",
    desc: "Led end-to-end IT strategy and digital infrastructure delivery for one of the UK's fastest-growing online fast-fashion retailers, supporting a business scaling rapidly toward $80M+ in revenue with international expansion into the US, Europe, and Australia. Reported directly to senior leadership with full accountability for technology operations, platform stability, team management, and digital transformation.",
    achievements: [
      "Owned stability and performance of the Magento-based e-commerce platform during high-traffic celebrity launches and flash sales",
      "Delivered mobile app improvements using Agile sprint cycles, with User Story Mapping sessions run with the marketing and UX teams to define the product roadmap from the customer journey outwards",
      "Used ICE scoring (Impact, Confidence, Ease) to prioritise platform infrastructure improvements in the weeks preceding major launch events, ensuring the highest-value fixes were delivered first",
      "Delivered technology solutions for international expansion including multi-currency payments and preparation for the March 2015 Nordstrom US launch",
      "Managed ERP, WMS, and OMS integration to support a supply chain refreshing approximately 25% of product range monthly",
      "Led HQ relocation from Stretford to Trafford Park, ensuring zero business disruption across all IT infrastructure and systems"
    ],
    skills: ["IT Strategy","Agile","User Story Mapping","ICE Scoring","E-commerce","Magento","Mobile Applications","ERP","WMS","OMS","CRM","Data Analytics","Cyber Security","PCI DSS","International Expansion","IT Budget Management"],
    regulators: ["FCA / PSR","PCI DSS","ICO","CMA","ASA"],
    star: {
      title: "Preventing E-commerce Platform Collapse During the Nicole Scherzinger Celebrity Launch",
      situation: "In March 2014, Missguided was about to launch a major celebrity collaboration with Nicole Scherzinger — a high-profile campaign expected to drive an unprecedented spike in concurrent website traffic. Stress testing revealed that the Magento platform, as configured, would fail under the projected load. The launch had been widely publicised and was critical to Missguided's brand positioning; a site outage during the event would have caused direct revenue loss and serious reputational damage to a business scaling rapidly toward $80M in revenue.",
      task: "With less than three weeks to launch, I needed to re-architect the platform's scalability and resilience to handle the projected traffic surge — without any changes that risked destabilising the live site in the lead-up to the event.",
      action: "I commissioned an emergency infrastructure review and identified three critical bottlenecks: insufficient web server capacity, database query inefficiency under concurrent load, and an absent caching layer. I engaged the hosting provider to rapidly provision additional server capacity, worked with the development team to optimise the most expensive database queries, and implemented a full-page caching solution to offload dynamic content delivery. I also established a real-time monitoring and response protocol for launch day, with predefined escalation paths and rollback options if traffic exceeded predictions.",
      result: "The Nicole Scherzinger launch proceeded without platform failure, handling the traffic spike successfully and delivering one of Missguided's highest single-day revenue figures to that point. The infrastructure improvements implemented under pressure became the foundation of a sustained platform stability programme, reducing site incidents by an estimated 60% over the following six months and materially improving the performance headroom available for subsequent celebrity collaborations and flash sale events."
    }
  },
  {
    num: 9, title: "IT Director – UK, EMEA & Asia",
    company: "HID Global (Hughes Identification Devices) / ASSA ABLOY Group", sector: "Security Technology / RFID & Identity Solutions",
    period: "March 2011 – February 2014", location: "UK, EMEA, Asia Pacific (30+ countries)",
    desc: "Served as regional IT Director for HID Global — the world's leading provider of secure identity solutions, RFID technology, and physical access control — with full strategic and operational accountability for IT across the UK, EMEA, and Asia Pacific regions. Reported into global IT leadership and collaborated closely with the parent group, ASSA ABLOY AB (Stockholm).",
    achievements: [
      "Defined and executed a multi-year regional IT roadmap, applying a Gate Process at each major phase to ensure investment decisions were formally reviewed and approved before progression",
      "Led post-acquisition IT integration of LaserCard (2011) and EasyLobby (2012) using a structured Waterfall programme methodology, with defined gates for due diligence, design, migration, and cutover",
      "Led design and management of regional IT infrastructure spanning data centres, WAN, and enterprise connectivity across 30+ countries",
      "Established ISO 27001 governance frameworks, policies, and controls across UK/EMEA and Asia",
      "Used the Eisenhower Matrix across the regional IT leadership team to manage competing priorities across 30+ countries — separating critical infrastructure incidents from strategic roadmap work and ensuring both streams received appropriate resource and attention",
      "Deployed ITIL-aligned service management practices across the regional IT function, standardising incident, change, and problem management across multiple time zones"
    ],
    skills: ["IT Director","IT Strategy","Gate Process","Waterfall","ITIL","Eisenhower Matrix","EMEA IT Management","Asia Pacific IT","M&A IT Integration","ERP Implementation","Cloud Computing","Virtualisation","Data Centre Operations","WAN","Cyber Security","ISO 27001","GDPR","IAM","RFID"],
    regulators: ["ISO 27001","Ofcom / FCC (US)","ISO/IEC 18000 (RFID)","ICO / Regional DPAs","ECJU / BIS (Export Control)"],
    star: {
      title: "Consolidating Two Incompatible IT Estates Following the LaserCard Acquisition",
      situation: "In 2011, HID Global acquired LaserCard Corporation — a US-based manufacturer of optical memory cards used in government identity documents, including passports and national ID programmes. LaserCard had a significant EMEA manufacturing and fulfilment operation with its own separate IT estate: a different ERP system, a distinct network infrastructure, and data centre facilities in Germany operating under European data protection law. Both businesses were serving highly security-sensitive government clients with zero tolerance for data exposure or system downtime.",
      task: "As regional IT Director for UK/EMEA and Asia, I was accountable for the post-acquisition IT integration in the EMEA region. I needed to consolidate LaserCard's European IT environment into HID Global's existing ASSA ABLOY group infrastructure without disrupting active government ID card production programmes or creating any data protection compliance gaps.",
      action: "I led an intensive IT due diligence workstream in the months following announcement, mapping every system, network connection, and data store across the LaserCard EMEA estate. I designed a phased migration plan that prioritised network integration first, then ERP consolidation using a parallel-run approach, and finally data centre rationalisation. Given the sensitivity of government identity data, I co-designed a data handling protocol with the ASSA ABLOY Group Data Protection Officer and the LaserCard Legal team before any data was transferred. I maintained direct communication with the operational leadership at the LaserCard Germany facility throughout to ensure production schedules were protected.",
      result: "The EMEA integration was completed within the programme timeline with no disruption to government client delivery programmes. The data centre rationalisation delivered an estimated £180,000 per annum in infrastructure cost savings. The integration methodology I developed was subsequently adopted by ASSA ABLOY Group IT as the standard framework for post-acquisition IT integration across the group's European technology businesses."
    }
  },
  {
    num: 10, title: "IT Director",
    company: "ghd (Good Hair Day) – The Jemella Group Ltd", sector: "Consumer Goods / Personal Care (PE-backed)",
    period: "January 2008 – January 2011", location: "Leeds, UK (50,000+ salon partners worldwide)",
    desc: "Led the technology strategy and IT function for ghd, a premium consumer goods brand operating under Montagu Private Equity ownership following a £160 million acquisition, undergoing significant international expansion across Europe and North America. Reported to the CEO and board as a member of the senior leadership team.",
    achievements: [
      "Delivered a scalable ERP and supply chain platform using a Waterfall programme approach, with formal Gate Process reviews at requirements, design, build, and deployment phases",
      "Applied RICE scoring to evaluate and rank competing IT investment proposals presented to the Montagu PE board, providing a structured evidence base for budget allocation decisions",
      "Implemented a CRM and salon partner management platform supporting 50,000+ B2B trade accounts globally",
      "Directed development and scaling of ghd's direct-to-consumer (DTC) e-commerce platform and digital sales infrastructure",
      "Reduced IT operational costs through vendor rationalisation and infrastructure consolidation while improving system uptime",
      "Established IT security and data governance frameworks aligned to private equity governance requirements"
    ],
    skills: ["IT Director","IT Strategy","Waterfall","Gate Process","RICE Scoring","Digital Transformation","ERP Implementation","SAP","Microsoft Dynamics","E-commerce","CRM","Salesforce","Supply Chain Systems","Infrastructure Management","Cyber Security","PCI-DSS","GDPR","Private Equity Technology"],
    regulators: ["FCA (PE firm)","ISO 9001 / ISO 14001","MHRA / Trading Standards","CE / UKCA marking","ICO"],
    star: {
      title: "Implementing an ERP Platform to Support International Market Expansion Under Private Equity Pressure",
      situation: "When Montagu Private Equity acquired ghd in 2007 for £160 million, the business was operating with a patchwork of country-specific legacy systems — separate databases for UK, European, and emerging North American operations with no integration between them. Finance, supply chain, and order management data existed in silos, making consolidated reporting to the PE board virtually impossible and rendering international inventory management unreliable. With the PE firm targeting accelerated international growth, the existing systems were a direct constraint on the business's strategic ambitions.",
      task: "As IT Director, I was tasked with delivering a unified ERP platform that would support ghd's expansion into European and North American markets, provide consolidated financial reporting to the Montagu board, and integrate with the supply chain operations supporting 50,000+ salon partners worldwide — within the budget constraints of a PE-backed business with a defined investment horizon.",
      action: "I led a structured ERP evaluation process, presenting a business-cased recommendation to the CEO and CFO that balanced functionality, implementation risk, and total cost of ownership. Following selection, I directed the implementation programme — managing the internal IT team, the system integrator, and business stakeholders across Finance, Supply Chain, and Sales. I phased the rollout by market, starting with the UK core operation to de-risk the most complex data migration before extending to European subsidiaries. I established a parallel-run period for Finance to validate reporting output before the legacy systems were decommissioned.",
      result: "The ERP went live on schedule across the UK and key European markets. Consolidated financial reporting was in place for the next Montagu board cycle, and inventory accuracy across international markets improved significantly — reducing both stockouts and overstock write-offs. The platform directly enabled ghd's entry into the North American market by providing the infrastructure for multi-currency, multi-entity operations, contributing to the double-digit revenue growth achieved during the PE ownership period."
    }
  },
  {
    num: 11, title: "Head of IT Business Systems – Europe",
    company: "International Game Technology (IGT)", sector: "Gaming Technology / Slot Machine Manufacturing",
    period: "August 2004 – November 2007", location: "UK / Netherlands / Europe (Reno HQ liaison)",
    desc: "Led the design, delivery, and operational management of enterprise IT business systems across IGT's European operations — IGT-UK Limited and IGT Europe B.V. — supporting IGT as the world's leading slot machine and gaming technology manufacturer. Held full accountability for business systems strategy, ERP governance, regulatory technology compliance, and multi-site systems integration.",
    achievements: [
      "Led the Oracle ERP end-of-life migration programme using a Waterfall methodology, with formal Gate Process checkpoints at scoping, design approval, data migration sign-off, and go-live readiness review",
      "Supported technology compliance arising from the UK Gambling Act 2005, ensuring business systems met Gaming Commission requirements",
      "Managed IT integration associated with the post-acquisition consolidation of Barcrest Gaming (UK)",
      "Supported the WagerWorks acquisition (2005), contributing to onboarding of online gaming platform infrastructure",
      "Established ITIL service management practices across the European IT business systems function, improving ERP support responsiveness and incident resolution times",
      "Managed a multi-million pound European IT business systems budget across vendor contracts and capital expenditure"
    ],
    skills: ["Waterfall","Gate Process","ITIL","ERP Implementation","IT Business Systems","Multi-site IT Operations","Gaming Regulatory Compliance","IT Governance","Enterprise Application Integration","Change Management","Vendor Management","Budget Management","Casino Management Systems","Post-acquisition IT Integration"],
    regulators: ["Gambling Commission (UK)","European national gambling regulators","GLI","ISO 9001 / ITIL","ICO / EU DPAs"],
    star: {
      title: "Migrating an End-of-life Oracle ERP to a Supported Version with Mokum Managed Services",
      situation: "When I joined IGT — operating in the UK through Barcrest Games — the Oracle ERP system underpinning the business was fast approaching end of life. The platform was running on an unsupported version, meaning it was receiving no security patches, no vendor fixes, and no regulatory updates. This exposed the business to significant operational, security, and compliance risk in a regulated gaming environment where auditability and system integrity are mandatory requirements of the Gambling Commission.",
      task: "As Head of IT Business Systems for Europe, I needed to engage appropriate specialist expertise and lead the migration from the unsupported Oracle version to a fully supported, current release — with minimal disruption to business operations and without compromising the integrity of the financial, supply chain, and operational data that the system held.",
      action: "I identified and engaged Mokum Managed Services, an Oracle specialist practice based in Canary Wharf, London, with deep expertise in Oracle ERP migration and managed support. I worked with Mokum to scope the full migration programme, mapping the existing configuration, customisations, and data structures against the target version requirements. I managed the programme internally — coordinating with Finance, Operations, and the field service teams who depended on the ERP daily — whilst Mokum led the technical migration workstreams. A phased approach was adopted to allow thorough testing of each module before cutover, with a parallel-run period for Finance to validate reporting continuity.",
      result: "The Oracle ERP was successfully migrated to a fully supported version, eliminating the operational and compliance risks associated with running end-of-life software. The business had a stable, vendor-supported platform with current security patching and regulatory compliance capability. The engagement with Mokum Managed Services also established an ongoing support relationship that provided IGT's European operations with specialist Oracle expertise on a retained basis, improving system reliability and reducing dependency on internal resource for complex platform management."
    }
  },
  {
    num: 12, title: "IT Programme Director – Bowman Radio Conversion",
    company: "MOD Ashchurch / General Dynamics UK", sector: "Defence / Engineering",
    period: "May 2002 – August 2004", location: "MOD Ashchurch, Gloucestershire",
    desc: "Provided senior IT programme management at MOD Ashchurch in direct support of the Clansman-to-Bowman tactical radio conversion programme — one of the largest vehicle communications upgrade programmes in British military history, encompassing approximately 80,000 Army vehicles. The programme achieved its In-Service Declaration in March 2004, described by the MoD as unprecedented in UK defence acquisition history.",
    achievements: [
      "Led end-to-end IT programme support using a Waterfall delivery methodology under PRINCE2, with programme governance structured around defined stage gates aligned to the MoD's In-Service Declaration milestones",
      "Designed and built BERT (Bowman Equipment Resource Tracker) from the ground up — a bespoke system and centralised data warehouse tracking every movement of Bowman equipment across 80,000 vehicles",
      "Developed management information and MI reporting tools used by DLO programme managers and MoD stakeholders",
      "Applied a Gate Process at each major BERT development and deployment phase, ensuring MoD sign-off before progression and maintaining full audit trail compliance",
      "Acted as primary IT interface between the Ashchurch site team, General Dynamics UK programme staff, ABRO, and MoD project managers",
      "Ensured all IT systems and data handling met MoD security classification requirements for a sensitive defence programme environment"
    ],
    skills: ["IT Programme Director","Waterfall","Gate Process","PRINCE2","Programme Management","MoD","Defence Equipment Support","BERT (Bowman Equipment Resource Tracker)","Data Warehouse","MI Reporting","IT Infrastructure","Helpdesk Management","Technical Documentation","Stakeholder Management","ITIL"],
    regulators: ["MOD / DE&S","ECJU (Export Control)","NCSC","DEF STAN / NATO STANAG","DSPCR"],
    star: {
      title: "Headhunted to Build BERT — the Bowman Equipment Resource Tracker — from the Ground Up",
      situation: "I was headhunted by General Dynamics to join the Bowman Radio conversion programme at MOD Ashchurch. The programme required the systematic deployment of the new Bowman C4I digital tactical radio system across approximately 80,000 British Army vehicles — one of the largest and most complex communications upgrade programmes in the history of the British Army. At the outset, there was no core IT infrastructure and no software system in place to manage or track the movement, fitment status, or deployment progress of Bowman equipment across the programme.",
      task: "I was brought in specifically to establish the core IT infrastructure required to support the programme and to design and build a bespoke system capable of tracking every movement of Bowman equipment throughout the entire deployment lifecycle — providing programme leadership, General Dynamics, and MoD stakeholders with accurate, real-time visibility of progress across 80,000 vehicles.",
      action: "I devised and built a system I named BERT — the Bowman Equipment Resource Tracker. BERT was designed from scratch to record and centralise every movement of Bowman equipment: from initial receipt and allocation, through fitment scheduling, installation, testing, and sign-off, to return-to-unit confirmation. All data was written into a centralised data warehouse, giving programme managers a single authoritative source of truth for equipment status at any point in the conversion cycle. I built the underlying infrastructure to host and run BERT at MOD Ashchurch, established the data entry protocols for engineering and logistics teams, and created the MI reporting suite that fed weekly programme status reports to DLO management and the MoD's Defence Procurement Agency.",
      result: "BERT became the operational backbone of the Bowman deployment programme. For the first time, programme leadership had a complete, centralised, and current picture of every piece of Bowman equipment in the system — where it was, what stage it had reached, and what was outstanding. This visibility directly enabled the scheduling decisions and resource interventions that kept the programme on track. The Bowman programme achieved its In-Service Declaration in March 2004 — just 30 months from contract award — a milestone the MoD described as unprecedented in the history of major UK defence acquisition. BERT was a key enabler of that delivery."
    }
  },
  {
    num: 13, title: "Programmer / Application Specialist",
    company: "British Aerospace (BAE Systems)", sector: "Aerospace & Defence",
    period: "May 1999 – April 2002", location: "Woodford, Cheshire",
    desc: "Engaged on the Nimrod MRA4 programme — a £2.2 billion MoD fixed-price defence contract to remanufacture and upgrade 21 Nimrod MR2 maritime patrol aircraft for the Royal Air Force. Worked within an Integrated Project Team (IPT) environment, supporting software development and application deployment across design, engineering, and production workflows.",
    achievements: [
      "Developed, tested, and maintained bespoke engineering and production applications within an Integrated Project Team (IPT) using a Waterfall development lifecycle with formal Gate Process reviews at requirements, design, build, and test phases",
      "Applied MoSCoW prioritisation when scoping the airframe documentation system to distinguish mandatory structural data capture requirements from supplementary analytical features",
      "Undertook the first-ever complete photographic and structural documentation of the Nimrod airframe from the inside immediately after strip-down, building a bespoke data capture system to reference and log structural discrepancies",
      "Contributed to application support for the Weapon System Integration Rig (WSIR) and related ground test infrastructure",
      "Collaborated with teams at Woodford, Chadderton, and Warton, alongside external partners including Boeing and Rolls-Royce"
    ],
    skills: ["Software Development","Waterfall","Gate Process","MoSCoW","Application Support","Systems Integration","Avionics Software","Defence Procurement","Configuration Management","MoD Contracts","Integrated Project Teams","Database Management","Test & Verification","Glass Cockpit Systems"],
    regulators: ["MOD / DEFCON","DEF STAN 00-55","DO-178B/C","AS9100"],
    star: {
      title: "First-ever Complete Photographic and Structural Documentation of the Nimrod Airframe from the Inside",
      situation: "One of my responsibilities on the Nimrod MRA4 programme at BAE Systems Woodford was to photograph and document the complete internal airframe structure of each Nimrod MR2 immediately after strip-down. This was required to support the structural engineering team's evaluation of airframe integrity before remanufacture began — assessing the condition of the fuselage, frames, longerons, skin panels, and structural joints at every accessible point. Critically, nothing like this had ever been undertaken before on the Nimrod airframe since the aircraft's original conception in the 1960s. There was no precedent, no methodology, and no existing system for capturing, storing, or analysing this type of data at the scale and resolution the programme required.",
      task: "I needed to design and implement a new system capable of capturing the complete photographic record of each stripped airframe — thousands of images per aircraft, precisely referenced to structural location — and organising and logging that data in a way that allowed structural engineers to query it, evaluate findings, and formally record discrepancies identified during their assessment. The system had to be robust enough to handle multiple aircraft in parallel and produce an auditable record that would support the safety-critical remanufacture decisions being made from it.",
      action: "I developed a bespoke data capture and management system built around a structured photographic referencing methodology — each image tagged to a specific structural zone, frame station, and component reference drawn from the aircraft's technical documentation. I established the photography protocol used during the strip-down process, ensuring consistent coverage and image quality across the entire airframe interior. The collected images and associated structural data were loaded into the system, which provided engineers with a navigable, zone-by-zone interface to review imagery, annotate findings, log structural discrepancies with severity classifications, and generate formal assessment records for each aircraft. I iterated the system in response to engineer feedback as the first aircraft strip-downs progressed.",
      result: "The system provided the Nimrod MRA4 structural engineering team with a complete, navigable photographic and discrepancy record for each stripped airframe — something that had never existed in the programme's history. Engineers could assess structural condition from the data record rather than relying solely on physical re-inspection, significantly improving the efficiency and auditability of the structural evaluation process. The discrepancy logging capability created a formal, traceable record for every structural finding, supporting the safety-critical decisions that underpinned the MRA4 remanufacture programme. The work contributed directly to the successful achievement of the power-on milestone for the first development aircraft, PA01 (ZJ516), in December 2001."
    }
  },
  {
    num: 14, title: "Programmer & Application Specialist",
    company: "AlliedSignal Garrett Engine Boosting Systems (now Honeywell / Garrett Motion)", sector: "Automotive Manufacturing / Turbocharger R&D",
    period: "February 1997 – April 1999", location: "Cheadle Hulme, Cheshire (European HQ & R&D Centre)",
    desc: "Employed at the European headquarters and R&D centre of AlliedSignal's Garrett Engine Boosting Systems division — a global leader in turbocharger design and manufacture supplying OEM partners including Ford, BMW, Volkswagen, Renault, Volvo, and Peugeot — during the parent company's transition from AlliedSignal to Honeywell International in 1999.",
    achievements: [
      "Designed and built bespoke database-driven applications using a Waterfall SDLC, with MoSCoW requirements sessions run with engineering and QA stakeholders to define and scope each application before development commenced",
      "Developed custom reporting tools consolidating turbocharger production metrics, component data, and test results",
      "Administered and customised Lotus Notes databases for workflow automation and document management",
      "Played an active role in the site's Y2K compliance programme — application audits, code remediation, and regression testing",
      "Supported rollout of Windows NT Workstation across the facility in a Novell NetWare environment"
    ],
    skills: ["Waterfall","MoSCoW","Visual Basic","VBA","VB6","Microsoft Access","SQL","Lotus Notes","Windows NT","Novell NetWare","Database Design","Application Support","Y2K Remediation","End-User Training","Workflow Automation"],
    regulators: ["ISO 9001 / ISO 14001","HSE (Industrial Safety)","ICO / Regional DPAs"],
    star: {
      title: "Identifying and Remediating Y2K Date-handling Vulnerabilities Across Manufacturing Systems",
      situation: "As the December 1999 deadline approached, AlliedSignal's global Y2K compliance programme required every site to audit and certify that all business-critical applications and manufacturing systems were free of date-handling vulnerabilities. At the Cheadle Hulme European HQ and R&D centre, responsibility for the audit and remediation of internally developed applications fell to the application support team. Many of the bespoke database applications in use — built over several years in Microsoft Access, VB6, and SQL — had been written without year 2000 considerations, and some controlled scheduling and production planning functions that would directly affect the OEM turbocharger supply chain if they failed.",
      task: "I was assigned as the application specialist responsible for auditing all internally developed applications at the Cheadle Hulme site for Y2K date-handling issues, remediating any vulnerabilities found, and completing the regression testing and sign-off documentation required by the AlliedSignal global Y2K programme — within the corporate deadline of Q3 1999.",
      action: "I systematically catalogued every bespoke application in use at the site, prioritising those with date-critical functions in production planning, quality management, and customer scheduling. For each application, I conducted a line-by-line code review of all date-handling logic, identifying two-digit year assumptions, ambiguous date format strings, and date arithmetic that would fail post-1999. I remediated each vulnerability — updating date fields to four-digit year formats, replacing ambiguous date functions with compliant alternatives, and rebuilding affected queries and reports. Each application was then regression tested against a bank of test cases spanning the date transition boundary before being submitted for sign-off.",
      result: "All internally developed applications at the Cheadle Hulme site were remediated and certified compliant ahead of the AlliedSignal global deadline. The transition from 31 December 1999 to 1 January 2000 occurred without any application failures or production disruptions at the site. The structured audit and documentation approach I used was adopted as the local template for application compliance certification and submitted to the AlliedSignal group programme office as evidence of site-level Y2K readiness."
    }
  },
  {
    num: 15, title: "IT Systems Analyst",
    company: "Philips Semiconductors (formerly Mullard)", sector: "Semiconductor Manufacturing / Electronics",
    period: "January 1989 – January 1997", location: "Hazel Grove, Stockport (Power semiconductor wafer fabrication)",
    desc: "Employed as an IT Systems Analyst at Philips Semiconductors' Hazel Grove manufacturing facility — a high-volume power semiconductor wafer fabrication plant producing Power MOSFETs, TrenchMOS, and Bipolar devices for automotive OEMs, consumer electronics, and industrial markets globally. The period encompassed the $106 million PowerFab 2 advanced manufacturing facility with Class 10/100 clean room environments.",
    achievements: [
      "Played a central role in the site's SAP R/2 and SAP R/3 migration programme, delivered using a Waterfall project methodology with formal Gate Process reviews at requirements, design, UAT, and go-live phases across PP, MM, SD, FI, and QM modules",
      "Applied MoSCoW prioritisation during SAP module scoping workshops to distinguish mandatory production planning requirements from desirable reporting enhancements, keeping each rollout phase focused and on schedule",
      "Held formal Trained Trainer status — designed and delivered structured SAP end-user training programmes for production, engineering, and finance functions",
      "Established ITIL-aligned support and incident management practices for the SAP environment, improving resolution times and providing a clear escalation path for production-critical system issues",
      "Supported the site's Six Sigma process improvement programme — applying DMAIC (Define, Measure, Analyse, Improve, Control) methodology to wafer yield and production throughput analysis, using IT-generated Statistical Process Control (SPC) data as the measurement backbone",
      "Used the Eisenhower Matrix to manage the competing demands of day-to-day SAP support, Y2K remediation, and the Trained Trainer programme, ensuring time-critical compliance tasks were protected from displacement by lower-priority operational requests",
      "Developed Oracle RDBMS databases and SQL-based management information reports supporting production KPIs and wafer yield analysis"
    ],
    skills: ["IT Systems Analyst","Waterfall","Gate Process","MoSCoW","ITIL","Six Sigma (DMAIC)","Eisenhower Matrix","SAP R/2","SAP R/3","SAP PP","SAP MM","SAP SD","SAP FI","SAP QM","MRP II","ERP","Oracle RDBMS","SQL","IBM Mainframe","UNIX","Windows NT","Novell NetWare","MES","Statistical Process Control","Training Design & Delivery","SDLC"],
    regulators: ["Environment Agency","JEDEC / IEC Semiconductor Standards","ISO 9001","IATF 16949","ICO","Wassenaar Arrangement"],
    star: {
      title: "Rescuing a Failing SAP Go-live by Rebuilding Production Team Confidence in the System",
      situation: "During the rollout of the SAP Production Planning (PP) module at the Hazel Grove wafer fabrication facility, the go-live encountered a serious human adoption problem. Production planners and manufacturing engineers — under intense pressure to maintain wafer output for automotive OEM customers including Ford and Volkswagen — had lost confidence in the new system following a series of data quality issues during the parallel-run period. Supervisors had instructed their teams to revert to the legacy paper-based scheduling process while SAP remained 'live', meaning the system was running but not trusted or used. The go-live was in danger of failing functionally despite a technically successful deployment.",
      task: "As the site's SAP Trained Trainer and Systems Analyst with responsibility for the PP module, I was asked to lead the recovery effort: rebuild confidence in the system, identify and resolve the root causes of the data quality issues, and achieve genuine adoption across the production planning and manufacturing teams within a defined timeframe — without disrupting ongoing wafer fabrication output.",
      action: "I spent several days on the factory floor alongside production planners, working through the specific transactions and outputs they distrusted. I identified that the data quality issues were traceable to three misconfigured work centre definitions and incorrect routing structures that had survived from the data migration. I escalated these to the SAP configuration team and had them corrected within 48 hours. I then redesigned the training approach: instead of classroom-based instruction, I ran short, focused on-the-job sessions in which I sat with individual planners during their actual work, demonstrating how SAP produced the same (now correct) results as the paper-based process. I also built a series of validation queries so planners could cross-check SAP output against production actuals themselves.",
      result: "Within four weeks, the production planning team had fully transitioned to SAP as their primary system, and the parallel paper-based process was formally discontinued. Wafer output continuity was maintained throughout the recovery period with no impact on OEM delivery schedules. The revised on-the-job training approach I developed was subsequently adopted for all remaining SAP module rollouts at the site, and was commended by the Philips corporate SAP programme team as a more effective model for manufacturing environment go-lives than the classroom-only method previously used."
    }
  }
];

/* ══════════════════════════ REGULATORY DATA ═════════════════════ */
const regulatoryByEmployer = [
  { employer:"Armstrong Watson | Accountancy & Financial Services", period:"2024–2025", entries:[{type:"Regulator",body:"FRC – Financial Reporting Council",relevance:"Audit, accounting and actuarial standards for UK-regulated firms",badgeClass:"badge-regulator"},{type:"Regulator",body:"ICAEW – Institute of Chartered Accountants (E&W)",relevance:"Armstrong Watson is an ICAEW-regulated practice",badgeClass:"badge-regulator"},{type:"Regulator",body:"ICAS – Institute of Chartered Accountants of Scotland",relevance:"Relevant given northern England / Scottish geographic footprint",badgeClass:"badge-regulator"},{type:"Regulator",body:"FCA – Financial Conduct Authority",relevance:"Regulates financial advice and investment services offered by the firm",badgeClass:"badge-regulator"},{type:"Security",body:"ICO – Information Commissioner's Office",relevance:"GDPR / UK data protection across client data and practice systems",badgeClass:"badge-security"},{type:"Standard",body:"ISO 27001 / NIST",relevance:"Cybersecurity frameworks referenced directly in this role",badgeClass:"badge-standard"}]},
  { employer:"Nova Pangaea Technologies | Cleantech Manufacturing", period:"2023–2024", entries:[{type:"Regulator",body:"Environment Agency (EA)",relevance:"Waste, emissions and environmental permits for biorefinery operations",badgeClass:"badge-regulator"},{type:"ESG",body:"DESNZ – Dept. for Energy Security & Net Zero",relevance:"Renewable Transport Fuel Obligation (RTFO) reporting",badgeClass:"badge-esg"},{type:"Standard",body:"ISO 14001 / ISO 50001",relevance:"Environmental and energy management standards",badgeClass:"badge-standard"},{type:"Standard",body:"IEC 62443",relevance:"Industrial OT/SCADA cybersecurity standard for manufacturing",badgeClass:"badge-standard"},{type:"Regulator",body:"HSE – Health & Safety Executive",relevance:"Industrial safety compliance at biorefinery processing sites",badgeClass:"badge-regulator"},{type:"Standard",body:"ISO 22301",relevance:"Business continuity standard implemented during this role",badgeClass:"badge-standard"}]},
  { employer:"EDF Renewables UK & Ireland | Renewables & Energy", period:"2023", entries:[{type:"Regulator",body:"Ofgem – Office of Gas & Electricity Markets",relevance:"UK energy sector regulator; licencing, grid connection and compliance",badgeClass:"badge-regulator"},{type:"Regulator",body:"CRE – Commission de Regulation de l'Energie",relevance:"French energy regulator applicable to Paris operations",badgeClass:"badge-regulator"},{type:"ESG",body:"Environment Agency / SEPA",relevance:"Environmental permits and emissions monitoring across renewables sites",badgeClass:"badge-esg"},{type:"Standard",body:"IEC 62443 / NERC CIP",relevance:"Critical infrastructure cybersecurity for energy/SCADA systems",badgeClass:"badge-standard"},{type:"Regulator",body:"National Grid ESO",relevance:"Grid code compliance obligations for UK renewable generators",badgeClass:"badge-regulator"},{type:"Security",body:"NCSC – National Cyber Security Centre",relevance:"Critical national infrastructure guidance for energy sector IT",badgeClass:"badge-security"}]},
  { employer:"VetPartners Ltd | Animal Health / Veterinary", period:"2022", entries:[{type:"Regulator",body:"RCVS – Royal College of Veterinary Surgeons",relevance:"Regulates all UK veterinary practices; clinical and practice standards",badgeClass:"badge-regulator"},{type:"Regulator",body:"VMD – Veterinary Medicines Directorate (DEFRA agency)",relevance:"Regulates veterinary medicines prescribing and dispensing",badgeClass:"badge-regulator"},{type:"Security",body:"ICO – Information Commissioner's Office",relevance:"Client and patient health records under UK GDPR",badgeClass:"badge-security"},{type:"Regulator",body:"CMA – Competition & Markets Authority",relevance:"Actively investigated vet group consolidation during this period",badgeClass:"badge-regulator"},{type:"Standard",body:"DSPT – Data Security & Protection Toolkit",relevance:"NHS-adjacent data security standard for practices with NHS referrals",badgeClass:"badge-standard"}]},
  { employer:"Bidwells LLP | Property & Surveying", period:"2020–2022", entries:[{type:"Regulator",body:"RICS – Royal Institution of Chartered Surveyors",relevance:"Bidwells is RICS-regulated; compliance and conduct obligations",badgeClass:"badge-regulator"},{type:"Regulator",body:"HMRC / HM Land Registry",relevance:"SDLT reporting and Land Registry digital transaction compliance",badgeClass:"badge-regulator"},{type:"Finance",body:"FCA – Financial Conduct Authority",relevance:"Applies where the firm provides regulated mortgage or investment advice",badgeClass:"badge-finance"},{type:"Security",body:"ICO – Information Commissioner's Office",relevance:"Client, property and transaction data under UK GDPR",badgeClass:"badge-security"}]},
  { employer:"Great Places Housing Group | Social Housing", period:"2017–2019", entries:[{type:"Regulator",body:"RSH – Regulator of Social Housing",relevance:"Statutory regulator; governance, financial viability and consumer standards",badgeClass:"badge-regulator"},{type:"Regulator",body:"Homes England",relevance:"Government agency overseeing affordable housing investment and compliance",badgeClass:"badge-regulator"},{type:"Security",body:"ICO – Information Commissioner's Office",relevance:"Tenant personal data across 25,000 residents; GDPR obligations",badgeClass:"badge-security"},{type:"Finance",body:"FCA / HM Treasury",relevance:"Bond issuance and treasury activity funding social housing development",badgeClass:"badge-finance"},{type:"Standard",body:"NCSC / Cyber Essentials",relevance:"Public-sector-adjacent organisations expected to hold Cyber Essentials",badgeClass:"badge-standard"}]},
  { employer:"Claims Advisory Group | Financial Services / PPI", period:"2015–2017", entries:[{type:"Regulator",body:"FCA – Financial Conduct Authority",relevance:"Direct regulator of PPI claims management companies",badgeClass:"badge-regulator"},{type:"Regulator",body:"FOS – Financial Ombudsman Service",relevance:"Adjudicates PPI complaints; CMC workflows must align to FOS requirements",badgeClass:"badge-regulator"},{type:"Regulator",body:"MoJ Claims Management Regulator",relevance:"Pre-2019 regulator of CMCs before FCA takeover",badgeClass:"badge-regulator"},{type:"Security",body:"ICO – Information Commissioner's Office",relevance:"Sensitive financial data of claimants under DPA/GDPR",badgeClass:"badge-security"}]},
  { employer:"Missguided Fashion | Ecommerce / Fashion Retail", period:"2014–2015", entries:[{type:"Finance",body:"FCA / PSR – Payment Systems Regulator",relevance:"Online payment processing, card acquiring and consumer finance",badgeClass:"badge-finance"},{type:"Standard",body:"PCI DSS",relevance:"Mandatory compliance for e-commerce platforms handling card payments",badgeClass:"badge-standard"},{type:"Security",body:"ICO – Information Commissioner's Office",relevance:"Customer data, marketing preferences and cookie compliance",badgeClass:"badge-security"},{type:"Regulator",body:"CMA – Competition & Markets Authority",relevance:"Consumer protection; pricing, advertising and returns obligations",badgeClass:"badge-regulator"},{type:"Regulator",body:"ASA – Advertising Standards Authority",relevance:"Digital marketing, influencer campaigns and online ad accuracy",badgeClass:"badge-regulator"}]},
  { employer:"HID Global (Hughes Identification Devices) | RFID", period:"2011–2014", entries:[{type:"Standard",body:"ISO 9001",relevance:"Core quality standard for manufacturing operations and product control",badgeClass:"badge-standard"},{type:"Regulator",body:"Ofcom / FCC (US)",relevance:"RFID / radio frequency device regulation across EMEA and APAC markets",badgeClass:"badge-regulator"},{type:"Standard",body:"ISO/IEC 18000 – RFID Standards",relevance:"International standards governing RFID air interface protocols",badgeClass:"badge-standard"},{type:"Security",body:"ICO / Regional DPAs",relevance:"RFID identification data creates data protection obligations across regions",badgeClass:"badge-security"},{type:"Regulator",body:"ECJU / BIS – Export Control",relevance:"RFID and identification technology subject to dual-use export licensing",badgeClass:"badge-regulator"}]},
  { employer:"GHD / Lion Capital | Consumer Goods (PE-backed)", period:"2008–2011", entries:[{type:"Finance",body:"FCA – Financial Conduct Authority",relevance:"Lion Capital as PE firm is FCA-regulated; portfolio IT supports reporting",badgeClass:"badge-finance"},{type:"Standard",body:"ISO 9001 / ISO 14001",relevance:"Quality and environmental management for consumer electronics manufacturing",badgeClass:"badge-standard"},{type:"Regulator",body:"MHRA / Trading Standards",relevance:"Consumer electrical products (hair tools) subject to product safety regs",badgeClass:"badge-regulator"},{type:"Standard",body:"CE / UKCA marking",relevance:"Mandatory conformity marking for electrical goods in UK and EU markets",badgeClass:"badge-standard"},{type:"Security",body:"ICO – Information Commissioner's Office",relevance:"Consumer and commercial data across a global retail brand",badgeClass:"badge-security"}]},
  { employer:"International Game Technology | Gaming Technology", period:"2004–2008", entries:[{type:"Regulator",body:"Gambling Commission (UK)",relevance:"Regulates gaming machine manufacturers supplying the UK market",badgeClass:"badge-regulator"},{type:"Regulator",body:"European national gambling regulators",relevance:"Each EU member state requires separate system certification",badgeClass:"badge-regulator"},{type:"Standard",body:"GLI – Gaming Laboratories International",relevance:"Independent test and certification body; mandatory before deployment",badgeClass:"badge-standard"},{type:"Standard",body:"ISO 9001 / ITIL",relevance:"Quality and IT service management for manufacturing and support",badgeClass:"badge-standard"},{type:"Security",body:"ICO / EU DPAs",relevance:"Player data and transaction records across European operations",badgeClass:"badge-security"}]},
  { employer:"General Dynamics | Engineering / Defence", period:"2002–2004", entries:[{type:"Defence",body:"MOD – Ministry of Defence",relevance:"Primary customer and regulator; DEFCON and JSP standards apply",badgeClass:"badge-defence"},{type:"Defence",body:"ECJU – Export Control Joint Unit",relevance:"Defence technology exports require licensing under Export Control Act / ITAR",badgeClass:"badge-defence"},{type:"Security",body:"NCSC – National Cyber Security Centre",relevance:"Security-cleared environments; IT must meet government security classifications",badgeClass:"badge-security"},{type:"Standard",body:"DEF STAN / NATO STANAG",relevance:"UK Defence Standards and NATO standardisation agreements",badgeClass:"badge-standard"},{type:"Regulator",body:"DSPCR",relevance:"Procurement and contracting compliance for UK defence supply chain",badgeClass:"badge-regulator"}]},
  { employer:"British Aerospace (BAE Systems) | Aerospace / Defence", period:"1999–2002", entries:[{type:"Standard",body:"DEF STAN 00-55",relevance:"Defence safety-critical software; Nimrod MRA4 programme",badgeClass:"badge-standard"},{type:"Standard",body:"DO-178B/C – Airborne Software",relevance:"Safety-critical avionics software standard for the Nimrod MRA4",badgeClass:"badge-standard"},{type:"Standard",body:"AS9100",relevance:"Aerospace quality management standard for BAE Systems",badgeClass:"badge-standard"},{type:"Defence",body:"MOD – Smart Procurement Initiative",relevance:"£2.2bn fixed-price MoD contract obligations",badgeClass:"badge-defence"}]},
  { employer:"AlliedSignal / Honeywell | Automotive Manufacturing", period:"1997–1999", entries:[{type:"Standard",body:"ISO 9001 / IATF 16949",relevance:"Quality management for automotive OEM manufacturing supply chain",badgeClass:"badge-standard"},{type:"Regulator",body:"HSE – Health & Safety Executive",relevance:"Industrial safety compliance at manufacturing / R&D facility",badgeClass:"badge-regulator"},{type:"Security",body:"ICO / Regional DPAs",relevance:"Employee and commercial data across multi-national operations",badgeClass:"badge-security"}]},
  { employer:"Philips Semiconductors (formerly Mullard) | Semiconductor", period:"1989–1997", entries:[{type:"Regulator",body:"Environment Agency (EA)",relevance:"Environmental permits for chemical processes at wafer fabrication facility",badgeClass:"badge-regulator"},{type:"Standard",body:"JEDEC / IEC Semiconductor Standards",relevance:"International standards governing semiconductor device specifications",badgeClass:"badge-standard"},{type:"Standard",body:"ISO 9001 / IATF 16949",relevance:"Quality management for semiconductor manufacturing serving automotive OEMs",badgeClass:"badge-standard"},{type:"Defence",body:"Wassenaar Arrangement",relevance:"Dual-use semiconductor technology subject to export control",badgeClass:"badge-defence"},{type:"Regulator",body:"HSE – Health & Safety Executive",relevance:"Extensive chemical handling and clean room safety obligations",badgeClass:"badge-regulator"},{type:"Security",body:"ICO",relevance:"Employee and commercial data across a global Philips N.V. facility",badgeClass:"badge-security"}]}
];

const consolidatedGroups = [
  {icon:"⚖️",title:"Regulated Sectors — Primary Statutory Regulators",entries:[{type:"Regulator",body:"FCA – Financial Conduct Authority",relevance:"Armstrong Watson, Claims Advisory Group, Bidwells, Missguided, GHD / Lion Capital, Great Places Housing",badgeClass:"badge-regulator"},{type:"Regulator",body:"RSH – Regulator of Social Housing",relevance:"Great Places Housing Association",badgeClass:"badge-regulator"},{type:"Regulator",body:"Ofgem",relevance:"EDF Renewables UK & Ireland",badgeClass:"badge-regulator"},{type:"Regulator",body:"RCVS",relevance:"VetPartners Group Ltd",badgeClass:"badge-regulator"},{type:"Regulator",body:"Gambling Commission (UK)",relevance:"International Game Technology",badgeClass:"badge-regulator"},{type:"Regulator",body:"FRC",relevance:"Armstrong Watson LLP",badgeClass:"badge-regulator"},{type:"Regulator",body:"CMA",relevance:"VetPartners (vet group consolidation), Missguided (consumer protection)",badgeClass:"badge-regulator"}]},
  {icon:"🛡️",title:"Data Protection & Cybersecurity",entries:[{type:"Security",body:"ICO – Information Commissioner's Office",relevance:"Every employer; ubiquitous across the entire 37-year career",badgeClass:"badge-security"},{type:"Security",body:"NCSC – National Cyber Security Centre",relevance:"EDF Renewables, General Dynamics / MOD, Great Places Housing",badgeClass:"badge-security"},{type:"Security",body:"NCSC / Cyber Essentials Plus",relevance:"Great Places Housing Group, Nova Pangaea Technologies",badgeClass:"badge-security"},{type:"Standard",body:"PCI DSS",relevance:"Missguided (e-commerce card payments), GHD (consumer retail)",badgeClass:"badge-standard"},{type:"Standard",body:"DSPT",relevance:"VetPartners (NHS-adjacent practices)",badgeClass:"badge-standard"},{type:"Security",body:"Regional DPAs (EMEA / APAC)",relevance:"HID Global – Hughes Identification Devices",badgeClass:"badge-security"}]},
  {icon:"📐",title:"Technical & Industry Standards",entries:[{type:"Standard",body:"ISO 27001",relevance:"Armstrong Watson — information security management",badgeClass:"badge-standard"},{type:"Standard",body:"ISO 22301",relevance:"Nova Pangaea Technologies — business continuity",badgeClass:"badge-standard"},{type:"Standard",body:"ISO 14001",relevance:"Nova Pangaea Technologies, GHD — environmental management",badgeClass:"badge-standard"},{type:"Standard",body:"ISO 9001",relevance:"HID Global, GHD, IGT, Honeywell, Philips — quality management",badgeClass:"badge-standard"},{type:"Standard",body:"IEC 62443",relevance:"Nova Pangaea Technologies, EDF Renewables — OT/SCADA cybersecurity",badgeClass:"badge-standard"},{type:"Standard",body:"NERC CIP",relevance:"EDF Renewables — North American critical infrastructure standard",badgeClass:"badge-standard"},{type:"Standard",body:"GLI",relevance:"International Game Technology — certification testing",badgeClass:"badge-standard"},{type:"Standard",body:"NIST Framework",relevance:"Armstrong Watson — cybersecurity framework",badgeClass:"badge-standard"},{type:"Standard",body:"ITIL Framework",relevance:"IGT, Claims Advisory Group — IT service management",badgeClass:"badge-standard"}]},
  {icon:"⚔️",title:"Defence & Export Control",entries:[{type:"Defence",body:"MOD – Ministry of Defence",relevance:"General Dynamics, British Aerospace",badgeClass:"badge-defence"},{type:"Defence",body:"ECJU – Export Control Joint Unit",relevance:"General Dynamics, British Aerospace, HID Global",badgeClass:"badge-defence"},{type:"Defence",body:"ITAR",relevance:"General Dynamics, British Aerospace",badgeClass:"badge-defence"},{type:"Defence",body:"Wassenaar Arrangement",relevance:"Philips Semiconductors (dual-use semiconductor technology)",badgeClass:"badge-defence"},{type:"Defence",body:"DSPCR",relevance:"General Dynamics",badgeClass:"badge-defence"}]},
  {icon:"🏛️",title:"Professional & Financial Bodies",entries:[{type:"Prof Body",body:"FCA / PRA",relevance:"Applies where firms interface with banking and regulated financial services",badgeClass:"badge-prof"},{type:"Finance",body:"HM Treasury",relevance:"Great Places Housing Group (bond issuance / treasury activity)",badgeClass:"badge-finance"},{type:"Prof Body",body:"RICS",relevance:"Bidwells — property professionals' standards body",badgeClass:"badge-prof"},{type:"Prof Body",body:"ICAEW / ICAS",relevance:"Armstrong Watson — chartered accountancy bodies",badgeClass:"badge-prof"},{type:"Prof Body",body:"RCVS",relevance:"VetPartners — veterinary professional standards",badgeClass:"badge-prof"},{type:"Prof Body",body:"VMD (DEFRA agency)",relevance:"VetPartners — medicines regulation",badgeClass:"badge-prof"}]},
  {icon:"🌿",title:"Environmental, Energy & Health/Safety Regulators",entries:[{type:"Environment",body:"Environment Agency (EA)",relevance:"Nova Pangaea Technologies, Philips Semiconductors",badgeClass:"badge-env"},{type:"Environment",body:"SEPA",relevance:"EDF Renewables Scotland operations",badgeClass:"badge-env"},{type:"Industrial",body:"HSE – Health & Safety Executive",relevance:"Nova Pangaea Technologies, Honeywell / Garrett, Philips Semiconductors",badgeClass:"badge-industrial"},{type:"ESG",body:"DESNZ – Dept. for Energy Security & Net Zero",relevance:"Nova Pangaea Technologies — RTFO",badgeClass:"badge-esg"},{type:"Regulator",body:"National Grid ESO",relevance:"EDF Renewables — grid code compliance",badgeClass:"badge-regulator"}]}
];

const personalCertifications = [
  {type:"Prof Body",body:"ISC2 – International Information System Security Consortium",relevance:"Issues and governs the CISSP certification held by Richard",badgeClass:"badge-prof"},
  {type:"Prof Body",body:"PMI – Project Management Institute",relevance:"Issues and governs the PMP certification held by Richard",badgeClass:"badge-prof"},
  {type:"Prof Body",body:"AXELOS / PeopleCert",relevance:"Issues and governs ITIL v3 Foundation and PRINCE2 Practitioner",badgeClass:"badge-prof"},
  {type:"Prof Body",body:"University of Manchester / Office for Students (OfS)",relevance:"BSc Computer Science; OfS is the higher education regulator",badgeClass:"badge-prof"}
];

/* ══════════════════════════ GOVERNANCE DATA ═════════════════════ */
const governanceFrameworks = [
  {num:1,employer:"Armstrong Watson LLP",sector:"Accountancy & Financial Services",period:"2024–2025",groups:[
    {label:"IT Governance & Security Frameworks",cls:"gov-fw-gov",items:["ISO 27001 (Information Security Management System)","NIST Cybersecurity Framework","UK Cyber Essentials","NCSC 10 Steps to Cyber Security","CIS Controls"]},
    {label:"Regulatory & Compliance Frameworks",cls:"gov-fw-sec",items:["FCA Compliance Framework","GDPR / UK GDPR Data Governance","Making Tax Digital (MTD) Compliance Framework","ICO Accountability Framework"]},
    {label:"IT Service Management",cls:"gov-fw-itsm",items:["ITIL v3 (Service Management Best Practice)","IT Change Management Process","Incident & Problem Management","Service Desk Operations"]},
    {label:"Project & Programme Management",cls:"gov-fw-pm",items:["PRINCE2 (Project Management)","Agile Iterative Delivery (Sprint-based IT Projects)","RICE Scoring (IT Investment Prioritisation)","ICE Scoring (Copilot Feature Prioritisation)","User Story Mapping (Copilot Agent Requirements)","Impact-Effort Matrix (Rollout Sequencing)","Eisenhower Matrix (Competing IT Demand Triage)","Cost of Delay — CoD (Copilot Business Case)","Business Case Framework","Vendor Management Framework"]},
    {label:"Architecture & Strategy",cls:"gov-fw-arch",items:["IT Strategy & Roadmap Planning","Cloud Governance Framework (Microsoft 365)","Technology Lifecycle Management","M&A IT Integration Methodology"]}
  ]},
  {num:2,employer:"Nova Pangaea Technologies (UK) Ltd",sector:"Cleantech Manufacturing / SAF",period:"2023–2024",groups:[
    {label:"IT Governance & Security Frameworks",cls:"gov-fw-gov",items:["ISO 27001 (Information Security Management)","Cyber Essentials Plus","UK GDPR / Data Governance Framework","IEC 62443 (Industrial OT/SCADA Cybersecurity)","ISO 22301 (Business Continuity Management)"]},
    {label:"Environmental & Quality Frameworks",cls:"gov-fw-qa",items:["ISO 14001 (Environmental Management)","ISO 50001 (Energy Management)","HSE Compliance Framework","RTFO (Renewable Transport Fuel Obligation) Reporting"]},
    {label:"Project & Programme Management",cls:"gov-fw-pm",items:["PRINCE2 Practitioner","PMP (Project Management Professional)","Agile MSP Onboarding & Supplier Sprints","MoSCoW Prioritisation (ICT Roadmap Requirements)","Impact-Effort Matrix (Roadmap Investment Sequencing)","Eisenhower Matrix (Scale-up Workload Prioritisation)","Cost of Delay — CoD (Security Framework Investment Case)","Capital Project Governance","Investment Round Due Diligence Framework"]},
    {label:"IT Service Management",cls:"gov-fw-itsm",items:["ITIL v3 (IT Service Management)","BCP / Disaster Recovery Planning","Device Management & Onboarding Framework","Vendor & Contract Management (MSP Network)"]},
    {label:"Data & IP Governance",cls:"gov-fw-data",items:["Intellectual Property (IP) Protection Framework","Document Management & Version Control","Data Classification & Retention Policy","Laboratory Information Management System (LIMS) Governance"]}
  ]},
  {num:3,employer:"EDF Renewables UK & Ireland",sector:"Renewable Energy (Wind, Solar, BESS)",period:"2023",groups:[
    {label:"IT Governance & Security Frameworks",cls:"gov-fw-gov",items:["ISO 27001","NIS Regulations (Network & Information Systems)","NCSC Cyber Essentials Plus","NERC CIP","IEC 62443 (OT/SCADA Cybersecurity)","Cloud Governance Framework (Microsoft Azure / IAM)"]},
    {label:"Programme & Project Management",cls:"gov-fw-pm",items:["PRINCE2 Practitioner","PMP","Agile Delivery (Cloud Migration & CMMS Rollout)","MoSCoW Prioritisation (Project Tracking Integration Requirements)","Gate Process (CMMS Deployment Phase Reviews)","Cost of Delay — CoD (Project Tracking Integration Business Case)","IT Steering Committee Governance","CapEx / OpEx Budget Management Framework"]},
    {label:"IT Service Management",cls:"gov-fw-itsm",items:["ITIL v3","SOC (Security Operations Centre) Operating Model","Incident Response & Crisis Management","SLA & Vendor Performance Management","Third-party IT Outsourcing Governance"]},
    {label:"IT/OT & Asset Management",cls:"gov-fw-arch",items:["IT/OT Convergence Framework","SCADA Integration & Governance","CMMS Governance (Single Source of Truth — MS Project / Excel / IFS)","Asset Performance Management Framework","ERP Governance (SAP / EDF Group)"]},
    {label:"Data & ESG Reporting",cls:"gov-fw-data",items:["Power BI Business Intelligence Governance","ESG & Net Zero Reporting Framework","Data Classification & UK GDPR Compliance","Identity & Access Management (IAM) Policy"]}
  ]},
  {num:4,employer:"VetPartners Group Limited",sector:"Veterinary Healthcare",period:"2022",groups:[
    {label:"IT Governance & Security",cls:"gov-fw-gov",items:["UK GDPR / Data Protection Governance","DSPT (Data Security & Protection Toolkit)","Cyber Security Risk Management Framework","Endpoint Protection & Access Management Policy","35+ ICT Policies & Procedures (authored from scratch)"]},
    {label:"Project & Programme Management",cls:"gov-fw-pm",items:["PRINCE2 Practitioner","MoSCoW Prioritisation (Policy Development Sequencing)","ICE Scoring (Hardware Deployment Ranking)","User Story Mapping (PMS Clinical Workflow Requirements)","Eisenhower Matrix (Policy Urgency vs Importance Classification)","Kanban (IT Hardware Deployment to Remote Practices)","M&A IT Due Diligence Methodology","Post-acquisition IT Integration Framework"]},
    {label:"IT Service Management",cls:"gov-fw-itsm",items:["ITIL v3 (Service Management)","ITSM via Freshservice","Incident, Problem & Change Management","Service Desk Operations (Multi-site, 350+ clinics)","SLA Management & Vendor Oversight"]},
    {label:"Architecture & Operations",cls:"gov-fw-arch",items:["Cloud Governance Framework (Microsoft Azure)","Microsoft 365 Enterprise Governance","Practice Management System (PMS) Governance","Multi-site Infrastructure Standards"]}
  ]},
  {num:5,employer:"Bidwells LLP",sector:"Property Consultancy & Surveying",period:"2020–2022",groups:[
    {label:"IT Governance & Security",cls:"gov-fw-gov",items:["ISO 27001","UK GDPR / Data Governance","Cyber Security Risk Framework","Cloudflare Web Application Security","ICO Accountability Framework"]},
    {label:"Project & Programme Management",cls:"gov-fw-pm",items:["PRINCE2 Practitioner","PMP","Agile Delivery (COVID-19 Remote Working Programme)","RICE Scoring (Digital Transformation Backlog Prioritisation)","Impact-Effort Matrix (Infrastructure Migration Sequencing)","Eisenhower Matrix (IT Team Workload Triage — Crisis Phase)","Cost of Delay — CoD (COVID-19 Remote Working Urgency Framing)","Digital Transformation Programme Management","Website Transformation Project (Property Marketing Awards 2022 winner)"]},
    {label:"IT Service Management",cls:"gov-fw-itsm",items:["ITIL-aligned Service Management","Incident & Change Management","Vendor SLA Management","End-user Computing Standards"]},
    {label:"Architecture & Data Strategy",cls:"gov-fw-arch",items:["Cloud-first Architecture Framework","Microsoft Azure & 365 Governance","Power BI Business Intelligence Framework","Enterprise CMS & CDN Governance","AI & Data Strategy Foundation"]}
  ]},
  {num:6,employer:"Great Places Housing Association",sector:"Social Housing / Not-for-Profit",period:"2017–2019",groups:[
    {label:"Regulatory & Compliance Governance",cls:"gov-fw-sec",items:["GDPR Implementation Programme (May 2018)","UK GDPR Compliance","ICO Accountability Framework","Privacy Impact Assessment (PIA) Methodology","Data Retention & Security Controls Framework","Cyber Essentials Compliance"]},
    {label:"Project & Programme Management",cls:"gov-fw-pm",items:["PRINCE2 Practitioner","PMP","Waterfall (GDPR Compliance Programme — Staged Gate Delivery)","Impact-Effort Matrix (Managed Hosting Migration Prioritisation)","Digital Transformation Programme Management","Housing ERP & MIS Modernisation Programme","Software Licence Audit Programme (£800,000 p.a. OpEx saving)"]},
    {label:"IT Service Management",cls:"gov-fw-itsm",items:["ITIL v3 (Service Management)","Service Desk Governance","Incident, Problem & Change Management","Vendor Management & Contract Governance"]},
    {label:"Data & Business Intelligence",cls:"gov-fw-data",items:["Data Governance Framework (Group-wide)","Business Intelligence & KPI Reporting","Self-service Digital Portal Governance","Housing Management Data Standards"]},
    {label:"Infrastructure & Security",cls:"gov-fw-arch",items:["Managed Hosting Governance","Network Refresh & Endpoint Management","Vulnerability Management Framework","Agile & Remote Working Infrastructure Governance"]}
  ]},
  {num:7,employer:"Claims Advisory Group Limited",sector:"Financial Services — PPI Claims Management",period:"2015–2017",groups:[
    {label:"Regulatory & Compliance Frameworks",cls:"gov-fw-sec",items:["FCA Regulatory Compliance Framework","Data Protection Act 1998 Governance","ICO / GDPR Readiness Framework","FOS Alignment","MoJ Claims Management Regulations Compliance"]},
    {label:"Project & Programme Management",cls:"gov-fw-pm",items:["PRINCE2 Practitioner","Waterfall (CRM Implementation — Requirements → Design → Build → Test → Go-live)","MoSCoW Prioritisation (CRM Requirements Workshops)","Cost of Delay — CoD (CRM Replacement Investment Justification)","Contact Centre Technology Integration Project","Infrastructure Migration & BCDR Programme"]},
    {label:"IT Service Management",cls:"gov-fw-itsm",items:["ITIL v3 (Aligned Service Management)","Incident & Problem Management","Service Level Agreement Management","Helpdesk & End-user Support Governance"]},
    {label:"Architecture & Data",cls:"gov-fw-arch",items:["Cloud Infrastructure Governance","Business Continuity / Disaster Recovery (BCDR) Framework","Telephony & Dialler Integration Governance","Real-time Operational Reporting Framework"]}
  ]},
  {num:8,employer:"Missguided Ltd",sector:"Fast Fashion / E-commerce Retail",period:"2014–2015",groups:[
    {label:"Regulatory & Compliance Frameworks",cls:"gov-fw-sec",items:["PCI DSS Compliance Framework","Data Protection Act 1998 / ICO Compliance","Consumer Protection Regulations (CMA / ASA)","FCA / PSR Payment Regulatory Compliance","Multi-region Regulatory Compliance (US / EU)"]},
    {label:"Project & Programme Management",cls:"gov-fw-pm",items:["Agile Sprint-based Development (Mobile App & Platform Work)","User Story Mapping (Mobile Commerce Product Roadmap)","ICE Scoring (Platform Improvement Prioritisation Pre-launch)","PRINCE2 Practitioner","International Expansion Programme Management","HQ Relocation Project (Stretford to Trafford Park)"]},
    {label:"IT Service Management",cls:"gov-fw-itsm",items:["ITIL-aligned Service Management","SLA Management with Hosting Providers","Vendor & Third-party Technology Management","Incident Management for E-commerce Platform"]},
    {label:"Architecture & Platform",cls:"gov-fw-arch",items:["Magento E-commerce Platform Governance","ERP / WMS / OMS Integration Framework","Mobile-first Digital Commerce Framework","Multi-currency Payment Architecture","Analytics & CRM Data Governance"]}
  ]},
  {num:9,employer:"HID Global / ASSA ABLOY Group",sector:"Security Technology / RFID & Identity",period:"2011–2014",groups:[
    {label:"IT Governance & Security",cls:"gov-fw-gov",items:["ISO 27001 (EMEA & Asia)","ASSA ABLOY Group IT Security Standards","Data Protection / Regional DPA Compliance","Identity & Access Management (IAM) Framework","ECJU / BIS Export Control Compliance"]},
    {label:"Programme & Project Management",cls:"gov-fw-pm",items:["PRINCE2 Practitioner","PMP","Waterfall (M&A IT Integration Programmes — LaserCard 2011, EasyLobby 2012)","Gate Process (Regional IT Roadmap Phase Reviews)","Eisenhower Matrix (Multi-country IT Priority Management)","M&A IT Due Diligence Methodology","Regional IT Roadmap Planning & Governance"]},
    {label:"IT Service Management",cls:"gov-fw-itsm",items:["ITIL v3 (Multi-region Service Management)","Multi-region Service Desk Governance","SLA & Vendor Performance Management","BCDR Framework","Third-party MSP & Telecoms Governance"]},
    {label:"Architecture & Infrastructure",cls:"gov-fw-arch",items:["Global IT Architecture Alignment (ASSA ABLOY HQ)","Cloud Adoption & Virtualisation Framework","Data Centre & WAN Governance (30+ countries)","ERP / CRM System Consolidation Framework","RFID & Identity Platform Governance"]}
  ]},
  {num:10,employer:"ghd (Good Hair Day) – The Jemella Group",sector:"Consumer Goods / Personal Care (PE-backed)",period:"2008–2011",groups:[
    {label:"IT Governance & Compliance",cls:"gov-fw-gov",items:["Private Equity IT Governance Framework (Montagu PE)","PCI-DSS Compliance","Data Protection Act Compliance","ISO 9001 / ISO 14001","CE / UKCA Product Compliance Framework"]},
    {label:"Programme & Project Management",cls:"gov-fw-pm",items:["PRINCE2 Practitioner","PMP","Waterfall (ERP Implementation — Requirements / Design / Build / Deploy)","Gate Process (ERP Phase Reviews — formal sign-off before each stage progression)","RICE Scoring (IT Investment Proposals to PE Board)","International Expansion IT Programme (Europe, North America)","Three-year IT Transformation Roadmap"]},
    {label:"IT Service Management",cls:"gov-fw-itsm",items:["ITIL v3 (IT Service Management)","Vendor SLA & Contract Management","Managed Service Provider (MSP) Governance","Infrastructure & Network Operations Standards"]},
    {label:"Architecture & Business Systems",cls:"gov-fw-arch",items:["ERP & Supply Chain Architecture (SAP)","CRM & Salon Partner Management (Salesforce)","DTC E-commerce Platform Governance","B2B Digital Commerce Framework","R&D Technology Enablement Framework"]}
  ]},
  {num:11,employer:"International Game Technology (IGT)",sector:"Gaming Technology / Slot Machine Manufacturing",period:"2004–2008",groups:[
    {label:"Regulatory & Compliance Frameworks",cls:"gov-fw-sec",items:["UK Gambling Act 2005 Compliance Framework","Gambling Commission (UK) Technology Compliance","European National Gaming Regulatory Compliance","GLI Certification Process","EU Data Protection Compliance"]},
    {label:"Programme & Project Management",cls:"gov-fw-pm",items:["PRINCE2 Practitioner","PMP","Waterfall (Oracle ERP End-of-life Migration)","Gate Process (ERP Migration Phase Checkpoints — Scoping / Design / Data Migration / Go-live)","Post-acquisition IT Integration (Barcrest Gaming, WagerWorks 2005)","Multi-year European Business Systems Roadmap","Capital Budget & Programme Governance"]},
    {label:"IT Service Management",cls:"gov-fw-itsm",items:["ITIL v3 (European IT Business Systems)","ERP Governance & Support (European Operations)","Casino Management System (IGT Advantage) Deployment Framework","Field Service & Client SLA Management"]},
    {label:"Enterprise Architecture",cls:"gov-fw-arch",items:["ERP & Enterprise Application Integration Framework","Pan-European Business Systems Architecture","Multi-site Data Centre & Network Governance","US-European IT Strategy Alignment (Reno HQ liaison)"]}
  ]},
  {num:12,employer:"MOD Ashchurch / General Dynamics UK",sector:"Defence / Engineering",period:"2002–2004",groups:[
    {label:"Defence Governance & Standards",cls:"gov-fw-def",items:["MoD DEFCON Standards","JSP (Joint Service Publication) Compliance","DEF STAN (UK Defence Standards)","NATO STANAG Standardisation Agreements","DSPCR","SC / DV Security Clearance Governance"]},
    {label:"Programme & Project Management",cls:"gov-fw-pm",items:["PRINCE2 Practitioner","PMP","Waterfall (BERT Development Lifecycle — Requirements / Design / Build / Test / Deploy)","Gate Process (MoD Stage Gate Reviews — formal MoD sign-off at each programme phase)","Integrated Project Team (IPT) Methodology","In-Service Declaration (ISD) Milestone Management"]},
    {label:"IT Governance & Data",cls:"gov-fw-gov",items:["NCSC Government Security Classification Framework","BERT (Bowman Equipment Resource Tracker) — bespoke centralised data warehouse","Data Management & MI Reporting Framework","Configuration Management & Version Control","Technical Documentation Control & Audit Trail"]},
    {label:"Change & Transition Management",cls:"gov-fw-change",items:["Clansman-to-Bowman Technology Transition Framework","Equipment Movement & Fitment Scheduling System","Stakeholder Engagement (DLO / General Dynamics / ABRO / MoD)"]}
  ]},
  {num:13,employer:"British Aerospace (BAE Systems)",sector:"Aerospace & Defence",period:"1999–2002",groups:[
    {label:"Aerospace & Defence Standards",cls:"gov-fw-def",items:["DEF STAN 00-55 (Safety-critical Software)","DO-178B/C (Airborne Software Standards)","AS9100 (Aerospace Quality Management)","Smart Procurement Initiative Compliance","MoD Contractual Compliance (Nimrod MRA4)"]},
    {label:"Project & Team Governance",cls:"gov-fw-pm",items:["Integrated Project Team (IPT) Methodology","Waterfall SDLC (Nimrod Application Development)","Gate Process (IPT Review Points — Requirements / Design / Build / Test)","MoSCoW Prioritisation (Airframe Documentation System Scoping)","Configuration Management (Aerospace)","Change Control & Engineering Change Management","Test & Verification Framework"]},
    {label:"Quality & Compliance",cls:"gov-fw-qa",items:["Aerospace Quality Assurance Framework","First-ever Internal Nimrod Airframe Photographic & Structural Documentation System","WSIR Test Governance","Component Traceability & Audit Trail Standards","Production Data & Milestone Reporting Standards"]},
    {label:"IT & Application Governance",cls:"gov-fw-gov",items:["SDLC (Systems Development Lifecycle)","Bespoke Application Development Standards","Avionics Data Management Governance","Cross-site Collaboration Framework (Woodford, Chadderton, Warton)"]}
  ]},
  {num:14,employer:"AlliedSignal / Honeywell Garrett Motion",sector:"Automotive Manufacturing / Turbocharger R&D",period:"1997–1999",groups:[
    {label:"Quality & Regulatory Standards",cls:"gov-fw-qa",items:["ISO 9001 Quality Management System","IATF 16949 Automotive Quality Standard (predecessor)","Y2K Remediation & Compliance Programme","HSE Industrial Safety Compliance"]},
    {label:"Application & Data Governance",cls:"gov-fw-gov",items:["Waterfall SDLC (All Bespoke Application Development)","MoSCoW Requirements Workshops (Engineering & QA Stakeholders)","Database Design & Management Standards","Lotus Notes Workflow & Document Management Governance","End-user Training & Adoption Framework"]},
    {label:"Project Management",cls:"gov-fw-pm",items:["Waterfall Project Delivery (Application Development & Y2K Remediation)","MoSCoW Prioritisation (Application Feature & Fix Sequencing)","Y2K Programme Management (Application Audit, Code Remediation & Regression Testing)","Cross-site Data Integration (Cheadle Hulme, US, France, Czech Republic)"]}
  ]},
  {num:15,employer:"Philips Semiconductors (formerly Mullard)",sector:"Semiconductor Manufacturing / Electronics",period:"1989–1997",groups:[
    {label:"Quality & Manufacturing Standards",cls:"gov-fw-qa",items:["ISO 9001 Quality Management System","IATF 16949 (Automotive Electronics — predecessor)","JEDEC / IEC Semiconductor Device Standards","Statistical Process Control (SPC) Framework","Federal Standard 209E (Clean Room — Class 10 / Class 100)","ESD Control Protocols"]},
    {label:"Enterprise Systems Governance",cls:"gov-fw-arch",items:["SAP R/2 & SAP R/3 Implementation Governance","SAP PP, MM, SD, FI, QM Module Governance","MRP II to ERP Migration Framework","Manufacturing Execution System (MES) Governance","Oracle RDBMS Data Management Standards","IBM Mainframe to Client-Server Migration Framework"]},
    {label:"Project & Training Governance",cls:"gov-fw-pm",items:["Waterfall SDLC (SAP Implementation — all phases from Requirements through to Go-live)","Gate Process (SAP Module Rollout — formal sign-off before each module went live)","MoSCoW Prioritisation (SAP Module Scoping Workshops)","Six Sigma — DMAIC (Wafer Yield & Production Throughput Improvement)","ITIL-aligned SAP Support & Incident Management","Eisenhower Matrix (SAP Support vs Y2K Remediation vs Training — workload triage)","SAP UAT Test Planning & Execution Framework","Trained Trainer Programme (SAP End-user Training Across PP, MM, SD, FI)","Philips Corporate SAP Programme Governance","Y2K Readiness & Remediation Programme"]},
    {label:"Environmental & Safety",cls:"gov-fw-def",items:["Environment Agency Permit Compliance","Wassenaar Arrangement (Dual-use Technology)","HSE Industrial Safety Framework","Clean Room Contamination Control Protocols","SMIF Wafer Handling Standards"]}
  ]}
];

/* ══════════════════════════ CV CONTENTS ═════════════════════════ */
const cvContents = [
  {num:"01",title:"Armstrong Watson LLP",sub:"Head of Technology · 2024 – 2025",star:"Microsoft Copilot agents deployed across 36,000-client SharePoint estate; document retrieval time reduced from ~2 weeks to under 2 minutes"},
  {num:"02",title:"Nova Pangaea Technologies",sub:"IT Director · 2023 – 2024",star:"ICT roadmap created from scratch and board-approved; MSP network established to support continued departmental growth"},
  {num:"03",title:"EDF Renewables UK & Ireland",sub:"IT Director · 2023",star:"Microsoft Project, Excel, and IFS integrated into a single source of truth; manual reconciliation eliminated, freeing ~2–3 days per week of project management time"},
  {num:"04",title:"VetPartners Group Limited",sub:"IT Director · 2022",star:"35+ ICT policies and procedures introduced from scratch; Kanban solution deployed to accelerate IT hardware delivery to 350+ remote veterinary practices"},
  {num:"05",title:"Bidwells LLP",sub:"IT Director · 2020 – 2022",star:"500 staff moved to remote working in 72 hours during COVID-19 lockdown with zero business continuity failures"},
  {num:"06",title:"Great Places Housing Association",sub:"IT Director · 2017 – 2019",star:"Software licence audit and legacy account removal across the group delivered an annual OpEx saving of approximately £800,000"},
  {num:"07",title:"Claims Advisory Group",sub:"IT Director · 2015 – 2017",star:"Legacy CRM replaced with FCA-compliant platform; case throughput improved 22%, FOS case outcomes improved, FCA review found no material deficiencies"},
  {num:"08",title:"Missguided Ltd",sub:"IT Director · 2014 – 2015",star:"E-commerce platform re-architected in 3 weeks ahead of the Nicole Scherzinger launch; site incidents reduced 60% over the following 6 months"},
  {num:"09",title:"HID Global / ASSA ABLOY Group",sub:"IT Director – UK, EMEA & Asia · 2011 – 2014",star:"LaserCard EMEA IT estate integrated post-acquisition with no disruption to government ID card programmes; £180,000 p.a. data centre savings achieved"},
  {num:"10",title:"ghd – The Jemella Group",sub:"IT Director · 2008 – 2011",star:"Unified ERP platform delivered for PE-backed international expansion; directly enabled North American market entry under Montagu PE ownership"},
  {num:"11",title:"International Game Technology (IGT)",sub:"Head of IT Business Systems – Europe · 2004 – 2007",star:"End-of-life Oracle ERP migrated to a supported version in partnership with Mokum Managed Services (Oracle specialists, Canary Wharf); operational and compliance risks eliminated"},
  {num:"12",title:"MOD Ashchurch / General Dynamics UK",sub:"IT Programme Director · 2002 – 2004",star:"Headhunted to build BERT (Bowman Equipment Resource Tracker) from scratch — centralised data warehouse tracking every equipment movement across 80,000 vehicles; programme achieved an unprecedented on-time In-Service Declaration"},
  {num:"13",title:"British Aerospace (BAE Systems)",sub:"Programmer / Application Specialist · 1999 – 2002",star:"First-ever complete photographic and structural documentation of the Nimrod airframe from the inside; bespoke system built to capture, reference, and log structural discrepancies — no precedent existed since the aircraft's original conception"},
  {num:"14",title:"AlliedSignal Honeywell Garrett",sub:"Programmer & Application Specialist · 1997 – 1999",star:"Y2K compliance audit and remediation completed for all bespoke manufacturing applications; zero failures at the date transition boundary"},
  {num:"15",title:"Philips Semiconductors (formerly Mullard)",sub:"IT Systems Analyst · 1989 – 1997",star:"SAP PP go-live rescued through on-the-job retraining programme; production team fully adopted the system within 4 weeks, parallel paper process discontinued"}
];

/* ══════════════════════════ NAVIGATION ══════════════════════════ */
/* ══════════════════════════ PAGE META (SEO) ══════════════════════
   Per-section title, meta description, and hash URL.
   TODO: Replace BASE_URL with your actual GitHub Pages domain.
═══════════════════════════════════════════════════════════════════ */
const BASE_URL = 'https://richardpriest.github.io';

const PAGE_META = {
  home: {
    title: 'Richard Priest | Senior Technology Executive | IT Director | CISSP · PMP · PRINCE2',
    description: 'Richard Priest – Senior Technology Executive and IT Director with 37 years of progressive technology leadership spanning defence, aerospace, energy, financial services, and cleantech. CISSP · PMP · PRINCE2 Practitioner · ITIL v3. Available for permanent and interim IT Director, CTO, and advisory roles across the UK.',
    hash: '#home'
  },
  career: {
    title: 'Career History | Richard Priest | Senior Technology Executive 1988–2025',
    description: '37 years of progressive technology leadership across 15 senior roles from 1988 to 2025, spanning semiconductor manufacturing, defence, aerospace, renewable energy, financial services, cleantech, and more.',
    hash: '#career'
  },
  regulatory: {
    title: 'Regulatory Register | Richard Priest | IT Director',
    description: 'Comprehensive regulatory and governing body register compiled across Richard Priest\'s 37-year career, covering FCA, ICAEW, ISO 27001, UK GDPR, NIS Regulations, NCSC, HSE, Environment Agency, and more.',
    hash: '#regulatory'
  },
  governance: {
    title: 'Governance & Project Management Frameworks | Richard Priest | IT Director',
    description: 'Project management and governance frameworks applied across Richard Priest\'s career, including PRINCE2, Agile, Waterfall, ITIL v3, ISO 27001, NIST, Cyber Essentials Plus, MoSCoW, RICE, and more.',
    hash: '#governance'
  },
  contact: {
    title: 'Contact Richard Priest | Senior Technology Executive | IT Director',
    description: 'Contact Richard Priest – Senior Technology Executive and IT Director open to permanent and interim IT Director, CTO, and technology advisory roles across the UK. Available for immediate discussions.',
    hash: '#contact'
  },
  download: {
    title: 'Download CV | Richard Priest | IT Director | CISSP · PMP · PRINCE2',
    description: 'Download Richard Priest\'s full CV – 37 years of progressive technology leadership across 15 senior roles in defence, aerospace, energy, financial services, and cleantech. Available in .docx format.',
    hash: '#download'
  }
};

function updatePageMeta(name) {
  const meta = PAGE_META[name];
  if (!meta) return;
  // Update document title
  document.title = meta.title;
  // Update meta description
  const descEl = document.querySelector('meta[name="description"]');
  if (descEl) descEl.setAttribute('content', meta.description);
  // Update canonical link
  const canonEl = document.getElementById('canonical-link');
  if (canonEl) canonEl.setAttribute('href', BASE_URL + meta.hash);
  // Update URL in browser bar without triggering a page reload
  if (window.history && window.history.pushState) {
    window.history.pushState({ page: name }, meta.title, meta.hash);
  }
  // Update Open Graph URL
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', BASE_URL + meta.hash);
  // Update Open Graph title
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', meta.title);
  // Update Open Graph description
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', meta.description);
}

function showPage(pageName) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const page = document.getElementById('page-' + pageName);
  if (page) { page.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  const link = document.querySelector(`.nav-link[data-page="${pageName}"]`);
  if (link) link.classList.add('active');
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('navToggle').classList.remove('open');
  if (pageName === 'career')     { careerPage = 1; renderCareers(); }
  if (pageName === 'regulatory') { employerPage = 1; renderEmployers(); renderConsolidated(); renderCertifications(); }
  if (pageName === 'governance') { governancePage = 1; renderGovernance(); }
  if (pageName === 'download')   { renderCVContents(); }
  // SEO: sync title, meta description, canonical, and browser URL
  updatePageMeta(pageName);
}

/* ══════════════════════════ QR CODE ═════════════════════════════ */
function initQRCode() {
  const targets = [document.getElementById('qrcode'), document.getElementById('qrcode-contact')];
  targets.forEach(el => {
    if (!el || !window.QRCode) return;
    try {
      new QRCode(el, { text:"https://www.linkedin.com/in/richardpriest/", width:132, height:132, colorDark:"#0b1929", colorLight:"#ffffff", correctLevel: QRCode.CorrectLevel.M });
    } catch(e) {
      el.innerHTML = '<div style="width:132px;height:132px;background:#fff;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:10px;color:#999;text-align:center;padding:8px;">QR · LinkedIn</div>';
    }
  });
}

/* ══════════════════════════ CAREER RENDERING ════════════════════ */
function renderCareers() {
  const container = document.getElementById('career-container');
  const start = (careerPage - 1) * CAREERS_PER_PAGE;
  const slice = careers.slice(start, start + CAREERS_PER_PAGE);
  container.innerHTML = slice.map((c, idx) => `
    <article class="career-card" style="animation-delay:${idx * 0.07}s">
      <div class="career-card-header">
        <div class="role-number">${String(c.num).padStart(2,'0')}</div>
        <div class="role-info">
          <div class="role-title">${c.title}</div>
          <div class="role-company">${c.company}</div>
          <div class="role-sector">${c.sector}</div>
        </div>
        <div class="role-meta">
          <div class="role-period">${c.period}</div>
          <div class="role-location">${c.location}</div>
        </div>
      </div>
      <div class="career-card-body">
        <p class="role-desc">${c.desc}</p>
        <div class="role-achievements-title">Key Achievements &amp; Responsibilities</div>
        <ul class="achievement-list">${c.achievements.map(a => `<li>${a}</li>`).join('')}</ul>
        <div class="role-skills">${c.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}</div>
        ${c.regulators.length ? `<div class="role-regulators"><span class="reg-label">Regulatory:</span>${c.regulators.map(r=>`<span class="reg-badge">${r}</span>`).join('')}</div>` : ''}
      </div>
      <div class="star-panel">
        <button class="star-toggle" onclick="toggleStar(this)" aria-expanded="false">
          <span class="star-toggle-label">
            <span class="star-icon">★</span>
            <span class="star-toggle-title">STAR Case Study — ${c.star.title}</span>
          </span>
          <span class="star-toggle-arrow">▾</span>
        </button>
        <div class="star-body" hidden>
          <div class="star-grid">
            <div class="star-item">
              <div class="star-letter star-s">S</div>
              <div class="star-content">
                <div class="star-label">Situation</div>
                <p>${c.star.situation}</p>
              </div>
            </div>
            <div class="star-item">
              <div class="star-letter star-t">T</div>
              <div class="star-content">
                <div class="star-label">Task</div>
                <p>${c.star.task}</p>
              </div>
            </div>
            <div class="star-item">
              <div class="star-letter star-a">A</div>
              <div class="star-content">
                <div class="star-label">Action</div>
                <p>${c.star.action}</p>
              </div>
            </div>
            <div class="star-item">
              <div class="star-letter star-r">R</div>
              <div class="star-content">
                <div class="star-label">Result</div>
                <p>${c.star.result}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>`).join('');
  const total = Math.ceil(careers.length / CAREERS_PER_PAGE);
  renderPagination('career-pagination', careerPage, total, goCareerPage);
  document.getElementById('career-page-info').textContent = `Showing roles ${start+1}–${Math.min(start+CAREERS_PER_PAGE, careers.length)} of ${careers.length}`;
}
function goCareerPage(p) { careerPage = p; renderCareers(); document.getElementById('page-career').scrollIntoView({behavior:'smooth',block:'start'}); }

/* ══════════════════════════ STAR TOGGLE ═════════════════════════ */
function toggleStar(btn) {
  const body = btn.nextElementSibling;
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', !expanded);
  btn.querySelector('.star-toggle-arrow').textContent = expanded ? '▾' : '▴';
  if (expanded) {
    body.hidden = true;
  } else {
    body.hidden = false;
  }
}

/* ══════════════════════════ EMPLOYER RENDERING ══════════════════ */
function renderEmployers() {
  const container = document.getElementById('employer-container');
  const start = (employerPage - 1) * EMPLOYERS_PER_PAGE;
  const slice = regulatoryByEmployer.slice(start, start + EMPLOYERS_PER_PAGE);
  container.innerHTML = slice.map((emp, idx) => `
    <div class="employer-block" style="animation-delay:${idx * 0.06}s">
      <div class="employer-header">
        <div class="employer-num">${start+idx+1}</div>
        <div><div class="employer-name">${emp.employer}</div><div class="employer-period">${emp.period}</div></div>
      </div>
      <div class="reg-table-wrap"><table class="reg-table">
        <thead><tr><th>Type</th><th>Body / Standard</th><th>Relevance</th></tr></thead>
        <tbody>${emp.entries.map(e=>`<tr><td><span class="type-badge ${e.badgeClass}">${e.type}</span></td><td style="font-weight:600;color:var(--text-primary)">${e.body}</td><td>${e.relevance}</td></tr>`).join('')}</tbody>
      </table></div>
    </div>`).join('');
  const total = Math.ceil(regulatoryByEmployer.length / EMPLOYERS_PER_PAGE);
  renderPagination('employer-pagination', employerPage, total, goEmployerPage);
  document.getElementById('employer-page-info').textContent = `Showing employers ${start+1}–${Math.min(start+EMPLOYERS_PER_PAGE, regulatoryByEmployer.length)} of ${regulatoryByEmployer.length}`;
}
function goEmployerPage(p) { employerPage = p; renderEmployers(); document.getElementById('page-regulatory').scrollIntoView({behavior:'smooth',block:'start'}); }

/* ══════════════════════════ CONSOLIDATED ════════════════════════ */
function renderConsolidated() {
  document.getElementById('consolidated-container').innerHTML = consolidatedGroups.map(g => `
    <div class="consolidated-group">
      <div class="group-title"><span class="group-icon">${g.icon}</span> ${g.title}</div>
      <div class="reg-table-wrap"><table class="reg-table">
        <thead><tr><th>Type</th><th>Body / Standard</th><th>Career Relevance</th></tr></thead>
        <tbody>${g.entries.map(e=>`<tr><td><span class="type-badge ${e.badgeClass}">${e.type}</span></td><td style="font-weight:600;color:var(--text-primary)">${e.body}</td><td>${e.relevance}</td></tr>`).join('')}</tbody>
      </table></div>
    </div>`).join('');
}

function renderCertifications() {
  document.getElementById('certs-container').innerHTML = `
    <p class="certs-intro">The table below lists the professional bodies and academic institutions governing Richard Priest's personal certifications and qualifications as at 2025.</p>
    <div class="cert-table-card"><div class="reg-table-wrap"><table class="reg-table">
      <thead><tr><th>Type</th><th>Governing Body</th><th>Relevance</th></tr></thead>
      <tbody>${personalCertifications.map(c=>`<tr><td><span class="type-badge ${c.badgeClass}">${c.type}</span></td><td style="font-weight:600;color:var(--text-primary)">${c.body}</td><td>${c.relevance}</td></tr>`).join('')}</tbody>
    </table></div></div>
    <div style="margin-top:28px;padding:20px 22px;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);font-size:13px;color:var(--text-muted);line-height:1.7;">
      <strong style="color:var(--lime);">Notes:</strong> This register was compiled from full career analysis of Richard Priest's CV covering 1988–2025. Some bodies (notably the ICO, FCA, and NCSC) appear across multiple roles reflecting their broad jurisdiction across UK commerce.
    </div>`;
}

/* ══════════════════════════ GOVERNANCE RENDERING ════════════════ */
function renderGovernance() {
  const container = document.getElementById('governance-container');
  const start = (governancePage - 1) * GOVERNANCE_PER_PAGE;
  const slice = governanceFrameworks.slice(start, start + GOVERNANCE_PER_PAGE);
  container.innerHTML = slice.map((item, idx) => `
    <div class="gov-card" style="animation-delay:${idx * 0.07}s">
      <div class="gov-card-header">
        <div class="gov-num">${String(item.num).padStart(2,'0')}</div>
        <div><div class="gov-employer">${item.employer}</div><div class="gov-sector">${item.sector}</div></div>
        <div class="gov-period">${item.period}</div>
      </div>
      <div class="gov-card-body">
        ${item.groups.map(g => `
          <div class="gov-framework-group">
            <div class="gov-group-label">${g.label}</div>
            <div class="gov-frameworks">${g.items.map(fw=>`<span class="gov-fw-tag ${g.cls}">${fw}</span>`).join('')}</div>
          </div>`).join('')}
      </div>
    </div>`).join('');
  const total = Math.ceil(governanceFrameworks.length / GOVERNANCE_PER_PAGE);
  renderPagination('governance-pagination', governancePage, total, goGovernancePage);
  document.getElementById('governance-page-info').textContent = `Showing employers ${start+1}–${Math.min(start+GOVERNANCE_PER_PAGE, governanceFrameworks.length)} of ${governanceFrameworks.length}`;
}
function goGovernancePage(p) { governancePage = p; renderGovernance(); document.getElementById('page-governance').scrollIntoView({behavior:'smooth',block:'start'}); }

/* ══════════════════════════ CV CONTENTS ═════════════════════════ */
function renderCVContents() {
  const el = document.getElementById('cv-contents-list');
  if (!el) return;
  el.innerHTML = cvContents.map(c => `
    <div class="cv-content-item">
      <div class="cv-content-num">${c.num}</div>
      <div class="cv-content-detail">
        <div class="cv-content-title">${c.title}</div>
        <div class="cv-content-sub">${c.sub}</div>
        <div class="cv-content-star">
          <span class="cv-star-pip">★ STAR</span>
          ${c.star}
        </div>
      </div>
    </div>`).join('');
}

/* ══════════════════════════ CONTACT FORM ════════════════════════
   Submissions are delivered to richardpriest19@gmail.com via Formspree.
   Steps to activate:
     1. Go to https://formspree.io and sign up with richardpriest19@gmail.com
     2. Create a new form — Formspree will give you an endpoint like:
        https://formspree.io/f/xyzabcde
     3. Replace the FORMSPREE_ENDPOINT value below with that URL.
     4. On first submission Formspree will send a confirmation email —
        click the link in it to activate the form.
═══════════════════════════════════════════════════════════════════ */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xlgolgwd';

async function submitContactForm() {
  const name    = document.getElementById('f-name').value.trim();
  const email   = document.getElementById('f-email').value.trim();
  const org     = document.getElementById('f-org').value.trim();
  const phone   = document.getElementById('f-phone').value.trim();
  const type    = document.getElementById('f-type').value;
  const sector  = document.getElementById('f-sector').value;
  const budget  = document.getElementById('f-budget').value;
  const message = document.getElementById('f-message').value.trim();
  const errEl   = document.getElementById('form-error');
  const submitBtn = document.querySelector('.btn-submit');
  errEl.style.display = 'none';

  // Client-side validation
  const errors = [];
  if (!name)    errors.push('Please enter your full name.');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Please enter a valid email address.');
  if (!type)    errors.push('Please select an enquiry type.');
  if (!message) errors.push('Please enter a message.');
  if (errors.length) {
    errEl.innerHTML = errors.join('<br>');
    errEl.style.display = 'block';
    return;
  }

  // Disable button to prevent double-submission
  if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending…'; }

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name, email, organisation: org, telephone: phone,
        enquiry_type: type, sector, day_rate_or_salary: budget, message
      })
    });

    if (response.ok) {
      // Success — show confirmation panel
      document.getElementById('contact-form-fields').style.display = 'none';
      document.getElementById('form-success').style.display = 'block';
    } else {
      const data = await response.json();
      const msg = (data && data.errors)
        ? data.errors.map(e => e.message).join('<br>')
        : 'Something went wrong. Please try again or connect via LinkedIn.';
      errEl.innerHTML = msg;
      errEl.style.display = 'block';
    }
  } catch (err) {
    errEl.innerHTML = 'Network error — please check your connection and try again, or reach out via LinkedIn.';
    errEl.style.display = 'block';
  } finally {
    if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Submit Enquiry'; }
  }
}

function resetForm() {
  ['f-name','f-org','f-email','f-phone','f-message'].forEach(id => { const el = document.getElementById(id); if(el) el.value = ''; });
  ['f-type','f-sector','f-budget'].forEach(id => { const el = document.getElementById(id); if(el) el.selectedIndex = 0; });
  document.getElementById('contact-form-fields').style.display = 'block';
  document.getElementById('form-success').style.display = 'none';
  document.getElementById('form-error').style.display = 'none';
}

/* ══════════════════════════ REGULATORY TABS ════════════════════ */
function showRegTab(tabName) {
  document.querySelectorAll('.reg-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.reg-panel').forEach(p => p.classList.remove('active'));
  const tab = document.querySelector(`.reg-tab[data-tab="${tabName}"]`);
  const panel = document.getElementById('reg-' + tabName);
  if (tab) tab.classList.add('active');
  if (panel) panel.classList.add('active');
}

/* ══════════════════════════ PAGINATION ══════════════════════════ */
function renderPagination(containerId, currentPage, totalPages, clickFn) {
  const container = document.getElementById(containerId);
  if (!container || totalPages <= 1) { if (container) container.innerHTML = ''; return; }
  let html = `<button class="page-btn prev-btn" ${currentPage===1?'disabled':''} onclick="${clickFn.name}(${currentPage-1})">&#8249; Prev</button>`;
  for (let i = 1; i <= totalPages; i++) {
    if (totalPages <= 7 || i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) {
      html += `<button class="page-btn${i===currentPage?' active':''}" onclick="${clickFn.name}(${i})">${i}</button>`;
    } else if (Math.abs(i - currentPage) === 2) {
      html += `<span style="color:var(--text-dim);padding:0 2px;line-height:38px">…</span>`;
    }
  }
  html += `<button class="page-btn next-btn" ${currentPage===totalPages?'disabled':''} onclick="${clickFn.name}(${currentPage+1})">Next &#8250;</button>`;
  container.innerHTML = html;
}

/* ══════════════════════════ FAB & SCROLL ════════════════════════ */
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
function updateFabs() {
  const scrolled = window.scrollY > 280;
  document.getElementById('top-btn').classList.toggle('visible', scrolled);
  document.getElementById('home-btn').classList.toggle('visible', scrolled);
}
function updateNavbar() { document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40); }

/* ══════════════════════════ MOBILE NAV ══════════════════════════ */
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  toggle.addEventListener('click', () => { toggle.classList.toggle('open'); links.classList.toggle('open'); });
}

/* ══════════════════════════ SCROLL ANIMATIONS ═══════════════════ */
function initScrollObserver() {
  if (!window.IntersectionObserver) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.comp-tag, .sector-pill, .cert-card, .highlight-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(10px)';
    el.style.transition = 'opacity 0.42s ease, transform 0.42s ease';
    observer.observe(el);
  });
}

/* ══════════════════════════ INIT ════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initQRCode();
  initMobileNav();
  setTimeout(initScrollObserver, 100);
  window.addEventListener('scroll', () => { updateFabs(); updateNavbar(); }, { passive: true });

  // SEO / UX: read the URL hash on load and navigate to the correct section.
  // This allows shared/bookmarked URLs like /#career to work correctly.
  const knownPages = ['home', 'career', 'regulatory', 'governance', 'contact', 'download'];
  const hash = window.location.hash.replace('#', '');
  const initialPage = knownPages.includes(hash) ? hash : 'home';
  showPage(initialPage);

  // Handle browser back/forward navigation
  window.addEventListener('popstate', (e) => {
    const page = (e.state && e.state.page) || 'home';
    showPage(page);
  });
});
