import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";

import * as S from "./styles";
import { useParams, useHistory } from "react-router-dom";
import api from "../../../Services/api";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validation from "./Validation";

function CreateAndEdit() {
  const { id } = useParams();
  const { push } = useHistory();
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: "",
      Amount:"",
      Date: "",
    },
    resolver: yupResolver(validation),
  });

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const { data } = await api.get(`/Produto/${id}`);

      if (data) reset(data);

      setLoading(false);
    };

    if (id) loadProducts();
  }, [id, reset]);

  const submit = async ({ Name, Amount, Date }) => {
    try {
      setLoading(true);
      const { data } = await api.post("/Produto", {
        Name,
        Amount,
        Date,
        id: id ?? "",
      });
      push(`/produtos/editar/${data.id}`);
      setLoading(false);
    } catch (error) {
      console.log("🚀 ~ file: index.js ~ line 15 ~ submit ~ error", error);
    }
  };

  return (
    <S.CreateContainer onSubmit={handleSubmit(submit)}>
      <S.Section>
        <S.Title>{id ? "Alterar" : "Criar"} produto</S.Title>
      </S.Section>
      {loading ? (
        "Procurando Informações um instante..."
      ) : (
        <S.Section>
          <Controller
            name="Name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Nome"
                id="outlined-size-small"
                color="primary"
                size="small"
                error={!!errors?.Name}
                helperText={errors?.Name?.message}
              />
            )}
          />

          <Controller
            name="Amount"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Quantidade"
                id="outlined-size-small"
                color="primary"
                size="small"
                error={!!errors?.Amount}
                helperText={errors?.Amount?.message}
              />
            )}
          />

          <Controller
            name="Date"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Data"
                id="outlined-size-small"
                color="primary"
                type="number"
                size="small"
                error={!!errors?.Date}
                helperText={errors?.Date?.message}
              />
            )}
          />
        </S.Section>
      )}
      <S.Section>
        <S.CustomButton variant="contained" type="submit" disabled={loading}>
          Enviar
        </S.CustomButton>
      </S.Section>
    </S.CreateContainer>
  );
}

export default CreateAndEdit;
