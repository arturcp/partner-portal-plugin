function updateField(element, value) {
  element.value = value;
  element.dispatchEvent(new Event("change", { bubbles: true }));
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      const firstNameInput = document.querySelector('[data-testid="input-first-name"]');
      updateField(firstNameInput, generateName());

      const lastNameInput = document.querySelector('[data-testid="input-last-name"]');
      updateField(lastNameInput, generateName());

      const emailInput = document.querySelector('[data-testid="input-email"]');
      const email = (`${firstNameInput.value}@${lastNameInput.value}.com`).toLowerCase();
      updateField(emailInput, email);


      const passwordInput = document.querySelector('[data-testid="input-password"]');
      updateField(passwordInput, email);

      const checkbox = document.querySelector('[data-testid="terms-checkbox"]')
      checkbox.checked = true;
      checkbox.dispatchEvent(new Event("click", { bubbles: true }));

      const form = document.querySelector('[data-testid="create-account-form"]');
      form.dispatchEvent(new Event("submit", { bubbles: true }));
    }
  }
);


