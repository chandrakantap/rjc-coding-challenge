import { useModalConfig } from "@/hooks/useModalConfig";
import PaymentDialogBox from "@/components/PaymentDialogBox";

export default function HomePage() {
  const { isOpen, openModal, closeModal } = useModalConfig();
  return (
    <main className="flex min-h-screen flex-col items-center md:justify-evenly justify-between py-24 px-6">
      <div>
        <h1 className="md:text-3xl text-2xl">RJC Coding Challenge</h1>
        <p className="text-xs text-right">- by Chandrakanta Pal</p>
      </div>
      <div className="mb-32 grid text-center ">
        <button
          role="pay-button"
          className="group rounded-lg border px-5 py-4 transition-colors border-gray-300 bg-gray-200 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          onClick={openModal}
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Make Payment{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Click on the button to make payment for your cart.
          </p>
        </button>
      </div>
      <PaymentDialogBox isOpen={isOpen} onClose={closeModal} />
    </main>
  );
}
