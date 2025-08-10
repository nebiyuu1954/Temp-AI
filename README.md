# Temp-AI
AI-powered Temp Agency Platform for internships in Ethiopia – Front-end (React/Vite) and Back-end (Django/MongoDB).

# Temp AI Front-End

A brief description of what this project does and who it's for

## Installation and Setup
```bash 
git clone https://github.com/nebiyuu1954/Temp-AI.git
cd Temp-AI
```
Navigate to the front-end directory:
```bash
cd front-end
```
Install dependencies:
```bash
npm install
```
Run the development server:
```bash
npm run dev
```
- Runs on http://localhost:5173
    
# Temp AI Back-End


## Installation and Setup
Navigate to the back-end directory:
```bash
cd backend
```

Create and activate a virtual environment:

```bash
python -m venv venv
.\venv\Scripts\activate  # Windows
```

Install dependencies:

```bash
pip install -r requirements.txt
```
Set up environment variables:
- Copy .env.example to .env in the root directory.
- Update .env with your MONGO_URI and SECRET_KEY.

Apply migrations:
```bash
python manage.py migrate
```
Run the development server:
```bash
python manage.py runserver
```
- Runs on http://localhost:8000
