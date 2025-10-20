# StoryCast - Accessible Storytelling Microsite

## Overview

StoryCast is an accessible microsite showcasing African audio and video storytelling. Built with semantic HTML5, Sass, and vanilla JavaScript, the platform ensures WCAG 2.1 AA compliance while delivering engaging cultural content.

## Project Structure

```
storycast/
├── index.html                  # Homepage with featured stories
├── story.html                  # Spirit of the Mountain story
├── valley.html                 # Voices of the Valley story  
├── urban.html                  # Urban Echoes story
├── about.html                  # About & accessibility information
├── css/
│   └── style.css              # Compiled Sass styles
├── sass/                      # Sass source files
│   ├── main.scss
│   ├── _colors.scss           # Color tokens & variables
│   ├── _typography.scss       # Font families & scales
│   ├── _spacing.scss          # Spacing scale & utilities
│   ├── _layout.scss           # Grid & responsive utilities
│   └── _components.scss       # Component styles & container queries
├── assets/
│   ├── videos/                # Video content
│   │   ├── spirit-mountain.mp4
│   │   ├── voices-valley.mp4
│   │   └── urban-echoes.mp4
│   ├── audio/                 # Audio versions
│   │   ├── spirit-mountain-audio.mp3
│   │   ├── voices-valley-audio.mp3
│   │   └── urban-echoes-audio.mp3
│   └── transcripts/           # Accessibility transcripts
│       ├── spirit-mountain-transcript.vtt
│       ├── spirit-mountain-transcript.txt
│       ├── valley-transcript.vtt
│       ├── valley-transcript.txt
│       ├── urban-transcript.vtt
│       └── urban-transcript.txt
├── js/
│   └── script.js              # Interactive functionality
└── README.md
```

## Accessibility Checklist ✅

### Semantic Structure
- [x] **HTML5 Semantic Elements**: Proper use of `<header>`, `<main>`, `<article>`, `<section>`, `<nav>`, `<figure>`
- [x] **Heading Hierarchy**: Logical H1-H3 structure following content importance
- [x] **Landmark Roles**: `role="banner"`, `role="navigation"`, `role="main"`, `role="contentinfo"`
- [x] **ARIA Labels**: `aria-label`, `aria-current`, `aria-expanded` where needed

### Media Accessibility
- [x] **Video Captions**: WebVTT files for all video content
- [x] **Audio Transcripts**: Full text transcripts for all audio content
- [x] **Alternative Formats**: Video, audio, and text versions of all stories
- [x] **Media Controls**: Keyboard-operable video/audio players
- [x] **Figure Captions**: Descriptive `<figcaption>` for all media

### Navigation & Interaction
- [x] **Skip Links**: "Skip to main content" for screen readers
- [x] **Keyboard Navigation**: Full tab access to all interactive elements
- [x] **Focus Indicators**: Clear visible focus states meeting contrast requirements
- [x] **Logical Reading Order**: Proper DOM structure for screen readers

### Visual Design & Content
- [x] **Color Contrast**: WCAG AA compliant (4.5:1 minimum)
- [x] **Responsive Design**: Mobile-first approach with breakpoints
- [x] **Text Scalability**: Relative units (rem/em) for text resizing
- [x] **Alternative Text**: Descriptive alt text for all images
- [x] **Form Labels**: Properly associated form labels and instructions

### Technical Accessibility
- [x] **Container Queries**: Component-level responsive adaptation
- [x] **Progressive Enhancement**: Core content accessible without JavaScript
- [x] **Error Handling**: Graceful degradation for unsupported features
- [x] **Performance**: Optimized media loading and efficient CSS

## Features Implemented

### Content Features
- **3 Complete Stories**: Spirit of the Mountain, Voices of the Valley, Urban Echoes
- **Multiple Formats**: Video documentaries, audio versions, full text transcripts
- **African Focus**: Cultural content showcasing diverse African perspectives
- **Related Content**: Cross-story discovery and engagement

### Technical Features
- **Sass Architecture**: Modular partials with tokens for maintainability
- **Container Queries**: Story cards adapt based on container size
- **Responsive Grid**: CSS Grid and Flexbox layouts
- **Vanilla JavaScript**: Framework-free interactive enhancements
- **Accessible Media Players**: Custom controls with keyboard support

### Accessibility Features
- **WCAG 2.1 AA Compliance**: Meets all level AA success criteria
- **Screen Reader Optimized**: Tested with NVDA and VoiceOver
- **Keyboard Navigation**: Full functionality without mouse
- **Multiple Consumption Methods**: Adapts to user preferences and abilities

## Running Locally

### Prerequisites
- A local web server (Python, Node.js, or any static file server)
- Modern web browser with JavaScript enabled

### Quick Start

**Option 1: Python Simple Server**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2: Node.js http-server**
```bash
# Install http-server globally
npm install -g http-server

# Serve the project
http-server -p 8000
```

**Option 3: PHP Built-in Server**
```bash
php -S localhost:8000
```

**Option 4: Direct File Access**
- Open `index.html` directly in a browser (some features may not work due to CORS)

### Access the Site
Once running, open your browser and navigate to:
```
http://localhost:8000
```

### Sass Compilation (Development)
If modifying Sass files, compile with:
```bash
# Watch for changes
sass --watch sass:css

# One-time compilation
sass sass/main.scss css/style.css
```

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Technologies Used
- **HTML5**: Semantic markup with accessibility features
- **Sass**: CSS preprocessor with modular architecture
- **Vanilla JavaScript**: Lightweight interactivity
- **CSS Grid & Flexbox**: Modern layout techniques
- **Container Queries**: Component-level responsive design

## Content Sources
All video and audio content features African storytelling:
- "Spirit of the Mountain": African mountain peaks documentary
- "Voices of the Valley": Ethiopian highlands exploration
- "Urban Echoes": African cities cultural showcase

---
