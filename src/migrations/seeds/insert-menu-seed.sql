INSERT INTO public.menus (name, description, price, discount, image_url, category, is_available) VALUES
-- Makanan Utama --
('Nasi Goreng Spesial', 'Nasi goreng dengan telur mata sapi, ayam suwir, bakso, dan kerupuk renyah.', 45000, 0, '/images/nasi-goreng.jpg', 'Makanan Utama', true),
('Sop Buntut', 'Sop buntut sapi empuk dengan kuah kaya rempah, disajikan dengan wortel, kentang, dan emping.', 75000, 0, '/images/sop-buntut.jpg', 'Makanan Utama', true),
('Ayam Bakar Madu', 'Ayam bakar dengan olesan bumbu madu spesial, disajikan lengkap dengan nasi putih dan sambal terasi.', 55000, 0.1, '/images/ayam-bakar.jpg', 'Makanan Utama', true),
('Spaghetti Carbonara', 'Pasta spaghetti dengan saus krim, smoked beef, dan taburan keju parmesan.', 62000, 0, '/images/carbonara.jpg', 'Makanan Utama', true),

-- Cemilan --
('Kentang Goreng Truffle', 'Kentang goreng renyah yang disajikan dengan minyak truffle dan parutan keju parmesan.', 35000, 0, '/images/kentang-goreng.jpg', 'Cemilan', true),
('Tahu Cabe Garam', 'Tahu krispi yang digoreng garing lalu ditumis dengan potongan cabai, bawang putih, dan garam.', 28000, 0, '/images/tahu-cabe-garam.jpg', 'Cemilan', true),
('Chicken Wings BBQ', '6 potong sayap ayam goreng dengan balutan saus barbeque.', 42000, 0, '/images/chicken-wings.jpg', 'Cemilan', true),

-- Minuman Kopi --
('Espresso', 'Satu shot kopi pekat dan kaya rasa dari biji kopi pilihan.', 20000, 0, '/images/espresso.jpg', 'Minuman Kopi', true),
('Kopi Susu Gula Aren', 'Perpaduan sempurna antara espresso, susu segar, dan manisnya gula aren asli.', 25000, 0, '/images/kopi-susu.jpg', 'Minuman Kopi', true),
('Iced Americano', 'Espresso yang diencerkan dengan air dingin dan es batu, menyegarkan.', 22000, 0, '/images/americano.jpg', 'Minuman Kopi', true),
('Caramel Macchiato', 'Susu steamed dengan sirup vanilla, ditandai dengan espresso dan saus karamel.', 32000, 0, '/images/macchiato.jpg', 'Minuman Kopi', true),

-- Minuman Non-Kopi --
('Es Lemon Tea', 'Teh segar dengan perasan lemon asli, pilihan tepat untuk melepas dahaga.', 18000, 0, '/images/lemon-tea.jpg', 'Minuman Non-Kopi', true),
('Matcha Latte', 'Bubuk matcha kualitas premium dari Jepang yang dipadukan dengan susu segar.', 30000, 0, '/images/matcha-latte.jpg', 'Minuman Non-Kopi', true),
('Lychee Yakult Squash', 'Minuman soda segar dengan sirup leci, buah leci asli, dan Yakult.', 28000, 0, '/images/lychee-yakult.jpg', 'Minuman Non-Kopi', false),

-- Dessert --
('Pisang Goreng Keju Coklat', 'Pisang goreng renyah dengan topping keju parut melimpah dan meses coklat.', 25000, 0, '/images/pisang-goreng.jpg', 'Dessert', true),
('Brownies & Es Krim Vanilla', 'Brownies coklat hangat yang legit disajikan dengan satu scoop es krim vanilla.', 38000, 0, '/images/brownies.jpg', 'Dessert', true);