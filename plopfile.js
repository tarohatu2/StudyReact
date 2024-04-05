const templatePrefix = "plop-templates";
export default function (plop) {
  // create your generators here
  plop.setGenerator("component", {
    description: "create new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.jsx",
        templateFile: templatePrefix + "/components/Component.jsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.jsx",
        templateFile: templatePrefix + "/components/index.jsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.module.css",
        templateFile: templatePrefix + "/components/Component.module.css.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.stories.js",
        templateFile: templatePrefix + "/components/Component.stories.js.hbs",
      },
    ],
  });

  plop.setGenerator("page", {
    description: "create new page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "page name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.jsx",
        templateFile: templatePrefix + "/components/Component.jsx.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/index.jsx",
        templateFile: templatePrefix + "/components/index.jsx.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.module.css",
        templateFile: templatePrefix + "/components/Component.module.css.hbs",
      },
    ],
  });

  plop.setGenerator("addRecoilState", {
    description: "add recoilState files",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "state name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/recoil/{{lowerCase name}}/index.js",
        templateFile: templatePrefix + "/recoil/index.js.hbs",
      },
      {
        type: "add",
        path: "src/recoil/{{lowerCase name}}/{{pascalCase name}}State.js",
        templateFile: templatePrefix + "/recoil/state.js.hbs",
      },
      {
        type: "add",
        path: "src/recoil/{{lowerCase name}}/{{pascalCase name}}StateModule.js",
        templateFile: templatePrefix + "/recoil/stateModule.js.hbs",
      },
      {
        type: "append",
        path: "src/recoil/index.js",
        template: "export * from './{{lowerCase name}}';",
      },
    ],
  });
}
