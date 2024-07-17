'use server';

import { db } from '@/db';
import { OrderStatus } from '@prisma/client';

interface ChangeOrderStatus {
  id: string;
  newStatus: OrderStatus;
}

export async function changeOrderStatus({ id, newStatus }: ChangeOrderStatus) {
  await db.order.update({
    where: {
      id
    },
    data: {
      status: newStatus
    }
  });
}
