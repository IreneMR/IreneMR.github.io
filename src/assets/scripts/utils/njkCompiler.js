export default function HbsCompiler(sourceElem, data) {
  const template = document.getElementById(sourceElem);
  const templateContent = template.innerHTML;
  const compiledTemplate = nunjucks.compile(templateContent);
  const renderedTemplate = compiledTemplate.render(data);

  document.querySelector(`[data-${sourceElem}]`).innerHTML = renderedTemplate;
  template.remove();
}
