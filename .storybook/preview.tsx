import { i18n } from "./i18next";

export const parameters = {
  i18n,
  locale: "en",
  locales: {
    en: "English",
    fr: "Français",
  },
};

export const decorators = [
  (Story) => {
    return (
      <div>
        <Story />
      </div>
    );
  },
];
