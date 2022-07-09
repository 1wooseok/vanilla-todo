/**
 * @jest-environment jsdom
 */

import filterView from '../view/filter.js';

let targetElement
const TEMPLATE = `<ul class="filters">
    <li>
        <a href="#/">All</a>
    </li>
    <li>
        <a href="#/active">Active</a>
    </li>
    <li>
        <a href="#/completed">Completed</a>
    </li>
</ul>`

describe('filtersVIEW', () => {
  beforeEach(() => {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = TEMPLATE;
    targetElement = tempElement.childNodes[0];
  })

  test('what else', () => {
    const newCounter = filterView(targetElement, {
      currentFilter: 'Active',
    });

    const selectedItem = newCounter.querySelector("li a.selected");

    expect(selectedItem.textContent).toBe('Active');
  })
})