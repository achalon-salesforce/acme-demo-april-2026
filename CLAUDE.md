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

## Important Constraints

- **Do NOT use any custom skills** (no `/se-pov`, `/demo-build`, `/sf-metadata`, etc.)
- Use only built-in Claude Code tools
- Keep deliverables concise and demo-friendly
- Every decision should reference the discovery notes
