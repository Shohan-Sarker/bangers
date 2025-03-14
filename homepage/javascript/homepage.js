document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('text-box');
  const searchButton = document.querySelector('.search-btn');

  function processSearchQuery() {
    const rawSearchTerm = searchInput.value.trim();
    
    if (!rawSearchTerm) return;

    // Step 1: Encode existing plus signs first
    const plusCharactersEncoded = rawSearchTerm.replace(/\+/g, '%2B');
    
    // Step 2: Convert all whitespace to plus signs
    const spacesConvertedToPlus = plusCharactersEncoded.replace(/\s/g, '+');
    
    const encodedSearchQuery = spacesConvertedToPlus;
    const searchUrl = `https://bangers.shohansarker.com?q=${encodedSearchQuery}`;
    
    window.location.href = searchUrl;
  }

  searchButton.addEventListener('click', processSearchQuery);
  searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      processSearchQuery();
    }
  });
});


// theme button. From https://dev.to/whitep4nth3r/the-best-lightdark-mode-theme-toggle-in-javascript-368f 
// Thanks to the author
document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    /**
     * Utility function to calculate the current theme setting.
     * Look for a local storage value.
     * Fall back to system setting.
     * Fall back to light mode.
     */
    function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
      if (localStorageTheme !== null) {
        return localStorageTheme;
      }
  
      if (systemSettingDark.matches) {
        return "dark";
      }
  
      return "light";
    }
  
    /**
     * Utility function to update the button text and aria-label.
     */
    function updateButton({ buttonEl, isDark }) {
      const newCta = isDark ? "Change to light theme" : "Change to dark theme";
      // use an aria-label if you are omitting text on the button
      // and using a sun/moon icon, for example
      buttonEl.setAttribute("aria-label", newCta);
      buttonEl.innerText = newCta;
    }
  
    /**
     * Utility function to update the theme setting on the html tag
     */
    function updateThemeOnHtmlEl({ theme }) {
      document.querySelector("html").setAttribute("data-theme", theme);
    }
  
    /**
     * 1. Grab what we need from the DOM and system settings on page load
     */
    const button = document.querySelector("[data-theme-toggle]");
    const localStorageTheme = localStorage.getItem("theme");
    const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
  
    /**
     * 2. Work out the current site settings
     */
    let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });
  
    /**
     * 3. Update the theme setting and button text according to current settings
     */
    updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
    updateThemeOnHtmlEl({ theme: currentThemeSetting });
  
    /**
     * 4. Add an event listener to toggle the theme
     */
    button.addEventListener("click", (event) => {
      const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
  
      localStorage.setItem("theme", newTheme);
      updateButton({ buttonEl: button, isDark: newTheme === "dark" });
      updateThemeOnHtmlEl({ theme: newTheme });
  
      currentThemeSetting = newTheme;
    });
  });

