DROP TABLE IF EXISTS public.products CASCADE;
DROP TABLE IF EXISTS public.reviews CASCADE;


CREATE TABLE 
	IF NOT EXISTS
		products(
			product_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
			name VARCHAR(255) NOT NULL,
			description VARCHAR(255) NOT NULL,
			brand VARCHAR (50) NOT NULL,
            image_url text NOT NULL,
            price numeric NOT NULL,
            category VARCHAR (50) NOT NULL,
			created_at TIMESTAMPTZ DEFAULT NOW(),
			updated_at TIMESTAMPTZ DEFAULT NOW()
	);



	 CREATE TABLE 
	IF NOT EXISTS 
		reviews(
			review_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
			comment TEXT NOT NULL,
			rate INTEGER NOT NULL,
			product_id INTEGER REFERENCES products ON DELETE CASCADE,
			created_at TIMESTAMPTZ DEFAULT NOW(),
			updated_at TIMESTAMPTZ DEFAULT NOW()
	);
  