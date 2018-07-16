import Container from './Container';
import Context from './Context';
import Section from './Section';

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <TOC.Container>
 *   <TOC.Index>
 *     {
 *       ({ contents }) =>
 *         <ul>
 *           {
 *             contents.map(
 *               ({ id, title }) => <li key={id}><a href={`#${id}`}>{title}</a>
 *             )
 *           }
 *         </ul>
 *     }
 *   </TOC.Index>
 *   <TOC.Section id="first" title="First">
 *     <h2>First</h2>
 *     <p>
 *       Section content goes here
 *     </p>
 *   </TOC.Section>
 *   <TOC.Section id="second" title="Second">
 *     <h2>Second</h2>
 *     <p>
 *       Section content goes here
 *     </p>
 *   </TOC.Section>
 * </TOC.Container>
 * ```
 *
 */

export default {
  Container,
  Context,
  Index: Context.Consumer,
  Section,
};
