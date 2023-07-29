function convertToPNG() {
  const input = document.getElementById('imageInput');
  if (!input.files || input.files.length === 0) {
    alert('Please select a JPG image to convert.');
    return;
  }

  const file = input.files[0];
  if (!file.type.match('image/jpeg')) {
    alert('Please select a JPG image.');
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const img = new Image();
    img.onload = function () {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      const pngData = canvas.toDataURL('image/png');
      const downloadLink = document.getElementById('downloadLink');
      downloadLink.href = pngData;
      downloadLink.download = file.name.replace('.jpg', '.png');
      downloadLink.style.display = 'block';
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}
function handleImageChange() {
  const input = document.getElementById('imageInput');
  if (!input.files || input.files.length === 0) {
    hidePreview();
    return;
  }

  const file = input.files[0];
  if (!file.type.match('image/jpeg')) {
    alert('Please select a JPG image.');
    hidePreview();
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const previewImg = document.getElementById('previewImg');
    previewImg.src = e.target.result;
    showPreview();
    const convertBtn = document.getElementById('convertBtn');
    convertBtn.style.display = 'block';
  };
  reader.readAsDataURL(file);
}

function hidePreview() {
  const imagePreview = document.getElementById('imagePreview');
  imagePreview.style.display = 'none';
  const convertBtn = document.getElementById('convertBtn');
  convertBtn.style.display = 'none';
}

function showPreview() {
  const imagePreview = document.getElementById('imagePreview');
  imagePreview.style.display = 'block';
}

function convertToPNG() {
  // The conversion code remains unchanged...
  // (As provided in the previous response)
}
function convertToPNG() {
  const input = document.getElementById('imageInput');
  if (!input.files || input.files.length === 0) {
    alert('Please select a JPG image to convert.');
    return;
  }

  const file = input.files[0];
  if (!file.type.match('image/jpeg')) {
    alert('Please select a JPG image.');
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const img = new Image();
    img.onload = function () {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      // Convert the canvas content to a PNG data URL
      const pngData = canvas.toDataURL('image/png');

      // Create a temporary anchor element to initiate the download
      const downloadLink = document.createElement('a');
      downloadLink.href = pngData;
      downloadLink.download = file.name.replace('.jpg', '.png');
      downloadLink.style.display = 'none';
      document.body.appendChild(downloadLink);

      // Trigger the download
      downloadLink.click();

      // Clean up
      document.body.removeChild(downloadLink);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}
// Add the login and signup functions
function login() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  // Implement your login logic here and handle the response from the backend.
  // For example, you can make an API call to the backend to check the login credentials.
}

function signup() {
  const username = document.getElementById('signupUsername').value;
  const password = document.getElementById('signupPassword').value;
  // Implement your sign-up logic here and handle the response from the backend.
  // For example, you can make an API call to the backend to create a new user account.
}

// Toggle between Login and Sign Up forms
function toggleForm() {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const toggleText = document.getElementById('toggleText');

  if (loginForm.style.display === 'none') {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
    toggleText.innerHTML = "Don't have an account? <a href='#' onclick='toggleForm()'>Sign Up</a>";
  } else {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
    toggleText.innerHTML = "Already have an account? <a href='#' onclick='toggleForm()'>Login</a>";
  }
}
function showModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('show');
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('show');
}

// Rest of the code remains unchanged...



// Automatically preview image when it's selected
document.getElementById('imageInput').addEventListener('change', handleImageChange);


