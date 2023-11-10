import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { Button } from "@nextui-org/button";
import { Controller, useForm } from "react-hook-form";
import { currencyOptions } from "./constants";

export interface PaymentDialogBoxProps {
  isOpen: boolean;
  onClose: () => any;
}

interface PaymentForm {
  toPerson: string;
  currency: string;
  amount: string;
  description?: string;
}

const PaymentDialogBox = ({ isOpen, onClose }: PaymentDialogBoxProps) => {
  const {
    watch,
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { isValid },
  } = useForm<PaymentForm>({
    mode: "onChange",
    defaultValues: {
      toPerson: "",
      currency: "INR",
      amount: "",
      description: "",
    },
  });

  const selectedCurrency = watch("currency");

  const onSubmit = (data: PaymentForm) => {
    console.log(data);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isDismissable={false}>
      <ModalContent className="px-2">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <ModalHeader className="flex flex-col">Make payment</ModalHeader>
          <ModalBody className="flex flex-col gap-6">
            <Controller
              control={control}
              name="toPerson"
              rules={{
                required: "Please enter Recipient email address",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field, fieldState: { invalid, error } }) => (
                <Input
                  isRequired
                  radius="sm"
                  type="email"
                  label="To"
                  placeholder="Recipient email address"
                  isInvalid={invalid}
                  name={field.name}
                  value={field.value}
                  onValueChange={field.onChange}
                  errorMessage={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="currency"
              rules={{
                required: "Please enter currency",
              }}
              render={({ field, fieldState: { invalid, error } }) => (
                <Select
                  radius="sm"
                  isRequired
                  label="Currency"
                  name={field.name}
                  selectedKeys={[field.value]}
                  onChange={field.onChange}
                  isInvalid={invalid}
                  errorMessage={error?.message}
                  popoverProps={{ radius: "sm" }}
                >
                  {currencyOptions.map((currency) => (
                    <SelectItem key={currency.value} value={currency.value}>
                      {currency.label}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />

            <Controller
              control={control}
              name="amount"
              rules={{
                required: "Please enter amount.",
                min: { value: 0, message: "Invalid amount entered" },
              }}
              render={({ field, fieldState: { invalid, error } }) => (
                <Input
                  isRequired
                  radius="sm"
                  type="number"
                  placeholder="0.00"
                  label="Amount"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">
                        {selectedCurrency === "USD" ? "$" : "₹"}
                      </span>
                    </div>
                  }
                  name={field.name}
                  value={field.value}
                  onValueChange={field.onChange}
                  isInvalid={invalid}
                  errorMessage={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="description"
              render={({ field }) => (
                <Textarea
                  radius="sm"
                  label="Description"
                  placeholder="Description"
                  name={field.name}
                  value={field.value}
                  onValueChange={field.onChange}
                />
              )}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Cancel
            </Button>
            <Button type="submit" color="primary" isDisabled={!isValid}>
              Checkout
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default PaymentDialogBox;
