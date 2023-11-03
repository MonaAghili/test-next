import { ListType, columns } from './columns';
import { DataTable } from '@/components/data-table';

async function getList(): Promise<ListType[]> {
  const res = await fetch(
    'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users'
  );
  const data = await res.json();
  return data;
}

export default async function Page() {
  const data = await getList();

  return (
    <section className="py-24" dir='rtl'>
      <div className="container">
        <h1 className="mb-6 text-3xl font-bold">لیست یوزر ها</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
