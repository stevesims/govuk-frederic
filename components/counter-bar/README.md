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
<CounterBar
 listTitle="All counters"
 name="name"
 counters={[
   { id: 'abc', name: 'Counter 1', score: 0 },
   { id: 'def', name: 'Counter 2', score: 2 },
   { id: 'ghi', name: 'Counter 3', score: 2 },
   { id: 'jkl', name: 'Counter 4', score: 9 },
   { id: 'mno', name: 'Counter 5', score: 2 },
   { id: 'pqr', name: 'Counter 6', score: 1 },
   { id: 'stu', name: 'Counter 7', score: 0 },
 ]}
/>
```
Active counter
```jsx
<CounterBar
 listTitle="All counters"
 name="name"
 counters={[
   { id: 'abc', name: 'Counter 1', score: 0 },
   { active: true, id: 'def', name: 'Counter 2', score: 2 },
   { id: 'ghi', name: 'Counter 3', score: 2 },
 ]}
/>
```
Active title
```jsx
<CounterBar
 activeTitle
 listTitle="All counters"
 name="name"
 counters={[
   { id: 'abc', name: 'Counter 1', score: 0 },
   { id: 'def', name: 'Counter 2', score: 2 },
   { id: 'ghi', name: 'Counter 3', score: 0 },
 ]}
/>
```
Active counter and title on click
```jsx
<CounterBar
 listTitle="All counters"
 activeTitle
 name="name"
 counters={[
   { id: 'abc', name: 'Counter 1', score: 0 },
   { id: 'def', name: 'Counter 2', score: 2 },
   { id: 'ghi', name: 'Counter 3', score: 2 },
   { id: 'jkl', name: 'Counter 4', score: 9 },
   { id: 'mno', name: 'Counter 5', score: 2 },
   { id: 'pqr', name: 'Counter 6', score: 1 },
   { id: 'stu', name: 'Counter 7' },
 ]}
 // eslint-disable-next-line no-alert
 onSelect={ (id) => alert(`Counter with id: ${id} selected.`) }
/>
```
Clickable counters
```jsx
<CounterBar
 listTitle="All counters"
 name="name"
 counters={[
   { id: 'abc', name: 'Counter 1', score: 0 },
   { id: 'def', name: 'Counter 2', score: 2 },
   { id: 'ghi', name: 'Counter 3', score: 2 },
   { id: 'jkl', name: 'Counter 4', score: 9 },
   { id: 'mno', name: 'Counter 5', score: 2 },
   { id: 'pqr', name: 'Counter 6', score: 1 },
   { id: 'stu', name: 'Counter 7' },
 ]}
 // eslint-disable-next-line no-alert
 onSelect={ (id) => alert(`Counter with id: ${id} selected.`) }
/>
```

Padded container
```jsx 
<CounterBar
 listTitle="All counters"
 name="name"
 counters={[
   { id: 'abc', name: 'Counter 1', score: 0 },
   { id: 'def', name: 'Counter 2', score: 2 },
   { id: 'ghi', name: 'Counter 3', score: 2 },
   { id: 'jkl', name: 'Counter 4', score: 0 },
   { id: 'mno', name: 'Counter 5', score: 2 },
   { id: 'pqr', name: 'Counter 6', score: 0 },
   { id: 'stu', name: 'Counter 7', score: 2 },
 ]}
/>
```

Zero/no scores
```jsx 
<CounterBar
 listTitle="All counters"
 name="name"
 counters={[
   { id: 'abc', name: 'Counter 1', score: 0 },
   { id: 'def', name: 'Counter 2' },
   { id: 'ghi', name: 'Counter 3', score: 0 },
 ]}
/>
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `activeTitle` |  | `````` | bool | 
 `counters` |  | `````` | arrayOf[object Object] | 
 `listTitle` |  | `````` | any | 
 `name` | true | `````` | string | 
 `onSelect` |  | ```() => {}``` | func | 


