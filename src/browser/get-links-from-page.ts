let linksElements = [...document.querySelectorAll<HTMLAnchorElement>('.company-item__title a')];
let links = linksElements.map(getEnterpriseID);
console.log(links);

function getEnterpriseID(element: HTMLAnchorElement): string {
  return element.href.substring(29)
}
