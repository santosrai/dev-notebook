---
title: 'Introduction on code spliting'
metaTitle: ''
metaDescription: ''
---
What is bundling?
Bundling is defined as process of following imported files and merfing them into a single file i.e bundle.



Code Splitting
Bundling is great, but as your app grows, your bundle will grow too. 
To avoid winding up with a large bundle, it's good to get ahead of the problem and start "splitting " your bundle. Code-splitting is a feature supported by bundlers like webpack,Rollup and Briwseriffy which can create multiple bundles that can be dynamicaly loaded at runtime.
Code-splitting your app can help you "lazy-load" just the things that are currently needed by the user, which can dramatically imporve the performance of your app. While you haven't reduced the overall amount of code  in your app, you've avoidede loading code that user may never need, and reduced the amount of code needed during the inital load.
import()

The best way to introduce code-splitting into your app is through the dynamic import() syntax.

Before:

```jsx
import { add } from './math';

console.log(add(16, 26));
```

After:
```jsx
import("./math").then(math => {
  console.log(math.add(16, 26));
});
```

When Webpack comes across this syntax, it automatically start code-splitting your app. If your're using Create React App, this is already configured for you and you can start using it immediately. It's also supporterd out of the box in Next.js

If you're setting up Webpack yourself, your'll probably want to read Webpack's guide on code splitting. Your Webpack config should look vaguely like this.




