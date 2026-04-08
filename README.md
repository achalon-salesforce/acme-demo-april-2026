# Acme Demo - Claude Code Salesforce DX Project

This repository demonstrates Claude Code capabilities for Salesforce development workflows. It’s designed for SE teams to practice and showcase AI-powered Salesforce development.

## Purpose

This is a demo environment for showcasing how Claude Code can:
- Generate Salesforce metadata (custom objects, fields, permission sets)
- Build Lightning Web Components
- Create structured implementation plans
- Follow discovery-to-deployment workflows

## Quick Start

### Prerequisites
- Salesforce CLI installed
- Authenticated to a Salesforce org (dev org, scratch org, or sandbox)
- Claude Code installed

### Demo Workflow

Follow the instructions in [CLAUDE.md](./CLAUDE.md) for the standard demo flow:
1. Review discovery notes in `docs/`
2. Generate a Point of View document
3. Create an implementation plan
4. Build Salesforce components based on requirements

## Project Structure

```
acme-demo-april-2026/
├── force-app/main/default/    # Salesforce metadata
│   ├── lwc/                    # Lightning Web Components
│   └── aura/                   # Aura components
├── config/                     # Scratch org definitions
├── docs/                       # Discovery notes and documentation
├── CLAUDE.md                   # Demo workflow instructions
└── README.md                   # This file
```

## Discovery Scenario

This demo uses a fictional customer scenario: **Acme Corporation**, a manufacturing company seeking Sales Cloud improvements. See [docs/discovery-notes.md](./docs/discovery-notes.md) for the full discovery context.

## Contributing

This is a demo project. When making changes:
1. Keep examples simple and demo-friendly
2. All implementations should trace back to discovery requirements
3. Follow Salesforce best practices

## Resources

- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Lightning Web Components Dev Guide](https://developer.salesforce.com/docs/platform/lwc/overview)
- [Claude Code Documentation](https://claude.com/claude-code)
