import { handleCopyClipboard } from "../../lib/clipboard";
import { SOCIAL_LINKS } from "../../lib/socials";

let mailIcon = document.getElementById("mail-icon");
if (mailIcon != null) {
  mailIcon.addEventListener("click", () => {
    handleCopyClipboard(SOCIAL_LINKS["email"], mailIcon.parentElement as HTMLElement);
  });
}
