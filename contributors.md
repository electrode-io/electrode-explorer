Developer's Guide
=================

# Philosophy

The purpose of this library is to provide a set of React components to simplify development on top of the Atlas CSS framework. This includes wrapping all of the controls, as well as responsive helpers, and form validation. The guiding philosophy is; *We write more code so that you write less code*.

# Good practices

## Read The Style Guide

We have a React style guide (https://gecgithub01.walmart.com/react/react-style-guide), you should read that and follow it.

## Extend Versus Create

Our preference is that we extend existing components rather than create new ones. We have a lot of components. Look around before you add a new one. But that being said, the style guide is large.

## Nested Components

Sometimes we have components like <Accordion> or <SubNav> which have dedicated child items like <Accordion.Item> and <SubNav.Item> accordingly. These are defined within the same file so that it's easy for a customer to include and use them. Follow the patterns defined with <Accordion> and <SubNav> if you run into this situation.

## Size

Anything over 5 lines of HTML should be it's own component or in it's own render method. Methods on a component, for example event handlers or state setters should be 1-5 lines or broken into smaller methods.

## Props and State

We use properties for static things like color, options, and so on. We use state for transient elements, selected, clicked and so on. Properties should always be listed in the `propTypes` and have the appropriate React types as well as be marked as required where appropriate.

`props` and exposed methods are the external API of the component, it's how customers importing the component will interact with it. `state` is anything that can be encapsulated by the component and never needs exposing.

All components should implement a `visible` property. Components should implement `disabled` when appropriate.

Classnames should always be supported as additive. So if the component user specifies `my-widget-class` as a className property it should be appended to the resulting classes in the html. For example; `widget-class active my-widget-class`. We use the `joinClasses` helper for this purpose.

## Events

For event handlers we use `onSomething` for example `onClick`.

## Managing The State

Interactive components should manage their own state. For example, checkboxes should check and uncheck on their own without requiring the parent component to do that work.

## Analytics

All components should implement the Analytics mixin where appropriate to publish changes in their state.

## Demo inclusion

New components should be included in the `demo` system so that customers can see them and they will be included in the `showcase` project. And they should have variants that demonstrate the anticipated use cases.

# Bad practices

## Additional dependencies

We believe at the current time we have the dependencies we need for the library. In fact, we want less. New dependencies will be heavily scrutinized in the PR review. If you do bring in a component it should be a pure React component.

## jQuery and Underscore

We currently have jQuery and Underscore dependencies but we want to remove these and not introduce any new dependencies on these libraries. No new components should use jQuery or Underscore.

## plugins

Plugins are deprecated and will be removed. We should not be adding more items to it.

# Before You PR!

Before you PR:

```
$ npm test
```

Make sure your code *has tests*, passes those tests, and that all of the other components pass their tests, and that the lint runs completely clean. It is acceptable to disable `new-cap`, `no-unused-vars`, `guard-for-in` and `no-unused-expressions` if required. But it not acceptable to disable eslint entirely. We have done that on some of the plugins, both those are deprecated and will be removed.

Functional coverage must be above 90% overall.
