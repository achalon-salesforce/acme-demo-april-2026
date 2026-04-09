# Claude Go Demo Project

This project is used for demoing Claude Go capabilities. Follow these instructions consistently for every demo session.

## Demo Workflow

When the user asks to demo Claude Go or start a demo conversation:

1. **Find discovery notes**: Look in the `docs/` folder for discovery notes provided by the user

2. **Create a POV document**: Generate a Point of View document based on the discovery notes with this structure:
   - **Customer Background**: Brief context about the customer and their business
   - **Current State Challenges**: Key pain points and challenges identified in discovery
   - **Proposed Solution**: High-level approach to address their needs
   - **Value & Impact**: Expected business outcomes and benefits
   - **Success Criteria**: How we'll measure success

3. **Share the POV**: Output the complete POV document directly in the chat

4. **Switch to Plan Mode**: Use the EnterPlanMode tool to create a structured implementation plan

5. **Create Demo Build Plan**: Plan a simple Salesforce implementation including:
   - Custom fields (based on data needs from disco)
   - Permission set (based on user access requirements)
   - Lightning Web Component (based on UI/UX needs)
   
   Keep the plan simple and focused. All components should directly trace back to requirements in the discovery notes.

## LWC Component Requirements

The accountHealthCard LWC must be **an executive-grade dashboard**, not a field display. This is the centerpiece of the demo that justifies custom development. It must include all of the following sections:

### 1. Hero Section: Composite Health Score
- **Conic-gradient score ring** (0-100) computed from pipeline health, win rate, engagement recency, and deal quality
- Color-coded: green (75+), blue (50-74), orange (25-49), red (0-24)
- Tier badge, Health Status badge, and Engagement freshness badge displayed alongside the ring

### 2. Executive Engagement Tracker
- Progress bar showing engagement freshness (Fresh/Aging/Overdue)
- Formatted date + "X days ago" label
- Green (<14 days), orange (14-30 days), red (>30 days)

### 3. Key Metrics Grid (4-up)
- Total Pipeline, Weighted Pipeline, Won YTD (dollar amounts), Open Deals (count)
- Formatted as $XK / $XM with bold numbers and uppercase captions
- Hover state on each metric card

### 4. Win Rate Bar
- Horizontal progress bar showing win rate percentage
- Color coded: green (50%+), orange (30-49%), red (<30%)
- Shows "X% - Y won this year" detail

### 5. Pipeline by Stage
- Horizontal bar chart for each stage sorted by pipeline share
- Stage name, dollar amount, deal count per row
- Color gradient across bars (dark blue to light blue)

### 6. At-Risk Deals
- Cards for deals with Deal_Confidence = Low OR closing within 14 days
- Each card shows: deal name, amount, stage, close date, confidence badge
- Overdue deals get red left border + red background tint
- Section has warm background to draw attention

### 7. Smart Insights
- Auto-generated recommendations based on data patterns:
  - Engagement overdue warning
  - At-risk deal count alert
  - Low win rate flag
  - Weak weighted pipeline coverage
  - Next closing deal callout
  - Positive reinforcement when account is healthy
- Each insight has an icon and descriptive sentence

### 8. Activity Footer
- Shows "X activities in the last 30 days"

### Apex Controller: `AccountHealthCardController`
- Single `@AuraEnabled(cacheable=true)` method `getAccountHealth(accountId)`
- Returns `AccountHealthData` wrapper with:
  - `healthScore` (Integer, 0-100 composite)
  - `totalPipeline`, `weightedPipeline` (Decimal)
  - `openOpportunityCount` (Integer)
  - `closedWonCount`, `closedWonAmount` (Integer, Decimal)
  - `winRate` (Integer, percentage)
  - `recentActivityCount` (Integer, last 30 days)
  - `nextClosingDeal` (String), `nextCloseDate` (Date)
  - `atRiskDeals` (List of DealSnapshot with name, amount, stage, closeDate, confidence, isOverdue)
  - `stageDistribution` (List of StageGroup with stageName, totalAmount, count, percentage)
- Health score computed from 4 factors (25 pts each): pipeline health, win rate, engagement, deal quality

### Design Standards
- No `lightning-card` wrapper -- use custom container with border-radius, subtle gradient hero, clean section dividers
- SLDS color tokens: #0176d3 (brand), #04844b (success), #fe9339 (warning), #ea001e (error), #706e6b (muted text)
- Progress bars use `conic-gradient` for ring, `linear width` for bars, with 0.6s ease transitions
- Badge variants via `--slds-c-badge-color-background` styling hooks
- Typography: 0.65-0.75rem uppercase labels, 1.375rem metric numbers, 800 weight for emphasis

### Why This Component Matters (Demo Talking Points)
- **Replaces 3 report tabs** with a single at-a-glance view
- **Computed health score** is something you can't do with standard reports
- **Smart insights** mimic AI-driven recommendations
- **At-risk deal callouts** surface problems that would otherwise be buried in pipeline views
- **Stage distribution** gives instant pipeline shape without running a report
- **Proves ROI** of custom LWC + Apex investment over standard page layout fields

6. **Automated Deployment**: Once planning is approved, execute:
   - Deploy all metadata to the april golden org (custom fields, permission set, LWC, Apex)
   - Add custom fields to the Account page layout **in their own "Account Health" section** (not mixed in with standard Account Information fields)
   - Assign the permission set to the demo user
   - Only manual step remaining: drag the LWC component onto the Account record page in Lightning App Builder

## Important Constraints

- **Do NOT use any custom skills** (no `/se-pov`, `/demo-build`, `/sf-metadata`, etc.)
- Use only built-in Claude Code tools
- Keep deliverables concise and demo-friendly
- Every decision should reference the discovery notes
