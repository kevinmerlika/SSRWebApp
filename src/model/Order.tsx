interface Order {
    order_number: string;
    customer_id: string;
    items: {
      product_id: string;
      quantity: number;
      price: number;
    }[];
    total_amount: number;
    order_date: Date;
    shipping_address: {
      street: string;
      city: string;
      state: string;
      postal_code: string;
      country: string;
    };
    payment_method: 'Cash' | 'Credit Card' | 'Bank Transfer';
    status: 'pending' | 'processing' | 'shipped' | 'delivered';
  }
  
  export default Order;
  