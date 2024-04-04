export default function (plop) {
    // create your generators here
    plop.setGenerator('basics', {
        description: 'this is a skeleton plopfile',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'component name please'
        }],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.jsx',
                templateFile: 'plop-templates/components/Component.jsx.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/index.jsx',
                templateFile: 'plop-templates/components/index.jsx.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.module.css',
                templateFile: 'plop-templates/components/Component.module.css.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.js',
                templateFile: 'plop-templates/components/Component.stories.js.hbs'
            },
        ]
    });
};