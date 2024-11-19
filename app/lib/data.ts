import { formatCurrency } from './utils';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchRevenue() {
  noStore();
  try {
    // Static data for revenue
    const staticRevenue = [
      { id: '1', total_revenue: 50000 },
      { id: '2', total_revenue: 75000 },
    ];

    return staticRevenue;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestInvoices() {
  noStore();
  try {
    // Static data for latest invoices
    const staticLatestInvoices = [
      {
        id: '1',
        amount: 1000,
        name: 'John Doe',
        email: 'john.doe@example.com',
        image_url: '/images/john.jpg',
      },
      {
        id: '2',
        amount: 1500,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        image_url: '/images/jane.jpg',
      },
    ];

    // Format the amounts with `formatCurrency`
    const latestInvoices = staticLatestInvoices.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));

    return latestInvoices;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

export async function fetchCardData() {
  noStore();
  try {
    // Static data for card data
    const cardData = {
      numberOfCustomers: 50,
      numberOfInvoices: 200,
      totalPaidInvoices: formatCurrency(100000),
      totalPendingInvoices: formatCurrency(50000),
    };

    return cardData;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredInvoices(query: string, currentPage: number) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    // Static data for filtered invoices
    const staticInvoices = [
      {
        id: '1',
        amount: 1000,
        date: '2024-11-19',
        status: 'paid',
        name: 'John Doe',
        email: 'john.doe@example.com',
        image_url: '/images/john.jpg',
      },
      {
        id: '2',
        amount: 1500,
        date: '2024-11-18',
        status: 'pending',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        image_url: '/images/jane.jpg',
      },
    ];

    // Apply query filter (mocking the behavior of SQL ILIKE search)
    const filteredInvoices = staticInvoices.filter((invoice) =>
      invoice.name.toLowerCase().includes(query.toLowerCase()) ||
      invoice.email.toLowerCase().includes(query.toLowerCase()) ||
      invoice.amount.toString().includes(query) ||
      invoice.date.includes(query) ||
      invoice.status.toLowerCase().includes(query.toLowerCase())
    );

    // Pagination (mocked with static data)
    const paginatedInvoices = filteredInvoices.slice(offset, offset + ITEMS_PER_PAGE);

    return paginatedInvoices;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchInvoicesPages(query: string) {
  noStore();
  try {
    // Static data for total number of invoices
    const staticInvoices = [
      { id: '1' },
      { id: '2' },
      { id: '3' },
      { id: '4' },
      { id: '5' },
      { id: '6' },
      { id: '7' },
      { id: '8' },
    ];

    // Mocking the behavior of SQL COUNT and calculating total pages
    const filteredInvoices = staticInvoices.filter((invoice) =>
      invoice.id.toString().includes(query)
    );
    const totalPages = Math.ceil(filteredInvoices.length / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchInvoiceById(id: string) {
  noStore();
  try {
    // Static data for a specific invoice
    const staticInvoice = {
      id: '1',
      customer_id: 'c1',
      amount: 1000,
      status: 'paid',
    };

    // Return invoice data (mocking the amount conversion)
    return {
      ...staticInvoice,
      amount: staticInvoice.amount / 100, // Convert from cents to dollars
    };
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch invoice by ID.');
  }
}

export async function fetchCustomers() {
  noStore();
  try {
    // Static data for customers
    const staticCustomers = [
      { id: 'c1', name: 'John Doe' },
      { id: 'c2', name: 'Jane Smith' },
    ];

    return staticCustomers;
  } catch (err) {
    console.error('Error:', err);
    throw new Error('Failed to fetch customers.');
  }
}

export async function fetchFilteredCustomers(query: string) {
  noStore();
  try {
    // Static data for filtered customers
    const staticCustomers = [
      {
        id: 'c1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        image_url: '/images/john.jpg',
        total_invoices: 10,
        total_pending: 5000,
        total_paid: 15000,
      },
      {
        id: 'c2',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        image_url: '/images/jane.jpg',
        total_invoices: 5,
        total_pending: 2000,
        total_paid: 10000,
      },
    ];

    // Apply query filter (mocking the behavior of SQL ILIKE search)
    const filteredCustomers = staticCustomers.filter((customer) =>
      customer.name.toLowerCase().includes(query.toLowerCase()) ||
      customer.email.toLowerCase().includes(query.toLowerCase())
    );

    // Format pending and paid amounts with `formatCurrency`
    const formattedCustomers = filteredCustomers.map((customer) => ({
      ...customer,
      total_pending: formatCurrency(customer.total_pending),
      total_paid: formatCurrency(customer.total_paid),
    }));

    return formattedCustomers;
  } catch (err) {
    console.error('Error:', err);
    throw new Error('Failed to fetch filtered customers.');
  }
}

export async function getUser(email: string) {
  noStore();
  try {
    // Static data for user
    const staticUser = { email: 'admin@medibank.com', name: 'Admin User', role: 'admin' };

    return staticUser;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch user.');
  }
}
