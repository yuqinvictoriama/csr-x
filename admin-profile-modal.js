function initializeAdminProfiles() {
  const dialog = document.getElementById("admin-profile");
  const openButtons = document.querySelectorAll("[data-admin-profile-open]");
  const closeButton = dialog?.querySelector("[data-admin-profile-close]");
  const image = dialog?.querySelector("[data-profile-modal-image]");
  const name = dialog?.querySelector("[data-profile-modal-name]");
  const role = dialog?.querySelector("[data-profile-modal-role]");
  const school = dialog?.querySelector("[data-profile-modal-school]");
  const major = dialog?.querySelector("[data-profile-modal-major]");
  const since = dialog?.querySelector("[data-profile-modal-since]");
  if (!dialog || !openButtons.length || !image || !name || !role || !school || !since || typeof dialog.showModal !== "function") return;

  openButtons.forEach((openButton) => openButton.addEventListener("click", () => {
    image.src = openButton.dataset.profileImage || "";
    image.alt = openButton.dataset.profileName || "";
    name.textContent = openButton.dataset.profileName || "";
    role.textContent = openButton.dataset.profileRole || "";
    school.textContent = openButton.dataset.profileSchool || "";
    if (major) {
      major.textContent = openButton.dataset.profileMajor || "";
      major.hidden = !openButton.dataset.profileMajor;
    }
    since.textContent = `With CSR-x since ${openButton.dataset.profileSince || ""}`;
    if (!dialog.open) dialog.showModal();
    closeButton?.focus();
  }));
  closeButton?.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeAdminProfiles, { once: true });
} else {
  initializeAdminProfiles();
}
