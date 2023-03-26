import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm2";
import { loadStripe } from "@stripe/stripe-js";

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // fetch("/config").then(async (r) => {
    //   const { publishableKey } = await r.json();
    // });
    setStripePromise(loadStripe("pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"));
  }, []);

  useEffect(() => {
    // fetch("/create-payment-intent", {
    //   method: "POST",
    //   body: JSON.stringify({}),
    // }).then(async (result) => {
    //   var { clientSecret } = await result.json();
    // });
    setClientSecret("pi_3Mpp1DSIa2QafZb80xfhIWVK_secret_CdHgw0b04lGivJMt6bLaNBW6e");
  }, []);

  return (
    <>
      <h1>React Stripe and the Payment Element</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;