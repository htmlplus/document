# Code Completion

Intelligent code completion also known as `IntelliSense` or `code hinting` is a context-aware code completion feature in some programming environments.

## VS Code

VS Code doesn't have the ability to identify `custom elements` by default. To enable this feature, follow the instructions below.

- Install the `HTMLPLUS` package.
- Create `.vscode` folder at the root of project.
- Create `settings.json` file inside the folder.
- Add the following to the file.

```js
{
  "html.customData": ["./node_modules/@htmlplus/core/json/vscode.json"]
}
```

<br />

<Alert type="warning">
  VS Code may need to be restarted for changes to take effect.
</Alert>

## Other Editors

Most popular editors support code completion without any special configuration. Otherwise [submit a feature request](https://github.com/htmlplus/core/issues/new) for your editor of choice.
