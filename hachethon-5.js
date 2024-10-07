"use strict";
// Function to generate the unique URL for the resume
function generateUniqueURL1(userName) {
    const baseURL = "https://yourapp.vercel.app/resume";
    const uniqueURL = `${baseURL}/${encodeURIComponent(userName)}`;
    return uniqueURL;
}
// Form submission handler
const form1 = document.getElementById('resume-form');
const resumeLink1 = document.getElementById('resume-link');
const shareableSection1 = document.getElementById('shareable-section');
form1.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    // Generate a unique URL
    const uniqueURL = generateUniqueURL1(name);
    // Show the shareable link
    resumeLink1.href = uniqueURL;
    resumeLink1.textContent = uniqueURL;
    // Make the shareable section visible
    shareableSection1.classList.remove('hidden');
});
// Function to copy the URL to clipboard
const copyButton1 = document.getElementById('copy-link');
copyButton1.addEventListener('click', () => {
    const uniqueURL = resumeLink1.href;
    navigator.clipboard.writeText(uniqueURL)
        .then(() => {
        alert('Link copied to clipboard!');
    })
        .catch(() => {
        alert('Failed to copy link.');
    });
});
// Function to download the resume as PDF
const downloadButton1 = document.getElementById('download-resume');
downloadButton1.addEventListener('click', () => {
    var _a;
    const resumeContent = ((_a = document.getElementById('resume-content')) === null || _a === void 0 ? void 0 : _a.innerHTML) || '';
    const blob = new Blob([resumeContent], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
