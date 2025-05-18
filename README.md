# Portfolio Website

This is a personal portfolio website built with React. It showcases your projects, skills, resume, and provides a contact form for visitors to reach out.

## Features

- **Responsive Design:** Works on desktop and mobile devices.
- **Project Showcase:** Highlights your best work.
- **Resume Section:** Download or view your resume.
- **Contact Form:** Visitors can send you messages directly (integrated with EmailJS).
- **Navigation Bar:** Easy navigation between sections.

## Tech Stack

- [React](https://reactjs.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [React Router](https://reactrouter.com/)
- [EmailJS](https://www.emailjs.com/) (for contact form)
- [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Priyanshu1184/my_portfolio.git
   cd my_portfolio
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up EmailJS:**
   - Create an account at [EmailJS](https://www.emailjs.com/).
   - Create a service and email template.
   - Update the service ID, template ID, and user/public key in `src/components/Contact/Contact.jsx`.

4. **(Optional) Add your resume:**
   - Place your resume PDF in the appropriate folder and update the resume link in the code.

### Running Locally

```sh
npm start
```

The app will run at [http://localhost:3000](http://localhost:3000).

## Folder Structure

```
src/
  components/
    Navbar.jsx
    Contact/
      Contact.jsx
    ...
  Assets/
    logo.png
    ...
public/
  index.html
```

## Customization

- Update your personal information, projects, and resume in the respective components.
- Change styles in the CSS files as needed.

## Deployment

You can deploy this site using [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or GitHub Pages.

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Feel free to reach out if you have any questions or suggestions!**