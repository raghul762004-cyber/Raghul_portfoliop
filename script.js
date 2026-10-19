const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

// Show the real profile photo if assets/profile.jpg has been added.
const profilePhoto = document.getElementById('profile-photo');
const photoPlaceholder = document.getElementById('photo-placeholder');
profilePhoto.addEventListener('load', () => {
  profilePhoto.hidden = false;
  photoPlaceholder.hidden = true;
});
profilePhoto.addEventListener('error', () => {
  profilePhoto.hidden = true;
  photoPlaceholder.hidden = false;
});

const projectData = {
  student: {
    title: 'Student Record Management System',
    description: 'Build a menu-driven Java program to store and manage student records. Start with an in-memory list, then add file storage after the basics work.',
    features: ['Add a student with ID, name, and marks', 'List and search records', 'Update or delete a record', 'Validate inputs and handle missing IDs', 'Save and load records from a file']
  },
  expense: {
    title: 'Personal Expense Tracker',
    description: 'Build a Python command-line tool that records daily expenses and reports totals by category. Begin with lists and dictionaries, then save entries to a CSV or JSON file.',
    features: ['Add expense amount, date, and category', 'Show all expenses', 'Calculate total and category summaries', 'Filter by month or category', 'Save data between sessions']
  },
  marks: {
    title: 'Student Marks Analyzer',
    description: 'Write a C program that calculates student totals, averages, and grades, then export or manually transfer sample results into Excel for charts and summaries.',
    features: ['Read marks for multiple subjects', 'Calculate total and average', 'Assign grades using clearly defined rules', 'Validate marks within the allowed range', 'Create an Excel summary with formulas and charts']
  }
};
const dialog = document.getElementById('project-dialog');
document.querySelectorAll('.project-details').forEach(button => {
  button.addEventListener('click', () => {
    const project = projectData[button.dataset.project];
    document.getElementById('dialog-title').textContent = project.title;
    document.getElementById('dialog-description').textContent = project.description;
    const list = document.getElementById('dialog-features');
    list.replaceChildren(...project.features.map(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      return li;
    }));
    dialog.showModal();
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
