import Link from "next/link";

const PublicKeys = () => {
  return (
    <section className="border border-sky-300 dark:border-red-900 bg-white dark:bg-zinc-950 shadow-md rounded-lg p-8 mb-6 animate-fade-in">
      <h2 className="text-2xl font-semibold text-red-800 dark:text-red-300 mb-4">
        Public Keys
      </h2>

      <h3>GPG Public Key</h3>
      <pre className="whitespace-pre-wrap text-gray-800 dark:text-gray-200">
        -----BEGIN PUBLIC KEY-----
        <br />
        <Link
          href="/keys/tda_public_gpg_key.asc"
          className="break-all text-cyan-600 cursor-pointer"
        >
          0AD355085DF79157D5CD05C3F871B76C837E1BC4...
        </Link>
        <br />
        -----END PUBLIC KEY-----
      </pre>
    </section>
  );
};

export default PublicKeys;
