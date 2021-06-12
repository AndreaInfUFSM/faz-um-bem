import { AtSignIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import React from "react";
import { InputFieldProps } from "../../InputRegister";
import InputError from "../InputError";

export default function InputOrganizationTitle({
  register,
  error,
  ...props
}: InputFieldProps) {
  return (
    <>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<AtSignIcon color="gray.300" />}
        />
        <Input
          placeholder="Nome da organização"
          width="full"
          autoComplete="organization-title"
          isInvalid={!!error}
          {...register}
          {...props}
        />
      </InputGroup>

      <InputError error={error} />
    </>
  );
}