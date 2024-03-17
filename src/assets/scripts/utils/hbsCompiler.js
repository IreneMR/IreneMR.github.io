export default function HbsCompiler(sourceElem, data) {
    const source = document.getElementById(sourceElem).innerHTML;
    const template = Handlebars.compile(source);

    document.querySelector(`[data-${sourceElem}]`).innerHTML = template(data);
}