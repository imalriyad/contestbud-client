import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import swal from "sweetalert";
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const axiosSecure = useAxiosSecure();
  const joingContest = useLoaderData();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();
  const price = joingContest.fee;
  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure, price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    // add payment method intance
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error from intance]", error);
      setError(error);
    } else {
      console.log("[PaymentMethod from intance]", paymentMethod);
      setError("");
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    } else {
      if (paymentIntent.status === "succeeded") {
        const payment = {
          name: user?.displayName,
          email: user?.email,
          date: new Date(),
          transactonId: paymentIntent.id,
          price: price,
        };
        const res = await axiosSecure.post("/payment", payment);
        if (res.data.insertedId) {
          console.log(res);
          axiosSecure
            .patch(`/participants/${joingContest._id}`, joingContest)
            .then((res) => {
              console.log(res);
              if (res.data.message === 'Participants field updated successfully') {
                swal("Congrats", "Payment Successful and Registartion Done for this Contest!", "success");

              }
            });
        }
      }
    }
  };

  return (
    <div className="mx-auto py-14 max-w-xl md:px-10 px-4">
      <h1 className="md:text-4xl mb-16 text-center text-2xl">Cheakout Here</h1>
      <form className="md:border md:p-10" onSubmit={handleSubmit}>
        <CardElement
          className="pb-10"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <button
          type="submit"
          className="btn btn-info  w-full"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500 pt-3">{error.message}</p>
    </div>
  );
};

export default CheckoutForm;
