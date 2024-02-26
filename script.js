const SaibaMais1button = document.querySelector("#SaibaMais1");
const Fechar1button = document.querySelector("#Fechar1");
const Modal1 = document.querySelector("#Modal1");

const toggleModal = () => {
  Modal1.classList.toggle("Hide");
};

[SaibaMais1button, Fechar1button].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

const SaibaMais2button = document.querySelector("#SaibaMais2");
const Fechar2button = document.querySelector("#Fechar2");
const Modal2 = document.querySelector("#Modal2");

const toggleModa2 = () => {
  Modal2.classList.toggle("Hide");
};

[SaibaMais2button, Fechar2button].forEach((el) => {
  el.addEventListener("click", () => toggleModa2());
});