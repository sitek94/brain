---
title: Unidirectional and bidirectional data flow
tags: react, angular, vue, data-flow
createdAt: 24/10/2022
---

# Unidirectional and bidirectional data flow

## Unidirectional (one-way) data flow

- You pass data down from parent to child component
- You can't update parent's state from a child
  - Instead, you handle events dispatched by a child to update the state
- `Parent -> Child`

## Bidirectional (two-way) data flow

- Parent and child components share the data
  - Change to model updates the view
  - Change to view updates the model
- `Parent <-> Child`

## Resources

- [Thinking in React](https://beta.reactjs.org/learn/thinking-in-react)
- [Angular: Two-way binding](https://angular.io/guide/two-way-binding#two-way-binding)
- [Vue.js: State Management](https://vuejs.org/guide/scaling-up/state-management.html#what-is-state-management)
- [Vue.js: One-Way Data Flow](https://vuejs.org/guide/components/props.html#one-way-data-flow)
- [Vue.js: v-model (two-way binding)](https://vuejs.org/api/built-in-directives.html#v-model)
- [StackOverflow: difference between one-way and two-way data binding](https://stackoverflow.com/questions/34519889/can-anyone-explain-the-difference-between-reacts-one-way-data-binding-and-angula)
