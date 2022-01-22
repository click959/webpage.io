const fileInput = document.getElementById("images");
fileInput.addEventListener("change", () => {
  const files = fileInput.files;
  if (files.length > 5) {
    fileInput.value = "";
    alert(`Maximum 5 files are allowed to upload.`);
  }
});
