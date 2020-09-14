# Setting up a new project

As React is a library and not a framework setting up a new project involves making choices regarding the different aspects (routing, form handling, form validation, etc...) of your app. 

React favors composition of libraries which is very powerfull as it gives you the ability to choose the best tool for the job. One problem with it is that it also can bring incertainty in regards of what tool to use. This is our attempt at preventing this by defining a recommended set of libraries.

What follows are recommendations based on experiences and established best practices at the time of writing.

*The idea is that those recommendations SHOULD be followed unless you have a specific use case where diverging has a real advantage*. 

This documentation MUST be updated if we recognize that those recommendations are obsolete or deprecated.

## Create the project

To setup a new project we recomend you follow current best practices by using Facebook's `create-react-app`

To get started, execute 

  ```
  $ npx create-react-app lxo-app-name --template typescript
  ```

this will run a while and create a new folder named _lxo-app-name_ with an already scaffolded react app in it.

The npm commands described above in the "Available Scripts" section will automatically be setup to your availability.

Check out the Docs for more infos on how to use Create React App: https://create-react-app.dev/docs/getting-started

You might also want to check out alternatives to using `create-react-app` if you want a more flexible build eg. if you're building a library: https://reactjs.org/docs/create-a-new-react-app.html

## Adding a router

We recommend using `react-router` as routing library. To use it, save the dependency to your `package.json`:

  ```
  $ npm install --save react-router-dom
  ```

In order to use it, have a look at the examples in this example project or check out the official documentation: https://reactrouter.com/web/guides/quick-start

## Adding form handling

We recommend using `react-hook-form` as form handling library. To use it, save the dependency to your `package.json`:

  ```
  $ npm install --save react-hook-form
  ```

In order to use it, have a look at the examples in this example project or check out the official documentation: https://react-hook-form.com/get-started

Alternatives: 

 - No lib when writing very simple forms OR when writing very complex and specialized / sophisticated forms
 - Formik: https://formik.org/docs/overview

## Adding form validation

We recommend using `yup` as form handling library. To use it, save the dependency to your `package.json`:

  ```
  $ npm install --save yup
  $ npm install --save-dev @types/yup # isntall typescript type definitions
  ```

In order to use it, have a look at the examples in this example project or check out the official documentation: https://github.com/jquense/yup

## Adding i18n

We recommend using `react-i18next` as internalization library. To use it, save the dependency to your `package.json`:

  ```
  $ npm install --save react-i18next
  ```

In order to use it, check out the official documentation: https://react.i18next.com/latest/

## Adding http request handling

We recommend using `axios` as internalization library. To use it, save the dependency to your `package.json`:

  ```
  $ npm install --save axios
  ```

In order to use it, have a look at the examples in this example project or check out the official documentation: https://github.com/axios/axios

Alternatives:

 - Native browser `fetch` https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch

Hooks:

- React Async Hooks: https://github.com/slorber/react-async-hook

## Adding date handling

We recommend using `date-fns` as date handling library. To use it, save the dependency to your `package.json`:

  ```
  $ npm install --save date-fns
  ```

In order to use it, have a look at the examples in this example project or check out the official documentation: https://date-fns.org/

## Adding state management

> Warning: you might not need a state management library. Make sure that hooks and context API are not enough to handle your use case.

We recommend using `redux` with `redux-toolkit` as state management library. To use it, save the dependency to your `package.json`:

  ```
  $ npm install --save @reduxjs/toolkit
  ```

In order to use it, have a look at the examples in this example project or check out the official documentation: https://redux-toolkit.js.org/introduction/quick-start

## Adding tests

We recommend using `react-testing-library` as testing library.

The react resting library is included in `create-react-app` scaffolded apps but if you need to add it to an existing project just execute:

  ```
  $ npm install --save @testing-library/react
  ```

In order to use it, have a look at the examples in this example project or check out the official documentation: https://testing-library.com/docs/react-testing-library/intro
