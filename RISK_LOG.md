# ⚠️ MeetDrop - Project Risk Log (Sprint #1 / MVP)

| Risk ID | Jira Ticket | Description | Probability | Impact | Strategy | Status | Mitigation / Action Taken |
|:---|:---|:---|:---:|:---:|:---|:---:|:---|
| **R-01** | `MD-21` | CORS policy blocking Vercel-Backend communication | High | High | Avoidance | **Closed** | Configured whitelist of origins and Security Headers in Express middleware. |
| **R-02** | `MD-20` | Database connectivity failure (Bahrain Region Outage) | Low | High | Mitigation | **Closed** | **Materialized:** Migrated database cluster from Bahrain (me-south-1) to Frankfurt (eu-central-1). |
| **R-03** | `MD-22` | Incomplete API documentation causing Frontend bottlenecks | Medium | Medium | Mitigation | **Closed** | Added JSDoc comments to API routes to prevent "Invisibility" blockers. |
| **R-04** | `MD-22` | JWT Authentication logic vulnerabilities & UI Error handling | Medium | High | Mitigation | **Closed** | Peer Review (Egoless Programming) between Dev and QA to fix token leaks. |
| **R-05** | `MD-23` | Missing MVP deadline due to infrastructure crisis | High | High | Acceptance | **Deferred** | **Scope Reduction:** Deferred 15 points of non-essential API routes to Sprint 2 to prioritize "The Golden Path". |

---

## 📊 Risk Management Dashboard (EVM Impact)
- **Materialized Risk (R-02 / MD-20):** The Bahrain server outage caused a severe development halt (The Flatline).
- **Schedule Impact:** SPI dropped to 0.78 due to unplanned Disaster Recovery hours.
- **Cost Impact:** AC increased significantly as the team engaged in "Crunch Time" to resolve the infrastructure and CORS issues (CPI: 0.62).

---

## 🛠️ Risk Updates & Mitigation Reports

### 1. Risk Update: Third-Party Database Server Crash (R-02 | Jira: MD-20)
**Status:** ✅ Mitigated (Closed)
**Mitigation Actions Taken:**
Upon total connection failure to the ME-South-1 region, the team executed an immediate Disaster Recovery plan. Development on new features was halted (reflecting the burndown flatline). A new cluster was provisioned in Frankfurt (eu-central-1), and environmental variables within Vercel were securely updated. This incident highlighted the importance of resilient infrastructure planning.

### 2. Risk Update: CORS Blocking Issues with Vercel (R-01 | Jira: MD-21)
**Status:** ✅ Mitigated (Closed)
**Mitigation Actions Taken:**
Transitioning the backend to a Serverless model on Vercel triggered strict CORS policies, completely blocking frontend communication. The DevOps and Lead Dev collaborated to perform immediate Refactoring, implementing a `vercel.json` configuration file and adjusting Express middleware headers to securely whitelist our production React app origin. 

### 3. Risk Update: Integration & API Testing Gaps (R-03, R-04 | Jira: MD-22)
**Status:** ✅ Mitigated (Closed)
**Mitigation Actions Taken:**
To address the risk of backend updates breaking the frontend UI and to resolve critical JWT security vulnerabilities discovered by QA, the team executed a coordinated, cross-disciplinary mitigation plan:
1. **Automated API Testing (QA):** Comprehensive native Node.js test scripts (`test_users.js`, `test_auth.js`) were developed to validate all data contracts and API endpoints prior to deployment.
2. **CI/CD Build Safeguards (DevOps):** GitHub Actions and Vercel Previews were configured to automatically catch build failures and ensure frontend stability upon any backend structural changes.
3. **Security Audit & Documentation (Lead Dev & Fullstack):** JWT vulnerabilities were resolved, and strict RBAC (Role-Based Access Control) was implemented. Both Frontend and Backend APIs were thoroughly documented using JSDoc to maintain a clear schema contract and prevent "silent errors" in the UI.

### 4. Sprint 1 Closure & Final Risk Sign-off (Jira: MD-33)
**Status:** ✅ Complete (Sprint 1 Locked)  
**Final Update:** As we close Sprint 1 and prepare for the MVP demonstration, all critical infrastructure, integration, and security blockers (R-01 through R-04) have been fully mitigated and verified by QA. The core "Golden Path" is currently stable in the live Vercel production environment.

**Deferred Risk (R-05 | MD-23):** To survive the infrastructure crisis without compromising quality, we executed a deliberate Scope Reduction. The risk of missing the deadline was mitigated for the MVP by deferring 15 story points of non-essential features. This risk ticket (MD-23) is officially transferred to Sprint 2, where the deferred features will be re-estimated and prioritized.
