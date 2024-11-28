import Navbar from '@/app/roi-calculator/Components/Navbar';

export default function page() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-4xl p-6">
        <h1 className="mb-4 mt-8 text-2xl font-bold">Shipping Policy</h1>
        <section className="mb-8">
          <h2 className="text-xl font-semibold">1. Processing Time</h2>
          <p>
            Orders are processed within 2-5 business days after receiving
            payment. Orders are not processed, shipped, or delivered on weekends
            or holidays.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold">
            2. Shipping Rates and Delivery Estimates
          </h2>
          <p>Shipping: Delivery estimated within 7-10 business days.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold">
            3. Shipment Confirmation and Order Tracking
          </h2>
          <p>
            Once your order is shipped, you will receive a confirmation email
            with a tracking number to monitor your package’s status.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold">
            4. Customs, Duties, and Taxes
          </h2>
          <p>
            Dpanda is not responsible for any customs fees, duties, or taxes
            applied to your order. All additional charges incurred during
            shipping are the customer’s responsibility.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold">5. Damages</h2>
          <p>
            Dpanda is not responsible for products damaged or lost during
            shipping. If your item arrives damaged, save all packaging materials
            and report the issue to the carrier to file a claim.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold">6. International Shipping</h2>
          <p>Currently, we only ship within the United States.</p>
        </section>

        <h1 className="mb-4 mt-8 text-2xl font-bold">Return Policy</h1>
        <section className="mb-8">
          <h2 className="text-xl font-semibold">1. Return Time Frame</h2>
          <p>Returns are accepted within 7 days of purchase.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold">2. Return Conditions</h2>
          <p>
            Items must be unused and returned in their original packaging,
            including all materials such as accessories and manuals.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold">3. Non-Returnable Items</h2>
          <p>Certain products are non-returnable, including:</p>
          <ul className="list-inside list-disc">
            <li>Gift cards</li>
            <li>Downloadable software products</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold">4. Return Process</h2>
          <p>
            Contact Us: Email{' '}
            <a
              href="mailto:support@dpanda.in"
              className="text-blue-600 hover:underline"
            >
              support@dpanda.in
            </a>{' '}
            to initiate a return request.
          </p>
          <p>
            Shipping: Send the item to [Return Address], including proof of
            purchase in the return package
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold">5. Refunds</h2>
          <p>
            Once we receive the returned item and inspect it, we will notify you
            of the approval or rejection of your refund. Approved refunds will
            be processed to the original payment method within 7-10 days.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold">6. Exchanges</h2>
          <p>
            We only replace items if they are defective or damaged. If you need
            an exchange, contact us for instructions.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold">7. Return Shipping Costs</h2>
          <p>
            Customers are responsible for paying their own shipping costs for
            returning items. Shipping costs are non-refundable unless the return
            is due to damage or a product defect.
          </p>
        </section>
      </div>
    </>
  );
}
