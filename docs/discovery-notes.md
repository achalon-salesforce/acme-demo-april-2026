# Salesforce Discovery Notes – Acme Corporation
**Date:** April 7, 2026 | **AE:** Sarah Mitchell | **SE:** Jordan Park

---

## Attendees
- Tom Ridley – VP Sales
- Dana Chow – Sales Ops Manager
- Kevin Esteves – IT Director

---

## Company Overview
- Manufactures industrial fluid control components (valves, actuators, flow meters) for heavy industry
- Primary customers are OEMs and large distributors in oil & gas, water treatment, and chemical processing
- Sells primarily through a direct field sales team (~50 reps) with a small channel partner network (~15 partners) for mid-market and regional accounts
- Average deal size: $85K for mid-market, $400K+ for enterprise OEM contracts
- Average sales cycle: 30–45 days (mid-market), 90–120 days (enterprise)
- ~$180M ARR, ~450 employees
- 87 Salesforce users across sales, managers, and ops
- 1 admin, no dedicated developer

---

## Current Pain Points
- Forecast is unreliable; managers run pipeline reviews in Excel
- Reps have low Salesforce adoption; mostly live in email and Slack
- Deal stages are outdated (last updated 2019)
- Duplicate accounts and poor data quality across the org
- Legacy customization making it hard to build new things
- Clari was purchased 18 months ago but barely used

---

## Current Integrations
- HubSpot – marketing automation (bidirectional, messy sync)
- NetSuite – ERP (one-way push on closed/won)
- ZoomInfo – data enrichment (inconsistent use)
- Conga, DocuSign, Clari

---

## What They Want
- Clean, trustworthy pipeline data
- Reps spending less than 5 minutes/day on data entry
- Managers running reviews inside Salesforce, not Excel
- Solution in place before hiring 40 new reps in H2 2026

---

## Budget & Timeline
- Mid-six figures approved for this FY
- CFO (Lisa Huang) is economic buyer; Tom is the champion
- Tom presenting to board in June – wants early wins by then

---

## Competition
- Evaluated Microsoft Dynamics – too heavy a lift
- HubSpot CRM explored briefly
- Marketing team internally advocates for HubSpot – potential pushback

---

## Opportunity Areas
- Sales Cloud cleanup & process redesign – **strong fit**
- Einstein / Revenue Intelligence – **medium** (need data cleanup first)
- Slack for Sales – **medium** (reps already in Slack)
- SI partner needed for implementation – **recommend Slalom or Cognizant**
- Data Cloud – **too early**, revisit in 6–9 months

---

## Account Data Gaps (Discovered)
- No consistent way to track deal confidence or health at the account level
- No visibility into when an exec last engaged with an account
- Accounts not segmented by tier (Enterprise / Mid-Market / SMB)
- No mechanism to flag at-risk or renewal accounts proactively
- Reps have inconsistent field-level access; no clean permission structure in place
- Account page layout is cluttered; reps don't know what to fill in or when

---

## User & Access Pain
- All reps have similar broad access regardless of role or segment
- IT concerned about maintaining complex sharing rules and OWD workarounds
- No role-specific views or guided experience for reps on record pages
- Kevin wants a simpler, more maintainable security model going forward

---

## Next Steps
- April 14 – SE sends technical current state vs. future state overview to Kevin
- April 17 – AE schedules CFO intro call with Tom
- April 21 – Demo: Sales Cloud + Einstein Activity Capture + Slack + LWC Account Health Card
- April 28 – SI partner scoping conversation
- Send 2 customer references in similar manufacturing orgs
