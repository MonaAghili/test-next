'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';

export type ListType = {
  num: string;
  name: string;
  email: string;
  make: { date: string };
};

export const columns: ColumnDef<ListType>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => {
          table.getAllFlatColumns().forEach((column) => {
            if (column.id) {
              console.log(
                column.id,
                data.map((row) => row[column.id as keyof ListType])
              );
            }
          });
          table.toggleAllPageRowsSelected(!!value);
        }}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => {
          console.log(row.getValue('num'));
          row.toggleSelected(!!value);
        }}
        onChange={() => console.log(row)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'num',
    header: 'شناسه',
  },
  {
    accessorKey: 'make',
    header: 'ساخت',
    cell: ({ row }) => {
      const makeDate = row.original.make.date;

      return (
        <>
          <div>ساخت</div>
          <div>{makeDate}</div>
        </>
      );
    },
  },
  {
    accessorKey: 'name',
    header: 'نام',
  },
  {
    accessorKey: 'email',
    header: 'ایمیل',
  },
];

export const data: ListType[] = [
  {
    num: '1',
    make: {
      date: '2022',
    },
    email: 'm@example.com',
    name: 'test 1',
  },
  {
    num: '2',
    make: {
      date: '2004',
    },
    email: 'm@example.com',
    name: 'test 2',
  },
  {
    num: '3',
    make: {
      date: '2004',
    },
    email: 'm@example.com',
    name: 'test 3',
  },
  {
    num: '4',
    make: {
      date: '2004',
    },
    email: 'm@example.com',
    name: 'test 4',
  },
  {
    num: '5',
    make: {
      date: '2004',
    },
    email: 'm@example.com',
    name: 'test 5',
  },
  {
    num: '6',
    make: {
      date: '2024',
    },
    name: 'test 6',
    email: 'example@gmail.com',
  },
];
