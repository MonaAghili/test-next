'use client';

import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ListType = {
  id: string;
  name: string;
  email: string;
  image: string;
};

export const columns: ColumnDef<ListType>[] = [
  {
    accessorKey: 'id',
    header: 'شناسه',
  },
  {
    accessorKey: 'image',
    header: '',
    cell: ({ row }) => {
      const address = row.getValue('image') as string;
      return (
        <Image
          src={`${address}`}
          width={100}
          height={100}
          className="rounded-full"
          alt="Picture of the author"
        />
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
