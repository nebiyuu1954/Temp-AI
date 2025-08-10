
# Temp AI Back-End

## Installation and Setup

```bash
git clone https://github.com/nebiyuu1954/Temp-AI.git
cd Temp-AI
```

Navigate to the back-end directory:
```bash
cd back-end
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