export default function generateImportText(name, folderName) {
  return `### Import
\`\`\`js
  import ${name} from '@govuk-frederic/${folderName}';
\`\`\``;
}
