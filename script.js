document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle?.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    menuToggle.textContent = navLinks.classList.contains("show") ? "✕" : "☰";
  });

  // Close mobile menu after selecting a link
  navLinks?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      if (menuToggle) menuToggle.textContent = "☰";
    });
  });

  // Search
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");

  searchForm?.addEventListener("submit", event => {
    event.preventDefault();
    const query = searchInput.value.trim();

    if (!query) {
      searchInput.focus();
      return;
    }

    // Demo behaviour. Connect this to your backend/search page later.
    alert(`আপনি খুঁজেছেন: ${query}`);
  });

  // Newsletter
  const newsletterForm = document.getElementById("newsletterForm");
  const emailInput = document.getElementById("emailInput");
  const newsletterMessage = document.getElementById("newsletterMessage");

  newsletterForm?.addEventListener("submit", event => {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (!email) return;

    newsletterMessage.textContent = "সফলভাবে সাবস্ক্রাইব করা হয়েছে। ধন্যবাদ!";
    emailInput.value = "";
  });

  // Back to top
  const backTop = document.getElementById("backTop");

  window.addEventListener("scroll", () => {
    backTop.style.display = window.scrollY > 450 ? "grid" : "none";
  });

  backTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Pause ticker when mouse is over it
  const ticker = document.getElementById("ticker");
  ticker?.addEventListener("mouseenter", () => {
    ticker.style.animationPlayState = "paused";
  });
  ticker?.addEventListener("mouseleave", () => {
    ticker.style.animationPlayState = "running";
  });
});
