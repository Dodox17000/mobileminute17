module.exports = {
  bumpFiles: [
    {
      filename: 'package.json',
    },
    {
      filename: 'package-lock.json',
    },
    {
      filename: 'src/utils/Version.js',
      updater: {
        readVersion: (contents) => contents.match(/!([^!]+)!/)[1],
        writeVersion: (contents, version) => contents.replace(/![^!]+!/, `!${version}!`)
      },
    }
  ],
  types: [
    {
      type: "feat",
      section: "Fonctionnalité"
    },
    {
      type: "fix",
      section: "Correction de bug"
    },
    {
      type: "chore",
      hidden: true
    },
    {
      type: "docs",
      section: "Documentation"
    },
    {
      type: "style",
      section: "Mise à jour visuelle"
    },
    {
      type: "refactor",
      section: "Refactorisation"
    },
    {
      type: "perf",
      section: "Performance"
    },
    {
      type: "progress",
      section: "Progression"
    },
    {
      type: "admin",
      section: "Administration"
    },
    {
      type: "test",
      section: "Test"
    }
  ]
};
