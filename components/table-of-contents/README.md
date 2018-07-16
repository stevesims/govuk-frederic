TableOfContents
===============

### Import
```js
  import TableOfContents from '@govuk-frederic/table-of-contents';
```
<!-- STORY -->

### Usage

Simple
```jsx
<TOC.Container>
  <TOC.Index>
    {
      ({ contents }) =>
        <ul>
          {
            contents.map(
              ({ id, title }) => <li key={id}><a href={`#${id}`}>{title}</a>
            )
          }
        </ul>
    }
  </TOC.Index>
  <TOC.Section id="first" title="First">
    <h2>First</h2>
    <p>
      Section content goes here
    </p>
  </TOC.Section>
  <TOC.Section id="second" title="Second">
    <h2>Second</h2>
    <p>
      Section content goes here
    </p>
  </TOC.Section>
</TOC.Container>
```


