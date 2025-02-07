const orderSchema = {
  name: "order",
  type: "document",
  title: "Order",
  fields: [
    {
      name: "firstName",
      type: "string",
      title: "First Name",
    },
    {
      name: "lastName",
      type: "string",
      title: "Last Name",
    },
    {
      name: "address",
      type: "string",
      title: "Address",
    },
    {
      name: "city",
      type: "string",
      title: "City",
    },
    {
      name: "state",
      type: "string",
      title: "State",
    },
    {
      name: "zip",
      type: "string",
      title: "Zip",
    },
    {
      name: "phone",
      type: "number",
      title: "Phone",
    },
    {
      name: "email",
      type: "string",
      title: "Email",
    },
    {
      name: "country",
      type: "string",
      title: "Country",
    },
    {
      name: "payment",
      type: "string",
      title: "Payment Method",
    },
    {
      name: "cartitems",
      type: "array",
      title: "Cart Items",
      of: [
        {
          type: "reference",
          to: { type: "product" },
        },
      ],
    },
    {
      name: "total",
      type: "number",
      title: "Total",
    },
    {
      name: "discount",
      type: "number",
      title: "Discount",
    },
    {
      name: "orderDate",
      type: "datetime",
      title: "Order Date",
    },
    {
      name: "status",
      type: "string",
      title: "Status",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Success", value: "success" },
          { title: "Dispatched", value: "dispatched" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
        ],
        layout: "radio",
      },
      initialValue: "pending",
    },
  ],
};

export default orderSchema;
