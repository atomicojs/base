let { prompts } = require("tfolder-cli/utils");

const questions = [
  {
    type: "text",
    name: "name",
    message: "Component Name?",
    initial: "custom-element",
  },
  {
    type: "select",
    name: "type",
    message: "What is the syntax for your component?",
    choices: [
      {
        title: "Jsx",
        description: "Jsx for virtual-dom",
        value: "jsx",
      },
      {
        title: "Js",
        description: "Template-string for virtual-dom",
        value: "js",
      },
      {
        title: "Tsx",
        description: "Jsx for virtual-dom + type support",
        value: "tsx",
      },
      {
        title: "Ts",
        description: "Template-string for virtual-dom + type support",
        value: "ts",
      },
    ],
    initial: 0,
  },
];

module.exports = async function () {
  let data = await prompts(questions);
  data.name = data.name.trim().replace(/ +/g, "-");
  data.nameCamelCase = ("-" + data.name).replace(/-(\w)/g, (all, letter) =>
    letter.toUpperCase()
  );
  data.dir = data.type;
  return data;
};
