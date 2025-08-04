# Portfolio Website

A modern, responsive portfolio website built with React and CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

The app will open at [http://localhost:3000](http://localhost:3000).

## 📁 File Structure

```
portfolio/
├── public/                 # Static files
│   ├── index.html         # Main HTML file
│   ├── arun.jpg          # Profile image
│   ├── project1.png      # Project screenshot
│   └── resume.pdf        # Resume file
├── src/                   # Source code
│   ├── App.js            # Main React component
│   ├── index.js          # React entry point
│   ├── styles.css        # All CSS styles
│   └── components/       # Individual React components
│       ├── Navigation.js # Navigation component
│       ├── Hero.js       # Hero section
│       ├── About.js      # About section
│       ├── Experience.js # Experience section
│       ├── Projects.js   # Projects section
│       ├── Contact.js    # Contact section
│       ├── Footer.js     # Footer component
│       └── SideElements.js # Side social links
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## ✨ Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **React Components**: Modular component-based architecture
- **CSS Variables**: Consistent theming with CSS custom properties
- **Accessibility**: ARIA labels and semantic HTML
- **Performance**: Optimized for fast loading

## 🎯 Sections

1. **Navigation**: Fixed header with smooth scrolling navigation
2. **Hero**: Introduction section with call-to-action
3. **About**: Personal information and skills
4. **Experience**: Work history with interactive tabs
5. **Projects**: Showcase of featured projects
6. **Contact**: Contact information and call-to-action
7. **Footer**: Social links and credits
8. **Side Elements**: Fixed social links and email

## 🛠️ Technologies Used

- **React 18**: Component-based UI library
- **CSS3**: Modern styling with custom properties
- **JavaScript (ES6+)**: Modern JavaScript features
- **Create React App**: Development environment

## 🎨 Customization

### Colors
Edit the CSS variables in `src/styles.css`:
```css
:root {
    --navy: #0a192f;
    --green: #64ffda;
    /* ... other colors */
}
```

### Content
Update the content in the respective component files:
- `src/components/Hero.js` - Hero section content
- `src/components/About.js` - About section and skills
- `src/components/Experience.js` - Work experience data
- `src/components/Projects.js` - Project information
- `src/components/Contact.js` - Contact information

### Images
Replace the image files in `public/`:
- `arun.jpg` - Profile picture
- `project1.png` - Project screenshots
- `resume.pdf` - Resume file

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel
1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect it's a React app

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Mahanthi Arun Kumar**
- GitHub: [@mahanthi-arun-kumar](https://github.com/mahanthi-arun-kumar)
- LinkedIn: [Mahanthi Arun Kumar](https://www.linkedin.com/in/mahanthi-arun-kumar-810722138/)
- Email: arun.kannu123@gmail.com