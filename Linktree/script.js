// ==========================================
// 1. MENSAGEM DE BOAS VINDAS
// ==========================================
window.addEventListener("load", () => {
  if (!localStorage.getItem("mensagemBoasVindas")) {
    alert("Bem-vindo ao meu portfólio profissional! Explore meus projetos em automação e software.");
    localStorage.setItem("mensagemBoasVindas", "true");
  }
});

// ==========================================
// 2. INTERNACIONALIZAÇÃO (i18n)
// ==========================================
const dicionario = {
  pt: {
    nome: "Iure Isaque",
    cargo: "Desenvolvedor de Software & Automação",
    tit_sobre: "Sobre Mim",
    txt_sobre: "Apaixonado por tecnologia e em constante aprendizado. Unindo a vivência prática do chão de fábrica e a eletrotécnica com a programação, busco criar soluções inovadoras e eficientes. Estou me preparando para ingressar na engenharia (Software/Computação) e construir uma visão sistêmica entre hardware, visão computacional e back-end.",
    tit_skills: "Arsenal Tecnológico",
    tit_projetos: "Projetos em Destaque",
    txt_proj_dev: "Trabalhos de Desenvolvimento (Front-end & Back-end)",
    tit_conecte: "Conecte-se comigo"
  },
  en: {
    nome: "Iure Isaque",
    cargo: "Software & Automation Developer",
    tit_sobre: "About Me",
    txt_sobre: "Passionate about technology and constantly learning. Combining practical factory floor experience and electrotechnics with programming, I aim to create innovative and efficient solutions. Preparing for engineering, focusing on computer vision and backend.",
    tit_skills: "Tech Arsenal",
    tit_projetos: "Featured Projects",
    txt_proj_dev: "Development Works (Front-end & Back-end)",
    tit_conecte: "Connect with me"
  }
};

function mudarIdioma(lang) {
  const elementos = document.querySelectorAll('[data-i18n]');
  elementos.forEach(el => {
    const chave = el.getAttribute('data-i18n');
    if (dicionario[lang][chave]) {
      el.textContent = dicionario[lang][chave];
    }
  });
}

// ==========================================
// 3. CURSOR CUSTOMIZADO E NEON
// ==========================================
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
  if(cursor) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  }
});

// Efeito ao passar sobre itens interativos
const interativos = document.querySelectorAll('button, a, input, select');
interativos.forEach(el => {
  el.addEventListener('mouseenter', () => { if(cursor) cursor.classList.add('cursor-hover'); });
  el.addEventListener('mouseleave', () => { if(cursor) cursor.classList.remove('cursor-hover'); });
});

// ==========================================
// 4. TERMINAL INTERATIVO (Easter Egg)
// ==========================================
const btnOpenTerminal = document.getElementById('open-terminal');
const btnCloseTerminal = document.getElementById('close-terminal');
const terminalModal = document.getElementById('terminal-modal');
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');

btnOpenTerminal.addEventListener('click', () => {
  terminalModal.classList.remove('oculto');
  terminalInput.focus();
});

btnCloseTerminal.addEventListener('click', () => {
  terminalModal.classList.add('oculto');
});

terminalInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const comando = this.value.trim().toLowerCase();
    this.value = ''; // Limpa o input
    processarComando(comando);
  }
});

function processarComando(cmd) {
  let resposta = "";
  
  // Ecoa o comando na tela
  terminalOutput.innerHTML += `<p><span>$ ${cmd}</span></p>`;

  switch(cmd) {
    case 'help':
      resposta = "Comandos disponíveis: help, skills, clear, sudo, contato";
      break;
    case 'skills':
      resposta = "Iniciando varredura... [C#, Python, OpenCV, HTML/JS, SQL, CLPs, Automação]";
      break;
    case 'contato':
      resposta = "Acesse o LinkedIn ou GitHub através dos botões no painel principal.";
      break;
    case 'clear':
      terminalOutput.innerHTML = "";
      return;
    case 'sudo':
      resposta = "Permissão negada. Este incidente será reportado à segurança da rede.";
      break;
    case '':
      return;
    default:
      resposta = `Comando não encontrado: ${cmd}. Digite 'help' para ajuda.`;
  }
  
  terminalOutput.innerHTML += `<p style="color:#f0f0f0;">${resposta}</p>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight; // Desce o scroll automaticamente
}

// ==========================================
// 5. ANIMAÇÃO DE ROLAGEM (FADE IN)
// ==========================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visivel");
    }
  });
}, {
  threshold: 0.1 
});

const elementosFade = document.querySelectorAll(".fade-in");
elementosFade.forEach((el) => observer.observe(el));