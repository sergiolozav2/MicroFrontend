export function SearchRoutesTab() {
  return (
    <div
      className="flex flex-col gap-3 bg-stone-600 px-6 py-4"
      style={{
        background:
          "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
      }}
    >
      <input
        className="rounded-md px-2.5 py-1.5 outline-none"
        placeholder="Elige un punto de inicio"
      />
      <input
        className="rounded-md px-2.5 py-1.5 outline-none"
        placeholder="Elige un destino"
      />
    </div>
  );
}
