export function VehiclesTable() {
  return (
    <table className="w-full rounded-lg border-stone-300 text-sm">
      <thead className="text-left text-[13px] text-stone-800">
        <tr className="border-b border-stone-300">
          <th className="px-6 py-1.5 font-semibold"> - </th>
          <th className="px-6 py-1.5 font-semibold">N°</th>
          <th className="px-6 py-1.5 font-semibold">Placa</th>
          <th className="px-6 py-1.5 font-semibold">Dueño</th>
          <th className="px-6 py-1.5 font-semibold">Estado</th>
          <th className="px-6 py-1.5 font-semibold">Registrado en</th>
        </tr>
      </thead>
      <tbody className="bg-white">
        <tr className="border-b border-stone-200 bg-white hover:bg-stone-100">
          <td className="px-6 py-4 ">A </td>
          <td className="px-6 py-4 ">1 </td>
          <td className="px-6 py-4 ">3426PAL </td>
          <td className="px-6 py-4 ">Roberto Juan </td>
          <td className="px-6 py-4 ">Activo </td>
          <td className="px-6 py-4 ">02/02/2024 </td>
        </tr>
        <tr className="border-b border-stone-200 bg-white hover:bg-stone-100">
          <td className="px-6 py-4 ">B </td>
          <td className="px-6 py-4 ">2 </td>
          <td className="px-6 py-4 ">6235XLS </td>
          <td className="px-6 py-4 ">Pedro Polaco </td>
          <td className="px-6 py-4 ">Activo </td>
          <td className="px-6 py-4 ">15/05/2023 </td>
        </tr>
        <tr className="border-stone-200 bg-white hover:bg-stone-100">
          <td className="px-6 py-4 ">0 </td>
          <td className="px-6 py-4 ">1 </td>
          <td className="px-6 py-4 ">4390MIR </td>
          <td className="px-6 py-4 ">Perez Mares </td>
          <td className="px-6 py-4 ">Activo </td>
          <td className="px-6 py-4 ">18/02/2023 </td>
        </tr>
      </tbody>
    </table>
  );
}
