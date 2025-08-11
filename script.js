// Mensagem inicial (apenas 1 vez por navegador)
window.addEventListener("load", () => {
  if (!localStorage.getItem("mensagemBoasVindas")) {
    alert("Bem-vindo ao meu portfólio profissional! Aqui você encontra meus projetos e formas de contato.");
    localStorage.setItem("mensagemBoasVindas", "true");
  }
});

// Alternar tema
const botaoTema = document.getElementById("temaBotao");
botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  botaoTema.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Alternar Tema"
    : "🌙 Alternar Tema";
});

// Interações com links
document.getElementById("linkGithub").addEventListener("click", () => {
  alert("Abrindo meu GitHub para você conhecer meus projetos!");
});

document.getElementById("linkLinkedin").addEventListener("click", () => {
  alert("Conecte-se comigo no LinkedIn para acompanhar meu progresso!");
});

// Efeito de fade-in ao rolar
const elementos = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;
  elementos.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});
