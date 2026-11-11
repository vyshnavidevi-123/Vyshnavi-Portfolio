const skills=[
["Languages",["Python","Java","TypeScript","JavaScript","SQL","C"]],
["ML / AI",["PyTorch","Transformers","Hugging Face","TensorFlow","Scikit-learn","LoRA/PEFT","FAISS","Sentence-Transformers","OCR","Pandas","NumPy"]],
["Web / Backend",["FastAPI","React","Next.js","Node.js","Express","Streamlit","Prisma","REST APIs","Tailwind CSS","Vite"]],
["Databases",["PostgreSQL","MySQL","MongoDB","SQLite","Redis","Firebase Firestore"]],
["Cloud / DevOps",["AWS","Google Cloud","Docker","Git/GitHub","Vercel","Nginx","Prometheus","Grafana","CI/CD"]],
["Core CS",["Data Structures & Algorithms","OOP","System Design","Microservices","MERN Stack"]]];
const projects=[
{t:"Document Understanding System",d:"Jul 2026",p:"4-model document AI pipeline for OCR, information extraction and forgery detection: LayoutLMv3, Donut, TrOCR and a ViT forgery classifier, with LoRA/PEFT fine-tuning and a Gradio demo.",s:["PyTorch","LayoutLMv3","Donut","TrOCR","ViT","LoRA/PEFT"],g:"https://github.com/vyshnavidevi-123/Document-Understanding-using-Vision-Language-Models"},
{t:"AI-Powered Server Monitoring Platform",d:"Apr 2026 – Jun 2026",p:"Distributed anomaly-detection platform for real-time server monitoring. Isolation Forest with auto-retraining, 7 Dockerized services on AWS EC2 behind Nginx, with Prometheus and Grafana dashboards.",s:["FastAPI","Isolation Forest","Docker","Redis","Grafana","AWS"],g:"https://github.com/Ai-Server-Moniter/AI-Server-Monitoring-Platform"},
{t:"Frenzyyy",d:"Feb 2026 – Mar 2026",p:"Real-time multiplayer party game with 7 interactive game modes, Firestore live sync and a custom heartbeat-based presence system.",s:["React 19","Firebase","Vite","Vercel"],g:"https://github.com/vyshnavidevi-123/Frenzyyy",l:"https://frenzyyy.vercel.app/"},
{t:"TaskFlow",d:"Dec 2024 – Jan 2025",p:"Full-stack task management app with a type-safe REST API, Prisma schema and migrations, optimistic UI updates and live dashboard stats.",s:["Next.js 14","TypeScript","PostgreSQL","Prisma"],g:"https://github.com/vyshnavidevi-123/Taskflow"},
{t:"Student Unified Academic Hub",d:"Sep 2024 – Nov 2024",p:"Academic management platform with a retrieval-augmented doubt assistant grounded in uploaded course PDFs, a smart scheduler and a notification center.",s:["Streamlit","SQLite","FAISS","Sentence-Transformers"],g:"https://github.com/vyshnavidevi-123/student-unified-academic-hub"},
{t:"Business Analytics Tracker",d:"Jan 2026 – Feb 2026",p:"Python analytics engine that automates profit-margin calculations, identifies best and worst months, and visualizes trends with line, bar and pie charts.",s:["Python","Pandas","Matplotlib"],g:"https://github.com/vyshnavidevi-123/business-tracker"}];
const exp=[
["Google Cloud Generative AI Virtual Intern","SmartBridge Educational Services","Jun 2026 – Aug 2026",["Hands-on practice with Google Cloud tools and Generative AI concepts through guided assignments.","Developed AI-based solutions applied to real-world scenarios."]],
["Data Science Virtual Intern","Altair–EduSkills (AICTE Virtual Internship)","Oct 2025 – Dec 2025",["Completed a 10-week Data Science Master internship with Grade O (Outstanding).","Built 5+ data apps and dashboards in Python/Pandas; automated ETL workflows, cutting manual processing time by 40%.","Delivered Power BI / Tableau dashboards for cross-functional stakeholders."]],
["MERN Full Stack Development Virtual Intern","EduSkills Foundation","Jun 2025 – Aug 2025",["Built responsive web apps and RESTful APIs on MongoDB, Express, React and Node.js.","Completed a capstone project covering full-stack development and deployment."]],
["AI-ML Virtual Intern","AICTE–EduSkills (AWS Academy)","Apr 2025 – Jun 2025",["Completed a 10-week AI-ML internship on the AWS Academy curriculum (Grade A).","Automated Python/TensorFlow data ingestion and validation workflows."]]];
const el=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;e.innerHTML=h;return e};
const chips=a=>a.map(x=>`<span>${x}</span>`).join("");
skills.forEach(([n,a])=>skillGrid.append(el("div","srow",`<h4>${n}</h4><div class="chips">${chips(a)}</div>`)));
projects.forEach(p=>projectGrid.append(el("article","proj rv",`<span class="date">${p.d}</span><h3>${p.t}</h3><p>${p.p}</p><div class="chips">${chips(p.s)}</div><div class="links">${p.l?`<a href="${p.l}" target="_blank" rel="noopener">Live Demo &#8599;</a>`:""}<a href="${p.g}" target="_blank" rel="noopener">GitHub &#8599;</a></div>`)));
exp.forEach(([t,o,d,b])=>expList.append(el("div","job rv",`<h3>${t}</h3><p class="org">${o}</p><p class="date">${d}</p><ul>${b.map(x=>`<li>${x}</li>`).join("")}</ul>`)));
yr.textContent=new Date().getFullYear();
const links=[...document.querySelectorAll(".nav nav a")],secs=links.map(a=>document.querySelector(a.hash));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("in")}),{threshold:.1});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));
addEventListener("scroll",()=>{let i=0;secs.forEach((s,k)=>{if(s.getBoundingClientRect().top<120)i=k});links.forEach((a,k)=>a.classList.toggle("on",k===i));nav.classList.remove("open")},{passive:true});
