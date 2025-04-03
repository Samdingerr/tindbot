# TindBot Platform v1

# TindBot

TindBot er en AI-chatbot som bruker DeepSeek API for å svare på spørsmål relatert til Dr. Dropin-tjenester.

## Hvordan kjøre programmet lokalt

### 1. Klon repoet

Klon prosjektet til din lokale maskin:

```bash
git clone https://github.com/Samdingerr/tindbot.git
cd tindbot
2. Installer avhengigheter
Naviger til frontend (client/) og backend (server/) og installer avhengigheter.

For frontend (React):
bash
Copy
cd client
npm install
For backend (FastAPI):
bash
Copy
cd server
python3 -m venv venv
source venv/bin/activate  # På Windows: venv\Scripts\activate
pip install -r requirements.txt
3. Kjør backend
I terminalen (i server/-mappen), start FastAPI-serveren:

bash
Copy
uvicorn main:app --reload
Backend skal nå være tilgjengelig på http://localhost:8000.

4. Kjør frontend
I terminalen (i client/-mappen), start React-frontend:

bash
Copy
npm start
Frontend vil være tilgjengelig på http://localhost:3000.

5. Test boten
Gå til http://localhost:3000 i nettleseren din.

Test chatbot-widgeten ved å stille spørsmål som "Hvordan bestiller jeg en time?"

Hvordan deploye til produksjon
1. Backend (Railway)
Gå til Railway og logg inn med GitHub.

Velg "New Project" og deploy fra GitHub-repoet ditt.

Sett opp miljøvariabler (for eksempel DEEPSEEK_API_KEY) i Railway.

Etter deploy får du en URL som du kan bruke i frontend.

2. Frontend (Vercel)
Gå til Vercel og logg inn med GitHub.

Velg "New Project" og velg GitHub-repoet ditt.

Velg client/ som root directory og deploy prosjektet.

Vercel gir deg en live-URL, som du kan bruke til å teste frontend.

Teknologi
Frontend: React, TailwindCSS

Backend: FastAPI, DeepSeek API

Database: (valgfritt) ChromaDB (RAG)

Hosting: Railway (backend), Vercel (frontend)

yaml
Copy

---

### ✅ Hva du gjør nå:
1. Kopier denne teksten og lim den inn i din **`README.md`**-fil.
2. **Commit og push** endringene til GitHub.

Når dette er gjort, kan vi begynne med **deploy på Vercel**! Gi meg et **`✅`** når du er klar.



