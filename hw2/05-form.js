// Listen for when the entire document has been loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Access the student form and modal element from the document
    const registrationForm = document.getElementById('studentForm');
    const infoModalElement = document.getElementById('formModal');
    const infoModal = new bootstrap.Modal(infoModalElement);
  
    // Function to retrieve and return data from the form fields
    const extractFormData = () => ({
      studentName: document.getElementById('name').value,
      studentEmail: document.getElementById('email').value,
      registrationStatus: document.getElementById('registrationStatus').value,
      hasTakenPL: document.getElementById('PL').checked,  // Programming Languages
      hasTakenOS: document.getElementById('OS').checked,  // Operating Systems
      hasTakenFS: document.getElementById('FS').checked,  // Full Stack Development
      additionalNotes: document.getElementById('additionalNotes').value
    });
  
    // Function to populate and show the modal with the form data
    const showDataModal = (studentData) => {
      const modalContent = document.getElementById('modal-body');
      modalContent.innerHTML = `
        <p><strong>Full Name:</strong> ${studentData.studentName}</p>
        <p><strong>Email:</strong> ${studentData.studentEmail}</p>
        <p><strong>Registration Status:</strong> ${studentData.registrationStatus}</p>
        <p><strong>Taken Programming Languages?</strong> ${studentData.hasTakenPL ? 'Yes' : 'No'}</p>
        <p><strong>Taken Operating Systems?</strong> ${studentData.hasTakenOS ? 'Yes' : 'No'}</p>
        <p><strong>Taken Full Stack Web Development?</strong> ${studentData.hasTakenFS ? 'Yes' : 'No'}</p>
        <p><strong>Additional Notes:</strong> ${studentData.additionalNotes}</p>
      `;
      infoModal.show();
    };
  
    // Handle form submission events
    const handleFormSubmit = (event) => {
      event.preventDefault();  // Prevent the default form submission behavior
      const formData = extractFormData();  // Extract data from the form
      showDataModal(formData);  // Display the modal with the extracted data
    };
  
    // Add an event listener for form submission
    registrationForm.addEventListener('submit', handleFormSubmit);
  
    // Function to reset the form fields
    const resetFormFields = () => {
      registrationForm.reset();
    };
  
    // Add event listeners for reset and modal close buttons
    document.getElementById('resetButton').addEventListener('click', resetFormFields);
    document.getElementById('closeModalButton').addEventListener('click', () => {
      infoModal.hide();
    });
  });
  