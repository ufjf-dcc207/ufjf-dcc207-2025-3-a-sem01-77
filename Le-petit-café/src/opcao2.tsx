import "./card.css";

interface opcao2Props {
  icone?: string;
  nome?: string;
  ingredientes?: string[];
  preco?: string;
}

export default function Opcao2({
   icone="🥐",
   nome = "Aurore Parisienne",
   ingredientes = ["Farinha de trigo", "Água", "Fermento", "Sal"],
   preco = "R$ 5,00",
  }: opcao2Props) {
  return (
    <div className="card-produto">
      <div>{icone}</div>
      <div>{nome}</div>
      <div>{ingredientes.join(", ")}</div>
      <div>{preco}</div>
    </div>

  );
}