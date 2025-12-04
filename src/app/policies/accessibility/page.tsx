import Navbar from "@/app/roi-calculator/Components/Navbar";

export default function page() {
  return (
    <>
      <Navbar customBg={null} />
      <div className="mx-auto max-w-4xl p-6 text-black">
        <h1 className="mb-4 mt-8 text-2xl font-bold">
          Accessibility Statement
        </h1>
        <p>
          BlueCurrent is committed to making our website accessible to all,
          including individuals with disabilities. If you have difficulty
          accessing any part of our website, please contact us at{" "}
          <a
            href="mailto:bluecurrentlabs@gmail.com"
            className="text-blue-600 hover:underline"
          >
            bluecurrentlabs@gmail.com
          </a>
          , and we will assist you.
        </p>
      </div>
    </>
  );
}
