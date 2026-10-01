/**
 * SAN Web Technology - Main JavaScript
 * Task 1: Responsive Company Web Pages
 * Features: Mobile Navigation Toggle, Client-Side Form Validation, Accessible Live Alerts
 */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* --------------------------------------------------------------------------
     1. Mobile Navigation Toggle
     -------------------------------------------------------------------------- */
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const navWrapper = document.querySelector(".nav-wrapper");
  const navLinks = document.querySelectorAll(".nav-link");

  if (hamburgerBtn && navWrapper) {
    const toggleMenu = (shouldOpen) => {
      const isOpen = shouldOpen !== undefined ? shouldOpen : !navWrapper.classList.contains("is-open");
      
      hamburgerBtn.classList.toggle("is-active", isOpen);
      navWrapper.classList.toggle("is-open", isOpen);
      document.body.classList.toggle("menu-open", isOpen);
      hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
      hamburgerBtn.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    };

    // Toggle on hamburger click
    hamburgerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close menu when clicking any nav link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navWrapper.classList.contains("is-open")) {
          toggleMenu(false);
        }
      });
    });

    // Close menu on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navWrapper.classList.contains("is-open")) {
        toggleMenu(false);
        hamburgerBtn.focus();
      }
    });

    // Close menu on click outside
    document.addEventListener("click", (e) => {
      if (
        navWrapper.classList.contains("is-open") &&
        !navWrapper.contains(e.target) &&
        !hamburgerBtn.contains(e.target)
      ) {
        toggleMenu(false);
      }
    });

    // Close menu if viewport resized to desktop width
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768 && navWrapper.classList.contains("is-open")) {
        toggleMenu(false);
      }
    });
  }

  /* --------------------------------------------------------------------------
     2. Contact Form Client-Side Validation
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");
    const formAlert = document.getElementById("form-alert");

    // Standard RFC-5322 compliant practical email regex
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

    /**
     * Show validation error for a specific input field
     */
    const setFieldError = (inputElement, errorMessage) => {
      const errorSpan = document.getElementById(`${inputElement.id}-error`);
      inputElement.classList.add("is-invalid");
      inputElement.classList.remove("is-valid");
      inputElement.setAttribute("aria-invalid", "true");

      if (errorSpan) {
        errorSpan.textContent = errorMessage;
        errorSpan.classList.add("is-visible");
      }
    };

    /**
     * Clear validation error for a specific input field
     */
    const clearFieldError = (inputElement) => {
      const errorSpan = document.getElementById(`${inputElement.id}-error`);
      inputElement.classList.remove("is-invalid");
      inputElement.classList.add("is-valid");
      inputElement.setAttribute("aria-invalid", "false");

      if (errorSpan) {
        errorSpan.textContent = "";
        errorSpan.classList.remove("is-visible");
      }
    };

    /**
     * Reset styling for an input field
     */
    const resetField = (inputElement) => {
      const errorSpan = document.getElementById(`${inputElement.id}-error`);
      inputElement.classList.remove("is-invalid", "is-valid");
      inputElement.removeAttribute("aria-invalid");

      if (errorSpan) {
        errorSpan.textContent = "";
        errorSpan.classList.remove("is-visible");
      }
    };

    /**
     * Validate Full Name
     */
    const validateName = () => {
      const value = nameInput.value.trim();
      if (!value) {
        setFieldError(nameInput, "Please enter your full name.");
        return false;
      }
      if (value.length < 2) {
        setFieldError(nameInput, "Full name must be at least 2 characters.");
        return false;
      }
      if (!/^[a-zA-Z\s.'-]+$/.test(value)) {
        setFieldError(nameInput, "Name contains invalid characters. Use letters and spaces.");
        return false;
      }
      clearFieldError(nameInput);
      return true;
    };

    /**
     * Validate Email Address
     */
    const validateEmail = () => {
      const value = emailInput.value.trim();
      if (!value) {
        setFieldError(emailInput, "Please enter your email address.");
        return false;
      }
      if (!emailRegex.test(value)) {
        setFieldError(emailInput, "Please enter a valid email address (e.g. user@example.com).");
        return false;
      }
      clearFieldError(emailInput);
      return true;
    };

    /**
     * Validate Subject
     */
    const validateSubject = () => {
      const value = subjectInput.value.trim();
      if (!value) {
        setFieldError(subjectInput, "Please enter a subject for your inquiry.");
        return false;
      }
      if (value.length < 3) {
        setFieldError(subjectInput, "Subject must be at least 3 characters.");
        return false;
      }
      clearFieldError(subjectInput);
      return true;
    };

    /**
     * Validate Message
     */
    const validateMessage = () => {
      const value = messageInput.value.trim();
      if (!value) {
        setFieldError(messageInput, "Please enter your message.");
        return false;
      }
      if (value.length < 10) {
        setFieldError(messageInput, "Message must be at least 10 characters long.");
        return false;
      }
      clearFieldError(messageInput);
      return true;
    };

    /**
     * Display a form-level notification banner
     */
    const showFormAlert = (type, title, message) => {
      if (!formAlert) return;

      formAlert.hidden = false;
      formAlert.className = `alert-banner alert-${type}`;

      const iconSvg = type === "success" 
        ? `<svg class="alert-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
           </svg>`
        : `<svg class="alert-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
           </svg>`;

      formAlert.innerHTML = `
        ${iconSvg}
        <div class="alert-text">
          <strong>${title}</strong>
          <span>${message}</span>
        </div>
      `;

      formAlert.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };

    /**
     * Clear form-level notification banner
     */
    const hideFormAlert = () => {
      if (!formAlert) return;
      formAlert.hidden = true;
      formAlert.innerHTML = "";
    };

    // Attach real-time input event listeners for responsive user feedback
    let formSubmittedOnce = false;

    [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
      input.addEventListener("input", () => {
        if (formSubmittedOnce) {
          if (input === nameInput) validateName();
          if (input === emailInput) validateEmail();
          if (input === subjectInput) validateSubject();
          if (input === messageInput) validateMessage();
        }
      });

      input.addEventListener("blur", () => {
        if (input.value.trim().length > 0) {
          if (input === nameInput) validateName();
          if (input === emailInput) validateEmail();
          if (input === subjectInput) validateSubject();
          if (input === messageInput) validateMessage();
        }
      });
    });

    // Form Submission Handler
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent standard page reload / HTTP post
      formSubmittedOnce = true;
      hideFormAlert();

      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isSubjectValid = validateSubject();
      const isMessageValid = validateMessage();

      const isFormValid = isNameValid && isEmailValid && isSubjectValid && isMessageValid;

      if (!isFormValid) {
        showFormAlert(
          "error",
          "Submission Error",
          "Please resolve the highlighted errors in the form fields before proceeding."
        );

        // Accessible auto-focus on first invalid input
        if (!isNameValid) {
          nameInput.focus();
        } else if (!isEmailValid) {
          emailInput.focus();
        } else if (!isSubjectValid) {
          subjectInput.focus();
        } else if (!isMessageValid) {
          messageInput.focus();
        }
        return;
      }

      // If all validations pass: Success scenario (Frontend-only simulation)
      const submittedName = nameInput.value.trim();
      showFormAlert(
        "success",
        "Inquiry Sent Successfully!",
        `Thank you, ${submittedName}. Your message has been received. Our team will review your inquiry and get back to you within 24 hours.`
      );

      // Reset form controls and clear validation classes
      contactForm.reset();
      formSubmittedOnce = false;
      [nameInput, emailInput, subjectInput, messageInput].forEach(resetField);
    });
  }
});
