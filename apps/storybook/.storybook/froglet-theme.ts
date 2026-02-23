import { create } from "storybook/theming";

import onDarkLogo from "../src/assets/images/froglet-logo-on-dark.svg";

export default create({
  base: "dark",
  brandTitle: "Froglet UI",
  brandUrl: "https://froglet.io",
  brandTarget: "_self",
  brandImage: onDarkLogo,
});
