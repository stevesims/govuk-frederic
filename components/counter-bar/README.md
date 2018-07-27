CounterBar
==========

### Import
```js
  import CounterBar from '@govuk-frederic/counter-bar';
```
<!-- STORY -->

### Usage

Simple
```jsx
<CounterBar>
  <CounterBar.Total score={15}>All counters</CounterBar.Total>
  <CounterBar.Counters>
    <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
    <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
    <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
    <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
    <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
  </CounterBar.Counters>
</CounterBar>
```
Active counter
```jsx
<CounterBar>
  <CounterBar.Total score={15}>All counters</CounterBar.Total>
  <CounterBar.Counters>
    <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
    <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
    <CounterBar.Counter score={3} active>Counter 3</CounterBar.Counter>
    <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
    <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
  </CounterBar.Counters>
</CounterBar>
```
Active total
```jsx
<CounterBar>
  <CounterBar.Total score={15} active>All counters</CounterBar.Total>
  <CounterBar.Counters>
    <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
    <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
    <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
    <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
    <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
  </CounterBar.Counters>
</CounterBar>
```
Empty counters
```jsx
<CounterBar>
  <CounterBar.Total score={7}>All counters</CounterBar.Total>
  <CounterBar.Counters>
    <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
    <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
    <CounterBar.Counter />
    <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
    <CounterBar.Counter />
  </CounterBar.Counters>
</CounterBar>
```
CounterBar with padded counters container
```jsx
<div style={{padding: '4px'}}>
  <CounterBar>
    <CounterBar.Total score={15}>All counters</CounterBar.Total>
    <CounterBar.Counters>
      <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
      <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
      <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
      <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
      <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
    </CounterBar.Counters>
  </CounterBar>
</div>
```
Zero/no scores
```jsx
<CounterBar>
  <CounterBar.Total score={9}>All counters</CounterBar.Total>
  <CounterBar.Counters>
    <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
    <CounterBar.Counter score={0}>Counter 2</CounterBar.Counter>
    <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
    <CounterBar.Counter>Counter 4</CounterBar.Counter>
    <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
  </CounterBar.Counters>
</CounterBar>
```
Custom colours on total
```jsx
<CounterBar>
  <CounterBar.Total score={15} scoreColor="yellow" scoreBackgroundColor="pink">All counters</CounterBar.Total>
  <CounterBar.Counters>
    <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
    <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
    <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
    <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
    <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
  </CounterBar.Counters>
</CounterBar>
```
Custom colours on counters
```jsx
<CounterBar>
  <CounterBar.Total score={15}>All counters</CounterBar.Total>
  <CounterBar.Counters>
    <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
    <CounterBar.Counter score={2} scoreColor="orange" scoreBackgroundColor="blue">Counter 2</CounterBar.Counter>
    <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
    <CounterBar.Counter score={4} scoreColor="yellow" scoreBackgroundColor="purple">Counter 4</CounterBar.Counter>
    <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
  </CounterBar.Counters>
</CounterBar>
```
Use any HTML element string for the total
```jsx
<CounterBar>
  <CounterBar.Total score={15} component="aside">All counters</CounterBar.Total>
  <CounterBar.Counters>
    <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
    <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
    <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
    <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
    <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
  </CounterBar.Counters>
</CounterBar>
```
Use a Link component for the total
```jsx
import { HashRouter, Link } from 'react-router-dom';

<HashRouter>
  <CounterBar>
    <CounterBar.Total score={15} component={Link} to="/courses?sort=name'/">All counters</CounterBar.Total>
    <CounterBar.Counters>
      <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
      <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
      <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
      <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
      <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
    </CounterBar.Counters>
  </CounterBar>
</HashRouter>
```
Use any HTML element string for a counter
```jsx
<CounterBar>
  <CounterBar.Total score={15}>All counters</CounterBar.Total>
  <CounterBar.Counters>
    <CounterBar.Counter score={1} component="nav">Counter 1</CounterBar.Counter>
    <CounterBar.Counter score={2} component="aside">Counter 2</CounterBar.Counter>
    <CounterBar.Counter score={3} component="div">Counter 3</CounterBar.Counter>
    <CounterBar.Counter score={4} component="section">Counter 4</CounterBar.Counter>
    <CounterBar.Counter score={5} component="span">Counter 5</CounterBar.Counter>
  </CounterBar.Counters>
</CounterBar>
```
Use a Link component for a counter
```jsx
import { HashRouter, Link } from 'react-router-dom';

<HashRouter>
  <CounterBar>
    <CounterBar.Total score={15}>All counters</CounterBar.Total>
    <CounterBar.Counters>
      <CounterBar.Counter score={1} component={Link} to="/courses/1/">Counter 1</CounterBar.Counter>
      <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
      <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
      <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
      <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
    </CounterBar.Counters>
  </CounterBar>
</HashRouter>
```
Use an active Link component for a counter
```jsx
import { HashRouter, Link } from 'react-router-dom';

<HashRouter>
  <CounterBar>
    <CounterBar.Total score={15}>All counters</CounterBar.Total>
    <CounterBar.Counters>
      <CounterBar.Counter score={1} component={Link} to="/courses/1/" active>Counter *1</CounterBar.Counter>
      <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
      <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
      <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
      <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
    </CounterBar.Counters>
  </CounterBar>
</HashRouter>

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 


