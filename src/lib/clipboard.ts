export function handleCopyClipboard(text: string, target: HTMLElement) {
  navigator.clipboard.writeText(text);
  createPopup('Copiado al portapapeles!' , target);
  cleanPopUp(document.getElementById('popup') as HTMLElement);
}

function createPopup(text: string, target: HTMLElement, id: string = 'popup') {
  const popup = document.createElement('div');
  popup.id = "popup";
  popup.classList.add('copy_popup');
  const div = document.createElement('div');
  const p = document.createElement('p');
  p.textContent = text;
  div.appendChild(p);
  popup.appendChild(div);
  target.appendChild(popup);
}

function cleanPopUp(popup: HTMLElement) {
  setTimeout(() => {
    popup.remove();
  }, 1200);
}