const form = document.getElementById("cliente-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "cliente.php");
  xhr.onload = () => {
    if (xhr.status === 200) {
      alert("Cliente cadastrado com sucesso!");
      form.reset();
    } else {
      alert("Ocorreu um erro ao cadastrar o cliente.");
    }
  };
  xhr.send(data);
});
