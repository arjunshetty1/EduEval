# EduEval: AI-Powered Student Answer Sheet Evaluation and Grading Platform

EduEval is an innovative platform that leverages the power of Artificial Intelligence (AI) to automate the evaluation and grading process of student answer sheets. By combining Google's Cloud Vision Optical Character Recognition (OCR) technology and custom-built Machine Learning (ML) models, EduEval streamlines the grading process, reducing the time and effort required by educators.

## Features

- **Optical Character Recognition (OCR)**: EduEval utilizes Google's Cloud Vision OCR to accurately extract text from scanned or photographed answer sheets, ensuring reliable data input for the grading process.

- **Custom ML Models**: Tailored ML models are employed to analyze the extracted text and grade the answer sheets based on predetermined criteria, providing accurate and consistent scoring.

- **Web-based Interface**: EduEval offers a user-friendly web interface built with Next.js and React, allowing educators to upload answer sheets, monitor the grading process, and access detailed reports and analytics.

- **Scalable Architecture**: The platform is designed with a scalable architecture, utilizing Node.js and Express.js on the backend, enabling efficient handling of large volumes of answer sheets and seamless integration with external services.

- **Python Flask Server**: A dedicated Python Flask server is responsible for managing the ML models, ensuring efficient and reliable grading operations.

## Getting Started

To set up and run EduEval locally, follow these steps:

1. Clone the repository: `git clone https://github.com/arjunshetty1/EduEval.git`
2. Install dependencies:
  - Web Frontend: `cd Client && npm install`
  - Backend: `cd Server && npm install`
  - Python Server: `cd PyServer && pip install -r requirements.txt`
3. Configure environment variables:
  - Set up Google Cloud Vision API credentials
  - Configure database connection settings
4. Start the development servers:
  - Web Frontend: `npm run dev`
  - Backend: `npx nodemon `
  - Python Server: `python app.py`
5. Access the web interface at `http://localhost:3000`

## Contributing

We welcome contributions from the community! If you'd like to contribute to EduEval, please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add your commit message'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

## Acknowledgments

- Google Cloud Vision OCR
- Tailwind CSS
- Next.js
- React
- Node.js
- Express.js
- Python Flask
- ML model libraries 
