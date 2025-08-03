document.addEventListener("DOMContentLoaded", () => {
  // === AOS: Animate on Scroll ===
  AOS.init({
    once: true,
    duration: 800,
    easing: 'ease-in-out',
  });

  // === Form Validation ===
  const form = document.getElementById("inquiryForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.querySelector('input[name="name"]');
      const email = form.querySelector('input[name="email"]');
      const message = form.querySelector('textarea');

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        alert("Please fill in all fields before submitting.");
        return;
      }

      alert("✅ Thank you! Your inquiry has been received.");
      form.reset();
    });
  }

  // === Smooth scroll to contact from nav link ===
  const contactLink = document.querySelector('a[href="#contact"]');
  if (contactLink) {
    contactLink.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
  }
});
