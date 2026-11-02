// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Close the mobile menu after picking a link
document.querySelectorAll(".nav-links a").forEach((a) =>
  a.addEventListener("click", () => {
    document.getElementById("menu-toggle").checked = false;
  })
);

// Pricing buttons preselect the plan in the contact form
const planSelect = document.getElementById("plan-select");
document.querySelectorAll("[data-plan]").forEach((btn) =>
  btn.addEventListener("click", () => {
    planSelect.value = btn.dataset.plan;
  })
);

// Contact form opens the visitor's email app with the details filled in
const CONTACT_EMAIL = "contact@adsmanagementpro.com";
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const subject = `Ads management enquiry: ${f.get("plan")}`;
  const body = [
    `Name: ${f.get("name")}`,
    `Email: ${f.get("email")}`,
    `Plan: ${f.get("plan")}`,
    "",
    f.get("message") || "",
  ].join("\n");
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
