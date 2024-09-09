window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var profileFundators = document.querySelector(".profile-fundators");
  var infoElements = document.querySelectorAll(".infoFundators");
  var triggerPosition = 450;
  var transitionDelay = 1200;
  var transitionDuration = 1800;

  var isTransitioning = false;

  if (scrollPosition > triggerPosition && !isTransitioning) {
    isTransitioning = true;

    setTimeout(function () {
      profileFundators.style.flexDirection = "column";
      profileFundators.style.alignItems = "flex-start";
      profileFundators.style.transition = `all ${transitionDuration}ms ease`;
      profileFundators.style.marginLeft = "36px";

      infoElements.forEach(function (info) {
        info.classList.add("show");
      });

      setTimeout(function () {
        isTransitioning = false;
      }, transitionDuration);
    }, transitionDelay);
  } else if (scrollPosition <= triggerPosition && !isTransitioning) {
    isTransitioning = true;

    setTimeout(function () {
      profileFundators.style.flexDirection = "row";
      profileFundators.style.alignItems = "center";
      profileFundators.style.transition = `all ${transitionDuration}ms ease`;
      profileFundators.style.marginLeft = "0";

      infoElements.forEach(function (info) {
        info.classList.remove("show");
      });

      setTimeout(function () {
        isTransitioning = false;
      }, transitionDuration);
    }, 0);
  }
});

document.querySelectorAll(".accordion-header").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionItem = button.parentElement;
    const accordionContent = button.nextElementSibling;
    const accordionIcon = button.querySelector(".arrow-duv");

    accordionItem.classList.toggle("active");

    if (accordionItem.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      accordionContent.style.opacity = 1;
      accordionIcon.style.transform = "rotate(180deg)";
    } else {
      accordionContent.style.maxHeight = 0;
      accordionContent.style.opacity = 0;
      accordionIcon.style.transform = "rotate(0deg)";
    }
  });

  const accordionContent = button.nextElementSibling;
  accordionContent.style.maxHeight = 0;
});

//Transições no Feed
let newIndex = 1;

const newsContent = [
  {
    imgSrc: "images/Faixa-pedestres.jpg",
    title: "Acessibilidade nas ruas",
    subTitle: "Agora com a Hi Way!",
    newP1:
      "A acessibilidade é fundamental para garantir a inclusão e a participação plena na sociedade para pessoas com deficiência visual. Recursos como textos em braile, tecnologia assistiva e design universal facilitam o acesso à informação, educação e emprego. Essas medidas promovem a independência, autonomia e igualdade de oportunidades, permitindo que indivíduos com deficiência visual desfrutem de uma vida mais inclusiva e produtiva. A acessibilidade não apenas beneficia os portadores de deficiência visual, mas também enriquece a sociedade como um todo ao promover diversidade e igualdade de acesso.",
  },
  {
    imgSrc: "images/gov-br.png",
    title: "Cadastro no gov.br",
    subTitle: "Saiba as vantagens!",
    newP1:
      "O cadastro no Governo pode trazer diversas vantagens para os nossos usuários, principalmente em termos de acesso a serviços públicos e benefícios sociais. Ao realizar o cadastro no Governo, o usuário não só se beneficia com a inclusão em programas sociais e a simplificação de processos, como também pode economizar significativamente com os descontos oferecidos, promovendo uma melhoria geral em sua qualidade de vida.",
  },
  {
    imgSrc: "images/Code-img.jpg",
    title: "Codificando novos horizontes",
    subTitle: "Foco em otimização!",
    newP1:
      "Tecnologias como leitores de tela e dispositivos hápticos desempenham um papel fundamental ao traduzir elementos visuais em informações auditivas ou táteis. Além disso, feedbacks claros e precisos são essenciais para orientar o usuário durante a interação com diferentes elementos do site. A implementação cuidadosa dessas tecnologias não apenas permite que pessoas cegas acessem conteúdos online, mas também promove uma experiência satisfatória e independente na web.",
  },
  {
    imgSrc: "images/Braile-img.jpg",
    title: "Uma nova aprendizagem",
    subTitle: "Superando os obstáculos",
    newP1:
      "A importância do Braille para pessoas cegas é imensurável. Ele oferece acesso à leitura, escrita e educação, permitindo que essas pessoas sejam independentes e participem ativamente da sociedade. Por meio do Braille, elas podem ler livros, escrever textos, acessar informações em documentos, etiquetas, placas e até mesmo na internet, garantindo assim o seu direito à informação e comunicação.",
  },
  {
    imgSrc: "images/waze-wallpaper.png",
    title: "Parcerias que movem...",
    subTitle: "Um novo olhar para a cidadania!",
    newP1:
      "A parceria com a Waze vai expandir o horizonte de todos os nossos usuários, facilitando ainda mais na locomoção dentro do espaço urbano. Agora os mesmos não apenas poderão andar pelas ruas com segurança, mas também poderão decidir aonde irão, e em qual caminho, traçando rotas para usufruirem de tudo o que a cidade tem a oferecer, reforçando ainda mais a cidadania e integração.",
  },
];

function changeNew() {
  const newImage = document.getElementById("images-feed");
  const currentImage = document.getElementById("current-image");
  const currentTitle = document.getElementById("title-large");
  const currentSubtitle = document.getElementById("subtitle");
  const currentP1 = document.getElementById("descript-feed");
  const btn = document.getElementById("nextButton");

  btn.disabled = true;

  if (newIndex === 0) {
    currentImage.src = newsContent[newsContent.length - 1].imgSrc;
  } else {
    currentImage.src = newsContent[newIndex - 1].imgSrc;
  }
  newImage.src = newsContent[newIndex].imgSrc;
  currentTitle.innerHTML = newsContent[newIndex].title;
  currentSubtitle.innerHTML = newsContent[newIndex].subTitle;
  currentP1.innerHTML = newsContent[newIndex].newP1;
  newImage.classList.add("news__content-img--in");
  currentImage.classList.add("news__content-img--out");
  currentTitle.classList.add("paragraph-animation");
  currentSubtitle.classList.add("paragraph-animation");
  currentP1.classList.add("paragraph-animation");

  setTimeout(() => {
    newImage.classList.remove("news__content-img--in");
    currentImage.classList.remove("news__content-img--out");
    currentTitle.classList.remove("paragraph-animation");
    currentSubtitle.classList.remove("paragraph-animation");
    currentP1.classList.remove("paragraph-animation");
  }, 2000);

  setTimeout(() => {
    btn.disabled = false;
    if (newsContent.length <= newIndex + 1) {
      newIndex = 0;
    } else {
      newIndex++;
    }
  }, 2000);
}

function startImage() {
  const newImage = document.getElementById("images-feed");
  const currentImage = document.getElementById("current-image");

  newImage.classList.add("news__content-img--init");
  currentImage.style.display = "none";
  setTimeout(() => {
    newImage.classList.remove("news__content-img--init");
    currentImage.style.display = "none";
  }, 2000);
}

startImage();
