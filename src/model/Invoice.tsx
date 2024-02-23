import { z } from 'zod';

// Define the schema using Zod
const orderSchema = z.object({
  order_number: z.string(),
  customer_id: z.string(),
  items: z.array(
    z.object({
      product_id: z.string(),
      quantity: z.number(),
      price: z.number(),
    })
  ),
  total_amount: z.number(),
  order_date: z.date().default(() => new Date()),
  shipping_address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    postal_code: z.string(),
    country: z.string(),
  }),
  payment_method: z.enum(['Cash', 'Credit Card', 'Bank Transfer']).default('Cash'),
  status: z.enum(['pending', 'processing', 'shipped', 'delivered']).default('pending'),
});

export default orderSchema;
