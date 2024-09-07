document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeContent = document.getElementById('resume-content') as HTMLElement;
  
    form.addEventListener('submit', (event: Event) => {
      event.preventDefault();
  
      // Capture user input
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const phone = (document.getElementById('phone') as HTMLInputElement).value;
      const education = (document.getElementById('education') as HTMLInputElement).value;
      const skills = (document.getElementById('skills') as HTMLInputElement).value;
      const experience = (document.getElementById('experience') as HTMLInputElement).value;

      // Generate the resume using the captured data
    resumeContent.innerHTML = `
    <h3>Personal Information</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Skills</h3>
    <p>${skills}</p>

    <h3>Work Experience</h3>
    <p>${experience}</p>
  `;
  
      // Generate the resume content and make it editable
      resumeContent.innerHTML = `
        <div class="editable" id="name-display" data-type="input">${name}</div>
        <div class="editable" id="email-display" data-type="input">${email}</div>
        <div class="editable" id="phone-display" data-type="input">${phone}</div>
        <div class="editable" id="education-display" data-type="textarea">${education}</div>
        <div class="editable" id="skills-display" data-type="input">${skills}</div>
        <div class="editable" id="experience-display" data-type="textarea">${experience}</div>
      `;
  
      // Make the sections editable
      makeSectionsEditable();
    });
  
    function makeSectionsEditable() {
      const editableElements = document.querySelectorAll('.editable') as NodeListOf<HTMLElement>;
  
      editableElements.forEach((element) => {
        element.addEventListener('click', (event: Event) => {
          const target = event.target as HTMLElement;
          const currentValue = target.textContent || '';
          const inputType = target.getAttribute('data-type') || 'input';
  
          if (inputType === 'input') {
            // Create an input field for single-line content
            const input = document.createElement('input');
            input.value = currentValue;
            input.addEventListener('blur', () => updateText(target, input.value));
            input.addEventListener('keypress', (e: KeyboardEvent) => {
              if (e.key === 'Enter') {
                updateText(target, input.value);
              }
            });
  
            // Replace the current text with the input field
            target.textContent = '';
            target.appendChild(input);
            input.focus();
          } else if (inputType === 'textarea') {
            // Create a textarea for multi-line content
            const textarea = document.createElement('textarea');
            textarea.value = currentValue;
            textarea.addEventListener('blur', () => updateText(target, textarea.value));
            textarea.addEventListener('keypress', (e: KeyboardEvent) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                updateText(target, textarea.value);
              }
            });
  
            // Replace the current text with the textarea
            target.textContent = '';
            target.appendChild(textarea);
            textarea.focus();
          }
        });
      });
    }
  
    // Update the text content when editing is done
    function updateText(target: HTMLElement, newValue: string) {
      target.textContent = newValue;
    }

    // Generate the resume using the captured data

  });
