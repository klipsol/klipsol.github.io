import Navbar from '@/app/roi-calculator/Components/Navbar';

export default function page() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-4xl p-6 text-black">
        <h1 className="mb-4 text-2xl font-bold">Refund Policy</h1>

        <p className="mb-8">
          At Dpanda, we strive to ensure a smooth shopping experience. However,
          if you need to request a refund, the following outlines our refund
          policy:
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">
            1. General Refund Guidelines
          </h2>
          <ul className="list-inside list-disc">
            <li>
              <strong>Product Returns:</strong> You may request a refund within
              X days of receiving the item if it arrives damaged, defective, or
              significantly different from the description.
            </li>
            <li>
              <strong>Eligibility for Refunds:</strong> To be eligible, the item
              must be unused, in its original condition and packaging, with all
              accessories and manuals included.
            </li>
            <li>
              <strong>Non-Refundable Items:</strong> Certain items are not
              eligible for refunds, including:
              <ul className="list-inside list-disc">
                <li>
                  Items marked &quot;Final Sale&quot; or
                  &quot;Non-Returnable&quot;
                </li>
                <li>Customized or personalized items</li>
                <li>Perishable items (e.g., food, flowers)</li>
                <li>
                  Health and hygiene products once opened (e.g., cosmetics,
                  skincare)
                </li>
              </ul>
            </li>
            <li>
              <strong>Proof of Purchase:</strong> A receipt or proof of purchase
              is required to process a refund.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">
            2. Process for Requesting a Refund
          </h2>
          <ol className="list-inside list-decimal">
            <li>To request a refund, follow these steps:</li>
            <li>
              <strong>Contact Us:</strong> Email our customer service team at{' '}
              <a
                href="mailto:support@dpanda.in"
                className="text-blue-600 hover:underline"
              >
                support@dpanda.in
              </a>{' '}
              with details about your order and the reason for the refund
              request.
            </li>
            <li>
              <strong>Return Authorization:</strong> Our team will provide you
              with return instructions, including a return authorization number
              and shipping address.
            </li>
            <li>
              <strong>Return Shipping:</strong> Customers are responsible for
              return shipping costs unless the item is damaged or defective. Use
              a trackable shipping method for safe delivery.
            </li>
            <li>
              <strong>Inspection and Approval:</strong> Once the returned item
              is received and inspected, we will notify you via email about the
              approval or denial of your refund.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">3. Refund Methods</h2>
          <ul className="list-inside list-disc">
            <li>
              <strong>Original Payment Method:</strong> Refunds will be credited
              to the original payment method used at purchase. It may take 5–10
              business days for the refund to appear in your account, depending
              on your financial institution.
            </li>
            <li>
              <strong>Store Credit:</strong> Alternatively, refunds may be
              issued as store credit, usable for future purchases on Dpanda.
            </li>
            <li>
              <strong>Partial Refunds:</strong> Partial refunds may be granted
              if the product shows signs of use or is missing parts that were
              not caused by our error.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">4. Late or Missing Refunds</h2>
          <p>
            If you haven’t received a refund within the expected time frame:
          </p>
          <ul className="list-inside list-disc">
            <li>
              Check with Your Bank: Refunds may take time to process depending
              on your bank or card issuer.
            </li>
            <li>
              Contact Your Credit Card Company: Some financial institutions take
              longer to post refunds.
            </li>
            <li>
              If you’ve followed the above steps and still haven’t received your
              refund, contact us at{' '}
              <a
                href="mailto:support@dpanda.in"
                className="text-blue-600 hover:underline"
              >
                support@dpanda.in
              </a>
              .
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">5. Exchanges</h2>
          <p>
            We only replace items if they are defective or damaged. If you need
            to exchange a product for the same item, contact us for assistance.
            Exchanges are subject to product availability.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">
            6. Refunds for Shipping Costs
          </h2>
          <p>
            Shipping costs are non-refundable unless the item is defective,
            damaged, or there was an error in fulfilling your order.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">
            7. Refunds for Digital Goods
          </h2>
          <p>
            Refunds will not be issued for digital goods (e.g., downloads,
            subscriptions) once accessed or activated, unless there is a
            technical issue preventing the product from functioning as intended.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">8. Refunds for Gift Items</h2>
          <p>
            If you received a gift and wish to return it, store credit will be
            issued for the value of the return. A direct refund will not be
            issued to the gift giver.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">
            9. Coupons and Promotional Codes
          </h2>
          <p>
            Refunds for orders with applied coupons or discounts will reflect
            the actual amount paid after the discount. Coupons and promotional
            codes are non-refundable and cannot be reinstated.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">
            10. Exceptions and Special Conditions
          </h2>
          <p>
            <strong>Limited-Time Offers:</strong> Products sold during flash
            sales or limited-time promotions may have different return/refund
            conditions. Please check the specific product details.
          </p>
          <p>
            <strong>Refund Abuse:</strong> Customers who repeatedly abuse the
            refund policy may face restrictions, including being ineligible for
            future refunds or store credit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">11. Policy Modifications</h2>
          <p>
            We reserve the right to update this Refund Policy at any time. Any
            changes will be posted here, and continued use of our services
            indicates your acceptance of the updated policy.
          </p>
        </section>
      </div>
    </>
  );
}
