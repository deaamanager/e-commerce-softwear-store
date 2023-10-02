import axios, { AxiosError } from "axios";

import { useMutation } from "react-query";

import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING,
} from "@paypal/react-paypal-js";
const style = { layout: "vertical" };

interface OnApproveData {
  billingToken?: string | null;
  facilitatorAccessToken: string;
  orderID: string;
  payerID?: string | null;
  paymentID?: string | null;
  subscriptionID?: string | null;
  authCode?: string | null;
}

export default function PayPalBtn() {
  const createMutation = useMutation<{ data: any }, AxiosError, any, Response>(
    (): any =>
      axios.post(`${process.env.NEXT_PUBLIC_API_URL}/paypal/createOrder`)
  );
  const captureMutation = useMutation<string, AxiosError, any, Response>(
    (data): any =>
      axios.post(`${process.env.NEXT_PUBLIC_API_URL}/paypal/captureOrder`, data)
  );
  const createPayPalOrder = async (): Promise<string> => {
    const response = await createMutation.mutateAsync({});
    return response.data.orderId;
  };

  const onApprove = async (data: OnApproveData): Promise<void> => {
    return captureMutation.mutate({ orderId: data.orderID });
  };
  return (
    <>
      {captureMutation.data && (
        <div>{JSON.stringify(captureMutation.data)}</div>
      )}

      <PayPalScriptProvider
        options={{
          clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string,
          currency: "USD",
        }}
      >
        <PayPalButtons
          style={{
            color: "gold",
            shape: "pill",
            label: "pay",
            height: 45,
          }}
          fundingSource={FUNDING.PAYPAL}
          createOrder={createPayPalOrder}
          onApprove={onApprove}
        />
      </PayPalScriptProvider>
    </>
  );
}

{
  /**
<PayPalScriptProvider
          //deferLoading={true}
          options={{
            clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string,
            currency: "PHP",
          }}
        >
          <PayPalButtons
            className=""
            style={{
              layout: "vertical",
            }}
            forceReRender={[style]}
            fundingSource={FUNDING.PAYPAL}
            createOrder={createPayPalOrder}
            onApprove={onApprove}
          />
        </PayPalScriptProvider>
      </main>
*/
}
