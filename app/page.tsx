import { data, columns } from './columns';
import { DataTable } from '@/components/data-table';


export default async function Page() {

  return (
    <section className="py-24" dir="rtl">
      <div className="container">
        <h1 className="mb-6 text-3xl font-bold">لیست سفارش ها</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
