# jest-transform-stub-named

Jest doesn't handle non JavaScript assets by default.

You can use this module to avoid errors when importing non JavaScript assets.

Forked from `jest-transform-stub` the difference is that this library mocks every media file to return its filename. Makes it possible to test that the correct images are loaded for components.

## Usage

```shell
npm install --save-dev jest-transform-stub-named
```

In your Jest config, add jest-transform-stub-named to transform non JavaScript assets you want to stub:

```js
{
  "jest": {
    // ..
    "transform": {
      "^.+\\.js$": "babel-jest",
      ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub-named"
    }
  }
}
```

## FAQ

**My module isn't being transformed**

Jest doesn't apply transforms to node_modules by default. You can solve this by using `moduleNameMapper`:

```js
{
  "jest": {
    // ..
    "moduleNameMapper": {
      "^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub-named"
    }
  }
}
```
