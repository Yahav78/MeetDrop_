# ⚠️ MeetDrop - Project Risk Log (Sprint #2)

| Risk ID | Description | Probability | Impact | Strategy | Status | Mitigation / Action Taken |
|:---|:---|:---:|:---:|:---|:---:|:---|
| **R-01** | CORS policy blocking Vercel-Backend communication | High | High | Avoidance | **Closed** | Configured whitelist of origins in Express middleware early in sprint. |
| **R-02** | Database connectivity failure (Bahrain Region Outage) | Low | High | Mitigation | **Resolved** | **Materialized:** Migrated database cluster from Bahrain (me-south-1) to Frankfurt (eu-central-1). |
| **R-03** | Incomplete API documentation for Frontend team | Medium | Medium | Mitigation | **Closed** | Shared Postman collection and updated Swagger docs to prevent "Invisibility" blockers. |
| **R-04** | JWT Authentication logic vulnerabilities | Medium | High | Mitigation | **Closed** | Conducted Peer Review (Egoless Programming) between Yahav and Naveh to fix token validation leaks. |
| **R-05** | Missing MVP deadline due to infrastructure crisis | High | High | Acceptance | **Monitoring** | **Scope Reduction:** Deferred 15 points of non-essential API routes to prioritize "The Golden Path". |

---

## 🛠️ Risk Management Dashboard (EVM Impact)
- **Materialized Risk (R-02):** The Bahrain server outage caused a 3-day development halt.
- **Schedule Impact:** SPI dropped to 0.85.
- **Cost Impact:** AC increased due to unplanned Disaster Recovery hours (CPI: 0.58).

## Risk Update: Integration & API Testing Gaps (MD-22)
**Status:** ✅ Mitigated (Closed)
**Mitigation Actions Taken:**
To address the risk of backend updates breaking the frontend UI and resolving JWT vulnerabilities, the team executed a coordinated mitigation plan across multiple disciplines:
1. **Automated API Testing (QA):** Comprehensive native Node.js test scripts (`test_users.js`, `test_auth.js`) were developed to validate all data contracts and API endpoints prior to deployment.
2. **CI/CD Build Safeguards (DevOps):** GitHub Actions and Vercel Previews were configured to automatically catch build failures and ensure frontend stability upon any backend structural changes.
3. **Security Audit & Documentation (Lead Dev & Fullstack):** JWT vulnerabilities were resolved, and strict RBAC (Role-Based Access Control) was implemented. Both Frontend and Backend APIs were thoroughly documented using JSDoc to maintain a clear schema contract.
