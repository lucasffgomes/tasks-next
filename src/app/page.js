export default function Home() {
  const tarefas = [
    { id: 1, descricao: "Estudar React", completa: false },
    { id: 2, descricao: "Fazer compras", completa: true },
    { id: 3, descricao: "Ir pra academia", completa: false },
  ];

  function Tarefa({ id, descricao }) {
    return <li key={id}>{descricao}</li>;
  }

  return (
    <ul>
      {tarefas.map((tarefa) => (
        <Tarefa key={tarefa.id} descricao={tarefa.descricao} />
      ))}
    </ul>
  );
}
