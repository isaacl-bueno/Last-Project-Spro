import * as yup from "yup";

const requiredString = "Campo obrigatório";

const validation = yup.object().shape({
  name: yup.string().required(requiredString),
  imageUri: yup.string().required(requiredString),
  price: yup
    .number()
    .min(1, "Valor deve ser maior que 1")
    .typeError("Valor inválido")
    .required(requiredString),
});

export default validation;
