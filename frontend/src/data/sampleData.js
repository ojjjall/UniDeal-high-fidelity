// src/data/sampleData.js — sample content for the high-fidelity prototype
export const categories = ['All', 'Textbooks', 'Electronics', 'Clothing', 'Food', 'Room', 'Services'];

export const products = [
  { id: '1', title: 'Calculus Textbook 3rd Ed.', price: 45, condition: 'Good', category: 'Textbooks',
    seller: 'Ahmad F.', rating: 4.8, location: 'KTDI',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400' },
  { id: '2', title: 'Scientific Calculator', price: 30, condition: 'Like New', category: 'Electronics',
    seller: 'Siti N.', rating: 4.9, location: 'KTHO',
    image: 'https://images.unsplash.com/photo-1574607383476-f517f260d30b?w=400' },
  { id: '3', title: 'Desk Lamp (LED)', price: 18, condition: 'Good', category: 'Room',
    seller: 'Wei L.', rating: 4.6, location: 'KTF',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400' },
  { id: '4', title: 'UTM Hoodie (M)', price: 35, condition: 'Like New', category: 'Clothing',
    seller: 'Faiz R.', rating: 4.7, location: 'KTR',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400' },
  { id: '5', title: 'Mini Fridge', price: 120, condition: 'Fair', category: 'Room',
    seller: 'Aina K.', rating: 4.5, location: 'KTC',
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400' },
  { id: '6', title: 'Wireless Mouse', price: 25, condition: 'Good', category: 'Electronics',
    seller: 'Hafiz M.', rating: 4.8, location: 'KTDI',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400' },
];

export const notifications = [
  { id: 'n1', icon: 'pricetag', title: 'Your item "Desk Lamp" was viewed 12 times', time: '10m', unread: true },
  { id: 'n2', icon: 'chatbubble-ellipses', title: 'Ahmad F. sent you a message', time: '1h', unread: true },
  { id: 'n3', icon: 'cash', title: 'Payment received: RM 45', time: '3h', unread: false },
  { id: 'n4', icon: 'shield-checkmark', title: 'Your student identity was verified', time: '1d', unread: false },
  { id: 'n5', icon: 'star', title: 'Siti N. left you a 5-star review', time: '2d', unread: false },
];

export const walletTx = [
  { id: 'w1', type: 'in', label: 'Sale: Calculus Textbook', amount: 45, date: 'Jun 20' },
  { id: 'w2', type: 'out', label: 'Top Up', amount: 50, date: 'Jun 18' },
  { id: 'w3', type: 'in', label: 'Sale: Wireless Mouse', amount: 25, date: 'Jun 15' },
  { id: 'w4', type: 'out', label: 'Purchase: Desk Lamp', amount: 18, date: 'Jun 12' },
];
