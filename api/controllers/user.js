import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO usuarios(`nome`, `servico`, `descricao`, `fone`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.servico,
    req.body.descricao,
    req.body.fone,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário e serviço criado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE usuarios SET `nome` = ?, `servico` = ?, `descricao` = ?, `fone` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.servico,
    req.body.descricao,
    req.body.fone,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário e serviço atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário e serviço deletado com sucesso.");
  });
};
