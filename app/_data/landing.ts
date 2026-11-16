export const landingCopy = {
  hero: {
    eyebrow: "Early access",
    titlePrefix: "An",
    titleAccent: "outpost",
    titleSuffix: "for whatever",
    titleSecondLine: "you're building",
    subtitle:
      "A shared workspace to plan, create, and build together, with an AI collaborator alongside.",
    primaryAction: "start building free",
    secondaryAction: "see how it works",
    videoLabel: "Preview of the Outpost workspace",
  },
  mockups: {
    canvas: {
      fileName: "checkout-flow.canvas",
      surfaceLabel: "Canvas",
      nodeTitles: ["Cart created", "Validate order", "Charge payment", "Notify customer"],
      agentNote: "Agent added a step",
      toolSelect: "Select",
    },
    docs: {
      fileName: "checkout-spec.doc",
      surfaceLabel: "Docs",
      breadcrumb: "Product spec / Checkout",
      title: "Checkout flow",
      sectionTitle: "Order validation",
      requirementsTitle: "Requirements",
      requirements: [
        "Validate inventory before payment",
        "Keep the customer informed",
      ],
    },
    teamBoard: {
      fileName: "Product workspace",
      surfaceLabel: "Team Board",
      projectTitle: "Product launch",
      cursorLabel: "Maya is here",
      columns: [
        { title: "Up next", count: "03", cards: ["Invite flow", "Audit events"] },
        { title: "In progress", count: "02", cards: ["Checkout API", "Empty states"] },
        { title: "Done", count: "04", cards: ["Cart schema", "Wireframes"] },
      ],
    },
  },
  audiences: [
    "Product teams",
    "Founders",
    "Solo builders",
    "Agencies",
    "Consultants",
  ],
  audienceLabel: "Who Outpost is for",
  features: {
    eyebrow: "One connected workspace",
    title: "One agent, one workspace, your whole team",
    items: [
      {
        id: "canvas",
        title: "Canvas",
        description:
          "An infinite whiteboard where the agent draws flowcharts, ERDs, architecture diagrams, and org charts shape by shape, then edits them in place when you ask.",
        bullets: [
          "Build diagrams one editable shape at a time",
          "Ask for changes right on the canvas",
          "Map systems, data, teams, and ideas",
        ],
      },
      {
        id: "docs",
        title: "Docs",
        description:
          "A block editor where the agent turns a diagram into a written spec, and rewrites or summarizes sections on command.",
        bullets: [
          "Turn canvas work into a clear written spec",
          "Rewrite or summarize any section on command",
          "Keep ideas and documentation together",
        ],
      },
      {
        id: "team-board",
        title: "Team Board",
        description:
          "A kanban board of every workspace in your org, with live cursors so teammates can jump in together.",
        bullets: [
          "See work across every workspace in your org",
          "Follow teammates with live cursors",
          "Jump into a task and move it forward together",
        ],
      },
    ],
  },
  howItWorks: {
    eyebrow: "A clear path from idea to done",
    title: "How it works",
    steps: [
      {
        title: "Describe it",
        description: "Start with a goal, a rough idea, or a prompt in plain language.",
      },
      {
        title: "Watch the agent draw",
        description: "See your workspace take shape live as the agent builds diagrams and docs with you.",
      },
      {
        title: "Keep iterating together",
        description: "Ask for edits, bring in your team, and move from a first sketch to a finished spec.",
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "A plan for the way you build",
    placeholder: "Pricing details coming soon",
    description: "We’re shaping early access plans now. Join the list and we’ll keep you posted.",
    action: "get early access",
  },
  closingCta: {
    eyebrow: "Your next idea starts here",
    title: "Make room for what you’re building.",
    description: "Bring your team, your ideas, and your next big question to Outpost.",
    action: "start building free",
    mascotAlt: "Outpost mascot",
  },
  footer: {
    madeWith: "Made with",
    by: "by coder07-developer",
    heartLabel: "love",
  },
} as const;
