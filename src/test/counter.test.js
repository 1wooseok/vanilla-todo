/**
 * @jest-environment jsdom
 */

import counterView from "../view/counter.js";

let targetElement;

describe('counterView Component', () => {
  beforeEach(() => {
    targetElement = document.createElement('div');
  })

  test('Number of not completed Todo', () => {
    const newCounter = counterView(targetElement, {
      todos: [
        { text: 1, completed: true },
        { text: 2, completed: false },
        { text: 3, completed: false },
      ]
    })
    expect(newCounter.textContent).toBe('2 Items left');
  })
})
// describe('counterView', () => {
//   beforeEach(() => {
//     targetElement = document.createElement('div');
//   })

//   test('should put the number of not completed todo in a new DOM elements', () => {
//     const newCouter = counterView(targetElement, {
//       todos: [
//         {
//           text: 'first',
//           completed: true,
//         },
//         {
//           text: 'second',
//           completed: false,
//         },
//         {
//           text: 'third',
//           completed: false,
//         },
//       ]
//     })
//     expect(newCounter.textContent).toBe('2 Items left')

//   })

//   test('should consider the singular form when only one item is left', () => {
//     const newCounter = counterView(targetElement, {
//       todos: [
//         {
//           text: 'First',
//           completed: true
//         },
//         {
//           text: 'Third',
//           completed: false
//         }
//       ]
//     })
//     expect(newCounter.textContent).toBe('1 Item left')
//   })