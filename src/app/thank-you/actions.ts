'use server';

import { db } from '@/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export async function getPaymentStatus({ orderId }: { orderId: string }) {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user?.id || !user?.email)
    throw new Error('You must be logged in to view this page.');

  const order = await db.order.findFirst({
    where: {
      userId: user.id,
      id: orderId
    },
    include: {
      billingAddress: true,
      configuration: true,
      shippingAddress: true,
      user: true
    }
  });

  if (!order) throw new Error('This order does not exists.');

  if (order.isPaid) return order;

  return false;
}
