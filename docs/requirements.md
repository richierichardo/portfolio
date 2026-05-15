Logo & Favicon Requirements

Favicon di path: /public/assets/favicon.ico

Hero image: /public/assets/hero-img.webp

Browser tab harus menampilkan favicon dan nama website.

Hero Identity Requirements

Circular portrait image

Name, profession, tagline

GitHub with this link "https://github.com/richierichardo" + LinkedIn buttons with this link "http://www.linkedin.com/in/richie-richardo21"

Theme Toggle Requirements

Website defaults to dark mode

Light mode must:

Change background to #fff

Change text to #111

Not break existing UI

Persist mode in localStorage

Use class="dark" Tailwind mode

CV Email System Requirements

Email input box in Contact section
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=richieforwork17@gmail.com
SMTP_PASS=valw ckqw rmlj aesr
MAIL_FROM=richieforwork17@gmail.com
MAIL_FROM_NAME=Richie For Work

Validate email before sending

Backend: /api/request-cv

Rate limit: max 1 request/min, 5/day per IP/email

Email template contains:

Greeting

Link to CV at /assets/cv.pdf

Sender uses Gmail SMTP with App Password

If SMTP fails: return error message