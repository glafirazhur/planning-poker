export const copyLinkAddress = (e) => {
  const currentLink = e.target;
  const textArea = document.createElement('textarea');
  const copiedElem = document.createElement('span');

  e.preventDefault();

  textArea.innerHTML = currentLink.href;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);

  currentLink.appendChild(copiedElem);
  copiedElem.classList.add('copied-elem');
  copiedElem.innerHTML = 'Copied';

  setTimeout(() => {
    currentLink.removeChild(copiedElem);
  }, 2000);
};
