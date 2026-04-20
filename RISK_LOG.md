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
