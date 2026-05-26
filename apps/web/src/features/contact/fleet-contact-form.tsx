"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui";
import { Field } from "@/components/ui/field";

const fields = [
  { label: "Nome completo", name: "nome", type: "text" },
  { label: "Empresa", name: "empresa", type: "text" },
  { label: "Telefone(Whatsapp)", name: "telefone", type: "tel" },
  { label: "Email", name: "email", type: "email" },
  { label: "Cidade/Estado de operação", name: "localOperacao", type: "text" },
  {
    label: "Quantidade de Veículos na frota",
    name: "quantidadeVeiculos",
    type: "text"
  },
  { label: "Tipo de Operação", name: "tipoOperacao", type: "text" }
];

export function FleetContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    });

    if (!response.ok) {
      setStatus("error");
      setMessage("Revise os dados e tente novamente.");
      return;
    }

    form.reset();
    setStatus("success");
    setMessage("Cadastro recebido com sucesso.");
  }

  return (
    <form className="fleet-form" onSubmit={handleSubmit}>
      <h2>FAÇA SEU CADASTRO</h2>
      <div className="fleet-form__fields">
        {fields.map((field) => (
          <Field
            autoComplete="off"
            key={field.name}
            label={field.label}
            name={field.name}
            required
            type={field.type}
          />
        ))}
      </div>
      <Button disabled={status === "sending"} type="submit">
        {status === "sending"
          ? "ENVIANDO..."
          : "QUERO REDUZIR MEU CUSTO DE COMBUSTÍVEL"}
      </Button>
      {message ? (
        <p className={`fleet-form__message fleet-form__message--${status}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
