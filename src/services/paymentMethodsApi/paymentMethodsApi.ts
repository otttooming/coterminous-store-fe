export interface PaymentMethodsProps {
  paymentMethods: PaymentMethods;
}

export interface PaymentMethods {
  swedbank: PaymentMethod;
  seb: PaymentMethod;
}

export interface PaymentMethod {
  title: string;
}

export async function getSwedbankPaymentMethod(): Promise<PaymentMethod> {
  const paymentMethod: PaymentMethod = {
    title: "SwedBank",
  };

  return paymentMethod;
}

export async function getSebPaymentMethod(): Promise<PaymentMethod> {
  const paymentMethod: PaymentMethod = {
    title: "SEB",
  };

  return paymentMethod;
}

export async function getPaymentMethods(): Promise<PaymentMethodsProps> {
  const swedbank = await getSwedbankPaymentMethod();
  const seb = await getSebPaymentMethod();

  const paymentMethods = { swedbank, seb };

  return { paymentMethods };
}
