Repository to demonstrate the error of importing a type from an external package when using the babel-plugin-transform-typescript-metadata plugin

---
#### Installing

```bash
npm i
npm link ./test-package
```

#### Run

```bash
npm start
```

---

#### Error
```bash
Module not found: Error: Can't resolve 'test-package/file-with-declaration' in ...
```
