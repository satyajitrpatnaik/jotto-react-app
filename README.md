# jotto-react-app
This react app named Jotto App is a code along with Bonnie Schulkin's Udemy tutorial for React Unit Testing using Jest Enzyme. This repository will have separate branches for redux and context API to manage state management in two different ways. This repository is purely for educational purposes.

# Removing data-test attribute in production build
Use babel-plugin-react-remove-properties

```
npm install --save-dev babel-plugin-react-remove-properties
npm run eject

```

In `package.json`,

```
{
  babel: {
    "env": {
      "production": {
        "plugins": [
          ["react-remove-properties", {"properties": ["data-test", "data-foo", /my-suffix-expression$/]}]
        ]
      }
    }
  }
}
```

To check if `data-test` attributes are removed from production code -
```
npm run build
npm install -g serve
serve -s build
```
Navigate on your internet browser to `http://localhost:5000`.
