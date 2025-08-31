# ✨ Social Media Post Generator

A powerful AI-driven tool that transforms any topic into engaging social media content for LinkedIn, Twitter, and Instagram. The app researches your topic using web search and generates platform-optimized posts using Google's Gemini AI.

## 🌟 Live Demo

- **Frontend**: [https://cheerful-khapse-605f71.netlify.app/](https://cheerful-khapse-605f71.netlify.app/)
- **Backend API**: [https://ai-post-generator-agent.onrender.com](https://ai-post-generator-agent.onrender.com)

## ✨ Features

- **AI-Powered Research**: Automatically searches the web for latest information about your topic
- **Multi-Platform Content**: Generates optimized posts for LinkedIn, Twitter, and Instagram
- **Smart Summarization**: Creates concise research summaries before generating posts
- **Platform-Specific Optimization**: 
  - LinkedIn: Professional and informative tone
  - Twitter: Under 280 characters, punchy and engaging
  - Instagram: Friendly tone with emojis
- **Beautiful UI**: Modern glassmorphism design with smooth animations
- **One-Click Copy**: Easy clipboard functionality for all generated posts
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

### Frontend
- **HTML5** with modern semantic structure
- **CSS3** with advanced animations and glassmorphism effects
- **Vanilla JavaScript** for interactive functionality
- **Responsive Design** with mobile-first approach

### Backend
- **Node.js** with Express.js framework
- **Google Gemini AI API** for content generation
- **Tavily Search API** for web research
- **CORS** enabled for cross-origin requests

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Google Gemini API key
- Tavily Search API key

### Environment Variables
Create a `.env` file in your backend directory:

```env
GOOGLE_API_KEY=your_google_gemini_api_key_here
TAVILY_API_KEY=your_tavily_search_api_key_here
PORT=3000
```

### Backend Setup

1. Clone the repository:
```bash
git clone https://github.com/Jitugandhare/Ai-Post-Generator-Agent.git
cd Ai-Post-Generator-Agent/agent
```

2. Install dependencies:
```bash
npm install
```

3. Required packages:
```bash
npm install express axios body-parser cors dotenv
```

4. Start the server:
```bash
npm start
# or for development
node index.js
```

The backend will be available at `http://localhost:3000`

### Frontend Setup

1. The frontend is a single HTML file that can be opened directly in a browser
2. For development, you can use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

## 🔧 API Endpoints

### POST `/generate-posts`

Generates social media posts for a given topic.

**Request Body:**
```json
{
  "topic": "Latest AI trends"
}
```

**Response:**
```json
{
  "summary": "Research summary with key bullet points...",
  "rawPosts": {
    "linkedin": "Professional LinkedIn post content...",
    "twitter": "Engaging Twitter post content...",
    "instagram": "Fun Instagram caption with emojis..."
  },
  "polishedPosts": "Refined and optimized posts..."
}
```

## 🎨 UI Features

### Design Elements
- **Glassmorphism UI** with backdrop blur effects
- **Animated particles** floating in the background
- **Platform-specific colors** for each social media card
- **Smooth hover effects** and micro-interactions
- **Loading states** with spinner animations
- **Error handling** with user-friendly messages

### Interactive Features
- **Auto-focus** on topic input field
- **Enter key support** for quick post generation
- **Copy to clipboard** functionality with visual feedback
- **Responsive grid layout** that adapts to screen size

## 🔄 How It Works

1. **Input**: User enters a topic they want to create posts about
2. **Research**: Backend searches the web using Tavily API for latest information
3. **Summarization**: Google Gemini AI creates a concise summary of findings
4. **Generation**: AI generates platform-specific posts based on the research
5. **Polish**: Posts are refined to match each platform's optimal tone and format
6. **Display**: Frontend shows the research summary and all generated posts
7. **Copy**: Users can easily copy posts to their clipboard for immediate use

## 🔑 API Keys Setup

### Google Gemini API Key
1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create a new API key
3. Add it to your `.env` file as `GOOGLE_API_KEY`

### Tavily Search API Key
1. Sign up at [Tavily](https://tavily.com/)
2. Get your API key from the dashboard
3. Add it to your `.env` file as `TAVILY_API_KEY`

## 📱 Platform Specifications

### LinkedIn Posts
- Professional tone and language
- Informative and business-focused content
- Suitable for professional networking

### Twitter Posts
- Maximum 280 characters
- Engaging and punchy content
- Uses relevant hashtags when appropriate

### Instagram Posts
- Casual and friendly tone
- Emoji usage for visual appeal
- Engaging captions that encourage interaction

## 🚀 Deployment

### Frontend (Netlify)
1. Connect your GitHub repository to Netlify
2. Deploy the `index.html` file
3. The frontend is now live!

### Backend (Render)
1. Connect your GitHub repository to Render
2. Set up environment variables in Render dashboard
3. Deploy the Node.js application
4. Update the frontend API endpoint to your deployed backend URL

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Gemini AI for powerful content generation
- Tavily for comprehensive web search capabilities
- The open-source community for inspiration and tools

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the existing issues on GitHub
2. Create a new issue with detailed information
3. Include error messages and steps to reproduce

---

⭐ **Star this repository if you found it helpful!** ⭐